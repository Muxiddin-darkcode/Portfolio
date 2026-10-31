/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Aldrich"', '"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Aldrich"', '"JetBrains Mono"', 'monospace'],
        aldrich: ['"Aldrich"', 'sans-serif'],
      },
      colors: {
        cyber: {
          black: "#04070a",
          dark: "#06090e",
          surface: "#090e14",
          card: "#0c141d",
          orange: "#4EEDB8",
          neon: "#5FFEC4",
          gold: "#5FFEC4",
          amber: "#00F5A0",
          cyan: "#4EEDB8",
          border: "rgba(78, 237, 184, 0.22)",
        },
        brand: {
          orange: "#4EEDB8",
          "orange-dark": "#059669",
          gold: "#5FFEC4",
          "gold-deep": "#10B981",
          amber: "#00F5A0",
          dark: "#04070a",
          card: "#080e14",
        },
        mint: {
          DEFAULT: "#4EEDB8",
          neon: "#5FFEC4",
          bright: "#00F5A0",
          emerald: "#10B981",
          dark: "#059669",
          border: "rgba(78, 237, 184, 0.22)",
        },
      },
      boxShadow: {
        'glow-orange': '0 0 30px -5px rgba(78, 237, 184, 0.45)',
        'glow-gold': '0 0 30px -5px rgba(95, 254, 196, 0.45)',
        'glow-sm': '0 0 12px rgba(78, 237, 184, 0.35)',
        'glow-gold-sm': '0 0 12px rgba(95, 254, 196, 0.35)',
        'glow-mint': '0 0 30px -5px rgba(78, 237, 184, 0.45)',
        'glow-mint-sm': '0 0 14px rgba(78, 237, 184, 0.35)',
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
