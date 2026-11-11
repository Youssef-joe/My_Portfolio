import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Anton', 'Impact', 'sans-serif'],
        impact: ['Anton', 'Impact', 'sans-serif'],
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ["'Space Mono'", 'ui-monospace', 'monospace'],
        arabic: ["'IBM Plex Sans Arabic'", 'sans-serif'],
      },
      colors: {
        poster: {
          yellow: '#f4cb38',
          orange: '#ff5500',
          red: '#ff4d4d',
          blue: '#00c2ff',
          black: '#0a0a0a',
          dark: '#111214',
          card: '#18191c',
          white: '#ffffff',
        },
        art: {
          forest: '#0a3122',
          forestDark: '#062016',
          forestLight: '#134732',
          terracotta: '#ea5e24',
          terracottaDark: '#c94a15',
          terracottaLight: '#f2733d',
          rose: '#df9789',
          roseLight: '#ebd0ca',
          cobalt: '#182143',
          cobaltLight: '#263668',
          charcoal: '#171a1c',
          charcoalDark: '#101214',
          gold: '#e5b85c',
          goldLight: '#f3d38c',
          cream: '#faf6f0',
          paper: '#f3ece2',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
