import React, { useState } from "react";

interface SkillCategory {
  title: string;
  badge: string;
  items: { name: string; desc: string; tag: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Veb Dasturlash",
    badge: "Veb Interfeyslar",
    items: [
      { name: "HTML5 & Semantic Web", desc: "Veb-sahifalar poydevori, SEO va semantik qulaylik", tag: "HTML5" },
      { name: "CSS3 & Zamonaviy Stil", desc: "Moslashuvchan (Responsive) sahifa dizayni, flexbox, grid, animatsiyalar", tag: "CSS3" },
      { name: "JavaScript (ES6+)", desc: "Asinxron operatsiyalar, DOM manipulyatsiyasi va dinamik veb-mantiq", tag: "ES6+" },
      { name: "Tailwind CSS", desc: "Zamonaviy, utility-first va yuqori darajadagi dizayn tizimlari", tag: "Tailwind" },
      { name: "Bootstrap & UI Kutubxonalar", desc: "Moslashuvchan veb-interfeyslarni qisqa muddatda qulay ishlab chiqish", tag: "Bootstrap" },
    ],
  },
  {
    title: "Backend & Telegram Botlar",
    badge: "Avtomatlashtirish",
    items: [
      { name: "Python", desc: "Dasturlar, skriptlar va avtomatlashtirilgan xizmatlar yaratish", tag: "Python 3" },
      { name: "Aiogram 3", desc: "Zamonaviy asinxron Telegram botlar, FSM va inline interfeyslar", tag: "Aiogram 3" },
      { name: "SQLite", desc: "Loyiha ma’lumotlarini saqlash, boshqarish va SQL so‘rovlari bilan ishlash", tag: "SQLite" },
      { name: "API Integratsiyasi", desc: "Tashqi servislar, webhooklar va axborot tizimlari bilan integratsiya", tag: "REST API" },
      { name: "Node.js Asoslari", desc: "JavaScript server muhiti va paketlar bilan ishlash", tag: "Node.js" },
    ],
  },
  {
    title: "Ish Vositalari & DevOps",
    badge: "Dasturchi Vositalari",
    items: [
      { name: "Git & GitHub", desc: "Versiyalarni boshqarish, ochiq kodli repozitoriylar va jamoaviy ishlash", tag: "Git" },
      { name: "VS Code & Terminal", desc: "Kengaytirilgan, optimallashgan dasturlash muhiti", tag: "IDE" },
      { name: "Render & Vercel", desc: "Veb-ilovalar va botlarni global internetga joylashtirish (deploy)", tag: "Cloud" },
      { name: "Google Sheets & Drive API", desc: "Ma'lumotlar bilan ishlash va hujjatlarni avtomatlashtirish", tag: "Automation" },
      { name: "Scratch", desc: "Bolalar va yosh o‘quvchilar uchun vizual algoritmik dasturlash muhiti", tag: "EdTech" },
    ],
  },
  {
    title: "Pedagogik Metodika & IT Ta'lim",
    badge: "Ta'lim Yo‘nalishlari",
    items: [
      { name: "Kompyuter Qurilmalari & Arxitektura", desc: "Kompyuter arxitekturasi, CPU/GPU, xotira va asosiy qurilmalarni o‘rgatish", tag: "Hardware" },
      { name: "Algoritmik va mantiqiy fikrlash", desc: "Masalalarni bosqichma-bosqich tahlil qilish va optimal yechim topish", tag: "Algorithms" },
      { name: "Dasturlashga amaliy kirish", desc: "Dasturlash mantig‘ini loyihalarga asoslangan zamonaviy usulda o‘rgatish", tag: "Practical" },
      { name: "Interaktiv ta'lim & Test tizimlari", desc: "O‘quvchilarni kichik loyihalar yaratishga yo‘naltirish", tag: "Mentoring" },
    ],
  },
];

export default function SkillsList() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <div className="w-full space-y-5">
      {/* Category Selector Tabs with Clean Styling (Scrollable on small mobile) */}
      <div className="flex sm:grid sm:grid-cols-4 gap-2.5 overflow-x-auto pb-1.5 sm:pb-0 no-scrollbar">
        {skillCategories.map((cat, index) => {
          const isActive = activeCategory === index;
          return (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(index)}
              className={`p-3.5 rounded-xl text-left border transition-all duration-200 cursor-pointer flex-shrink-0 w-44 sm:w-auto ${
                isActive
                  ? "bg-gradient-to-r from-orange-500/20 to-amber-500/15 border-orange-500/60 text-white shadow-lg shadow-orange-500/15"
                  : "bg-[#09090f] border-orange-500/15 text-slate-400 hover:text-white hover:bg-orange-500/10 hover:border-orange-500/35"
              }`}
            >
              <span className={`block text-[11px] font-bold uppercase tracking-wider ${isActive ? "text-amber-300" : "text-orange-400/80"}`}>
                {cat.badge}
              </span>
              <span className="block text-xs sm:text-sm font-bold text-white mt-1 truncate">
                {cat.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Detail Grid */}
      <div className="cyber-card p-5 sm:p-7 rounded-2xl border-orange-500/25 bg-[#08080d]/95 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-orange-500/15 pb-3.5">
          <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
            <span>{skillCategories[activeCategory].title}</span>
          </h4>
          <span className="text-xs px-3 py-1 rounded-full bg-orange-500/15 text-amber-300 border border-orange-500/30 font-bold">
            {skillCategories[activeCategory].items.length} ta asosiy ko‘nikma
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {skillCategories[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="p-3.5 rounded-xl bg-[#0e0e16] border border-orange-500/15 hover:border-orange-500/40 hover:bg-[#13131e] transition-all group"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 group-hover:scale-125 transition-transform"></span>
                  <span className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </span>
                </div>
                <span className="text-[10px] text-amber-300 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/25 font-semibold">
                  {item.tag}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 pl-3.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
