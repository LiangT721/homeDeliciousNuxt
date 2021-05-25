<template>
  <div>
    <div v-for="card in collectionList" :key="card.food_id">
      <food-card :card="card" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import foodCard from "../public/foodCard.vue";
export default {
  components: { foodCard },
  computed: {
    ...mapState({
      collectionList: (state) => state.collectionList,
    }),
  },
  mounted () {
      console.log(this.collectionList);
  },
};
</script>

<style lang="scss" scoped>
</style>