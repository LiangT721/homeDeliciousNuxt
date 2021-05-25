<template>
  <div>
    <user-icon class="w-20 h-20 mx-auto" />
    <!-- <div class="grade "> -->
    <ul
      class="list grid grid-cols-5 justify-items-center text-4xl w-1/3 mx-auto my-10"
    >
      <li @click="rate(1)">
        <span v-if="grade > 0" class="text-yellow-400 cursor-pointer">★</span>
        <span v-else class="cursor-pointer">☆</span>
      </li>
      <li @click="rate(2)">
        <span v-if="grade > 1" class="text-yellow-400 cursor-pointer">★</span>
        <span v-else class="cursor-pointer">☆</span>
      </li>
      <li @click="rate(3)">
        <span v-if="grade > 2" class="text-yellow-400 cursor-pointer">★</span>
        <span v-else class="cursor-pointer">☆</span>
      </li>
      <li @click="rate(4)">
        <span v-if="grade > 3" class="text-yellow-400 cursor-pointer">★</span>
        <span v-else class="cursor-pointer">☆</span>
      </li>
      <li @click="rate(5)">
        <span v-if="grade > 4" class="text-yellow-400 cursor-pointer">★</span>
        <span v-else class="cursor-pointer">☆</span>
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script>
import userIcon from "../public/userIcon.vue";
import cookies from "vue-cookies";
export default {
  components: { userIcon },
  props: {
    food: {
      type: Object,
    },
  },
  data() {
    return {
      grade: this.food.grade,
    };
  },
  methods: {
    async rate(data) {
      console.log(data);
      console.log(this.grade);
      if (this.grade == 0) {
        console.log("a");
        await this.$axios({
          url: "/api/grade",
          method: "post",
          data: {
            food_id: this.food.food_id,
            token: cookies.get("token"),
            grade: data,
          },
        })
          .then((res) => {
            console.log(res.data);
            this.grade = data;
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        console.log("b");
        await this.$axios({
          url: "/api/grade",
          method: "patch",
          data: {
            food_id: this.food.food_id,
            token: cookies.get("token"),
            grade: data,
          },
        })
          .then((res) => {
            console.log(res.data);
            this.grade = res.data;
          })
          .catch((err) => {
            alert(err);
          });
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>