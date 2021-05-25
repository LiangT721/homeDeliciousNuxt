<template>
  <div class="py-5 content-start gap-y-3 font-fonts">
    <p class="food-name text-3xl font-bold mb-5">ingredients:</p>
    <div
      class="grid grid-cols-9 my-3 text-md gap-x-2 ml-2"
      v-for="ingredient in ingredients"
      :key="ingredient.id"
    >
      <div class="col-span-1 flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="ingredientDelete(ingredient.id)"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
      <input
        type="text"
        class="col-span-4"
        v-model="ingredient.ingredient"
        @input="ingredientUpdate(ingredient.id)"
      />
      <input type="text" class="col-span-4" v-model="ingredient.amount" />

      <hr class="mt-3 col-span-9" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ingredients() {
      return this.$store.getters.ingredient_preview;
    },
  },
  methods: {
    ingredientUpdate(index) {
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.ingredients));
      console.log(data);
      for (let val of data) {
        if (val.id == index) {
          val.ingredient = event.target.value;
        }
        newData += `${val.ingredient}<###**%%###>${val.amount}<###**^^###>`;
      }
      console.log(newData);
      this.$store.commit("foodIngredients_temp_Edit", newData);
    },
    ingredientDelete(index) {
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.ingredients));
      console.log(data);
      for (let val of data) {
        if (val.id != index) {
          newData += `${val.ingredient}<###**%%###>${val.amount}<###**^^###>`;
        }
      }
      console.log(newData);
      this.$store.commit("foodIngredients_temp_Edit", newData);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>