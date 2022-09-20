exports.ids = [39,1,2,3,6,7,14,16,17,18,19,20,22,23,32,33];
exports.modules = Array(23).concat([
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/imageUpload.vue?vue&type=template&id=463eb198&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid justify-items-center"},[(_vm.if_loading)?_c('icon-loading'):_c('input',{staticClass:"w-1/2",attrs:{"type":"file","accept":"image/*"},on:{"change":_vm.onchange}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/imageUpload.vue?vue&type=template&id=463eb198&scoped=true&

// EXTERNAL MODULE: ./components/public/iconLoading.vue + 4 modules
var iconLoading = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/imageUpload.vue?vue&type=script&lang=js&
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

/* harmony default export */ var imageUploadvue_type_script_lang_js_ = ({
  components: {
    iconLoading: iconLoading["default"]
  },

  data() {
    return {
      name: "",
      if_loading: false,
      date: this.$store.getters.Date,
      url: null
    };
  },

  props: {
    image_type: {
      type: String
    },
    image_url: {
      type: String
    },
    id: {
      type: Number
    }
  },
  methods: {
    async onchange(e) {
      this.if_loading = true;
      const file = e.target.files[0];
      this.name = `${this.date}_${this.image_type}_${file.name}`;
      let formData = new FormData();
      formData.set("file", file, this.name);
      const result = await this.$axios.$post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data"
        }
      });

      if (result == "") {
        this.url = "https://homedelicious.ml/img/uploadImgs/" + this.name;
        this.$emit("newImage", this.url, this.id);
        this.if_loading = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/public/imageUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_imageUploadvue_type_script_lang_js_ = (imageUploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/imageUpload.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_imageUploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "463eb198",
  "c775654a"
  
)

/* harmony default export */ var imageUpload = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 26 */
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
  "5fc22062"
  
)

/* harmony default export */ var collection = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
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
  "30c0c5b6"
  
)

/* harmony default export */ var grade = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/iconLoading.vue?vue&type=template&id=3079d279&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lds-roller"},[_vm._ssrNode("<div data-v-3079d279></div> <div data-v-3079d279></div> <div data-v-3079d279></div> <div data-v-3079d279></div> <div data-v-3079d279></div> <div data-v-3079d279></div> <div data-v-3079d279></div> <div data-v-3079d279></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/iconLoading.vue?vue&type=template&id=3079d279&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/iconLoading.vue?vue&type=script&lang=js&
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
/* harmony default export */ var iconLoadingvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/public/iconLoading.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_iconLoadingvue_type_script_lang_js_ = (iconLoadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/iconLoading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_iconLoadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3079d279",
  "39a95122"
  
)

/* harmony default export */ var iconLoading = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/imagePreview.vue?vue&type=template&id=24a7c9c3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.image_url))+" alt"+(_vm._ssrClass(null,_vm.icon_class))+" data-v-24a7c9c3> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-5 w-5 top-0 right-0 absolute bg-gray-200 rounded-sm shadow-md cursor-pointer\" data-v-24a7c9c3><path fill-rule=\"evenodd\" d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\" clip-rule=\"evenodd\" data-v-24a7c9c3></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/imagePreview.vue?vue&type=template&id=24a7c9c3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/imagePreview.vue?vue&type=script&lang=js&
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
/* harmony default export */ var imagePreviewvue_type_script_lang_js_ = ({
  data() {
    return {
      icon_class: ""
    };
  },

  props: {
    image_type: {
      type: String
    },
    image_url: {
      type: String
    }
  },
  methods: {
    async Delete() {
      let filename = this.image_url.replace("https://homedelicious.ml/img/uploadImgs/", "");
      const body = {
        image: filename
      };
      await this.$axios({
        url: "/api/upload",
        method: "delete",
        data: {
          image: filename
        }
      }).then(() => {
        this.$emit("delete_res", true);
      }).catch(() => {
        alert("delete not success");
      });
    }

  },

  mounted() {
    switch (this.image_type) {
      case "user":
        this.icon_class = "rounded-round object-cover";
        break;

      case "image":
        this.icon_class = "w-full h-full object-cover";
        break;

      default:
        break;
    }
  }

});
// CONCATENATED MODULE: ./components/public/imagePreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_imagePreviewvue_type_script_lang_js_ = (imagePreviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/imagePreview.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_imagePreviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24a7c9c3",
  "6293a55e"
  
)

/* harmony default export */ var imagePreview = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/userIcon.vue?vue&type=template&id=5a7d5e23&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.iconPath))+" alt class=\"icon-title\" data-v-5a7d5e23>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/userIcon.vue?vue&type=template&id=5a7d5e23&scoped=true&

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/userIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var userIconvue_type_script_lang_js_ = ({
  computed: {
    iconPath() {
      return this.$store.state.user.icon;
    }

  },

  mounted() {
    if (external_vue_cookies_default.a.get('user')) {
      this.$store.commit('setUser', external_vue_cookies_default.a.get('user'));
    }
  }

});
// CONCATENATED MODULE: ./components/public/userIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_userIconvue_type_script_lang_js_ = (userIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/userIcon.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_userIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a7d5e23",
  "2d860156"
  
)

/* harmony default export */ var userIcon = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-C.285d67b.png";

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/logo.vue?vue&type=template&id=f49e63cc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid"},[_vm._ssrNode("<div class=\"title text-2xl font-title items-center text-center\" data-v-f49e63cc><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt class=\"h-8 inline -mt-2\" data-v-f49e63cc> <span class=\"text-fontColorlight items-end\" data-v-f49e63cc>Home Delicious</span></div> <div class=\"slogen font-bold text-xl font-fonts text-center\" data-v-f49e63cc><span class=\"mr-5\" data-v-f49e63cc>Trending</span> <span class=\"text-fontColorlight\" data-v-f49e63cc>Food</span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/logo.vue?vue&type=template&id=f49e63cc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/logo.vue?vue&type=script&lang=js&
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
/* harmony default export */ var logovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/public/logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_logovue_type_script_lang_js_ = (logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/logo.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f49e63cc",
  "e467c1c8"
  
)

/* harmony default export */ var logo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/sideBar.vue?vue&type=template&id=3a4b13ea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menu-bar-md h-screen w-full sticky top-0 py-20"},[_c('logo'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full h-20 my-10 flex justify-center\" data-v-3a4b13ea>","</div>",[_c('user-icon',{staticClass:"h-full"})],1),_vm._ssrNode(" <div class=\"btn w-1/3 mx-auto grid gap-y-5 text-center\" data-v-3a4b13ea><div"+(_vm._ssrClass("side-bar-btn",_vm.home))+" data-v-3a4b13ea>"+((this.$store.getters.lan)?("<span data-v-3a4b13ea>首页</span>"):("<span data-v-3a4b13ea>HOME</span>"))+"</div> <div"+(_vm._ssrClass("side-bar-btn",_vm.user))+" data-v-3a4b13ea>"+((this.$store.getters.lan)?("<span data-v-3a4b13ea>我的分享</span>"):("<span data-v-3a4b13ea>PRODUCTION</span>"))+"</div> <div"+(_vm._ssrClass("side-bar-btn",_vm.collection))+" data-v-3a4b13ea>"+((this.$store.getters.lan)?("<span data-v-3a4b13ea>我的收藏</span>"):("<span data-v-3a4b13ea>COLLECTION</span>"))+"</div> <div"+(_vm._ssrClass("side-bar-btn",_vm.share))+" data-v-3a4b13ea>"+((this.$store.getters.lan)?("<span data-v-3a4b13ea>上传美食</span>"):("<span data-v-3a4b13ea>SHARE</span>"))+"</div> <div"+(_vm._ssrClass("side-bar-btn",_vm.search))+" data-v-3a4b13ea>"+((this.$store.getters.lan)?("<span data-v-3a4b13ea>搜索</span>"):("<span data-v-3a4b13ea>SEARCH</span>"))+"</div> <div class=\"side-bar-btn logout\" data-v-3a4b13ea>"+((this.$store.getters.lan)?("<span data-v-3a4b13ea>注销</span>"):("<span data-v-3a4b13ea>LOGOUT</span>"))+"</div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/sideBar.vue?vue&type=template&id=3a4b13ea&scoped=true&

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// EXTERNAL MODULE: ./components/public/logo.vue + 4 modules
var logo = __webpack_require__(32);

// EXTERNAL MODULE: ./components/public/userIcon.vue + 4 modules
var userIcon = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/sideBar.vue?vue&type=script&lang=js&
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



/* harmony default export */ var sideBarvue_type_script_lang_js_ = ({
  components: {
    logo: logo["default"],
    UserIcon: userIcon["default"]
  },

  data() {
    return {
      home: "button_select",
      user: "",
      collection: "",
      share: "",
      search: "",
      select: "button_select",
      unSelect: ""
    };
  },

  async asyncData({
    params
  }) {
    const path = params;
  },

  methods: {
    toPath(data) {
      this.$router.push(data);
    },

    confirmLogin() {
      let res = confirm("Please login your account.");

      if (res == true) {
        this.$router.push("/login");
      }
    },

    toProduction() {
      if (external_vue_cookies_default.a.get("user")) {
        const user_id = external_vue_cookies_default.a.get("user").user_id;

        if (user_id) {
          this.$store.commit("userPage_shift", true);
          this.$router.push(`/user/${user_id}`);
          this.user = this.select;
          this.home = this.collection = this.share = this.search = this.unSelect;
        }
      } else {
        this.confirmLogin();
      }
    },

    toCollection() {
      if (external_vue_cookies_default.a.get("user")) {
        const user_id = external_vue_cookies_default.a.get("user").user_id;

        if (user_id) {
          this.$store.commit("userPage_shift", false);
          this.$router.push(`/user/${user_id}`);
          this.collection = this.select;
          this.home = this.user = this.share = this.search = this.unSelect;
        }
      } else {
        this.confirmLogin();
      }
    },

    sharePage() {
      if (external_vue_cookies_default.a.get("user")) {
        this.$router.push(`/share`);
      } else {
        this.confirmLogin();
      }
    },

    logout() {
      external_vue_cookies_default.a.remove("token");
      external_vue_cookies_default.a.remove("user");
      this.$router.push("/login");
    }

  },
  computed: {
    userInfo() {
      return external_vue_cookies_default.a.get("user");
    }

  },

  mounted() {
    let path = this.$route.path.replaceAll("/", "");

    if (path == "") {
      this.home = this.select;
      this.user = this.collection = this.share = this.search = this.unSelect;
    }

    if (path.includes("user")) {
      if (this.$store.state.userPageToggle) {
        this.user = this.select;
        this.home = this.collection = this.share = this.search = this.unSelect;
      } else {
        this.collection = this.select;
        this.home = this.user = this.share = this.search = this.unSelect;
      }
    }

    if (path == "share") {
      this.share = this.select;
      this.user = this.collection = this.home = this.search = this.unSelect;
    }

    if (path.includes("search")) {
      this.search = this.select;
      this.user = this.collection = this.share = this.home = this.unSelect;
    }
  }

});
// CONCATENATED MODULE: ./components/public/sideBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_sideBarvue_type_script_lang_js_ = (sideBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/sideBar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_sideBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a4b13ea",
  "b0a66e4a"
  
)

/* harmony default export */ var sideBar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fryer.9e9d3ef.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/frying-pan.fb1eea1.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/oven.dd28fbb.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pot.a98f008.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/salad.20a4d04.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steamer.111d57f.png";

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 44 */,
/* 45 */
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodInfoText.vue?vue&type=template&id=6ca8e1fb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid grid-cols-6 px-6 py-5 content-start gap-y-3 font-fonts relative"},[(_vm.checkUser)?_vm._ssrNode("<div class=\"edit-option absolute right-5 top-16\" data-v-6ca8e1fb>","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-6 w-6 text-shadow\" style=\"text-shadow: 5px 5px 5px black\" data-v-6ca8e1fb><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z\" clip-rule=\"evenodd\" data-v-6ca8e1fb></path></svg> "),_c('transition',{attrs:{"name":"fade"}},[(_vm.option_appear)?_c('div',{staticClass:"option uppercase bg-primary absolute right-0 rounded-md shadow-lg text-center"},[_c('p',{staticClass:"hover:bg-white p-2",on:{"click":function($event){return _vm.toEditPage()}}},[(this.$store.getters.lan)?_c('span',[_vm._v("修改")]):_c('span',[_vm._v("edit")])]),_vm._v(" "),_c('p',{staticClass:"hover:bg-white p-2",on:{"click":_vm.deleteFood}},[(this.$store.getters.lan)?_c('span',[_vm._v("删除")]):_c('span',[_vm._v("delete")])])]):_vm._e()])],2):_vm._e(),_vm._ssrNode(" "),_c('grade',{staticClass:"col-span-4",attrs:{"grade":_vm.food.grade,"icon_size":"text-2xl"}}),_vm._ssrNode(" "),_c('collection',{staticClass:"col-span-2",attrs:{"food":_vm.food}}),_vm._ssrNode(" <p class=\"food-name col-span-5 text-3xl font-bold\" data-v-6ca8e1fb>"+_vm._ssrEscape(_vm._s(_vm.food.food_name))+"</p> <div class=\"tags col-span-4 flex justify-between text-lg text-fontColordark\" data-v-6ca8e1fb><p data-v-6ca8e1fb>"+_vm._ssrEscape(_vm._s(_vm.food.food_location))+"</p> <p data-v-6ca8e1fb>"+_vm._ssrEscape(_vm._s(_vm.food.food_category))+"</p> <p data-v-6ca8e1fb>"+_vm._ssrEscape(_vm._s(_vm.food.tag))+"</p></div> <div class=\"users col-span-6 flex text-lg font-semibold\" data-v-6ca8e1fb>"+_vm._ssrEscape("\n    by "+_vm._s(_vm.food.username)+"\n    ")+"<img"+(_vm._ssrAttr("src",_vm.food.icon))+" alt class=\"h-6 ml-3 rounded-round\" data-v-6ca8e1fb></div> <div class=\"description col-span-6 text-lg font-thin text-justify md:h-60 md:overflow-auto\" data-v-6ca8e1fb>"+_vm._ssrEscape("\n    "+_vm._s(_vm.food.food_description)+"\n  ")+"</div> "),_vm._ssrNode("<div class=\"cooking-icons col-span-6 flex justify-between md:justify-around font-semibold\" data-v-6ca8e1fb>","</div>",[_c('cookway-icon',{staticClass:"cooking-icon",attrs:{"cooking_way":_vm.food.cooking_way}}),_vm._ssrNode(" <p class=\"cooking-icon text-center grid content-center\" data-v-6ca8e1fb>"+_vm._ssrEscape("\n      "+_vm._s(_vm.food.cooking_time)+"MIN\n    ")+"</p> <div class=\"cooking-icon text-center grid content-center\" data-v-6ca8e1fb>"+_vm._ssrEscape("\n      "+_vm._s(_vm.food.difficulty)+"\n    ")+"</div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/food.vue/foodInfoText.vue?vue&type=template&id=6ca8e1fb&scoped=true&

// EXTERNAL MODULE: ./components/public/collection.vue + 4 modules
var collection = __webpack_require__(26);

// EXTERNAL MODULE: ./components/public/grade.vue + 4 modules
var grade = __webpack_require__(27);

// EXTERNAL MODULE: ./components/food.vue/cookwayIcon.vue + 4 modules
var cookwayIcon = __webpack_require__(48);

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
  
  var style0 = __webpack_require__(51)
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
  "3d9ca77d"
  
)

/* harmony default export */ var foodInfoText = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 47 */
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
  "968906c0"
  
)

/* harmony default export */ var foodPhoto = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 48 */
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

/***/ }),
/* 49 */
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

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/foodMethodEdit.vue?vue&type=template&id=6661331d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-5 content-start gap-y-3 font-fonts"},[_vm._ssrNode("<p class=\"food-name text-3xl font-bold mb-5\" data-v-6661331d>Methods:</p> "),_vm._l((_vm.processes),function(process){return _vm._ssrNode("<div class=\"mb-5 bg-white p-5 shadow-md rounded-xl md:px-8 md:py-3 \" data-v-6661331d>","</div>",[_vm._ssrNode("<p class=\"uppercase text-center text-xl mb-8 font-semibold relative md:mb-3\" data-v-6661331d>"+_vm._ssrEscape("\n      Step : "+_vm._s(process.id + 1)+"\n      ")+"<span class=\"absolute right-0 cursor-pointer text-shadow\" data-v-6661331d><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6\" data-v-6661331d><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\" data-v-6661331d></path></svg></span></p> "),_vm._ssrNode("<div class=\"md:grid md:grid-cols-3 md:items-start md:w-full md:mx-auto md:h-40 md:border md:border-fontColordark rounded-md overflow-hidden\" data-v-6661331d>","</div>",[_vm._ssrNode("<textarea name=\"method-text\" id rows=\"5\""+(_vm._ssrClass("font-thin w-full text-justify mx-auto h-40 md:w-full md:h-full md:col-span-2 border border-black md:border-none",process.order))+" data-v-6661331d>"+_vm._ssrEscape(_vm._s(process.text))+"</textarea> "),(process.img)?_c('image-preview',{staticClass:"h-52 overflow-hidden md:order-1 md:h-full md:col-span-1",attrs:{"image_type":"image","image_url":process.img},on:{"delete_res":function($event){return _vm.delete_res(process.id)}}}):_c('div',{staticClass:"md:py-10 bg-barBgc h-full border border-primary"},[_c('p',{staticClass:"text-center"},[(_vm.lan)?_c('span',[_vm._v("添加图片")]):_c('span',[_vm._v("Add photo")])]),_vm._v(" "),_c('image-upload',{attrs:{"id":process.id},on:{"newImage":_vm.newImage}})],1)],2),_vm._ssrNode(" <hr class=\"col-span-3 md:mb-10 md:w-5/6 md:mx-auto\" data-v-6661331d>")],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sharePage/foodMethodEdit.vue?vue&type=template&id=6661331d&scoped=true&

// EXTERNAL MODULE: ./components/public/imagePreview.vue + 4 modules
var imagePreview = __webpack_require__(29);

// EXTERNAL MODULE: ./components/public/imageUpload.vue + 4 modules
var imageUpload = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/foodMethodEdit.vue?vue&type=script&lang=js&
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


/* harmony default export */ var foodMethodEditvue_type_script_lang_js_ = ({
  components: {
    imagePreview: imagePreview["default"],
    ImageUpload: imageUpload["default"]
  },

  data() {
    return {
      text: ""
    };
  },

  watch: {
    processes(newValue) {
      console.log(newValue);
      newValue.map((value, index) => {
        value.order = `md:order-${value.id % 2 + 1}`;
        console.log(value);
      });
    }

  },
  computed: {
    processes() {
      return this.$store.getters.method_preview;
    },

    lan() {
      return this.$store.getters.lan;
    }

  },
  methods: {
    processUpdate(index) {
      console.log(index);
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.processes));
      console.log(data);

      for (let val of data) {
        if (val.id == index) {
          val.text = event.target.value;
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        } else {
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
    }

  }
});
// CONCATENATED MODULE: ./components/sharePage/foodMethodEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var sharePage_foodMethodEditvue_type_script_lang_js_ = (foodMethodEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sharePage/foodMethodEdit.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sharePage_foodMethodEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6661331d",
  "6ade0ca9"
  
)

/* harmony default export */ var foodMethodEdit = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/food.d45b11e.png";

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/edit/foodInfoEdit.vue?vue&type=template&id=063bf915&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (this.food)?_c('div',{staticClass:"upload-area grid gap-y-4 text-lg font-fonts"},[_vm._ssrNode("<div class=\"images bg-white\" data-v-063bf915>","</div>",[_vm._ssrNode("<div class=\"image-preview\" data-v-063bf915>","</div>",_vm._l((_vm.pre_img_list),function(image){return _vm._ssrNode("<div class=\"relative\" data-v-063bf915>","</div>",[_c('image-preview',{attrs:{"image_url":image.url,"image_type":_vm.imageType},on:{"delete_res":function($event){return _vm.delete_res(image.id)}}})],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"upload py-10 text-center\" data-v-063bf915>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt class=\"w-1/3 mx-auto\" data-v-063bf915> <p data-v-063bf915>Please upload you food photo</p> "),_c('image-upload',{on:{"newImage":_vm.newImage}})],2)],2),_vm._ssrNode(" <div class=\"food-name\" data-v-063bf915><input type=\"text\" name=\"food-name\" placeholder=\"Food name\""+(_vm._ssrAttr("value",(_vm.food_name)))+" class=\"w-full px-5\" data-v-063bf915></div> <div class=\"food-description\" data-v-063bf915><textarea name=\"food-description\" cols=\"40\" rows=\"5\" placeholder=\"Tell us about your food...\" class=\"w-full px-5\" data-v-063bf915>"+_vm._ssrEscape(_vm._s(_vm.food_description))+"</textarea></div> <div class=\"cooking-way info-line-between\" data-v-063bf915><span data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>烹饪方式：</span>"):("<span data-v-063bf915>Cooking method： </span>"))+"</span> <span data-v-063bf915><span class=\"required\" data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>必填</span>"):("<span data-v-063bf915>Required</span>"))+"</span> "+((this.$store.getters.lan)?("<select name=\"cook\" id=\"cook\" class=\"select\" data-v-063bf915><option value=\"fry\" class=\"option\" data-v-063bf915>炒</option> <option value=\"deep fry\" class=\"option\" data-v-063bf915>炸</option> <option value=\"stew\" class=\"option\" data-v-063bf915>炖</option> <option value=\"steam\" class=\"option\" data-v-063bf915>蒸</option> <option value=\"bake\" class=\"option\" data-v-063bf915>烤</option> <option value=\"salad\" class=\"option\" data-v-063bf915>拌</option></select>"):("<select name=\"cook\" id=\"cook\" class=\"select\" data-v-063bf915><option value=\"fry\" class=\"option\" data-v-063bf915>fry</option> <option value=\"deep fry\" class=\"option\" data-v-063bf915>deep fry</option> <option value=\"stew\" class=\"option\" data-v-063bf915>stew</option> <option value=\"steam\" class=\"option\" data-v-063bf915>steam</option> <option value=\"bake\" class=\"option\" data-v-063bf915>bake</option> <option value=\"salad\" class=\"option\" data-v-063bf915>salad</option></select>"))+"</span></div> <div class=\"diffculty info-line-between\" data-v-063bf915><div data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>难度：</span>"):("<span data-v-063bf915>difficulty：</span>"))+"</div> <div data-v-063bf915><span class=\"required\" data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>必填</span>"):("<span data-v-063bf915>Required</span>"))+"</span> "+((this.$store.getters.lan)?("<select id=\"difficult\" name=\"difficult\" class=\"select\" data-v-063bf915><option value=\"easy\" class=\"option\" data-v-063bf915>简单</option> <option value=\"medium\" class=\"option\" data-v-063bf915>中等</option> <option value=\"difficult\" class=\"option\" data-v-063bf915>困难</option> <option value=\"super\" class=\"option\" data-v-063bf915>大师</option></select>"):("<select id=\"difficult\" name=\"difficult\" class=\"select\" data-v-063bf915><option value=\"easy\" class=\"option\" data-v-063bf915>easy</option> <option value=\"medium\" class=\"option\" data-v-063bf915>medium</option> <option value=\"difficult\" class=\"option\" data-v-063bf915>difficult</option> <option value=\"super\" class=\"option\" data-v-063bf915>super</option></select>"))+"</div></div> <div class=\"cook-time info-line-between\" data-v-063bf915><div data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>烹饪时间：</span>"):("<span data-v-063bf915>Cook Time:</span>"))+"</div> <div class=\"flex items-center\" data-v-063bf915><div class=\"required\" data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>必填</span>"):("<span data-v-063bf915>Required</span>"))+"</div> <input type=\"text\" placeholder=\"30\""+(_vm._ssrAttr("value",(_vm.time)))+" class=\"select w-16 mr-2\" data-v-063bf915> "+((this.$store.getters.lan)?("<span data-v-063bf915>分钟</span>"):("<span data-v-063bf915>Min</span>"))+"</div></div> <div class=\"location info-line-between\" data-v-063bf915><div data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>地域：</span>"):("<span data-v-063bf915>Location:</span>"))+"</div> <input type=\"text\" placeholder=\"Calgary\""+(_vm._ssrAttr("value",(_vm.location)))+" class=\"select w-24 mr-2\" data-v-063bf915></div> <div class=\"category info-line-between\" data-v-063bf915><div data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>类别：</span>"):("<span data-v-063bf915>Category:</span>"))+"</div> <input type=\"text\" placeholder=\"pasta\""+(_vm._ssrAttr("value",(_vm.category)))+" class=\"select w-24 mr-2\" data-v-063bf915></div> <div class=\"tag info-line-between\" data-v-063bf915><div data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>标签：</span>"):("<span data-v-063bf915>Tag:</span>"))+"</div> <input type=\"text\" placeholder=\"for kids\""+(_vm._ssrAttr("value",(_vm.tag)))+" class=\"select w-24 mr-2\" data-v-063bf915></div> <div class=\"language info-line-between\" data-v-063bf915><div data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>语言：</span>"):("<span data-v-063bf915>Language:</span>"))+"</div> <div data-v-063bf915><span class=\"required\" data-v-063bf915>"+((this.$store.getters.lan)?("<span data-v-063bf915>必填</span>"):("<span data-v-063bf915>Required</span>"))+"</span> <select id=\"language\" name=\"语言\" class=\"select\" data-v-063bf915><option value=\"English\" class=\"option\" data-v-063bf915>English</option> <option value=\"Chinese\" class=\"option\" data-v-063bf915>中文</option></select></div></div> <div class=\"previewbtn flex justify-center\" data-v-063bf915><button class=\"button\" data-v-063bf915>Preview</button></div>")],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/edit/foodInfoEdit.vue?vue&type=template&id=063bf915&scoped=true&

// EXTERNAL MODULE: ./components/public/imagePreview.vue + 4 modules
var imagePreview = __webpack_require__(29);

// EXTERNAL MODULE: ./components/public/imageUpload.vue + 4 modules
var imageUpload = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/edit/foodInfoEdit.vue?vue&type=script&lang=js&
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


/* harmony default export */ var foodInfoEditvue_type_script_lang_js_ = ({
  components: {
    ImageUpload: imageUpload["default"],
    ImagePreview: imagePreview["default"]
  },

  data() {
    return {
      images: "",
      food_preview: {},
      pre_img_list: this.food.image,
      imageType: "image",
      imageUrl: "",
      food_name: this.food.food_name,
      food_description: this.food.food_description,
      time: this.food.cooking_time,
      location: this.food.food_location,
      category: this.food.food_category,
      tag: this.food.tag,
      cook_way: this.food.cook_way,
      difficulty: this.food.difficulty,
      lang: this.food.lang
    };
  },

  props: {
    food: {
      type: Object
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }

  },
  methods: {
    newImage(data) {
      this.imageUrl = data;
      const index = this.pre_img_list.length;
      const image = {
        id: index,
        url: this.imageUrl
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

      console.log(this.pre_img_list);
      const data = {
        username: this.food.username,
        food_name: this.food_name,
        food_description: this.food_description,
        cooking_time: this.time,
        food_location: this.location,
        food_category: this.category,
        tag: this.tag,
        cooking_way: this.cook_way,
        difficulty: this.difficulty,
        image: this.images,
        icon: this.user.icon,
        collection: false,
        lang: this.lang
      };
      console.log(data);
      this.$store.commit("sharePageContentToggle", "infoPreview");
      this.$store.commit("foodInfo_temp_Edit", data);
    }

  },

  mounted() {
    console.log(this.food);
  }

});
// CONCATENATED MODULE: ./components/edit/foodInfoEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_foodInfoEditvue_type_script_lang_js_ = (foodInfoEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/edit/foodInfoEdit.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_foodInfoEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "063bf915",
  "1566c946"
  
)

/* harmony default export */ var foodInfoEdit = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/edit/methodEdit.vue?vue&type=template&id=3452f830&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-fonts"},[_vm._ssrNode("<div class=\"ingredients px-6 py-5 content-start gap-y-3 font-fonts md:w-3/4 mx-auto md:px-0\" data-v-3452f830>","</div>",[_vm._ssrNode("<div class=\"ingredient-preview\" data-v-3452f830>","</div>",[_c('food-ingredients-edit')],1),_vm._ssrNode(" <div class=\"ingredient-preview-input grid grid-cols-9 my-3 text-md gap-x-2 ml-2\" data-v-3452f830><div class=\"col-span-1\" data-v-3452f830></div> <input type=\"text\" placeholder=\"Butter\""+(_vm._ssrAttr("value",(_vm.material)))+" class=\"col-span-4\" data-v-3452f830> <input type=\"text\" placeholder=\"150g\""+(_vm._ssrAttr("value",(_vm.amount)))+" class=\"col-span-4\" data-v-3452f830> <div class=\"btns col-span-9 flex justify-center my-10\" data-v-3452f830><button class=\"button\" data-v-3452f830>"+((this.$store.getters.lan)?("<span data-v-3452f830>添加原料</span>"):("<span data-v-3452f830>Add ingredients</span>"))+"</button></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"processes w-5/6 mx-auto px-0 py-5 content-start gap-y-3 md:w-3/4\" data-v-3452f830>","</div>",[_c('food-method-edit'),_vm._ssrNode(" <textarea name id cols=\"30\" rows=\"8\""+(_vm._ssrAttr("placeholder",_vm.textarea_placeholder))+" class=\"w-full\" data-v-3452f830>"+_vm._ssrEscape(_vm._s(_vm.method_text))+"</textarea> "),_vm._ssrNode("<div class=\"image text-center m-5\" data-v-3452f830>","</div>",[_vm._ssrNode("<p data-v-3452f830>"+((this.$store.getters.lan)?("<span data-v-3452f830>添加图片</span>"):("<span data-v-3452f830>Add Photo</span>"))+"</p> "),_c('image-upload',{on:{"newImage":_vm.newImage}}),_vm._ssrNode(" "),(_vm.image_url)?_c('image-preview',{staticClass:"h-40 md:w-1/2 mx-auto md:h-56",attrs:{"image_url":_vm.image_url,"image_type":"image"}}):_vm._e()],2),_vm._ssrNode(" <div class=\"btns flex justify-center\" data-v-3452f830><button class=\"button\" data-v-3452f830>"+((this.$store.getters.lan)?("<span data-v-3452f830>添加步骤</span>"):("<span data-v-3452f830>Add Methods</span>"))+"</button></div>")],2),_vm._ssrNode(" <div class=\"submit-btns flex justify-center\" data-v-3452f830><button class=\"button\" data-v-3452f830>"+((this.$store.getters.lan)?("<span data-v-3452f830>确认上传</span>"):("<span data-v-3452f830>comfirm Upload</span>"))+"</button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/edit/methodEdit.vue?vue&type=template&id=3452f830&scoped=true&

// EXTERNAL MODULE: ./components/public/imagePreview.vue + 4 modules
var imagePreview = __webpack_require__(29);

// EXTERNAL MODULE: ./components/public/imageUpload.vue + 4 modules
var imageUpload = __webpack_require__(24);

// EXTERNAL MODULE: ./components/sharePage/foodIngredientsEdit.vue + 4 modules
var foodIngredientsEdit = __webpack_require__(49);

// EXTERNAL MODULE: ./components/sharePage/foodMethodEdit.vue + 4 modules
var foodMethodEdit = __webpack_require__(50);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/edit/methodEdit.vue?vue&type=script&lang=js&
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
//






/* harmony default export */ var methodEditvue_type_script_lang_js_ = ({
  components: {
    foodIngredientsEdit: foodIngredientsEdit["default"],
    FoodMethodEdit: foodMethodEdit["default"],
    ImageUpload: imageUpload["default"],
    ImagePreview: imagePreview["default"]
  },

  data() {
    return {
      material: "",
      amount: "",
      ingredient_preview: "",
      method_text: "",
      image_url: '',
      methods_preview: ''
    };
  },

  props: {
    foodId: {
      type: String
    }
  },
  methods: {
    add_material() {
      this.ingredient_preview = JSON.parse(JSON.stringify(this.$store.state.foodIngredients_temp));
      this.ingredient_preview += `${this.material}<###**%%###>${this.amount}<###**^^###>`;
      this.material = this.amount = "";
      this.$store.commit("foodIngredients_temp_Edit", this.ingredient_preview);
    },

    newImage(data) {
      console.log(data);
      this.image_url = data;
      console.log(this.image_url);
    },

    addMethod() {
      this.methods_preview = JSON.parse(JSON.stringify(this.$store.state.foodMethods_temp));
      this.methods_preview += `${this.method_text}<###**%%###>${this.image_url}<###**^^###>`;
      this.method_text = this.image_url = '';
      this.$store.commit('foodMethods_temp_Edit', this.methods_preview);
    },

    async updateMethod() {
      console.log(this.ingredients);
      console.log(this.methods);
      console.log(this.foodId);
      console.log(external_vue_cookies_default.a.get('token'));

      if (this.ingredients == null && this.methods == null) {
        if (this.$store.getters.lan) {
          alert("你没有输入任何原料或步骤");
        } else {
          alert("You haven't enter any ingredient and methods..");
        }
      } else {
        await this.$axios({
          url: '/api/methods',
          method: 'patch',
          data: {
            token: external_vue_cookies_default.a.get('token'),
            food_id: this.foodId,
            ingredient: this.ingredients,
            process: this.methods
          }
        }).then(res => {
          console.log(res.data);
          this.$emit('finish', this.foodId);
        }).catch(err => alert(err));
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

    ...Object(external_vuex_["mapState"])({
      ingredients: state => state.foodIngredients_temp,
      methods: state => state.foodMethods_temp
    })
  }
});
// CONCATENATED MODULE: ./components/edit/methodEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_methodEditvue_type_script_lang_js_ = (methodEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/edit/methodEdit.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_methodEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3452f830",
  "78a384fb"
  
)

/* harmony default export */ var methodEdit = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/edit/_editId.vue?vue&type=template&id=11dd1171&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-background"},[_vm._ssrNode("<div class=\"share-page relative\" data-v-11dd1171>","</div>",[_vm._ssrNode("<div class=\"left\" data-v-11dd1171>","</div>",[_c('side-bar')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right\" data-v-11dd1171>","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-7 w-7 bg-white my-1 ml-2 rounded-sm shadow-md cursor-pointer md:hidden\" data-v-11dd1171><path fill-rule=\"evenodd\" d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\" clip-rule=\"evenodd\" data-v-11dd1171></path></svg> "),(_vm.content == 'infoUpload')?_c('food-info-edit',{attrs:{"food":_vm.food}}):_vm._e(),_vm._ssrNode(" "),(_vm.content == 'infoPreview')?_vm._ssrNode("<div class=\"preview md:grid md:grid-cols-2\" data-v-11dd1171>","</div>",[_c('food-photo',{staticClass:"h-h60Screen md:col-span-1 sticky top-0 z-0"}),_vm._ssrNode(" "),_c('food-info-text',{staticClass:"rounded-t-3xl bg-white md:col-span-1 md:sticky md:top-0 md:h-h60Screen z-20 relative md:overflow-hidden"}),_vm._ssrNode(" <div class=\"btns md:col-span-2 flex justify-evenly -mt-3 pt-24 z-20 bg-primary\" data-v-11dd1171><button class=\"button\" data-v-11dd1171>"+((this.$store.getters.lan)?("<span data-v-11dd1171>继续编辑</span>"):("<span data-v-11dd1171>continue edit</span>"))+"</button> <button class=\"button\" data-v-11dd1171>"+((this.$store.getters.lan)?("<span data-v-11dd1171>确认上传</span>"):("<span data-v-11dd1171>confirm</span>"))+"</button></div>")],2):_vm._e(),_vm._ssrNode(" "),(_vm.content == 'methodUpload')?_c('method-edit',{attrs:{"foodId":_vm.foodId},on:{"finish":_vm.finishEdit}}):_vm._e()],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/edit/_editId.vue?vue&type=template&id=11dd1171&scoped=true&

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// EXTERNAL MODULE: ./components/public/sideBar.vue + 4 modules
var sideBar = __webpack_require__(33);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/edit/foodInfoEdit.vue + 4 modules
var foodInfoEdit = __webpack_require__(72);

// EXTERNAL MODULE: ./components/food.vue/foodInfoText.vue + 4 modules
var foodInfoText = __webpack_require__(46);

// EXTERNAL MODULE: ./components/food.vue/foodPhoto.vue + 4 modules
var foodPhoto = __webpack_require__(47);

// EXTERNAL MODULE: ./components/edit/methodEdit.vue + 4 modules
var methodEdit = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/edit/_editId.vue?vue&type=script&lang=js&
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







/* harmony default export */ var _editIdvue_type_script_lang_js_ = ({
  components: {
    sideBar: sideBar["default"],
    FoodInfoEdit: foodInfoEdit["default"],
    FoodInfoText: foodInfoText["default"],
    FoodPhoto: foodPhoto["default"],
    MethodEdit: methodEdit["default"]
  },

  asyncData({
    params
  }) {
    const foodId = params.editId;
    return {
      foodId
    };
  },

  data() {
    return {
      finish: false
    };
  },

  computed: {
    food() {
      return this.$store.getters.foodInfo_preview;
    },

    ...Object(external_vuex_["mapState"])({
      content: state => state.sharePageContent,
      foodPreview: state => state.foodInfo_temp
    })
  },
  methods: {
    cancel() {},

    continueEdit() {
      this.$store.commit("sharePageContentToggle", "infoUpload");
    },

    infoComfirm() {
      this.patchFood();
    },

    finishEdit(data) {
      this.finish = true;
      this.$router.push(`/food/${data}`);
    },

    async patchFood() {
      let data = this.foodPreview;
      data.token = external_vue_cookies_default.a.get("token");
      data.food_id = this.foodId;
      data.images = data.image;
      console.log(this.foodPreview);
      await this.$axios({
        url: "/api/foods",
        method: "patch",
        data: data
      }).then(res => {
        console.log(res);
        this.$store.commit("sharePageContentToggle", "methodUpload");
      });
    }

  },

  mounted() {
    this.$store.commit("sharePageContentToggle", "infoUpload");
    console.log(this.content);
  },

  beforeRouteLeave(to, from, next) {
    if (this.foodPreview == null && this.foodIngredients == null && this.foodMethods == null) {
      console.log("aaa");
      next();
    } else {
      console.log("bbb");

      if (this.finish == true) {
        next();
      } else {
        const res = confirm("You have not finish your uploading.  Do you make sure to leave this page?");

        if (res == true) {
          next();
        } else {
          next(false);
        }
      }
    }
  }

});
// CONCATENATED MODULE: ./pages/edit/_editId.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_editIdvue_type_script_lang_js_ = (_editIdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/edit/_editId.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_editIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "11dd1171",
  "0050dfce"
  
)

/* harmony default export */ var _editId = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FoodPhoto: __webpack_require__(47).default,FoodInfoText: __webpack_require__(46).default})


/***/ })
]);;
//# sourceMappingURL=_editId.js.map