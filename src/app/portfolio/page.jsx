"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
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
} from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fixed useEffect for proper theme initialization
  useEffect(() => {
    setIsLoaded(true);
    // Check for saved theme preference or default to system preference
    const saved = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  // Fixed useEffect for proper theme application
  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, [darkMode]);

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
              Data & AI Engineering Analyst | Full-Stack Developer
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-300">
              I build production-grade GenAI applications, ML pipelines, and data-driven solutions
              using LLMs, PyTorch, LangChain, and modern full-stack technologies. Passionate about
              leveraging AI/ML to solve complex business problems and automate workflows.
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
                Data & AI Engineering Analyst specializing in GenAI, ML/NLP pipelines, and full-stack development
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
                    I'm a{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      Data & AI Engineering Analyst
                    </span>{" "}
                    with 3+ years of experience building{" "}
                    <span className="font-medium">GenAI-powered enterprise applications</span>,
                    developing{" "}
                    <span className="font-medium">NLP pipelines with PyTorch</span>, and
                    deploying{" "}
                    <span className="font-medium">ML models at scale</span>. I combine
                    expertise in{" "}
                    <span className="font-medium">full-stack development</span> (Next.js, Spring Boot, FastAPI),{" "}
                    <span className="font-medium">AI/ML</span> (LangChain, LangGraph, Transformers), and{" "}
                    <span className="font-medium">data science</span> (regression, clustering, A/B testing)
                    to deliver production-ready solutions.
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        45%
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Accuracy Boost
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        35%
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Efficiency Gain
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
                      <Github
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
                      <Linkedin
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
                        Product enrichment (Gemini Vision + CrewAI) → catalog
                        metadata accuracy ↑ <strong>45%</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>
                        Multi-step LLM orchestration → ops efficiency ↑{" "}
                        <strong>25–35%</strong>, response accuracy ↑{" "}
                        <strong>40%</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                      <span>
                        Angular → Next.js migration → page loads{" "}
                        <strong>~30%</strong> faster
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
                              <strong className="text-blue-600 dark:text-blue-400">Grocify (Smart Grocery Platform):</strong> Co-led development of GenAI-powered retail platform featuring
                              OCR receipt parsing, intelligent expiry alerts, and SmartCart recommendations. Built end-to-end solution serving major e-commerce clients.
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
                              "PyTorch",
                              "LangChain",
                              "LangGraph",
                              "AI Agents",
                              "Transformers",
                              "FastAPI",
                              "Next.js",
                              "TypeScript",
                              "AWS",
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
                                <strong>GenAI Application Development:</strong> Built and deployed GenAI-driven enterprise applications using LLMs, LangChain, LangGraph, and autonomous AI Agents, automating complex workflows across multiple e-commerce clients
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>NLP Pipeline Development:</strong> Developed production NLP pipelines with PyTorch for text classification, sentiment analysis, and embeddings generation. Implemented comprehensive feature engineering and preprocessing workflows
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Data Science & Analytics:</strong> Applied A/B testing, regression analysis, and clustering techniques to improve personalization and targeting accuracy by 30%. Conducted statistical analysis for data-driven decision making
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Multimodal AI Solutions:</strong> Created multimodal AI systems integrating OCR, vision models, and transformer embeddings for intelligent search, personalized recommendations, and demand forecasting
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>ML Production & MLOps:</strong> Productionized ML pipelines using FastAPI + AWS + Docker stack with CI/CD automation. Built monitoring dashboards for tracking model drift and data quality metrics
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                              <div>
                                <strong>Grocify Platform Features:</strong> Implemented OCR-based receipt parsing, expiry tracking system, SmartCart recommendations engine, and RAG-based semantic search for enhanced user experience
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
                              "Bath & Body Works",
                              "Home Depot",
                              "Kroger",
                              "Costco",
                              "Walmart",
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
                            Jan 2022 – May 2022
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
                              "PostgreSQL",
                              "MongoDB",
                              "Docker",
                              "REST APIs",
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
                              <strong>Full-Stack Development:</strong> Developed full-stack applications using Angular frontend and Spring Boot microservices backend, building responsive UI components and RESTful APIs for e-commerce platform
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                            <div>
                              <strong>Microservices Architecture:</strong> Implemented Spring Boot + MongoDB microservices for authentication and catalog APIs, improving system performance by 20% through optimized service design
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                            <div>
                              <strong>Database Optimization:</strong> Wrote complex SQL queries and optimized database schemas using PostgreSQL, implementing efficient indexes and joins for analytics reporting and data retrieval
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                            <div>
                              <strong>DevOps & Deployment:</strong> Worked on distributed data pipelines and collaborated on containerized deployments using Docker, ensuring scalable and maintainable application infrastructure
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
                          <Github size={16} />
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
                          "Python",
                          "Java",
                          "TypeScript",
                          "JavaScript",
                          "Swift",
                          "C++",
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
                          "Regression",
                          "Clustering",
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
                          "React Flow",
                          "SwiftUI",
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
                          "FastAPI",
                          "Spring Boot",
                          "REST APIs",
                          "GraphQL",
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
                          "MongoDB",
                          "Redis",
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
                          "AWS (S3, Lambda, DynamoDB)",
                          "Docker",
                          "GitHub Actions",
                          "Kubernetes",
                          "CI/CD",
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

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
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
                    Enterprise-grade AI workflow automation platform featuring a{" "}
                    <strong>drag-and-drop visual builder</strong> with 10+ tool
                    integrations including Slack, Gmail, and Notion. Built with{" "}
                    <strong>RAG-based semantic search</strong>
                    and intelligent orchestration using LangChain and LangGraph.
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
                        <span>Drag-and-drop workflow builder</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>
                          10+ tool integrations (Slack, Gmail, Notion)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>RAG-based semantic search</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span>Multi-step LLM orchestration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span>Real-time intelligent automation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <span>Supabase RLS security</span>
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
                        { name: "Next.js", color: "bg-black text-white" },
                        { name: "TypeScript", color: "bg-blue-600 text-white" },
                        { name: "Supabase", color: "bg-green-600 text-white" },
                        {
                          name: "LangChain",
                          color: "bg-purple-600 text-white",
                        },
                        {
                          name: "LangGraph",
                          color: "bg-indigo-600 text-white",
                        },
                        { name: "GPT-4", color: "bg-emerald-600 text-white" },
                        { name: "Docker", color: "bg-blue-500 text-white" },
                        { name: "PostgreSQL", color: "bg-blue-800 text-white" },
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
                      Docker monorepo with CI/CD pipeline, implementing
                      microservices architecture with Supabase Row Level
                      Security (RLS) for enterprise-grade data protection and
                      scalable deployment.
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
                      <Github
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
                      <Github
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
                    <Github size={18} />
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
                <Github
                  size={32}
                  className="text-blue-600 dark:text-blue-400 mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  github.com/VighneshDev1411
                </p>
              </div>

              <div className="p-6">
                <Linkedin
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
