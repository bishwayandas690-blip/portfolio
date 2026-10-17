// ============================================================
// portfolioData.js — Centralized configuration for Bishwayan Das's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Bishwayan Das",
  firstName: "Bishwayan",
  brandName: "Bishwayan",
  title: "Aspiring Developer & Entrepreneur",
  location: "Panisagar, North Tripura, India",
  phone: "",
  emails: {
    primary: "bishwayandas690@gmail.com",
    secondary: "bishwayandas690@gmail.com",
  },
  summary:
    "Motivated Class 9 student with a strong passion for technology, coding, and web development, alongside practical experience in sales and entrepreneurship. Building skills in HTML, CSS, JavaScript, Python, and design tools with a long-term goal of becoming a successful developer and entrepreneur.",
  resumeUrl: "/Bishwayan_Das_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/bishwayandas690-blip",
  linkedin: "https://github.com/bishwayandas690-blip",
  instagram: "https://instagram.com/__whois.bishwayan__",
};

export const heroContent = {
  greeting: "Hi, I'm Bishwayan Das",
  titleHighlight: "Developer & Entrepreneur",
  subtitle:
    "Building for the web. Creating with purpose. Growing every single day.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:bishwayandas690@gmail.com?subject=Inquiry – Portfolio&body=Hello Bishwayan,%0D%0A%0D%0AI came across your portfolio and would like to connect.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Bishwayan_Das_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Bishwayan Das</span>, an aspiring developer and entrepreneur based in Panisagar, North Tripura, India, dedicated to crafting clean, functional, and impactful digital experiences.`,
  techStack: ["HTML & CSS", "JavaScript", "Python"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world projects",
  description:
    "I follow a structured, creative, and practical approach to turn ideas into functional digital products.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a solid foundation for every project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean layouts, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building responsive frontends and digital solutions using modern tools, best practices, and clean code.",
    },
    {
      number: "04",
      title: "Ship",
      text: "Testing, optimizing, and deploying to the web — then gathering feedback and iterating to make it even better.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 80 },
        { name: "JavaScript", level: 70 },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 65 },
        { name: "Java", level: 60 },
      ],
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Canva", level: 88 },
        { name: "Figma", level: 65 },
      ],
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "React.js", level: 35 },
        { name: "Node.js", level: 30 },
        { name: "Git & GitHub", level: 55 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 92 },
        { name: "Sales & Outreach", level: 85 },
        { name: "Entrepreneurship", level: 80 },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "English", level: 92 },
        { name: "Bengali", level: 99 },
        { name: "Hindi", level: 85 },
      ],
    },
  ],
};

// VisionCraft Studio — Creative Work Section
export const contentCreation = {
  badge: "Creative Work",
  heading: "VisionCraft Studio & Digital Projects",
  description: "Beyond just code, I build brands, digital identities, and creative experiences through web, content, and design.",
  categories: [
    {
      title: "Web Development",
      description: "Building clean, responsive, and user-focused websites using HTML, CSS, and JavaScript — from personal portfolios to client landing pages.",
      stats: "Live Projects",
      icon: "💻",
    },
    {
      title: "Visual Design",
      description: "Crafting brand identities, social media creatives, posters, and digital assets using Canva and Figma with a strong eye for aesthetics.",
      stats: "50+ Designs",
      icon: "🎨",
    },
    {
      title: "Client Outreach",
      description: "Identifying, pitching, and onboarding clients for digital services — from Instagram outreach to structured business calls and follow-ups.",
      stats: "BuildMyStartup",
      icon: "📈",
    },
    {
      title: "Entrepreneurship",
      description: "Co-founded VisionCraft Studio — a creative & digital initiative focused on delivering web, content, and digital solutions to clients.",
      stats: "Co-Founder",
      icon: "🚀",
    },
  ],
};

// Leadership / Roles & Initiatives
export const leadershipList = [
  {
    title: "Sales Executive — BuildMyStartup",
    description: "Conducted Instagram outreach and cold calling to prospective clients. Identified potential business clients, understood their challenges, followed up with leads, and helped arrange client meetings.",
    role: "Sales Executive",
    badge: "Experience",
  },
  {
    title: "Co-Founder — VisionCraft Studio",
    description: "Co-founded a creative and digital initiative focused on web development, content creation, and digital services. Managed the studio's vision, client work, and creative output from the ground up.",
    role: "Co-Founder & Creative Lead",
    badge: "Entrepreneurship",
  },
];

// Work Experience / Internships
export const internshipsList = [
  {
    organization: "BuildMyStartup",
    role: "Sales Executive",
    duration: "2024 – Present",
    skills: ["Client Outreach", "Sales Strategy", "Cold Calling", "Lead Follow-Up", "Business Communication"],
    tech: ["Instagram", "Cold Calling", "CRM", "Google Sheets"],
  },
  {
    organization: "VisionCraft Studio",
    role: "Co-Founder & Creative Lead",
    duration: "2024 – Present",
    skills: ["Web Development", "Content Creation", "Digital Design", "Brand Identity", "Client Management"],
    tech: ["HTML", "CSS", "JavaScript", "Canva", "Figma"],
  },
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Communication", icon: "💬", desc: "Clear, confident, and structured communication — whether pitching to a client or presenting an idea." },
  { name: "Entrepreneurship", icon: "🚀", desc: "Co-founded VisionCraft Studio and actively drive digital services with a startup mindset." },
  { name: "Sales & Outreach", icon: "📈", desc: "Experienced in Instagram outreach, cold calling, and converting leads into business opportunities." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex challenges into logical, modular, and practical solutions." },
  { name: "Creativity", icon: "🎨", desc: "Blending aesthetics with functionality to build premium digital experiences and visual content." },
  { name: "Adaptability", icon: "🌟", desc: "Quick learner — picking up new technologies like Python, Figma, and JavaScript frameworks rapidly." },
  { name: "Web Development", icon: "💻", desc: "Building clean, responsive websites from scratch using HTML, CSS, and JavaScript." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working effectively with clients, partners, and collaborators across creative and technical projects." },
];

export const projects = [
  {
    id: "portfolio",
    number: "01",
    badge: "🌐 Live Project",
    title: "Personal Portfolio Website",
    description:
      "A fully responsive personal portfolio website built from scratch to showcase my skills, experience, projects, and contact information. Features a clean, modern design with smooth navigation and a mobile-first layout — live and accessible to anyone on the web.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Netlify"],
    links: {
      demo: "https://poushalidas.netlify.app/",
    },
    isFlagship: true,
  },
  {
    id: "visioncraft",
    number: "02",
    badge: null,
    title: "VisionCraft Studio",
    description:
      "Co-founded a creative and digital studio focused on delivering web development, content creation, visual design, and digital services to clients. VisionCraft Studio serves as a hub for digital solutions — from brand identity and design assets to websites and client outreach.",
    techTags: ["HTML", "CSS", "JavaScript", "Canva", "Figma", "Brand Identity"],
    links: {
      github: "https://github.com/bishwayandas690-blip",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Web Development Fundamentals",
      issuer: "Self-Study",
      icon: "🌐",
    },
    {
      name: "Canva Design Essentials",
      issuer: "Canva",
      icon: "🎨",
    },
    {
      name: "Python Programming Basics",
      issuer: "Self-Study",
      icon: "🐍",
    },
    {
      name: "Sales & Entrepreneurship",
      issuer: "BuildMyStartup",
      icon: "📈",
    },
  ],
  viewAllUrl: "https://github.com/bishwayandas690-blip",
};

export const education = {
  degree: "Secondary Education — Class 9A",
  institution: "Holy Cross Higher Secondary School",
  cgpa: "TBSE Board",
  graduation: "Panisagar, North Tripura",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Web Development & Entrepreneurship",
    "HTML · CSS · JavaScript",
    "Building Digital Experiences",
  ],
  credential: "Class 9 · Holy Cross HSS · TBSE",
  copyright: `© ${new Date().getFullYear()} Bishwayan Das | Built with passion`,
};

// EmailJS Configuration — set VITE_EMAILJS_* in a .env file to enable
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

