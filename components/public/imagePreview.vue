<template>
  <div class="relative">
    <img
      class=""
      :class="icon_class"
      :src="image_url"
      alt=""
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 top-0 right-0 absolute bg-gray-200 rounded-sm shadow-md cursor-pointer"
      viewBox="0 0 20 20"
      fill="currentColor"
      @click="Delete"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
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