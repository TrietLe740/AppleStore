<template>
  <div class="container">
    <h2 class="text-secondary text-center font-weight-bold m-4">
      <i class="fa-brands fa-apple"></i>iPad
    </h2>
    <div class="row">
      <img
        src="https://cdn.tgdd.vn/2022/10/banner/2400-600-1920x480-11.png"
        alt=""
        class="col-12 ipad-ads"
      />
    </div>
    <div class="row top-item p-2" v-if="ipad.length">
      <ProductCard v-for="(item, index) in ipad" :key="index" :product="item" />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductService from "@/services/product.service";

export default {
  name: "iPad",

  components: {
    ProductCard,
  },

  data() {
    return {
      ipad: [],
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      try {
        this.ipad = await ProductService.find({
          type: "ipad",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>

<style>
.ipad-ads {
  border-radius: 35px;
  max-height: 300px;
}
</style>
