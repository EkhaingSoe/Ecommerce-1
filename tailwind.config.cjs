/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSan: "Open Sans",
      },
      colors: {
        primary: "#faeee7",
        header: "#33272a",
        paragraph: "#594a4e",
        info: "#ff8ba7",
        
      },
    },
  },
  plugins: [],
};
