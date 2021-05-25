<template>
  <div class="bg-primary">
    <div class="page">
      <div class="top mt-10">
        <div class="logo col-span-3">
          <logo class="ml-5 mt-2" />
        </div>
        <div class="img h-20 col-span-2 flex items-center justify-center">
          <user-icon class="h-full" />
        </div>
      </div>
      <div class="left">
        <side-bar />
      </div>
      <div class="right">
        <div class="search-bar mt-10">
          <search-bar />
        </div>
        <div class="home-slide h-80 md:h-half">
          <trend-list />
        </div>
        <div class="selection-bar sticky top-20 z-30 bg-primary md:h-32">
          <selection-bar />
        </div>
        <div class="home-food-card-part md:grid md:grid-cols-2">
          <div
            class="md:col-span-1"
            v-for="card in card_list"
            :key="card.food_id"
          >
            <food-card :card="card" />
          </div>
        </div>
      </div>
    </div>
    <bottom-bar />
  </div>
</template>
<script>
import SelectionBar from "../components/homePage/selectionBar.vue";
import TrendList from "../components/homePage/trendList.vue";
import Logo from "../components/public/logo.vue";
import SearchBar from "../components/public/searchBar.vue";
import { mapState } from "vuex";
import FoodCard from "../components/public/foodCard.vue";
import BottomBar from "../components/public/bottomBar.vue";
import SideBar from "../components/public/sideBar.vue";
import UserIcon from "../components/public/userIcon.vue";

export default {
  components: {
    Logo,
    SearchBar,
    TrendList,
    SelectionBar,
    FoodCard,
    BottomBar,
    SideBar,
    UserIcon,
  },
  data() {
    return {
      card_list: [],
    };
  },
  props: {
    card: {
      type: Object,
    },
  },
  computed: {
    ...mapState({
      category_selected: (state) => state.homepage_category_seleted,
    }),
    user() {
      return this.$store.getters.defaultUser;
    },
  },
  methods: {
    async fetch_food_by_cate() {
      const params = {
        cooking_way: this.category_selected,
      };
      const result = await this.$axios.$get("/api/foods", {
        params,
      });
      this.card_list = result;
    },
    async getCollectionList() {
      if (this.user.user_id) {
        const params = {
          user_id: this.user.user_id,
        };
        const res = await this.$axios.get("/api/collection", { params });
        this.$store.commit("setCollectionList", res.data);
      }
    },
  },
  watch: {
    category_selected(newValue) {
      console.log(newValue);
      this.fetch_food_by_cate();
    },
  },
  mounted() {
    this.fetch_food_by_cate();
    this.getCollectionList();
  },
};
</script>
