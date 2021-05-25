exports.ids = [30];
exports.modules = {

/***/ 69:
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
  "0f2a1b0a"
  
)

/* harmony default export */ var passwordModify = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=setting-page-password-modify.js.map