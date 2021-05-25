<template>
  <div class="page-background">
    <div class="page">
      <div class="left">
        <side-bar />
      </div>
      <div class="right">
        <div class="search-bar mt-10">
          <search-bar />
        </div>
        <div
          v-if="user"
          class="user-info max-h-64 py-5 px-5 text-fontColordark grid grid-cols-5 md:max-w-2xl md:mx-auto md:py-10"
        >
          <div class="text col-span-3 px-5 font-fonts text-sm grid gap-y-2">
            <p class="text-3xl font-bold">{{ user.username }}</p>
            <p>
              <span v-if="this.$store.getters.lan">所在地</span
              ><span v-else>Location</span>: {{ user.location }}
            </p>
            <p>
              <span v-if="this.$store.getters.lan">生日</span
              ><span v-else>Birthday</span>: {{ user.birthday }}
            </p>
            <p>
              <span v-if="this.$store.getters.lan">加入时间</span
              ><span v-else>Join Date</span>: {{ user.join_date }}
            </p>
            <p>
              <span v-if="this.$store.getters.lan">个人简介</span
              ><span v-else>Bio</span>: {{ user.bio }}
            </p>
          </div>
          <div class="icon col-span-2">
            <img
              class="rounded-round w-3/4 mx-auto md:w-1/2"
              :src="user.icon"
              alt=""
            />
          </div>
        </div>
        <div class="card-area">
          <user-page-toggle class="md:hidden" />
          <user-food-cards v-if="userPageToggle" :userId="userId" />
          <user-collection-cards v-else />
        </div>
      </div>
    </div>
    <bottom-bar />
  </div>
</template>

<script>
import BottomBar from "../../components/public/bottomBar.vue";
import SearchBar from "../../components/public/searchBar.vue";
import sideBar from "../../components/public/sideBar.vue";
import UserCollectionCards from "../../components/userPage/userCollectionCards.vue";
import UserFoodCards from "../../components/userPage/userFoodCards.vue";
import UserPageToggle from "../../components/userPage/userPageToggle.vue";
import { mapState } from "vuex";

export default {
  components: {
    sideBar,
    SearchBar,
    BottomBar,
    UserPageToggle,
    UserFoodCards,
    UserCollectionCards,
  },
  data() {
    return {
      user: null,
    };
  },
  async asyncData({ params }) {
    const userId = params.userId; // When calling /abc the slug will be "abc"
    return { userId };
  },
  computed: {
    ...mapState({
      userPageToggle: (state) => state.userPageToggle,
    }),
    defaultUser() {
      return this.$store.getters.defaultUser;
    },
  },
  methods: {
    confirmLogin() {
      let res = confirm("Please login your account.");
      if (res == true) {
        this.$router.push("/login");
      }
    },
    async getUsers() {
      console.log(this.defaultUser);
      console.log(this.userId);
      let params;
      if (this.userId) {
        params = {
          user_id: this.userId,
        };
      } else {
        params = {
          user_id: this.defaultUser.user_id,
        };
      }
      console.log(params);
      const res = await this.$axios.get("/api/users", {
        params,
      });
      this.user = res.data;
      console.log(this.user);
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style lang="scss" scoped>
</style>