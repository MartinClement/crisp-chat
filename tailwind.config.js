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
        "crisp-chat-screen":
          "url('./src/assets/crisp_chat_screen_blurred.png')",
      },
      gridTemplateRows: {
        "msg-layout": "minmax(1fr, 100%) 120px",
        "app-layout": "auto auto minmax(1fr, 100%)",
      },
    },
  },
  plugins: [],
};
