<template>
  <div>
    <img :src="require(`../../assets/img/selection-icon/${cooking_icon}.png`)" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cooking_icon: "frying-pan",
    };
  },
  props: {
    cooking_way: {
      type: String,
    },
  },
  watch: {
    cooking_way(newValue) {
        switch (newValue) {
          case "fry":
            this.cooking_icon = "frying-pan";
            break
          case "stew":
            this.cooking_icon = "pot";
            break
          case "deep fry":
            this.cooking_icon = "fryer";
            break
          case "bake":
            this.cooking_icon = "oven";
            break
          case "salad":
            this.cooking_icon = "salad";
            break
          case "steam":
            this.cooking_icon = "steamer";
            break
          default:
            break;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>