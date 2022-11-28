import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/style.css";

// Thêm router vô ứng dụng
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

// createApp(App).use(router).mount("#app");
