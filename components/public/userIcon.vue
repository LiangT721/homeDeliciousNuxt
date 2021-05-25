<template>
    <div>
        <img class="icon-title" :src="iconPath" alt="" @click="()=>{ this.$router.push('/setting')}">
    </div>
</template>

<script>
import cookies from 'vue-cookies'
    export default {
        computed: {
            iconPath() {
                return this.$store.state.user.icon
            }
        },
        mounted () {
            if(cookies.get('user')){
                this.$store.commit('setUser',cookies.get('user'))
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>