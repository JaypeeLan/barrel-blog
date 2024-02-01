/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["MyFont"],
        sans: ["MyFont", "sans-serif"],
      },
      backgroundImage: {
        starImg: "url('/assets/star.svg')",
        backgroundImage: "url('/assets/backgroundImage.svg')",
        mobilebackgroundImage: "url('/assets/mobilebg.svg')",
        backgroundColor:
          "radial-gradient(70.71% 70.71% at 50% 50%, rgba(113, 61, 255, 0.06) 0%, rgba(113, 61, 255, 0.00) 100%), radial-gradient(100% 100% at 50% 100%, rgba(57, 148, 255, 0.08) 0%, rgba(12, 2, 34, 0.00) 100%), radial-gradient(100% 100% at 50% 0%, rgba(121, 57, 255, 0.12) 0%, rgba(12, 2, 34, 0.00) 100%), linear-gradient(0deg, #000 0%, #000 100%), #101828",
      },
      boxShadow: {
        custom: "0 1px 64px 0 rgba(0, 0, 0, 0.03)",
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
