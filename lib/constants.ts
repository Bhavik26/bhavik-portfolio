export const siteConfig = {
  name: "Bhavik Upadhaya",
  initials: "BU",
  role: "Full Stack Developer | AI Engineer | Machine Learning Enthusiast",
  tagline:
    "I build scalable web applications, AI-powered systems, and intelligent solutions using modern technologies.",
  description:
    "Full Stack Developer and AI Engineer specializing in React, Next.js, Node.js, Python, Machine Learning, Deep Learning, and Graph Neural Networks.",
  email: "bhavikameta964@gmail.com",
  phone: "+91 9680537545",
  github: "https://github.com/bhavikupadhaya",
  linkedin: "https://linkedin.com/in/bhavikupadhaya",
  leetcode: "https://leetcode.com/bhavikupadhaya",
  resumeUrl: "/resume.pdf",
};

export const skillCategories = [
  {
    title: "Frontend",
    color: "from-cyan-500 to-blue-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend",
    color: "from-purple-500 to-pink-500",
    skills: ["Node.js", "Express", "Flask"],
  },
  {
    title: "Database",
    color: "from-orange-500 to-red-500",
    skills: ["MongoDB", "PostgreSQL", "Neo4j", "MySQL"],
  },
  {
    title: "AI / ML",
    color: "from-violet-500 to-indigo-500",
    skills: [
      "Python",
      "PyTorch",
      "DGL",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    title: "Tools",
    color: "from-emerald-500 to-teal-500",
    skills: ["Git", "Docker", "Linux", "VS Code"],
  },
];

export const projects = [
  {
    id: 1,
    title: "EduLink – AI Powered Adaptive Exam System",
    description:
      "An AI-based adaptive examination platform using Neural Link Prediction and Knowledge Graphs to personalize learning paths and assessments.",
    tech: ["React.js", "Flask", "Neo4j", "PyTorch", "DGL"],
    features: [
      "Personalized question recommendation",
      "Knowledge graph based learning analysis",
      "AI-driven assessment",
    ],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
    github: "#",
    live: "#",
    gradient: "from-violet-600/20 to-cyan-600/20",
  },
  {
    id: 2,
    title: "CodeForge AI",
    description:
      "An AI-powered coding assistant platform designed to accelerate developer workflows with intelligent suggestions and productivity tooling.",
    tech: ["Next.js", "TypeScript", "Node.js", "OpenAI API"],
    features: [
      "AI coding assistance",
      "Developer productivity tools",
      "Modern SaaS architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    github: "#",
    live: "#",
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    id: 3,
    title: "Tour and Travel Website",
    description:
      "A full-stack travel platform with modern UI, booking flows, and robust backend services for seamless trip planning.",
    tech: ["Next.js", "React", "Node.js", "Database"],
    features: [
      "Responsive travel booking UI",
      "RESTful backend services",
      "Destination discovery & inquiry",
    ],
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop",
    github: "#",
    live: "#",
    gradient: "from-blue-600/20 to-teal-600/20",
  },
];

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Tech Solutions Inc.",
    period: "Jan 2025 – Present",
    type: "Internship",
    description:
      "Developed and maintained full-stack web applications using React, Next.js, and Node.js. Collaborated on API design, database modeling, and performance optimization.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "AI/ML Research Project",
    company: "Academic Research",
    period: "Sep 2024 – Dec 2024",
    type: "Project",
    description:
      "Built an adaptive examination system leveraging Graph Neural Networks and knowledge graphs for personalized learning recommendations and assessment analytics.",
    technologies: ["Python", "PyTorch", "DGL", "Neo4j", "Flask"],
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "Digital Agency",
    period: "Jun 2024 – Aug 2024",
    type: "Internship",
    description:
      "Designed and implemented responsive web interfaces and REST APIs. Delivered client-facing features with focus on UX, accessibility, and clean architecture.",
    technologies: ["React", "Tailwind CSS", "Express", "MongoDB"],
  },
];

export const codingAchievements = [
  { label: "Problems Solved", value: "200+", icon: "code" as const },
  { label: "GitHub Repos", value: "25+", icon: "repo" as const },
  { label: "Open Source", value: "10+", icon: "star" as const },
  { label: "Contest Rating", value: "1500+", icon: "trophy" as const },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Coding", href: "#coding" },
  { name: "Contact", href: "#contact" },
];
