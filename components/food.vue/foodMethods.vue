<template>
  <div class="px-6 py-5 content-start gap-y-3 font-fonts">
    <p class="food-name text-3xl font-bold mb-5">Methods:</p>
    <div class="mb-5 bg-primary py-5 px-6 shadow-md rounded-xl md:px-8 md:py-3 md:bg-opacity-0 md:shadow-none" v-for="process in processes" :key="process.id">
      <p class="uppercase text-center text-xl mb-8 font-semibold relative md:mb-3">
        Step:{{ process.id + 1 }}
      </p>
      <div class="md:grid md:grid-cols-3 md:items-start md:w-full md:mx-auto md:h-40  md:rounded-md overflow-hidden md:shadow-xl md:bg-primary" >
        <img v-if="process.img" class="h-48 overflow-hidden  w-full object-cover md:h-full md:col-span-1" :src="process.img" :class="process.order" alt="" />
        <p  class="font-fonts font-semibold w-full text-justify mx-auto h-auto mt-5 p-3 md:h-full md:col-span-2 md:order-1 md:mt-0 md:p-5" >
          {{ process.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    processes() {
      return this.$store.getters.method_preview
    }
  },
  watch: {
    processes(newValue) {
      newValue.map((value, index) => {
        value.order = `md:order-${(value.id % 2) + 1}`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>