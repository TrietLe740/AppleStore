<template>
  <div v-if="product" class="page">
    <h4>Hiệu chỉnh Product</h4>
    <!-- <ProductForm
      :product="product"
      @submit:Product="updateProduct"
      @delete:Product="deleteProduct"
    /> -->
    <!-- <p>{{ message }}</p> -->
  </div>
</template>

<script>
import ProductForm from "@/components/admin/ProductForm.vue";
import ProductService from "@/services/product.service";

export default {
  name: "ProductEdit",

  components: { ProductForm },

  props: { id: { type: String, required: true } },

  data() {
    return { Product: null, message: "" };
  },

  methods: {
    async getProduct(id) {
      try {
        this.Product = await ProductService.get(id);
      } catch (error) {
        console.log(error);
        this.$router.push({
          name: "notfound",
          params: { pathMatch: this.$route.path.split("/").slice(1) },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },
    // async updateProduct(data) {
    //   try {
    //     await ProductService.update(this.product._id, data);
    //     this.message = "Sản phẩm được cập nhật thành công.";
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async deleteProduct() {
    //   if (confirm("Bạn muốn xóa Sản phẩm này?")) {
    //     try {
    //       await ProductService.delete(this.product._id);
    //       this.$router.push({ name: "product" });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // },
  },

  // created() {
  //   this.getProduct(this.id);
  //   this.message = "";
  // },
};
</script>
