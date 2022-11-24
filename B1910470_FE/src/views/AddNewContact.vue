<template>
  <div v-if="(contact = {})" class="page">
    <h4>Thêm Liên hệ mới</h4>
    <ContactForm :contact="contact" @submit:contact="createContact" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
  components: { ContactForm },
  props: { id: { type: String, required: true } },
  data() {
    return { contact: null, message: "" };
  },
  methods: {
    async createContact(data) {
      try {
        await ContactService.create(data);
        this.message = "Liên hệ mới đã được tạo!";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
