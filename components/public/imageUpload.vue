<template>
  <div class="grid justify-items-center">
    <icon-loading v-if="if_loading" />
    <input
      class="w-1/2"
      v-else
      type="file"
      accept="image/*"
      @change="onchange"
    />
  </div>
</template>

<script>
import iconLoading from "./iconLoading.vue";

export default {
  components: { iconLoading },
  data() {
    return {
      name: "",
      if_loading: false,
      date: this.$store.getters.Date,

      url: null,
    };
  },
  props: {
    image_type: {
      type: String,
    },
    image_url: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  methods: {
    async onchange(e) {
      this.if_loading = true;
      const file = e.target.files[0];
      this.name = `${this.date}_${this.image_type}_${file.name}`;
      let formData = new FormData();
      formData.set("file", file, this.name);
      const result = await this.$axios.$post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (result == "") {
        this.url = "https://homedelicious.ml/img/uploadImgs/" + this.name;
        this.$emit("newImage", this.url, this.id);
        this.if_loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>