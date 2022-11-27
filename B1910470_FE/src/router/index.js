import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AdminDashboard from "@/views/admin/AdminDashboard.vue";

const routes = [
  // User
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: "MainLayout" },
  },
  {
    path: "/iphone",
    name: "iPhone",
    component: () => import("@/views/IPhone.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/mac",
    name: "Mac",
    component: () => import("@/views/Mac.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/ipad",
    name: "iPad",
    component: () => import("@/views/IPad.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/Cart.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  // NotFound
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  // Admin
  {
    path: "/admin",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
  {
    path: "/admin/products/:id",
    name: "product.edit",
    component: () => import("@/views/ProductEdit.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
