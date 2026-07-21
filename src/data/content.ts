export const profile = {
  name: "Sanya Garg",
  email: "sanyagarg1511@gmail.com",
  linkedin: "https://linkedin.com/in/sanya-garg-7a45bb195",
  github: "https://github.com/sanyagarg15",
  medium: "https://medium.com/@sanyagarg1511",
  intro:
    "Software engineer and artist based in Pune. I build fast, thoughtful React interfaces at Zensar Technologies — and I care about the details, right down to the last few milliseconds of load time.",
  about: [
    "So, a little about me. I'm a frontend engineer with 3+ years at Zensar Technologies, working across GenAI and frontend. I love taking something slow or tangled and rebuilding it into something quick and pleasant to use.",
    "Most recently I took an AI platform from a 30-second load down to 5, and I'm now building a Python GenAI pipeline that turns Figma designs into production UI. Here are a few technologies I've been working with:",
  ],
  skillsInline: ["React.js", "TypeScript", "TanStack Query", "Zustand", "Framer Motion", "Vite.js"],
  aboutOutro:
    "In my free time, I enjoy reading books and creating art — finding inspiration in both technology and nature.",
};

export type Job = {
  project: string;
  role: string;
  period: string;
  points: string[];
};

export const jobs: Job[] = [
  {
    project: "Cisco Gen AI Chat",
    role: "Frontend Engineer",
    period: "2022 — 2023",
    points: [
      "Built an embeddable plugin chatbot with Stencil.js web components for Cisco's ecosystem.",
      "Shipped high-performance Cisco pages with Node.js, mixing dynamic and static rendering.",
    ],
  },
  {
    project: "Wellstat.IO",
    role: "Full-Stack Developer",
    period: "2023",
    points: [
      "Documented 14 critical React and Node components, cutting onboarding time for the team.",
      "Led a legacy platform's migration to a redesigned UI/UX with better performance across the board.",
    ],
  },
  {
    project: "AI Engineering Buddy",
    role: "Frontend Lead",
    period: "2023 — 2025",
    points: [
      "Owned the end-to-end frontend migration to a modern React + TypeScript stack, cutting initial load from 30s to 5s — a 90%+ improvement.",
      "Added code splitting and lazy loading across every module to shrink the bundle and trim the initial payload.",
      "Rebuilt the UI with Material UI, Framer Motion, and TanStack Query + Zustand for clean server and client state.",
    ],
  },
  {
    project: "Macy's UI Pipeline",
    role: "GenAI Engineer & Frontend Developer",
    period: "2025 — Present",
    points: [
      "Building a Python-based GenAI pipeline that automatically churns out production UI from Figma designs and other design assets.",
      "Turning design tokens, components and layouts into consistent, reusable frontend code — cutting hand-off friction between design and engineering.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  url?: string;
  live?: string;
  x: number;
  y: number;
  accent?: boolean;
};

export const projects: Project[] = [
  {
    title: "Toto's Botanica",
    blurb:
      "My own brand and business. I designed and built the full website end to end — from identity and UI to a fast, responsive storefront.",
    tags: ["Design", "Frontend", "Business"],
    live: "https://www.totosbotanica.com/",
    x: 40,
    y: 40,
    accent: true,
  },
  {
    title: "Doclin Note Generator",
    blurb:
      "An AI-powered note-making, Q&A generator and study guide for teachers and students. I built the entire frontend.",
    tags: ["React", "TypeScript", "AI"],
    url: "https://github.com/Badsha1996/doclin-note-generator",
    x: 470,
    y: 60,
    accent: true,
  },
  {
    title: "learning-genai",
    blurb:
      "A structured roadmap from AI fundamentals to advanced Generative AI — concepts, notebooks, and hands-on projects.",
    tags: ["GenAI", "Notebooks", "Roadmap"],
    url: "https://github.com/sanyagarg15/learning-genai",
    x: 280,
    y: 250,
  },
  {
    title: "VS Code Clone",
    blurb: "A simplified VS Code frontend rebuilt as an MVP with the essential editor features.",
    tags: ["JavaScript", "React", "UI"],
    url: "https://github.com/sanyagarg15/vs-code-clone",
    x: 160,
    y: 330,
  },
  {
    title: "Snippet Manager",
    blurb: "A code-snippet manager to save, tag and quickly reuse snippets — built with React, TypeScript and Vite.",
    tags: ["React", "TypeScript", "Vite"],
    url: "https://github.com/sanyagarg15/snippet-manager",
    x: 500,
    y: 360,
  },
];
