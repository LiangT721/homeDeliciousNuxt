<template>
  <div class="w-screen h-full md:w-full">
    <!-- <button @click="fetchSomething">fetch</button> -->
    <hooper
      class="w-full"
      style="height: 100%"
      :itemsToShow="1.3"
      :centerMode="true"
      :autoPlay="false"
    >
      <slide class="h-full" v-for="food in slides" :key="food.food_id">
        <div class="slider-border w-5/6 mx-auto mt-5 h-full">
          <img
            class="w-full object-cover h-3/4 rounded-lg shadow-lg"
            :src="food.image"
            alt=""
          />
          <div
            class="trend-card w-3/4 h-1/3 bg-white mx-auto relative rounded-lg shadow-lg -top-20 grid grid-cols-5 py-2 px-3 text-xs font-fonts md:w-1/2"
          >
            <div class="grade col-span-4">
              <grade :grade="food.grade"/>
            </div>
            <div class="collection col-span-1">
              <collection :food="food"/>
            </div>
            <div class="title col-span-5 text-fontColorlight">Top 5 Review</div>
            <div class="food-name col-span-5 text-sm font-semibold">
              {{ food.food_name }}
            </div>
            <div class="user col-span-5 text-fontColorlight">
              by <span>{{ food.username }}</span>
              <img class="icon" :src="food.icon" alt="" />
            </div>
          </div>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
import Grade from "../public/grade.vue";
import Collection from '../public/collection.vue';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    Grade,
    Collection,
  },
  data() {
    return {
      slides: [],
    };
  },
  props: {
    grade: {
      type: String,
    },
  },
  methods: {
    async fetchSomething() {
      const resulte = await this.$axios.$get(
        "https://homedelicious.ml/api/foods", {
          params:{
            rate: 1
          }
        }
      );
      this.slides = resulte.slice(0, 5);
      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].image = this.slides[i].image.split("<###^^&&###>")[0];
      }
    },
  },
  mounted() {
    this.fetchSomething();
  },
};
</script>

<style scoped>
.hooper-slide.is-current {
  transform: scale(1.1);
}
</style>