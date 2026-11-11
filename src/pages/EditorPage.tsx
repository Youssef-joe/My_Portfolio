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

  const insertSnippet = (snippet: string) => {
    setFormData((prev) => ({
      ...prev,
      body: prev.body ? `${prev.body}\n\n${snippet}` : snippet,
    }));
  };

  // 3. Markdown Preview Renderer
  const previewHtml = useMemo(() => {
    try {
      return marked.parse(formData.body || '*Preview will appear here when you enter markdown...*') as string;
    } catch {
      return '<p class="text-rose-500">Error parsing Markdown</p>';
    }
  }, [formData.body]);

  // 4. Form Submission (calls our serverless function /api/publish)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMsg('');

    try {
      const res = await fetch('/api/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mode,
          password: formData.password,
          title: formData.title,
          slug: formData.slug,
          description: formData.description,
          tags: formData.tags.split(',').map((t) => t.trim()).filter(Boolean),
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
    <div className="bg-[#f4cb38] p-2 sm:p-4 md:p-6 lg:p-8 min-h-screen selection:bg-[#ff5500] selection:text-white transition-colors duration-300">
      
      {/* Outer Black Poster Frame */}
      <div className="bg-black text-white border-4 border-black shadow-[10px_10px_0px_0px_#000000] overflow-hidden">
        <SiteHeader />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
          
          {/* Breadcrumb with cms_studio.exe */}
          <div className="text-xs font-mono font-bold text-white/70 pb-4 border-b-2 border-white/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-[#f4cb38] hover:underline uppercase">
                INDEX
              </Link>
              <span>&gt;</span>
              <Link to="/writing" className="text-[#f4cb38] hover:underline uppercase">
                TECHNICAL JOURNAL
              </Link>
              <span>&gt;</span>
              <span className="text-white uppercase font-bold">cms_studio.exe</span>
            </div>
            <span className="px-3 py-1 bg-[#ff5500] text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_#f4cb38]">
              RESTRICTED ACCESS
            </span>
          </div>

          {/* IP Security & Verification Banner */}
          <div className="border-4 border-black bg-[#121316] p-6 shadow-[6px_6px_0px_0px_#f4cb38]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-3 border-b-2 border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-[#f4cb38] uppercase">
                  🛡️ IP SECURITY GATEWAY:
                </span>
                {ipLoading ? (
                  <span className="text-xs font-mono text-white/60">Detecting IP...</span>
                ) : (
                  <span className="font-mono text-xs px-2.5 py-1 bg-black border-2 border-white/20 text-[#f4cb38] font-bold">
                    {ipStatus?.ip || 'Unknown'}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold">
                {ipStatus?.hasIpRestriction ? (
                  ipStatus.isAllowed ? (
                    <span className="text-emerald-400 flex items-center gap-1.5 uppercase">
                      ● AUTHORIZED IP ACCESS
                    </span>
                  ) : (
                    <span className="text-[#ff4d4d] uppercase">
                      ✕ IP NOT AUTHORIZED
                    </span>
                  )
                ) : (
                  <span className="text-[#f4cb38] uppercase">
                    ▲ OPEN (SET ALLOWED_IPS IN VERCEL)
                  </span>
                )}
              </div>
            </div>

            <div className="text-xs font-grotesk text-white/70 space-y-1">
              <p>
                <strong>To lock editing to you alone:</strong> Add{' '}
                <code className="text-[#ff5500] font-mono font-bold">ALLOWED_IPS={ipStatus?.ip || 'YOUR_IP'}</code>{' '}
                to your Vercel Project Environment Variables. Any request from a different IP address will be rejected with 403 Forbidden.
              </p>
            </div>
          </div>

          {/* Main Editor Box */}
          <div className="border-4 border-black bg-[#121316] shadow-[8px_8px_0px_0px_#f4cb38] overflow-hidden">
            <div className="p-6 bg-black text-white border-b-4 border-black flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="font-display text-xl uppercase tracking-tight flex items-center gap-2 text-[#f4cb38]">
                <span>●</span>
                <span>TECHNICAL CMS STUDIO // {mode === 'create' ? 'CREATE NEW ARTICLE' : `EDIT: ${formData.slug}`}</span>
              </div>

              {/* Mode switch buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSelectArticle('')}
                  className={`px-3 py-1.5 font-mono text-xs font-bold uppercase transition-all border-2 ${
                    mode === 'create'
                      ? 'bg-[#ff5500] text-white border-black shadow-[2px_2px_0px_0px_#fff]'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  }`}
                >
                  ➕ New Article
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Choose Article to Edit Dropdown */}
              <div className="p-4 bg-black border-2 border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <label htmlFor="selectArticle" className="text-xs font-bold font-mono text-white/80 uppercase whitespace-nowrap">
                  SELECT ARTICLE TO EDIT:
                </label>
                <select
                  id="selectArticle"
                  value={selectedSlug}
                  onChange={(e) => handleSelectArticle(e.target.value)}
                  className="w-full sm:max-w-md bg-[#18191c] border-2 border-white/20 p-2 text-xs text-white font-mono focus:border-[#f4cb38] focus:outline-none"
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-white/80 uppercase mb-1" htmlFor="title">
                      Article Title *
                    </label>
                    <input
                      required
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full p-2.5 text-xs bg-black border-2 border-white/20 text-white font-grotesk focus:outline-none focus:border-[#f4cb38]"
                      placeholder="e.g. SoldierDB: Storage Engine Internals"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-white/80 uppercase mb-1" htmlFor="slug">
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
                      className="w-full p-2.5 text-xs bg-black border-2 border-white/20 text-[#f4cb38] font-mono focus:outline-none focus:border-[#f4cb38] disabled:opacity-50"
                      placeholder="e.g. soldierdb-storage-engine"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-white/80 uppercase mb-1" htmlFor="description">
                    Short Abstract / Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2.5 text-xs bg-black border-2 border-white/20 text-white font-grotesk focus:outline-none focus:border-[#f4cb38]"
                    placeholder="Summary displayed on archive and search cards..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-white/80 uppercase mb-1" htmlFor="tags">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      className="w-full p-2.5 text-xs bg-black border-2 border-white/20 text-white font-mono focus:outline-none focus:border-[#f4cb38]"
                      placeholder="databases, golang, btree"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-white/80 uppercase mb-1" htmlFor="cover">
                      Schematic SVG / Cover (optional)
                    </label>
                    <input
                      type="text"
                      id="cover"
                      name="cover"
                      value={formData.cover}
                      onChange={handleChange}
                      className="w-full p-2.5 text-xs bg-black border-2 border-white/20 text-white font-mono focus:outline-none focus:border-[#f4cb38]"
                      placeholder="/images/blog/btree-architecture.svg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-white/80 uppercase mb-1" htmlFor="lang">
                      Language
                    </label>
                    <select
                      id="lang"
                      name="lang"
                      value={formData.lang}
                      onChange={handleChange}
                      className="w-full p-2.5 text-xs bg-black border-2 border-white/20 text-white font-mono focus:outline-none focus:border-[#f4cb38]"
                    >
                      <option value="en">English</option>
                      <option value="ar">العربية (Arabic)</option>
                    </select>
                  </div>
                </div>

                {/* Editor & Preview Toolbar */}
                <div className="pt-4 border-t-2 border-white/10 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveTab('edit')}
                        className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-all ${
                          activeTab === 'edit'
                            ? 'bg-[#f4cb38] text-black shadow-[2px_2px_0px_0px_#fff]'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        ✎ Markdown Source
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('preview')}
                        className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-all ${
                          activeTab === 'preview'
                            ? 'bg-[#ff5500] text-white shadow-[2px_2px_0px_0px_#fff]'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        👁 Live Preview
                      </button>
                    </div>

                    {/* Snippet insertion shortcuts */}
                    <div className="flex flex-wrap gap-1.5 text-[11px] font-mono font-bold">
                      <button
                        type="button"
                        onClick={() => insertSnippet('![Schematic Diagram](/images/blog/btree-architecture.svg)')}
                        className="px-2 py-1 bg-white/10 text-white hover:bg-[#f4cb38] hover:text-black uppercase"
                        title="Insert Schematic Image"
                      >
                        + Image
                      </button>
                      <button
                        type="button"
                        onClick={() => insertSnippet('| Metric | Target | Result |\n| :--- | :--- | :--- |\n| Latency | <200ms | 145ms |')}
                        className="px-2 py-1 bg-white/10 text-white hover:bg-[#f4cb38] hover:text-black uppercase"
                        title="Insert Table"
                      >
                        + Table
                      </button>
                      <button
                        type="button"
                        onClick={() => insertSnippet('> **Core Finding**: Description of the discovery or benchmark outcome.')}
                        className="px-2 py-1 bg-white/10 text-white hover:bg-[#f4cb38] hover:text-black uppercase"
                        title="Insert Key Callout"
                      >
                        + Callout
                      </button>
                      <button
                        type="button"
                        onClick={() => insertSnippet('```go\nfunc Example() error {\n    return nil\n}\n```')}
                        className="px-2 py-1 bg-white/10 text-white hover:bg-[#f4cb38] hover:text-black uppercase"
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
                      className="w-full p-4 font-mono text-xs bg-black border-2 border-white/20 text-white focus:outline-none focus:border-[#f4cb38] leading-relaxed"
                      placeholder="# Article Heading\n\nWrite your technical analysis here in Markdown..."
                    />
                  ) : (
                    <div className="p-6 bg-black border-2 border-white/20 min-h-[300px] overflow-x-auto text-white">
                      <div
                        className="article-body prose prose-invert max-w-none text-xs leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: previewHtml }}
                      />
                    </div>
                  )}
                </div>

                {/* Password & Submit Section */}
                <div className="p-4 bg-black border-2 border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-white/80 uppercase mb-1" htmlFor="password">
                      Admin Password (Optional if authorized by IP):
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="p-2 text-xs bg-[#18191c] border-2 border-white/20 text-white font-mono w-64 focus:outline-none focus:border-[#f4cb38]"
                      placeholder="Enter password..."
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="px-6 py-3 bg-[#f4cb38] hover:bg-[#e0b828] text-black font-mono font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_#ff5500] transition-all disabled:opacity-50"
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
                  <div className="p-4 bg-emerald-950 border-2 border-emerald-500 text-emerald-300 text-xs font-mono flex justify-between items-center">
                    <span>✔ {responseMsg}</span>
                    <Link to={`/writing/${formData.slug}`} className="font-bold underline ml-2 text-white">
                      View Published Article ↗
                    </Link>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-rose-950 border-2 border-rose-500 text-rose-300 text-xs font-mono">
                    ✕ {responseMsg}
                  </div>
                )}

              </form>
            </div>
          </div>

          {/* Footer info */}
          <div className="flex justify-between items-center text-xs text-white/60 font-mono pt-4 border-t-2 border-white/10">
            <span>Author: {contact.name}</span>
            <Link to="/writing" className="text-[#f4cb38] hover:underline uppercase">
              ← Back to Journal Index
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
