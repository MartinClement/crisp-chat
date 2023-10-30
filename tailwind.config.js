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
      backgroundImage: {
        "crisp-chat-screen": "url('./src/assets/crisp_chat_screen.png')",
      },
    },
  },
  plugins: [],
};
