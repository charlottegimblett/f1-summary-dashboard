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
      gridTemplateColumns: {
        circuit: "19rem minmax(auto, 2fr) minmax(auto, 3fr) repeat(3, 2fr)",
        driver: "16rem 18rem 1fr 1fr",
        "driver-info": "2rem 1rem 5rem 1rem 6rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
