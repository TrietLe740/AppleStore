<template>
  <div>
    <AdminHeader />
    <slot></slot>
    <AdminFooter />
  </div>
</template>

<script>
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminFooter from "@/components/admin/AdminFooter.vue";

export default {
  name: "AdminLayout",

  components: {
    AdminHeader,
    AdminFooter,
  },
};
</script>

<style></style>
