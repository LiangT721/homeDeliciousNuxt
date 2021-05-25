<template>
    <div>
        <h1>about</h1>
        <hr>
        <div align='center'>
            <button v-tooltip.top='msgt'>button one</button>
            <button v-tooltip.bottom='msgb'>button two</button>
            <hr>
            <div>{{counter}}</div>
            <hr>
            <button @click="increment">Add one</button>
        </div>
        <header class="mb-5">
        <div class="bg-gray-700 p-4 text-white">Helo world.</div>
      </header>
      <main class="container mx-auto">
        <div class="text-center text-5xl">我的内容我做主！</div>
        <hr class="my-5" />
        <div class="flex justify-center">
          <img src="https://raw.githubusercontent.com/komavideo/LearnTailwindCSS/main/tailwindcss.png"
            class="shadow-lg border my-5">
        </div>
      </main>
      <footer class="mt-5">
        <div class="bg-gray-300 p-4 text-black">你好，Tailwind CSS。</div>
      </footer>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                msgt:'I am on the top!',
                msgb:'I am on the buttom'
            }
        },
        computed: {
            ...mapState({
                counter: (state) => state.counter
            })
        },
        methods: {
            ...mapMutations({
                increment:'increment'
            })
        },
        
    }
</script>

<style lang="scss" scoped>

</style>