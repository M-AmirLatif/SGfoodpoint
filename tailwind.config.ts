import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0A0A0A",
          card: "#141414",
          elevated: "#1F1F1F",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(229, 57, 53, 0.35)",
          red: {
            DEFAULT: "#E53935",
            hover: "#C62828",
            light: "#FF5252",
            glow: "rgba(229, 57, 53, 0.25)",
          },
          amber: {
            DEFAULT: "#FFB300",
            hover: "#FFA000",
            light: "#FFD54F",
            glow: "rgba(255, 179, 0, 0.25)",
          },
          green: {
            DEFAULT: "#4CAF50",
            hover: "#388E3C",
            light: "#81C784",
          },
          cream: {
            DEFAULT: "#FFF8F0",
            muted: "#9E9E9E",
            dim: "#666666",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Bricolage Grotesque", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(0, 0, 0, 0.45)",
        "card-hover": "0 14px 40px rgba(0, 0, 0, 0.65), 0 0 25px rgba(229, 57, 53, 0.15)",
        "glow-red": "0 0 35px rgba(229, 57, 53, 0.35)",
        "glow-amber": "0 0 30px rgba(255, 179, 0, 0.3)",
        floating: "0 20px 50px rgba(0, 0, 0, 0.75), 0 0 1px 1px rgba(255, 255, 255, 0.1)",
      },
      borderRadius: {
        card: "18px",
        btn: "12px",
        sheet: "24px",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ticker: "ticker 28s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1.5deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
