import { createApp } from "vue";
import { createRouter } from "./router/router";
import auth0 from "./auth0/auth0";
import App from "./App.vue";

import "./style.css";

const app = createApp(App);
app.use(createRouter(app));
app.use(auth0);
app.mount("#app");
