import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { marked } from 'marked';
import SiteHeader from '../components/SiteHeader';
import { articles } from '../lib/articles';
import { contact } from '../data/site';

marked.setOptions({ gfm: true, breaks: false });

interface IpStatus {
  ip: string;
  hasIpRestriction: boolean;
  isAllowed: boolean;
  message: string;
}

export default function EditorPage() {
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [selectedSlug, setSelectedSlug] = useState<string>('');
  
  const [ipStatus, setIpStatus] = useState<IpStatus | null>(null);
  const [ipLoading, setIpLoading] = useState(true);

  const [formData, setFormData] = useState({
    password: '',
    title: '',
    slug: '',
    description: '',
    tags: '',
    lang: 'en',
    cover: '',
    body: '',
  });

  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  // 1. Check IP Authorization status on mount
  useEffect(() => {
    async function checkIp() {
      try {
        const res = await fetch('/api/auth-check');
        if (res.ok) {
          const data: IpStatus = await res.json();
          setIpStatus(data);
        }
      } catch (e) {
        console.warn('Could not reach auth-check endpoint', e);
      } finally {
        setIpLoading(false);
      }
    }
    checkIp();
  }, []);

  // 2. Handle switching to edit an existing article
  const handleSelectArticle = (slug: string) => {
    setSelectedSlug(slug);
    if (!slug) {
      setMode('create');
      setFormData({
        password: formData.password,
        title: '',
        slug: '',
        description: '',
        tags: '',
        lang: 'en',
        cover: '',
        body: '',
      });
      return;
    }

    const target = articles.find((a) => a.slug === slug);
    if (target) {
      setMode('edit');
      setFormData({
        password: formData.password,
        title: target.title,
        slug: target.slug,
        description: target.description || '',
        tags: target.tags.join(', '),
        lang: target.lang || 'en',
        cover: target.cover || '',
        body: target.body,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Auto-generate slug from title in 'create' mode if slug not manually changed
      ...(name === 'title' && mode === 'create' && !selectedSlug
        ? {
            slug: value
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, ''),
          }
        : {}),
    }));
  };

  // Quick helper to insert Markdown snippets
  const insertSnippet = (snippet: string) => {
    setFormData((prev) => ({
      ...prev,
      body: prev.body + (prev.body.endsWith('\n') ? '' : '\n\n') + snippet + '\n',
    }));
  };

  const previewHtml = useMemo(() => {
    try {
      return marked.parse(formData.body) as string;
    } catch {
      return '<p class="text-red-500">Error parsing markdown</p>';
    }
  }, [formData.body]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMsg('');

    const tagsArray = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      const res = await fetch('/api/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: formData.password,
          title: formData.title,
          slug: formData.slug,
          description: formData.description,
          tags: tagsArray,
          lang: formData.lang,
          cover: formData.cover,
          body: formData.body,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.details || 'Failed to publish/update');
      }

      setStatus('success');
      setResponseMsg(data.message || 'Operation successful!');
    } catch (err: unknown) {
      console.error(err);
      setStatus('error');
      setResponseMsg(err instanceof Error ? err.message : 'Unknown error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-main)] transition-colors duration-300">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        {/* Breadcrumb */}
        <div className="text-xs font-mono text-[var(--text-muted)] pb-3 border-b border-[var(--border-main)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-[var(--link-color)] hover:underline">
              Portal Index
            </Link>
            <span>/</span>
            <Link to="/writing" className="text-[var(--link-color)] hover:underline">
              Technical Journal
            </Link>
            <span>/</span>
            <span className="text-[var(--text-main)] font-semibold">cms_studio.exe</span>
          </div>
          <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#ea5e24] text-white">
            ACCESS RESTRICTED
          </span>
        </div>

        {/* IP Security & Verification Banner */}
        <div className="rounded-2xl border border-[var(--border-main)] bg-[var(--bg-surface)] p-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-3 border-b border-[var(--border-light)] mb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-[var(--text-main)]">
                🛡️ IP SECURITY GATEWAY:
              </span>
              {ipLoading ? (
                <span className="text-xs font-mono text-[var(--text-muted)]">Detecting IP...</span>
              ) : (
                <span className="font-mono text-xs px-2.5 py-1 bg-[var(--bg-card)] border border-[var(--border-main)] text-[var(--text-main)] font-bold rounded-lg">
                  {ipStatus?.ip || 'Unknown'}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              {ipStatus?.hasIpRestriction ? (
                ipStatus.isAllowed ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                    ● AUTHORIZED IP ACCESS
                  </span>
                ) : (
                  <span className="text-rose-600 font-bold">
                    ✕ IP NOT AUTHORIZED
                  </span>
                )
              ) : (
                <span className="text-amber-600 dark:text-amber-400 font-semibold">
                  ▲ OPEN (SET ALLOWED_IPS IN VERCEL)
                </span>
              )}
            </div>
          </div>

          <div className="text-xs text-[var(--text-sub)] space-y-1">
            <p>
              <strong>To lock editing to you alone:</strong> Add{' '}
              <code className="text-[#ea5e24] font-mono font-bold">ALLOWED_IPS={ipStatus?.ip || 'YOUR_IP'}</code>{' '}
              to your Vercel Project Environment Variables. Any request from a different IP address will be instantly rejected with 403 Forbidden.
            </p>
          </div>
        </div>

        {/* Main Editor Card */}
        <div className="rounded-3xl border border-[var(--border-main)] bg-[var(--bg-surface)] overflow-hidden shadow-xl">
          <div className="p-6 bg-[#0b3323] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="font-serif text-lg font-bold flex items-center gap-2">
              <span>✦</span>
              <span>TECHNICAL CMS STUDIO // {mode === 'create' ? 'CREATE NEW ARTICLE' : `EDIT: ${formData.slug}`}</span>
            </div>

            {/* Mode switch buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleSelectArticle('')}
                className={`btn-retro text-xs ${mode === 'create' ? 'border-[var(--accent-blue)] font-bold' : ''}`}
              >
                ➕ New Article
              </button>
            </div>
          </div>

          <div className="panel-body">
            
            {/* Choose Article to Edit Dropdown */}
            <div className="mb-6 p-3 bg-[var(--bg-subtle)] border border-[var(--border-light)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label htmlFor="selectArticle" className="text-xs font-bold font-mono text-[var(--text-main)] whitespace-nowrap">
                Select Article to Edit:
              </label>
              <select
                id="selectArticle"
                value={selectedSlug}
                onChange={(e) => handleSelectArticle(e.target.value)}
                className="w-full sm:max-w-md bg-[var(--bg-surface)] border border-[var(--border-strong)] p-1.5 text-xs text-[var(--text-main)] font-mono"
              >
                <option value="">-- [ Create New Article from Scratch ] --</option>
                {articles.map((art) => (
                  <option key={art.slug} value={art.slug}>
                    {art.slug} — {art.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[var(--text-main)] mb-1" htmlFor="title">
                    Article Title *
                  </label>
                  <input
                    required
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 text-xs bg-[var(--bg-surface)] border border-[var(--border-strong)] text-[var(--text-main)] focus:outline-none focus:border-[var(--accent-blue)]"
                    placeholder="e.g. SoldierDB: Storage Engine Internals"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[var(--text-main)] mb-1" htmlFor="slug">
                    URL Slug (filename) *
                  </label>
                  <input
                    required
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    disabled={mode === 'edit'}
                    className="w-full p-2 text-xs bg-[var(--bg-surface)] border border-[var(--border-strong)] text-[var(--text-main)] font-mono focus:outline-none focus:border-[var(--accent-blue)] disabled:opacity-60"
                    placeholder="e.g. soldierdb-storage-engine"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[var(--text-main)] mb-1" htmlFor="description">
                  Short Abstract / Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 text-xs bg-[var(--bg-surface)] border border-[var(--border-strong)] text-[var(--text-main)] focus:outline-none focus:border-[var(--accent-blue)]"
                  placeholder="Summary displayed on homepage and search index..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[var(--text-main)] mb-1" htmlFor="tags">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full p-2 text-xs bg-[var(--bg-surface)] border border-[var(--border-strong)] text-[var(--text-main)] font-mono"
                    placeholder="databases, golang, btree"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[var(--text-main)] mb-1" htmlFor="cover">
                    Schematic SVG / Cover Image (optional)
                  </label>
                  <input
                    type="text"
                    id="cover"
                    name="cover"
                    value={formData.cover}
                    onChange={handleChange}
                    className="w-full p-2 text-xs bg-[var(--bg-surface)] border border-[var(--border-strong)] text-[var(--text-main)] font-mono"
                    placeholder="/images/blog/btree-architecture.svg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[var(--text-main)] mb-1" htmlFor="lang">
                    Language
                  </label>
                  <select
                    id="lang"
                    name="lang"
                    value={formData.lang}
                    onChange={handleChange}
                    className="w-full p-2 text-xs bg-[var(--bg-surface)] border border-[var(--border-strong)] text-[var(--text-main)]"
                  >
                    <option value="en">English</option>
                    <option value="ar">العربية (Arabic)</option>
                  </select>
                </div>
              </div>

              {/* Editor & Preview Toolbar */}
              <div className="pt-2 border-t border-[var(--border-light)]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab('edit')}
                      className={`btn-retro text-xs ${activeTab === 'edit' ? 'border-[var(--accent-blue)] font-bold' : ''}`}
                    >
                      ✎ Markdown Source
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('preview')}
                      className={`btn-retro text-xs ${activeTab === 'preview' ? 'border-[var(--accent-blue)] font-bold' : ''}`}
                    >
                      👁 Live Preview
                    </button>
                  </div>

                  {/* Snippet insertion shortcuts */}
                  <div className="flex flex-wrap gap-1 text-[11px] font-mono">
                    <button
                      type="button"
                      onClick={() => insertSnippet('![Schematic Diagram](/images/blog/btree-architecture.svg)')}
                      className="btn-retro text-[10px]"
                      title="Insert Schematic Image"
                    >
                      + Image
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippet('| Metric | Target | Result |\n| :--- | :--- | :--- |\n| Latency | <200ms | 145ms |')}
                      className="btn-retro text-[10px]"
                      title="Insert Table"
                    >
                      + Table
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippet('> **Core Finding**: Description of the discovery or benchmark outcome.')}
                      className="btn-retro text-[10px]"
                      title="Insert Key Callout"
                    >
                      + Callout
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippet('```go\nfunc Example() error {\n    return nil\n}\n```')}
                      className="btn-retro text-[10px]"
                      title="Insert Code Block"
                    >
                      + Code
                    </button>
                  </div>
                </div>

                {activeTab === 'edit' ? (
                  <textarea
                    required
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    rows={18}
                    className="w-full p-3 font-mono text-xs bg-[var(--bg-surface)] border border-[var(--border-strong)] text-[var(--text-main)] focus:outline-none focus:border-[var(--accent-blue)] leading-relaxed"
                    placeholder="# Article Heading\n\nWrite your technical analysis here in Markdown..."
                  />
                ) : (
                  <div className="p-4 bg-[var(--bg-surface)] border border-[var(--border-strong)] min-h-[300px] overflow-x-auto">
                    <div
                      className="article-body prose max-w-none text-xs leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: previewHtml }}
                    />
                  </div>
                )}
              </div>

              {/* Password & Submit Section */}
              <div className="p-4 bg-[var(--bg-subtle)] border border-[var(--border-light)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-[var(--text-main)] mb-1" htmlFor="password">
                    Admin Password (Optional if authorized by IP):
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="p-1.5 text-xs bg-[var(--bg-surface)] border border-[var(--border-strong)] text-[var(--text-main)] font-mono w-64"
                    placeholder="Enter password if configured..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-retro text-xs py-2 px-6 font-bold border-[var(--accent-blue)] text-[var(--accent-blue)] hover:bg-[var(--accent-blue)] hover:text-white"
                  >
                    {status === 'loading'
                      ? 'Commiting to GitHub...'
                      : mode === 'edit'
                      ? '💾 Save & Update Article'
                      : '🚀 Publish Article to GitHub'}
                  </button>
                </div>
              </div>

              {/* Status alerts */}
              {status === 'success' && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500 text-emerald-800 dark:text-emerald-300 text-xs flex justify-between items-center">
                  <span>✔ {responseMsg}</span>
                  <Link to={`/writing/${formData.slug}`} className="font-bold underline ml-2">
                    View Published Article ↗
                  </Link>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-500 text-rose-800 dark:text-rose-300 text-xs">
                  ✕ {responseMsg}
                </div>
              )}

            </form>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center text-xs text-[var(--text-faint)] font-mono pt-2">
          <span>Author: {contact.name}</span>
          <Link to="/writing" className="hover:underline">
            ← Back to Blog Index
          </Link>
        </div>
      </main>
    </div>
  );
}
