exports.ids = [32];
exports.modules = {

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/foodIngredientsEdit.vue?vue&type=template&id=674134fe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-5 content-start gap-y-3 font-fonts"},[_vm._ssrNode("<p class=\"food-name text-3xl font-bold mb-5\" data-v-674134fe>ingredients:</p> "+(_vm._ssrList((_vm.ingredients),function(ingredient){return ("<div class=\"grid grid-cols-9 my-3 text-md gap-x-2 ml-2\" data-v-674134fe><div class=\"col-span-1 flex justify-end\" data-v-674134fe><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-5 w-5\" data-v-674134fe><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\" data-v-674134fe></path></svg></div> <input type=\"text\""+(_vm._ssrAttr("value",(ingredient.ingredient)))+" class=\"col-span-4\" data-v-674134fe> <input type=\"text\""+(_vm._ssrAttr("value",(ingredient.amount)))+" class=\"col-span-4\" data-v-674134fe> <hr class=\"mt-3 col-span-9\" data-v-674134fe></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sharePage/foodIngredientsEdit.vue?vue&type=template&id=674134fe&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/foodIngredientsEdit.vue?vue&type=script&lang=js&
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
/* harmony default export */ var foodIngredientsEditvue_type_script_lang_js_ = ({
  computed: {
    ingredients() {
      return this.$store.getters.ingredient_preview;
    }

  },
  methods: {
    ingredientUpdate(index) {
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.ingredients));
      console.log(data);

      for (let val of data) {
        if (val.id == index) {
          val.ingredient = event.target.value;
        }

        newData += `${val.ingredient}<###**%%###>${val.amount}<###**^^###>`;
      }

      console.log(newData);
      this.$store.commit("foodIngredients_temp_Edit", newData);
    },

    ingredientDelete(index) {
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.ingredients));
      console.log(data);

      for (let val of data) {
        if (val.id != index) {
          newData += `${val.ingredient}<###**%%###>${val.amount}<###**^^###>`;
        }
      }

      console.log(newData);
      this.$store.commit("foodIngredients_temp_Edit", newData);
    }

  }
});
// CONCATENATED MODULE: ./components/sharePage/foodIngredientsEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var sharePage_foodIngredientsEditvue_type_script_lang_js_ = (foodIngredientsEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sharePage/foodIngredientsEdit.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sharePage_foodIngredientsEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "674134fe",
  "4a554d3e"
  
)

/* harmony default export */ var foodIngredientsEdit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=share-page-food-ingredients-edit.js.map