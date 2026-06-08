import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Primary design tokens for the upgraded Suzuki visual system.
         * Direction: dark premium automotive, sharp cards, red conversion accents.
         */
        brand: {
          dark: "#050505",
          night: "#0A0A0A",
          carbon: "#111111",
          graphite: "#1F2937",
          line: "#E5E7EB",
          soft: "#F5F5F5",
          muted: "#737373",
          red: "#E30613",
          "red-dark": "#B30510",
          "red-soft": "#FEF2F2",
          blue: "#003B8F",
          "blue-light": "#0052CC",
          "blue-dark": "#002970",
        },
        /** Backward-compatible Suzuki aliases used by older components. */
        suzuki: {
          blue: "#003B8F",
          "blue-light": "#0052CC",
          "blue-dark": "#002970",
          red: "#E30613",
          "red-dark": "#B30510",
          "gray-light": "#F5F5F5",
          "gray-mid": "#E5E7EB",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1EBE5D",
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        /** Alias so existing font-bank-gothic classes do not silently fail. */
        "bank-gothic": ["var(--font-manrope)", "Manrope", "Arial Narrow", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0 18px 45px -28px rgba(15, 23, 42, 0.45)",
        "card-hover": "0 24px 65px -32px rgba(15, 23, 42, 0.55)",
        "red-glow": "0 18px 44px -24px rgba(227, 6, 19, 0.75)",
        "dark-glow": "0 24px 80px -36px rgba(0, 0, 0, 0.75)",
      },
      backgroundImage: {
        "automotive-grid":
          "linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)",
        "red-radial":
          "radial-gradient(circle_at_70%_25%,rgba(227,6,19,0.16),transparent_32%),radial-gradient(circle_at_16%_20%,rgba(255,255,255,0.055),transparent_24%)",
        "dark-hero": "linear-gradient(135deg,#050505_0%,#0A0A0A_52%,#020202_100%)",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        "soft-pulse": "soft-pulse 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
