import { Router } from "vue-router";

import { useLocalStorage } from "../../composable/localStorage";
const { getIdToken } = useLocalStorage();

const isUserAuthenticated = () => Boolean(getIdToken());

export const addAuthGuard = (router: Router) => {
  router.beforeEach((to) => {
    console.log("Auth Guard Triggered");
    if (to.meta.requiresAuth && !isUserAuthenticated()) {
      return { name: "login" };
    }
  });
};
