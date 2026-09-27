import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0E14",
          surface: "#10151D",
          raised: "#161C26",
          border: "#232B37",
        },
        ink: {
          DEFAULT: "#E7EDF3",
          muted: "#96A3B0",
          faint: "#5C6B79",
        },
        accent: {
          teal: "#54E6D2",
          indigo: "#6E7BF2",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "grid-dot":
          "radial-gradient(circle, rgba(84,230,210,0.14) 1px, transparent 1px)",
        "shimmer-gradient":
          "linear-gradient(90deg, transparent 0%, rgba(84,230,210,0.08) 50%, transparent 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "typing-cursor": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        "typing-cursor": "typing-cursor 0.8s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "slide-up": "slide-up 0.5s ease-out both",
        progress: "progress 0.3s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
