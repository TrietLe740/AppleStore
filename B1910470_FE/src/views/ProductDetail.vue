<template>
  <div class="container">
    <div class="row">
      <div class="col-5 offset-1">
        <div class="card bg-white mt-5">
          <img :src="colors[chooseColor]?.img" :key="chooseColor" />
        </div>
      </div>
      <div class="col-5 mt-5">
        <h2 class="card-title text-dark text-left font-weight-bold">
          {{ product.name }}
        </h2>
        <p
          class="card-text text-dark text-left mt-3 mb-1"
          style="font-size: 25px"
        >
          <span class="font-weight-bold">{{
            `${format(options?.price - options?.sale)} * `
          }}</span>
          <del
            v-if="options?.sale != 0"
            class="font-weight-light"
            style="font-size: 18px"
            >{{ `${format(options?.price)}` }}
          </del>
        </p>
        <div>
          <h6>Lựa chọn</h6>
          <button
            class="btn mr-2"
            v-for="(item, index) in product.options"
            :key="index"
            @click="handleChangeOption(index)"
          >
            {{ item.capacity }}
          </button>
        </div>
        <div class="mt-4">
          <h6>Màu sắc</h6>
          <p class="text-dark">
            {{ colors[chooseColor]?.name }}
          </p>
          <button
            class="btn choose_colors_btn mr-2"
            :class="{ active: index == chooseColor }"
            v-for="(item, index) in colors"
            :key="index"
            :style="{ 'background-color': item.hex }"
            @click="handleChangeColor(index)"
          ></button>
        </div>
        <div class="description mt-3">
          <h6>Mô tả:</h6>
          <p class="card-text text-dark text-left">
            {{ product.desciption }}
          </p>
        </div>
        <button
          type="button"
          class="btn btn-dark btn-block btn-lg mt-4 buy-btn"
          @click="handleAddToCart"
        >
          <div class="d-flex justify-content-between">
            <span class="font-weight-bold" style="margin: 0 auto"
              >Mua ngay</span
            >
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/product.service";
import { formatVND } from "../utils/format";

export default {
  name: "ProductDetail",

  data() {
    return {
      product: [],
      chooseOption: 0,
      chooseColor: 0,
      options: [],
      colors: [],
      isSubmit: false,
    };
  },

  watch: {
    $route() {
      this.getProduct();
    },
  },

  async created() {
    this.getProduct();
  },

  methods: {
    async getProduct() {
      console.log(this.$route.params);
      this.proxy = this.$route.params.id;
      this.product = await ProductService.get(this.proxy);
      this.options = this?.product?.options[0] || [];
      this.colors = this?.product?.options[0]?.colors || [];
      console.log(this.product);
    },

    format(number) {
      return formatVND(number);
    },

    handleChangeOption(index) {
      this.chooseOption = index;
      this.options = this?.product?.options[this.chooseOption] || [];
      this.colors = this?.product?.options[this.chooseOption]?.colors || [];
    },

    handleChangeColor(index) {
      this.chooseColor = index;
    },

    handleAddToCart() {
      if (!this.isSubmit) {
        this.isSubmit = true;
        let cartItem = {
          quantity: 1,
          id: this.product._id,
          name: this.product.name,
          price: this.options.price - this.options.sale,
          img: this.options.colors[this.chooseColor].img,
          option:
            this.options.capacity + ", " + this.colors[this.chooseColor].name,
        };

        let add = true;
        let cartProducts = JSON.parse(window.localStorage.getItem("cartItem"));
        if (cartProducts) {
          cartProducts.forEach((item, index) => {
            if (item.id == cartItem.id) {
              if (item.option === cartItem.option) {
                this.isSubmit = false;
                add = false;
                return;
              }
            }
          });
          add && cartProducts.push(cartItem);
          window.localStorage.setItem(
            "cartItem",
            JSON.stringify(cartProducts) || {}
          );
        } else {
          window.localStorage.setItem(
            "cartItem",
            JSON.stringify([cartItem]) || []
          );
        }

        // console.log({
        //   name: this.product.name,
        //   id: this.product._id,
        //   price: this.options.price - this.options.sale,
        //   img: this.options.colors[this.chooseColor].img,
        //   option:
        //     this.options.capacity + ", " + this.colors[this.chooseColor].name,
        // });
        this.isSubmit = false;
      }
    },
  },
};
</script>

<style scoped lang="css">
.card {
  padding: 0;
  border: none;
  border-radius: none;
  box-shadow: none;
}

.choose_colors_btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid 1px #ccc;
}

.description {
  background-color: rgb(248, 249, 250);
  border-radius: 15px;
  padding: 20px;
}

.buy-btn {
  border-radius: 15px;
}

.active {
  transform: scale(1.1);
  transition: all 0.4s ease;
  border: 3px solid rgb(149, 149, 251);
}
</style>
