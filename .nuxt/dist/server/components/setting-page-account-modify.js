exports.ids = [25,17,19,27,29];
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

/***/ })

};;
//# sourceMappingURL=setting-page-account-modify.js.map