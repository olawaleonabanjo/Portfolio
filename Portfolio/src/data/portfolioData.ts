import foreverCover from '../assets/forever-cover.png';
import devspaceCover from '../assets/devspace-cover.png';
import fintrackCover from '../assets/fintrack-cover.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile/Web';
  featured: boolean;
  accentColor: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  role?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; icon: string }[];
}

export const personalInfo = {
  name: "Onabanjo Olawale",
  nickname: "Lexzy",
  brandName: "Code with Lexzy",
  title: "Frontend Developer | Full Stack Developer",
  status: "Available for new roles & freelance",
  currentRole: "Frontend Developer (NYSC) @ Wema Bank Plc",
  location: "Lagos State, Nigeria",
  phone: "07082625772",
  phoneFormatted: "+234 708 262 5772",
  email: "olawaleonabanjo6@gmail.com",
  linkedin: "https://linkedin.com/in/olawaleonabanjo",
  linkedinHandle: "linkedin.com/in/olawaleonabanjo",
  github: "https://github.com/olawaleonabanjo",
  githubHandle: "github.com/olawaleonabanjo",
  twitter: "https://x.com/codewithlexzy",
  twitterHandle: "@codewithlexzy",
  instagram: "https://www.instagram.com/codewithlexzy_",
  instagramHandle: "@codewithlexzy_",
  summary: "Computer Science graduate currently serving with the NYSC on the frontend team at Wema Bank Plc, building web applications with React and TypeScript. Comfortable across the stack with Node.js and Express.js, and experienced in shipping multiple websites. Seeking a frontend developer role where I can turn user needs into clean, reliable, user-friendly software.",
  stats: [
    { label: "Experience", value: "NYSC @ Wema Bank" },
    { label: "Featured Projects", value: "5+ Shipped" },
    { label: "Core Focus", value: "React & TypeScript" },
    { label: "Satisfaction", value: "Clean Code & UX" },
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "wema-bank",
    role: "Frontend Developer (NYSC Corps Member)",
    company: "Wema Bank Plc",
    type: "National Youth Service",
    period: "Jun 2026 – Present",
    location: "Lagos, Nigeria",
    description: "Contributing to enterprise frontend applications, architecting responsive client interfaces, and collaborating with cross-functional engineering teams.",
    highlights: [
      "Part of the core frontend team, building modern web projects with React and TypeScript.",
      "Built the frontend of DevSpace, a social platform for developers and tech-minded users, using React, TypeScript, and Tailwind CSS.",
      "Developed key DevSpace features including the feed, people page, leaderboard, navbar, browsing history, and article details page.",
      "Implemented responsive layouts and state management to provide smooth, high-performance interactions."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "REST APIs", "Git"],
    liveUrl: "https://devspaces-frontend.vercel.app"
  }
];

export const projects: Project[] = [
  {
    id: "fintrack",
    title: "FinTrack",
    subtitle: "Personal Finance & Analytics Platform",
    description: "A comprehensive personal finance tracking web application built to help individuals monitor income, manage budgets, track expenditures, and visualize financial growth through intuitive analytics.",
    features: [
      "Dynamic expense & income tracking with real-time balance calculations",
      "Interactive data visualizations and monthly budgeting breakdowns",
      "Robust Express.js backend for transaction persistence and analytics calculations",
      "Fully responsive, dark-mode ready interface styled with Tailwind CSS"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express.js", "Node.js"],
    liveUrl: "https://fin-track-gamma-ten.vercel.app",
    githubUrl: "https://github.com/olawaleonabanjo/FinTrack",
    category: "Full Stack",
    featured: true,
    accentColor: "from-emerald-500 to-teal-700",
    image: fintrackCover
  },
  {
    id: "devspace",
    title: "DevSpace",
    subtitle: "Developer Social & Community Hub",
    description: "A dynamic social platform designed for tech developers and enthusiasts to discover engineering articles, connect with peers, compete on leaderboards, and share knowledge.",
    features: [
      "Interactive discovery feed with trending programming topics and articles",
      "Community people discovery page and competitive developer leaderboard",
      "Article reader with deep commentary and read history tracker",
      "Engineered during frontend engineering tenure at Wema Bank Plc"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel"],
    liveUrl: "https://devspaces-frontend.vercel.app",
    category: "Frontend",
    featured: true,
    accentColor: "from-blue-600 to-indigo-700",
    image: devspaceCover
  },
  {
    id: "medication-reminder",
    title: "Medication Reminder App",
    subtitle: "Health & Daily Prescription Manager",
    description: "An intuitive healthcare application helping patients and caregivers stay on schedule with dosages, refills, and medication routines with comprehensive tracking.",
    features: [
      "Customizable medication scheduling with dosage and timing alerts",
      "Secure user authentication and personal health profile management",
      "Adherence tracking history to monitor consistency over time",
      "Full stack implementation with Express.js REST API"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express.js", "Node.js"],
    githubUrl: "https://github.com/olawaleonabanjo/Medication-Reminder-App",
    category: "Full Stack",
    featured: true,
    accentColor: "from-rose-500 to-pink-600"
  },
  {
    id: "forever-ecommerce",
    title: "Forever: E-commerce Website",
    subtitle: "Full-Featured Online Fashion Store & Admin",
    description: "An end-to-end e-commerce store with product catalogs, shopping cart management, seamless checkout experience, and a dedicated administrator control dashboard.",
    features: [
      "Interactive product showcase with categories, filtering, and instant search",
      "State-driven cart system with persistent local and session handling",
      "Secure user authentication, order history, and account profile",
      "Comprehensive Admin panel to create, update, and manage inventory"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/olawaleonabanjo/FOREVER-E-COMMERCE-WEBSITE",
    category: "Full Stack",
    featured: true,
    accentColor: "from-amber-500 to-orange-600",
    image: foreverCover
  },
  {
    id: "food-app",
    title: "Gourmet Recipe & Food App",
    subtitle: "Culinary Discovery & Ingredient Guide",
    description: "An exploration web app designed to browse global recipes, inspect step-by-step cooking procedures, calculate prep duration, and estimate nutritional costs.",
    features: [
      "Deep integration with the Spoonacular Food & Nutrition API",
      "Recipe card views detailing preparation time, servings, and ingredients",
      "Instant search by cuisine, dietary constraints, and ingredients"
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Spoonacular API"],
    category: "Frontend",
    featured: false,
    accentColor: "from-violet-500 to-purple-700"
  },
  {
    id: "interactive-games",
    title: "Logic & Guessing Game Hub",
    subtitle: "Interactive Algorithmic Game Application",
    description: "An engaging browser game engineered to test player intuition and numerical estimation with instant scoring feedback and responsive sound effects.",
    features: [
      "Stateful game loop with high-score tracking and hints",
      "Lightweight, snappy UI crafted with vanilla JavaScript & modern CSS",
      "Mobile-friendly touch controls and dynamic game feedback"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "React"],
    category: "Frontend",
    featured: false,
    accentColor: "from-cyan-500 to-blue-600"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Crafting fast, accessible, and responsive client applications with modern web standards.",
    skills: [
      { name: "React", level: 95, icon: "Atom" },
      { name: "TypeScript", level: 90, icon: "FileCode2" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "JavaScript (ES6+)", level: 92, icon: "Code2" },
      { name: "HTML5 / Semantic Web", level: 95, icon: "Layout" },
      { name: "CSS3 / Modern Layouts", level: 92, icon: "Sparkles" },
    ]
  },
  {
    title: "Backend & Databases",
    description: "Building reliable APIs, data models, and services that power modern web applications.",
    skills: [
      { name: "Node.js", level: 85, icon: "Server" },
      { name: "Express.js", level: 88, icon: "Cpu" },
      { name: "MongoDB", level: 82, icon: "Database" },
      { name: "RESTful APIs", level: 90, icon: "Network" },
      { name: "Authentication / JWT", level: 84, icon: "ShieldCheck" },
    ]
  },
  {
    title: "Developer Tools & Platforms",
    description: "Streamlining workflow, automated deployments, and version control excellence.",
    skills: [
      { name: "Git & GitHub", level: 92, icon: "GitBranch" },
      { name: "Vercel Deployment", level: 90, icon: "CloudUpload" },
      { name: "Vite & Tooling", level: 88, icon: "Zap" },
      { name: "Postman API Testing", level: 85, icon: "Terminal" },
    ]
  },
  {
    title: "Professional & Leadership",
    description: "Essential collaborative traits that ensure reliable project execution and team cohesion.",
    skills: [
      { name: "Problem Solving", level: 95, icon: "CheckCircle2" },
      { name: "Communication & Teamwork", level: 92, icon: "Users" },
      { name: "Leadership & Initiative", level: 90, icon: "Award" },
      { name: "Time Management & Multitasking", level: 88, icon: "Clock" },
    ]
  }
];

export const education: EducationItem = {
  degree: "B.Sc. Computer Science",
  institution: "Joseph Ayo Babalola University",
  period: "2021 – 2025",
  role: "Vice President, Computer Science Department",
  highlights: [
    "Served as Vice President of the Computer Science Department, leading academic initiatives, peer tutoring sessions, and university tech hackathons.",
    "Formed strong foundational knowledge in data structures, algorithms, object-oriented programming, database systems, and software engineering principles.",
    "Graduated ready to drive modern web standards and engineer high-impact software solutions."
  ]
};
