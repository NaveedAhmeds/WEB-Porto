import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        ink: "#111111", // primary text
        muted: "#666666", // secondary text
        line: "#ECECEC", // borders
        surface: "#FAFAFA", // raised surface
        "surface-hover": "#F5F5F5",
        accent: "#000000",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
      letterSpacing: {
        label: "0.18em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        pill: "0 1px 2px rgba(17,17,17,0.04), 0 8px 24px rgba(17,17,17,0.06)",
        lift: "0 1px 2px rgba(17,17,17,0.03), 0 12px 32px rgba(17,17,17,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
