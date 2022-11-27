<template>
  <div id="App">
    <component :is="'MainLayout'">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "@/views/layout/MainLayout.vue";

export default {
  name: "App",

  components: {
    MainLayout,
  },

  computed: {
    layout() {
      console.log(this.$route);
      console.log(this.$route.meta.layout);
      // return this.$route.meta.layout;
    },
  },
};
</script>

<style>
#App {
  overflow: hidden;
}
</style>
