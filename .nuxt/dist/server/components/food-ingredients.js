exports.ids = [4];
exports.modules = {

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodIngredients.vue?vue&type=template&id=41d89c44&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-6 py-5 content-start gap-y-3 font-fonts"},[_vm._ssrNode("<p class=\"food-name text-3xl font-bold mb-5\" data-v-41d89c44>ingredients:</p> "+(_vm._ssrList((_vm.ingredients),function(ingredient){return ("<div class=\"grid grid-cols-5 my-3 text-md gap-x-2 ml-2\" data-v-41d89c44><li class=\"col-span-3\" data-v-41d89c44>"+_vm._ssrEscape(_vm._s(ingredient.ingredient))+"</li> <p class=\"col-span-2 \" data-v-41d89c44>"+_vm._ssrEscape(_vm._s(ingredient.amount))+"</p> <hr class=\"mt-3 col-span-5\" data-v-41d89c44></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/food.vue/foodIngredients.vue?vue&type=template&id=41d89c44&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodIngredients.vue?vue&type=script&lang=js&
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
/* harmony default export */ var foodIngredientsvue_type_script_lang_js_ = ({
  computed: {
    ingredients() {
      return this.$store.getters.ingredient_preview;
    }

  }
});
// CONCATENATED MODULE: ./components/food.vue/foodIngredients.vue?vue&type=script&lang=js&
 /* harmony default export */ var food_vue_foodIngredientsvue_type_script_lang_js_ = (foodIngredientsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/food.vue/foodIngredients.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  food_vue_foodIngredientsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "41d89c44",
  "3d42c6b0"
  
)

/* harmony default export */ var foodIngredients = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=food-ingredients.js.map