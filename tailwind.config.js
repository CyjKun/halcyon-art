/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      subject: ['var(--font-bostonFont)'],
      paragraph: ['var(--font-bostonFontRegular)'],
      description: ['var(--font-interFont)'],
    },
    colors: {
      halcyon: {
        0: "#FFFFFF",
        50: "#FEF8F1",
        100: "#FEF3E7",
        200: "#FCE4CA",
        300: "#FAD2A8",
        400: "#F8C186",
        500: "#F6AD60",
        600: "#F3922B",
        700: "#E37B0D",
        800: "#BC660B",
        900: "#874A08",
        950: "#613505",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee"],
  },
};
