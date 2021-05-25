<template>
    <div>
        <div v-for="card in foodList" :key="card.id">
            <food-card :card = 'card' />
        </div>

    </div>
</template>

<script>
import foodCard from './foodCard.vue'
    export default {
  components: { foodCard },
        props: {
            foodList: {
                type: Array,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>