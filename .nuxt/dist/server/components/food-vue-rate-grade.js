exports.ids = [8,23];
exports.modules = {

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

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/rateGrade.vue?vue&type=template&id=50670b80&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('user-icon',{staticClass:"w-20 h-20 mx-auto"}),_vm._ssrNode(" <ul class=\"list grid grid-cols-5 justify-items-center text-4xl w-1/3 mx-auto my-10\" data-v-50670b80><li data-v-50670b80>"+((_vm.grade > 0)?("<span class=\"text-yellow-400 cursor-pointer\" data-v-50670b80>★</span>"):("<span class=\"cursor-pointer\" data-v-50670b80>☆</span>"))+"</li> <li data-v-50670b80>"+((_vm.grade > 1)?("<span class=\"text-yellow-400 cursor-pointer\" data-v-50670b80>★</span>"):("<span class=\"cursor-pointer\" data-v-50670b80>☆</span>"))+"</li> <li data-v-50670b80>"+((_vm.grade > 2)?("<span class=\"text-yellow-400 cursor-pointer\" data-v-50670b80>★</span>"):("<span class=\"cursor-pointer\" data-v-50670b80>☆</span>"))+"</li> <li data-v-50670b80>"+((_vm.grade > 3)?("<span class=\"text-yellow-400 cursor-pointer\" data-v-50670b80>★</span>"):("<span class=\"cursor-pointer\" data-v-50670b80>☆</span>"))+"</li> <li data-v-50670b80>"+((_vm.grade > 4)?("<span class=\"text-yellow-400 cursor-pointer\" data-v-50670b80>★</span>"):("<span class=\"cursor-pointer\" data-v-50670b80>☆</span>"))+"</li></ul>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/food.vue/rateGrade.vue?vue&type=template&id=50670b80&scoped=true&

// EXTERNAL MODULE: ./components/public/userIcon.vue + 4 modules
var userIcon = __webpack_require__(30);

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/rateGrade.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var rateGradevue_type_script_lang_js_ = ({
  components: {
    userIcon: userIcon["default"]
  },
  props: {
    food: {
      type: Object
    }
  },

  data() {
    return {
      grade: this.food.grade
    };
  },

  methods: {
    async rate(data) {
      console.log(data);
      console.log(this.grade);

      if (this.grade == 0) {
        console.log("a");
        await this.$axios({
          url: "/api/grade",
          method: "post",
          data: {
            food_id: this.food.food_id,
            token: external_vue_cookies_default.a.get("token"),
            grade: data
          }
        }).then(res => {
          console.log(res.data);
          this.grade = data;
        }).catch(err => {
          alert(err);
        });
      } else {
        console.log("b");
        await this.$axios({
          url: "/api/grade",
          method: "patch",
          data: {
            food_id: this.food.food_id,
            token: external_vue_cookies_default.a.get("token"),
            grade: data
          }
        }).then(res => {
          console.log(res.data);
          this.grade = res.data;
        }).catch(err => {
          alert(err);
        });
      }
    }

  },

  mounted() {}

});
// CONCATENATED MODULE: ./components/food.vue/rateGrade.vue?vue&type=script&lang=js&
 /* harmony default export */ var food_vue_rateGradevue_type_script_lang_js_ = (rateGradevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/food.vue/rateGrade.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  food_vue_rateGradevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "50670b80",
  "2bdbd583"
  
)

/* harmony default export */ var rateGrade = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=food-vue-rate-grade.js.map