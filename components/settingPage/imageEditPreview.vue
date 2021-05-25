<template>
  <div class="relative">
    <img
      :class="icon_class"
      :src="image_url"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon_class: "",
    };
  },
  props: {
    image_type: {
      type: String,
    },
    image_url: {
      type: String,
    },
  },
  methods: {
    async Delete() {
      let filename = this.image_url.replace(
        "https://homedelicious.ml/img/uploadImgs/",
        ""
      );
      const body = {
        image: filename,
      };
      await this.$axios({
          url: "/api/upload",
          method: "delete",
          data: {
            image: filename,
          },
      }).then(()=>{
          this.$emit("delete_res", true)
      }).catch(()=>{
          alert("delete not success")
      })
    },
  },
  mounted() {
    switch (this.image_type) {
      case "user":
        this.icon_class = "rounded-round object-cover";
        break;
      case "image":
        this.icon_class = "w-full h-full object-cover";
        break;
      

      default:
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>