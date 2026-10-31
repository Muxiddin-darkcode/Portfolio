import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";

interface SkillItem {
  name: string;
  status: string;
  tag: string;
  desc: string;
  pills: string[];
  color: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Veb Dasturlash",
    subtitle: "Veb Interfeyslar",
    iconName: "🌐",
    skills: [
      {
        name: "React.js & Astro",
        status: "Asosiy Stack",
        tag: "UI & Islands",
        desc: "Komponentli arxitektura, yuqori yuklanish tezligiga ega Astro statik/dinamik sahifalari va reaktiv foydalanuvchi interfeyslari.",
        pills: ["React 19", "Astro 7", "Islands Architecture", "Hooks", "Vite"],
        color: "#61DAFB",
        icon: (
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="1">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        status: "Kundalik vosita",
        tag: "Dizayn Tizimi",
        desc: "Zamonaviy utility-first metodikasi, moslashuvchan (responsive) dizayn, qorong'i rejim va individual dizayn tizimlari.",
        pills: ["Responsive", "Custom Config", "Flexbox / Grid", "Dark Theme"],
        color: "#38BDF8",
        icon: (
          <svg viewBox="0 0 54 33" className="w-6 h-6" fill="#38BDF8">
            <path fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        name: "JavaScript (ES6+) & TypeScript",
        status: "Professional",
        tag: "Mantiq & Tiplar",
        desc: "Asinxron mantiq (Promises, Async/Await), DOM boshqaruvi, xavfsiz va tiplangan TypeScript kod arxitekturasi.",
        pills: ["ES6+", "Async/Await", "TypeScript", "DOM API", "Clean Code"],
        color: "#F7DF1E",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <path d="M7 17.5c.8.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-1.8 0-1.2-.8-1.7-2.1-2.2-1.7-.7-2.8-1.5-2.8-3.1 0-1.7 1.3-3 3.3-3 .9 0 1.7.2 2.3.6l-.6 1.4c-.5-.3-1.1-.5-1.7-.5-1.1 0-1.8.6-1.8 1.5 0 1 .7 1.5 1.9 2 1.8.7 3 1.5 3 3.3 0 1.8-1.4 3.2-3.8 3.2-1.1 0-2.1-.3-2.9-.8l.5-1.5zM17 8.3v7.4c0 1.8-.9 2.7-2.5 2.7-.6 0-1.2-.1-1.6-.3l.4-1.4c.3.2.7.3 1.1.3.8 0 1.2-.4 1.2-1.4V8.3h1.4z" fill="#000" />
          </svg>
        ),
      },
      {
        name: "HTML5 & Semantik Veb",
        status: "Mukammal asos",
        tag: "Markup & SEO",
        desc: "Veb-sahifalarning poydevori, qidiruv tizimlari (SEO) uchun to'g'ri semantika va qulay (accessible) interfeyslar.",
        pills: ["Semantic Tags", "SEO Friendly", "Accessibility (a11y)", "Meta"],
        color: "#E34F26",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#E34F26">
            <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.8 5.7h-7.6l.2 2h7.2l-.6 6.8-4.6 1.3-4.6-1.3-.3-3.4h2l.2 1.8 2.7.7 2.7-.7.3-3H7.6l-.7-7.4h11.2l-.3 2.5z" />
          </svg>
        ),
      },
      {
        name: "CSS3 & Zamonaviy Animatsiya",
        status: "Ilg'or",
        tag: "Stil & Harakat",
        desc: "Murakkab layoutlar (Grid, Flexbox), mikro-animatsiyalar, CSS o'zgaruvchilari va har qanday qurilmaga moslashuvchanlik.",
        pills: ["Grid / Flex", "Animations", "Variables", "Glassmorphism"],
        color: "#1572B6",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1572B6">
            <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.8 5.7H6.8l.2 2.5h9.9l-.6 6.8-4.3 1.2-4.3-1.2-.3-2.9H5.4l.4 4.8 6.2 1.7 6.2-1.7.8-8.9.2-2.3H3.6z" />
          </svg>
        ),
      },
      {
        name: "Bootstrap & UI Tizimlar",
        status: "Amaliy tajriba",
        tag: "Tezkor UI",
        desc: "Tayyor komponentlar bazasi yordamida veb-portallar va administrator panellarini qisqa fursatda qulay ishlab chiqish.",
        pills: ["Bootstrap 5", "Admin UI", "Components", "Prototyping"],
        color: "#7952B3",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#7952B3">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm2.8 13.8c-1.1.5-2.5.7-3.9.7H7.7V7.5h3.4c1.3 0 2.4.2 3.1.7.7.5 1.1 1.2 1.1 2.1 0 .7-.3 1.3-.8 1.8.8.4 1.3 1.2 1.3 2.1 0 1-.5 1.8-1 1.6zM9.7 9v2.2h1.6c.9 0 1.5-.4 1.5-1.1 0-.7-.6-1.1-1.5-1.1H9.7zm0 3.7v2.6h1.8c1 0 1.7-.5 1.7-1.3 0-.8-.7-1.3-1.7-1.3H9.7z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Telegram Botlar",
    subtitle: "Avtomatlashtirish",
    iconName: "⚡",
    skills: [
      {
        name: "Aiogram 3 (Telegram Bots)",
        status: "Ixtisoslik // Core",
        tag: "Asinxron Botlar",
        desc: "Zamonaviy Aiogram 3.x kutubxonasi yordamida asinxron, ko'p foydalanuvchili va murakkab FSM stsenariylariga ega aqlli Telegram botlar.",
        pills: ["Aiogram 3", "Asyncio", "FSM Holatlar", "Inline Menyu", "Telegram API"],
        color: "#2AABEE",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#2AABEE">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.38-.49 1.04-.75 4.07-1.77 6.78-2.94 8.14-3.51 3.87-1.62 4.67-1.9 5.2-1.91.12 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.19-.04.35z" />
          </svg>
        ),
      },
      {
        name: "Python 3",
        status: "Asosiy til",
        tag: "Backend & Logic",
        desc: "Obyektga yo'naltirilgan dasturlash (OOP), avtomatlashtirish skriptlari, fayllar va ma'lumotlar bilan ishlash, biznes mantig'i.",
        pills: ["OOP", "Data Structures", "Automation", "Async Programming"],
        color: "#38BDF8",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#38BDF8" d="M11.9 2c-5.2 0-4.9 2.3-4.9 2.3l.01 2.36h5v.71H5S2 7 2 12.3c0 5.3 2.6 5.1 2.6 5.1h1.56v-2.2s-.08-2.6 2.56-2.6h4.94v-.74H8.74v-1.07h7.93s2.61.16 2.61-2.52c0-2.67-2.29-2.57-2.29-2.57h-1.58V6.3s.33-4.3-3.49-4.3zm-2.73 1.5a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9z" />
            <path fill="#FDE047" d="M12.1 22c5.2 0 4.9-2.3 4.9-2.3l-.01-2.36h-5v-.71H19S22 17 22 11.7c0-5.3-2.6-5.1-2.6-5.1h-1.56v2.2s.08 2.6-2.56 2.6H10.3v.74h4.95v1.07H7.33S4.72 13.1 4.72 15.8c0 2.67 2.29 2.57 2.29 2.57h1.58v-2.2s-.33 4.3 3.49 4.3zm2.73-1.5a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9z" />
          </svg>
        ),
      },
      {
        name: "SQLite & Database",
        status: "Production",
        tag: "Ma'lumotlar Bazasi",
        desc: "Jadval tuzilmalari, SQL so'rovlar, foydalanuvchilar ma'lumotlarini ishonchli saqlash va tezkor CRUD operatsiyalari.",
        pills: ["SQL Queries", "Schema Design", "CRUD", "Data Integrity"],
        color: "#0EA5E9",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#0EA5E9">
            <path d="M12 2C7.58 2 4 3.34 4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5c0-1.66-3.58-3-8-3zm0 2c3.87 0 6 1.05 6 1s-2.13 1-6 1-6-1-6-1 2.13-1 6-1zm6 15c0 .05-2.13 1-6 1s-6-.95-6-1v-2.22c1.46.77 3.63 1.22 6 1.22s4.54-.45 6-1.22V19zm0-4c0 .05-2.13 1-6 1s-6-.95-6-1v-2.22c1.46.77 3.63 1.22 6 1.22s4.54-.45 6-1.22V15zm0-4c0 .05-2.13 1-6 1s-6-.95-6-1V8.78c1.46.77 3.63 1.22 6 1.22s4.54-.45 6-1.22V11z" />
          </svg>
        ),
      },
      {
        name: "REST API & Webhooks",
        status: "Ilg'or integratsiya",
        tag: "API & Aloqa",
        desc: "Tashqi servislar bilan integratsiya: ob-havo xizmatlari, to'lov tizimlari prototipi va webhooklar orqali tezkor aloqa.",
        pills: ["RESTful API", "Webhooks", "JSON / HTTP", "Async Client"],
        color: "#10B981",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#10B981" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        ),
      },
      {
        name: "Node.js Asoslari",
        status: "Amaliy vosita",
        tag: "Runtime",
        desc: "JavaScript server muhiti, zamonaviy paketlar menejeri (npm, pnpm) va build-tooling bilan ishlash.",
        pills: ["Runtime", "pnpm / npm", "Dev Servers", "Scripts"],
        color: "#5FA04E",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#5FA04E">
            <path d="M12 0L1.75 5.92v11.85L12 23.68l10.25-5.91V5.92L12 0zm-1.04 19.38l-6.84-3.95V8.58l6.84 3.95v6.85zm2.08 0v-6.85l6.84-3.95v6.85l-6.84 3.95zM12 10.32L5.16 6.37 12 2.42l6.84 3.95L12 10.32z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "tools",
    title: "Ish Vositalari & DevOps",
    subtitle: "Dasturchi Vositalari",
    iconName: "🛠️",
    skills: [
      {
        name: "Git & GitHub",
        status: "Kundalik odat",
        tag: "Versiya Nazorati",
        desc: "Versiyalarni boshqarish, ochiq kodli repozitoriylar, branchlar bilan ishlash va jamoaviy kod integratsiyasi.",
        pills: ["Git CLI", "GitHub Repos", "Branching", "Open Source"],
        color: "#F05032",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#F05032">
            <path d="M21.6 10.8L13.2 2.4c-.6-.6-1.5-.6-2.1 0L9.1 4.5l2.6 2.6c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.5 2.5c.6-.2 1.3 0 1.8.5.7.7.7 1.9 0 2.6s-1.9.7-2.6 0c-.6-.6-.7-1.4-.4-2.1L12.9 10v4.8c.3.2.6.5.7.9.4.9 0 2-1 2.4-1 .4-2 0-2.4-1-.4-.8-.1-1.8.6-2.2v-4.9c-.7-.4-1-1.4-.6-2.2.3-.6.9-1 1.6-1.1L9.2 4.4 2.4 11.2c-.6.6-.6 1.5 0 2.1l8.4 8.4c.6.6 1.5.6 2.1 0l8.7-8.7c.6-.6.6-1.6 0-2.2z" />
          </svg>
        ),
      },
      {
        name: "Terminal & VS Code",
        status: "Tezkor muhit",
        tag: "IDE & Shell",
        desc: "Yuqori darajada sozlangan dasturlash muhiti, klaviatura yorliqlari va Linux/Bash buyruqlar satri bilan ishlash.",
        pills: ["VS Code Config", "Bash Commands", "Productivity", "Terminal"],
        color: "#FBBF24",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#FBBF24" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="#FBBF24" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 9l4 3-4 3m6 3h4" />
          </svg>
        ),
      },
      {
        name: "Vercel & Render (Deploy)",
        status: "Bulut xizmatlari",
        tag: "Cloud Hosting",
        desc: "Frontend loyihalar va Python botlarini xalqaro bulutli serverlarga sozlash, joylashtirish (deploy) va kuzatish.",
        pills: ["Vercel CI/CD", "Render Cloud", "Environment Vars", "DNS / Domain"],
        color: "#FFFFFF",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FFFFFF">
            <path d="M12 2L1 21h22L12 2z" />
          </svg>
        ),
      },
      {
        name: "Google Sheets & Drive API",
        status: "Avtomatlashtirish",
        tag: "Ofis Tizimlari",
        desc: "Kompaniyalar va ta'lim muassasalari ma'lumotlarini jadvallar orqali avtomatlashtirish va hujjatlar almashinuvi.",
        pills: ["Google API", "Sheet Automation", "Service Account", "Drive Sync"],
        color: "#34A853",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#34A853" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
          </svg>
        ),
      },
      {
        name: "Scratch & EdTech",
        status: "O'quv muhiti",
        tag: "Vizual Kod",
        desc: "Maktab o'quvchilari va bolalar uchun algoritmik mantiqni o'rgatuvchi vizual dasturlash ekotizimi.",
        pills: ["Scratch 3", "Algoritmik Mantiq", "Gamification", "Ta'lim"],
        color: "#5FFEC4",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#5FFEC4">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 10h6m-6 4h6" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "pedagogy",
    title: "Pedagogik Metodika & IT Ta'lim",
    subtitle: "Ta'lim Yo'nalishlari",
    iconName: "🎓",
    skills: [
      {
        name: "Amaliy Loyihaviy Ta'lim (PBL)",
        status: "Rich Boss Maktabi",
        tag: "Metodika",
        desc: "O'quvchilarga quruq nazariya emas, balki boshidan oxirigacha mustaqil dasturiy loyihalar yaratish orqali natijaga erishishni o'rgatish.",
        pills: ["Project-Based", "Real Keyslar", "Mustaqil Fikrlash", "Amaliyot"],
        color: "#4EEDB8",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#4EEDB8" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        name: "Kompyuter Qurilmalari & Apparat",
        status: "Muhandislik Tajribasi",
        tag: "Hardware & Tarmoq",
        desc: "Muhandis-elektronchi tajribasi: shaxsiy kompyuter arxitekturasi, protsessorlar, operativ xotira va tarmoq infratuzilmasi asoslari.",
        pills: ["CPU / GPU", "Motherboard", "Tarmoq Asoslari", "Texnik Xizmat"],
        color: "#38BDF8",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#38BDF8" strokeWidth="2">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
          </svg>
        ),
      },
      {
        name: "Algoritmik va Mantiqiy Fikrlash",
        status: "Olimpiada & ICPC",
        tag: "Muammo Tahlili",
        desc: "Murakkab masalalarni bosqichma-bosqich dekonstruksiya qilish, optimal ma'lumotlar tuzilmalari va to'g'ri fikrlash qobiliyati.",
        pills: ["Algorithms", "Problem Solving", "Optimallash", "Robokontest"],
        color: "#FBBF24",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#FBBF24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
      },
      {
        name: "Interaktiv Mentorlik & Yo'naltirish",
        status: "Kadrlar Tayyorlash",
        tag: "Mentorlik",
        desc: "Har bir o'quvchining kuchli tomonlarini aniqlash, ularni zamonaviy IT kasblariga yo'naltirish va doimiy qo'llab-quvvatlash.",
        pills: ["Shaxsiy Yondashuv", "Portfolio Tuzish", "Karyera Maslahati", "Motivatsiya"],
        color: "#34D399",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#34D399" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// INTERACTIVE 3D TILT + SPOTLIGHT CARD (Powered by Framer Motion)
// ─────────────────────────────────────────────────────────────
function Motion3DTiltCard({ skill, index }: { skill: SkillItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate values for 3D tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xRatio = useMotionValue(0.5);
  const yRatio = useMotionValue(0.5);

  // Butter-smooth spring physics for natural 3D tilt
  const springConfig = { damping: 20, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(useTransform(yRatio, [0, 1], [9, -9]), springConfig);
  const rotateY = useSpring(useTransform(xRatio, [0, 1], [-9, 9]), springConfig);

  // Dynamic flashlight spotlight following the mouse
  const spotlightBg = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${skill.color}22, transparent 75%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    mouseX.set(xPos);
    mouseY.set(yPos);
    xRatio.set(xPos / rect.width);
    yRatio.set(yPos / rect.height);
  };

  const handleMouseLeave = () => {
    xRatio.set(0.5);
    yRatio.set(0.5);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const handleTouchEnd = () => {
    xRatio.set(0.5);
    yRatio.set(0.5);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleTouchEnd}
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.96 }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 24,
        delay: index * 0.045,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className="relative p-4 sm:p-6 rounded-2xl bg-[#060a0f]/90 border border-[#4EEDB8]/20 hover:border-[#4EEDB8]/60 hover:bg-[#0c141d] transition-colors duration-300 group flex flex-col justify-between gap-4 select-none cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_15px_35px_-10px_rgba(78,237,184,0.25)]"
    >
      {/* 1. Dynamic Cursor Spotlight (Follows mouse in real-time) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
        style={{ background: spotlightBg }}
      />

      {/* 2. Top Header: Icon + Title + Status with 3D Parallax */}
      <div
        className="space-y-3 relative z-10"
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
      >
        <div className="flex items-start justify-between gap-3">
          {/* Real Tech Icon Badge */}
          <motion.div
            whileHover={{ scale: 1.12, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 bg-[#0c141d] border border-white/10 group-hover:border-[#4EEDB8]/50 shadow-sm"
            style={{ boxShadow: `0 0 18px ${skill.color}20` }}
          >
            {skill.icon}
          </motion.div>

          {/* Status Badge */}
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#4EEDB8]/10 border border-[#4EEDB8]/25 text-[#4EEDB8] whitespace-nowrap group-hover:border-[#5FFEC4] group-hover:bg-[#4EEDB8]/20 transition-all">
            {skill.status}
          </span>
        </div>

        <div>
          <h4 className="font-bold text-base sm:text-lg text-white group-hover:text-[#5FFEC4] transition-colors">
            {skill.name}
          </h4>
          <span className="text-[11px] font-mono text-slate-400">
            {skill.tag}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {skill.desc}
        </p>
      </div>

      {/* 3. Bottom: Sub-skill chips with micro spring bounce */}
      <div
        className="space-y-2 pt-3 border-t border-[#4EEDB8]/15 relative z-10"
        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
      >
        <div className="flex flex-wrap gap-1.5">
          {skill.pills.map((pill) => (
            <motion.span
              key={pill}
              whileHover={{ scale: 1.08, y: -1 }}
              transition={{ type: "spring", stiffness: 450, damping: 20 }}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-[#0c141d] border border-white/5 text-slate-400 group-hover:text-slate-200 group-hover:border-[#4EEDB8]/30 transition-all cursor-default"
            >
              {pill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN SKILLS LIST COMPONENT
// ─────────────────────────────────────────────────────────────
export default function SkillsList() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeCat = skillCategories[activeTab];

  return (
    <div className="w-full space-y-6">
      
      {/* ── 1. Zamonaviy Tab Tugmalari (Framer Motion Spring Pill) ── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
        {skillCategories.map((cat, idx) => {
          const isActive = activeTab === idx;
          return (
            <motion.button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-sans text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer flex items-center gap-2 sm:gap-2.5 whitespace-nowrap flex-shrink-0 ${
                isActive
                  ? "text-[#02130c] font-bold shadow-lg shadow-[#4EEDB8]/25"
                  : "text-slate-300 hover:text-white bg-[#060a0f]/80 hover:bg-[#0c141d] border border-[#4EEDB8]/20"
              }`}
            >
              {/* Active Tab Spring Layout Pill */}
              {isActive && (
                <motion.div
                  layoutId="activeSkillTabPill"
                  className="absolute inset-0 bg-gradient-to-r from-[#00F5A0] via-[#4EEDB8] to-[#5FFEC4] rounded-2xl -z-10 shadow-[0_0_20px_rgba(78,237,184,0.4)]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}

              <span className="text-base">{cat.iconName}</span>
              <span className={isActive ? "text-[#02130c] font-extrabold" : ""}>
                {cat.title}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* ── 2. Aktiv Kategoriya Sarlavhasi & Son Ko'rsatkichi ── */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4EEDB8] shadow-[0_0_10px_#5FFEC4]"></span>
          <h3 className="text-base sm:text-lg font-bold text-white font-sans">
            {activeCat.title}
          </h3>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#4EEDB8]/10 border border-[#4EEDB8]/25 text-[#4EEDB8] font-bold">
          {activeCat.skills.length} ta yo‘nalish
        </span>
      </div>

      {/* ── 3. 3D Tilt + Cursor Spotlight Bento Grid (Framer Motion) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCat.id}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 [perspective:1000px]"
        >
          {activeCat.skills.map((skill, i) => (
            <Motion3DTiltCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
