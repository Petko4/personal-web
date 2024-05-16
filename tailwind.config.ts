import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "shadow-color": "rgba(188, 0, 0, 0.3)",
      },
      dropShadow: {
        md: "10px 10px 1px rgba(188, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
