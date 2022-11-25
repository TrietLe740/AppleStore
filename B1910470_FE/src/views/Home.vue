<template>
  <div class="container">
    <AppleHeader />
    <body>
      <HomeSlider />
      <div class="row-12">
        <h1 class="text-secondary text-center font-weight-bold">iPhone</h1>
      </div>
      <div class="row top-item">
        <ProductCard
          v-for="(item, index) in products"
          :key="index"
          :product="item"
        />
      </div>
    </body>
    <AppleFooter />
  </div>
</template>

<script>
import AppleHeader from "@/components/AppleHeader.vue";
import AppleFooter from "@/components/AppleFooter.vue";
import HomeSlider from "@/components/HomeSlider.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductService from "@/services/product.service";

export default {
  name: "Home",
  components: {
    AppleHeader,
    AppleFooter,
    ProductCard,
    HomeSlider,
  },

  data() {
    return {
      products: [],
    };
  },

  computed: {},

  methods: {
    async getProducts() {
      try {
        this.products = await ProductService.getAll();
        console.log(this.products);
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

<style></style>
