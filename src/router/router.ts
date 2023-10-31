import {
  Router,
  createRouter as createVueRouter,
  createWebHistory,
} from "vue-router";
import { createAuthGuard } from "@auth0/auth0-vue";
import { App } from "vue";

export function createRouter(app: App): Router {
  return createVueRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: () => import("../pages/home/HomePage.vue"),
      },
      {
        path: "/chatroom/:roomId",
        name: "chatroom",
        component: () => import("../pages/chat-room/ChatRoomPage.vue"),
        beforeEnter: createAuthGuard(app),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        redirect: { name: "home" },
      },
    ],
  });
}
