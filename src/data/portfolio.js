import { Brain, Smartphone, Zap, FolderGit2 } from "lucide-react";

export const profile = {
  name: "Vignesh Pathak",
  initials: "VP",
  location: "Chicago, Illinois",
  status: "Open to AI / ML engineering roles",
  lead: "Graduate student in Computer Science with 3.5+ years of industry experience designing and deploying scalable GenAI, RAG pipelines, distributed systems, and full-stack applications. Previously at Accenture building AI products for Fortune 500 retailers. Skilled in Go, Python, TypeScript, LangGraph, Azure OpenAI, and production-grade cloud infrastructure.",
  // TODO: add resume.pdf to /public — this link 404s until then.
  resumeUrl: "/resume.pdf",
};

export const links = {
  email: "vigneshpathak14@gmail.com",
  collaborateEmail: "vpath6@uic.edu",
  github: "https://github.com/VighneshDev1411",
  githubLabel: "github.com/VighneshDev1411",
  linkedin: "https://www.linkedin.com/in/vignesh-pathak-4018b7192/",
  linkedinLabel: "linkedin.com/in/vignesh-pathak-4018b7192",
  portfolio: "https://my-portfolio-eight-kappa-44.vercel.app/",
};

export const facts = [
  {
    label: "Now",
    value: "AI Full Stack Engineering Co-Op",
    sub: "Southern Illinois Healthcare",
  },
  {
    label: "Research",
    value: "Graduate Research Assistant",
    sub: "UI Health · CS421 RAG research",
  },
  {
    label: "Industry",
    value: "Accenture, 3 years",
    sub: "Fortune 500 retail GenAI",
  },
  {
    label: "Based in",
    value: "Chicago, Illinois",
    sub: "M.S. CS at UIC",
  },
];

export const about = {
  intro:
    "AI Full Stack Engineering Co-Op @ Southern Illinois Healthcare building healthcare search platforms. Graduate student in CS with 2.5+ years developing scalable GenAI systems, LLM-powered automation, and production applications",
  bio: "I'm currently an AI Full Stack Engineering Co-Op at Southern Illinois Healthcare building AI and full-stack features for the 1-Search medical search platform with Django, Go, React 19, Azure OpenAI, and Azure AI Search. I originally built that platform as a Graduate Research Assistant at UI Health (Nov 2025 – Aug 2026). Before that, a Data & AI Engineering Analyst at Accenture (3 years) delivering GenAI products for Fortune 500 retailers including Macy's, Home Depot, Walmart, and Costco. I build production-grade AI systems using Go, Python, TypeScript with LangGraph, FastAPI, Next.js, and AI infrastructure including pgvector, Voyage AI, vLLM, and Elasticsearch hybrid retrieval.",
  metrics: [
    { value: "30x", label: "Faster Searches" },
    { value: "1.2s", label: "Search Latency" },
  ],
  achievements: [
    "1-Search: 14 concurrent medical scrapers → sub-2s cached latency, 30x faster with Redis; ~95% API quota reduction via Go webhook sync",
    "VelocityLLM: self-hosted Go LLM gateway with a 5-strategy pluggable router, per-model circuit breakers, and a semantic cache (85% cosine-similarity threshold)",
    "CS421 RAG research: 2.2× better than published baseline using a 90× smaller model via multi-agent debate architecture",
    "Accenture: GenAI + RAG pipelines (Elasticsearch hybrid BM25 + dense) for Macy's, Home Depot, Walmart, Costco",
  ],
};

export const featuredProject = {
  title: "Noto",
  subtitle: "Autonomous AI Code Review SaaS",
  tag: "AI Agents",
  description:
    "Production SaaS that autonomously reviews GitHub PRs using a LangGraph multi-agent pipeline — 4 parallel Claude Sonnet specialists (Security, Bug, Performance, Style) with a Haiku Planner + Judge confidence filter. Features developer feedback few-shot learning loop and agentic auto-fix PR generation.",
  stack: [
    "FastAPI",
    "LangGraph",
    "Claude Sonnet/Haiku",
    "pgvector",
    "Voyage AI",
    "Next.js",
    "arq + Redis",
    "GitHub API",
  ],
  pipeline: [
    "Planner routes domains",
    "4 parallel specialist agents",
    "Judge confidence filter (0–100)",
    "Review posted to GitHub",
  ],
  featuresLabel: "Key Features",
  features: [
    "4 parallel specialist agents (LangGraph)",
    "Haiku Judge confidence scoring (0–100)",
    "RAG with Voyage AI code embeddings",
    "Developer feedback → few-shot learning",
    "Agentic auto-fix PR generation",
    "Real-time SSE dashboard (Redis Pub/Sub)",
    "149-test suite, 70% CI coverage gate",
    "Standalone MCP server over the agent's own data",
  ],
  highlightsLabel: "Architecture Highlights",
  highlights:
    "Two-layer AI quality filter (Planner routes domains + Judge filters noise) before posting to GitHub. Feedback loop stores accepted/false-positive signals per repo/domain and injects as few-shot examples — continuous specialization without retraining. CI runs the full suite against real Postgres+pgvector and Redis containers with strict mypy and ruff. The agent's own review history and knowledge base are also exposed as an MCP server, so it can be queried as a tool by other AI agents.",
  links: [
    { label: "View Source", href: "https://github.com/VighneshDev1411/noto" },
    { label: "Live Demo", href: "https://noto-ecru.vercel.app" },
  ],
};

export const projects = [
  {
    title: "CogniFlow",
    subtitle: "AI Workflow Automation Platform",
    tag: "Featured",
    icon: Brain,
    summary:
      "AI workflow automation platform with drag-and-drop builder and 10+ tool integrations (Slack, Gmail, Notion). Features RAG-based semantic search and intelligent orchestration.",
    description:
      "Full-stack workflow automation platform (Next.js 15, TypeScript, Supabase/pgvector) with a drag-and-drop visual builder, a BullMQ/Redis job queue for durable async execution, and a multi-provider LLM layer routing across OpenAI, Anthropic, and Gemini with per-model cost accounting.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "LangChain",
      "LangGraph",
      "GPT-4/Claude/Gemini",
      "Docker",
    ],
    featuresLabel: "Key Features",
    features: [
      "Graph-interpreter workflow engine",
      "Multi-provider LLM cost accounting",
      "BullMQ/Redis durable job queue",
      "3-scheme webhook auth (API key/bearer/HMAC)",
      "Row Level Security multi-tenant schema",
      "OAuth token lifecycle management",
    ],
    highlightsLabel: "Architecture Highlights",
    highlights:
      "Diagnosed and fixed a production Postgres Row Level Security outage caused by a parameter/column name collision, rebuilding ~25 RLS policies across 12 tables in one migration. Worked around the fact that both Vercel Cron and GitHub Actions floor at 5-minute intervals by driving workflow scheduling off a database-stored next-run timestamp instead.",
    links: [
      {
        label: "View Source",
        href: "https://github.com/VighneshDev1411/ai-automation-assistant",
      },
      {
        label: "Live Demo",
        href: "https://ai-automation-assistant.vercel.app/login",
      },
    ],
  },
  {
    title: "VelocityLLM",
    subtitle: "Distributed LLM Inference Engine",
    tag: "Backend",
    icon: Zap,
    description:
      "Self-hosted LLM gateway written in Go, routing completions across OpenAI and Anthropic through a 5-strategy pluggable router (cost/latency/quality-aware \"smart\" mode) with per-model circuit breakers, a two-tier cache, and a Redis-backed distributed rate limiter using a hand-written atomic Lua sliding-window script.",
    stack: ["Go", "PostgreSQL", "Redis", "Kubernetes", "Docker", "GORM"],
    featuresLabel: "Key Features",
    features: [
      "5-strategy pluggable routing engine",
      "Per-model circuit breakers & retry/backoff",
      "Full OAuth2 (Google/GitHub) with CSRF-protected state",
      "Two-tier cache: Redis + semantic similarity",
      "Distributed sliding-window rate limiter (Lua)",
      "Standalone Python/vLLM inference worker",
    ],
    highlightsLabel: "Architecture Highlights",
    highlights:
      "Authored production HAProxy and Nginx load-balancing configs with SSE-aware buffering, sticky sessions, and canary-weighted pools, plus Kubernetes manifests with readiness/liveness probes. A correctly-implemented OAuth2 CSRF flow (HttpOnly, SameSite state cookie) protects the auth layer.",
    links: [
      {
        label: "View Source",
        href: "https://github.com/VighneshDev1411/velocityllm",
      },
      { label: "Live Demo", href: "https://velocityllm-frontend.onrender.com" },
    ],
  },
  {
    title: "CS421 RAG Pipeline",
    subtitle: "Multi-Document RAG Research",
    tag: "Research",
    icon: Brain,
    description:
      "Evaluated 12 RAG systems on HotpotQA (multi-hop) and RAMDocs (adversarial misinformation) using a unified hybrid retrieval pipeline. Achieved 2.2× better performance than the published MADAM-RAG baseline with a model 90× smaller through multi-agent debate architecture — all inference-only, no fine-tuning.",
    stack: [
      "Python",
      "PyTorch",
      "HuggingFace",
      "FAISS",
      "BM25",
      "flan-t5-large",
      "SentenceTransformers",
    ],
    featuresLabel: "Key Results",
    features: [
      "52.5% Token F1 on HotpotQA (↑ from 14.9%)",
      "71.8% Exact Match on RAMDocs",
      "BM25 + FAISS dense + RRF fusion",
      "Multi-agent debate for misinfo defense",
      "Dynamic top-k with variance gating",
      "LLM-driven two-hop retrieval",
    ],
    highlightsLabel: "Key Insight",
    highlights:
      "Self-reflection alone failed (−7.4pp — small models lack metacognitive ability), but external disagreement signals via multi-agent debate yielded +22.6pp, enabling a 780M-param model to outperform a 70B model on adversarial misinformation.",
    links: [
      {
        label: "View Source",
        href: "https://github.com/VighneshDev1411/rag-pipeline",
      },
    ],
    note: "Report (Private)",
  },
  {
    title: "Smart Grocery App",
    subtitle: "AI-Powered Grocery Management",
    tag: "Full-Stack",
    icon: Smartphone,
    description:
      "Full-stack AI grocery management application featuring SwiftUI frontend and FastAPI backend. Implements intelligent features including OCR-based receipt parsing, automated expiry alerts, and AI-powered personalized shopping recommendations through the SmartCart recommendation engine.",
    stack: ["SwiftUI", "FastAPI", "Python", "OCR", "iOS", "REST APIs"],
    featuresLabel: "Intelligent Features",
    features: [
      "OCR receipt parsing & extraction",
      "Automated expiry tracking & alerts",
      "SmartCart recommendations (rule-based AI)",
      "Personalized shopping suggestions",
      "Inventory management system",
      "Product catalog & search",
    ],
    highlightsLabel: "Project Impact",
    highlights:
      "Demonstrates end-to-end product development combining mobile app design, backend API development, and AI integration. Features OCR technology for automating grocery tracking and rule-based recommendation system for personalized shopping experiences.",
    links: [
      {
        label: "View Source",
        href: "https://github.com/VighneshDev1411/SMART_GROCERY_IOS",
      },
    ],
    note: "iOS App (Demo)",
  },
];

export const moreProjects = {
  title: "More Projects Coming Soon",
  icon: FolderGit2,
  description:
    "I'm constantly working on new projects that showcase cutting-edge technologies like GenAI, full-stack development, and mobile applications. Stay tuned for more innovative solutions!",
  stack: [
    "Next.js",
    "React Native",
    "FastAPI",
    "LangChain",
    "Supabase",
    "Docker",
    "Azure",
    "SwiftUI",
  ],
  links: [
    { label: "View All Repositories", href: links.github },
    { label: "Let's Collaborate", href: `mailto:${links.collaborateEmail}` },
  ],
};

export const experience = [
  {
    role: "AI Full Stack Engineering Co-Op",
    company: "Southern Illinois Healthcare",
    dates: "Sept 2026 – Present",
    current: true,
    summaryLabel: "AI & Full-Stack Engineering on 1-Search",
    summary:
      "Build AI-powered search features and full-stack functionality for the 1-Search medical search platform at its new health system home. Authored the Azure/vendor access and integration checklist for migrating the platform's search index, storage, and OAuth integrations to the new organization.",
    stack: [
      "Django REST",
      "React 19",
      "Go (Chi)",
      "FastAPI",
      "Elasticsearch",
      "Azure AI Search",
      "Azure OpenAI",
      "Redis",
    ],
    contributions: [
      {
        title: "Production-Grade RAG System (AI)",
        text: "Built a production-grade RAG (Retrieval-Augmented Generation) system for organizational knowledge search using Azure AI Search and GPT-4o. Implemented 14 advanced features including hybrid search with 3-tier fallback, intelligent query enhancement, real-time confidence scoring (0-100), multi-turn conversations, query caching, and recency-weighted ranking algorithms. Engineered custom Azure skillsets with DocumentExtractionSkill and text chunking pipelines to extract and index full multi-page PDFs (30K+ chars), enabling highly accurate, citation-backed answers from medical protocols. Achieved 90%+ confidence scores on protocol queries, 304 documents indexed with full content extraction, and sub-5 second query response time with caching",
      },
      {
        title: "Excel File Search Enhancement (Full-Stack)",
        text: "Fixed Excel file search end-to-end—enhanced query handling (removed quotes for keyword search), implemented query-dependent boosting (2x for spreadsheets), fixed base64 path decoding for proper source classification, and enabled citations for organizational data. Excel files now searchable with correct answers displayed",
      },
    ],
  },
  {
    role: "AI Engineer & Software Developer (Graduate Research Assistant)",
    company: "UI Health",
    location: "Chicago, Illinois",
    dates: "Nov 2025 – Aug 2026",
    summaryLabel: "Healthcare Search Platform",
    summary:
      "Developed the 1-Search platform aggregating data from 10+ medical sources achieving 1.2s fast-mode latency. Transformed data pipeline from 30-minute polling to event-driven, low-latency architecture.",
    stack: [
      "Django REST",
      "React 19",
      "Go (Chi)",
      "FastAPI",
      "Elasticsearch",
      "MongoDB",
      "Redis",
      "Azure OpenAI",
      "Azure Blob Storage",
      "Linux",
    ],
    contributions: [
      {
        title: "Medical Search Platform",
        text: "Developed the 1-Search platform aggregating data from 10+ medical sources using Django REST, React 19, and Elasticsearch, achieving 1.2s fast-mode latency",
      },
      {
        title: "Real-Time Drive Automation System",
        text: "Built complete automation system eliminating manual sync operations. Implemented real-time webhook sync from Google Drive (< 5 sec latency) via enhanced Go connector with diagnostics and monitoring endpoint, plus scheduled backup sync every 3 hours. Automatic deletion from both blob storage and search index when files removed from Drive",
      },
      {
        title: "Enterprise Cloud Data Connector",
        text: "Developed an enterprise cloud data connector enabling seamless real-time synchronization between Google Drive and Azure infrastructure. Engineered robust async webhook handling with mutex-based concurrency control, supporting critical operations (add/rename/delete) with 99.9% reliability and <10 second latency. Transformed the pipeline from 30-minute polling to an event-driven, low-latency architecture",
      },
      {
        title: "Redis Optimization",
        text: "Implemented Redis caching enabling 30x faster duplicate searches (<0.1s) through optimized key strategies",
      },
      {
        title: "Analytics Microservice",
        text: "Created a FastAPI + MongoDB analytics microservice tracking latency, source reliability, and user behavior",
      },
      {
        title: "Infrastructure Management",
        text: "Deployed and operated services on Linux-based infrastructure, including containerized workloads, networking-level debugging, and system performance tuning",
      },
    ],
  },
  {
    role: "Data & AI Engineering Analyst",
    company: "Accenture",
    location: "Pune, India",
    dates: "Nov 2022 – Jul 2025",
    summaryLabel: "Fortune 500 Retail AI",
    summary:
      "Built end-to-end RAG pipelines integrating Azure OpenAI embeddings with Elasticsearch hybrid retrieval (BM25 + dense vector) for semantic product search and GenAI-powered catalog intelligence across Macy's, Home Depot, Walmart, and Costco.",
    stack: [
      "Python",
      "PyTorch",
      "FastAPI",
      "Azure OpenAI",
      "Elasticsearch",
      "Vector Search",
      "CrewAI",
      "Azure Data Factory",
      "Databricks",
      "React/Next.js",
      "TypeScript",
      "Azure DevOps",
      "GitHub Actions",
      "Azure Blob Storage",
      "Docker",
    ],
    contributions: [
      {
        title: "RAG-Based Semantic Search",
        text: "Built RAG-based semantic search systems using PyTorch and vector embeddings, enabling faster and more accurate product/document search for Fortune 500 retail clients including Macy's, Home Depot, Walmart, and Costco — replacing slower, less relevant keyword-based search",
      },
      {
        title: "Agentic AI Workflows",
        text: "Designed and deployed agentic AI workflows using CrewAI, automating multi-step retail data processing tasks and replacing manual workflows with autonomous, self-directed agent pipelines",
      },
      {
        title: "Deep Learning for Retail Forecasting",
        text: "Developed and fine-tuned deep learning models in PyTorch for retail forecasting and optimization use cases, improving prediction quality and enabling reliable production deployment across Fortune 500 retail client engagements",
      },
      {
        title: "Vector Search Infrastructure",
        text: "Implemented vector search infrastructure to support large-scale semantic search across retail product catalogs, enabling fast, relevant retrieval even across large, high-volume datasets",
      },
      {
        title: "End-to-End AI Search Delivery",
        text: "Delivered end-to-end AI search and retrieval solutions across multiple retail engagements, combining RAG, vector search, and agentic orchestration to solve real business problems around product discovery and workflow automation",
      },
    ],
    clients: ["Macy's", "Home Depot", "Walmart", "Costco"],
  },
  {
    role: "Java Full Stack Developer Intern",
    company: "Capgemini",
    location: "Mumbai, India",
    dates: "Jan 2022 – Apr 2022",
    summary:
      "Developed and maintained web application features using Angular for the frontend and Spring Boot for the backend, as part of a Java full-stack engineering internship",
    stack: [
      "Spring Boot",
      "Angular",
      "Java",
      "MongoDB",
      "Redis",
      "Docker",
      "Jenkins",
    ],
    contributions: [
      {
        text: "Built and integrated RESTful APIs using Spring Boot, connecting backend services with Angular-based frontend components to deliver functional end-to-end features",
      },
      {
        text: "Completed structured training and hands-on project work in Java, Spring Boot, and Angular, gaining foundational experience in full-stack software development within a professional engineering environment",
      },
    ],
  },
];

export const education = [
  {
    degree: "M.S. in Computer Science",
    school: "University of Illinois Chicago (UIC)",
    dates: "Aug 2025 – May 2027",
    coursework:
      "Computer Algorithms I, Intro to Data Science, Computability and Complexity",
  },
  {
    degree: "B.E. in Computer Science",
    school: "G.H. Raisoni College of Engineering, Nagpur, India",
    dates: "Jul 2018 – May 2022",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Go", "Python", "Java", "C++", "TypeScript", "JavaScript", "Swift", "SQL"],
  },
  {
    label: "AI/ML & Data Science",
    items: [
      "PyTorch",
      "NLP",
      "Transformers",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "OpenAI APIs",
      "Anthropic Claude",
      "RAG Pipelines",
      "vLLM",
      "Voyage AI",
      "FAISS",
      "BM25",
      "Prompt Engineering",
      "A/B Testing",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Angular", "SwiftUI", "GraphQL"],
  },
  {
    label: "Backend",
    items: [
      "Django REST",
      "FastAPI",
      "Spring Boot",
      "REST APIs",
      "Node.js",
      "gRPC",
      "Gin (Go)",
      "arq",
      "BullMQ",
      "WebSockets / SSE",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "pgvector",
      "MongoDB",
      "Elasticsearch",
      "Azure AI Search",
      "Supabase",
      "Redis",
      "GORM",
      "SQLAlchemy",
    ],
  },
  {
    label: "DevOps/Cloud",
    items: [
      "Azure (OpenAI, AI Search, Blob, App Service)",
      "Azure Data Factory",
      "Databricks",
      "Azure DevOps",
      "AWS (S3, Lambda, EC2)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Vercel",
      "Render",
    ],
  },
  {
    label: "Tools & Concepts",
    items: [
      "Git",
      "Postman",
      "JUnit",
      "VS Code",
      "Copilot",
      "DSA",
      "System Design",
      "Microservices",
      "Software Testing",
    ],
  },
];

export const contact = {
  paragraph:
    "I'm always interested in hearing about new opportunities and interesting projects. Let's create something amazing together!",
};

export const footer = {
  note: "Built with Next.js · deployed on Vercel",
};
