<template>
  <div class="relative">
    <div>
      <button class="button mt-10" @click="languageSetting(false)">English</button>
      <button class="button mt-10" @click="languageSetting(true)">中文</button>
    </div>
  </div>
</template>

<script>
import cookies from 'vue-cookies';
export default {
    methods: {
        languageSetting(data) {
            console.log(data)
            cookies.set('lang',data)
            this.$store.commit('setLang',data)
            this.$emit('finish', 'menu');
        }
    },
};
</script>

<style lang="scss" scoped>
</style>