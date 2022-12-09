<template>
  <section class="h-100 h-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-lg-7">
                  <router-link
                    style="text-decoration: none"
                    :to="{ name: 'Home' }"
                  >
                    <h5 class="mb-3">
                      <i class="fa-solid fa-angle-left"></i> Tiếp tục mua hàng
                    </h5>
                  </router-link>
                  <hr />

                  <div
                    class="d-flex justify-content-between align-items-center mb-4"
                  >
                    <div>
                      <p class="mb-1">Giỏ hàng của bạn</p>
                      <p class="mb-0">
                        Bạn có {{ totalProduct }} sản phẩm trong giỏ hàng:
                      </p>
                    </div>
                  </div>
                  <!-- Shopping Item -->
                  <ShoppingItem
                    v-for="(item, index) in cartItems"
                    :key="index"
                    :id="item.id"
                    :name="item.name"
                    :price="item.price"
                    :img="item.img"
                    :option="item.option"
                    :quantity="item.quantity"
                    :remain="item.remain"
                    @reload="handleReload"
                  />
                </div>
                <!-- Payment Card -->
                <PaymentCard
                  :totalPurchase="totalPurchase"
                  :productCarts="cartItems"
                  @reload="handleReload"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PaymentCard from "@/components/cart/PaymentCard.vue";
import ShoppingItem from "@/components/cart/ShoppingItem.vue";

export default {
  name: "Cart",

  components: {
    PaymentCard,
    ShoppingItem,
  },

  data() {
    return {
      cartItems: [],
      totalProduct: 0,
      totalPurchase: 0,
    };
  },

  created() {
    this.cartItems = [...JSON.parse(window.localStorage.getItem("cartItem"))];
    console.log(this.cartItems);
  },

  watch: {
    cartItems() {
      if (this.cartItems) {
        this.totalProduct = 0;
        this.totalPurchase = 0;
        this.cartItems.forEach((element) => {
          this.totalProduct += element.quantity;
          this.totalPurchase += element.quantity * element.price;
        });
      }
    },
  },

  methods: {
    handleReload() {
      this.cartItems = [...JSON.parse(window.localStorage.getItem("cartItem"))];
    },
  },
};
</script>

<style></style>
