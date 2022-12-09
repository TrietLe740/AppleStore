<template>
  <Carousel :autoplay="5000" :items-to-show="1" :transition="2000">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <img class="d-block w-100" :src="`${slide}`" />
      </div>
    </Slide>

    <template #addons>
      <navigation />
    </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "HomeSlider",

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      slides: [
        "https://cdn.tgdd.vn/2022/11/banner/2880-80003-1920x533.gif",
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_1920x533/https://cdn.tgdd.vn/2022/11/banner/2880-800-1920x533-6.png",
        "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75,s_1920x533/https://cdn.tgdd.vn/2022/11/banner/2880-800-1920x533-4.png",
      ],
    };
  },
};
</script>

<style>
.carousel__item {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
