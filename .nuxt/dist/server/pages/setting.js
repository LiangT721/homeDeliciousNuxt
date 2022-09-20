exports.ids = [45,12,17,19,20,21,22,23,25,26,27,28,29,30];
exports.modules = {

/***/ 23:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 24:
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

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
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

/***/ 30:
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-C.285d67b.png";

/***/ }),

/***/ 32:
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

/***/ 33:
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

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/bottomBar.vue?vue&type=template&id=0808f54e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fixed bottom-0 w-screen h-16 md:hidden z-50 rounded-t-md shadow-md bg-white flex justify-around items-center"},[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-7 w-7 text-fontColordark\" data-v-0808f54e><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\" data-v-0808f54e></path></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-7 w-7 text-fontColordark\" data-v-0808f54e><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\" data-v-0808f54e></path></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-7 w-7 text-fontColordark\" data-v-0808f54e><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z\" data-v-0808f54e></path></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-7 w-7 text-fontColordark\" data-v-0808f54e><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\" data-v-0808f54e></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/bottomBar.vue?vue&type=template&id=0808f54e&scoped=true&

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/bottomBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bottomBarvue_type_script_lang_js_ = ({
  methods: {
    confirmLogin() {
      let res = confirm("Please login your account.");

      if (res == true) {
        this.$router.push("/login");
      }
    },

    toUserPage() {
      if (external_vue_cookies_default.a.get("user")) {
        const user_id = external_vue_cookies_default.a.get("user").user_id;

        if (user_id) {
          this.$router.push(`/user/${user_id}`);
        }
      } else {
        this.confirmLogin();
      }
    },

    share() {
      if (external_vue_cookies_default.a.get("user")) {
        this.$router.push(`/share`);
      } else {
        this.confirmLogin();
      }
    }

  }
});
// CONCATENATED MODULE: ./components/public/bottomBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_bottomBarvue_type_script_lang_js_ = (bottomBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/bottomBar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_bottomBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0808f54e",
  "8072e072"
  
)

/* harmony default export */ var bottomBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/searchBar.vue?vue&type=template&id=d98a80e4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-10 w-5/6 mx-auto h-full relative "},[_vm._ssrNode("<input type=\"text\""+(_vm._ssrAttr("value",(_vm.searchContent)))+" class=\"w-full h-10 self-center mx-auto rounded-3xl pl-14 md:pl-16 bg-barBgc md:w-full\" data-v-d98a80e4> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"h-5 w-5 absolute text-white top-2.5 self-center left-4 md:left-8\" data-v-d98a80e4><path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\" data-v-d98a80e4></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/searchBar.vue?vue&type=template&id=d98a80e4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/searchBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var searchBarvue_type_script_lang_js_ = ({
  data() {
    return {
      params: {},
      searchContent: ""
    };
  },

  methods: {
    async enter() {
      console.log(this.searchContent);
      const params = {
        content: this.searchContent
      };
      const res = await this.$axios.get("/api/search", {
        params
      });
      this.$store.commit("setSearchRes", res.data);
      console.log(res.data);

      if (this.$route.path != "/search/result") {
        this.$router.push("/search/result");
      }
    }

  }
});
// CONCATENATED MODULE: ./components/public/searchBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_searchBarvue_type_script_lang_js_ = (searchBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/searchBar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_searchBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d98a80e4",
  "59624daa"
  
)

/* harmony default export */ var searchBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/passwordComfirm.vue?vue&type=template&id=09ddfa9f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:" absolute top-0 w-full h-full bg-red-400"},[_vm._ssrNode("\n    password\n")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/settingPage/passwordComfirm.vue?vue&type=template&id=09ddfa9f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/passwordComfirm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var passwordComfirmvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/settingPage/passwordComfirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var settingPage_passwordComfirmvue_type_script_lang_js_ = (passwordComfirmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/settingPage/passwordComfirm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settingPage_passwordComfirmvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "09ddfa9f",
  "20e9baa5"
  
)

/* harmony default export */ var passwordComfirm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/imageEditPreview.vue?vue&type=template&id=a3499da6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.image_url))+" alt"+(_vm._ssrClass(null,_vm.icon_class))+" data-v-a3499da6>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/settingPage/imageEditPreview.vue?vue&type=template&id=a3499da6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/imageEditPreview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var imageEditPreviewvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/settingPage/imageEditPreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var settingPage_imageEditPreviewvue_type_script_lang_js_ = (imageEditPreviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/settingPage/imageEditPreview.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settingPage_imageEditPreviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a3499da6",
  "67e04a52"
  
)

/* harmony default export */ var imageEditPreview = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/accountModify.vue?vue&type=template&id=29d4e5dd&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative"},[_vm._ssrNode("<p class=\"capitalize mt-3\" data-v-29d4e5dd>"+((this.$store.getters.lan)?("<span data-v-29d4e5dd>用户名</span>"):("<span data-v-29d4e5dd>username</span>"))+"</p> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.username)))+" class=\"input-area\" data-v-29d4e5dd> <p class=\"capitalize mt-3\" data-v-29d4e5dd>"+((this.$store.getters.lan)?("<span data-v-29d4e5dd>电子邮箱</span>"):("<span data-v-29d4e5dd>email</span>"))+"</p> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"input-area\" data-v-29d4e5dd> <p class=\"capitalize mt-3\" data-v-29d4e5dd>"+((this.$store.getters.lan)?("<span data-v-29d4e5dd>生日</span>"):("<span data-v-29d4e5dd>birthday</span>"))+"</p> <input type=\"date\""+(_vm._ssrAttr("value",(_vm.birthday)))+" class=\"input-area\" data-v-29d4e5dd> <p class=\"capitalize mt-3\" data-v-29d4e5dd>"+((this.$store.getters.lan)?("<span data-v-29d4e5dd>所在地</span>"):("<span data-v-29d4e5dd>location</span>"))+"</p> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.location)))+" class=\"input-area\" data-v-29d4e5dd> <p class=\"capitalize mt-3\" data-v-29d4e5dd>"+((this.$store.getters.lan)?("<span data-v-29d4e5dd>简介</span>"):("<span data-v-29d4e5dd>bio</span>"))+"</p> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.bio)))+" class=\"input-area\" data-v-29d4e5dd> <p class=\"capitalize mt-3\" data-v-29d4e5dd>"+((this.$store.getters.lan)?("<span data-v-29d4e5dd>头像</span>"):("<span data-v-29d4e5dd>icon</span>"))+"</p> "),_c('image-upload',{staticClass:"mt-3",attrs:{"image_type":_vm.type_user},on:{"newImage":_vm.newImage}}),_vm._ssrNode(" "),(_vm.icon)?_c('image-edit-preview',{staticClass:"image-preview h-20 w-20 mx-auto relative pt-5",attrs:{"image_url":_vm.icon,"image_type":_vm.type_user}}):_vm._e(),_vm._ssrNode(" <div data-v-29d4e5dd><button class=\"button mt-10\" data-v-29d4e5dd>update</button> <button class=\"button mt-10\" data-v-29d4e5dd>back</button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/settingPage/accountModify.vue?vue&type=template&id=29d4e5dd&scoped=true&

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// EXTERNAL MODULE: ./components/public/imageUpload.vue + 4 modules
var imageUpload = __webpack_require__(24);

// EXTERNAL MODULE: ./components/settingPage/passwordComfirm.vue + 4 modules
var passwordComfirm = __webpack_require__(55);

// EXTERNAL MODULE: ./components/settingPage/imageEditPreview.vue + 4 modules
var imageEditPreview = __webpack_require__(56);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/accountModify.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var accountModifyvue_type_script_lang_js_ = ({
  components: {
    imageUpload: imageUpload["default"],
    PasswordComfirm: passwordComfirm["default"],
    ImageEditPreview: imageEditPreview["default"]
  },

  data() {
    return {
      username: "",
      email: "",
      birthday: "",
      location: "",
      bio: "",
      icon: "",
      type_user: "user"
    };
  },

  computed: {
    user() {
      return this.$store.getters.defaultUser;
    }

  },
  methods: {
    back() {
      console.log('back');
      this.$emit('finish', 'menu');
    },

    newImage(data) {
      this.icon = data;
      console.log(this.icon);
    },

    delete_res(data) {
      console.log(data);

      switch (data) {
        case true:
          this.icon = null;
          break;

        case false:
          alert("Delete falied");
          break;

        default:
          break;
      }
    },

    async updateAccount() {
      console.log(this.username);
      console.log(this.birthday);
      console.log(this.email);
      console.log(this.location);
      console.log(this.bio);
      console.log(this.icon);
      let password = prompt("Please input your password");
      await this.$axios({
        url: "/api/users",
        method: "patch",
        data: {
          token: external_vue_cookies_default.a.get("token"),
          username: this.username,
          old_password: password,
          email: this.email,
          birthday: this.birthday,
          location: this.location,
          bio: this.bio,
          icon: this.icon
        }
      }).then(res => {
        console.log(res.data);
        external_vue_cookies_default.a.set("user", res.data);
        alert("Edit Success");
        this.$emit("finish", "menu");
      });
    }

  },

  mounted() {
    if (this.user.username != "visiter") {
      this.username = this.user.username;
      this.birthday = this.user.birthday;
      this.email = this.user.email;
      this.location = this.user.location;
      this.bio = this.user.bio;
      this.icon = this.user.icon;
    }
  }

});
// CONCATENATED MODULE: ./components/settingPage/accountModify.vue?vue&type=script&lang=js&
 /* harmony default export */ var settingPage_accountModifyvue_type_script_lang_js_ = (accountModifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/settingPage/accountModify.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settingPage_accountModifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29d4e5dd",
  "da4bcef0"
  
)

/* harmony default export */ var accountModify = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/deleteAccount.vue?vue&type=template&id=1b6b9238&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative"},[_vm._ssrNode("<p class=\"capitalize mt-3\" data-v-1b6b9238>"+((this.$store.getters.lan)?("<span data-v-1b6b9238>请输入您的密码:</span>"):("<span data-v-1b6b9238>Please input your password:</span>"))+"</p> <input type=\"password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"input-area\" data-v-1b6b9238> <div data-v-1b6b9238><button class=\"button mt-10\" data-v-1b6b9238>Delete</button> <button class=\"button mt-10\" data-v-1b6b9238>back</button></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/settingPage/deleteAccount.vue?vue&type=template&id=1b6b9238&scoped=true&

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/deleteAccount.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var deleteAccountvue_type_script_lang_js_ = ({
  data() {
    return {
      password: ""
    };
  },

  methods: {
    back() {
      console.log("back");
      this.$emit("finish", "menu");
    },

    async deleteUser() {
      if (confirm("Do you make sure to delete this user?")) {
        await this.$axios({
          url: "/api/users",
          method: "delete",
          data: {
            token: external_vue_cookies_default.a.get("token"),
            password: this.password
          }
        }).then(res => {
          console.log(res.data);
          external_vue_cookies_default.a.remove("user");
          external_vue_cookies_default.a.remove("token");
          this.$emit("finish", "menu");
          this.$router.push("/login");
        }).catch(res => {
          alert(res);
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/settingPage/deleteAccount.vue?vue&type=script&lang=js&
 /* harmony default export */ var settingPage_deleteAccountvue_type_script_lang_js_ = (deleteAccountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/settingPage/deleteAccount.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settingPage_deleteAccountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1b6b9238",
  "6aad407a"
  
)

/* harmony default export */ var deleteAccount = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/lanuageSetting.vue?vue&type=template&id=461cfe50&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative"},[_vm._ssrNode("<div data-v-461cfe50><button class=\"button mt-10\" data-v-461cfe50>English</button> <button class=\"button mt-10\" data-v-461cfe50>中文</button></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/settingPage/lanuageSetting.vue?vue&type=template&id=461cfe50&scoped=true&

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/lanuageSetting.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lanuageSettingvue_type_script_lang_js_ = ({
  methods: {
    languageSetting(data) {
      console.log(data);
      external_vue_cookies_default.a.set('lang', data);
      this.$store.commit('setLang', data);
      this.$emit('finish', 'menu');
    }

  }
});
// CONCATENATED MODULE: ./components/settingPage/lanuageSetting.vue?vue&type=script&lang=js&
 /* harmony default export */ var settingPage_lanuageSettingvue_type_script_lang_js_ = (lanuageSettingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/settingPage/lanuageSetting.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settingPage_lanuageSettingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "461cfe50",
  "03d2e85c"
  
)

/* harmony default export */ var lanuageSetting = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/passwordModify.vue?vue&type=template&id=5ac4f278&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative"},[_vm._ssrNode("<p class=\"capitalize mt-3\" data-v-5ac4f278>"+((this.$store.getters.lan)?("<span data-v-5ac4f278>请输入原有密码:</span>"):("<span data-v-5ac4f278>Please input old password:</span>"))+"</p> <input type=\"password\""+(_vm._ssrAttr("value",(_vm.oldPassword)))+" class=\"input-area\" data-v-5ac4f278> <p class=\"capitalize mt-3\" data-v-5ac4f278>"+((this.$store.getters.lan)?("<span data-v-5ac4f278>请输入新密码:</span>"):("<span data-v-5ac4f278>Please input new password:</span>"))+"</p> <input type=\"password\""+(_vm._ssrAttr("value",(_vm.confirmPassword)))+" class=\"input-area\" data-v-5ac4f278> <p class=\"capitalize mt-3\" data-v-5ac4f278>"+((this.$store.getters.lan)?("<span data-v-5ac4f278>请再次输入新密码:</span>"):("<span data-v-5ac4f278>Please re-input new password:</span>"))+"</p> <input type=\"password\""+(_vm._ssrAttr("value",(_vm.newPassword)))+" class=\"input-area\" data-v-5ac4f278> <div data-v-5ac4f278><button class=\"button mt-10\" data-v-5ac4f278>update</button> <button class=\"button mt-10\" data-v-5ac4f278>back</button></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/settingPage/passwordModify.vue?vue&type=template&id=5ac4f278&scoped=true&

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/settingPage/passwordModify.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var passwordModifyvue_type_script_lang_js_ = ({
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  },

  methods: {
    back() {
      console.log('back');
      this.$emit('finish', 'menu');
    },

    async passwordChange() {
      if (this.newPassword == this.confirmPassword) {
        await this.$axios({
          url: '/api/users',
          method: 'patch',
          data: {
            token: external_vue_cookies_default.a.get('token'),
            old_password: this.oldPassword,
            password: this.newPassword
          }
        }).then(res => {
          console.log(res.data);
          external_vue_cookies_default.a.remove('user');
          external_vue_cookies_default.a.remove('token');
          this.$emit('finish', 'menu');
          this.$router.push('/login/');
        }).catch(res => {
          alert(res);
        });
      } else {
        if (this.$store.getters.lan) {
          alert("您两次输入的密码不符！");
        } else {
          alert("The passwords you entered do not match");
        }

        this.newPassword = this.confirmPassword = this.oldPassword = '';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/settingPage/passwordModify.vue?vue&type=script&lang=js&
 /* harmony default export */ var settingPage_passwordModifyvue_type_script_lang_js_ = (passwordModifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/settingPage/passwordModify.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settingPage_passwordModifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ac4f278",
  "d0b5e778"
  
)

/* harmony default export */ var passwordModify = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting.vue?vue&type=template&id=7e08b2e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-background"},[_vm._ssrNode("<div class=\"page\">","</div>",[_vm._ssrNode("<div class=\"left\">","</div>",[_c('side-bar')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right\">","</div>",[_c('search-bar',{staticClass:"search-bar"}),_vm._ssrNode(" "),(_vm.pop_up == 'menu')?_vm._ssrNode("<div class=\"setting-content font-fonts mx-10 mt-10\">","</div>",[_vm._ssrNode("<h2 class=\"title text-2xl font-bold mb-5\">"+((_vm.lang)?("<span>设置：</span>"):("<span>SETTING： </span>"))+"</h2> <div class=\"content grid gap-y-6 justify-items-start\"><button class=\"button\">"+((this.$store.getters.lan)?("<span>修改用户信息</span>"):("<span>MODIFY ACCOUNT</span>"))+"</button> <button class=\"button\">"+((this.$store.getters.lan)?("<span>修改密码</span>"):("<span>MODIFY PASSWORD</span>"))+"</button> <button class=\"button\">"+((this.$store.getters.lan)?("<span>删除用户</span>"):("<span>DELETE ACCOUNT</span>"))+"</button> <button class=\"button\">"+((this.$store.getters.lan)?("<span>更改语言</span>"):("<span>LANGUAGE SETTING</span>"))+"</button> <button class=\"button\">"+((this.$store.getters.lan)?("<span>退出登陆</span>"):("<span>LOGOUT</span>"))+"</button></div>")],2):(_vm.pop_up == 'account_modify')?_c('account-modify',{staticClass:"pop-up font-fonts mt-10 mx-auto text-center",on:{"finish":_vm.toggle}}):(_vm.pop_up == 'password')?_c('password-modify',{staticClass:"pop-up font-fonts mt-10 mx-auto text-center",on:{"finish":_vm.toggle}}):(_vm.pop_up == 'deleteUser')?_c('delete-account',{staticClass:"pop-up font-fonts mt-10 mx-auto text-center",on:{"finish":_vm.toggle}}):(_vm.pop_up == 'language')?_c('lanuage-setting',{attrs:{"lass":"pop-up font-fonts mt-10 mx-auto text-center"},on:{"finish":_vm.toggle}}):_vm._e()],2)],2),_vm._ssrNode(" "),_c('bottom-bar')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/setting.vue?vue&type=template&id=7e08b2e4&

// EXTERNAL MODULE: ./components/public/bottomBar.vue + 4 modules
var bottomBar = __webpack_require__(42);

// EXTERNAL MODULE: ./components/public/searchBar.vue + 4 modules
var searchBar = __webpack_require__(44);

// EXTERNAL MODULE: ./components/public/sideBar.vue + 4 modules
var sideBar = __webpack_require__(33);

// EXTERNAL MODULE: ./components/settingPage/accountModify.vue + 4 modules
var accountModify = __webpack_require__(65);

// EXTERNAL MODULE: ./components/settingPage/deleteAccount.vue + 4 modules
var deleteAccount = __webpack_require__(66);

// EXTERNAL MODULE: ./components/settingPage/lanuageSetting.vue + 4 modules
var lanuageSetting = __webpack_require__(67);

// EXTERNAL MODULE: ./components/settingPage/passwordModify.vue + 4 modules
var passwordModify = __webpack_require__(68);

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var settingvue_type_script_lang_js_ = ({
  components: {
    SideBar: sideBar["default"],
    searchBar: searchBar["default"],
    AccountModify: accountModify["default"],
    BottomBar: bottomBar["default"],
    PasswordModify: passwordModify["default"],
    DeleteAccount: deleteAccount["default"],
    LanuageSetting: lanuageSetting["default"]
  },

  data() {
    return {
      pop_up: "menu"
    };
  },

  computed: {
    lang() {
      return this.$store.getters.lan;
    }

  },
  methods: {
    toggle(data) {
      this.pop_up = data;
    },

    logout() {
      external_vue_cookies_default.a.remove('user');
      external_vue_cookies_default.a.remove('token');
      this.$router.push('/login');
    }

  }
});
// CONCATENATED MODULE: ./pages/setting.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingvue_type_script_lang_js_ = (settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/setting.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3cdd0a44"
  
)

/* harmony default export */ var setting = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=setting.js.map