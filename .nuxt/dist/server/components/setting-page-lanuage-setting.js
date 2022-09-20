exports.ids = [28];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=setting-page-lanuage-setting.js.map