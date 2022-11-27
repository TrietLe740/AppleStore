<template>
  <div class="container">
    <AppleHeader />
    <slot></slot>
    <AppleFooter />
  </div>
</template>

<script>
import AppleHeader from "@/components/AppleHeader.vue";
import AppleFooter from "@/components/AppleFooter.vue";

export default {
  name: "MainLayout",

  components: {
    AppleHeader,
    AppleFooter,
  },
};
</script>

<style></style>
