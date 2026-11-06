/**
 * Vercel Serverless Function to publish or edit a markdown article directly on GitHub.
 * 
 * Required Environment Variables in Vercel:
 * - ALLOWED_IPS (e.g. "156.196.x.x, 197.x.x.x" — restricts editing exclusively to your IP)
 * - ADMIN_PASSWORD (optional 2nd factor password)
 * - GITHUB_TOKEN (Personal Access Token with repo commit permissions)
 * - GITHUB_REPO (defaults to "Youssef-joe/My_Portfolio" or "Youssef-joe/youssef-ali-architect-developer")
 */

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Client IP Extraction
  const forwarded = req.headers['x-forwarded-for'];
  const clientIp = (forwarded 
    ? forwarded.split(',')[0].trim() 
    : req.headers['x-real-ip'] || req.socket?.remoteAddress || '127.0.0.1'
  ).replace(/^::ffff:/, '');

  // 2. IP Restriction Check
  const allowedIpsStr = process.env.ALLOWED_IPS || process.env.ADMIN_IP || '';
  if (allowedIpsStr) {
    const allowedList = allowedIpsStr.split(',').map(s => s.trim().replace(/^::ffff:/, ''));
    const isAllowed = allowedList.some(allowed => clientIp === allowed || clientIp.startsWith(allowed));
    
    if (!isAllowed) {
      console.warn(`Unauthorized IP attempt from ${clientIp}`);
      return res.status(403).json({ 
        error: `Access Denied: Your IP address (${clientIp}) is not authorized to edit or publish articles.`,
        clientIp 
      });
    }
  }

  const { password, title, description, tags, lang, body, slug, cover } = req.body;

  // 3. Password Verification (if ADMIN_PASSWORD is set)
  if (process.env.ADMIN_PASSWORD && password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized: Invalid administrative password' });
  }

  if (!title || !body || !slug) {
    return res.status(400).json({ error: 'Missing required fields: title, slug, and markdown body are required.' });
  }

  // Default to repo if not explicitly set
  const repo = process.env.GITHUB_REPO || 'Youssef-joe/My_Portfolio';
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ 
      error: 'Server configuration missing: GITHUB_TOKEN is not set in Vercel environment variables.' 
    });
  }

  // 4. Construct Markdown Frontmatter
  const tagsString = Array.isArray(tags) 
    ? `[${tags.map(t => `${t.trim()}`).join(', ')}]` 
    : `[]`;

  const dateStr = new Date().toISOString().split('T')[0];
  const coverLine = cover ? `cover: ${cover.trim()}\n` : '';

  const content = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${(description || '').replace(/"/g, '\\"')}"
date: ${dateStr}
tags: ${tagsString}
lang: ${lang || 'en'}
draft: false
${coverLine}---

${body.trim()}
`;

  const path = `src/content/articles/${slug}.md`;
  const encodedContent = Buffer.from(content).toString('base64');

  try {
    // 5. Check if file already exists in repository (for edit vs. new)
    const checkRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'Vercel-Serverless-Function'
      }
    });

    let sha = undefined;
    let isUpdate = false;
    if (checkRes.ok) {
      const fileData = await checkRes.json();
      sha = fileData.sha;
      isUpdate = true;
    }

    // 6. Commit creation or update to GitHub
    const commitMessage = isUpdate 
      ? `feat(blog): update article "${title}" via CMS Studio [IP: ${clientIp}]`
      : `feat(blog): publish new article "${title}" via CMS Studio [IP: ${clientIp}]`;

    const putRes = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Vercel-Serverless-Function'
      },
      body: JSON.stringify({
        message: commitMessage,
        content: encodedContent,
        sha: sha
      })
    });

    if (!putRes.ok) {
      const errData = await putRes.json();
      console.error('GitHub API Error:', errData);
      return res.status(putRes.status).json({ 
        error: 'Failed to commit article to GitHub', 
        details: errData.message || errData 
      });
    }

    return res.status(200).json({ 
      success: true, 
      action: isUpdate ? 'updated' : 'created',
      message: isUpdate 
        ? `Article "${title}" updated successfully! Vercel will rebuild and deploy in ~30s.`
        : `Article "${title}" published successfully! Vercel will rebuild and deploy in ~30s.`,
      slug
    });
  } catch (err) {
    console.error('Publish error:', err);
    return res.status(500).json({ error: 'Internal server error while committing to GitHub' });
  }
}
