<template>
  <div>
    <ul class="list flex" :class="icon_size">
      <li>
        <span v-if="grade > 0" class="text-yellow-400">★</span>
        <span v-else >☆</span>
      </li>
      <li>
        <span v-if="grade >=1" class="text-yellow-400">★</span>
        <span v-else >☆</span>
      </li>
      <li>
        <span v-if="grade >=2" class="text-yellow-400">★</span>
        <span v-else >☆</span>
      </li>
      <li>
        <span v-if="grade >=3" class="text-yellow-400">★</span>
        <span v-else>☆</span>
      </li>
      <li>
        <span v-if="grade >=4" class="text-yellow-400">★</span>
        <span v-else>☆</span>
      </li>
   
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    grade: {
      type: String,
    },
    icon_size: {
      type: String,
    }
  },
  mounted () {
   
  },
};
</script>

<style lang="scss" scoped>
</style>