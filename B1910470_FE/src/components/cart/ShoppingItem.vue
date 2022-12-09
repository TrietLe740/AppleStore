<template>
  <div class="card p-0 mb-3">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <div>
            <img
              :src="img"
              class="img-fluid rounded-3 mr-3"
              alt="Shopping item"
              style="width: 65px"
            />
          </div>
          <div>
            <h5>{{ this.remain }}</h5>
            <p class="small mb-0">{{ option }}</p>
          </div>
        </div>
        <div class="d-flex flex-row align-items-center">
          <div class="input-group mr-3">
            <!-- Minus -->
            <span class="input-group-prepend">
              <button
                type="button"
                class="btn btn-outline-secondary btn-number"
                @click="handleMinus"
              >
                <span class="fa fa-minus"></span>
              </button>
            </span>
            <input
              type="text"
              class="form-control input-number"
              v-model="count"
            />
            <!-- Plus -->
            <span class="input-group-append">
              <button
                type="button"
                class="btn btn-outline-secondary btn-number"
                @click="handlePlus"
              >
                <span class="fa fa-plus"></span>
              </button>
            </span>
          </div>
          <div>
            <h5 class="mb-0 mr-3">{{ format(price * quantity) }}</h5>
          </div>
          <span @click="deleteItem" style="color: #cecece">
            <i class="fas fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatVND } from "@/utils/format";

export default {
  name: "ShoppingItem",

  props: {
    id: String,
    name: String,
    price: Number,
    option: String,
    img: String,
    remain: Number,
    quantity: Number,
  },

  data() {
    return {
      count: this.quantity,
    };
  },

  emits: ["reload"],

  methods: {
    format(number) {
      return formatVND(number);
    },

    handleMinus() {
      if (this.count != 1) {
        this.count -= 1;
        this.changeProductQuantity();
      }
    },

    handlePlus() {
      if (this.count >= 1 && this.count <= 9) {
        if (this.count <= this.remain) {
          this.count += 1;
          this.changeProductQuantity();
        }
      }
    },

    // Thay đổi giá trị đơn hàng
    changeProductQuantity() {
      let add = false;
      let cartProducts = JSON.parse(window.localStorage.getItem("cartItem"));
      if (cartProducts) {
        cartProducts.forEach((item, index) => {
          if (item.id == this.id) {
            if (item.option === this.option) {
              add = true;
              cartProducts[index].quantity = this.count;
              return;
            }
          }
        });
        if (add) {
          window.localStorage.setItem(
            "cartItem",
            JSON.stringify(cartProducts) || {}
          );
          this.$emit("reload", true);
        }
      }
    },

    deleteItem() {
      let add = false;
      let cartProducts = JSON.parse(window.localStorage.getItem("cartItem"));
      if (cartProducts) {
        cartProducts.forEach((item, index) => {
          if (item.id == this.id) {
            if (item.option === this.option) {
              add = true;
              cartProducts.splice(index, 1);
              return;
            }
          }
        });
        if (add) {
          window.localStorage.setItem(
            "cartItem",
            JSON.stringify(cartProducts) || {}
          );
          this.$emit("reload", true);
        }
      }
    },
  },
};
</script>

<style scoped>
.input-group {
  width: 120px;
}

.fa-trash-alt:hover {
  color: black;
}
</style>
