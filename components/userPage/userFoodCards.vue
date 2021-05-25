<template>
    <div>
        <div v-for="card in user_productions" :key="card.id">
            <food-card 
            :card = 'card'
            />
        </div>
    </div>
</template>

<script>
import foodCard from '../public/foodCard.vue';
export default {
  components: { foodCard },
    data() {
        return {
            user_productions: ''
        }
    },
    props: {
        userId: {
            type: String
        }
    },
    methods: {
        async getUserProductions() {
            const params = {
                user_id : this.userId
            }
            const res = await this.$axios.get('/api/foods',{params});
            this.user_productions = res.data;
            console.log(this.user_productions)
        }
    },
    mounted () {
        this.getUserProductions();
    },
}
   
</script>

<style lang="scss" scoped>

</style>