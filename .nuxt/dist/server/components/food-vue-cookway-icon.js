exports.ids = [7];
exports.modules = {

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fryer.9e9d3ef.png";

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/frying-pan.fb1eea1.png";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/oven.dd28fbb.png";

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pot.a98f008.png";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/salad.20a4d04.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steamer.111d57f.png";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fryer.png": 34,
	"./frying-pan.png": 35,
	"./oven.png": 36,
	"./pot.png": 37,
	"./salad.png": 38,
	"./steamer.png": 39
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 45;

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/cookwayIcon.vue?vue&type=template&id=1363d55c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(45)("./" + _vm.cooking_icon + ".png")))+" alt data-v-1363d55c>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/food.vue/cookwayIcon.vue?vue&type=template&id=1363d55c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/cookwayIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var cookwayIconvue_type_script_lang_js_ = ({
  data() {
    return {
      cooking_icon: "frying-pan"
    };
  },

  props: {
    cooking_way: {
      type: String
    }
  },
  watch: {
    cooking_way(newValue) {
      switch (newValue) {
        case "fry":
          this.cooking_icon = "frying-pan";
          break;

        case "stew":
          this.cooking_icon = "pot";
          break;

        case "deep fry":
          this.cooking_icon = "fryer";
          break;

        case "bake":
          this.cooking_icon = "oven";
          break;

        case "salad":
          this.cooking_icon = "salad";
          break;

        case "steam":
          this.cooking_icon = "steamer";
          break;

        default:
          break;
      }
    }

  },

  mounted() {}

});
// CONCATENATED MODULE: ./components/food.vue/cookwayIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var food_vue_cookwayIconvue_type_script_lang_js_ = (cookwayIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/food.vue/cookwayIcon.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  food_vue_cookwayIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1363d55c",
  "2f52de28"
  
)

/* harmony default export */ var cookwayIcon = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=food-vue-cookway-icon.js.map