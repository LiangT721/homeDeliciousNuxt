<template>
  <div class="page-background">
    <div class="share-page relative">
      <div class="left">
        <side-bar />
      </div>
      <div class="right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 bg-white my-1 ml-2 rounded-sm shadow-md cursor-pointer md:hidden"
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
        <food-info-edit :food="food" v-if="content == 'infoUpload'" />
        <div
          class="preview md:grid md:grid-cols-2"
          v-if="content == 'infoPreview'"
        >
          <food-photo class="h-h60Screen md:col-span-1 sticky top-0 z-0" />
          <food-info-text
            class="rounded-t-3xl bg-white md:col-span-1 md:sticky md:top-0 md:h-h60Screen z-20 relative md:overflow-hidden"
          />
          <div
            class="btns md:col-span-2 flex justify-evenly -mt-3 pt-24 z-20 bg-primary"
          >
            <button class="button" @click="continueEdit">
              <span v-if="this.$store.getters.lan">继续编辑</span>
              <span v-else>continue edit</span>
            </button>
            <button class="button" @click="infoComfirm">
              <span v-if="this.$store.getters.lan">确认上传</span>
              <span v-else>confirm</span>
            </button>
          </div>
        </div>
        <method-edit v-if="content == 'methodUpload'" :foodId="foodId" @finish='finishEdit' />
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import sideBar from "../../components/public/sideBar.vue";
import { mapState } from "vuex";
import FoodInfoEdit from "../../components/edit/foodInfoEdit.vue";
import FoodInfoText from "../../components/food.vue/foodInfoText.vue";
import FoodPhoto from "../../components/food.vue/foodPhoto.vue";
import MethodEdit from "../../components/edit/methodEdit";
export default {
  components: { sideBar, FoodInfoEdit, FoodInfoText, FoodPhoto, MethodEdit },
  asyncData({ params }) {
    const foodId = params.editId;
    return { foodId };
  },
  data() {
    return {
      finish:false
    }
  },
  computed: {
    food() {
      return this.$store.getters.foodInfo_preview;
    },
    ...mapState({
      content: (state) => state.sharePageContent,
      foodPreview: (state) => state.foodInfo_temp,
    }),
  },
  methods: {
    cancel() {},
    continueEdit() {
      this.$store.commit("sharePageContentToggle", "infoUpload");
    },
    infoComfirm() {
      this.patchFood();
    },
    finishEdit(data) {
      this.finish = true;
      this.$router.push(`/food/${data}`);
    },
    async patchFood() {
      let data = this.foodPreview;
      data.token = cookies.get("token");
      data.food_id = this.foodId;
      data.images = data.image;
      console.log(this.foodPreview);
      await this.$axios({
        url: "/api/foods",
        method: "patch",
        data: data,
      }).then((res) => {
        console.log(res);
        this.$store.commit("sharePageContentToggle", "methodUpload");
      });
    },
  },
  mounted() {
    this.$store.commit("sharePageContentToggle", "infoUpload");
    console.log(this.content);
  },
  beforeRouteLeave(to, from, next) {
    if (
      this.foodPreview == null &&
      this.foodIngredients == null &&
      this.foodMethods == null
    ) {
      console.log("aaa");
      next();
    } else {
      console.log("bbb");
      if (this.finish == true) {
        next();
      } else {
        const res = confirm(
          "You have not finish your uploading.  Do you make sure to leave this page?"
        );
        if (res == true) {
          next();
        } else {
          next(false);
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>