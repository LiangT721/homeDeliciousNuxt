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
        <card-list :foodList='search_res'/>
      </div>
    </div>
      <bottom-bar />
  </div>
</template>

<script>
import BottomBar from "../../components/public/bottomBar.vue";
import CardList from "../../components/public/cardList.vue";
import searchBar from "../../components/public/searchBar.vue";
import SideBar from "../../components/public/sideBar.vue";
import SearchTag from "../../components/searchPage.vue/searchTag.vue";
import { mapState } from "vuex";
export default {
  components: { searchBar, SideBar, BottomBar, SearchTag, CardList },
  computed: {
    ...mapState({
      search_res: (state) => state.searchRes,
    }),
  },
};
</script>