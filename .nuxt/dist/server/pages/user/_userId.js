exports.ids = [47,12,14,15,16,20,21,22,23,35,36,37];
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/userPage/userCollectionCards.vue?vue&type=template&id=1e1a8c7c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.collectionList),function(card){return _vm._ssrNode("<div data-v-1e1a8c7c>","</div>",[_c('food-card',{attrs:{"card":card}})],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/userPage/userCollectionCards.vue?vue&type=template&id=1e1a8c7c&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/public/foodCard.vue + 4 modules
var foodCard = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/userPage/userCollectionCards.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var userCollectionCardsvue_type_script_lang_js_ = ({
  components: {
    foodCard: foodCard["default"]
  },
  computed: { ...Object(external_vuex_["mapState"])({
      collectionList: state => state.collectionList
    })
  },

  mounted() {
    console.log(this.collectionList);
  }

});
// CONCATENATED MODULE: ./components/userPage/userCollectionCards.vue?vue&type=script&lang=js&
 /* harmony default export */ var userPage_userCollectionCardsvue_type_script_lang_js_ = (userCollectionCardsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/userPage/userCollectionCards.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  userPage_userCollectionCardsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e1a8c7c",
  "c471556c"
  
)

/* harmony default export */ var userCollectionCards = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/userPage/userFoodCards.vue?vue&type=template&id=0fdfa69c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.user_productions),function(card){return _vm._ssrNode("<div data-v-0fdfa69c>","</div>",[_c('food-card',{attrs:{"card":card}})],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/userPage/userFoodCards.vue?vue&type=template&id=0fdfa69c&scoped=true&

// EXTERNAL MODULE: ./components/public/foodCard.vue + 4 modules
var foodCard = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/userPage/userFoodCards.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var userFoodCardsvue_type_script_lang_js_ = ({
  components: {
    foodCard: foodCard["default"]
  },

  data() {
    return {
      user_productions: ''
    };
  },

  props: {
    userId: {
      type: String
    }
  },
  methods: {
    async getUserProductions() {
      const params = {
        user_id: this.userId
      };
      const res = await this.$axios.get('/api/foods', {
        params
      });
      this.user_productions = res.data;
      console.log(this.user_productions);
    }

  },

  mounted() {
    this.getUserProductions();
  }

});
// CONCATENATED MODULE: ./components/userPage/userFoodCards.vue?vue&type=script&lang=js&
 /* harmony default export */ var userPage_userFoodCardsvue_type_script_lang_js_ = (userFoodCardsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/userPage/userFoodCards.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  userPage_userFoodCardsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0fdfa69c",
  "47370d4a"
  
)

/* harmony default export */ var userFoodCards = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
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
  "321a6dee"
  
)

/* harmony default export */ var userPageToggle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_userId.vue?vue&type=template&id=0ba5ecf0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-background"},[_vm._ssrNode("<div class=\"page\" data-v-0ba5ecf0>","</div>",[_vm._ssrNode("<div class=\"left\" data-v-0ba5ecf0>","</div>",[_c('side-bar')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right\" data-v-0ba5ecf0>","</div>",[_vm._ssrNode("<div class=\"search-bar mt-10\" data-v-0ba5ecf0>","</div>",[_c('search-bar')],1),_vm._ssrNode(" "+((_vm.user)?("<div class=\"user-info max-h-64 py-5 px-5 text-fontColordark grid grid-cols-5 md:max-w-2xl md:mx-auto md:py-10\" data-v-0ba5ecf0><div class=\"text col-span-3 px-5 font-fonts text-sm grid gap-y-2\" data-v-0ba5ecf0><p class=\"text-3xl font-bold\" data-v-0ba5ecf0>"+_vm._ssrEscape(_vm._s(_vm.user.username))+"</p> <p data-v-0ba5ecf0>"+((this.$store.getters.lan)?("<span data-v-0ba5ecf0>所在地</span>"):("<span data-v-0ba5ecf0>Location</span>"))+_vm._ssrEscape(": "+_vm._s(_vm.user.location)+"\n          ")+"</p> <p data-v-0ba5ecf0>"+((this.$store.getters.lan)?("<span data-v-0ba5ecf0>生日</span>"):("<span data-v-0ba5ecf0>Birthday</span>"))+_vm._ssrEscape(": "+_vm._s(_vm.user.birthday)+"\n          ")+"</p> <p data-v-0ba5ecf0>"+((this.$store.getters.lan)?("<span data-v-0ba5ecf0>加入时间</span>"):("<span data-v-0ba5ecf0>Join Date</span>"))+_vm._ssrEscape(": "+_vm._s(_vm.user.join_date)+"\n          ")+"</p> <p data-v-0ba5ecf0>"+((this.$store.getters.lan)?("<span data-v-0ba5ecf0>个人简介</span>"):("<span data-v-0ba5ecf0>Bio</span>"))+_vm._ssrEscape(": "+_vm._s(_vm.user.bio)+"\n          ")+"</p></div> <div class=\"icon col-span-2\" data-v-0ba5ecf0><img"+(_vm._ssrAttr("src",_vm.user.icon))+" alt class=\"rounded-round w-3/4 mx-auto md:w-1/2\" data-v-0ba5ecf0></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"card-area\" data-v-0ba5ecf0>","</div>",[_c('user-page-toggle',{staticClass:"md:hidden"}),_vm._ssrNode(" "),(_vm.userPageToggle)?_c('user-food-cards',{attrs:{"userId":_vm.userId}}):_c('user-collection-cards')],2)],2)],2),_vm._ssrNode(" "),_c('bottom-bar')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_userId.vue?vue&type=template&id=0ba5ecf0&scoped=true&

// EXTERNAL MODULE: ./components/public/bottomBar.vue + 4 modules
var bottomBar = __webpack_require__(42);

// EXTERNAL MODULE: ./components/public/searchBar.vue + 4 modules
var searchBar = __webpack_require__(44);

// EXTERNAL MODULE: ./components/public/sideBar.vue + 4 modules
var sideBar = __webpack_require__(33);

// EXTERNAL MODULE: ./components/userPage/userCollectionCards.vue + 4 modules
var userCollectionCards = __webpack_require__(61);

// EXTERNAL MODULE: ./components/userPage/userFoodCards.vue + 4 modules
var userFoodCards = __webpack_require__(62);

// EXTERNAL MODULE: ./components/userPage/userPageToggle.vue + 4 modules
var userPageToggle = __webpack_require__(63);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_userId.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var _userIdvue_type_script_lang_js_ = ({
  components: {
    sideBar: sideBar["default"],
    SearchBar: searchBar["default"],
    BottomBar: bottomBar["default"],
    UserPageToggle: userPageToggle["default"],
    UserFoodCards: userFoodCards["default"],
    UserCollectionCards: userCollectionCards["default"]
  },

  data() {
    return {
      user: null
    };
  },

  async asyncData({
    params
  }) {
    const userId = params.userId; // When calling /abc the slug will be "abc"

    return {
      userId
    };
  },

  computed: { ...Object(external_vuex_["mapState"])({
      userPageToggle: state => state.userPageToggle
    }),

    defaultUser() {
      return this.$store.getters.defaultUser;
    }

  },
  methods: {
    confirmLogin() {
      let res = confirm("Please login your account.");

      if (res == true) {
        this.$router.push("/login");
      }
    },

    async getUsers() {
      console.log(this.defaultUser);
      console.log(this.userId);
      let params;

      if (this.userId) {
        params = {
          user_id: this.userId
        };
      } else {
        params = {
          user_id: this.defaultUser.user_id
        };
      }

      console.log(params);
      const res = await this.$axios.get("/api/users", {
        params
      });
      this.user = res.data;
      console.log(this.user);
    }

  },

  mounted() {
    this.getUsers();
  }

});
// CONCATENATED MODULE: ./pages/user/_userId.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_userIdvue_type_script_lang_js_ = (_userIdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/_userId.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_userIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ba5ecf0",
  "37d5a5e0"
  
)

/* harmony default export */ var _userId = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UserPageToggle: __webpack_require__(63).default,UserFoodCards: __webpack_require__(62).default,UserCollectionCards: __webpack_require__(61).default})


/***/ })

};;
//# sourceMappingURL=_userId.js.map