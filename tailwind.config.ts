import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-blue": "#001296",
        "bright-blue": "#0000ff",
      },
      boxShadow: {
        card: "rgba(18, 19, 19, 0.25) 0px 0.5px 3px",
      },
    },
  },
  plugins: [],
} satisfies Config;
