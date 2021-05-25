exports.ids = [31,17,18,19];
exports.modules = {

/***/ 24:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/public/imageUpload.vue?vue&type=template&id=463eb198&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid justify-items-center"},[(_vm.if_loading)?_c('icon-loading'):_c('input',{staticClass:"w-1/2",attrs:{"type":"file","accept":"image/*"},on:{"change":_vm.onchange}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/public/imageUpload.vue?vue&type=template&id=463eb198&scoped=true&

// EXTERNAL MODULE: ./components/public/iconLoading.vue + 4 modules
var iconLoading = __webpack_require__(29);

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
  "895efbbe"
  
)

/* harmony default export */ var imageUpload = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_iconLoading_vue_vue_type_style_index_0_id_3079d279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
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
  
  var style0 = __webpack_require__(26)
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
  "58b485e8"
  
)

/* harmony default export */ var iconLoading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
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
  "24ef0958"
  
)

/* harmony default export */ var imagePreview = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/food.d45b11e.png";

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/foodInfoUpload.vue?vue&type=template&id=4bf8708e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-area grid gap-y-4 text-lg font-fonts"},[_vm._ssrNode("<div class=\"images bg-white\" data-v-4bf8708e>","</div>",[_vm._ssrNode("<div class=\"image-preview\" data-v-4bf8708e>","</div>",_vm._l((_vm.pre_img_list),function(image){return _vm._ssrNode("<div class=\"relative\" data-v-4bf8708e>","</div>",[_c('image-preview',{staticClass:"h-half",attrs:{"image_url":image.url,"image_type":_vm.imageType},on:{"delete_res":function($event){return _vm.delete_res(image.id)}}})],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"upload py-10 text-center\" data-v-4bf8708e>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(53)))+" alt class=\"w-1/3 mx-auto\" data-v-4bf8708e> <p data-v-4bf8708e>Please upload you food photo</p> "),_c('image-upload',{on:{"newImage":_vm.newImage}})],2)],2),_vm._ssrNode(" <div class=\"food-name\" data-v-4bf8708e><input type=\"text\" name=\"food-name\" placeholder=\"Food name\""+(_vm._ssrAttr("value",(_vm.food_name)))+" class=\"w-full px-5\" data-v-4bf8708e></div> <div class=\"food-description\" data-v-4bf8708e><textarea name=\"food-description\" cols=\"40\" rows=\"5\" placeholder=\"Tell us about your food...\" class=\"w-full px-5\" data-v-4bf8708e>"+_vm._ssrEscape(_vm._s(_vm.food_description))+"</textarea></div> <div class=\"cooking-way info-line-between\" data-v-4bf8708e><span data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>烹饪方式：</span>"):("<span data-v-4bf8708e>Cooking method： </span>"))+"</span> <span data-v-4bf8708e><span class=\"required\" data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>必填</span>"):("<span data-v-4bf8708e>Required</span>"))+"</span> "+((this.$store.getters.lan)?("<select name=\"cook\" id=\"cook\" class=\"select\" data-v-4bf8708e><option value=\"fry\" class=\"option\" data-v-4bf8708e>炒</option> <option value=\"deep fry\" class=\"option\" data-v-4bf8708e>炸</option> <option value=\"stew\" class=\"option\" data-v-4bf8708e>炖</option> <option value=\"steam\" class=\"option\" data-v-4bf8708e>蒸</option> <option value=\"bake\" class=\"option\" data-v-4bf8708e>烤</option> <option value=\"salad\" class=\"option\" data-v-4bf8708e>拌</option></select>"):("<select name=\"cook\" id=\"cook\" class=\"select\" data-v-4bf8708e><option value=\"fry\" class=\"option\" data-v-4bf8708e>fry</option> <option value=\"deep fry\" class=\"option\" data-v-4bf8708e>deep fry</option> <option value=\"stew\" class=\"option\" data-v-4bf8708e>stew</option> <option value=\"steam\" class=\"option\" data-v-4bf8708e>steam</option> <option value=\"bake\" class=\"option\" data-v-4bf8708e>bake</option> <option value=\"salad\" class=\"option\" data-v-4bf8708e>salad</option></select>"))+"</span></div> <div class=\"diffculty info-line-between\" data-v-4bf8708e><div data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>难度：</span>"):("<span data-v-4bf8708e>difficulty：</span>"))+"</div> <div data-v-4bf8708e><span class=\"required\" data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>必填</span>"):("<span data-v-4bf8708e>Required</span>"))+"</span> "+((this.$store.getters.lan)?("<select id=\"difficult\" name=\"difficult\" class=\"select\" data-v-4bf8708e><option value=\"easy\" class=\"option\" data-v-4bf8708e>简单</option> <option value=\"medium\" class=\"option\" data-v-4bf8708e>中等</option> <option value=\"difficult\" class=\"option\" data-v-4bf8708e>困难</option> <option value=\"super\" class=\"option\" data-v-4bf8708e>大师</option></select>"):("<select id=\"difficult\" name=\"difficult\" class=\"select\" data-v-4bf8708e><option value=\"easy\" class=\"option\" data-v-4bf8708e>easy</option> <option value=\"medium\" class=\"option\" data-v-4bf8708e>medium</option> <option value=\"difficult\" class=\"option\" data-v-4bf8708e>difficult</option> <option value=\"super\" class=\"option\" data-v-4bf8708e>super</option></select>"))+"</div></div> <div class=\"cook-time info-line-between\" data-v-4bf8708e><div data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>烹饪时间：</span>"):("<span data-v-4bf8708e>Cook Time:</span>"))+"</div> <div class=\"flex items-center\" data-v-4bf8708e><div class=\"required\" data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>必填</span>"):("<span data-v-4bf8708e>Required</span>"))+"</div> <input type=\"text\" placeholder=\"30\""+(_vm._ssrAttr("value",(_vm.time)))+" class=\"select w-16 mr-2\" data-v-4bf8708e> "+((this.$store.getters.lan)?("<span data-v-4bf8708e>分钟</span>"):("<span data-v-4bf8708e>Min</span>"))+"</div></div> <div class=\"location info-line-between\" data-v-4bf8708e><div data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>地域：</span>"):("<span data-v-4bf8708e>Location:</span>"))+"</div> <input type=\"text\" placeholder=\"Calgary\""+(_vm._ssrAttr("value",(_vm.location)))+" class=\"select w-24 mr-2\" data-v-4bf8708e></div> <div class=\"category info-line-between\" data-v-4bf8708e><div data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>类别：</span>"):("<span data-v-4bf8708e>Category:</span>"))+"</div> <input type=\"text\" placeholder=\"pasta\""+(_vm._ssrAttr("value",(_vm.category)))+" class=\"select w-24 mr-2\" data-v-4bf8708e></div> <div class=\"tag info-line-between\" data-v-4bf8708e><div data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>标签：</span>"):("<span data-v-4bf8708e>Tag:</span>"))+"</div> <input type=\"text\" placeholder=\"for kids\""+(_vm._ssrAttr("value",(_vm.tag)))+" class=\"select w-24 mr-2\" data-v-4bf8708e></div> <div class=\"language info-line-between\" data-v-4bf8708e><div data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>语言：</span>"):("<span data-v-4bf8708e>Language:</span>"))+"</div> <div data-v-4bf8708e><span class=\"required\" data-v-4bf8708e>"+((this.$store.getters.lan)?("<span data-v-4bf8708e>必填</span>"):("<span data-v-4bf8708e>Required</span>"))+"</span> <select id=\"language\" name=\"语言\" class=\"select\" data-v-4bf8708e><option value=\"English\" class=\"option\" data-v-4bf8708e>English</option> <option value=\"Chinese\" class=\"option\" data-v-4bf8708e>中文</option></select></div></div> <div class=\"previewbtn flex justify-center\" data-v-4bf8708e><button class=\"button\" data-v-4bf8708e>Preview</button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sharePage/foodInfoUpload.vue?vue&type=template&id=4bf8708e&scoped=true&

// EXTERNAL MODULE: ./components/public/imagePreview.vue + 4 modules
var imagePreview = __webpack_require__(30);

// EXTERNAL MODULE: ./components/public/imageUpload.vue + 4 modules
var imageUpload = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/foodInfoUpload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var foodInfoUploadvue_type_script_lang_js_ = ({
  components: {
    ImageUpload: imageUpload["default"],
    ImagePreview: imagePreview["default"]
  },

  data() {
    return {
      images: "",
      food_preview: {},
      pre_img_list: [],
      imageType: "image",
      imageUrl: "",
      food_name: "",
      food_description: "",
      time: "",
      location: "",
      category: "",
      tag: "",
      cook_way: "fry",
      difficulty: "easy",
      lang: "English"
    };
  },

  computed: {
    user() {
      return this.$store.state.user;
    }

  },
  methods: {
    newImage(data) {
      this.imageUrl = data;
      const index = this.pre_img_list.length;
      const image = {
        id: index,
        url: this.imageUrl
      };
      this.pre_img_list.push(image);
    },

    delete_res(index) {
      for (let val in this.pre_img_list) {
        if (this.pre_img_list[val].id == index) {
          this.pre_img_list.splice(val, 1);
        }
      }
    },

    Cook() {
      this.cook_way = document.getElementById("cook").value;
      console.log(this.cook_way);
    },

    Difficulty() {
      this.difficulty = document.getElementById("difficult").value;
      console.log(this.difficulty);
    },

    Language() {
      this.lang = document.getElementById("language").value;
      console.log(this.lang);
    },

    preview() {
      for (let img of this.pre_img_list) {
        this.images += `${img.url}<###^^&&###>`;
      }

      const data = {
        username: this.user.username,
        food_name: this.food_name,
        food_description: this.food_description,
        cooking_time: this.time,
        food_location: this.location,
        food_category: this.category,
        tag: this.tag,
        cooking_way: this.cook_way,
        difficulty: this.difficulty,
        image: this.images,
        icon: this.user.icon,
        collection: false,
        lang: this.lang
      }; // console.log(data)

      this.$store.commit('sharePageContentToggle', 'infoPreview');
      this.$store.commit('foodInfo_temp_Edit', data);
    }

  }
});
// CONCATENATED MODULE: ./components/sharePage/foodInfoUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var sharePage_foodInfoUploadvue_type_script_lang_js_ = (foodInfoUploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sharePage/foodInfoUpload.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sharePage_foodInfoUploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4bf8708e",
  "33dbdcb3"
  
)

/* harmony default export */ var foodInfoUpload = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=share-page-food-info-upload.js.map