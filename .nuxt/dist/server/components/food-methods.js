exports.ids = [5];
exports.modules = {

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodMethods.vue?vue&type=template&id=716fd2f1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-6 py-5 content-start gap-y-3 font-fonts"},[_vm._ssrNode("<p class=\"food-name text-3xl font-bold mb-5\" data-v-716fd2f1>Methods:</p> "+(_vm._ssrList((_vm.processes),function(process){return ("<div class=\"mb-5 bg-primary py-5 px-6 shadow-md rounded-xl md:px-8 md:py-3 md:bg-opacity-0 md:shadow-none\" data-v-716fd2f1><p class=\"uppercase text-center text-xl mb-8 font-semibold relative md:mb-3\" data-v-716fd2f1>"+_vm._ssrEscape("\n      Step:"+_vm._s(process.id + 1)+"\n    ")+"</p> <div class=\"md:grid md:grid-cols-3 md:items-start md:w-full md:mx-auto md:h-40  md:rounded-md overflow-hidden md:shadow-xl md:bg-primary\" data-v-716fd2f1>"+((process.img)?("<img"+(_vm._ssrAttr("src",process.img))+" alt"+(_vm._ssrClass("h-48 overflow-hidden  w-full object-cover md:h-full md:col-span-1",process.order))+" data-v-716fd2f1>"):"<!---->")+" <p class=\"font-fonts font-semibold w-full text-justify mx-auto h-auto mt-5 p-3 md:h-full md:col-span-2 md:order-1 md:mt-0 md:p-5\" data-v-716fd2f1>"+_vm._ssrEscape("\n        "+_vm._s(process.text)+"\n      ")+"</p></div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/food.vue/foodMethods.vue?vue&type=template&id=716fd2f1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodMethods.vue?vue&type=script&lang=js&
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
/* harmony default export */ var foodMethodsvue_type_script_lang_js_ = ({
  computed: {
    processes() {
      return this.$store.getters.method_preview;
    }

  },
  watch: {
    processes(newValue) {
      newValue.map((value, index) => {
        value.order = `md:order-${value.id % 2 + 1}`;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/food.vue/foodMethods.vue?vue&type=script&lang=js&
 /* harmony default export */ var food_vue_foodMethodsvue_type_script_lang_js_ = (foodMethodsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/food.vue/foodMethods.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  food_vue_foodMethodsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "716fd2f1",
  "3ae7eca0"
  
)

/* harmony default export */ var foodMethods = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=food-methods.js.map