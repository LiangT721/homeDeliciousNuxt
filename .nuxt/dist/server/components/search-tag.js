exports.ids = [24];
exports.modules = {

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searchPage.vue/searchTag.vue?vue&type=template&id=14f8b52e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search-tag font-fonts grid gap-y-12"},[_vm._ssrNode("<div class=\"cate h-60 w-full overflow-hidden\" data-v-14f8b52e><h3 class=\"font-medium text-lg pb-3\" data-v-14f8b52e>"+((this.$store.getters.lan)?("<span data-v-14f8b52e>按地域或类别搜索：</span>"):("<span data-v-14f8b52e>Search by category or location:</span>"))+"</h3> <div class=\"flex flex-wrap justify-between mx-2\" data-v-14f8b52e>"+(_vm._ssrList((_vm.cateLocation),function(tag,index){return (((tag[0] != '')?("<div class=\"uppercase border-b-2 border-fontColordark mr-6 mb-2 cursor-pointer\" data-v-14f8b52e>"+_vm._ssrEscape("\n        "+_vm._s(tag[0])+"\n      ")+"</div>"):"<!---->"))}))+"</div></div> <div class=\"tag h-60 w-full overflow-hidden\" data-v-14f8b52e><h3 class=\"font-medium text-lg pb-3\" data-v-14f8b52e>"+((this.$store.getters.lan)?("<span data-v-14f8b52e>按标签搜索：</span>"):("<span data-v-14f8b52e>Search by tag:</span>"))+"</h3> <div class=\"flex flex-wrap justify-between mx-2\" data-v-14f8b52e>"+(_vm._ssrList((_vm.tags),function(tag,index){return (((tag[0] != '')?("<div class=\"uppercase border-b-2 border-fontColordark mr-6 mb-2 cursor-pointer\" data-v-14f8b52e>"+_vm._ssrEscape("\n        "+_vm._s(tag[0])+"\n      ")+"</div>"):"<!---->"))}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/searchPage.vue/searchTag.vue?vue&type=template&id=14f8b52e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searchPage.vue/searchTag.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var searchTagvue_type_script_lang_js_ = ({
  data() {
    return {
      cateLocation: [],
      tags: []
    };
  },

  methods: {
    async getTagOfCateLocation() {
      const params = {
        searchTag: "cateLocation"
      };
      const res = await this.$axios.get("/api/tags", {
        params
      });
      this.cateLocation = res.data;
    },

    async getTagOfTags() {
      const params = {
        searchTag: "tag"
      };
      const res = await this.$axios.get("/api/tags", {
        params
      });
      this.tags = res.data;
    },

    async searchClick(data1, data2) {
      const params = {
        searchTag: data2,
        content: data1
      };
      const res = await this.$axios.get("/api/search", {
        params
      });
      this.$store.commit('setSearchRes', res.data);
      this.$router.push('/search/result');
    }

  },

  mounted() {
    this.getTagOfCateLocation();
    this.getTagOfTags();
  }

});
// CONCATENATED MODULE: ./components/searchPage.vue/searchTag.vue?vue&type=script&lang=js&
 /* harmony default export */ var searchPage_vue_searchTagvue_type_script_lang_js_ = (searchTagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/searchPage.vue/searchTag.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  searchPage_vue_searchTagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "14f8b52e",
  "44793e37"
  
)

/* harmony default export */ var searchTag = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search-tag.js.map