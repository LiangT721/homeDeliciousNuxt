<template>
  <div
    class="w-3/4 mx-auto mb-16 py-2 px-3 bg-white h-28 rounded-2xl shadow-md grid grid-cols-5 md:max-w-md md:h-32"
  >
    <div class="col-span-2 relative grid justify-items-center items-end cursor-pointer" @click="toFoodPage">
      <img
        class="object-cover w-full h-full rounded-l-2xl absolute top-0"
        :src="food_img"
        alt=""
        srcset=""
      />
      <img
        class="w-1/4 relative "
        src="../../assets/img/logo-card.png"
        alt=""
      />
    </div>
    <div class="col-span-3 px-3 grid grid-cols-5 text-xs">
      <grade class="col-span-4" :grade="card.grade" icon_size="text-sm" />
      <collection class="col-span-1" :food="card"/>
      <div class="title col-span-5 text-fontColorlight">
        {{card.food_category}}
      </div>
      <div class="food-name col-span-5 text-sm max-h-10 overflow-hidden font-semibold"  @click="toFoodPage">
        {{ card.food_name }}
      </div>
      <div class="user col-span-5 text-fontColorlight cursor-pointer"  @click="toUserPage">
        by <span>{{ card.username }}</span>
        <img class="icon" :src="card.icon" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Collection from "./collection.vue";
import grade from "./grade.vue";
export default {
  components: { grade, Collection },
  props: {
    card: {
      type: Object,
    },
    grade: {
      type: String,
    },
  },
  methods: {
    toFoodPage() {
      this.$router.push(`/food/${this.card.food_id}`)
    },
    toUserPage() {
      this.$router.push(`/user/${this.card.user_id}`)
    }
  },
  computed: {
    food_img() {
      if(this.card.image!=null){
        const imgList = this.card.image.split('<###^^&&###>')
        return imgList[0]
      }else{
        return null
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>