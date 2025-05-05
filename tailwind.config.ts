import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "btn-gradient":
          "linear-gradient(270deg, rgba(0,170,255,0.44) 0.67%, rgba(85,64,167,0.44) 21.34%, rgba(255,76,255,0.44) 41.96%, rgba(255,63,99,0.44) 62.45%, rgba(255,102,0,0.44) 99.33%)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        titleFaqs: "#5540a7",
        titleSucursal: "#0096D7",
        bgColorPageHome: "#F4F4FB",
        colorArrowChevron: "rgba(255,255,255,0.13)",
        titelServices: "#46AF3F",
        btnServices: "#1C1F23",
        descriptionServices: "#475569",
        textFaqs: {
          primary: "#334155",
        },
        acordion: {
          1: "#7C4389",
          2: "#005194",
          3: "#449DC4",
          4: "#46AF3F",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        contact:
          "0 8px 8px -4px rgba(0, 0, 0, 0.03), 0 20px 24px -4px rgba(0, 0, 0, 0.08)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "scrollX-r": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scrollX-l": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scrollY-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "scrollY-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scrollX-r": "scrollX-r 30s linear infinite",
        "scrollX-l": "scrollX-l 30s linear infinite",
        "scrollY-up": "scrollY-up 30s linear infinite",
        "scrollY-down": "scrollY-down 25s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
