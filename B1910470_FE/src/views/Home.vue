<template>
  <body class="row">
    <ProductCard />
  </body>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductList from "@/components/ProductList.vue";
import ProductService from "@/services/product.service";

export default {
  name: "Home",
  components: {
    ProductCard,
    ProductList,
  },

  data() {
    return {
      products: [],
      activeIndex: -1,
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
};
</script>

<style scoped></style>
