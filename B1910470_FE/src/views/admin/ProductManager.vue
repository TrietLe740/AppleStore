<template>
  <div class="container">
    <div class="dashboard main-content">
      <div class="table-body col-8">
        <div class="table table-all-product">
          <table>
            <thead>
              <tr class="text-center">
                <th>Tên sản phẩm</th>
                <th>Giá bán</th>
                <th>Giảm giá</th>
                <th>Số lượng</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody
              v-for="(item, index) in products"
              :key="index"
              :product="item"
            >
              <tr class="text-center">
                <td>{{ item.name }}</td>
                <td>{{ `${format(item.price)}` }}</td>
                <td>{{ `${format(item.sale)}` }}</td>
                <td>{{ item.total_remain }}</td>
                <td>
                  <div class="btn-group">
                    <a @click="handleHide(item._id, !item.hidden)">
                      <i title="Hide" v-if="item.hidden" class="fa fa-eye"></i>
                      <i
                        title="Show"
                        v-else
                        class="fa-regular fa-eye-slash"
                      ></i>
                    </a>
                    <router-link
                      style="text-decoration: none"
                      :to="`/admin/products/${item._id}`"
                      ><i class="fa fa-pencil"></i
                    ></router-link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="admin-cards col-4">
        <div class="admin-card w-100">
          <div class="icon">
            <i class="fa fa-copy"></i>
          </div>
          <h3>Số loại sản phẩm</h3>
          <div class="ml-1 num">05</div>
        </div>

        <div class="admin-card w-100">
          <div class="icon">
            <i class="fa fa-copy"></i>
          </div>
          <h3>Tổng sản phẩm</h3>
          <div class="ml-1 num">3400</div>
        </div>

        <div>
          <button class="btn mt-3 w-100">
            Thêm sản phẩm <i class="fa-solid fa-plus"></i>
          </button>
          <button class="btn mt-3 w-100">
            Ẩn tất cả sản phẩm <i class="fa-regular fa-eye-slash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/product.service";
import { formatVND } from "@/utils/format";

export default {
  name: "ProductManager",

  data() {
    return {
      products: [],
    };
  },

  methods: {
    format(number) {
      return formatVND(number);
    },

    async getProducts() {
      try {
        this.products = await ProductService.getAll();
        console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },

    async handleHide(id, hidden) {
      console.log(hidden);
      await ProductService.update(id, { hidden: hidden });
      this.getProducts();
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.table {
  padding: 0;
  margin: 0;
}

.btn {
  margin-left: 8px;
}
</style>
