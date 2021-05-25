<template>
  <div class="w-screen p-5 md:w-full md:h-24 md:overflow-hidden ">
    <ul class="overflow-x-scroll overflow-y-hidden whitespace-nowrap  md:w-full md:flex md:pb-3 md:justify-evenly">
      <li
        class="category-icon"
        :style="{ backgroundColor: bgcFry }"
        @click="select_category('fry')"
      >
        <img src="../../assets/img/selection-icon/frying-pan.png" alt="" />
      </li>
      <li
        class="category-icon"
        :style="{ backgroundColor: bgcDeepFry }"
        @click="select_category('deep fry')"
      >
        <img src="../../assets/img/selection-icon/fryer.png" alt="" />
      </li>
      <li
        class="category-icon"
        :style="{ backgroundColor: bgcBake }"
        @click="select_category('bake')"
      >
        <img src="../../assets/img/selection-icon/oven.png" alt="" />
      </li>
      <li
        class="category-icon"
        :style="{ backgroundColor: bgcStew }"
        @click="select_category('stew')"
      >
        <img src="../../assets/img/selection-icon/pot.png" alt="" />
      </li>
      <li
        class="category-icon"
        :style="{ backgroundColor: bgcSalad }"
        @click="select_category('salad')"
      >
        <img src="../../assets/img/selection-icon/salad.png" alt="" />
      </li>
      <li
        class="category-icon"
        :style="{ backgroundColor: bgcSteam }"
        @click="select_category('steam')"
      >
        <img src="../../assets/img/selection-icon/steamer.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgcFry: "#FFCAD4",
      bgcStew: "#F3F6F4",
      bgcBake: "#F3F6F4",
      bgcDeepFry: "#F3F6F4",
      bgcSalad: "#F3F6F4",
      bgcSteam: "#F3F6F4",
    };
  },
  methods: {
    select_category(data) {
      switch (data) {
        case "fry":
          this.bgcFry = "#FFCAD4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;
        case "deep fry":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#FFCAD4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;
        case "stew":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#FFCAD4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;
        case "bake":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#FFCAD4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;
        case "salad":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#FFCAD4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;
        case "steam":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#FFCAD4";
          this.$store.commit("select_homepage_category", data);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>