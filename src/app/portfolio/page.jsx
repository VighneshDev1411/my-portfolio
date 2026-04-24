"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Code2,
  Layers,
  Play,
  Palette,
  Smartphone,
} from "lucide-react";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Brain,
  Zap,
  Award,
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
} from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialDarkMode = saved !== null ? JSON.parse(saved) : prefersDark;
    setDarkMode(initialDarkMode);

    // Apply initial theme
    const html = document.documentElement;
    const body = document.body;

    if (initialDarkMode) {
      html.classList.add("dark");
      body.classList.add("dark");
    } else {
      html.classList.remove("dark");
      body.classList.remove("dark");
    }

    setIsLoaded(true);
  }, []);

  // Apply theme changes when darkMode is toggled
  useEffect(() => {
    if (!isLoaded) return; // Don't run on initial mount

    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    const html = document.documentElement;
    const body = document.body;

    if (darkMode) {
      html.classList.add("dark");
      body.classList.add("dark");
    } else {
      html.classList.remove("dark");
      body.classList.remove("dark");
    }
  }, [darkMode, isLoaded]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "A data visualization dashboard showing weather patterns and analytics with interactive charts and maps.",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      items: ["React", "Next.js", "TypeScript"],
    },
    {
      name: "Backend Development",
      icon: Code,
      items: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "FastAPI",
        "Supabase",
      ],
    },
    { name: "UI/UX Design", icon: Palette, items: ["Figma", "Tailwind CSS"] },
    {
      name: "Mobile Development",
      icon: Smartphone,
      items: ["React Native", "iOS", "Android"],
    },
  ];

  // Better loading state
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold text-xl text-gray-900 dark:text-white">
              Vignesh Pathak
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 pt-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
                VP
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
              Vignesh Pathak
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up delay-200">
              AI Engineer & Software Developer @ UI Health | Full-Stack & AI Engineer
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-300">
              Graduate student in Computer Science with 3.5+ years of industry experience designing and deploying scalable GenAI, RAG pipelines, distributed systems, and full-stack applications. Previously at Accenture building AI products for Fortune 500 retailers. Skilled in Go, Python, TypeScript, LangGraph, Azure OpenAI, and production-grade cloud infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 transition-colors font-medium"
              >
                Get In Touch
              </a>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={24} className="text-gray-400" />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                AI Engineer @ UI Health building healthcare search platforms. Graduate student in CS with 2.5+ years developing scalable GenAI systems, LLM-powered automation, and production applications
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Column: Bio + Quick Stats */}
              <div className="lg:col-span-1 lg:sticky lg:top-24 space-y-8">
                {/* Bio Card */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-blue-100 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      VP
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Vignesh Pathak
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <MapPin size={14} />
                        <span className="text-sm">Chicago, Illinois</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    I'm currently an{" "}
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      AI Engineer & Software Developer at UI Health
                    </span>{" "}
                    building healthcare AI search platforms with{" "}
                    <span className="font-medium">Django, Go, React 19, Azure OpenAI, and Azure AI Search</span>. Previously a{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      Data & AI Engineering Analyst at Accenture
                    </span>{" "}
                    (3 years) delivering GenAI products for Fortune 500 retailers including{" "}
                    <span className="font-medium">Macy's, Home Depot, Walmart, and Costco</span>. I build
                    production-grade AI systems using{" "}
                    <span className="font-medium">Go, Python, TypeScript</span> with{" "}
                    <span className="font-medium">LangGraph, FastAPI, Next.js</span>, and AI infrastructure including{" "}
                    <span className="font-medium">pgvector, Voyage AI, vLLM, and Elasticsearch hybrid retrieval</span>.
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        30x
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Faster Searches
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        1.2s
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Search Latency
                      </div>
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="mailto:vigneshpathak14@gmail.com"
                      className="flex items-center justify-center gap-2 p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300 group"
                      aria-label="Email"
                    >
                      <Mail
                        size={16}
                        className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                    <a
                      href="https://github.com/VighneshDev1411"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300 group"
                      aria-label="GitHub"
                    >
                      <GithubIcon
                        size={16}
                        className="text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vignesh-pathak-4018b7192/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300 group"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon
                        size={16}
                        className="text-blue-700 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                      href="https://my-portfolio-eight-kappa-44.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300 group"
                      aria-label="Portfolio"
                    >
                      <ExternalLink
                        size={16}
                        className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm font-medium">Portfolio</span>
                    </a>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="text-yellow-500" size={20} />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Key Achievements
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <span>
                        1-Search: 14 concurrent medical scrapers → <strong>sub-2s</strong> cached latency, <strong>30x</strong> faster with Redis; ~95% API quota reduction via Go webhook sync
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>
                        VelocityLLM: <strong>67% cost reduction</strong> vs OpenAI API via semantic caching (85% cosine similarity) + complexity-based routing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                      <span>
                        CS421 RAG research: <strong>2.2× better</strong> than published baseline using a <strong>90× smaller</strong> model via multi-agent debate architecture
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span>
                        Accenture: GenAI + RAG pipelines (Elasticsearch hybrid BM25 + dense) for <strong>Macy's, Home Depot, Walmart, Costco</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Experience & Education */}
              <div className="lg:col-span-2 space-y-8">
                {/* Experience Section */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Briefcase
                        className="text-blue-600 dark:text-blue-400"
                        size={20}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Professional Experience
                    </h3>
                  </div>

                  <div className="space-y-8">
                    {/* UI Health - Graduate Hourly (Current) */}
                    <div className="relative pl-6 border-l-2 border-green-200 dark:border-green-800">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>

                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            AI Engineer & Software Developer (Graduate Hourly)
                          </h4>
                          <span className="text-sm px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full font-medium">
                            Nov 2025 – Present
                          </span>
                        </div>
                        <p className="text-green-600 dark:text-green-400 font-medium mb-3">
                          UI Health | Chicago, Illinois
                        </p>

                        {/* Key Projects */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                            <Zap size={16} className="text-yellow-500" />
                            Major Projects & Impact:
                          </h5>
                          <div className="mb-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              <strong className="text-green-600 dark:text-green-400">Healthcare Search Platform:</strong> Developed the 1-Search platform aggregating data from 10+ medical sources achieving 1.2s fast-mode latency. Transformed data pipeline from 30-minute polling to event-driven, low-latency architecture.
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            Tech Stack:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {[
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
                            ].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm rounded-full border border-green-200 dark:border-green-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Detailed Achievements */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                            <Award size={16} className="text-green-500" />
                            Key Contributions:
                          </h5>
                          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Medical Search Platform:</strong> Developed the 1-Search platform aggregating data from 10+ medical sources using Django REST, React 19, and Elasticsearch, achieving 1.2s fast-mode latency
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Production-Grade RAG System:</strong> Built a production-grade RAG (Retrieval-Augmented Generation) system for organizational knowledge search using Azure AI Search and GPT-4o. Implemented 14 advanced features including hybrid search with 3-tier fallback, intelligent query enhancement, real-time confidence scoring (0-100), multi-turn conversations, query caching, and recency-weighted ranking algorithms. Engineered custom Azure skillsets with DocumentExtractionSkill and text chunking pipelines to extract and index full multi-page PDFs (30K+ chars), enabling highly accurate, citation-backed answers from medical protocols. Achieved 90%+ confidence scores on protocol queries, 304 documents indexed with full content extraction, and sub-5 second query response time with caching
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Excel File Search Enhancement:</strong> Fixed Excel file search end-to-end—enhanced query handling (removed quotes for keyword search), implemented query-dependent boosting (2x for spreadsheets), fixed base64 path decoding for proper source classification, and enabled citations for organizational data. Excel files now searchable with correct answers displayed
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Real-Time Drive Automation System:</strong> Built complete automation system eliminating manual sync operations. Implemented real-time webhook sync from Google Drive (&lt; 5 sec latency) via enhanced Go connector with diagnostics and monitoring endpoint, plus scheduled backup sync every 3 hours. Automatic deletion from both blob storage and search index when files removed from Drive
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Enterprise Cloud Data Connector:</strong> Developed an enterprise cloud data connector enabling seamless real-time synchronization between Google Drive and Azure infrastructure. Engineered robust async webhook handling with mutex-based concurrency control, supporting critical operations (add/rename/delete) with 99.9% reliability and &lt;10 second latency. Transformed the pipeline from 30-minute polling to an event-driven, low-latency architecture
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Redis Optimization:</strong> Implemented Redis caching enabling 30x faster duplicate searches (&lt;0.1s) through optimized key strategies
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Analytics Microservice:</strong> Created a FastAPI + MongoDB analytics microservice tracking latency, source reliability, and user behavior
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Infrastructure Management:</strong> Deployed and operated services on Linux-based infrastructure, including containerized workloads, networking-level debugging, and system performance tuning
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Accenture */}
                    <div className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>

                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Data & AI Engineering Analyst
                          </h4>
                          <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium">
                            Nov 2022 – Jul 2025
                          </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                          Accenture | Pune, India
                        </p>

                        {/* Key Projects */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                            <Zap size={16} className="text-yellow-500" />
                            Major Projects & Impact:
                          </h5>
                          <div className="mb-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              <strong className="text-blue-600 dark:text-blue-400">Fortune 500 Retail AI:</strong> Built end-to-end RAG pipelines integrating Azure OpenAI embeddings with Elasticsearch hybrid retrieval (BM25 + dense vector) for semantic product search and GenAI-powered catalog intelligence across Macy's, Home Depot, Walmart, and Costco.
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            Tech Stack:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Python",
                              "FastAPI",
                              "Azure OpenAI",
                              "Elasticsearch",
                              "Azure Data Factory",
                              "Databricks",
                              "React/Next.js",
                              "TypeScript",
                              "Azure DevOps",
                              "GitHub Actions",
                              "Azure Blob Storage",
                              "Docker",
                            ].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Detailed Achievements */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                            <Award size={16} className="text-green-500" />
                            Key Contributions:
                          </h5>
                          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Hybrid RAG Pipelines:</strong> Engineered end-to-end RAG pipelines integrating Azure OpenAI embeddings with Elasticsearch hybrid retrieval (BM25 + dense vector), powering semantic search and product discovery for Macy's, Home Depot, Walmart, and Costco
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>GenAI Catalog Intelligence:</strong> Built GenAI-powered recommendation and catalog intelligence tools in Python/FastAPI on Azure, enabling natural language product search, automated tagging, and inventory Q&A across million-SKU retail datasets
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>ETL & Data Engineering:</strong> Designed ETL pipelines using Azure Data Factory and Databricks to ingest, transform, and index large-scale retail transaction and product data into vector and relational stores for downstream LLM consumption
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>AI Dashboards:</strong> Developed full-stack AI dashboards in React/Next.js surfacing model predictions, search analytics, and GenAI output monitoring to business stakeholders across 4 retail enterprise engagements
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Client Delivery:</strong> Collaborated with solution architects and Fortune 500 client product teams to translate business requirements into AI product roadmaps, sprint plans, and phased delivery milestones
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>CI/CD & Compliance:</strong> Implemented CI/CD pipelines via Azure DevOps and GitHub Actions, enforcing compliance guardrails and automating model deployment workflows across cloud-native retail infrastructure
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Prompt Engineering & Evaluation:</strong> Conducted prompt engineering, evaluation, and iterative fine-tuning of LLM workflows, improving response relevance and reducing hallucination rates across customer-facing GenAI products
                              </div>
                            </li>
                          </ul>
                        </div>

                        {/* Client Portfolio */}
                        <div className="mt-4">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-xs">
                            Enterprise Clients:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Macy's",
                              "Home Depot",
                              "Walmart",
                              "Costco",
                            ].map((client) => (
                              <span
                                key={client}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-700 dark:text-gray-300"
                              >
                                {client}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Capgemini */}
                    <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>

                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Java Full Stack Developer Intern
                          </h4>
                          <span className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium">
                            Jan 2022 – Apr 2022
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                          Capgemini | Mumbai, India
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">
                            Tech Stack:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Spring Boot",
                              "Angular",
                              "Java",
                              "MongoDB",
                              "Redis",
                              "Docker",
                              "Jenkins",
                            ].map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-700 dark:text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <ul className="space-y-2.5 text-sm text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                            <div>
                              <strong>RESTful Microservices:</strong> Designed and implemented RESTful microservices using Spring Boot (Spring MVC, Spring Data JPA, Spring Security) with MongoDB persistence; built Angular frontend with RxJS, NgRx state management, and Material UI components
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                            <div>
                              <strong>Database Optimization:</strong> Optimized database layer with indexed queries, N+1 problem resolution, and Redis caching strategy; implemented connection pooling (HikariCP) achieving 20% query latency reduction and 30% concurrent request handling improvement
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                            <div>
                              <strong>DevOps Workflow:</strong> Established DevOps workflow with Docker multi-stage builds, Jenkins pipeline automation, and container orchestration; implemented automated unit/integration testing, blue-green deployments, and ELK stack monitoring
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education & Featured Project */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Education */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <GraduationCap
                          className="text-purple-600 dark:text-purple-400"
                          size={20}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Education
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              M.S. in Computer Science
                            </h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                              University of Illinois Chicago (UIC)
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              <strong>Coursework:</strong> Computer Algorithms I, Intro to Data Science, Computability and Complexity
                            </p>
                          </div>
                          <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded whitespace-nowrap">
                            Aug 2025 – May 2027
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              B.E. in Computer Science
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              G.H. Raisoni College of Engineering, Nagpur, India
                            </p>
                          </div>
                          <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded whitespace-nowrap">
                            Jul 2018 – May 2022
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Project */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl border border-blue-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Code
                          className="text-blue-600 dark:text-blue-400"
                          size={20}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Featured Project
                      </h3>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">
                        CogniFlow
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        AI workflow automation platform with drag-and-drop
                        builder and 10+ tool integrations (Slack, Gmail,
                        Notion). Features RAG-based semantic search and
                        intelligent orchestration.
                      </p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {[
                          "Next.js",
                          "TypeScript",
                          "Supabase",
                          "LangChain",
                          "GPT-4",
                          "Docker",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/50 dark:bg-gray-700/50 text-xs rounded text-gray-700 dark:text-gray-300 border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href="https://github.com/VighneshDev1411/ai-automation-assistant"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white dark:bg-gray-700 hover:shadow-md transition-all duration-300 font-medium"
                        >
                          <GithubIcon size={16} />
                          GitHub
                        </a>
                        <a
                          href="https://ai-automation-assistant.vercel.app/login"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-medium"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Brain
                        className="text-green-600 dark:text-green-400"
                        size={20}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Technical Skills
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {/* Languages */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <Code size={16} className="text-blue-500" />
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Go",
                          "Python",
                          "Java",
                          "C++",
                          "TypeScript",
                          "JavaScript",
                          "Swift",
                          "SQL",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* AI/ML */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <Brain size={16} className="text-purple-500" />
                        AI/ML & Data Science
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
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
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-xs rounded-full text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Frontend */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <Palette size={16} className="text-blue-500" />
                        Frontend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React",
                          "Next.js",
                          "Angular",
                          "SwiftUI",
                          "GraphQL",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-xs rounded-full text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <Code2 size={16} className="text-green-500" />
                        Backend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
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
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-xs rounded-full text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Databases */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <Layers size={16} className="text-indigo-500" />
                        Databases
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "PostgreSQL",
                          "pgvector",
                          "MongoDB",
                          "Elasticsearch",
                          "Azure AI Search",
                          "Supabase",
                          "Redis",
                          "GORM",
                          "SQLAlchemy",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-xs rounded-full text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* DevOps/Cloud */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <Zap size={16} className="text-yellow-500" />
                        DevOps/Cloud
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
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
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-xs rounded-full text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tools & Concepts */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                        <Code size={16} className="text-gray-500" />
                        Tools & Concepts
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Git",
                          "Postman",
                          "JUnit",
                          "VS Code",
                          "Copilot",
                          "DSA",
                          "System Design",
                          "Microservices",
                          "Software Testing",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real-world applications showcasing GenAI automation, mobile
                development, and full-stack engineering
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* CogniFlow - AI Automation Platform */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Project Header */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-blue-600 p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Brain className="text-white" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            CogniFlow
                          </h3>
                          <p className="text-blue-100">
                            AI Workflow Automation Platform
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
                </div>

                <div className="p-8">
                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    Full-stack automation platform (<strong>66K+ LOC</strong>) with Next.js 15, TypeScript, PostgreSQL/pgvector featuring visual workflow builder, multi-model AI orchestration, RAG system, and OAuth integrations serving <strong>100+ users</strong>. Designed with multi-tenant SaaS, WebSocket collaboration achieving <strong>sub-200ms API latency</strong> and <strong>99.9% uptime</strong>.
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Zap size={18} className="text-yellow-500" />
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>Graph-based workflow engine</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>Multi-model AI orchestration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>RAG with pgvector</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span>OAuth 2.0 integrations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span>Multi-tenant SaaS architecture</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <span>99.9% uptime, sub-200ms latency</span>
                      </li>
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Code2 size={18} className="text-blue-500" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Next.js 15", color: "bg-black text-white" },
                        { name: "TypeScript", color: "bg-blue-600 text-white" },
                        { name: "PostgreSQL", color: "bg-blue-800 text-white" },
                        { name: "pgvector", color: "bg-purple-700 text-white" },
                        {
                          name: "LangChain",
                          color: "bg-purple-600 text-white",
                        },
                        {
                          name: "LangGraph",
                          color: "bg-indigo-600 text-white",
                        },
                        { name: "GPT-4/Claude/Gemini", color: "bg-emerald-600 text-white" },
                        { name: "Docker", color: "bg-blue-500 text-white" },
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Highlights */}
                  <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Layers size={16} className="text-purple-500" />
                      Architecture Highlights
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Built graph-based workflow engine with conditional branching, parallel execution, error recovery achieving 95%+ success rates across 10K+ executions. Integrated multi-provider AI agents with function calling, intelligent routing, and cost tracking reducing operational costs by 40%.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/VighneshDev1411/ai-automation-assistant"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium group"
                    >
                      <GithubIcon
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span>View Source</span>
                    </a>
                    <a
                      href="https://ai-automation-assistant.vercel.app/login"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium group"
                    >
                      <Play
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Smart Grocery iOS App */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Project Header */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Smartphone className="text-white" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            Smart Grocery App
                          </h3>
                          <p className="text-green-100">
                            AI-Powered Grocery Management
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                          Full-Stack
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
                </div>

                <div className="p-8">
                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    Full-stack AI grocery management application featuring{" "}
                    <strong>SwiftUI frontend</strong> and{" "}
                    <strong>FastAPI backend</strong>. Implements intelligent features
                    including OCR-based receipt parsing, automated expiry alerts, and
                    AI-powered personalized shopping recommendations through the SmartCart
                    recommendation engine.
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Brain size={18} className="text-green-500" />
                      Intelligent Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>OCR receipt parsing & extraction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>Automated expiry tracking & alerts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>SmartCart recommendations (rule-based AI)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span>Personalized shopping suggestions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span>Inventory management system</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <span>Product catalog & search</span>
                      </li>
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Code2 size={18} className="text-green-500" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "SwiftUI", color: "bg-blue-600 text-white" },
                        { name: "FastAPI", color: "bg-green-600 text-white" },
                        { name: "Python", color: "bg-yellow-600 text-white" },
                        { name: "OCR", color: "bg-purple-600 text-white" },
                        { name: "iOS", color: "bg-gray-700 text-white" },
                        { name: "REST APIs", color: "bg-indigo-600 text-white" },
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Zap size={16} className="text-green-500" />
                      Project Impact
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Demonstrates end-to-end product development combining mobile app design,
                      backend API development, and AI integration. Features OCR technology for
                      automating grocery tracking and rule-based recommendation system for
                      personalized shopping experiences.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/VighneshDev1411/SMART_GROCERY_IOS"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium group"
                    >
                      <GithubIcon
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span>View Source</span>
                    </a>
                    <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg opacity-50 cursor-not-allowed">
                      <Smartphone size={18} />
                      <span>iOS App (Demo)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* VelocityLLM - Distributed LLM Inference Engine */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Project Header */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Zap className="text-white" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            VelocityLLM
                          </h3>
                          <p className="text-orange-100">
                            Distributed LLM Inference Engine
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                          Backend
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
                </div>

                <div className="p-8">
                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    Go-based distributed inference system achieving{" "}
                    <strong>67% cost reduction</strong> vs OpenAI API with{" "}
                    <strong>&lt; 200ms latency</strong>. Features RESTful microservices with PostgreSQL, Redis caching, and clean architecture principles. Scaled for reliability via Kubernetes orchestration, health checks, and observability middleware.
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Zap size={18} className="text-orange-500" />
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span>67% cost reduction vs OpenAI</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span>Sub-200ms latency at scale</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                        <span>RESTful microservices architecture</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>Redis caching & PostgreSQL persistence</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>Kubernetes orchestration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>Clean architecture & observability</span>
                      </li>
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Code2 size={18} className="text-orange-500" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Go", color: "bg-cyan-600 text-white" },
                        { name: "PostgreSQL", color: "bg-blue-700 text-white" },
                        { name: "Redis", color: "bg-red-600 text-white" },
                        { name: "Kubernetes", color: "bg-blue-600 text-white" },
                        { name: "Docker", color: "bg-blue-500 text-white" },
                        { name: "GORM", color: "bg-gray-700 text-white" },
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Highlights */}
                  <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Layers size={16} className="text-orange-500" />
                      Architecture Highlights
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Implements clean architecture principles with separation of concerns, dependency injection, and domain-driven design. Features health checks, metrics collection, and distributed tracing for production-grade observability.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/VighneshDev1411/velocityllm"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium group"
                    >
                      <GithubIcon
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span>View Source</span>
                    </a>
                    <a
                      href="https://velocityllm-frontend.onrender.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all font-medium group"
                    >
                      <Play size={18} className="group-hover:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Noto + CS421 */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">

              {/* Noto - Autonomous AI Code Review */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Code2 className="text-white" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Noto</h3>
                          <p className="text-purple-100">Autonomous AI Code Review SaaS</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                        AI Agents
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    Production SaaS that autonomously reviews GitHub PRs using a <strong>LangGraph multi-agent pipeline</strong> — 4 parallel Claude Sonnet specialists (Security, Bug, Performance, Style) with a Haiku Planner + Judge confidence filter. Features developer feedback few-shot learning loop and agentic auto-fix PR generation.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Zap size={18} className="text-violet-500" />
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                        <span>4 parallel specialist agents (LangGraph)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>Haiku Judge confidence scoring (0–100)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <span>RAG with Voyage AI code embeddings</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>Developer feedback → few-shot learning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                        <span>Agentic auto-fix PR generation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>Real-time SSE dashboard (Redis Pub/Sub)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Code2 size={18} className="text-violet-500" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "FastAPI", color: "bg-green-700 text-white" },
                        { name: "LangGraph", color: "bg-indigo-600 text-white" },
                        { name: "Claude Sonnet/Haiku", color: "bg-purple-700 text-white" },
                        { name: "pgvector", color: "bg-blue-700 text-white" },
                        { name: "Voyage AI", color: "bg-violet-600 text-white" },
                        { name: "Next.js", color: "bg-black text-white" },
                        { name: "arq + Redis", color: "bg-red-600 text-white" },
                        { name: "GitHub API", color: "bg-gray-800 text-white" },
                      ].map((tech, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Layers size={16} className="text-violet-500" />
                      Architecture Highlights
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Two-layer AI quality filter (Planner routes domains + Judge filters noise) before posting to GitHub. Feedback loop stores accepted/false-positive signals per repo/domain and injects as few-shot examples — continuous specialization without retraining.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/VighneshDev1411/noto"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium group"
                    >
                      <GithubIcon size={18} className="group-hover:scale-110 transition-transform" />
                      <span>View Source</span>
                    </a>
                    <a
                      href="https://noto-ecru.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all font-medium group"
                    >
                      <Play size={18} className="group-hover:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* CS421 - Multi-Document RAG Research */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <div className="bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-600 p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Brain className="text-white" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">CS421 RAG Pipeline</h3>
                          <p className="text-teal-100">Multi-Document RAG Research</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                        Research
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                    Evaluated <strong>12 RAG systems</strong> on HotpotQA (multi-hop) and RAMDocs (adversarial misinformation) using a unified hybrid retrieval pipeline. Achieved <strong>2.2× better performance than the published MADAM-RAG baseline</strong> with a model <strong>90× smaller</strong> through multi-agent debate architecture — all inference-only, no fine-tuning.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Award size={18} className="text-teal-500" />
                      Key Results
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                        <span>52.5% Token F1 on HotpotQA (↑ from 14.9%)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                        <span>71.8% Exact Match on RAMDocs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>BM25 + FAISS dense + RRF fusion</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <span>Multi-agent debate for misinfo defense</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>Dynamic top-k with variance gating</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>LLM-driven two-hop retrieval</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Code2 size={18} className="text-teal-500" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Python", color: "bg-blue-600 text-white" },
                        { name: "PyTorch", color: "bg-orange-600 text-white" },
                        { name: "HuggingFace", color: "bg-yellow-600 text-white" },
                        { name: "FAISS", color: "bg-teal-700 text-white" },
                        { name: "BM25", color: "bg-cyan-700 text-white" },
                        { name: "flan-t5-large", color: "bg-purple-700 text-white" },
                        { name: "SentenceTransformers", color: "bg-indigo-600 text-white" },
                      ].map((tech, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Layers size={16} className="text-teal-500" />
                      Key Insight
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Self-reflection alone failed (−7.4pp — small models lack metacognitive ability), but external disagreement signals via multi-agent debate yielded +22.6pp, enabling a 780M-param model to outperform a 70B model on adversarial misinformation.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/VighneshDev1411/rag-pipeline"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium group"
                    >
                      <GithubIcon size={18} className="group-hover:scale-110 transition-transform" />
                      <span>View Source</span>
                    </a>
                    <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg opacity-50 cursor-not-allowed">
                      <Code2 size={18} />
                      <span>Report (Private)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Projects Teaser */}
            <div className="text-center">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto">
                <div className="mb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
                      <Code2
                        className="text-blue-600 dark:text-blue-400"
                        size={32}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    More Projects Coming Soon
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
                    I'm constantly working on new projects that showcase
                    cutting-edge technologies like GenAI, full-stack
                    development, and mobile applications. Stay tuned for more
                    innovative solutions!
                  </p>
                </div>

                {/* Skills Preview */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {[
                    "Next.js",
                    "React Native",
                    "FastAPI",
                    "LangChain",
                    "Supabase",
                    "Docker",
                    "Azure",
                    "SwiftUI",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/VighneshDev1411"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium"
                  >
                    <GithubIcon size={18} />
                    View All Repositories
                  </a>
                  <a
                    href="mailto:vpath6@uic.edu"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                    Let's Collaborate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and
              interesting projects. Let's create something amazing together!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6">
                <Mail
                  size={32}
                  className="text-blue-600 dark:text-blue-400 mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  vigneshpathak14@gmail.com
                </p>
              </div>

              <div className="p-6">
                <GithubIcon
                  size={32}
                  className="text-blue-600 dark:text-blue-400 mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  github.com/VighneshDev1411
                </p>
              </div>

              <div className="p-6">
                <LinkedinIcon
                  size={32}
                  className="text-blue-600 dark:text-blue-400 mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  linkedin.com/in/vignesh-pathak-4018b7192
                </p>
              </div>
            </div>

            <a
              href="mailto:vigneshpathak14@gmail.com"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              Send me an email
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Vignesh Pathak. Built with Next.js and deployed on Vercel.
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }

        .delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
