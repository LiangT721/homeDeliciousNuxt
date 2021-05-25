<template>
  <div class="page-background">
    <div class="page">
      <div class="left">
        <side-bar />
      </div>
      <div v-if="loading" class="right md:grid md:grid-cols-2 -mb-4">
        <div class="back fixed z-10 md:hidden" @click="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 bg-gray-200 rounded-lg shadow-2xl m-3 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
            />
          </svg>
        </div>
        <food-photo class="h-h60Screen md:col-span-1 sticky top-0 z-0" />
        <food-info-text
          :checkUser="checkUser"
          class="rounded-t-3xl bg-white md:col-span-1 md:sticky md:top-0 md:h-h60Screen z-20 relative"
        />
        <div
          class="methods-part bg-white md:col-span-2 z-20 relative -top-4 py-10 md:-top-8"
        >
          <!-- <div
            class="splitter h-splitter bg-gray-300 w-11/12 mb-10 mx-auto"
          ></div> -->
          <div v-if="MethodsDisplay" class="md:w-3/4 mx-auto">
            <food-ingredients
              v-if="ingredientDisplay"
              :ingredients="MethodsData.ingredient"
            />
            <food-methods
              v-if="processDisplay"
              :processes="MethodsData.process"
            />
          </div>
          <div v-else class="text-center py-10 text-xl font-fonts">
            <div v-if="checkUser">
              <span v-if="lan">你还没有分享他的制作方法</span>
              <span v-else>You haven't shared your recipe</span>
            </div>
            <div v-else>
              <span v-if="lan">作者还没有分享他的制作方法</span>
              <span v-else>Author hasn't shared the recipe</span>
            </div>
            <button class="button my-10" v-if="checkUser">
              <span v-if="lan">分享你的的制作方法</span>
              <span v-else>Shared your recipe</span>
            </button>
          </div>
          <div
            class="splitter h-splitter bg-gray-300 w-11/12 mb-10 mx-auto"
          ></div>
          <rate-grade :food="ShowFood" />
        </div>
      </div>
    </div>
    <bottom-bar />
  </div>
</template>

<script>
import FoodInfoText from "../../components/food.vue/foodInfoText.vue";
import FoodIngredients from "../../components/food.vue/foodIngredients.vue";
import FoodMethods from "../../components/food.vue/foodMethods.vue";
import FoodPhoto from "../../components/food.vue/foodPhoto.vue";
import RateGrade from "../../components/food.vue/rateGrade.vue";
import BottomBar from "../../components/public/bottomBar.vue";
import sideBar from "../../components/public/sideBar.vue";
import cookies from "vue-cookies";
export default {
  components: {
    sideBar,
    FoodPhoto,
    FoodInfoText,
    FoodIngredients,
    FoodMethods,
    BottomBar,
    RateGrade,
  },
  data() {
    return {
      loading: false,
      ShowFood: {},
      MethodsData: {},
      MethodsDisplay: true,
      ingredientDisplay: true,
      processDisplay: true,
    };
  },
  props: {
    food: {
      type: Object,
    },
  },
  computed: {
    lan() {
      return this.$store.getters.lan;
    },
    checkUser() {
      return Boolean(cookies.get("user").user_id == this.ShowFood.user_id);
    },
  },
  async asyncData({ params }) {
    const foodId = params.foodId; // When calling /abc the slug will be "abc"
    return { foodId };
  },
  methods: {
    back() {
      window.history.back();
    },
    async getFood() {
      const params = {
        food_id: this.foodId,
      };
      const res = await this.$axios.get("/api/foods", {
        params,
      });
      this.ShowFood = res.data;
      this.$store.commit("foodInfo_temp_Edit", res.data);
      this.loading = true;
    },

    async getMethod() {
      const params = {
        food_id: this.foodId,
      };
      const res = await this.$axios.get("/api/methods", {
        params,
      });
      console.log(res.data);
      if (res.data.ingredient == "" && res.data.process == "") {
        this.MethodsDisplay = false;
      }
      if (res.data.ingredient == "") {
        this.ingredientDisplay = false;
      }
      if (res.data.process == "") {
        this.processDisplay = false;
      }
      this.$store.commit("foodIngredients_temp_Edit", res.data.ingredient);
      this.$store.commit("foodMethods_temp_Edit", res.data.process);
    },
  },
  mounted() {
    this.getFood();
    this.getMethod();
  },
};
</script>

<style lang="scss" scoped>
</style>