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
        background: {
          DEFAULT: "var(--color-background)",
          light: "var(--color-background-light)",
          dark: "var(--color-background-dark)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          light: "var(--color-border-light)",
          dark: "var(--color-border-dark)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          light: "var(--color-text-light)",
          dark: "var(--color-text-dark)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          light: "var(--color-error-light)",
          dark: "var(--color-error-dark)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          light: "var(--color-success-light)",
          dark: "var(--color-success-dark)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          light: "var(--color-warning-light)",
          dark: "var(--color-warning-dark)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          light: "var(--color-info-light)",
          dark: "var(--color-info-dark)",
        },
        disabled: {
          DEFAULT: "var(--color-disabled)",
          light: "var(--color-disabled-light)",
          dark: "var(--color-disabled-dark)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
