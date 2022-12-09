<template>
  <tr v-if="product.top === true">
    <td>{{ product.name }}</td>
    <td>{{ format(`${product.price}`) }}</td>
    <td>{{ format(`${product.sale}`) }}</td>
    <td>
      <div class="btn-group">
        <a href="" title="View">
          <i class="fa fa-eye"></i>
        </a>
        <router-link
          style="text-decoration: none"
          :to="`admin/products/${product._id}`"
          ><i class="fa fa-pencil"></i
        ></router-link>
      </div>
    </td>
  </tr>
</template>

<script>
import { formatVND } from "@/utils/format";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    format(number) {
      return formatVND(number);
    },
  },
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
