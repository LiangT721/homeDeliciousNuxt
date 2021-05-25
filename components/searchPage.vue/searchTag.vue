<template>
  <div class="search-tag font-fonts grid gap-y-12">
    <div class="cate h-60 w-full overflow-hidden">
      <h3 class="font-medium text-lg pb-3">
        <span v-if="this.$store.getters.lan">按地域或类别搜索：</span
        ><span v-else>Search by category or location:</span>
      </h3>
      <div class="flex flex-wrap justify-between mx-2">
        <div
          v-if="tag[0] != ''"
          class="uppercase border-b-2 border-fontColordark mr-6 mb-2 cursor-pointer"
          v-for="(tag, index) in cateLocation"
          :key="index"
          @click="searchClick(tag[0], 'catelocation')"
        >
          {{ tag[0] }}
        </div>
      </div>
    </div>
    <div class="tag h-60 w-full overflow-hidden">
      <h3 class="font-medium text-lg pb-3">
        <span v-if="this.$store.getters.lan">按标签搜索：</span
        ><span v-else>Search by tag:</span>
      </h3>
      <div class="flex flex-wrap justify-between mx-2">
        <div
          v-if="tag[0] != ''"
          class="uppercase border-b-2 border-fontColordark mr-6 mb-2 cursor-pointer"
          v-for="(tag, index) in tags"
          :key="index"
          @click="searchClick(tag[0], 'tag')"
        >
          {{ tag[0] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cateLocation: [],
      tags: [],
    };
  },
  methods: {
    async getTagOfCateLocation() {
      const params = {
        searchTag: "cateLocation",
      };
      const res = await this.$axios.get("/api/tags", { params });
      this.cateLocation = res.data;
    },
    async getTagOfTags() {
      const params = {
        searchTag: "tag",
      };
      const res = await this.$axios.get("/api/tags", { params });
      this.tags = res.data;
    },
    async searchClick(data1, data2) {
      const params = {
        searchTag: data2,
        content: data1,
      };
      const res = await this.$axios.get("/api/search", { params });
      this.$store.commit('setSearchRes',res.data)
      this.$router.push('/search/result')
    },
  },
  mounted() {
    this.getTagOfCateLocation();
    this.getTagOfTags();
  },
};
</script>

<style lang="scss" scoped>
</style>