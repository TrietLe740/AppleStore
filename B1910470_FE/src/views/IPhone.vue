<template>
  <div class="container">
    <h2 class="text-secondary text-center font-weight-bold m-4">
      <i class="fa-brands fa-apple"></i>iPhone
    </h2>
    <div class="row">
      <img
        src="https://cdn.tgdd.vn/2022/11/banner/2400-60012-1920x480.gif"
        alt=""
        class="col-12 iphone-ads"
      />
    </div>
    <div class="row top-item p-2" v-if="iphone.length">
      <ProductCard
        v-for="(item, index) in iphone"
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
  name: "iPhone",

  components: {
    ProductCard,
  },

  data() {
    return {
      iphone: [],
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      try {
        this.iphone = await ProductService.find({
          type: "iphone",
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
.iphone-ads {
  border-radius: 35px;
  max-height: 300px;
}
</style>
