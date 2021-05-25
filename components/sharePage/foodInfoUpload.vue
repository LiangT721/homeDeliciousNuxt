<template>
  <div class="upload-area grid gap-y-4 text-lg font-fonts">
    <div class="images bg-white">
      <div class="image-preview">
        <div v-for="image in pre_img_list" :key="image.id" class="relative">
          <image-preview class="h-half"
            :image_url="image.url"
            :image_type="imageType"
            @delete_res="delete_res(image.id)"
          />
        </div>
      </div>
      <div class="upload py-10 text-center">
        <img class="w-1/3 mx-auto" src="../../assets/img/food.png" alt="" />
        <p>Please upload you food photo</p>
        <image-upload @newImage="newImage" />
      </div>
    </div>
    <div class="food-name">
      <input
        type="text"
        name="food-name"
        class="w-full px-5"
        placeholder="Food name"
        v-model="food_name"
      />
    </div>
    <div class="food-description">
      <textarea
        name="food-description"
        cols="40"
        rows="5"
        class="w-full px-5"
        placeholder="Tell us about your food..."
        v-model="food_description"
      ></textarea>
    </div>
    <div class="cooking-way info-line-between">
      <span>
        <span v-if="this.$store.getters.lan">烹饪方式：</span>
        <span v-else>Cooking method： </span>
      </span>
      <span>
        <span class="required">
          <span v-if="this.$store.getters.lan">必填</span>
          <span v-else>Required</span>
        </span>
        <select
          v-if="this.$store.getters.lan"
          class="select"
          name="cook"
          id="cook"
          @change="Cook"
        >
          <option class="option" value="fry">炒</option>
          <option class="option" value="deep fry">炸</option>
          <option class="option" value="stew">炖</option>
          <option class="option" value="steam">蒸</option>
          <option class="option" value="bake">烤</option>
          <option class="option" value="salad">拌</option>
        </select>
        <select v-else class="select" name="cook" id="cook" @change="Cook">
          <option class="option" value="fry">fry</option>
          <option class="option" value="deep fry">deep fry</option>
          <option class="option" value="stew">stew</option>
          <option class="option" value="steam">steam</option>
          <option class="option" value="bake">bake</option>
          <option class="option" value="salad">salad</option>
        </select>
      </span>
    </div>
    <div class="diffculty info-line-between">
      <div>
        <span v-if="this.$store.getters.lan">难度：</span
        ><span v-else>difficulty：</span>
      </div>
      <div>
        <span class="required"
          ><span v-if="this.$store.getters.lan">必填</span
          ><span v-else>Required</span></span
        >
        <select
          v-if="this.$store.getters.lan"
          id="difficult"
          name="difficult"
          class="select"
          @change="Difficulty"
        >
          <option class="option" value="easy">简单</option>
          <option class="option" value="medium">中等</option>
          <option class="option" value="difficult">困难</option>
          <option class="option" value="super">大师</option>
        </select>
        <select
          v-else
          id="difficult"
          name="difficult"
          class="select"
          @change="Difficulty"
        >
          <option class="option" value="easy">easy</option>
          <option class="option" value="medium">medium</option>
          <option class="option" value="difficult">difficult</option>
          <option class="option" value="super">super</option>
        </select>
      </div>
    </div>
    <div class="cook-time info-line-between">
      <div>
        <span v-if="this.$store.getters.lan">烹饪时间：</span
        ><span v-else>Cook Time:</span>
      </div>
      <div class="flex items-center">
        <div class="required">
          <span v-if="this.$store.getters.lan">必填</span
          ><span v-else>Required</span>
        </div>
        <input
          class="select w-16 mr-2"
          type="text"
          v-model="time"
          placeholder="30"
        />
        <span v-if="this.$store.getters.lan">分钟</span><span v-else>Min</span>
      </div>
    </div>
    <div class="location info-line-between">
      <div>
        <span v-if="this.$store.getters.lan">地域：</span
        ><span v-else>Location:</span>
      </div>
      <input
        class="select w-24 mr-2"
        type="text"
        v-model="location"
        placeholder="Calgary"
      />
    </div>
    <div class="category info-line-between">
      <div>
        <span v-if="this.$store.getters.lan">类别：</span
        ><span v-else>Category:</span>
      </div>
      <input
        class="select w-24 mr-2"
        type="text"
        v-model="category"
        placeholder="pasta"
      />
    </div>
    <div class="tag info-line-between">
      <div>
        <span v-if="this.$store.getters.lan">标签：</span
        ><span v-else>Tag:</span>
      </div>
      <input
        class="select w-24 mr-2"
        type="text"
        v-model="tag"
        placeholder="for kids"
      />
    </div>
    <div class="language info-line-between">
      <div>
        <span v-if="this.$store.getters.lan">语言：</span
        ><span v-else>Language:</span>
      </div>
      <div>
        <span class="required"
          ><span v-if="this.$store.getters.lan">必填</span
          ><span v-else>Required</span></span
        >
        <select id="language" name="语言" class="select" @change="Language">
          <option class="option" value="English">English</option>
          <option class="option" value="Chinese">中文</option>
        </select>
      </div>
    </div>
    <div class="previewbtn flex justify-center">
      <button class="button" @click="preview">Preview</button>
    </div>
  </div>
</template>

<script>
import ImagePreview from "../public/imagePreview";
import ImageUpload from "../public/imageUpload.vue";
export default {
  components: { ImageUpload, ImagePreview },
  data() {
    return {
      images: "",
      food_preview: {},
      pre_img_list: [],
      imageType: "image",
      imageUrl: "",
      food_name: "",
      food_description: "",
      time: "",
      location: "",
      category: "",
      tag: "",
      cook_way: "fry",
      difficulty: "easy",
      lang: "English",
    };
  },
  computed: {
    user() {
        return this.$store.state.user
    }
  },
  methods: {
    newImage(data) {
      this.imageUrl = data;
      const index = this.pre_img_list.length;
      const image = {
        id: index,
        url: this.imageUrl,
      };
      this.pre_img_list.push(image);
    },
    delete_res(index) {
      for (let val in this.pre_img_list) {
        if (this.pre_img_list[val].id == index) {
          this.pre_img_list.splice(val, 1);
        }
      }
    },
    Cook() {
      this.cook_way = document.getElementById("cook").value;
      console.log(this.cook_way);
    },
    Difficulty() {
      this.difficulty = document.getElementById("difficult").value;
      console.log(this.difficulty);
    },
    Language() {
      this.lang = document.getElementById("language").value;
      console.log(this.lang);
    },
    preview() {
      for (let img of this.pre_img_list) {
        this.images += `${img.url}<###^^&&###>`;
      }
      const data = {
        username: this.user.username,
        food_name: this.food_name,
        food_description: this.food_description,
        cooking_time: this.time,
        food_location: this.location,
        food_category: this.category,
        tag: this.tag,
        cooking_way: this.cook_way,
        difficulty: this.difficulty,
        image: this.images,
        icon:this.user.icon,
        collection: false,
        lang: this.lang
      };
      // console.log(data)
      this.$store.commit('sharePageContentToggle', 'infoPreview')
      this.$store.commit('foodInfo_temp_Edit', data)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>