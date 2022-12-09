<template>
  <div v-if="product.hidden == false" class="col-lg-3 col-6 p-2">
    <router-link style="text-decoration: none" :to="`/product/${product._id}`">
      <div class="card">
        <img class="card-img-top" :src="product.img" />
        <div class="card-body">
          <h5 class="card-title text-dark text-center font-weight-bold">
            {{ product.name }}
          </h5>
          <p class="card-text text-dark text-center">
            <span class="font-weight-bold">{{
              `${format(product.price - product.sale)} `
            }}</span>
            <del class="font-weight-light">{{ `${product.price}đ` }}</del>
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { formatVND } from "@/utils/format";

export default {
  methods: {
    format(number) {
      return formatVND(number);
    },
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.card {
  padding: 30px 0 30px;
  border-radius: 20px;
  background-color: rgb(248, 249, 250);
  cursor: pointer;
}

.card:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.card-img-top {
  margin: 0 auto;
  width: 80%;
}
</style>
