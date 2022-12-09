<template>
  <!-- Thanh tìm kiếm -->
  <form style="position: relative" class="form-inline my-2 my-lg-0" action="#">
    <input
      class="form-control mr-sm-2"
      id="search"
      type="search"
      placeholder="Tìm kiếm sản phẩm"
      aria-label="Search"
      v-model="searchString"
    />
    <div class="dropdown" style="">
      <router-link
        style="text-decoration: none"
        :to="`/product/${item._id}`"
        v-for="(item, index) in searchResult"
        :key="index"
      >
        <div
          class="card d-flex flex-row p-1"
          style="border-radius: 5px; align-items: center"
        >
          <img class="img-fluid rounded-3 mr-3" width="50" :src="item.img" />
          <h6>{{ item.name }} giá {{ format(item.price) }}</h6>
        </div>
      </router-link>
    </div>

    <button class="btn btn-outline-secondary my-2 my-sm-0 mr-1" type="submit">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
</template>

<script>
import ProductService from "@/services/product.service";
import { formatVND } from "@/utils/format";

export default {
  name: "Search",

  data() {
    return {
      searchResult: [],
      searchString: "",
      typing: false,
      typeTimer: null,
    };
  },

  watch: {
    searchString() {
      this.typeTimer && clearTimeout(this.typeTimer);
      this.typeTimer = setTimeout(async () => {
        console.log(this.searchString);
        this.searchResult = [];
        this.searchResult = await ProductService.find({
          search: this.searchString,
        });
        console.log(this.searchResult);
      }, 500);
    },
  },

  methods: {
    findProducts() {},

    format(number) {
      return formatVND(number);
    },
  },
};
</script>

<style>
.search {
  transition: all 0.5s ease;
}
.dropdown:hover,
#search:focus ~ .dropdown {
  display: block;
  opacity: 1;
}
.dropdown {
  overflow-y: scroll;
  max-height: 180px;
}
.dropdown {
  display: none;
  opacity: 0;
  position: absolute;
  top: 100%;
  right: 50px;
  width: 500px;
  z-index: 99;
}
</style>
