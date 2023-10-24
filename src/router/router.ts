import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/LoginPage.vue"),
  },
  {
    path: "/",
    meta: { requiresAuth: true },
    name: "lobby",
    component: () => import("../pages/lobby/LobbyPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
