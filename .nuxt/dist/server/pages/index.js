exports.ids = [41,9,10,12,14,15,16,20,21,22,23];
exports.modules = {

/***/ 26:
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

/***/ 27:
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fryer.9e9d3ef.png";

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/frying-pan.fb1eea1.png";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/oven.dd28fbb.png";

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pot.a98f008.png";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/salad.20a4d04.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/steamer.111d57f.png";

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-card.e318e46.png";

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/foodCard.vue?vue&type=template&id=253acdb1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-3/4 mx-auto mb-16 py-2 px-3 bg-white h-28 rounded-2xl shadow-md grid grid-cols-5 md:max-w-md md:h-32"},[_vm._ssrNode("<div class=\"col-span-2 relative grid justify-items-center items-end cursor-pointer\" data-v-253acdb1><img"+(_vm._ssrAttr("src",_vm.food_img))+" alt srcset class=\"object-cover w-full h-full rounded-l-2xl absolute top-0\" data-v-253acdb1> <img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt class=\"w-1/4 relative \" data-v-253acdb1></div> "),_vm._ssrNode("<div class=\"col-span-3 px-3 grid grid-cols-5 text-xs\" data-v-253acdb1>","</div>",[_c('grade',{staticClass:"col-span-4",attrs:{"grade":_vm.card.grade,"icon_size":"text-sm"}}),_vm._ssrNode(" "),_c('collection',{staticClass:"col-span-1",attrs:{"food":_vm.card}}),_vm._ssrNode(" <div class=\"title col-span-5 text-fontColorlight\" data-v-253acdb1>"+_vm._ssrEscape("\n      "+_vm._s(_vm.card.food_category)+"\n    ")+"</div> <div class=\"food-name col-span-5 text-sm max-h-10 overflow-hidden font-semibold\" data-v-253acdb1>"+_vm._ssrEscape("\n      "+_vm._s(_vm.card.food_name)+"\n    ")+"</div> <div class=\"user col-span-5 text-fontColorlight cursor-pointer\" data-v-253acdb1>\n      by <span data-v-253acdb1>"+_vm._ssrEscape(_vm._s(_vm.card.username))+"</span> <img"+(_vm._ssrAttr("src",_vm.card.icon))+" alt class=\"icon\" data-v-253acdb1></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/foodCard.vue?vue&type=template&id=253acdb1&scoped=true&

// EXTERNAL MODULE: ./components/public/collection.vue + 4 modules
var collection = __webpack_require__(26);

// EXTERNAL MODULE: ./components/public/grade.vue + 4 modules
var grade = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/foodCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var foodCardvue_type_script_lang_js_ = ({
  components: {
    grade: grade["default"],
    Collection: collection["default"]
  },
  props: {
    card: {
      type: Object
    },
    grade: {
      type: String
    }
  },
  methods: {
    toFoodPage() {
      this.$router.push(`/food/${this.card.food_id}`);
    },

    toUserPage() {
      this.$router.push(`/user/${this.card.user_id}`);
    }

  },
  computed: {
    food_img() {
      if (this.card.image != null) {
        const imgList = this.card.image.split('<###^^&&###>');
        return imgList[0];
      } else {
        return null;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/public/foodCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var public_foodCardvue_type_script_lang_js_ = (foodCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/public/foodCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  public_foodCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "253acdb1",
  "86401002"
  
)

/* harmony default export */ var foodCard = __webpack_exports__["default"] = (component.exports);

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

/***/ 53:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendList_vue_vue_type_style_index_0_id_149030b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendList_vue_vue_type_style_index_0_id_149030b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendList_vue_vue_type_style_index_0_id_149030b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendList_vue_vue_type_style_index_0_id_149030b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendList_vue_vue_type_style_index_0_id_149030b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homePage/selectionBar.vue?vue&type=template&id=987728d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-screen p-5 md:w-full md:h-24 md:overflow-hidden "},[_vm._ssrNode("<ul class=\"overflow-x-scroll overflow-y-hidden whitespace-nowrap  md:w-full md:flex md:pb-3 md:justify-evenly\" data-v-987728d6><li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcFry }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-987728d6></li> <li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcDeepFry }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt data-v-987728d6></li> <li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcBake }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt data-v-987728d6></li> <li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcStew }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(37)))+" alt data-v-987728d6></li> <li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcSalad }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt data-v-987728d6></li> <li class=\"category-icon\""+(_vm._ssrStyle(null,{ backgroundColor: _vm.bgcSteam }, null))+" data-v-987728d6><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt data-v-987728d6></li></ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/homePage/selectionBar.vue?vue&type=template&id=987728d6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homePage/selectionBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var selectionBarvue_type_script_lang_js_ = ({
  data() {
    return {
      bgcFry: "#FFCAD4",
      bgcStew: "#F3F6F4",
      bgcBake: "#F3F6F4",
      bgcDeepFry: "#F3F6F4",
      bgcSalad: "#F3F6F4",
      bgcSteam: "#F3F6F4"
    };
  },

  methods: {
    select_category(data) {
      switch (data) {
        case "fry":
          this.bgcFry = "#FFCAD4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;

        case "deep fry":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#FFCAD4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;

        case "stew":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#FFCAD4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;

        case "bake":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#FFCAD4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;

        case "salad":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#FFCAD4";
          this.bgcSteam = "#F3F6F4";
          this.$store.commit("select_homepage_category", data);
          break;

        case "steam":
          this.bgcFry = "#F3F6F4";
          this.bgcStew = "#F3F6F4";
          this.bgcBake = "#F3F6F4";
          this.bgcDeepFry = "#F3F6F4";
          this.bgcSalad = "#F3F6F4";
          this.bgcSteam = "#FFCAD4";
          this.$store.commit("select_homepage_category", data);
          break;

        default:
          break;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/homePage/selectionBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var homePage_selectionBarvue_type_script_lang_js_ = (selectionBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/homePage/selectionBar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homePage_selectionBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "987728d6",
  "2be45cd3"
  
)

/* harmony default export */ var selectionBar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homePage/trendList.vue?vue&type=template&id=149030b6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-screen h-full md:w-full"},[_c('hooper',{staticClass:"w-full",staticStyle:{"height":"100%"},attrs:{"itemsToShow":1.3,"centerMode":true,"autoPlay":false}},[_vm._l((_vm.slides),function(food){return _c('slide',{key:food.food_id,staticClass:"h-full"},[_c('div',{staticClass:"slider-border w-5/6 mx-auto mt-5 h-full"},[_c('img',{staticClass:"w-full object-cover h-3/4 rounded-lg shadow-lg",attrs:{"src":food.image,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"trend-card w-3/4 h-1/3 bg-white mx-auto relative rounded-lg shadow-lg -top-20 grid grid-cols-5 py-2 px-3 text-xs font-fonts md:w-1/2 md:h-1/5"},[_c('div',{staticClass:"grade col-span-4"},[_c('grade',{attrs:{"grade":food.grade}})],1),_vm._v(" "),_c('div',{staticClass:"collection col-span-1"},[_c('collection',{attrs:{"food":food}})],1),_vm._v(" "),_c('div',{staticClass:"title col-span-5 text-fontColorlight"},[_vm._v("Top 5 Review")]),_vm._v(" "),_c('div',{staticClass:"food-name col-span-5 text-sm font-semibold"},[_vm._v("\n            "+_vm._s(food.food_name)+"\n          ")]),_vm._v(" "),_c('div',{staticClass:"user col-span-5 text-fontColorlight"},[_vm._v("\n            by "),_c('span',[_vm._v(_vm._s(food.username))]),_vm._v(" "),_c('img',{staticClass:"icon",attrs:{"src":food.icon,"alt":""}})])])])])}),_vm._v(" "),_c('hooper-navigation',{attrs:{"slot":"hooper-addons"},slot:"hooper-addons"})],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/homePage/trendList.vue?vue&type=template&id=149030b6&scoped=true&

// EXTERNAL MODULE: external "hooper"
var external_hooper_ = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/hooper/dist/hooper.css
var hooper = __webpack_require__(57);

// EXTERNAL MODULE: ./components/public/grade.vue + 4 modules
var grade = __webpack_require__(27);

// EXTERNAL MODULE: ./components/public/collection.vue + 4 modules
var collection = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homePage/trendList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var trendListvue_type_script_lang_js_ = ({
  components: {
    Hooper: external_hooper_["Hooper"],
    Slide: external_hooper_["Slide"],
    HooperNavigation: external_hooper_["Navigation"],
    Grade: grade["default"],
    Collection: collection["default"]
  },

  data() {
    return {
      slides: []
    };
  },

  props: {
    grade: {
      type: String
    }
  },
  methods: {
    async fetchSomething() {
      const resulte = await this.$axios.$get("https://homedelicious.ml/api/foods", {
        params: {
          rate: 1
        }
      });
      this.slides = resulte.slice(0, 5);

      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].image = this.slides[i].image.split("<###^^&&###>")[0];
      }
    }

  },

  mounted() {
    this.fetchSomething();
  }

});
// CONCATENATED MODULE: ./components/homePage/trendList.vue?vue&type=script&lang=js&
 /* harmony default export */ var homePage_trendListvue_type_script_lang_js_ = (trendListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/homePage/trendList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homePage_trendListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "149030b6",
  "8491e2c2"
  
)

/* harmony default export */ var trendList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=08c59f38&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-primary"},[_vm._ssrNode("<div class=\"page\">","</div>",[_vm._ssrNode("<div class=\"top mt-10\">","</div>",[_vm._ssrNode("<div class=\"logo col-span-3\">","</div>",[_c('logo',{staticClass:"ml-5 mt-2"})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"img h-20 col-span-2 flex items-center justify-center\">","</div>",[_c('user-icon',{staticClass:"h-full"})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"left\">","</div>",[_c('side-bar')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right\">","</div>",[_vm._ssrNode("<div class=\"search-bar mt-10\">","</div>",[_c('search-bar')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"home-slide h-80 md:h-half\">","</div>",[_c('trend-list')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"selection-bar sticky top-20 z-30 bg-primary md:h-32\">","</div>",[_c('selection-bar')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"home-food-card-part lg:grid lg:grid-cols-2\">","</div>",_vm._l((_vm.card_list),function(card){return _vm._ssrNode("<div class=\"md:col-span-1\">","</div>",[_c('food-card',{attrs:{"card":card}})],1)}),0)],2)],2),_vm._ssrNode(" "),_c('bottom-bar')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=08c59f38&

// EXTERNAL MODULE: ./components/homePage/selectionBar.vue + 4 modules
var selectionBar = __webpack_require__(75);

// EXTERNAL MODULE: ./components/homePage/trendList.vue + 4 modules
var trendList = __webpack_require__(76);

// EXTERNAL MODULE: ./components/public/logo.vue + 4 modules
var logo = __webpack_require__(32);

// EXTERNAL MODULE: ./components/public/searchBar.vue + 4 modules
var searchBar = __webpack_require__(44);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/public/foodCard.vue + 4 modules
var foodCard = __webpack_require__(41);

// EXTERNAL MODULE: ./components/public/bottomBar.vue + 4 modules
var bottomBar = __webpack_require__(42);

// EXTERNAL MODULE: ./components/public/sideBar.vue + 4 modules
var sideBar = __webpack_require__(33);

// EXTERNAL MODULE: ./components/public/userIcon.vue + 4 modules
var userIcon = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Logo: logo["default"],
    SearchBar: searchBar["default"],
    TrendList: trendList["default"],
    SelectionBar: selectionBar["default"],
    FoodCard: foodCard["default"],
    BottomBar: bottomBar["default"],
    SideBar: sideBar["default"],
    UserIcon: userIcon["default"]
  },

  data() {
    return {
      card_list: []
    };
  },

  props: {
    card: {
      type: Object
    }
  },
  computed: { ...Object(external_vuex_["mapState"])({
      category_selected: state => state.homepage_category_seleted
    }),

    user() {
      return this.$store.getters.defaultUser;
    }

  },
  methods: {
    async fetch_food_by_cate() {
      const params = {
        cooking_way: this.category_selected
      };
      const result = await this.$axios.$get("/api/foods", {
        params
      });
      this.card_list = result;
    },

    async getCollectionList() {
      if (this.user.user_id) {
        const params = {
          user_id: this.user.user_id
        };
        const res = await this.$axios.get("/api/collection", {
          params
        });
        this.$store.commit("setCollectionList", res.data);
      }
    }

  },
  watch: {
    category_selected(newValue) {
      console.log(newValue);
      this.fetch_food_by_cate();
    }

  },

  mounted() {
    this.fetch_food_by_cate();
    this.getCollectionList();
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5488bac6"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map