import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Background and foreground
        background: "var(--background)",
        foreground: "var(--foreground)",

        brand: {
          DEFAULT: "rgb(123 97 255 / <alpha-value>)",
          muted: "var(--brand-muted)",
        },

        // Primary brand colors
        primary: {
          DEFAULT: "var(--primary)",
          container: "var(--primary-container)",
          on: "var(--on-primary)",
          "on-container": "var(--on-primary-container)",
        },

        // Secondary brand colors
        secondary: {
          DEFAULT: "var(--secondary)",
          container: "var(--secondary-container)",
          on: "var(--on-secondary)",
          "on-container": "var(--on-secondary-container)",
        },

        // Accent colors
        accent: {
          DEFAULT: "var(--accent)",
          on: "var(--on-accent)",
        },

        // Neutral colors
        neutral: {
          DEFAULT: "var(--neutral)",
          variant: "var(--neutral-variant)",
          background: "var(--neutral-background)",
        },

        // Surface colors
        surface: {
          DEFAULT: "var(--surface)",
          variant: "var(--surface-variant)",
          on: "var(--on-surface)",
          "on-variant": "var(--on-surface-variant)",
        },

        // Background colors
        "on-background": "var(--on-background)",

        // State colors
        error: {
          DEFAULT: "var(--error)",
          on: "var(--on-error)",
          container: "var(--error-container)",
          "on-container": "var(--on-error-container)",
        },

        warning: {
          DEFAULT: "var(--warning)",
          on: "var(--on-warning)",
          container: "var(--warning-container)",
          "on-container": "var(--on-warning-container)",
        },

        success: {
          DEFAULT: "var(--success)",
          on: "var(--on-success)",
          container: "var(--success-container)",
          "on-container": "var(--on-success-container)",
        },

        info: {
          DEFAULT: "var(--info)",
          on: "var(--on-info)",
          container: "var(--info-container)",
          "on-container": "var(--on-info-container)",
        },

        // Outline colors
        outline: {
          DEFAULT: "var(--outline)",
          variant: "var(--outline-variant)",
        },

        // Custom colors
        "contact-exchange-bg": "var(--contact-exchange-bg)",
        "button-bg": "var(--button-bg)",

        // Legacy support
        divider: "var(--divider)",
      },
    },
  },
  plugins: [],
} satisfies Config;
