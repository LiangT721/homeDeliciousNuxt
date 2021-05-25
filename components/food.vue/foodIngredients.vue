<template>
    <div class="px-6 py-5 content-start gap-y-3 font-fonts">
        <p class="food-name text-3xl font-bold mb-5">ingredients:</p>
        <div class="grid grid-cols-5 my-3 text-md gap-x-2 ml-2" v-for="ingredient in ingredients" :key="ingredient.id">
            <li class="col-span-3">{{ingredient.ingredient}}</li>
            <p class="col-span-2 ">{{ingredient.amount}}</p>
            <hr class="mt-3 col-span-5">
        </div>
    </div>
</template>

<script>
    export default {  
        computed: {
            ingredients() {
                return this.$store.getters.ingredient_preview
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>