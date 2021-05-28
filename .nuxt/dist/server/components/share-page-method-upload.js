exports.ids = [34,17,18,19,32,33];
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/foodIngredientsEdit.vue?vue&type=template&id=674134fe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-5 content-start gap-y-3 font-fonts"},[_vm._ssrNode("<p class=\"food-name text-3xl font-bold mb-5\" data-v-674134fe>ingredients:</p> "+(_vm._ssrList((_vm.ingredients),function(ingredient){return ("<div class=\"grid grid-cols-9 my-3 text-md gap-x-2 ml-2\" data-v-674134fe><div class=\"col-span-1 flex justify-end\" data-v-674134fe><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-5 w-5\" data-v-674134fe><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\" data-v-674134fe></path></svg></div> <input type=\"text\""+(_vm._ssrAttr("value",(ingredient.ingredient)))+" class=\"col-span-4\" data-v-674134fe> <input type=\"text\""+(_vm._ssrAttr("value",(ingredient.amount)))+" class=\"col-span-4\" data-v-674134fe> <hr class=\"mt-3 col-span-9\" data-v-674134fe></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sharePage/foodIngredientsEdit.vue?vue&type=template&id=674134fe&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/foodIngredientsEdit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var foodIngredientsEditvue_type_script_lang_js_ = ({
  computed: {
    ingredients() {
      return this.$store.getters.ingredient_preview;
    }

  },
  methods: {
    ingredientUpdate(index) {
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.ingredients));
      console.log(data);

      for (let val of data) {
        if (val.id == index) {
          val.ingredient = event.target.value;
        }

        newData += `${val.ingredient}<###**%%###>${val.amount}<###**^^###>`;
      }

      console.log(newData);
      this.$store.commit("foodIngredients_temp_Edit", newData);
    },

    ingredientDelete(index) {
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.ingredients));
      console.log(data);

      for (let val of data) {
        if (val.id != index) {
          newData += `${val.ingredient}<###**%%###>${val.amount}<###**^^###>`;
        }
      }

      console.log(newData);
      this.$store.commit("foodIngredients_temp_Edit", newData);
    }

  }
});
// CONCATENATED MODULE: ./components/sharePage/foodIngredientsEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var sharePage_foodIngredientsEditvue_type_script_lang_js_ = (foodIngredientsEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sharePage/foodIngredientsEdit.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sharePage_foodIngredientsEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "674134fe",
  "2130fe90"
  
)

/* harmony default export */ var foodIngredientsEdit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/foodMethodEdit.vue?vue&type=template&id=6661331d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-5 content-start gap-y-3 font-fonts"},[_vm._ssrNode("<p class=\"food-name text-3xl font-bold mb-5\" data-v-6661331d>Methods:</p> "),_vm._l((_vm.processes),function(process){return _vm._ssrNode("<div class=\"mb-5 bg-white p-5 shadow-md rounded-xl md:px-8 md:py-3 \" data-v-6661331d>","</div>",[_vm._ssrNode("<p class=\"uppercase text-center text-xl mb-8 font-semibold relative md:mb-3\" data-v-6661331d>"+_vm._ssrEscape("\n      Step : "+_vm._s(process.id + 1)+"\n      ")+"<span class=\"absolute right-0 cursor-pointer text-shadow\" data-v-6661331d><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6\" data-v-6661331d><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16\" data-v-6661331d></path></svg></span></p> "),_vm._ssrNode("<div class=\"md:grid md:grid-cols-3 md:items-start md:w-full md:mx-auto md:h-40 md:border md:border-fontColordark rounded-md overflow-hidden\" data-v-6661331d>","</div>",[_vm._ssrNode("<textarea name=\"method-text\" id rows=\"5\""+(_vm._ssrClass("font-thin w-full text-justify mx-auto h-40 md:w-full md:h-full md:col-span-2 border border-black md:border-none",process.order))+" data-v-6661331d>"+_vm._ssrEscape(_vm._s(process.text))+"</textarea> "),(process.img)?_c('image-preview',{staticClass:"h-52 overflow-hidden md:order-1 md:h-full md:col-span-1",attrs:{"image_type":"image","image_url":process.img},on:{"delete_res":function($event){return _vm.delete_res(process.id)}}}):_c('div',{staticClass:"md:py-10 bg-barBgc h-full border border-primary"},[_c('p',{staticClass:"text-center"},[(_vm.lan)?_c('span',[_vm._v("添加图片")]):_c('span',[_vm._v("Add photo")])]),_vm._v(" "),_c('image-upload',{attrs:{"id":process.id},on:{"newImage":_vm.newImage}})],1)],2),_vm._ssrNode(" <hr class=\"col-span-3 md:mb-10 md:w-5/6 md:mx-auto\" data-v-6661331d>")],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sharePage/foodMethodEdit.vue?vue&type=template&id=6661331d&scoped=true&

// EXTERNAL MODULE: ./components/public/imagePreview.vue + 4 modules
var imagePreview = __webpack_require__(30);

// EXTERNAL MODULE: ./components/public/imageUpload.vue + 4 modules
var imageUpload = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/foodMethodEdit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var foodMethodEditvue_type_script_lang_js_ = ({
  components: {
    imagePreview: imagePreview["default"],
    ImageUpload: imageUpload["default"]
  },

  data() {
    return {
      text: ""
    };
  },

  watch: {
    processes(newValue) {
      console.log(newValue);
      newValue.map((value, index) => {
        value.order = `md:order-${value.id % 2 + 1}`;
        console.log(value);
      });
    }

  },
  computed: {
    processes() {
      return this.$store.getters.method_preview;
    },

    lan() {
      return this.$store.getters.lan;
    }

  },
  methods: {
    processUpdate(index) {
      console.log(index);
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.processes));
      console.log(data);

      for (let val of data) {
        if (val.id == index) {
          val.text = event.target.value;
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        } else {
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        }
      }

      console.log(newData);
      this.$store.commit("foodMethods_temp_Edit", newData);
    },

    newImage(url, index) {
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.processes));
      console.log(data);

      for (let val of data) {
        if (val.id == index) {
          val.img = url;
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        }
      }

      console.log(newData);
      this.$store.commit("foodMethods_temp_Edit", newData);
    },

    delete_res(index) {
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.processes));
      console.log(data);

      for (let val of data) {
        if (val.id == index) {
          val.img = "";
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        }
      }

      console.log(newData);
      this.$store.commit("foodMethods_temp_Edit", newData);
    },

    delete_step(index) {
      console.log(index);
      let newData = "";
      let data = JSON.parse(JSON.stringify(this.processes));
      console.log(data);

      for (let val of data) {
        if (val.id != index) {
          newData += `${val.text}<###**%%###>${val.img}<###**^^###>`;
        }
      }

      console.log(newData);
      this.$store.commit("foodMethods_temp_Edit", newData);
    }

  }
});
// CONCATENATED MODULE: ./components/sharePage/foodMethodEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var sharePage_foodMethodEditvue_type_script_lang_js_ = (foodMethodEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sharePage/foodMethodEdit.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sharePage_foodMethodEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6661331d",
  "f877d622"
  
)

/* harmony default export */ var foodMethodEdit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/methodUpload.vue?vue&type=template&id=7344073e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"font-fonts"},[_vm._ssrNode("<div class=\"ingredients px-6 py-5 content-start gap-y-3 font-fonts md:w-3/4 mx-auto md:px-0\" data-v-7344073e>","</div>",[_vm._ssrNode("<div class=\"ingredient-preview\" data-v-7344073e>","</div>",[_c('food-ingredients-edit')],1),_vm._ssrNode(" <div class=\"ingredient-preview-input grid grid-cols-9 my-3 text-md gap-x-2 ml-2\" data-v-7344073e><div class=\"col-span-1\" data-v-7344073e></div> <input type=\"text\" placeholder=\"Butter\""+(_vm._ssrAttr("value",(_vm.material)))+" class=\"col-span-4\" data-v-7344073e> <input type=\"text\" placeholder=\"150g\""+(_vm._ssrAttr("value",(_vm.amount)))+" class=\"col-span-4\" data-v-7344073e> <div class=\"btns col-span-9 flex justify-center my-10\" data-v-7344073e><button class=\"button\" data-v-7344073e>"+((this.$store.getters.lan)?("<span data-v-7344073e>添加原料</span>"):("<span data-v-7344073e>Add ingredients</span>"))+"</button></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"processes w-5/6 mx-auto px-0 py-5 content-start gap-y-3 md:w-3/4\" data-v-7344073e>","</div>",[(_vm.methods)?_c('food-method-edit'):_vm._e(),_vm._ssrNode(" <textarea name id cols=\"30\" rows=\"8\""+(_vm._ssrAttr("placeholder",_vm.textarea_placeholder))+" class=\"w-full\" data-v-7344073e>"+_vm._ssrEscape(_vm._s(_vm.method_text))+"</textarea> "),_vm._ssrNode("<div class=\"image text-center m-5\" data-v-7344073e>","</div>",[_vm._ssrNode("<p data-v-7344073e>"+((this.$store.getters.lan)?("<span data-v-7344073e>添加图片</span>"):("<span data-v-7344073e>Add Photo</span>"))+"</p> "),(_vm.image_url)?_c('image-preview',{staticClass:"h-40 md:w-1/2 mx-auto md:h-56",attrs:{"image_url":_vm.image_url,"image_type":"image"}}):_c('image-upload',{on:{"newImage":_vm.newImage}})],2),_vm._ssrNode(" <div class=\"btns flex justify-center\" data-v-7344073e><button class=\"button\" data-v-7344073e>"+((this.$store.getters.lan)?("<span data-v-7344073e>添加步骤</span>"):("<span data-v-7344073e>Add Methods</span>"))+"</button></div>")],2),_vm._ssrNode(" <div class=\"submit-btns flex justify-center\" data-v-7344073e><button class=\"button\" data-v-7344073e>"+((this.$store.getters.lan)?("<span data-v-7344073e>确认上传</span>"):("<span data-v-7344073e>comfirm Upload</span>"))+"</button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sharePage/methodUpload.vue?vue&type=template&id=7344073e&scoped=true&

// EXTERNAL MODULE: ./components/public/imagePreview.vue + 4 modules
var imagePreview = __webpack_require__(30);

// EXTERNAL MODULE: ./components/public/imageUpload.vue + 4 modules
var imageUpload = __webpack_require__(25);

// EXTERNAL MODULE: ./components/sharePage/foodIngredientsEdit.vue + 4 modules
var foodIngredientsEdit = __webpack_require__(50);

// EXTERNAL MODULE: ./components/sharePage/foodMethodEdit.vue + 4 modules
var foodMethodEdit = __webpack_require__(51);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: external "vue-cookies"
var external_vue_cookies_ = __webpack_require__(3);
var external_vue_cookies_default = /*#__PURE__*/__webpack_require__.n(external_vue_cookies_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sharePage/methodUpload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var methodUploadvue_type_script_lang_js_ = ({
  components: {
    foodIngredientsEdit: foodIngredientsEdit["default"],
    FoodMethodEdit: foodMethodEdit["default"],
    ImageUpload: imageUpload["default"],
    ImagePreview: imagePreview["default"]
  },

  data() {
    return {
      material: "",
      amount: "",
      ingredient_preview: "",
      method_text: "",
      image_url: '',
      methods_preview: ''
    };
  },

  methods: {
    add_material() {
      this.ingredient_preview = JSON.parse(JSON.stringify(this.$store.state.foodIngredients_temp));
      console.log(this.ingredient_preview);

      if (this.ingredient_preview == null) {
        console.log('aa');
        this.ingredient_preview = '';
      }

      this.ingredient_preview += `${this.material}<###**%%###>${this.amount}<###**^^###>`;
      this.material = this.amount = "";
      this.$store.commit("foodIngredients_temp_Edit", this.ingredient_preview);
    },

    newImage(data) {
      console.log(data);
      this.image_url = data;
      console.log(this.image_url);
    },

    addMethod() {
      this.methods_preview = JSON.parse(JSON.stringify(this.$store.state.foodMethods_temp));
      console.log(this.methods_preview);

      if (this.methods_preview == null) {
        this.methods_preview = '';
      }

      this.methods_preview += `${this.method_text}<###**%%###>${this.image_url}<###**^^###>`;
      this.method_text = this.image_url = '';
      this.$store.commit('foodMethods_temp_Edit', this.methods_preview);
    },

    async uploadMethod() {
      console.log(this.ingredients);
      console.log(this.methods);
      console.log(this.foodId);
      console.log(external_vue_cookies_default.a.get('token'));

      if (this.ingredients == null && this.methods == null) {
        if (this.$store.getters.lan) {
          alert("你没有输入任何原料或步骤");
        } else {
          alert("You haven't enter any ingredient and methods..");
        }
      } else {
        await this.$axios({
          url: '/api/methods',
          method: 'post',
          data: {
            token: external_vue_cookies_default.a.get('token'),
            food_id: this.foodId,
            ingredient: this.ingredients,
            process: this.methods
          }
        }).then(res => {
          console.log(res.data);
          this.$emit('finish', this.foodId);
        }).catch(err => alert(err));
      }
    }

  },
  computed: {
    textarea_placeholder() {
      if (this.$store.state.foodIngredients_temp) {
        return "请输入你的步骤...";
      } else {
        return "Please input your processes...";
      }
    },

    ...Object(external_vuex_["mapState"])({
      ingredients: state => state.foodIngredients_temp,
      methods: state => state.foodMethods_temp,
      foodId: state => state.foodUpload_Id
    })
  }
});
// CONCATENATED MODULE: ./components/sharePage/methodUpload.vue?vue&type=script&lang=js&
 /* harmony default export */ var sharePage_methodUploadvue_type_script_lang_js_ = (methodUploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sharePage/methodUpload.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sharePage_methodUploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7344073e",
  "29a7f6b0"
  
)

/* harmony default export */ var methodUpload = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=share-page-method-upload.js.map