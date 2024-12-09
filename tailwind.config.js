/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FF6B6B",
          secondary: "#4ECDC4",
          accent: "#45B7D1",
          neutral: "#2C3E50",
          "base-100": "#FFFFFF",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#FF6B6B",
          secondary: "#4ECDC4",
          accent: "#45B7D1",
          neutral: "#2C3E50",
          "base-100": "#1a1a1a",
        },
      },
    ],
  },
};
