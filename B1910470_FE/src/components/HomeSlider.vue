<template>
  <carousel
    :items-to-show="1"
    transition="2000"
    itemsToScroll="1"
    autoplay="5000"
  >
    <slide v-for="slide in 3" :key="slide">
      <img
        class="d-block w-100 slide"
        src="https://cdn.tgdd.vn/2022/11/banner/2880-80003-1920x533.gif"
        alt="First slide"
      />
      <img
        class="d-block w-100 slide"
        src="https://cdn.tgdd.vn/2022/11/banner/2880-800-1920x533-4.png"
        alt="Second slide"
      />
      <img
        class="d-block w-100 slide"
        src="https://cdn.tgdd.vn/2022/11/banner/2880-800-1920x533-3.png"
        alt="Third slide"
      />
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "HomeSlider",

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style></style>
