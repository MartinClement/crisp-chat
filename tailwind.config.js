/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        form: "420px",
        app: "1024px",
        message: "360px",
      },
    },
  },
  plugins: [],
};
