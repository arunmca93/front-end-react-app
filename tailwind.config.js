/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f5ff",
          100: "#e0ebff",
          200: "#b8ceff",
          300: "#8fb0ff",
          400: "#5785ff",
          500: "#285BFF",
          600: "#1f47d1",
          700: "#1734a3",
          800: "#102176",
          900: "#091249"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.3)"
      }
    }
  },
  plugins: []
};

