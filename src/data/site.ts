import type { Language } from '../contexts/LanguageContext';

export const contact = {
  name: 'Youssef Ali Ahmed',
  shortName: 'Youssef Ali',
  title: 'Software Engineer (Back-End / Systems) | Research & Development Analyst',
  email: 'youssef.ali9966@gmail.com',
  phone: '+20 111 916 30 58',
  location: 'Cairo, Egypt',
  website: 'https://youssef-ali.vercel.app',
  linkedin: 'https://linkedin.com/in/youssef-ali-7792b21b3',
  github: 'https://github.com/youssef-joe',
};

/** Last time the CV content below was reviewed. */
export const cvUpdated = '2026.11';

type Localized<T> = Record<Language, T>;

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export interface MetricItem {
  label: string;
  value: string;
}

export const hero: Localized<{
  name: string;
  fullName: string;
  role: string;
  statement: string;
  location: string;
  availability: string;
  metrics: MetricItem[];
}> = {
  en: {
    name: 'Youssef Ali',
    fullName: 'Youssef Ali Ahmed',
    role: 'Software Engineer (Back-End / Systems) | R&D Analyst, ScienceWerx',
    statement:
      'Back-end engineer focused on database engineering and AI infrastructure. Open-source contributor in C to the PostgreSQL ecosystem, builder of SoldierDB, and first author of the PeerTrust citation-forensics benchmark.',
    location: 'Cairo, Egypt',
    availability: 'Available for Systems & Back-End Roles',
    metrics: [
      { label: 'MAU Served', value: '10,000+' },
      { label: 'Benchmark Match', value: '99.2%' },
      { label: 'API Latency', value: '<200ms' },
      { label: 'Service Uptime', value: '99.9%' },
    ],
  },
  ar: {
    name: 'يوسف علي',
    fullName: 'يوسف علي أحمد',
    role: 'مهندس برمجيات (أنظمة وخلفية) | محلل بحث وتطوير، ساينس ويركس',
    statement:
      'مهندس نظم وخلفيات برمجية متخصص في هندسة قواعد البيانات والبنية التحتية للذكاء الاصطناعي. مساهم بلغة C في منظومة PostgreSQL، ومطور SoldierDB، والمؤلف الأول لورقة قياس PeerTrust لسلامة الاستشهادات.',
    location: 'القاهرة، مصر',
    availability: 'متاح لأدوار هندسة الأنظمة والبنية التحتية',
    metrics: [
      { label: 'مستخدم نشط شهرياً', value: '+10,000' },
      { label: 'تطابق القياس', value: '99.2%' },
      { label: 'زمن استجابة API', value: '<200ms' },
      { label: 'وقت التشغيل', value: '99.9%' },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about: Localized<{ lead: string; body: string[] }> = {
  en: {
    lead: 'I care about the layer underneath the one I am working in — from database storage engines to citation forensics.',
    body: [
      'I am a back-end and systems engineer based in Cairo, Egypt. At ScienceWerx, Inc., I contribute to PeerTrust, a public researcher-level citation-integrity screening tool, and first-authored its benchmark paper in collaboration with ScienceWerx and KNOWDYN LTD. The benchmark covered 268 ORCID-resolved researchers (260 scored); our production engine and an independent Python reimplementation agreed on the classification verdict for all 260, with exact numerical match for 99.2%.',
      'At EnovaWorx Inc. (Maryland, USA), I serve as R&D Analyst and Software Engineer, driving AI infrastructure and agentic systems. I led end-to-end development of a SaaS marketplace on GCP and Firebase, building microservices with NestJS, Prisma, and MongoDB serving 10,000+ monthly active users. Integrating an AI recommendation engine and Gemini chatbot lifted user engagement by 30% while maintaining sub-200ms response times and 99.9% uptime.',
      'Outside high-level platforms, I stay close to the metal. I contribute in C to the PostgreSQL tooling ecosystem (pgagroal for connection pooling, pgmoneta for backup/restore, pgexporter for Prometheus metrics, and pgvictoria) covering networking, concurrency, and database internals. I also built SoldierDB, a relational database written from scratch in Go with a copy-on-write B+tree engine, transactions, and vector search, as well as Joe\'s OS, an operating system targeting x86 and RISC-V from bare metal.',
      'Previously, I engineered core API infrastructure for the Wazifame.com job board at Infotech Global (50,000+ listings, 15,000+ users), built full-stack backend systems at XFede, and led the Google Developer Groups (GDG) on Campus Future Academy technical department for two seasons.',
    ],
  },
  ar: {
    lead: 'أهتم دائماً بالطبقة الأدنى من تلك التي أعمل عليها — من محركات تخزين قواعد البيانات إلى التحليل الجنائي للاستشهادات.',
    body: [
      'مهندس أنظمة وخلفيات برمجية مقيم في القاهرة، مصر. أعمل في شركة ScienceWerx, Inc. كمحلل بحث وتطوير، حيث ساهمت في أداة PeerTrust لفحص نزاهة الاستشهادات وألّفت كباحث أول ورقتها المرجعية بالتعاون مع ScienceWerx و KNOWDYN LTD. غطى القياس 268 باحثاً معرّفاً بـ ORCID؛ واتفق محرك الإنتاج مع إعادة تطبيق مستقلة بلغة Python على الحكم لجميع الباحثين البالغ عددهم 260 مع تطابق رقمي دقيق بنسبة 99.2%.',
      'في شركة EnovaWorx (ماريلاند، الولايات المتحدة)، أعمل كمحلل بحث وتطوير ومهندس برمجيات، حيث أقود مبادرات البنية التحتية للذكاء الاصطناعي والأنظمة الوكيلة. قمت ببناء منصة SaaS سحابية على GCP و Firebase بخدمات دقيقة بـ NestJS و Prisma و MongoDB تخدم أكثر من 10,000 مستخدم نشط شهرياً. كما دمجت روبوتات محادثة تعتمد على Gemini ومحركات توصية زادت التفاعل بنسبة 30% مع زمن استجابة أقل من 200 مللي ثانية ونسبة تشغيل 99.9%.',
      'وخارج المنصات السحابية، أعمل قريباً جداً من العتاد. أساهم بلغة C في منظومة أدوات PostgreSQL (pgagroal لتجميع الاتصالات، و pgmoneta للنسخ الاحتياطي، و pgexporter لمقاييس Prometheus، و pgvictoria) مغطياً الشبكات والتزامن وداخليات قواعد البيانات. كما بنيت SoldierDB، وهي قاعدة بيانات علائقية من الصفر بلغة Go بمحرك B+tree بنسخ عند الكتابة ومعاملات وبحث تشابه المتجهات، بالإضافة إلى Joe\'s OS، وهو نظام تشغيل لمعماريتي x86 و RISC-V من الصفر.',
      'سابقاً، قمت بتطوير البنية التحتية لـ API منصة التوظيف Wazifame في Infotech Global (أكثر من 50,000 إعلان و 15,000 مستخدم)، وعملت على أنظمة XFede الخلفية، كما قدت القسم التقني لمجموعات مطوري جوجل (GDG) في Future Academy لموسمين.',
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Selected work / Projects                                           */
/* ------------------------------------------------------------------ */

export interface WorkItem {
  id: string;
  year: string;
  stack: string[];
  href?: string;
  en: { title: string; role: string; summary: string };
  ar: { title: string; role: string; summary: string };
}

export const work: WorkItem[] = [
  {
    id: 'soldierdb',
    year: '2025 — Present',
    stack: ['Go', 'B+Tree', 'SQL', 'Vector Search', 'C ABI', 'Transactions'],
    href: 'https://github.com/Youssef-joe/SoldierDB',
    en: {
      title: 'SoldierDB',
      role: 'Relational Database Engine with B+Tree & Vector Search',
      summary:
        'Relational database built from scratch in Go: crash-safe 4KB page store, copy-on-write B+tree, ACID transactions, and a SQL execution layer, with brute-force vector similarity search and a stable C ABI exposing it to Rust and C++ clients.',
    },
    ar: {
      title: 'SoldierDB',
      role: 'محرك قاعدة بيانات علائقية مع B+Tree وبحث المتجهات',
      summary:
        'قاعدة بيانات علائقية بُنيت من الصفر بلغة Go: متجر صفحات 4KB آمن ضد الانهيار، شجرة B+tree بنسخ عند الكتابة، معاملات ACID، وطبقة استعلامات SQL، مع بحث تشابه المتجهات وواجهة C ABI مستقرة لعملاء Rust و C++.',
    },
  },
  {
    id: 'ayno',
    year: '2024 — 2025',
    stack: ['Elixir', 'Go', 'Redis', 'PostgreSQL', 'C++'],
    href: 'https://github.com/Youssefjoe/Ayno',
    en: {
      title: 'Ayno',
      role: 'High-Concurrency Real-Time Messaging Engine',
      summary:
        'Multi-tenant engine with WebSocket and HTTP event delivery. Elixir Phoenix manages supervision and pub/sub connections, Go orchestrates the event pipeline, Redis handles session state, PostgreSQL logs tenant configs, and C++ executes low-latency packet serialization.',
    },
    ar: {
      title: 'أينو (Ayno)',
      role: 'محرك مراسلة فورية عالي التزامن في الوقت الفعلي',
      summary:
        'محرك مراسلة متعدد المستأجرين مع تسليم أحداث عبر WebSocket و HTTP. يتولى Elixir Phoenix الإشراف وتوزيع الاتصالات، و Go خط أنابيب الأحداث، و Redis حالة الجلسات، و PostgreSQL سجلات المستأجرين، و C++ المعالجة فائقة السرعة للحزم.',
    },
  },
  {
    id: 'joes-os',
    year: '2024 — 2025',
    stack: ['C', 'C++', 'Assembly', 'RISC-V', 'x86'],
    href: 'https://github.com/Youssef-joe/OS',
    en: {
      title: "Joe's OS",
      role: 'Operating System from Scratch for x86 & RISC-V',
      summary:
        'Monolithic operating system built from the ground up targeting both x86 and RISC-V. Implements physical and SV32 virtual memory paging, preemptive task scheduling, trap/interrupt handling, and Supervisor Binary Interface (SBI).',
    },
    ar: {
      title: "Joe's OS",
      role: 'نظام تشغيل من الصفر لمعماريتَي x86 و RISC-V',
      summary:
        'نظام تشغيل أحادي النواة كُتب من الصفر ليعمل على x86 و RISC-V. يتضمن إدارة الذاكرة الفيزيائية والافتراضية بنظام SV32، والجدولة الاستباقية للمهام، ومعالجة المقاطعات والاستثناءات، وواجهة SBI.',
    },
  },
  {
    id: 'peertrust',
    year: '2026 — Present',
    stack: ['Python', 'Forensic Algorithms', 'ORCID', 'ScienceWerx'],
    href: 'https://doi.org/10.5281/zenodo.22151538',
    en: {
      title: 'PeerTrust Citation-Forensics Benchmark',
      role: 'Forensic Screening Tool & Research Benchmark',
      summary:
        'A public researcher-level citation-integrity screening tool. First-authored the benchmark paper evaluating 268 ORCID-resolved researchers, achieving a 100% verdict concordance and 99.2% numerical agreement between production engine and independent Python implementation.',
    },
    ar: {
      title: 'أداة قياس PeerTrust للتحليل الجنائي للاستشهادات',
      role: 'أداة فحص نزاهة الاستشهادات والورقة البحثية المرجعية',
      summary:
        'أداة علنية لفحص نزاهة الاستشهادات على مستوى الباحثين. ألّفت كباحث أول الورقة المرجعية التي قيّمت 268 باحثاً معرّفاً بـ ORCID، محققة تطابقاً بنسبة 100% في الأحكام و 99.2% في القياس الرقمي الدقيق بين محرك الإنتاج والتطبيق المستقل.',
    },
  },
  {
    id: 'fantasy-fpl',
    year: '2025',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'SQLite', 'FPL API'],
    href: 'https://github.com/Youssef-joe/Fantasy',
    en: {
      title: 'Fantasy Football Prediction System',
      role: 'ML Feature Pipeline & Gameweek Forecast Engine',
      summary:
        'Machine learning pipeline scraping live FPL APIs, engineering dynamic per-player form features, and predicting point yields 1-2 gameweeks ahead with a Random Forest model (8,063 samples, MAE 1.02), featuring injury tracking and FastAPI backend.',
    },
    ar: {
      title: 'نظام التنبؤ بالفانتازي (Fantasy Football)',
      role: 'خط أنابيب تعلم الآلة والتنبؤ بنقاط الجولات',
      summary:
        'خط أنابيب تعلم آلي يسحب بيانات FPL الحية، ويبني ميزات ديناميكية لكل لاعب، ويتنبأ بالنقاط لجولة أو جولتين قادمتين بنموذج Random Forest (8,063 عينة، MAE 1.02)، مع تتبع الإصابات وخلفية بـ FastAPI.',
    },
  },
  {
    id: 'db-studio',
    year: '2024',
    stack: ['React', 'Hono', 'TypeScript', 'Bun', 'Cloudflare'],
    href: 'https://github.com/husamql3/dbstudio',
    en: {
      title: 'DB-Studio',
      role: 'Universal Database Client (MongoDB Contributor)',
      summary:
        'Open-source universal database management studio and lightweight pgAdmin alternative. Contributed full MongoDB support, schema inspection, and query execution pipelines.',
    },
    ar: {
      title: 'DB-Studio',
      role: 'عميل قواعد بيانات عام ومفتوح المصدر (مساهم بـ MongoDB)',
      summary:
        'منصة إدارة قواعد بيانات شاملة ومفتوحة المصدر كبديل خفيف لـ pgAdmin. ساهمت بدعم MongoDB بالكامل وفحص المخططات وتنفيذ الاستعلامات.',
    },
  },
];

/* ------------------------------------------------------------------ */
/* Professional Experience                                            */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
}

export const experiences: Localized<ExperienceItem[]> = {
  en: [
    {
      company: 'ScienceWerx, Inc.',
      role: 'Research & Development Analyst',
      period: 'Jan 2026 — Present',
      location: 'Maryland, USA (Remote)',
      type: 'Full-time',
      bullets: [
        'Contribute to PeerTrust, a public researcher-level citation-integrity screening tool, and first-authored its benchmark paper with ScienceWerx and KNOWDYN LTD (contributions: validation, investigation, data curation, software).',
        'The benchmark covered 268 ORCID-resolved researchers (260 scored); the production engine and an independent Python reimplementation agreed on the verdict for all 260, with exact numerical match for 99.2%.',
      ],
    },
    {
      company: 'EnovaWorx Inc.',
      role: 'Research & Development Analyst & Software Engineer',
      period: 'Jan 2026 — Present',
      location: 'Maryland, USA (Remote)',
      type: 'Part-time',
      bullets: [
        'Drive research and development initiatives focused on AI infrastructure, agentic systems, and scalable engineering solutions (R&D Analyst: Jul 2026 — Present).',
        'Lead and coordinate development teams to design, build, and integrate AI-powered capabilities across projects, overseeing solution architecture and engineering workflows.',
        'Led end-to-end development of a SaaS marketplace, scaling an MVP into a full platform with AI/ML features on Google Cloud Platform, Firebase, and Google Studio (Software Engineer: Jan 2026 — Present).',
        'Built RESTful APIs and microservices (NestJS, Prisma, MongoDB) serving 10,000+ monthly active users; integrated an AI recommendation engine and Gemini chatbot (+30% engagement).',
        'Enforced CI/CD pipelines (GitHub Actions, Docker), maintaining 99.9% uptime and sub-200ms API response times.',
      ],
    },
    {
      company: 'mnemosyne systems',
      role: 'Open Source Contributor (PostgreSQL Tooling)',
      period: 'Jul 2026 — Present',
      location: 'Remote',
      type: 'Part-time',
      bullets: [
        'Develop and port features and improve reliability in pgagroal (connection pooling), pgmoneta (backup/restore), pgexporter (Prometheus metrics), and pgvictoria, working with maintainers on C infrastructure software for high availability and performance.',
        'Systems-level C programming covering networking, concurrency, observability, and PostgreSQL internals.',
      ],
    },
    {
      company: 'Infotech Global',
      role: 'Mid-Level & Junior Back-End Developer',
      period: 'Jul 2025 — Apr 2026',
      location: 'Cairo, Egypt (On-site)',
      type: 'Full-time',
      bullets: [
        'Designed and maintained scalable back-end systems in TypeScript and NestJS with clean, modular architectures; mentored junior engineers and enforced code-quality standards (Mid-Level: Nov 2025 — Apr 2026).',
        'Built high-performance REST APIs with third-party integrations (auth, payment gateways, webhooks); optimized queries, caching, and async processing; tested with Jest.',
        'Designed and implemented most of the API infrastructure for the Wazifame.com job board (NestJS, Prisma, MongoDB), supporting 50,000+ listings and 15,000+ users (Junior: Jul 2025 — Nov 2025).',
        'Optimized database queries, cutting response times by 35%; implemented RBAC and request validation (-40% integration bugs); refactored legacy code (-25% tech debt).',
      ],
    },
    {
      company: 'XFede.com',
      role: 'Full Stack Engineer',
      period: 'Feb 2025 — May 2025',
      location: 'Cairo, Egypt (Hybrid)',
      type: 'Contract',
      bullets: [
        'Led back-end development of the real-estate platform xfede.com (Node.js, Express, PostgreSQL, Drizzle ORM) with a Remix front-end; designed scalable data models.',
        'Held 8% equity in the company before departing.',
        'Built a Gemini AI chatbot and a KNN-based recommendation system (+25% user interaction); optimized APIs, improving response speed by 67% and doubling concurrency.',
      ],
    },
  ],
  ar: [
    {
      company: 'ScienceWerx, Inc.',
      role: 'محلل بحث وتطوير (R&D Analyst)',
      period: 'يناير 2026 — الحاضر',
      location: 'ماريلاند، الولايات المتحدة (عن بُعد)',
      type: 'دوام كامل',
      bullets: [
        'المساهمة في أداة PeerTrust لفحص نزاهة الاستشهادات على مستوى الباحثين، وتأليف ورقتها المرجعية كباحث أول بالتعاون مع ScienceWerx و KNOWDYN LTD.',
        'غطى القياس 268 باحثاً معرّفاً بـ ORCID (260 باحثاً تم تقييمهم)؛ واتفق محرك الإنتاج وإعادة تطبيق مستقلة بـ Python على الحكم لجميع الباحثين الـ 260 مع تطابق رقمي دقيق بنسبة 99.2%.',
      ],
    },
    {
      company: 'EnovaWorx Inc.',
      role: 'محلل بحث وتطوير ومهندس برمجيات',
      period: 'يناير 2026 — الحاضر',
      location: 'ماريلاند، الولايات المتحدة (عن بُعد)',
      type: 'دوام جزئي',
      bullets: [
        'قيادة مبادرات البحث والتطوير الموجهة نحو البنية التحتية للذكاء الاصطناعي والأنظمة الوكيلة والحلول الهندسية القابلة للتوسع (يوليو 2026 — الحاضر).',
        'تنسيق وقيادة فرق التطوير لتصميم وبناء وتكامل القدرات المدعومة بالذكاء الاصطناعي والإشراف على المعمارية وسير العمل الهندسي.',
        'قيادة تطوير منصة SaaS بالكامل على Google Cloud Platform و Firebase و Google Studio (يناير 2026 — الحاضر).',
        'بناء خدمات دقيقة وواجهات REST بـ NestJS و Prisma و MongoDB تخدم أكثر من 10,000 مستخدم نشط شهرياً مع دمج محرك توصيات وروبوت Gemini (+30% تفاعل).',
        'تطبيق خطوط أنابيب CI/CD بـ GitHub Actions و Docker مع الحفاظ على وقت تشغيل 99.9% وزمن استجابة أقل من 200ms.',
      ],
    },
    {
      company: 'mnemosyne systems',
      role: 'مساهم مفتوح المصدر (منظومة PostgreSQL)',
      period: 'يوليو 2026 — الحاضر',
      location: 'عن بُعد',
      type: 'دوام جزئي',
      bullets: [
        'تطوير وتوفير ميزات وتحسين الاعتمادية في pgagroal (تجميع الاتصالات) و pgmoneta (النسخ الاحتياطي) و pgexporter (مقاييس Prometheus) و pgvictoria بلغة C.',
        'برمجة أنظمة منخفضة المستوى بلغة C تغطي الشبكات والتزامن والمراقبة وداخليات PostgreSQL.',
      ],
    },
    {
      company: 'Infotech Global',
      role: 'مطور برمجيات خلفية (Mid-Level & Junior)',
      period: 'يوليو 2025 — أبريل 2026',
      location: 'القاهرة، مصر (مكتبي)',
      type: 'دوام كامل',
      bullets: [
        'تصميم وصيانة أنظمة خلفية قابلة للتوسع بـ TypeScript و NestJS، وتوجيه المطورين المبتدئين وضمان معايير جودة الكود (نوفمبر 2025 — أبريل 2026).',
        'بناء واجهات برمجة تطبيقات REST عالية الأداء وتكاملها مع بوابات الدفع والمصادقة والـ Webhooks؛ وتحسين الاستعلامات والتخزين المؤقت؛ والاختبار بـ Jest.',
        'تصميم وتنفيذ معظم البنية التحتية للـ API لمنصة التوظيف Wazifame.com بـ NestJS و Prisma و MongoDB (أكثر من 50,000 إعلان و 15,000 مستخدم).',
        'تحسين استعلامات قواعد البيانات مقللاً زمن الاستجابة بنسبة 35%، وتطبيق RBAC والتحقق من صحة الطلبات، وتقليل الديون التقنية بنسبة 25%.',
      ],
    },
    {
      company: 'XFede.com',
      role: 'مهندس Full Stack (عقد)',
      period: 'فبراير 2025 — مايو 2025',
      location: 'القاهرة، مصر (هجين)',
      type: 'عقد',
      bullets: [
        'قيادة التطوير الخلفي لمنصة xfede.com العقارية (Node.js, Express, PostgreSQL, Drizzle ORM) مع واجهة بـ Remix؛ وتصميم نماذج بيانات قابلة للتوسع.',
        'امتلاك 8% من أسهم الشركة قبل المغادرة.',
        'بناء روبوت محادثة Gemini ونظام توصيات قائم على KNN (+25% تفاعل للمستخدمين) وتحسين استجابة الـ API بنسبة 67% ومضاعفة التزامن.',
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Publications                                                       */
/* ------------------------------------------------------------------ */

export const publications = [
  {
    authors: 'Ali, Y., Basuni, H., Kamal, A., Kadry, B., and Saqr, K.',
    year: '2026',
    title: 'PeerTrust Finds Elevated Citation-Forensic Profiles in Recent Highly Cited Research',
    venue: 'ScienceWerx Inc. and KNOWDYN LTD',
    doi: '10.5281/zenodo.22151538',
    doiUrl: 'https://doi.org/10.5281/zenodo.22151538',
    firstAuthor: true,
  },
];

/* ------------------------------------------------------------------ */
/* CV                                                                  */
/* ------------------------------------------------------------------ */

export interface CVItem {
  category: string;
  title: string;
  subtitle?: string;
  year: string;
}

export const cvData: Record<Language, CVItem[]> = {
  ar: [
    { category: 'الخبرات المهنية', title: 'ScienceWerx, Inc.', subtitle: 'محلل بحث وتطوير (دوام كامل) / ماريلاند، الولايات المتحدة (عن بُعد)', year: '2026 — الحاضر' },
    { category: 'الخبرات المهنية', title: 'EnovaWorx Inc.', subtitle: 'محلل بحث وتطوير ومهندس برمجيات / ماريلاند، الولايات المتحدة (عن بُعد)', year: '2026 — الحاضر' },
    { category: 'الخبرات المهنية', title: 'منظومة PostgreSQL (mnemosyne systems)', subtitle: 'مساهم مفتوح المصدر بلغة C (pgagroal, pgmoneta, pgexporter, pgvictoria)', year: '2026 — الحاضر' },
    { category: 'الخبرات المهنية', title: 'Infotech Global', subtitle: 'مطور خلفيات برمجية (Mid-Level & Junior) / منصة Wazifame / القاهرة', year: '2025 — 2026' },
    { category: 'الخبرات المهنية', title: 'XFede.com', subtitle: 'مهندس Full Stack / منصة عقارات / القاهرة', year: '2025' },
    { category: 'الأبحاث والمنشورات', title: 'PeerTrust Citation-Forensic Benchmark Paper', subtitle: 'Ali, Y. et al. (2026) — ScienceWerx Inc. & KNOWDYN LTD (الباحث الأول) / DOI: 10.5281/zenodo.22151538', year: '2026' },
    { category: 'التعليم الأكاديمي', title: 'أكاديمية القاهرة الجديدة', subtitle: 'بكالوريوس إدارة وتكنولوجيا المعلومات ونظم الحاسب (GPA 3.31)', year: '2023 — 2027' },
    { category: 'التعليم الأكاديمي', title: 'معهد أميت (AMIT Learning)', subtitle: 'دبلوم تطوير الويب المتقدم MERN Stack (التقدير: 98%)', year: '2023 — 2024' },
    { category: 'الشهادات المعتمدة', title: 'المعهد القومي للاتصالات (NTI)', subtitle: 'شهادة تدريب الأمن السيبراني (Cyber Security Training)', year: 'معتمد' },
    { category: 'الشهادات المعتمدة', title: 'مركز تكنولوجيا الإبداع وريادة الأعمال (TIEC / ITIDA)', subtitle: 'شهادة ريادة الأعمال في صناعة التكنولوجيا', year: 'معتمد' },
    { category: 'القيادة والمجتمع', title: 'GDG on Campus Future Academy', subtitle: 'رئيس القسم التقني (Head of Technical Department) وقائد مسار الـ Backend والـ GCP', year: '2024 — 2026' },
    { category: 'المهارات التقنية', title: 'لغات البرمجة', subtitle: 'Go, C, C++, TypeScript, JavaScript, Elixir, Python, SQL, C#, Assembly', year: '' },
    { category: 'المهارات التقنية', title: 'الخلفية والأنظمة', subtitle: 'Node.js, NestJS, Express.js, Phoenix (Elixir), FastAPI, .NET, REST, Microservices, WebSockets, gRPC, Kafka', year: '' },
    { category: 'المهارات التقنية', title: 'قواعد البيانات والبنية', subtitle: 'PostgreSQL, MongoDB, Redis, Prisma, Drizzle ORM, Docker, CI/CD, GCP, Firebase, Linux', year: '' },
    { category: 'اللغات', title: 'العربية (اللغة الأم)، الإنجليزية (C1)، الألمانية (B2)', subtitle: 'تواصل وتوثيق واجتماعات تقنية كاملة', year: '' },
  ],
  en: [
    { category: 'Experience', title: 'ScienceWerx, Inc.', subtitle: 'Research & Development Analyst (Full-time) / Maryland, USA (Remote)', year: '2026 — Present' },
    { category: 'Experience', title: 'EnovaWorx Inc.', subtitle: 'R&D Analyst & Software Engineer (Part-time) / Maryland, USA (Remote)', year: '2026 — Present' },
    { category: 'Experience', title: 'PostgreSQL Ecosystem (mnemosyne systems)', subtitle: 'Open Source Contributor in C (pgagroal, pgmoneta, pgexporter, pgvictoria)', year: '2026 — Present' },
    { category: 'Experience', title: 'Infotech Global', subtitle: 'Mid-Level & Junior Back-End Developer / Wazifame.com / Cairo, Egypt', year: '2025 — 2026' },
    { category: 'Experience', title: 'XFede.com', subtitle: 'Full Stack Engineer (Contract) / Real Estate / Cairo, Egypt', year: '2025' },
    { category: 'Publications', title: 'PeerTrust Citation-Forensics Benchmark Paper', subtitle: 'Ali, Y. et al. (2026) — ScienceWerx Inc. & KNOWDYN LTD (First Author) / DOI: 10.5281/zenodo.22151538', year: '2026' },
    { category: 'Education', title: 'New Cairo Academy', subtitle: 'BS in Computer / IT Administration & Management (GPA 3.31)', year: '2023 — 2027 (exp)' },
    { category: 'Education', title: 'AMIT Learning', subtitle: 'MERN Stack Web Development Diploma (Grade: 98%)', year: '2023 — 2024' },
    { category: 'Certifications', title: 'National Telecommunication Institute (NTI)', subtitle: 'Cyber Security Professional Training', year: 'Certified' },
    { category: 'Certifications', title: 'ITIDA / TIEC (Technology Innovation Center)', subtitle: 'Entrepreneurship in Tech Industry', year: 'Certified' },
    { category: 'Leadership', title: 'GDG on Campus Future Academy', subtitle: 'Head of Technical Department & Core Back-End/GCP Lead (2 Seasons)', year: '2024 — 2026' },
    { category: 'Tech Stack', title: 'Languages', subtitle: 'Go, C, C++, TypeScript, JavaScript, Elixir, Python, SQL, C#, Assembly', year: '' },
    { category: 'Tech Stack', title: 'Back-End & Systems', subtitle: 'Node.js, NestJS, Express.js, Phoenix (Elixir), FastAPI, .NET, REST, Microservices, WebSockets, gRPC, Kafka', year: '' },
    { category: 'Tech Stack', title: 'Data & Infrastructure', subtitle: 'PostgreSQL, MongoDB, Redis, Prisma, Drizzle ORM, Docker, CI/CD, GCP, Firebase, Linux', year: '' },
    { category: 'Languages', title: 'Arabic (Native), English (C1 Fluent), German (B2 Intermediate)', subtitle: 'Full professional technical fluency', year: '' },
  ],
};

export const sectionOrder: Record<Language, string[]> = {
  ar: ['الخبرات المهنية', 'الأبحاث والمنشورات', 'التعليم الأكاديمي', 'الشهادات المعتمدة', 'القيادة والمجتمع', 'المهارات التقنية', 'اللغات'],
  en: ['Experience', 'Publications', 'Education', 'Certifications', 'Leadership', 'Tech Stack', 'Languages'],
};

/* ------------------------------------------------------------------ */
/* UI strings                                                          */
/* ------------------------------------------------------------------ */

export const ui: Localized<Record<string, string>> = {
  en: {
    portalName: 'Youssef Ali Ahmed // Systems Architecture & R&D Portal',
    navHome: 'Home',
    navAbout: 'About',
    navExperience: 'Experience',
    navWork: 'Projects',
    navPublications: 'Research',
    navStory: 'Story',
    navArt: 'Art',
    navWriting: 'Blog',
    navCV: 'Resume / CV',
    navContact: 'Contact',
    sectionWriting: 'Technical Blog & Notebook',
    writingTitle: 'Notes on systems, databases, and what breaks in them.',
    writingEmpty: 'Nothing published yet.',
    writingAll: 'All Articles & Notes',
    minRead: 'min read',
    draftBadge: 'Draft',
    share: 'Share',
    shareCopied: 'Link copied to clipboard',
    articleMissing: 'That article does not exist.',
    backHome: 'Back to Portal Index',
    skipToContent: 'Skip to content',
    sectionAbout: 'Profile & Engineering Overview',
    sectionExperience: 'Professional Experience',
    sectionWork: 'Core Systems & Database Projects',
    sectionPublications: 'Peer-Reviewed Research & Benchmarks',
    sectionArt: 'Art & Exhibition Salon',
    sectionStory: 'Chronicles & Journey',
    sectionCV: 'Curriculum Vitae',
    sectionContact: 'Contact & Transmission',
    scrollHint: 'Scroll down to explore',
    updatedPrefix: 'Last reviewed & compiled',
    contactLead: 'Open to conversations about database internals, systems architecture, AI infrastructure, and low-level engineering.',
    emailLabel: 'Email Address',
    phoneLabel: 'Phone / WhatsApp',
    locationLabel: 'Location Base',
    toggleTheme: 'Style',
    toggleThemeLight: 'Light Mode',
    toggleThemeDark: 'Dark Mode',
    toggleLang: 'العربية',
    backToTop: 'Top of Page',
    statusOnline: 'ONLINE // Ready for Systems Engineering',
    portalEdition: 'Web 2005 Professional Edition',
    artTitle: 'THE ART ALWAYS TELLS A STORY',
    artSubtitle: 'Classical Portrait Exhibition Plate — Art aka Soul',
    artDescription: 'Each work is an encounter with time — where beauty does not fade, but transforms. We invite you to experience art not as an object on display, but as a living dialogue between craft and soul.',
    checkStory: 'Examine Full Story & Chronicles →',
  },
  ar: {
    portalName: 'يوسف علي أحمد // بوابة هندسة الأنظمة والبحث والتطوير',
    navHome: 'الرئيسية',
    navAbout: 'نبذة',
    navExperience: 'الخبرات',
    navWork: 'المشاريع',
    navPublications: 'الأبحاث',
    navStory: 'القصة',
    navArt: 'الفن',
    navWriting: 'المقالات',
    navCV: 'السيرة',
    navContact: 'تواصل',
    sectionWriting: 'المقالات والملاحظات التقنية',
    writingTitle: 'ملاحظات عن هندسة الأنظمة وقواعد البيانات وما يتعطل فيها.',
    writingEmpty: 'لا توجد مقالات منشورة بعد.',
    writingAll: 'كل المقالات والملاحظات',
    minRead: 'دقيقة قراءة',
    draftBadge: 'مسودة',
    share: 'مشاركة',
    shareCopied: 'تم نسخ الرابط إلى الحافظة',
    articleMissing: 'هذه المقالة غير موجودة.',
    backHome: 'العودة للرئيسية',
    skipToContent: 'تخطَّ إلى المحتوى',
    sectionAbout: 'الملف التعريفي والنظرة العامة',
    sectionExperience: 'الخبرات المهنية',
    sectionWork: 'الأنظمة ومحركات قواعد البيانات',
    sectionPublications: 'الأبحاث والمنشورات العلمية',
    sectionArt: 'صالون الفن والمعرض',
    sectionStory: 'القصة والمحطات',
    sectionCV: 'السيرة الذاتية المفصلة',
    sectionContact: 'التواصل والبيانات',
    scrollHint: 'مرّر لأسفل للاستكشاف',
    updatedPrefix: 'آخر مراجعة وتحديث',
    contactLead: 'مرحّب بالنقاش حول داخليات قواعد البيانات، وهندسة الأنظمة، والبنية التحتية للذكاء الاصطناعي، والبرمجة منخفضة المستوى.',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الهاتف / واتساب',
    locationLabel: 'المقر الرئيسي',
    toggleTheme: 'المظهر',
    toggleThemeLight: 'الوضع الفاتح',
    toggleThemeDark: 'الوضع الداكن',
    toggleLang: 'English',
    backToTop: 'أعلى الصفحة',
    statusOnline: 'متصل // متاح لأدوار هندسة الأنظمة',
    portalEdition: 'إصدار الويب الكلاسيكي 2005 المهني',
    artTitle: 'الفن دائماً يروي قصة (THE ART ALWAYS TELLS A STORY)',
    artSubtitle: 'لوحة المعرض الكلاسيكي — الفن روح (Art aka Soul)',
    artDescription: 'كل عمل هو لقاء مع الزمن — حيث لا يتلاشى الجمال، بل يتحول. ندعوك لتجربة الفن ليس كشيء معروض، بل كحوار حي بين الصنعة والروح.',
    checkStory: 'استكشف القصة والمحطات الكاملة ←',
  },
};

/* ------------------------------------------------------------------ */
/* Eras (Art & Story Chronicles)                                     */
/* ------------------------------------------------------------------ */

export interface EraItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  en: { chapter: string; description: string };
  ar: { chapter: string; description: string };
}

export const eras: EraItem[] = [
  {
    id: 'early-years',
    image: '/images/era_1.jpeg',
    title: 'THE BEGINNING // RENAISSANCE',
    subtitle: 'Chapter 001',
    en: {
      chapter: 'Chapter I: The Genesis & Curiosity',
      description:
        'The early years defined by deep curiosity and a relentless drive to uncover how computers and software work underneath all layers of abstraction. Dismantling memory layouts, tracing assembly instructions, and learning why computers do what they do.',
    },
    ar: {
      chapter: 'الفصل الأول: البدايات والفضول',
      description:
        'السنوات الأولى التي تميزت بالفضول العميق والشغف المتواصل لاكتشاف كيف تعمل الحواسيب والبرمجيات تحت كل طبقات التجريد. تفكيك تخطيط الذاكرة، وتتبع تعليمات لغة التجميع، وفهم آلية عمل الأنظمة من الصفر.',
    },
  },
  {
    id: 'the-builder',
    image: '/images/era_2.jpeg',
    title: 'THE ASCENT // INDUSTRIAL FORGE',
    subtitle: 'Chapter 002',
    en: {
      chapter: 'Chapter II: The Forge of Systems',
      description:
        'Forging complex systems close to the machine. Writing Joe\'s OS from scratch for x86 and RISC-V with SV32 paging, building the Ayno real-time messaging engine across Elixir, Go, and C++, and designing the SoldierDB storage engine with B+Trees.',
    },
    ar: {
      chapter: 'الفصل الثاني: بناء وصياغة الأنظمة',
      description:
        'فترة صياغة الأنظمة المعقدة بالقرب من العتاد. كتابة نظام تشغيل Joe\'s OS من الصفر لمعماريتي x86 و RISC-V مع إدارة ذاكرة SV32، وبناء محرك Ayno للمراسلة في الوقت الفعلي عبر Elixir و Go و C++، وتصميم محرك تخزين SoldierDB بشجرة B+Tree.',
    },
  },
  {
    id: 'the-architect',
    image: '/images/era_3.jpeg',
    title: 'THE VISION // FRONTIER CRAFT',
    subtitle: 'Chapter 003',
    en: {
      chapter: 'Chapter III: Research & Scalability',
      description:
        'Balancing rigorous empirical research at ScienceWerx with high-scale AI infrastructure at EnovaWorx, and contributing systems-level C code to the PostgreSQL tooling ecosystem. Building software with permanent mathematical and mechanical integrity.',
    },
    ar: {
      chapter: 'الفصل الثالث: البحث والتوسع المعماري',
      description:
        'الموازنة بين البحث العلمي الدقيق في ScienceWerx والبنية التحتية الضخمة للذكاء الاصطناعي في EnovaWorx، والمساهمة البرمجية بلغة C في منظومة أدوات PostgreSQL. بناء برمجيات تتسم بالنزاهة والصلابة الميكانيكية الدائمة.',
    },
  },
];
