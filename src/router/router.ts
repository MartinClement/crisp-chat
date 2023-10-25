import { createRouter, createWebHistory } from "vue-router";
import { addAuthGuard } from "./guards/authGuard";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/LoginPage.vue"),
  },
  {
    path: "/",
    name: "lobby",
    component: () => import("../pages/lobby/LobbyPage.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

addAuthGuard(router);

export default router;
