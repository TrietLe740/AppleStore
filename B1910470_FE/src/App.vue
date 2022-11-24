<template>
  <div id="App" class="container">
    <AppleHeader />
    <router-view />
  </div>
</template>

<script>
import AppleHeader from "@/components/AppleHeader.vue";
export default {
  name: "App",
  components: {
    AppleHeader,
  },
};
</script>

<style></style>
