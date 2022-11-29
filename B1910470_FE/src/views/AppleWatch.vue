<template>
  <div class="container">
    <h2 class="text-secondary text-center font-weight-bold m-4">
      <i class="fa-brands fa-apple"></i>AppleWatch
    </h2>
    <div class="row">
      <img
        src="https://cdn.tgdd.vn/2022/11/banner/watch-2400-600-1920x480-1.png"
        alt=""
        class="col-12 applewatch-ads"
      />
    </div>
    <div class="row top-item p-2" v-if="applewatch.length">
      <ProductCard
        v-for="(item, index) in applewatch"
        :key="index"
        :product="item"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductService from "@/services/product.service";

export default {
  name: "AppleWatch",

  components: {
    ProductCard,
  },

  data() {
    return {
      applewatch: [],
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      try {
        this.applewatch = await ProductService.find({
          type: "applewatch",
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
.applewatch-ads {
  border-radius: 35px;
  max-height: 300px;
}
</style>
