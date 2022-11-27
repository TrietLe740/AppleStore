<template>
  <body>
    <HomeSlider />
    <!-- iPhone -->
    <div class="col-12">
      <h1 class="text-secondary text-center font-weight-bold m-4">
        <i class="fa-brands fa-apple"></i>iPhone
      </h1>
    </div>
    <div class="row">
      <ProductCard
        v-for="(item, index) in products"
        :key="index"
        :product="item"
      />
    </div>
  </body>
</template>

<script>
import HomeSlider from "@/components/HomeSlider.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductService from "@/services/product.service";

export default {
  name: "Home",

  components: {
    HomeSlider,
    ProductCard,
  },

  data() {
    return {
      products: [],
    };
  },

  methods: {
    async getProducts() {
      try {
        this.products = await ProductService.getAll();
        this.products.console.log(this.products);
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
.carousel__next,
.carousel__prev {
  background-color: grey;
  border-radius: 50%;
  border: none;
}

.carousel__icon {
  border-radius: 50%;
}
</style>
