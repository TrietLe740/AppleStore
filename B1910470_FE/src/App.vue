<template>
  <div id="App">
    <MainLayout v-if="this.$route.meta.layout === 'MainLayout'">
      <router-view />
    </MainLayout>

    <AdminLayout v-if="this.$route.meta.layout === 'AdminLayout'">
      <router-view />
    </AdminLayout>
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
      // console.log(this.$route);
      // console.log(this.$route.meta.layout);
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
