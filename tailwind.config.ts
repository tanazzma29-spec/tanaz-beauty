import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink:"#151311", ivory:"#F6F1E9", sand:"#DED2C2", gold:"#B4976B" },
    fontFamily: { sans:["var(--font-inter)","sans-serif"], display:["var(--font-cormorant)","serif"] }
  }},
  plugins:[]
};
export default config;