/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyber: {
          black: "#040404",
          dark: "#09090c",
          surface: "#0e0e13",
          card: "#121218",
          orange: "#ff6b00",
          neon: "#ff5500",
          gold: "#ffb800",
          amber: "#ff9500",
          cyan: "#00e5ff",
          border: "rgba(255, 107, 0, 0.18)",
        },
        brand: {
          orange: "#ff6b00",
          "orange-dark": "#e05500",
          gold: "#ffb800",
          "gold-deep": "#d97706",
          amber: "#f59e0b",
          dark: "#040404",
          card: "#0f0f14",
        },
      },
      boxShadow: {
        'glow-orange': '0 0 30px -5px rgba(255, 107, 0, 0.45)',
        'glow-gold': '0 0 30px -5px rgba(255, 184, 0, 0.45)',
        'glow-sm': '0 0 12px rgba(255, 107, 0, 0.35)',
        'glow-gold-sm': '0 0 12px rgba(255, 184, 0, 0.35)',
      },
      keyframes: {
        scaleAnim: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'heart-pulse': {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.18)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        scale: 'scaleAnim 300ms ease-in-out',
        'heart-pulse': 'heart-pulse 0.6s ease-in-out',
        shimmer: 'shimmer 4s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
