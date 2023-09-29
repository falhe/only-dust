import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "text-base": "#F3F0EE",
        "text-black": "#0E0D2E",
        "base-drawer": "#181818",
        tab: "#7A7877",
        stroke: "#808080",
      },
      fontWeight: {
        semibold: "600",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
