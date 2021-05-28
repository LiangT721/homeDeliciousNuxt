exports.ids = [6];
exports.modules = {

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodPhoto.vue?vue&type=template&id=73f49ac6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_vm._ssrNode("<div class=\"background-photo h-full relative\" data-v-73f49ac6><img"+(_vm._ssrAttr("src",_vm.bg_photo))+" alt srcset class=\"h-full w-full object-cover\" data-v-73f49ac6> <div class=\"photo-list h-1/6 justify-center flex min-w-full absolute bottom-0 overflow-x-scroll overflow-y-hidden whitespace-nowrap\" data-v-73f49ac6>"+(_vm._ssrList((_vm.photoList),function(photo){return ("<img"+(_vm._ssrAttr("src",photo.url))+" alt class=\"h-full mr-2 z-10 transition\" data-v-73f49ac6>")}))+" <div class=\"w-full h-full absolute bottom-0 z-0 bg-gray-900 opacity-80\" data-v-73f49ac6></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/food.vue/foodPhoto.vue?vue&type=template&id=73f49ac6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodPhoto.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var foodPhotovue_type_script_lang_js_ = ({
  data() {
    return {
      bg_photo: "",
      photoList: {}
    };
  },

  watch: {
    food(newValue) {
      console.log(newValue);
      this.photoList = newValue.image;
      console.log(this.photoList);
      this.bg_photo = this.photoList[0].url;
    }

  },
  methods: {
    select(index) {
      for (let photo of this.photoList) {
        if (photo.id == index) {
          this.bg_photo = photo.url;
        }
      }
    }

  },
  computed: {
    food() {
      return this.$store.getters.foodInfo_preview;
    }

  },

  mounted() {
    console.log(this.food.image);
    console.log(this.food.image.length);

    if (this.food.image.length == 0) {
      this.photoList = [{
        url: "https://homedelicious.ml/img/uploadImgs/2021526_undefined_default.jpg"
      }];
    } else {
      this.photoList = this.food.image;
    }

    console.log(this.photoList);
    this.bg_photo = this.photoList[0].url;
  }

});
// CONCATENATED MODULE: ./components/food.vue/foodPhoto.vue?vue&type=script&lang=js&
 /* harmony default export */ var food_vue_foodPhotovue_type_script_lang_js_ = (foodPhotovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/food.vue/foodPhoto.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  food_vue_foodPhotovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "73f49ac6",
  "58729d34"
  
)

/* harmony default export */ var foodPhoto = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=food-photo.js.map