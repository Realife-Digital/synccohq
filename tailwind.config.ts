import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Dark gray background
        foreground: "var(--foreground)", // Light gray text
        primary: {
          DEFAULT: "var(--accent)", // Main accent color
          dark: "#47b89c", // Darker shade (from --button-hover)
          light: "#6de5c9", // Slightly lighter shade for emphasis
        },
        secondary: {
          DEFAULT: "var(--button-bg)", // Button background
          dark: "#222222", // Darker shade for hover states
          light: "#3c3c3c", // Lighter shade if needed
        },
        divider: "var(--divider)", // Divider color
      },
    },
  },
  plugins: [],
} satisfies Config;
