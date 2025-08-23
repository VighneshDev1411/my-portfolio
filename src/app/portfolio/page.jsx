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
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  // Fixed useEffect for proper theme application
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
      
      const html = document.documentElement;
      const body = document.body;
      
      if (darkMode) {
        html.classList.add('dark');
        body.classList.add('dark');
      } else {
        html.classList.remove('dark');
        body.classList.remove('dark');
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
            <div className="font-bold text-xl text-gray-900 dark:text-white">Vignesh Pathak</div>

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
              {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
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
              GenAI & LLM Full-Stack Engineer
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-300">
              I create intelligent automation solutions and AI-powered applications that solve real-world problems using cutting-edge technology.
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
                GenAI & LLM-focused full-stack engineer passionate about
                building intelligent automation solutions
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
                      GenAI & LLM-focused full-stack engineer
                    </span>{" "}
                    who ships production AI applications with{" "}
                    <span className="font-medium">Next.js (TypeScript)</span>,
                    elegant UIs with
                    <span className="font-medium"> Tailwind CSS</span>, and
                    intelligent automations using
                    <span className="font-medium"> LangChain</span> and{" "}
                    <span className="font-medium">LangGraph</span>.
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
                      href="mailto:vpath6@uic.edu"
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
                      href="https://www.linkedin.com/in/vighnesh-pathak-4018b7192/"
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
                      href="https://myporfolio2025.netlify.app"
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
                            GenAI & LLM Full-Stack Engineer Analyst
                          </h4>
                          <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium">
                            Nov 2022 – Jul 2025
                          </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                          Accenture
                        </p>

                        {/* Key Projects */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            Major Projects & Clients:
                          </h5>
                          <div className="grid sm:grid-cols-2 gap-3 mb-3">
                            <div className="flex items-center gap-2">
                              <Zap size={14} className="text-yellow-500" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Grocify Project:</strong> Google-funded
                                GenAI e-grocery platform
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Brain size={14} className="text-purple-500" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                Enterprise AI features for retail giants
                              </span>
                            </div>
                          </div>

                          {/* Client logos/names */}
                          <div className="flex flex-wrap gap-2 mb-4">
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

                        {/* Tech Stack */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            Tech Stack:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Next.js",
                              "TypeScript",
                              "Tailwind CSS",
                              "LangChain",
                              "LangGraph",
                              "CrewAI",
                              "GPT-4",
                              "Azure",
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

                        {/* Key Achievements */}
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                            <span>
                              Developed Gemini Vision + CrewAI engine for
                              auto-extracting product attributes (sleeve,
                              neckline, fabric, color)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                            <span>
                              Implemented LangGraph-driven orchestration for
                              multi-step AI workflows with real-time
                              intelligence
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                            <span>
                              Led Angular to Next.js migration reducing load
                              times and improving developer experience
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Capgemini */}
                    <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>

                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Full Stack Developer Intern
                          </h4>
                          <span className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium">
                            Jan 2022 – May 2022
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                          Capgemini
                        </p>

                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                            <span>
                              Developed Spring Boot microservice backend for
                              e-commerce platform with authentication & order
                              management
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                            <span>
                              Implemented RBAC + JWT authentication ensuring
                              99.9% session reliability
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                            <span>
                              Optimized MongoDB queries reducing latency by 40%
                              and achieved 85%+ test coverage
                            </span>
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
                              M.S. Computer Science
                            </h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">
                              University of Illinois Chicago
                            </p>
                          </div>
                          <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                            Aug 2025 – May 2027
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              B.E. Computer Science
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              G.H. Raisoni College of Engineering
                            </p>
                          </div>
                          <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
                            GPA: 8.63/10
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
                          href="https://ai-automation-assistant-iaw7os0z8.vercel.app/dashboard"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
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

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Python",
                          "Java",
                          "JavaScript",
                          "TypeScript",
                          "C++",
                          "SwiftUI",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-700 dark:text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Spring Boot",
                          "React",
                          "Angular",
                          "Next.js",
                          "FastAPI",
                          "React Native",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-700 dark:text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        AI/ML
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "GPT-4",
                          "LangChain",
                          "LangGraph",
                          "Hugging Face",
                          "RAG",
                          "CrewAI",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-xs rounded text-blue-700 dark:text-blue-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Cloud & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Azure",
                          "GCP",
                          "Docker",
                          "PostgreSQL",
                          "MongoDB",
                          "Redis",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-700 dark:text-gray-300"
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
        <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real-world applications showcasing GenAI automation, mobile development, and full-stack engineering
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
                          <h3 className="text-2xl font-bold text-white">CogniFlow</h3>
                          <p className="text-blue-100">AI Workflow Automation Platform</p>
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
                    Enterprise-grade AI workflow automation platform featuring a <strong>drag-and-drop visual builder</strong> with 
                    10+ tool integrations including Slack, Gmail, and Notion. Built with <strong>RAG-based semantic search</strong> 
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
                        <span>10+ tool integrations (Slack, Gmail, Notion)</span>
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
                        { name: 'Next.js', color: 'bg-black text-white' },
                        { name: 'TypeScript', color: 'bg-blue-600 text-white' },
                        { name: 'Supabase', color: 'bg-green-600 text-white' },
                        { name: 'LangChain', color: 'bg-purple-600 text-white' },
                        { name: 'LangGraph', color: 'bg-indigo-600 text-white' },
                        { name: 'GPT-4', color: 'bg-emerald-600 text-white' },
                        { name: 'Docker', color: 'bg-blue-500 text-white' },
                        { name: 'PostgreSQL', color: 'bg-blue-800 text-white' }
                      ].map((tech, index) => (
                        <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}>
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
                      Docker monorepo with CI/CD pipeline, implementing microservices architecture with 
                      Supabase Row Level Security (RLS) for enterprise-grade data protection and scalable deployment.
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
                      <Github size={18} className="group-hover:scale-110 transition-transform" />
                      <span>View Source</span>
                    </a>
                    <a
                      href="https://ai-automation-assistant-iaw7os0z8.vercel.app/dashboard"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium group"
                    >
                      <Play size={18} className="group-hover:scale-110 transition-transform" />
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
                          <h3 className="text-2xl font-bold text-white">Smart Grocery</h3>
                          <p className="text-green-100">iOS Shopping Experience</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                          Mobile
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
                    Native iOS grocery shopping application built with <strong>SwiftUI</strong> featuring modern design patterns, 
                    intuitive user experience, and seamless shopping functionality. Demonstrates advanced iOS development 
                    skills and mobile UI/UX best practices.
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Smartphone size={18} className="text-green-500" />
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span>SwiftUI modern interface</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>Intuitive shopping flow</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span>Product catalog management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span>Cart & checkout system</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span>Responsive design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <span>iOS best practices</span>
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
                        { name: 'SwiftUI', color: 'bg-blue-600 text-white' },
                        { name: 'Swift', color: 'bg-orange-600 text-white' },
                        { name: 'Xcode', color: 'bg-blue-500 text-white' },
                        { name: 'iOS SDK', color: 'bg-gray-700 text-white' },
                        { name: 'MVVM', color: 'bg-purple-600 text-white' },
                        { name: 'Combine', color: 'bg-green-600 text-white' }
                      ].map((tech, index) => (
                        <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Development Highlights */}
                  <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Smartphone size={16} className="text-green-500" />
                      iOS Development Excellence
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Showcases mastery of SwiftUI declarative syntax, MVVM architecture, and iOS Human Interface Guidelines 
                      for creating native mobile experiences that feel natural on Apple platforms.
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
                      <Github size={18} className="group-hover:scale-110 transition-transform" />
                      <span>View Source</span>
                    </a>
                    <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed">
                      <Smartphone size={18} />
                      <span>iOS App</span>
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
                      <Code2 className="text-blue-600 dark:text-blue-400" size={32} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">More Projects Coming Soon</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
                    I'm constantly working on new projects that showcase cutting-edge technologies like GenAI, 
                    full-stack development, and mobile applications. Stay tuned for more innovative solutions!
                  </p>
                </div>
                
                {/* Skills Preview */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {['Next.js', 'React Native', 'FastAPI', 'LangChain', 'Supabase', 'Docker', 'Azure', 'SwiftUI'].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
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
                  vpath6@uic.edu
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
                  LinkedIn Profile
                </p>
              </div>
            </div>

            <a
              href="mailto:vpath6@uic.edu"
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
          from { opacity: 0; }
          to { opacity: 1; }
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