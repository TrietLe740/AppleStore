<template>
  <div id="App">
    <component :is="'MainLayout' || 'AdminLayout'">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "@/views/layout/MainLayout.vue";
import AdminLayout from "@/views/layout/AdminLayout.vue";

export default {
  name: "App",

  components: {
    MainLayout,
    AdminLayout,
  },

  computed: {
    layout() {
      console.log(this.$route);
      console.log(this.$route.meta.layout);
      return this.$route.meta.layout;
    },
  },
};
</script>

<style>
#App {
  overflow: hidden;
}
</style>
