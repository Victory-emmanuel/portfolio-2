/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Change colors here
        //Make sure your color palletes have good contrasts

        //Your primary color is for background for containers in light mode in this
        //--website
        primary: "#FEFAEC",
        //Your secondary color are for text
        secondary: "#130F01",
        // Your accent color is for call to actions like buttons and links

        accent: "#F0C105",

        black: "#0F0C00",
        white: "#fff",
      },
      fontFamily: {
        SourceSans3: ["Source Sans 3", "sans-serif"],
        PlayfairDisplay: ["Playfair Display", "serif"],
      },
    },
    screens: {
      xx: "1px",
      xs: "400px",
      ss: "600px",
      sm: "800px",
      md: "1000px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
