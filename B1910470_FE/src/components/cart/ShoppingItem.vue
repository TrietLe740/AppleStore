<template>
  <div class="card mb-3">
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
          <div class="ms-3">
            <h5>{{ name }}</h5>
            <p class="small mb-0">{{ option }}</p>
          </div>
        </div>
        <div class="d-flex flex-row align-items-center">
          <div class="input-group mr-3">
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
          <div style="width: 80px">
            <h5 class="mb-0">{{ format(price) }}</h5>
          </div>
          <a href="#!" style="color: #cecece"
            ><i class="fas fa-trash-alt"></i
          ></a>
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
    quantity: Number,
  },

  data() {
    return {
      count: this.quantity,
    };
  },

  methods: {
    format(number) {
      return formatVND(number);
    },

    handleMinus() {
      if (this.count != 1) this.count -= 1;
    },

    handlePlus() {
      if (this.count >= 1 && this.count <= 9) this.count += 1;
    },
  },
};
</script>

<style scoped>
.input-group {
  width: 120px;
}
</style>
