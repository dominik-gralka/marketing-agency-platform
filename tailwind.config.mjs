/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        mid: "var(--mid)",
        faint: "var(--faint)",
        rule: "var(--rule)",
        "rule-2": "var(--rule-2)",
        hot: "var(--hot)",
        good: "var(--good)",
        bad: "var(--bad)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
