<template>
  <div class="container">
    <carousel>
      <carousel-slide
        v-for="slide in slides"
        :key="slide"
        class="carousel-slider"
      >
        <img :src="slide" :alt="slide" />
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import CarouselCard from "@/components/Carousel/CarouselCard.vue";
import CarouselSlide from "@/components/Carousel/CarouselSlide.vue";
export default {
  data() {
    return {
      slides: [
        require("@/assets/Home/Promosi/Promosi_9.png"),
        require("@/assets/Home/Promosi/Promosi_8.png"),
        require("@/assets/Home/Promosi/Promosi_5.png"),
        require("@/assets/Home/Promosi/Promosi_6.png"),
        require("@/assets/Home/Promosi/Promosi_7.png"),
      ],
    };
  },
  components: {
    Carousel: CarouselCard,
    CarouselSlide: CarouselSlide,
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 1000px;
  height: 600px;
  z-index: 10;
}
.btn {
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid transparent;
  margin: 5px 10px;
  color: #fff;
  height: 50px;
  width: 50px;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
}
.btn:hover {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn-next {
  top: 50%;
  right: 0;
}
.btn-prev {
  top: 50%;
  left: 0;
}
.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.carousel-slider img {
  width: 100%;
  height: 100%;
}
</style>