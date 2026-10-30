import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SkillCategory {
  title: string;
  badge: string;
  items: { name: string; desc: string; tag: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Veb Dasturlash",
    badge: "Veb Interfeyslar",
    items: [
      { name: "HTML5 & Semantik Veb", desc: "Veb-sahifalar poydevori, SEO va semantik qulaylik", tag: "HTML5", level: 95 },
      { name: "CSS3 & Zamonaviy Stil", desc: "Moslashuvchan (Responsive) sahifa dizayni, flexbox, grid, animatsiyalar", tag: "CSS3", level: 90 },
      { name: "JavaScript (ES6+)", desc: "Asinxron operatsiyalar, DOM manipulyatsiyasi va dinamik veb-mantiq", tag: "ES6+", level: 88 },
      { name: "Tailwind CSS", desc: "Zamonaviy, utility-first va yuqori darajadagi dizayn tizimlari", tag: "Tailwind", level: 92 },
      { name: "React.js & Astro", desc: "Komponentli arxitektura, yuqori tezlikdagi statik va dinamik sahifalar", tag: "React / Astro", level: 85 },
      { name: "Bootstrap & UI Tizimlar", desc: "Moslashuvchan veb-interfeyslarni qisqa muddatda qulay ishlab chiqish", tag: "Bootstrap", level: 88 },
    ],
  },
  {
    title: "Backend & Telegram Botlar",
    badge: "Avtomatlashtirish",
    items: [
      { name: "Python", desc: "Dasturlar, skriptlar va avtomatlashtirilgan xizmatlar yaratish", tag: "Python 3", level: 92 },
      { name: "Aiogram 3", desc: "Zamonaviy asinxron Telegram botlar, FSM va inline interfeyslar", tag: "Aiogram 3", level: 95 },
      { name: "SQLite & Database", desc: "Loyiha ma’lumotlarini saqlash, boshqarish va SQL so‘rovlari bilan ishlash", tag: "SQLite", level: 85 },
      { name: "REST API Integratsiyasi", desc: "Tashqi servislar, webhooklar va axborot tizimlari bilan integratsiya", tag: "REST API", level: 88 },
      { name: "Node.js Asoslari", desc: "JavaScript server muhiti va paketlar bilan ishlash", tag: "Node.js", level: 75 },
    ],
  },
  {
    title: "Ish Vositalari & DevOps",
    badge: "Dasturchi Vositalari",
    items: [
      { name: "Git & GitHub", desc: "Versiyalarni boshqarish, ochiq kodli repozitoriylar va jamoaviy ishlash", tag: "Git", level: 90 },
      { name: "VS Code & Terminal", desc: "Kengaytirilgan, optimallashgan dasturlash muhiti", tag: "IDE", level: 95 },
      { name: "Render & Vercel", desc: "Veb-ilovalar va botlarni global internetga joylashtirish (deploy)", tag: "Cloud", level: 86 },
      { name: "Google Sheets & Drive API", desc: "Ma'lumotlar bilan ishlash va hujjatlarni avtomatlashtirish", tag: "Automation", level: 82 },
      { name: "Scratch", desc: "Bolalar va yosh o‘quvchilar uchun vizual algoritmik dasturlash muhiti", tag: "EdTech", level: 95 },
    ],
  },
  {
    title: "Pedagogik Metodika & IT Ta'lim",
    badge: "Ta'lim Yo‘nalishlari",
    items: [
      { name: "Kompyuter Qurilmalari & Arxitektura", desc: "Kompyuter arxitekturasi, CPU/GPU, xotira va asosiy qurilmalarni o‘rgatish", tag: "Hardware", level: 92 },
      { name: "Algoritmik va mantiqiy fikrlash", desc: "Masalalarni bosqichma-bosqich tahlil qilish va optimal yechim topish", tag: "Algorithms", level: 90 },
      { name: "Dasturlashga amaliy kirish", desc: "Dasturlash mantig‘ini loyihalarga asoslangan zamonaviy usulda o‘rgatish", tag: "Practical", level: 94 },
      { name: "Interaktiv ta'lim & Mentorlik", desc: "O‘quvchilarni kichik loyihalar yaratishga yo‘naltirish", tag: "Mentoring", level: 96 },
    ],
  },
];

export default function SkillsList() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <div className="w-full space-y-6">
      {/* Category Selector Tabs with Motion layoutId */}
      <div className="flex sm:grid sm:grid-cols-4 gap-2.5 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
        {skillCategories.map((cat, index) => {
          const isActive = activeCategory === index;
          return (
            <motion.button
              key={cat.title}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-3.5 sm:p-4 rounded-xl text-left border transition-colors duration-200 cursor-pointer flex-shrink-0 w-44 sm:w-auto overflow-hidden z-10 ${
                isActive
                  ? "border-orange-500/80 text-white shadow-lg shadow-orange-500/20"
                  : "bg-[#09090f] border-orange-500/15 text-slate-400 hover:text-white hover:border-orange-500/35"
              }`}
            >
              {/* Motion Spring Layout Glow Badge */}
              {isActive && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/25 via-amber-500/20 to-orange-500/15 border-2 border-orange-500/70 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <span
                className={`block text-[11px] font-bold uppercase tracking-wider ${
                  isActive ? "text-amber-300" : "text-orange-400/80"
                }`}
              >
                {cat.badge}
              </span>
              <span className="block text-xs sm:text-sm font-bold text-white mt-1 truncate">
                {cat.title}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Skills Detail Grid with AnimatePresence */}
      <div className="cyber-card p-5 sm:p-7 rounded-2xl border-orange-500/25 bg-[#08080d]/95 space-y-5 shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(circle,_rgba(255,107,0,0.1)_0%,_transparent_70%)] pointer-events-none blur-3xl"></div>

        <div className="flex items-center justify-between border-b border-orange-500/15 pb-3.5 relative z-10">
          <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            <span>{skillCategories[activeCategory].title}</span>
          </h4>
          <span className="text-xs px-3 py-1 rounded-full bg-orange-500/15 text-amber-300 border border-orange-500/30 font-bold shadow-sm">
            {skillCategories[activeCategory].items.length} ta asosiy ko‘nikma
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1 relative z-10"
          >
            {skillCategories[activeCategory].items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                whileHover={{ y: -2, borderColor: "rgba(255, 107, 0, 0.45)" }}
                className="p-3.5 sm:p-4 rounded-xl bg-[#0d0d14]/90 border border-orange-500/15 hover:bg-[#12121c] transition-colors flex flex-col justify-between gap-3 group cursor-default"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                      <span>{item.name}</span>
                    </h5>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-amber-300 font-bold whitespace-nowrap">
                    {item.tag}
                  </span>
                </div>

                {/* Animated Level Bar */}
                <div className="w-full space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Malaka</span>
                    <span className="text-orange-400 font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 0.75, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 shadow-[0_0_8px_rgba(255,107,0,0.5)]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
