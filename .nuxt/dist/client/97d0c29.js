(window.webpackJsonp=window.webpackJsonp||[]).push([[25,23,26],{356:function(t,e,n){"use strict";n.r(e);var r=n(44),o=n.n(r),c={computed:{iconPath:function(){return this.$store.state.user.icon}},mounted:function(){o.a.get("user")&&this.$store.commit("setUser",o.a.get("user"))}},l=n(42),component=Object(l.a)(c,(function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("img",{staticClass:"icon-title",attrs:{src:e.iconPath,alt:""},on:{click:function(){t.$router.push("/setting")}}})])}),[],!1,null,"5a7d5e23",null);e.default=component.exports},362:function(t,e,n){t.exports=n.p+"img/logo-C.285d67b.png"},363:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid"},[r("div",{staticClass:"title text-2xl font-title items-center text-center"},[r("img",{staticClass:"h-8 inline -mt-2",attrs:{src:n(362),alt:""}}),t._v(" "),r("span",{staticClass:"text-fontColorlight items-end"},[t._v("Home Delicious")])]),t._v(" "),r("div",{staticClass:"slogen font-bold text-xl font-fonts text-center"},[r("span",{staticClass:"mr-5"},[t._v("Trending")]),t._v(" "),r("span",{staticClass:"text-fontColorlight"},[t._v("Food")])])])}],o={},c=n(42),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"f49e63cc",null);e.default=component.exports},365:function(t,e,n){n(366)},366:function(t,e,n){"use strict";var r=n(2),o=n(18),c=n(99),l=n(100),h=n(213),f=n(3),v=n(24),d=f("replace"),m=RegExp.prototype,_=Math.max,C=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,f,$,x,S,P,w,O=o(this),k=0,y=0,E="";if(null!=t){if((n=c(t))&&!~String(o("flags"in m?t.flags:l.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=t[d]))return r.call(t,O,e);if(v&&n)return String(O).replace(t,e)}for(f=String(O),$=String(t),(x="function"==typeof e)||(e=String(e)),S=$.length,P=_(1,S),k=C(f,$,0);-1!==k;)w=x?String(e($,k,f)):h($,f,k,[],void 0,e),E+=f.slice(y,k)+w,y=k+S,k=C(f,$,k+P);return y<f.length&&(E+=f.slice(y)),E}})},367:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(55),n(134),n(365),n(68),n(69),n(43),n(44)),c=n.n(o),l=n(363),h=n(356),f={components:{logo:l.default,UserIcon:h.default},data:function(){return{home:"button_select",user:"",collection:"",share:"",search:"",select:"button_select",unSelect:""}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.params,n;case 2:case"end":return e.stop()}}),e)})))()},methods:{toPath:function(data){this.$router.push(data)},confirmLogin:function(){1==confirm("Please login your account.")&&this.$router.push("/login")},toProduction:function(){if(c.a.get("user")){var t=c.a.get("user").user_id;t&&(this.$store.commit("userPage_shift",!0),this.$router.push("/user/".concat(t)),this.user=this.select,this.home=this.collection=this.share=this.search=this.unSelect)}else this.confirmLogin()},toCollection:function(){if(c.a.get("user")){var t=c.a.get("user").user_id;t&&(this.$store.commit("userPage_shift",!1),this.$router.push("/user/".concat(t)),this.collection=this.select,this.home=this.user=this.share=this.search=this.unSelect)}else this.confirmLogin()},sharePage:function(){c.a.get("user")?this.$router.push("/share"):this.confirmLogin()},logout:function(){c.a.remove("token"),c.a.remove("user"),this.$router.push("/login")}},computed:{userInfo:function(){return c.a.get("user")}},mounted:function(){var path=this.$route.path.replaceAll("/","");""==path&&(this.home=this.select,this.user=this.collection=this.share=this.search=this.unSelect),path.includes("user")&&(this.$store.state.userPageToggle?(this.user=this.select,this.home=this.collection=this.share=this.search=this.unSelect):(this.collection=this.select,this.home=this.user=this.share=this.search=this.unSelect)),"share"==path&&(this.share=this.select,this.user=this.collection=this.home=this.search=this.unSelect),path.includes("search")&&(this.search=this.select,this.user=this.collection=this.share=this.home=this.unSelect)}},v=n(42),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-bar-md h-screen w-full sticky top-0 py-20"},[n("logo"),t._v(" "),n("div",{staticClass:"w-full h-20 my-10 flex justify-center"},[n("user-icon",{staticClass:"h-full"})],1),t._v(" "),n("div",{staticClass:"btn w-1/3 mx-auto grid gap-y-5 text-center"},[n("div",{staticClass:"side-bar-btn",class:t.home,on:{click:function(e){return t.toPath("/")}}},[this.$store.getters.lan?n("span",[t._v("首页")]):n("span",[t._v("HOME")])]),t._v(" "),n("div",{staticClass:"side-bar-btn",class:t.user,on:{click:t.toProduction}},[this.$store.getters.lan?n("span",[t._v("我的分享")]):n("span",[t._v("PRODUCTION")])]),t._v(" "),n("div",{staticClass:"side-bar-btn",class:t.collection,on:{click:t.toCollection}},[this.$store.getters.lan?n("span",[t._v("我的收藏")]):n("span",[t._v("COLLECTION")])]),t._v(" "),n("div",{staticClass:"side-bar-btn",class:t.share,on:{click:t.sharePage}},[this.$store.getters.lan?n("span",[t._v("上传美食")]):n("span",[t._v("SHARE")])]),t._v(" "),n("div",{staticClass:"side-bar-btn",class:t.search,on:{click:function(e){return t.toPath("/search/tag/")}}},[this.$store.getters.lan?n("span",[t._v("搜索")]):n("span",[t._v("SEARCH")])]),t._v(" "),n("div",{staticClass:"side-bar-btn logout",on:{click:t.logout}},[this.$store.getters.lan?n("span",[t._v("注销")]):n("span",[t._v("LOGOUT")])])])],1)}),[],!1,null,"3a4b13ea",null);e.default=component.exports}}]);