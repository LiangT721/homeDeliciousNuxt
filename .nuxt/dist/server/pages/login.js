exports.ids = [42,11,17,18,19];
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

/***/ 29:
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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loginPage/signUp.vue?vue&type=template&id=1e639efe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-3/4 md:w-1/3 bg-white shadow-2xl py-10 text-center font-fonts rounded-md"},[_vm._ssrNode("<h3 class=\"mb-5 text-2xl uppercase\" data-v-1e639efe>"+((this.$store.getters.lan)?("<span data-v-1e639efe>用户注册</span>"):("<span data-v-1e639efe>Sign Up</span>"))+"</h3> <p class=\"capitalize mt-3\" data-v-1e639efe>"+((this.$store.getters.lan)?("<span data-v-1e639efe>用户名</span>"):("<span data-v-1e639efe>username</span>"))+"</p> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.username)))+" class=\"border rounded-md border-gray-600\" data-v-1e639efe> <p class=\"capitalize mt-3\" data-v-1e639efe>"+((this.$store.getters.lan)?("<span data-v-1e639efe>密码</span>"):("<span data-v-1e639efe>password</span>"))+"</p> <input type=\"password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"border rounded-sm border-gray-600\" data-v-1e639efe> <p class=\"capitalize mt-3\" data-v-1e639efe>"+((this.$store.getters.lan)?("<span data-v-1e639efe>电子邮箱</span>"):("<span data-v-1e639efe>email</span>"))+"</p> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"border rounded-md border-gray-600\" data-v-1e639efe> <p class=\"capitalize mt-3\" data-v-1e639efe>"+((this.$store.getters.lan)?("<span data-v-1e639efe>生日</span>"):("<span data-v-1e639efe>birthday</span>"))+"</p> <input type=\"date\""+(_vm._ssrAttr("value",(_vm.birthday)))+" class=\"border rounded-md border-gray-600\" data-v-1e639efe> <p class=\"capitalize mt-3\" data-v-1e639efe>"+((this.$store.getters.lan)?("<span data-v-1e639efe>所在地</span>"):("<span data-v-1e639efe>location</span>"))+"</p> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.location)))+" class=\"border rounded-md border-gray-600\" data-v-1e639efe> <p class=\"capitalize mt-3\" data-v-1e639efe>"+((this.$store.getters.lan)?("<span data-v-1e639efe>简介</span>"):("<span data-v-1e639efe>bio</span>"))+"</p> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.bio)))+" class=\"border rounded-md border-gray-600\" data-v-1e639efe> <p class=\"capitalize mt-3\" data-v-1e639efe>"+((this.$store.getters.lan)?("<span data-v-1e639efe>头像</span>"):("<span data-v-1e639efe>icon</span>"))+"</p> "),_c('image-upload',{staticClass:"mt-3",attrs:{"image_type":_vm.type_user},on:{"newImage":_vm.newImage}}),_vm._ssrNode(" "),(_vm.icon)?_c('image-preview',{staticClass:"image-preview h-20 w-20 mx-auto relative pt-5",attrs:{"image_url":_vm.icon,"image_type":_vm.type_user},on:{"delete_res":_vm.delete_res}}):_vm._e(),_vm._ssrNode(" <div class=\"btn-area mt-10\" data-v-1e639efe><button class=\"button\" data-v-1e639efe>"+((this.$store.getters.lan)?("<span data-v-1e639efe>注册</span>"):("<span data-v-1e639efe>SignUp</span>"))+"</button> <button class=\"button\" data-v-1e639efe>"+((this.$store.getters.lan)?("<span data-v-1e639efe>返回</span>"):("<span data-v-1e639efe>Back</span>"))+"</button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/loginPage/signUp.vue?vue&type=template&id=1e639efe&scoped=true&

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// EXTERNAL MODULE: ./components/public/imageUpload.vue + 4 modules
var imageUpload = __webpack_require__(24);

// EXTERNAL MODULE: ./components/public/imagePreview.vue + 4 modules
var imagePreview = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loginPage/signUp.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var signUpvue_type_script_lang_js_ = ({
  components: {
    imageUpload: imageUpload["default"],
    ImagePreview: imagePreview["default"]
  },

  data() {
    return {
      username: "",
      password: "",
      email: "",
      birthday: "",
      location: "",
      bio: "",
      icon: "",
      type_user: "user"
    };
  },

  props: {
    image_type: {
      type: String
    }
  },
  methods: {
    async signUp() {
      await this.$axios({
        url: "/api/users",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
          email: this.email,
          birthday: this.birthday,
          location: this.location,
          bio: this.bio,
          icon: this.icon
        }
      }).then(response => {
        console.log(response.data);
        this.user = response.data;
        external_vue_cookies_default.a.set("user", response.data);
        external_vue_cookies_default.a.set("token", response.data.token);
        this.$router.push("/");
      }).catch(error => {
        console.log(error);
      });
    },

    back() {
      this.$emit("pop_up_false", false);
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
          alert('Delete falied');
          break;

        default:
          break;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/loginPage/signUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var loginPage_signUpvue_type_script_lang_js_ = (signUpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/loginPage/signUp.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  loginPage_signUpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e639efe",
  "33fe6fe4"
  
)

/* harmony default export */ var signUp = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.294a429.png";

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=12575430&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-screen h-screen bg-primary grid justify-items-center content-center gap-y-10 relative"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(77)))+" alt class=\"w-1/3 md:w-1/6\" data-v-12575430> <div class=\"login-windows mx-auto self-center\" data-v-12575430><p class=\"reg-title uppercase text-xl\" data-v-12575430>Login In</p> <br data-v-12575430> <p class=\"reg-title mt-2\" data-v-12575430>username</p> <input type=\"text\" placeholder=\"username\""+(_vm._ssrAttr("value",(_vm.username)))+" class=\"input mt-2\" data-v-12575430> <p class=\"reg-title mt-2\" data-v-12575430>password</p> <input type=\"password\" placeholder=\"password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"input mt-2\" data-v-12575430> <div class=\"mt-3 btn flex justify-around\" data-v-12575430><button class=\"button\" data-v-12575430>Login</button> <button class=\"button\" data-v-12575430>back</button></div> <p class=\"other text-center mt-10\" data-v-12575430>\n      or\n      <span class=\"ml-2 cursor-pointer underline hover:text-fontColorlight\" data-v-12575430>Sign up</span></p> <div class=\"enter absolute bottom-5 w-full left-0 text-center\" data-v-12575430>"+((_vm.lan)?("<div data-v-12575430>\n        直接进入<u class=\"cursor-pointer\" data-v-12575430>主页</u></div>"):("<div data-v-12575430>\n        Go to the\n        <u class=\"cursor-pointer\" data-v-12575430>homepage</u> without login\n      </div>"))+"</div></div> "),(_vm.signup_pop_ups)?_vm._ssrNode("<div class=\"absolute w-full h-full flex\" data-v-12575430>","</div>",[_vm._ssrNode("<div class=\"sign-up-bg w-full h-full absolute z-10\" data-v-12575430></div> "),_c('sign-up',{staticClass:"self-center mx-auto z-20",on:{"pop_up_false":_vm.pop_up_false}})],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=12575430&scoped=true&

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// EXTERNAL MODULE: ./components/loginPage/signUp.vue + 4 modules
var signUp = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  components: {
    signUp: signUp["default"]
  },

  data() {
    return {
      username: "",
      password: "",
      user: null,
      signup_pop_ups: false
    };
  },

  computed: {
    lan() {
      return this.$store.getters.lan;
    }

  },
  methods: {
    async login() {
      const data = {
        username: this.username,
        password: this.password
      };
      const result = await this.$axios.$post("https://homedelicious.ml/api/login", data).catch(() => {
        alert("Username or Password is incorrect!");
      });

      if (result) {
        console.log(result);
        external_vue_cookies_default.a.set("token", result.token);
        external_vue_cookies_default.a.set("user", result);
        this.$router.push("/");
      }
    },

    pop_up_false() {
      console.log(this.signup_pop_ups);
      this.signup_pop_ups = false;
    },

    back() {
      window.history.back();
    },

    homepage() {
      this.$router.push("/");
    }

  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "12575430",
  "1e305ddd"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map