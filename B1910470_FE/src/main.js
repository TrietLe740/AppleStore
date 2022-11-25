import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/style.css";

createApp(App).mount("#app");

// Thêm router vô ứng dụng
import router from "./router";

createApp(App).use(router).mount("#app");
