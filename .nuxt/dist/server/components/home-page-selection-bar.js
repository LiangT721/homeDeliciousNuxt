exports.ids = [9];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fryer.9e9d3ef.png";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/frying-pan.fb1eea1.png";

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/oven.dd28fbb.png";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pot.a98f008.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/salad.20a4d04.png";

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steamer.111d57f.png";

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homePage/selectionBar.vue?vue&type=template&id=987728d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-screen p-5 md:w-full md:h-24 md:overflow-hidden "},[_vm._ssrNode("<ul class=\"overflow-x-scroll overflow-y-hidden whitespace-nowrap  md:w-full md:flex md:pb-3 md:justify-evenly\" data-v-987728d6><li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcFry }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt data-v-987728d6></li> <li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcDeepFry }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-987728d6></li> <li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcBake }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(37)))+" alt data-v-987728d6></li> <li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcStew }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt data-v-987728d6></li> <li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcSalad }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt data-v-987728d6></li> <li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcSteam }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt data-v-987728d6></li></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/homePage/selectionBar.vue?vue&type=template&id=987728d6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homePage/selectionBar.vue?vue&type=script&lang=js&
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
/* harmony default export */ var selectionBarvue_type_script_lang_js_ = ({
  data() {
    return {
      bgcFry: "#FFCAD4",
      bgcStew: "#F3F6F4",
      bgcBake: "#F3F6F4",
      bgcDeepFry: "#F3F6F4",
      bgcSalad: "#F3F6F4",
      bgcSteam: "#F3F6F4"
    };
  },

  methods: {
    select_category(data) {
      switch (data) {
        case "fry":
          this.bgcFry = "#FFCAD4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;

        case "deep fry":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#FFCAD4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;

        case "stew":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#FFCAD4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;

        case "bake":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#FFCAD4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;

        case "salad":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#FFCAD4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;

        case "steam":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#FFCAD4";
          this.$store.commit("select_homepage_category", data);
          break;

        default:
          break;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/homePage/selectionBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var homePage_selectionBarvue_type_script_lang_js_ = (selectionBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/homePage/selectionBar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homePage_selectionBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "987728d6",
  "7612ab66"
  
)

/* harmony default export */ var selectionBar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-page-selection-bar.js.map