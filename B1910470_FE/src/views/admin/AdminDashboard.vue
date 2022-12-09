<template>
  <div class="container">
    <!-- Tab thông tin bên trên -->
    <div class="dashboard main-content">
      <a
        href=""
        class="admin-card-icon"
        style="text-decoration: none; color: black"
      >
        <div class="admin-card-icon-body">
          <div class="admin-card-icon-i">
            <i class="fa fa-users"></i>
          </div>
          <h3>Người dùng</h3>
        </div>
      </a>
      <a
        href="/admin/products"
        class="admin-card-icon"
        style="text-decoration: none; color: black"
      >
        <div class="admin-card-icon-body">
          <div class="admin-card-icon-i">
            <i class="fa fa-shopping-bag"></i>
          </div>
          <h3>Sản phẩm</h3>
        </div>
      </a>
      <a
        href=""
        class="admin-card-icon"
        style="text-decoration: none; color: black"
      >
        <div class="admin-card-icon-body">
          <div class="admin-card-icon-i">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <h3>Đơn hàng</h3>
        </div>
      </a>
      <!-- Top Sản phẩm -->
      <div class="table">
        <div class="table-head">
          <h3 class="font-weight-bold mt-2">Top sản phẩm</h3>
        </div>
        <div class="table-body">
          <div class="table-responsive">
            <table>
              <thead>
                <tr class="text-center">
                  <th>Tên sản phẩm</th>
                  <th>Giá bán</th>
                  <th>Giảm giá</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <TopTable
                  v-for="(item, index) in products"
                  :key="index"
                  :product="item"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Thông tin bên phải -->
      <div class="admin-cards">
        <div class="admin-card">
          <div class="icon">
            <i class="fa fa-users"></i>
          </div>
          <h3>Users</h3>
          <div class="num">1000</div>
        </div>
        <div class="admin-card">
          <div class="icon">
            <i class="fa fa-copy"></i>
          </div>
          <h3>Projects</h3>
          <div class="num">3400</div>
        </div>
        <div class="admin-card">
          <div class="icon">
            <i class="fa fa-shopping-bag"></i>
          </div>
          <h3>Products</h3>
          <div class="num">2000</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminFooter from "@/components/admin/AdminFooter.vue";
import TopTable from "@/components/admin/TopTable.vue";
import ProductService from "@/services/product.service";

export default {
  name: "Dashboard",
  components: {
    AdminHeader,
    AdminFooter,
    TopTable,
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

<style>
.main-content {
  padding: 20px 0 0 0;
  margin-left: 100px;
  z-index: -1;
  min-height: 600px;
}

.dashboard {
  display: flex;
  flex-wrap: wrap;
}

.admin-card-icon {
  flex: 1 1 18%;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #deebfd;
  box-shadow: 0 3px 10px rgba(62, 85, 120, 0.045);
  margin: 0 8px 30px;
}

.admin-card-icon .admin-card-icon-body {
  padding: 20px;
}

.admin-card-icon-i {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #e5f4e7;
  margin: 0 auto;
  position: relative;
}

.admin-card-icon .admin-card-icon-body h3 {
  text-align: center;
  margin-bottom: 0;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 400;
}

.admin-card-icon-i i {
  top: 50%;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 45px;
  color: #5dae8b;
}

.table {
  flex: 0 1 58%;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #deebfd;
  box-shadow: 0 3px 10px rgba(62, 85, 120, 0.045);
  margin: 0 8px 30px;
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
}

.table .table-head {
  border-bottom: 1px solid #eee;
  padding: 0 15px;
}

.table .table-body {
  padding: 25px;
}

.table .table-body table {
  width: 100%;
  border-collapse: collapse;
}

.table table thead tr th {
  padding: 0 10px;
  height: 50px;
  vertical-align: middle;
  color: #666;
  font-weight: 500;
  border-bottom-color: #e2e8f0;
  background-color: #f7f8f9;
  border-top-width: 1px;
  border-bottom-width: 1px;
}

.table tbody tr td,
.table tbody tr th {
  padding: 10px;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
  font-size: 14px;
  color: #212529;
  text-align: center;
}

.btn-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-group a {
  padding: 3px;
  width: 26px;
  height: 26px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  margin: 0 5px;
  color: #fff;
  background-color: #5dae8b;
  border-color: #5dae8b;
  border-radius: 0.375rem;
  font-weight: 500;
}

.btn-group a {
  text-align: center;
  line-height: 25px;
  display: block;
}

@media only screen and (max-width: 768px) {
  .table {
    flex: 1 1 100%;
    overflow-x: scroll;
  }
}

.admin-cards {
  flex: 1 1 34%;
  flex-wrap: wrap;
}

.admin-card {
  border-radius: 6px;
  border: 1px solid #deebfd;
  box-shadow: 0 3px 10px rgba(62, 85, 120, 0.045);
  margin: 0 8px 10px;
  position: relative;
  background-color: #5cad8a;
  height: 94px;
  padding: 20px;
}

.admin-card .icon {
  color: rgba(0, 0, 0, 0.1);
  float: right;
}

.admin-card .icon i {
  font-size: 100px;
  line-height: 0;
  margin: 0;
  padding: 0;
  vertical-align: bottom;
}

.admin-card .num,
.admin-card h3 {
  position: relative;
  color: #fff;
  z-index: 5;
  margin: 0;
  padding: 0;
}

.admin-card h3 {
  font-size: 20px;
  margin-left: 5px;
}
</style>
