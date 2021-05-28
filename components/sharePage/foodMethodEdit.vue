<template>
  <div class="py-5 content-start gap-y-3 font-fonts">
    <p class="food-name text-3xl font-bold mb-5">Methods:</p>
    <div class="mb-5 bg-white p-5 shadow-md rounded-xl md:px-8 md:py-3 " v-for="process in processes" :key="process.id">
      <p class="uppercase text-center text-xl mb-8 font-semibold relative md:mb-3">
        Step : {{ process.id + 1 }}
        <span class="absolute right-0 cursor-pointer text-shadow"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="delete_step(process.id)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            /></svg
        ></span>
      </p>
      <div
        class="md:grid md:grid-cols-3 md:items-start md:w-full md:mx-auto md:h-40 md:border md:border-fontColordark rounded-md overflow-hidden"
      >
        <textarea
          class="font-thin w-full text-justify mx-auto h-40 md:w-full md:h-full md:col-span-2 border border-black md:border-none"
          :class="process.order"
          name="method-text"
          id=""
          rows="5"
          v-model="process.text"
          @input="processUpdate(process.id)"
        ></textarea>
        <image-preview
          v-if="process.img"
          class="h-52 overflow-hidden md:order-1 md:h-full md:col-span-1"
          image_type="image"
          :image_url="process.img"
          @delete_res="delete_res(process.id)"
        />
        <div v-else class="md:py-10 bg-barBgc h-full border border-primary">
          <p class="text-center">
            <span v-if="lan">添加图片</span>
            <span v-else>Add photo</span>
          </p>
          <image-upload :id="process.id" @newImage="newImage" />
        </div>
      </div>
      <hr class="col-span-3 md:mb-10 md:w-5/6 md:mx-auto" />
    </div>
  </div>
</template>

<script>
import imagePreview from "../public/imagePreview.vue";
import ImageUpload from "../public/imageUpload.vue";
export default {
  components: { imagePreview, ImageUpload },
  data() {
    return {
      text: "",
    };
  },
  watch: {
    processes(newValue) {
      console.log(newValue)
      newValue.map((value, index) => {
        value.order = `md:order-${(value.id % 2) + 1}`;
        console.log(value);
      });
    },
  },
  computed: {
    processes() {
      return this.$store.getters.method_preview;
    },
    lan() {
      return this.$store.getters.lan;
    },
  },
  methods: {
    processUpdate(index) {
      console.log(index)
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.processes));
      console.log(data);
      for (let val of data) {
        if (val.id == index) {
          val.text = event.target.value;
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        }else {
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        }
      }
      console.log(newData);
      this.$store.commit("foodMethods_temp_Edit", newData);
    },
    newImage(url, index) {
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.processes));
      console.log(data);
      for (let val of data) {
        if (val.id == index) {
          val.img = url;
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        }
      }
      console.log(newData);
      this.$store.commit("foodMethods_temp_Edit", newData);
    },
    delete_res(index) {
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.processes));
      console.log(data);
      for (let val of data) {
        if (val.id == index) {
          val.img = "";
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        }
      }
      console.log(newData);
      this.$store.commit("foodMethods_temp_Edit", newData);
    },
    delete_step(index) {
      console.log(index);
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.processes));
      console.log(data);
      for (let val of data) {
        if (val.id != index) {
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        }
      }
      console.log(newData);
      this.$store.commit("foodMethods_temp_Edit", newData);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>