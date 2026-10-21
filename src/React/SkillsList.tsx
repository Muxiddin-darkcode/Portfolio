import { useState } from "react";

interface SkillCategory {
  title: string;
  badge: string;
  icon: string;
  items: { name: string; desc: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Dasturlash",
    badge: "Veb Interfeyslar",
    icon: "code",
    items: [
      { name: "HTML5 & Semantic Web", desc: "Veb-sahifalar poydevori va qulay semantik tuzilmasini yaratish" },
      { name: "CSS3 & Modern Styling", desc: "Moslashuvchan (Responsive) sahifa dizayni, flexbox, grid va animatsiyalar" },
      { name: "JavaScript (ES6+)", desc: "Interaktiv elementlar, foydalanuvchi hodisalari va dinamik veb-mantiq" },
      { name: "Tailwind CSS", desc: "Zamonaviy, utility-first va ko‘rkam moslashuvchan dizayn tizimlari" },
      { name: "Bootstrap", desc: "Adaptiv veb-interfeyslarni qisqa muddatda qulay ishlab chiqish" },
    ],
  },
  {
    title: "Backend & Telegram Botlar",
    badge: "Avtomatlashtirish",
    icon: "bot",
    items: [
      { name: "Python", desc: "Dasturlar, skriptlar va avtomatlashtirilgan xizmatlar yaratish" },
      { name: "Aiogram 3", desc: "Zamonaviy asinxron Telegram botlar, FSM va inline tugmalar arxitekturasi" },
      { name: "SQLite", desc: "Loyiha ma’lumotlarini saqlash, boshqarish va SQL so‘rovlari bilan ishlash" },
      { name: "API Integratsiyasi", desc: "Tashqi servislar, ob-havo, to‘lov va axborot tizimlari bilan integratsiya" },
      { name: "Node.js", desc: "JavaScript asosidagi server muhitidan foydalanish va amaliyot" },
    ],
  },
  {
    title: "Ish Vositalari & Joylashtirish",
    badge: "Tools & DevOps",
    icon: "tool",
    items: [
      { name: "Git & GitHub", desc: "Versiyalarni boshqarish, kodlarni saqlash va jamoaviy ishlash" },
      { name: "Visual Studio Code", desc: "Kengaytirilgan va optimallashgan dasturlash muhiti" },
      { name: "Render & Vercel", desc: "Veb-ilovalar va botlarni global internetga joylashtirish (deploy)" },
      { name: "Google Sheets & Drive", desc: "Ma'lumotlar bilan ishlash va hujjatlarni avtomatlashtirish" },
      { name: "Scratch", desc: "Bolalar va yosh o‘quvchilar uchun vizual algoritmik dasturlash muhiti" },
    ],
  },
  {
    title: "Pedagogik Ta'lim Yo‘nalishlari",
    badge: "IT Ta'lim",
    icon: "book",
    items: [
      { name: "Kompyuter savodxonligi & Qurilmalar", desc: "Kompyuter arxitekturasi, asosiy va yordamchi qurilmalarni o‘rgatish" },
      { name: "Algoritmik va mantiqiy fikrlash", desc: "Masalalarni tahlil qilish va bosqichma-bosqich yechim topish ko‘nikmasi" },
      { name: "Dasturlashga kirish", desc: "Dasturlash mantig‘ini amaliy mashg‘ulotlar orqali oson tushuntirish" },
      { name: "Interaktiv ta'lim & Testlar", desc: "O‘quvchilarni kichik loyihalar va mustaqil yechimlar yaratishga yo‘naltirish" },
    ],
  },
];

export default function SkillsList() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {skillCategories.map((cat, index) => {
          const isActive = activeCategory === index;
          return (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(index)}
              className={`p-3 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[var(--sec)]/15 border-[var(--sec)] text-white shadow-lg shadow-[var(--sec)]/10"
                  : "bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <span className="block text-[11px] font-semibold text-[var(--sec)] uppercase tracking-wider">
                {cat.badge}
              </span>
              <span className="block text-xs sm:text-sm font-bold text-white mt-0.5 truncate">
                {cat.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Detail Grid */}
      <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h4 className="text-base sm:text-lg font-bold text-white">
            {skillCategories[activeCategory].title}
          </h4>
          <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--sec)]/20 text-[var(--sec)] border border-[var(--sec)]/30 font-medium">
            {skillCategories[activeCategory].items.length} ta asosiy ko‘nikma
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {skillCategories[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[var(--sec)]/40 hover:bg-white/[0.05] transition-all group"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--sec)] group-hover:scale-150 transition-transform"></span>
                <span className="text-sm font-semibold text-white group-hover:text-[var(--sec)] transition-colors">
                  {item.name}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1 pl-3.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
