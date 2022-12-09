<template>
  <tr v-if="product.top === true">
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.sale }}</td>
    <td>
      <div class="btn-group">
        <a href="" title="View">
          <i class="fa fa-eye"></i>
        </a>
        <router-link
          style="text-decoration: none"
          :to="{ name: 'product.edit', params: { id: product._id } }"
          ><i class="fa fa-pencil"></i
        ></router-link>
        <a href="" title="Delete">
          <i class="fa fa-trash"></i>
        </a>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
