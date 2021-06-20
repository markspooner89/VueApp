import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Grade from "../views/Grade.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Grade/:id",
    name: "Grade",
    component: Grade,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
