<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import AdminDashboard from "@/views/admin/AdminDashboard.vue";

export default {
  name: "App",
  components: {
    Home,
    AdminDashboard,
  },
};
</script>

<style>
#App {
  overflow: hidden;
}
</style>
