<template>
  <body class="row">
    <ProductCard />
  </body>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductService from "@/services/product.service";

export default {
  name: "Home",
  components: {
    ProductCard,
  },

  data() {
    return {
      products: [],
    };
  },

  computed: {
    productString() {
      return this.products.map((product) => {
        const { name, desciption, price, sale, top, img } = product;
        return [name, desciption, price, sale, top, img].join("");
      });
    },
  },

  methods: {
    async() {
      try {
        this.products = ProductService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
