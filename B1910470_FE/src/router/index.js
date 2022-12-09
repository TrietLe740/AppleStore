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
    path: "/watch",
    name: "AppleWatch",
    component: () => import("@/views/AppleWatch.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/airpods",
    name: "AirPods",
    component: () => import("@/views/AirPods.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/applecare",
    name: "AppleCare",
    component: () => import("@/views/AppleCare.vue"),
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
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/User.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () => import("@/views/ProductDetail.vue"),
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
    meta: {
      layout: "AdminLayout",
    },
  },
  {
    path: "/admin/products/:id",
    name: "ProductEdit",
    component: () => import("@/views/admin/ProductEdit.vue"),
    // props: true,
    meta: {
      layout: "AdminLayout",
    },
  },
  {
    path: "/admin/products",
    name: "ProductManager",
    component: () => import("@/views/admin/ProductManager.vue"),
    meta: {
      layout: "AdminLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
