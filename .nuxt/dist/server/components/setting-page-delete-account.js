exports.ids = [26];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=setting-page-delete-account.js.map