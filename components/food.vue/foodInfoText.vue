<template>
  <div
    class="grid grid-cols-6 px-6 py-5 content-start gap-y-3 font-fonts relative"
  >
    <div class="edit-option absolute right-5 top-16" v-if="checkUser">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-shadow"
        viewBox="0 0 20 20"
        fill="currentColor"
        style="text-shadow: 5px 5px 5px black"
        @click="
          () => {
            this.option_appear = !this.option_appear;
          }
        "
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
          clip-rule="evenodd"
        />
      </svg>
      <transition name="fade">
        <div
          v-if="option_appear"
          class="option uppercase bg-primary absolute right-0 rounded-md shadow-lg text-center"
        >
          <p class="hover:bg-white p-2" @click="toEditPage()">
            <span v-if="this.$store.getters.lan">修改</span>
            <span v-else>edit</span>
          </p>
          <p class="hover:bg-white p-2" @click="deleteFood">
            <span v-if="this.$store.getters.lan">删除</span>
            <span v-else>delete</span>
          </p>
        </div>
      </transition>
    </div>
    <grade :grade="food.grade" icon_size="text-2xl" class="col-span-4" />
    <collection class="col-span-2" :food='food'/>
    <p class="food-name col-span-5 text-3xl font-bold">{{ food.food_name }}</p>
    <div
      class="tags col-span-4 flex justify-between text-lg text-fontColordark"
    >
      <p>{{ food.food_location }}</p>
      <p>{{ food.food_category }}</p>
      <p>{{ food.tag }}</p>
    </div>
    <div class="users col-span-6 flex text-lg font-semibold">
      by {{ food.username }}
      <img class="h-6 ml-3 rounded-round" :src="food.icon" alt="" />
    </div>
    <div class="description col-span-6 text-lg font-thin text-justify">
      {{ food.food_description }}
    </div>
    <div
      class="cooking-icons col-span-6 flex justify-between md:justify-around font-semibold"
    >
      <cookway-icon class="cooking-icon" :cooking_way="food.cooking_way" />
      <p class="cooking-icon text-center grid content-center">
        {{ food.cooking_time }}MIN
      </p>
      <div class="cooking-icon text-center grid content-center">
        {{ food.difficulty }}
      </div>
    </div>
  </div>
</template>

<script>
import Collection from "../public/collection.vue";
import grade from "../public/grade.vue";
import CookwayIcon from "./cookwayIcon.vue";
import cookies from "vue-cookies";
export default {
  components: { grade, Collection, CookwayIcon },
  data() {
    return {
      option_appear: false,
    };
  },
  computed: {
    food() {
      return this.$store.getters.foodInfo_preview;
    },
  },
  props: {
    checkUser: {
      type: Boolean,
    },
  },
  methods: {
    toEditPage() {
      this.$router.push(`/edit/${this.food.food_id}`);
    },
    async deleteFood() {
      if (confirm("Do you confirm to delete this food?")) {
        await this.$axios({
          url: "/api/foods",
          method: "delete",
          data: {
            token: cookies.get("token"),
            food_id: this.food.food_id,
          },
        }).then((res)=>{
          alert('Delete successfull!');
          this.$router.push('/');
        }).catch((err)=>{
          alert('Delete failed')
        });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  /* transform: translateY(-20px) */
}
</style>