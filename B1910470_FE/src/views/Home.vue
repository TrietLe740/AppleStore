<template>
  <body>
    <HomeSlider />
    <!-- iPhone -->
    <div class="col-12" v-if="iphoneProducts.length">
      <a href="/iphone" style="text-decoration: none"
        ><h1 class="text-secondary text-center font-weight-bold m-4">
          <i class="fa-brands fa-apple"></i>iPhone
        </h1></a
      >
    </div>

    <div class="row p-2">
      <ProductCard
        v-for="(item, index) in iphoneProducts"
        :key="index"
        :product="item"
      />
    </div>
    <!-- mac -->
    <div class="col-12" v-if="macProducts.length">
      <a href="/mac" style="text-decoration: none">
        <h1 class="text-secondary text-center font-weight-bold m-4">
          <i class="fa-brands fa-apple"></i>Mac
        </h1>
      </a>
    </div>
    <div class="row p-2">
      <ProductCard
        v-for="(item, index) in macProducts"
        :key="index"
        :product="item"
      />
    </div>
    <!-- iPad -->
    <div class="col-12" v-if="iPadProducts.length">
      <a href="/ipad" style="text-decoration: none"
        ><h1 class="text-secondary text-center font-weight-bold m-4">
          <i class="fa-brands fa-apple"></i>iPad
        </h1></a
      >
    </div>
    <div class="row p-2">
      <ProductCard
        v-for="(item, index) in iPadProducts"
        :key="index"
        :product="item"
      />
    </div>
    <!-- appleWatch -->
    <div class="col-12" v-if="appleWatchProducts.length">
      <a href="/watch" style="text-decoration: none"
        ><h1 class="text-secondary text-center font-weight-bold m-4">
          <i class="fa-brands fa-apple"></i>AppleWatch
        </h1>
      </a>
    </div>
    <div class="row p-2">
      <ProductCard
        v-for="(item, index) in appleWatchProducts"
        :key="index"
        :product="item"
      />
    </div>
    <!-- airPods -->
    <div class="col-12" v-if="airPodsProducts.length">
      <a href="/airpods" style="text-decoration: none"
        ><h1 class="text-secondary text-center font-weight-bold m-4">
          <i class="fa-brands fa-apple"></i>AirPods
        </h1>
      </a>
    </div>
    <div class="row p-2">
      <ProductCard
        v-for="(item, index) in airPodsProducts"
        :key="index"
        :product="item"
      />
    </div>
    <!-- appleCare -->
    <div class="col-12" v-if="appleCareProducts.length">
      <a href="/applecare" style="text-decoration: none"
        ><h1 class="text-secondary text-center font-weight-bold m-4">
          <i class="fa-brands fa-apple"></i>AppleCare
        </h1>
      </a>
    </div>
    <div class="row p-2">
      <ProductCard
        v-for="(item, index) in appleCareProducts"
        :key="index"
        :product="item"
      />
    </div>
  </body>
</template>

<script>
import HomeSlider from "@/components/HomeSlider.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductService from "@/services/product.service";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "Home",

  components: {
    HomeSlider,
    ProductCard,
  },

  data() {
    return {
      products: [],
      iphoneProducts: [],
      macProducts: [],
      iPadProducts: [],
      appleWatchProducts: [],
      airPodsProducts: [],
      appleCareProducts: [],
    };
  },

  methods: {
    async getProducts() {
      try {
        this.products = await ProductService.find({
          top: true,
          type: "iphone",
        });
        this.iphoneProducts = await ProductService.find({
          top: true,
          type: "iphone",
        });
        this.macProducts = await ProductService.find({
          top: true,
          type: "mac",
        });
        this.iPadProducts = await ProductService.find({
          top: true,
          type: "ipad",
        });
        this.appleWatchProducts = await ProductService.find({
          top: true,
          type: "applewatch",
        });
        this.airPodsProducts = await ProductService.find({
          top: true,
          type: "airpods",
        });
        this.appleCareProducts = await ProductService.find({
          top: true,
          type: "appleCare",
        });
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
.carousel__next,
.carousel__prev {
  background-color: grey;
  border-radius: 50%;
  border: none;
}

.carousel__icon {
  border-radius: 50%;
}
</style>
