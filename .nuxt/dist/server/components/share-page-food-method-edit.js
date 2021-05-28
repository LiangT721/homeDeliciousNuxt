exports.ids = [33,17,18,19];
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

/***/ })

};;
//# sourceMappingURL=share-page-food-method-edit.js.map