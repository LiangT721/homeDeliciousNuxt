<template>
  <div class="page-background">
    <div class="share-page relative">
      <div class="left">
        <side-bar />
      </div>
      <div class="right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 bg-white rounded-sm shadow-md cursor-pointer md:hidden"
          viewBox="0 0 20 20"
          fill="currentColor"
          @click="cancel"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <food-info-upload v-if="content == 'infoUpload'" />
        <div
          class="preview md:grid md:grid-cols-2"
          v-if="content == 'infoPreview'"
        >
          <food-photo class="h-h60Screen md:col-span-1 sticky top-0 z-0" />
          <food-info-text
            v-if="content == 'infoPreview'"
            class="rounded-t-3xl bg-white md:col-span-1 md:sticky md:top-0 md:h-h60Screen z-20 relative md:overflow-hidden"
          />
          <div
            class="btns md:col-span-2 flex justify-evenly -mt-3 pt-24 z-20 bg-primary"
          >
            <button class="button">
              <span v-if="this.$store.getters.lan">继续编辑</span>
              <span v-else>continue edit</span>
            </button>
            <button class="button" @click="infoComfirm">
              <span v-if="this.$store.getters.lan">确认上传</span>
              <span v-else>confirm</span>
            </button>
          </div>
        </div>
        <method-upload v-if="content == 'methodUpload'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import cookies from "vue-cookies";
import FoodInfoText from "../components/food.vue/foodInfoText.vue";
import FoodPhoto from "../components/food.vue/foodPhoto.vue";
import sideBar from "../components/public/sideBar.vue";
import FoodInfoUpload from "../components/sharePage/foodInfoUpload.vue";
import MethodUpload from "../components/sharePage/methodUpload.vue";
export default {
  components: {
    sideBar,
    FoodInfoUpload,
    FoodPhoto,
    FoodInfoText,
    MethodUpload,
  },
  data() {
    return {
      finish: true
    }
  },
  props: {
    image_type: {
      type: String,
    },
    image_url: {
      type: String,
    },
  },
  computed: {
    ...mapState({
      content: (state) => state.sharePageContent,
      foodPreview: (state) => state.foodInfo_temp,
      foodIngredients: (state) => state.foodIngredients_temp,
      foodMethods: (state) => state.foodMethods_temp,
    }),
  },
  methods: {
    cancel() {
      window.history.back();
    },

    async foodInfoUpload() {},

    async infoComfirm() {
      console.log(this.foodPreview);
      let data = this.foodPreview;
      data.token = cookies.get("token");
      data.images = data.image;
      console.log(data);
      await this.$axios({
        url: "/api/foods",
        method: "post",
        data: data,
      })
        .then((res) => {
          console.log(res.data);
          console.log(res.data);
          this.$store.commit("setFoodUploadId", res.data.food_id);
          this.$store.commit("sharePageContentToggle", "methodUpload");
        })
        .catch((error) => alert(error));
    },
  },
  mounted() {
    // this.$store.commit("sharePageContentToggle", "infoUpload");
    this.$store.commit("foodInfo_temp_Edit", null);
    this.$store.commit("foodIngredients_temp_Edit", null);
    this.$store.commit("foodMethods_temp_Edit", null);
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.foodPreview);
    console.log(this.foodIngredients);
    console.log(this.foodMethods);
    if (
      (this.foodPreview == null &&
      this.foodIngredients == null &&
      this.foodMethods == null) || this.finish == true
    ) {
      console.log("aaa")
      next();
    } else {
      console.log('bbb')
      const res = confirm(
        "You have not finish your uploading.  Do you make sure to leave this page?"
      );
      if (res == true) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>