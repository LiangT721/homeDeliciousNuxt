exports.ids = [40,3,4,5,6,7,8,12,14,16,20,22,23];
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

/***/ 43:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 45:
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

/***/ 46:
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

/***/ 47:
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

/***/ 48:
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_foodInfoText_vue_vue_type_style_index_0_id_6ca8e1fb_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodIngredients.vue?vue&type=template&id=41d89c44&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-6 py-5 content-start gap-y-3 font-fonts"},[_vm._ssrNode("<p class=\"food-name text-3xl font-bold mb-5\" data-v-41d89c44>ingredients:</p> "+(_vm._ssrList((_vm.ingredients),function(ingredient){return ("<div class=\"grid grid-cols-5 my-3 text-md gap-x-2 ml-2\" data-v-41d89c44><li class=\"col-span-3\" data-v-41d89c44>"+_vm._ssrEscape(_vm._s(ingredient.ingredient))+"</li> <p class=\"col-span-2 \" data-v-41d89c44>"+_vm._ssrEscape(_vm._s(ingredient.amount))+"</p> <hr class=\"mt-3 col-span-5\" data-v-41d89c44></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/food.vue/foodIngredients.vue?vue&type=template&id=41d89c44&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodIngredients.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var foodIngredientsvue_type_script_lang_js_ = ({
  computed: {
    ingredients() {
      return this.$store.getters.ingredient_preview;
    }

  }
});
// CONCATENATED MODULE: ./components/food.vue/foodIngredients.vue?vue&type=script&lang=js&
 /* harmony default export */ var food_vue_foodIngredientsvue_type_script_lang_js_ = (foodIngredientsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/food.vue/foodIngredients.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  food_vue_foodIngredientsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "41d89c44",
  "3d42c6b0"
  
)

/* harmony default export */ var foodIngredients = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodMethods.vue?vue&type=template&id=716fd2f1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"px-6 py-5 content-start gap-y-3 font-fonts"},[_vm._ssrNode("<p class=\"food-name text-3xl font-bold mb-5\" data-v-716fd2f1>Methods:</p> "+(_vm._ssrList((_vm.processes),function(process){return ("<div class=\"mb-5 bg-primary py-5 px-6 shadow-md rounded-xl md:px-8 md:py-3 md:bg-opacity-0 md:shadow-none\" data-v-716fd2f1><p class=\"uppercase text-center text-xl mb-8 font-semibold relative md:mb-3\" data-v-716fd2f1>"+_vm._ssrEscape("\n      Step:"+_vm._s(process.id + 1)+"\n    ")+"</p> <div class=\"md:grid md:grid-cols-3 md:items-start md:w-full md:mx-auto md:h-40  md:rounded-md overflow-hidden md:shadow-xl md:bg-primary\" data-v-716fd2f1>"+((process.img)?("<img"+(_vm._ssrAttr("src",process.img))+" alt"+(_vm._ssrClass("h-48 overflow-hidden  w-full object-cover md:h-full md:col-span-1",process.order))+" data-v-716fd2f1>"):"<!---->")+" <p class=\"font-fonts font-semibold w-full text-justify mx-auto h-auto mt-5 p-3 md:h-full md:col-span-2 md:order-1 md:mt-0 md:p-5\" data-v-716fd2f1>"+_vm._ssrEscape("\n        "+_vm._s(process.text)+"\n      ")+"</p></div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/food.vue/foodMethods.vue?vue&type=template&id=716fd2f1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/food.vue/foodMethods.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var foodMethodsvue_type_script_lang_js_ = ({
  computed: {
    processes() {
      return this.$store.getters.method_preview;
    }

  },
  watch: {
    processes(newValue) {
      newValue.map((value, index) => {
        value.order = `md:order-${value.id % 2 + 1}`;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/food.vue/foodMethods.vue?vue&type=script&lang=js&
 /* harmony default export */ var food_vue_foodMethodsvue_type_script_lang_js_ = (foodMethodsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/food.vue/foodMethods.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  food_vue_foodMethodsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "716fd2f1",
  "3ae7eca0"
  
)

/* harmony default export */ var foodMethods = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/food/_foodId.vue?vue&type=template&id=a4facba6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-background"},[_vm._ssrNode("<div class=\"page\" data-v-a4facba6>","</div>",[_vm._ssrNode("<div class=\"left\" data-v-a4facba6>","</div>",[_c('side-bar')],1),_vm._ssrNode(" "),(_vm.loading)?_vm._ssrNode("<div class=\"right md:grid md:grid-cols-2 -mb-4\" data-v-a4facba6>","</div>",[_vm._ssrNode("<div class=\"back fixed z-10 md:hidden\" data-v-a4facba6><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-10 w-10 bg-gray-200 rounded-lg shadow-2xl m-3 cursor-pointer\" data-v-a4facba6><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z\" data-v-a4facba6></path></svg></div> "),_c('food-photo',{staticClass:"h-h60Screen md:col-span-1 sticky top-0 z-0"}),_vm._ssrNode(" "),_c('food-info-text',{staticClass:"rounded-t-3xl bg-white md:col-span-1 md:sticky md:top-0 md:h-h60Screen z-20 relative",attrs:{"checkUser":_vm.checkUser}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"methods-part bg-white md:col-span-2 z-20 relative -top-4 py-10 md:-top-8\" data-v-a4facba6>","</div>",[(_vm.MethodsDisplay)?_vm._ssrNode("<div class=\"md:w-3/4 mx-auto\" data-v-a4facba6>","</div>",[(_vm.ingredientDisplay)?_c('food-ingredients',{attrs:{"ingredients":_vm.MethodsData.ingredient}}):_vm._e(),_vm._ssrNode(" "),(_vm.processDisplay)?_c('food-methods',{attrs:{"processes":_vm.MethodsData.process}}):_vm._e()],2):_vm._ssrNode(("<div class=\"text-center py-10 text-xl font-fonts\" data-v-a4facba6>"+((_vm.checkUser)?("<div data-v-a4facba6>"+((_vm.lan)?("<span data-v-a4facba6>你还没有分享他的制作方法</span>"):("<span data-v-a4facba6>You haven't shared your recipe</span>"))+"</div>"):("<div data-v-a4facba6>"+((_vm.lan)?("<span data-v-a4facba6>作者还没有分享他的制作方法</span>"):("<span data-v-a4facba6>Author hasn't shared the recipe</span>"))+"</div>"))+" "+((_vm.checkUser)?("<button class=\"button my-10\" data-v-a4facba6>"+((_vm.lan)?("<span data-v-a4facba6>分享你的的制作方法</span>"):("<span data-v-a4facba6>Shared your recipe</span>"))+"</button>"):"<!---->")+"</div>")),_vm._ssrNode(" <div class=\"splitter h-splitter bg-gray-300 w-11/12 mb-10 mx-auto\" data-v-a4facba6></div> "),_c('rate-grade',{attrs:{"food":_vm.ShowFood}})],2)],2):_vm._e()],2),_vm._ssrNode(" "),_c('bottom-bar')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/food/_foodId.vue?vue&type=template&id=a4facba6&scoped=true&

// EXTERNAL MODULE: ./components/food.vue/foodInfoText.vue + 4 modules
var foodInfoText = __webpack_require__(46);

// EXTERNAL MODULE: ./components/food.vue/foodIngredients.vue + 4 modules
var foodIngredients = __webpack_require__(59);

// EXTERNAL MODULE: ./components/food.vue/foodMethods.vue + 4 modules
var foodMethods = __webpack_require__(60);

// EXTERNAL MODULE: ./components/food.vue/foodPhoto.vue + 4 modules
var foodPhoto = __webpack_require__(47);

// EXTERNAL MODULE: ./components/food.vue/rateGrade.vue + 4 modules
var rateGrade = __webpack_require__(74);

// EXTERNAL MODULE: ./components/public/bottomBar.vue + 4 modules
var bottomBar = __webpack_require__(42);

// EXTERNAL MODULE: ./components/public/sideBar.vue + 4 modules
var sideBar = __webpack_require__(33);

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/food/_foodId.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var _foodIdvue_type_script_lang_js_ = ({
  components: {
    sideBar: sideBar["default"],
    FoodPhoto: foodPhoto["default"],
    FoodInfoText: foodInfoText["default"],
    FoodIngredients: foodIngredients["default"],
    FoodMethods: foodMethods["default"],
    BottomBar: bottomBar["default"],
    RateGrade: rateGrade["default"]
  },

  data() {
    return {
      loading: false,
      ShowFood: {},
      MethodsData: {},
      MethodsDisplay: true,
      ingredientDisplay: true,
      processDisplay: true
    };
  },

  props: {
    food: {
      type: Object
    }
  },
  computed: {
    lan() {
      return this.$store.getters.lan;
    },

    checkUser() {
      if (external_vue_cookies_default.a.get("user")) {
        return Boolean(external_vue_cookies_default.a.get("user").user_id == this.ShowFood.user_id);
      } else {
        return false;
      }
    }

  },

  async asyncData({
    params
  }) {
    const foodId = params.foodId; // When calling /abc the slug will be "abc"

    return {
      foodId
    };
  },

  methods: {
    back() {
      window.history.back();
    },

    async getFood() {
      const params = {
        food_id: this.foodId
      };
      const res = await this.$axios.get("/api/foods", {
        params
      });
      this.ShowFood = res.data;
      this.$store.commit("foodInfo_temp_Edit", res.data);
      this.loading = true;
    },

    async getMethod() {
      const params = {
        food_id: this.foodId
      };
      const res = await this.$axios.get("/api/methods", {
        params
      });

      if (res.data.ingredient == "" && res.data.process == "") {
        this.MethodsDisplay = false;
      }

      if (res.data.ingredient == "") {
        this.ingredientDisplay = false;
      }

      if (res.data.process == "") {
        this.processDisplay = false;
      }

      this.$store.commit("foodIngredients_temp_Edit", res.data.ingredient);
      this.$store.commit("foodMethods_temp_Edit", res.data.process);
    }

  },

  mounted() {
    this.getFood();
    this.getMethod();
  }

});
// CONCATENATED MODULE: ./pages/food/_foodId.vue?vue&type=script&lang=js&
 /* harmony default export */ var food_foodIdvue_type_script_lang_js_ = (_foodIdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/food/_foodId.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  food_foodIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a4facba6",
  "d51fa114"
  
)

/* harmony default export */ var _foodId = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FoodPhoto: __webpack_require__(47).default,FoodInfoText: __webpack_require__(46).default,FoodIngredients: __webpack_require__(59).default,FoodMethods: __webpack_require__(60).default})


/***/ })

};;
//# sourceMappingURL=_foodId.js.map