import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  /** 一款基于tailwind的样式组件库*/
  plugins: [require("daisyui")],
  daisyui: {
    // themes: [
    //   {
    //     mytheme: {
    //
    //       "primary": "#002fff",
    //
    //       "secondary": "#0096ff",
    //
    //       "accent": "#00b500",
    //
    //       "neutral": "#110c0d",
    //
    //       "base-100": "#262131",
    //
    //       "info": "#00839d",
    //
    //       "success": "#008a48",
    //
    //       "warning": "#f67200",
    //
    //       "error": "#ff92a1",
    //     },
    //   },
    // ],
    themes: ["light", "dark", "cupcake"],
  },
}
export default config
