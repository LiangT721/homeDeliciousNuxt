<template>
  <div>
    <div v-if="if_collection" class="relative" @click="removeCollection">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-red-600 absolute right-0 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div v-else class="relative" @click="addCollection">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 absolute right-0 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import cookies from "vue-cookies";
export default {
  props: {
    food: {
      type: Object,
    },
  },
  computed: {
    ...mapState({
      collectionList: (state) => state.collectionList,
    }),
    collectionIdList() {
      return this.$store.getters.collection_id_list;
    },
    if_collection() {
      return this.collectionIdList.includes(this.food.food_id);
    },
  },
  methods: {
    confirmLogin() {
      let res = confirm("Please login your account.");
      if (res == true) {
        this.$router.push("/login");
      }
    },
    async removeCollection() {
      if (cookies.get("token")) {
        await this.$axios({
          url: "/api/collection",
          method: "delete",
          data: {
            token: cookies.get("token"),
            food_id: this.food.food_id,
          },
        })
          .then((res) => {
            console.log(res.data);
            this.$store.commit("removeCollectionList", this.food.food_id);
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        this.confirmLogin();
      }
    },
    async addCollection() {
      if (cookies.get("token")) {
        await this.$axios({
          url: "/api/collection",
          method: "post",
          data: {
            token: cookies.get("token"),
            food_id: this.food.food_id,
          },
        })
          .then((res) => {
            console.log(res.data);
            this.$store.commit("addCollectionList", this.food);
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        this.confirmLogin();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>