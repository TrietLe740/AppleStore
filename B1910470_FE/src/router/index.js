import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AdminDashboard from "@/views/admin/AdminDashboard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/admin",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
