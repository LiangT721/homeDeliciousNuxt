<template>
  <div class="font-fonts">
    <div class="ingredients px-6 py-5 content-start gap-y-3 font-fonts md:w-3/4 mx-auto md:px-0">
      <div class="ingredient-preview">
        <food-ingredients-edit />
      </div>
      <div
        class="ingredient-preview-input grid grid-cols-9 my-3 text-md gap-x-2 ml-2"
      >
        <div class="col-span-1"></div>
        <input
          type="text"
          class="col-span-4"
          placeholder="Butter"
          v-model="material"
        />
        <input
          type="text"
          class="col-span-4"
          placeholder="150g"
          v-model="amount"
        />
        <div class="btns col-span-9 flex justify-center my-10">
          <button class="button" @click="add_material">
            <span v-if="this.$store.getters.lan">添加原料</span
            ><span v-else>Add ingredients</span>
          </button>
        </div>
      </div>
    </div>
    <div class="processes w-5/6 mx-auto px-0 py-5 content-start gap-y-3 md:w-3/4">
      <food-method-edit />
      <textarea
        class="w-full"
        name=""
        id=""
        cols="30"
        rows="8"
        :placeholder="textarea_placeholder"
        v-model="method_text"
      ></textarea>
      <div class="image text-center m-5">
        <p>
          <span v-if="this.$store.getters.lan">添加图片</span
          ><span v-else>Add Photo</span>
        </p>
        <image-upload @newImage="newImage" />
        <image-preview
          v-if="image_url"
          :image_url="image_url"
          image_type="image"
          class="h-40 md:w-1/2 mx-auto md:h-56"

        />
      </div>
      <div class="btns flex justify-center">
        <button class="button" @click="addMethod">
          <span v-if="this.$store.getters.lan">添加步骤</span
          ><span v-else>Add Methods</span>
        </button>
      </div>
    </div>
    <div class="submit-btns flex justify-center" @click="updateMethod">
      <button class="button">
        <span v-if="this.$store.getters.lan">确认上传</span
        ><span v-else>comfirm Upload</span>
      </button>
    </div>
  </div>
</template>

<script>
import ImagePreview from '../public/imagePreview.vue';
import ImageUpload from "../public/imageUpload.vue";
import foodIngredientsEdit from "../sharePage/foodIngredientsEdit.vue";
import FoodMethodEdit from "../sharePage/foodMethodEdit.vue";
import { mapState } from 'vuex';
import cookies from 'vue-cookies';
export default {
  components: { foodIngredientsEdit, FoodMethodEdit, ImageUpload, ImagePreview },
  data() {
    return {
      material: "",
      amount: "",
      ingredient_preview: "",
      method_text: "",
      image_url:'',
      methods_preview:''
    };
  },
  props: {
      foodId: {
          type: String,
      },
  },
  methods: {
    add_material() {
      this.ingredient_preview = JSON.parse(
        JSON.stringify(this.$store.state.foodIngredients_temp)
      );
      this.ingredient_preview += `${this.material}<###**%%###>${this.amount}<###**^^###>`;
      this.material = this.amount = "";
      this.$store.commit("foodIngredients_temp_Edit", this.ingredient_preview);
    },
    newImage(data){
      console.log(data);
      this.image_url=data;
      console.log(this.image_url)
    },
    addMethod(){
      this.methods_preview = JSON.parse(JSON.stringify(this.$store.state.foodMethods_temp));
      this.methods_preview += `${this.method_text}<###**%%###>${this.image_url}<###**^^###>`;
      this.method_text = this.image_url = '';
      this.$store.commit('foodMethods_temp_Edit', this.methods_preview);
      
    },
    async updateMethod(){
      console.log(this.ingredients);
      console.log(this.methods);
      console.log(this.foodId);
      console.log(cookies.get('token'));
      if (this.ingredients == null && this.methods == null) {
        if (this.$store.getters.lan) {
          alert("你没有输入任何原料或步骤");
        } else {
          alert("You haven't enter any ingredient and methods..");
        }
      } else {
        await this.$axios({
          url:'/api/methods',
          method:'patch',
          data: {
            token: cookies.get('token'),
            food_id:this.foodId,
            ingredient:this.ingredients,
            process:this.methods
          }
        }).then((res)=>{
          console.log(res.data);
          this.$emit('finish',this.foodId)
        }).catch((err)=> alert(err));
      }
    }
  },
  computed: {
    textarea_placeholder() {
      if (this.$store.state.foodIngredients_temp) {
        return "请输入你的步骤...";
      } else {
        return "Please input your processes...";
      }
    },
    ...mapState({
      ingredients: (state) => state.foodIngredients_temp,
      methods: (state) => state.foodMethods_temp,
    })
  },
};
</script>

<style lang="scss" scoped>
</style>