// All visible copy lives here so it can be edited in one place.

export const ME = {
  name: 'Shripaad Koduri',
  first: 'Shripaad',
  role: 'AI Automation Engineer & Creative Developer',
  location: 'Hyderabad, India',
  email: 'shripaad17@gmail.com',
  whatsapp: 'https://wa.me/917893155092?text=' + encodeURIComponent("Hi Shripaad, I saw your portfolio and I'd like to talk."),
  linkedin: 'https://www.linkedin.com/in/shripaad-koduri/',
  github: 'https://github.com/shripaad1707',
  instagram: 'https://www.instagram.com/shripaad_17/',
  agency: 'https://shripaads-agency.vercel.app',
  resume: 'resume-shripaad-koduri.pdf'
};

export const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'systems', label: 'Systems' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export const STATS = [
  { to: 4, label: 'automation systems ready to deploy' },
  { to: 1, prefix: '<', suffix: ' min', label: 'average reply time to a new lead' },
  { to: 24, suffix: '/7', label: 'systems that never switch off' },
  { to: 3, label: 'live products shipped in 2026' }
];

export const WORK = [
  {
    id: 'relay',
    n: '01',
    title: 'Relay.ai',
    kind: 'AI web app · built end to end',
    year: '2026',
    text: 'An AI assistant for work. It turns meetings and email into tasks, drafts replies and books meetings — and nothing is sent until you approve it.',
    tags: ['Next.js', 'Supabase', 'Gemini AI', 'Gmail & Calendar APIs'],
    video: 'media/relay-tour.mp4',
    poster: 'img/work/relay-poster.webp',
    href: 'https://relay-ai-ivory-chi.vercel.app/',
    cta: 'Open the live app'
  },
  {
    id: 'flowstack',
    n: '02',
    title: 'FlowStack AI',
    kind: 'AI automation marketplace',
    year: '2026',
    text: 'A storefront for ready-made AI automations. Businesses browse workflows, see how each one works step by step, and launch it in a test space before it goes live.',
    tags: ['React', 'Vite', 'Supabase', 'GSAP'],
    video: 'media/flowstack-tour.mp4',
    poster: 'img/work/flowstack-poster.webp',
    href: 'https://flowstack-ai-eta.vercel.app/',
    cta: 'Open the live site'
  },
  {
    id: 'skyline',
    n: '03',
    title: 'Skyline Villas',
    kind: 'Website · 3D model · AI assistant',
    year: '2026',
    text: 'A premium website for a villa developer, with a 3D model buyers can rotate and an assistant that answers price questions on the spot.',
    tags: ['React', 'Three.js', 'Blender', 'AI assistant'],
    video: 'media/villa-orbit.mp4',
    poster: 'img/work/skyline-site.webp',
    href: 'https://skylinevillas-puce.vercel.app/',
    cta: 'Open the website'
  },
  {
    id: 'renders',
    n: '04',
    title: '3D Villa & Renders',
    kind: 'Blender · architecture & products',
    year: '2026',
    text: 'A modern three-storey villa modelled in Blender — terraces, landscaping and lighting — plus studio-style product renders for concept brands, made for ads and listings.',
    tags: ['Blender', 'Cycles', 'Architectural viz', 'Art direction'],
    image: 'img/work/villa-blender.webp',
    href: '#studio',
    cta: 'See the gallery'
  }
];

export const ENGINEERING = [
  {
    id: 'ledgerlens',
    name: 'Ledgerlens',
    tag: 'Invoice AI · GST',
    line: 'Reads Indian GST invoices — PDFs and phone photos — with Gemini, then checks every field with fixed GST rules before anything is paid.',
    metric: '0 of 240',
    metricLabel: 'wrong invoices auto-approved',
    points: ['GSTIN checksum, IGST vs CGST + SGST and arithmetic rules', 'Crash-safe PostgreSQL job queue with lease + fencing', 'Reviewer screen with the original page beside the values'],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Gemini'],
    tests: 316
  },
  {
    id: 'gauge',
    name: 'Gauge',
    tag: 'LLM evaluation',
    line: 'Regression testing for AI features: runs two prompt or model versions on the same cases and says better, worse or "not enough evidence" — with statistics.',
    metric: '0 → 24/24',
    metricLabel: 'invoices fully correct after a prompt rewrite',
    points: ['Paired significance tests + detectable-change estimate', 'LLM judges gated until calibrated against a person', 'CI gate, resumable runs and a web comparison view'],
    stack: ['Python', 'SQLite', 'Statistics', 'Gemini'],
    tests: 148
  },
  {
    id: 'vaultline',
    name: 'Vaultline',
    tag: 'Permission-aware RAG',
    line: 'A company chatbot that answers only from documents the asker may read — permissions enforced inside PostgreSQL, before the model sees anything.',
    metric: '0 of 972',
    metricLabel: 'leak checks failed on Gemini',
    points: ['Row-level security between companies', 'Allow lists applied inside hybrid vector + keyword search', 'Canary strings in every restricted doc to prove no leaks'],
    stack: ['Python', 'PostgreSQL 16', 'RAG', 'Gemini'],
    tests: 62
  }
];

export const SYSTEMS = [
  {
    id: 'whatsapp',
    n: '01',
    title: 'WhatsApp AI Agent',
    sub: 'Lead capture, qualification & site-visit booking for real estate.',
    flow: ['WhatsApp msg', 'AI agent + RAG', 'Qualify', 'Book visit', 'CRM sync'],
    points: [
      'Instant replies via Meta Business API webhooks',
      'GPT agent answers property questions from a custom knowledge base',
      'Checks live calendar slots and books conflict-free visits',
      'Multi-day follow-ups for leads that go quiet'
    ],
    metrics: [
      ['24/7', 'always on'],
      ['<1 min', 'avg. response'],
      ['0', 'missed leads']
    ],
    stack: ['n8n', 'OpenAI', 'WhatsApp API', 'Airtable', 'Google Calendar', 'Supabase']
  },
  {
    id: 'email',
    n: '02',
    title: 'Email Lead Qualifier',
    sub: 'Inbound email triage, Hot / Warm / Cold scoring and automatic follow-up.',
    flow: ['Gmail trigger', 'Clean + parse', 'AI scoring', 'Smart reply', 'Follow-up'],
    points: [
      'Parses and cleans every inbound enquiry automatically',
      'GPT agent scores leads Hot, Warm or Cold',
      'Context-aware replies written for each enquiry',
      'Spam filtered out, CRM records created and updated'
    ],
    metrics: [
      ['Mins', 'reply turnaround'],
      ['3×', 'follow-up touches'],
      ['100%', 'leads triaged']
    ],
    stack: ['n8n', 'Gmail', 'OpenAI', 'Airtable', 'Google Sheets']
  },
  {
    id: 'voice',
    n: '03',
    title: 'Voice AI Receptionist',
    sub: 'Answers calls, books appointments and logs every conversation.',
    flow: ['Inbound call', 'Transcribe', 'GPT-4.1', 'Check calendar', 'Confirm'],
    points: [
      'Natural phone conversations with GPT-4.1 and Deepgram',
      'Handles bookings, rescheduling, pricing and FAQs',
      'Confirmations by WhatsApp or SMS, plus owner alerts',
      'Transcripts and outcomes saved to Google Sheets'
    ],
    metrics: [
      ['~1.1s', 'reply latency'],
      ['24/7', 'call coverage'],
      ['0', 'missed calls']
    ],
    stack: ['VAPI', 'Twilio', 'Deepgram', 'OpenAI', 'Google Calendar']
  },
  {
    id: 'invoice',
    n: '04',
    title: 'Document AI Extractor',
    sub: 'Invoices and documents from Gmail & Drive into clean spreadsheets.',
    flow: ['Gmail / Drive', 'OCR + AI', 'Extract fields', 'Validate', 'Sheets'],
    points: [
      'Watches inboxes and folders for new invoices',
      'AI extracts vendor, totals, dates and line items',
      'Validation catches duplicates and missing fields',
      'Writes structured rows to Google Sheets automatically'
    ],
    metrics: [
      ['80%', 'less manual entry'],
      ['Secs', 'per document'],
      ['1', 'source of truth']
    ],
    stack: ['n8n', 'OpenAI', 'Gmail', 'Google Drive', 'Google Sheets']
  }
];

export const RENDERS = [
  { id: 'solenne', name: 'Solenne serum', image: 'img/renders/solenne.webp' },
  { id: 'sneaker', name: 'Runner sneaker', image: 'img/renders/sneaker.webp' },
  { id: 'villa', name: 'Modern villa', image: 'img/renders/villa.webp' },
  { id: 'tide', name: 'Tidewater soap', image: 'img/renders/tide.webp' },
  { id: 'nova', name: 'NOVA headphones', image: 'img/work/nova-hero.webp' },
  { id: 'earbuds', name: 'Wireless earbuds', image: 'img/renders/earbuds.webp' }
];

export const UGC = [
  { id: 'ad1', product: 'Velora Skin', angle: 'Morning routine', src: 'media/ugc-ad1.mp4', poster: 'img/ugc/ad1.webp' },
  { id: 'ad2', product: 'Cinder Lane', angle: 'Taste test', src: 'media/ugc-ad2.mp4', poster: 'img/ugc/ad2.webp' },
  { id: 'ad3', product: 'Fernwick Naturals', angle: 'Quick demo', src: 'media/ugc-ad3.mp4', poster: 'img/ugc/ad3.webp' },
  { id: 'ad4', product: 'Northbay Botanics', angle: 'Seasonal hook', src: 'media/ugc-ad4.mp4', poster: 'img/ugc/ad4.webp' }
];

export const SKILLS = [
  { n: '01', group: 'Automation', items: ['n8n', 'Make', 'Zapier', 'Webhooks', 'REST APIs', 'JSON'] },
  { n: '02', group: 'AI & Agents', items: ['OpenAI API', 'Google Gemini', 'AI Agents', 'RAG', 'Prompt engineering', 'VAPI voice'] },
  { n: '03', group: 'Frontend', items: ['React', 'Next.js', 'Vite', 'HTML / CSS / JS', 'Motion', 'GSAP'] },
  { n: '04', group: 'Backend & Data', items: ['Supabase', 'Airtable', 'Google Sheets', 'Python (learning)', 'FastAPI (learning)'] },
  { n: '05', group: 'Design & 3D', items: ['Figma', 'Blender', 'Three.js', 'Motion design', 'UGC & AI video'] },
  { n: '06', group: 'Ways of working', items: ['Git & GitHub', 'Vercel', 'Client discovery', 'Fixed-scope delivery'] }
];

export const TOOLS = ['n8n', 'OpenAI', 'Gemini', 'Supabase', 'WhatsApp API', 'Twilio', 'VAPI', 'Deepgram', 'Gmail', 'Google Calendar', 'Airtable', 'React', 'Next.js', 'Vite', 'Three.js', 'Blender', 'Figma', 'Vercel'];

export const TIMELINE = [
  {
    when: 'Dec 2025 — Present',
    title: 'AI Automation & Lead Systems Developer',
    where: 'Freelance · Remote from Hyderabad',
    points: [
      'Design and deploy end-to-end systems for lead capture, qualification and follow-up across several client industries.',
      'Build CRM pipelines with automated tagging, lead scoring and status tracking.',
      'Shipped a clinic appointment system that files every patient request into a structured lead sheet automatically.',
      'Integrate third-party APIs and webhooks, cutting task turnaround by up to 80%.'
    ]
  },
  {
    when: '2026',
    title: 'Products shipped',
    where: 'Relay.ai · FlowStack AI · Skyline Villas',
    points: ['Three live products designed, built and deployed end to end — AI web apps, an automation marketplace and a 3D real-estate site.']
  },
  {
    when: 'Certification',
    title: 'Generative AI with AWS',
    where: 'Amazon Web Services',
    points: ['Foundations of building with generative AI and LLMs on AWS.']
  }
];

export const INDUSTRIES = ['Real estate', 'Clinics & healthcare', 'E-commerce brands', 'Digital agencies', 'Consultancies', 'Growing SMBs'];
