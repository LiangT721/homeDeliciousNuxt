<template>
  <div class="flex justify-center my-5 font-fonts uppercase">
    <div class="mx-3 grid justify-items-center" @click="select(true)">
      production
      <div class="h-1 bg-pink-600 rounded-sm transition-all duration-300" :class="production"></div>
    </div>
    <div
      class="mx-3 transition-all grid justify-items-center"
      @click="select(false)"
    >
      collection
      <div class="h-1 bg-pink-600 rounded-sm transition-all duration-300" :class="collection"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userPageToggle: (state) => state.userPageToggle,
    }),
    production() {
      return this.$store.getters.production_class;
    },
    collection() {
      return this.$store.getters.collection_class;
    },
  },
  methods: {
    select(data) {
      this.$store.commit("userPage_shift", data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>