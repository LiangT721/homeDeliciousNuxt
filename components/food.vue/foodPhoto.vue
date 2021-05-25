<template>
  <div class="">
    <div class="background-photo h-full relative">
      <img
        class="h-full w-full object-cover"
        :src="bg_photo"
        alt=""
        srcset=""
      />
      <div
        class="photo-list h-1/6 justify-center flex min-w-full absolute bottom-0 overflow-x-scroll overflow-y-hidden whitespace-nowrap"
      >
        <img
          class="h-full mr-2 z-10 transition"
          v-for="photo in photoList"
          :key="photo.id"
          :src="photo.url"
          @click="select(photo.id)"
          alt=""
        />
        <div
          class="w-full h-full absolute bottom-0 z-0 bg-gray-900 opacity-80"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg_photo: "",
      photoList:{},
    };
  },
  watch:{
      food(newValue){
        console.log(newValue)
        this.photoList = newValue.image;
        console.log(this.photoList)
        this.bg_photo = this.photoList[0].url    
      }
  },
  methods: {
      select(index) {
          for(let photo of this.photoList){
              if(photo.id == index){
                  this.bg_photo = photo.url
              }
          }
      }
  },
  computed: {
    food() {
      return this.$store.getters.foodInfo_preview
    }
  },
  mounted () {
    console.log(this.food.image);
        this.photoList = this.food.image;
        this.bg_photo = this.photoList[0].url    
      
  },
};
</script>

<style lang="scss" scoped>
</style>