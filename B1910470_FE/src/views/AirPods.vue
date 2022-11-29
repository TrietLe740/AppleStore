<template>
  <div class="container">
    <h2 class="text-secondary text-center font-weight-bold m-4">
      <i class="fa-brands fa-apple"></i>Airpods
    </h2>
    <div class="row">
      <img
        src="https://cdn.tgdd.vn/2022/11/banner/2400-600-1920x480-7.png"
        alt=""
        class="col-12 airpods-ads"
      />
    </div>
    <div class="row top-item p-2" v-if="airpods.length">
      <ProductCard
        v-for="(item, index) in airpods"
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
  name: "Airpods",

  components: {
    ProductCard,
  },

  data() {
    return {
      airpods: [],
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      try {
        this.airpods = await ProductService.find({
          type: "airpods",
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
.airpods-ads {
  border-radius: 35px;
  max-height: 300px;
}
</style>
