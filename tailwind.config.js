/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      // => @media (max-width: 1279px) { ... }
      lg: { min: "925px" },
    },
  },
  plugins: [],
});












// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ["Inter", "sans-serif"],
//       },
//     },
//     screens: {
//       // => @media (max-width: 1279px) { ... }
//       lg: { min: "925px" },
//     },
//   },
//   plugins: [],
// };
