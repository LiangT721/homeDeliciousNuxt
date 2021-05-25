exports.ids = [37];
exports.modules = {

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/userPage/userPageToggle.vue?vue&type=template&id=0b2fe4e1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex justify-center my-5 font-fonts uppercase"},[_vm._ssrNode("<div class=\"mx-3 grid justify-items-center\" data-v-0b2fe4e1>\n    production\n    <div"+(_vm._ssrClass("h-1 bg-pink-600 rounded-sm transition-all duration-300",_vm.production))+" data-v-0b2fe4e1></div></div> <div class=\"mx-3 transition-all grid justify-items-center\" data-v-0b2fe4e1>\n    collection\n    <div"+(_vm._ssrClass("h-1 bg-pink-600 rounded-sm transition-all duration-300",_vm.collection))+" data-v-0b2fe4e1></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/userPage/userPageToggle.vue?vue&type=template&id=0b2fe4e1&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/userPage/userPageToggle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var userPageTogglevue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  computed: { ...Object(external_vuex_["mapState"])({
      userPageToggle: state => state.userPageToggle
    }),

    production() {
      return this.$store.getters.production_class;
    },

    collection() {
      return this.$store.getters.collection_class;
    }

  },
  methods: {
    select(data) {
      this.$store.commit("userPage_shift", data);
    }

  }
});
// CONCATENATED MODULE: ./components/userPage/userPageToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var userPage_userPageTogglevue_type_script_lang_js_ = (userPageTogglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/userPage/userPageToggle.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  userPage_userPageTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b2fe4e1",
  "60617630"
  
)

/* harmony default export */ var userPageToggle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=user-page-toggle.js.map