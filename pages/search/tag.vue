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
        <search-tag class="search-area mx-8 mt-5" />
      </div>
    </div>
    <bottom-bar />
  </div>
</template>

<script>
import BottomBar from "../../components/public/bottomBar.vue";
import searchBar from "../../components/public/searchBar.vue";
import SideBar from "../../components/public/sideBar.vue";
import SearchTag from "../../components/searchPage.vue/searchTag.vue";
export default {
  components: { searchBar, SideBar, BottomBar, SearchTag },
};
</script>

