<template>
  <div class="mt-10 w-5/6 mx-auto h-full relative ">
    <input
      type="text"
      class="w-full h-10 self-center mx-auto rounded-3xl pl-14 md:pl-16 bg-barBgc md:w-full"
      v-model="searchContent"
      @keypress.enter="enter"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 absolute text-white top-2.5 self-center left-4 md:left-8"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {},
      searchContent: "",
    };
  },
  methods: {
    async enter() {
      console.log(this.searchContent);
      const params = {
        content: this.searchContent,
      };
      const res = await this.$axios.get("/api/search", { params });
      this.$store.commit("setSearchRes", res.data);
      console.log(res.data);
      if (this.$route.path != "/search/result") {
        this.$router.push("/search/result");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>