exports.ids = [3,7,14,16];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/collection.vue?vue&type=template&id=f4e0cc10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.if_collection)?("<div class=\"relative\" data-v-f4e0cc10><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-4 w-4 text-red-600 absolute right-0 cursor-pointer\" data-v-f4e0cc10><path fill-rule=\"evenodd\" d=\"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\" clip-rule=\"evenodd\" data-v-f4e0cc10></path></svg></div>"):("<div class=\"relative\" data-v-f4e0cc10><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-4 w-4 absolute right-0 cursor-pointer\" data-v-f4e0cc10><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\" data-v-f4e0cc10></path></svg></div>")))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/collection.vue?vue&type=template&id=f4e0cc10&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/collection.vue?vue&type=script&lang=js&
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


/* harmony default export */ var collectionvue_type_script_lang_js_ = ({
  props: {
    food: {
      type: Object
    }
  },
  computed: { ...Object(external_vuex_["mapState"])({
      collectionList: state => state.collectionList
    }),

    collectionIdList() {
      return this.$store.getters.collection_id_list;
    },

    if_collection() {
      return this.collectionIdList.includes(this.food.food_id);
    }

  },
  methods: {
    confirmLogin() {
      let res = confirm("Please login your account.");

      if (res == true) {
        this.$router.push("/login");
      }
    },

    async removeCollection() {
      if (external_vue_cookies_default.a.get("token")) {
        await this.$axios({
          url: "/api/collection",
          method: "delete",
          data: {
            token: external_vue_cookies_default.a.get("token"),
            food_id: this.food.food_id
          }
        }).then(res => {
          console.log(res.data);
          this.$store.commit("removeCollectionList", this.food.food_id);
        }).catch(err => {
          alert(err);
        });
      } else {
        this.confirmLogin();
      }
    },

    async addCollection() {
      if (external_vue_cookies_default.a.get("token")) {
        await this.$axios({
          url: "/api/collection",
          method: "post",
          data: {
            token: external_vue_cookies_default.a.get("token"),
            food_id: this.food.food_id
          }
        }).then(res => {
          console.log(res.data);
          this.$store.commit("addCollectionList", this.food);
        }).catch(err => {
          alert(err);
        });
      } else {
        this.confirmLogin();
      }
    }

  }
});
// CONCATENATED MODULE: ./components/public/collection.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_collectionvue_type_script_lang_js_ = (collectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/collection.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_collectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f4e0cc10",
  "9fd1eb6e"
  
)

/* harmony default export */ var collection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/grade.vue?vue&type=template&id=6f9d4a9d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul"+(_vm._ssrClass("list flex",_vm.icon_size))+" data-v-6f9d4a9d><li data-v-6f9d4a9d>"+((_vm.grade > 0)?("<span class=\"text-yellow-400\" data-v-6f9d4a9d>★</span>"):("<span data-v-6f9d4a9d>☆</span>"))+"</li> <li data-v-6f9d4a9d>"+((_vm.grade >=1)?("<span class=\"text-yellow-400\" data-v-6f9d4a9d>★</span>"):("<span data-v-6f9d4a9d>☆</span>"))+"</li> <li data-v-6f9d4a9d>"+((_vm.grade >=2)?("<span class=\"text-yellow-400\" data-v-6f9d4a9d>★</span>"):("<span data-v-6f9d4a9d>☆</span>"))+"</li> <li data-v-6f9d4a9d>"+((_vm.grade >=3)?("<span class=\"text-yellow-400\" data-v-6f9d4a9d>★</span>"):("<span data-v-6f9d4a9d>☆</span>"))+"</li> <li data-v-6f9d4a9d>"+((_vm.grade >=4)?("<span class=\"text-yellow-400\" data-v-6f9d4a9d>★</span>"):("<span data-v-6f9d4a9d>☆</span>"))+"</li></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/grade.vue?vue&type=template&id=6f9d4a9d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/grade.vue?vue&type=script&lang=js&
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
/* harmony default export */ var gradevue_type_script_lang_js_ = ({
  props: {
    grade: {
      type: String
    },
    icon_size: {
      type: String
    }
  },

  mounted() {}

});
// CONCATENATED MODULE: ./components/public/grade.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_gradevue_type_script_lang_js_ = (gradevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/grade.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_gradevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f9d4a9d",
  "726c86fc"
  
)

/* harmony default export */ var grade = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ 44:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fryer.png": 35,
	"./frying-pan.png": 36,
	"./oven.png": 37,
	"./pot.png": 38,
	"./salad.png": 39,
	"./steamer.png": 40
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
webpackContext.id = 46;

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodInfoText.vue?vue&type=template&id=6ca8e1fb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid grid-cols-6 px-6 py-5 content-start gap-y-3 font-fonts relative"},[(_vm.checkUser)?_vm._ssrNode("<div class=\"edit-option absolute right-5 top-16\" data-v-6ca8e1fb>","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-6 w-6 text-shadow\" style=\"text-shadow: 5px 5px 5px black\" data-v-6ca8e1fb><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z\" clip-rule=\"evenodd\" data-v-6ca8e1fb></path></svg> "),_c('transition',{attrs:{"name":"fade"}},[(_vm.option_appear)?_c('div',{staticClass:"option uppercase bg-primary absolute right-0 rounded-md shadow-lg text-center"},[_c('p',{staticClass:"hover:bg-white p-2",on:{"click":function($event){return _vm.toEditPage()}}},[(this.$store.getters.lan)?_c('span',[_vm._v("修改")]):_c('span',[_vm._v("edit")])]),_vm._v(" "),_c('p',{staticClass:"hover:bg-white p-2",on:{"click":_vm.deleteFood}},[(this.$store.getters.lan)?_c('span',[_vm._v("删除")]):_c('span',[_vm._v("delete")])])]):_vm._e()])],2):_vm._e(),_vm._ssrNode(" "),_c('grade',{staticClass:"col-span-4",attrs:{"grade":_vm.food.grade,"icon_size":"text-2xl"}}),_vm._ssrNode(" "),_c('collection',{staticClass:"col-span-2",attrs:{"food":_vm.food}}),_vm._ssrNode(" <p class=\"food-name col-span-5 text-3xl font-bold\" data-v-6ca8e1fb>"+_vm._ssrEscape(_vm._s(_vm.food.food_name))+"</p> <div class=\"tags col-span-4 flex justify-between text-lg text-fontColordark\" data-v-6ca8e1fb><p data-v-6ca8e1fb>"+_vm._ssrEscape(_vm._s(_vm.food.food_location))+"</p> <p data-v-6ca8e1fb>"+_vm._ssrEscape(_vm._s(_vm.food.food_category))+"</p> <p data-v-6ca8e1fb>"+_vm._ssrEscape(_vm._s(_vm.food.tag))+"</p></div> <div class=\"users col-span-6 flex text-lg font-semibold\" data-v-6ca8e1fb>"+_vm._ssrEscape("\n    by "+_vm._s(_vm.food.username)+"\n    ")+"<img"+(_vm._ssrAttr("src",_vm.food.icon))+" alt class=\"h-6 ml-3 rounded-round\" data-v-6ca8e1fb></div> <div class=\"description col-span-6 text-lg font-thin text-justify md:h-60 md:overflow-auto\" data-v-6ca8e1fb>"+_vm._ssrEscape("\n    "+_vm._s(_vm.food.food_description)+"\n  ")+"</div> "),_vm._ssrNode("<div class=\"cooking-icons col-span-6 flex justify-between md:justify-around font-semibold\" data-v-6ca8e1fb>","</div>",[_c('cookway-icon',{staticClass:"cooking-icon",attrs:{"cooking_way":_vm.food.cooking_way}}),_vm._ssrNode(" <p class=\"cooking-icon text-center grid content-center\" data-v-6ca8e1fb>"+_vm._ssrEscape("\n      "+_vm._s(_vm.food.cooking_time)+"MIN\n    ")+"</p> <div class=\"cooking-icon text-center grid content-center\" data-v-6ca8e1fb>"+_vm._ssrEscape("\n      "+_vm._s(_vm.food.difficulty)+"\n    ")+"</div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/food.vue/foodInfoText.vue?vue&type=template&id=6ca8e1fb&scoped=true&

// EXTERNAL MODULE: ./components/public/collection.vue + 4 modules
var collection = __webpack_require__(27);

// EXTERNAL MODULE: ./components/public/grade.vue + 4 modules
var grade = __webpack_require__(28);

// EXTERNAL MODULE: ./components/food.vue/cookwayIcon.vue + 4 modules
var cookwayIcon = __webpack_require__(49);

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodInfoText.vue?vue&type=script&lang=js&
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




/* harmony default export */ var foodInfoTextvue_type_script_lang_js_ = ({
  components: {
    grade: grade["default"],
    Collection: collection["default"],
    CookwayIcon: cookwayIcon["default"]
  },

  data() {
    return {
      option_appear: false
    };
  },

  computed: {
    food() {
      return this.$store.getters.foodInfo_preview;
    }

  },
  props: {
    checkUser: {
      type: Boolean
    }
  },
  methods: {
    toEditPage() {
      this.$router.push(`/edit/${this.food.food_id}`);
    },

    async deleteFood() {
      if (confirm("Do you confirm to delete this food?")) {
        await this.$axios({
          url: "/api/foods",
          method: "delete",
          data: {
            token: external_vue_cookies_default.a.get("token"),
            food_id: this.food.food_id
          }
        }).then(res => {
          alert('Delete successfull!');
          this.$router.push('/');
        }).catch(err => {
          alert('Delete failed');
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/food.vue/foodInfoText.vue?vue&type=script&lang=js&
 /* harmony default export */ var food_vue_foodInfoTextvue_type_script_lang_js_ = (foodInfoTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/food.vue/foodInfoText.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  food_vue_foodInfoTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6ca8e1fb",
  "52a21612"
  
)

/* harmony default export */ var foodInfoText = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/cookwayIcon.vue?vue&type=template&id=1363d55c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(46)("./" + _vm.cooking_icon + ".png")))+" alt data-v-1363d55c>")])}
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
  "7167ac32"
  
)

/* harmony default export */ var cookwayIcon = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=food-info-text.js.map