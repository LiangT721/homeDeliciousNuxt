(window.webpackJsonp=window.webpackJsonp||[]).push([[42,6,7,8,9,10,11,15,17,19,23,25,26],{353:function(t,e,o){"use strict";o.r(e);o(36),o(28),o(35),o(56),o(29),o(57);var n=o(6),r=o(20),c=(o(43),o(68),o(69),o(58)),l=o(44),d=o.n(l);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:{food:{type:Object}},computed:h(h({},Object(c.c)({collectionList:function(t){return t.collectionList}})),{},{collectionIdList:function(){return this.$store.getters.collection_id_list},if_collection:function(){return this.collectionIdList.includes(this.food.food_id)}}),methods:{confirmLogin:function(){1==confirm("Please login your account.")&&this.$router.push("/login")},removeCollection:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d.a.get("token")){e.next=5;break}return e.next=3,t.$axios({url:"/api/collection",method:"delete",data:{token:d.a.get("token"),food_id:t.food.food_id}}).then((function(e){console.log(e.data),t.$store.commit("removeCollectionList",t.food.food_id)})).catch((function(t){alert(t)}));case 3:e.next=6;break;case 5:t.confirmLogin();case 6:case"end":return e.stop()}}),e)})))()},addCollection:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d.a.get("token")){e.next=5;break}return e.next=3,t.$axios({url:"/api/collection",method:"post",data:{token:d.a.get("token"),food_id:t.food.food_id}}).then((function(e){console.log(e.data),t.$store.commit("addCollectionList",t.food)})).catch((function(t){alert(t)}));case 3:e.next=6;break;case 5:t.confirmLogin();case 6:case"end":return e.stop()}}),e)})))()}}},m=o(42),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.if_collection?o("div",{staticClass:"relative",on:{click:t.removeCollection}},[o("svg",{staticClass:"h-4 w-4 text-red-600 absolute right-0 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd"}})])]):o("div",{staticClass:"relative",on:{click:t.addCollection}},[o("svg",{staticClass:"h-4 w-4 absolute right-0 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}})])])])}),[],!1,null,"f4e0cc10",null);e.default=component.exports},354:function(t,e,o){"use strict";o.r(e);var n={props:{grade:{type:String},icon_size:{type:String}},mounted:function(){}},r=o(42),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",{staticClass:"list flex",class:t.icon_size},[o("li",[t.grade>0?o("span",{staticClass:"text-yellow-400"},[t._v("★")]):o("span",[t._v("☆")])]),t._v(" "),o("li",[t.grade>=1?o("span",{staticClass:"text-yellow-400"},[t._v("★")]):o("span",[t._v("☆")])]),t._v(" "),o("li",[t.grade>=2?o("span",{staticClass:"text-yellow-400"},[t._v("★")]):o("span",[t._v("☆")])]),t._v(" "),o("li",[t.grade>=3?o("span",{staticClass:"text-yellow-400"},[t._v("★")]):o("span",[t._v("☆")])]),t._v(" "),o("li",[t.grade>=4?o("span",{staticClass:"text-yellow-400"},[t._v("★")]):o("span",[t._v("☆")])])])])}),[],!1,null,"6f9d4a9d",null);e.default=component.exports},356:function(t,e,o){"use strict";o.r(e);var n=o(44),r=o.n(n),c={computed:{iconPath:function(){return this.$store.state.user.icon}},mounted:function(){r.a.get("user")&&this.$store.commit("setUser",r.a.get("user"))}},l=o(42),component=Object(l.a)(c,(function(){var t=this,e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("img",{staticClass:"icon-title",attrs:{src:e.iconPath,alt:""},on:{click:function(){t.$router.push("/setting")}}})])}),[],!1,null,"5a7d5e23",null);e.default=component.exports},362:function(t,e,o){t.exports=o.p+"img/logo-C.285d67b.png"},363:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"title text-2xl font-title items-center text-center"},[n("img",{staticClass:"h-8 inline -mt-2",attrs:{src:o(362),alt:""}}),t._v(" "),n("span",{staticClass:"text-fontColorlight items-end"},[t._v("Home Delicious")])]),t._v(" "),n("div",{staticClass:"slogen font-bold text-xl font-fonts text-center"},[n("span",{staticClass:"mr-5"},[t._v("Trending")]),t._v(" "),n("span",{staticClass:"text-fontColorlight"},[t._v("Food")])])])}],r={},c=o(42),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,"f49e63cc",null);e.default=component.exports},365:function(t,e,o){o(366)},366:function(t,e,o){"use strict";var n=o(2),r=o(18),c=o(99),l=o(100),d=o(213),f=o(3),h=o(24),v=f("replace"),m=RegExp.prototype,_=Math.max,w=function(t,e,o){return o>t.length?-1:""===e?o:t.indexOf(e,o)};n({target:"String",proto:!0},{replaceAll:function(t,e){var o,n,f,x,k,y,C,$,j=r(this),O=0,S=0,L="";if(null!=t){if((o=c(t))&&!~String(r("flags"in m?t.flags:l.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(n=t[v]))return n.call(t,j,e);if(h&&o)return String(j).replace(t,e)}for(f=String(j),x=String(t),(k="function"==typeof e)||(e=String(e)),y=x.length,C=_(1,y),O=w(f,x,0);-1!==O;)$=k?String(e(x,O,f)):d(x,f,O,[],void 0,e),L+=f.slice(S,O)+$,S=O+y,O=w(f,x,O+C);return S<f.length&&(L+=f.slice(S)),L}})},367:function(t,e,o){"use strict";o.r(e);var n=o(6),r=(o(55),o(134),o(365),o(68),o(69),o(43),o(44)),c=o.n(r),l=o(363),d=o(356),f={components:{logo:l.default,UserIcon:d.default},data:function(){return{home:"button_select",user:"",collection:"",share:"",search:"",select:"button_select",unSelect:""}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.params,o;case 2:case"end":return e.stop()}}),e)})))()},methods:{toPath:function(data){this.$router.push(data)},confirmLogin:function(){1==confirm("Please login your account.")&&this.$router.push("/login")},toProduction:function(){if(c.a.get("user")){var t=c.a.get("user").user_id;t&&(this.$store.commit("userPage_shift",!0),this.$router.push("/user/".concat(t)),this.user=this.select,this.home=this.collection=this.share=this.search=this.unSelect)}else this.confirmLogin()},toCollection:function(){if(c.a.get("user")){var t=c.a.get("user").user_id;t&&(this.$store.commit("userPage_shift",!1),this.$router.push("/user/".concat(t)),this.collection=this.select,this.home=this.user=this.share=this.search=this.unSelect)}else this.confirmLogin()},sharePage:function(){c.a.get("user")?this.$router.push("/share"):this.confirmLogin()},logout:function(){c.a.remove("token"),c.a.remove("user"),this.$router.push("/login")}},computed:{userInfo:function(){return c.a.get("user")}},mounted:function(){var path=this.$route.path.replaceAll("/","");""==path&&(this.home=this.select,this.user=this.collection=this.share=this.search=this.unSelect),path.includes("user")&&(this.$store.state.userPageToggle?(this.user=this.select,this.home=this.collection=this.share=this.search=this.unSelect):(this.collection=this.select,this.home=this.user=this.share=this.search=this.unSelect)),"share"==path&&(this.share=this.select,this.user=this.collection=this.home=this.search=this.unSelect),path.includes("search")&&(this.search=this.select,this.user=this.collection=this.share=this.home=this.unSelect)}},h=o(42),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"menu-bar-md h-screen w-full sticky top-0 py-20"},[o("logo"),t._v(" "),o("div",{staticClass:"w-full h-20 my-10 flex justify-center"},[o("user-icon",{staticClass:"h-full"})],1),t._v(" "),o("div",{staticClass:"btn w-1/3 mx-auto grid gap-y-5 text-center"},[o("div",{staticClass:"side-bar-btn",class:t.home,on:{click:function(e){return t.toPath("/")}}},[this.$store.getters.lan?o("span",[t._v("首页")]):o("span",[t._v("HOME")])]),t._v(" "),o("div",{staticClass:"side-bar-btn",class:t.user,on:{click:t.toProduction}},[this.$store.getters.lan?o("span",[t._v("我的分享")]):o("span",[t._v("PRODUCTION")])]),t._v(" "),o("div",{staticClass:"side-bar-btn",class:t.collection,on:{click:t.toCollection}},[this.$store.getters.lan?o("span",[t._v("我的收藏")]):o("span",[t._v("COLLECTION")])]),t._v(" "),o("div",{staticClass:"side-bar-btn",class:t.share,on:{click:t.sharePage}},[this.$store.getters.lan?o("span",[t._v("上传美食")]):o("span",[t._v("SHARE")])]),t._v(" "),o("div",{staticClass:"side-bar-btn",class:t.search,on:{click:function(e){return t.toPath("/search/tag/")}}},[this.$store.getters.lan?o("span",[t._v("搜索")]):o("span",[t._v("SEARCH")])]),t._v(" "),o("div",{staticClass:"side-bar-btn logout",on:{click:t.logout}},[this.$store.getters.lan?o("span",[t._v("注销")]):o("span",[t._v("LOGOUT")])])])],1)}),[],!1,null,"3a4b13ea",null);e.default=component.exports},368:function(t,e,o){t.exports=o.p+"img/fryer.9e9d3ef.png"},369:function(t,e,o){t.exports=o.p+"img/frying-pan.fb1eea1.png"},370:function(t,e,o){t.exports=o.p+"img/oven.dd28fbb.png"},371:function(t,e,o){t.exports=o.p+"img/pot.a98f008.png"},372:function(t,e,o){t.exports=o.p+"img/salad.20a4d04.png"},373:function(t,e,o){t.exports=o.p+"img/steamer.111d57f.png"},376:function(t,e,o){"use strict";o.r(e);var n=o(44),r=o.n(n),c={methods:{confirmLogin:function(){1==confirm("Please login your account.")&&this.$router.push("/login")},toUserPage:function(){if(r.a.get("user")){var t=r.a.get("user").user_id;t&&this.$router.push("/user/".concat(t))}else this.confirmLogin()},share:function(){r.a.get("user")?this.$router.push("/share"):this.confirmLogin()}}},l=o(42),component=Object(l.a)(c,(function(){var t=this,e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"fixed bottom-0 w-screen h-16 md:hidden z-50 rounded-t-md shadow-md bg-white flex justify-around items-center"},[n("svg",{staticClass:"h-7 w-7 text-fontColordark",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:function(){t.$router.push("/")}}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}})]),e._v(" "),n("svg",{staticClass:"h-7 w-7 text-fontColordark",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:e.toUserPage}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}})]),e._v(" "),n("svg",{staticClass:"h-7 w-7 text-fontColordark",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:e.share}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}})]),e._v(" "),n("svg",{staticClass:"h-7 w-7 text-fontColordark",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:function(){t.$router.push("/search/tag")}}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])])}),[],!1,null,"0808f54e",null);e.default=component.exports},377:function(t,e,o){},379:function(t,e,o){var map={"./fryer.png":368,"./frying-pan.png":369,"./oven.png":370,"./pot.png":371,"./salad.png":372,"./steamer.png":373};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=379},380:function(t,e,o){"use strict";o.r(e);var n=o(6),r=(o(43),o(353)),c=o(354),l=o(382),d=o(44),f=o.n(d),h={components:{grade:c.default,Collection:r.default,CookwayIcon:l.default},data:function(){return{option_appear:!1}},computed:{food:function(){return this.$store.getters.foodInfo_preview}},props:{checkUser:{type:Boolean}},methods:{toEditPage:function(){this.$router.push("/edit/".concat(this.food.food_id))},deleteFood:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm("Do you confirm to delete this food?")){e.next=3;break}return e.next=3,t.$axios({url:"/api/foods",method:"delete",data:{token:f.a.get("token"),food_id:t.food.food_id}}).then((function(e){alert("Delete successfull!"),t.$router.push("/")})).catch((function(t){alert("Delete failed")}));case 3:case"end":return e.stop()}}),e)})))()}}},v=(o(383),o(42)),component=Object(v.a)(h,(function(){var t=this,e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"grid grid-cols-6 px-6 py-5 content-start gap-y-3 font-fonts relative"},[e.checkUser?n("div",{staticClass:"edit-option absolute right-5 top-16"},[n("svg",{staticClass:"h-6 w-6 text-shadow",staticStyle:{"text-shadow":"5px 5px 5px black"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},on:{click:function(){t.option_appear=!t.option_appear}}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clip-rule":"evenodd"}})]),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.option_appear?n("div",{staticClass:"option uppercase bg-primary absolute right-0 rounded-md shadow-lg text-center"},[n("p",{staticClass:"hover:bg-white p-2",on:{click:function(t){return e.toEditPage()}}},[this.$store.getters.lan?n("span",[e._v("修改")]):n("span",[e._v("edit")])]),e._v(" "),n("p",{staticClass:"hover:bg-white p-2",on:{click:e.deleteFood}},[this.$store.getters.lan?n("span",[e._v("删除")]):n("span",[e._v("delete")])])]):e._e()])],1):e._e(),e._v(" "),n("grade",{staticClass:"col-span-4",attrs:{grade:e.food.grade,icon_size:"text-2xl"}}),e._v(" "),n("collection",{staticClass:"col-span-2",attrs:{food:e.food}}),e._v(" "),n("p",{staticClass:"food-name col-span-5 text-3xl font-bold"},[e._v(e._s(e.food.food_name))]),e._v(" "),n("div",{staticClass:"tags col-span-4 flex justify-between text-lg text-fontColordark"},[n("p",[e._v(e._s(e.food.food_location))]),e._v(" "),n("p",[e._v(e._s(e.food.food_category))]),e._v(" "),n("p",[e._v(e._s(e.food.tag))])]),e._v(" "),n("div",{staticClass:"users col-span-6 flex text-lg font-semibold"},[e._v("\n    by "+e._s(e.food.username)+"\n    "),n("img",{staticClass:"h-6 ml-3 rounded-round",attrs:{src:e.food.icon,alt:""}})]),e._v(" "),n("div",{staticClass:"description col-span-6 text-lg font-thin text-justify md:h-60 md:overflow-auto"},[e._v("\n    "+e._s(e.food.food_description)+"\n  ")]),e._v(" "),n("div",{staticClass:"cooking-icons col-span-6 flex justify-between md:justify-around font-semibold"},[n("cookway-icon",{staticClass:"cooking-icon",attrs:{cooking_way:e.food.cooking_way}}),e._v(" "),n("p",{staticClass:"cooking-icon text-center grid content-center"},[e._v("\n      "+e._s(e.food.cooking_time)+"MIN\n    ")]),e._v(" "),n("div",{staticClass:"cooking-icon text-center grid content-center"},[e._v("\n      "+e._s(e.food.difficulty)+"\n    ")])],1)],1)}),[],!1,null,"6ca8e1fb",null);e.default=component.exports},381:function(t,e,o){"use strict";o.r(e);o(45),o(11),o(37),o(46),o(23),o(28),o(47),o(48),o(30);function n(t,e){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return l=t.done,t},e:function(t){d=!0,c=t},f:function(){try{l||null==o.return||o.return()}finally{if(d)throw c}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var c={data:function(){return{bg_photo:"",photoList:{}}},watch:{food:function(t){console.log(t),this.photoList=t.image,console.log(this.photoList),this.bg_photo=this.photoList[0].url}},methods:{select:function(t){var e,o=n(this.photoList);try{for(o.s();!(e=o.n()).done;){var r=e.value;r.id==t&&(this.bg_photo=r.url)}}catch(t){o.e(t)}finally{o.f()}}},computed:{food:function(){return this.$store.getters.foodInfo_preview}},mounted:function(){console.log(this.food.image),console.log(this.food.image.length),0==this.food.image.length?this.photoList=[{url:"https://homedelicious.ml/img/uploadImgs/2021526_undefined_default.jpg"}]:this.photoList=this.food.image,console.log(this.photoList),this.bg_photo=this.photoList[0].url}},l=o(42),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("div",{staticClass:"background-photo h-full relative"},[o("img",{staticClass:"h-full w-full object-cover",attrs:{src:t.bg_photo,alt:"",srcset:""}}),t._v(" "),o("div",{staticClass:"photo-list h-1/6 justify-center flex min-w-full absolute bottom-0 overflow-x-scroll overflow-y-hidden whitespace-nowrap"},[t._l(t.photoList,(function(e){return o("img",{key:e.id,staticClass:"h-full mr-2 z-10 transition",attrs:{src:e.url,alt:""},on:{click:function(o){return t.select(e.id)}}})})),t._v(" "),o("div",{staticClass:"w-full h-full absolute bottom-0 z-0 bg-gray-900 opacity-80"})],2)])])}),[],!1,null,"73f49ac6",null);e.default=component.exports},382:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{cooking_icon:"frying-pan"}},props:{cooking_way:{type:String}},watch:{cooking_way:function(t){switch(t){case"fry":this.cooking_icon="frying-pan";break;case"stew":this.cooking_icon="pot";break;case"deep fry":this.cooking_icon="fryer";break;case"bake":this.cooking_icon="oven";break;case"salad":this.cooking_icon="salad";break;case"steam":this.cooking_icon="steamer"}}},mounted:function(){}},r=o(42),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:o(379)("./"+t.cooking_icon+".png"),alt:""}})])}),[],!1,null,"1363d55c",null);e.default=component.exports},383:function(t,e,o){"use strict";o(377)},392:function(t,e,o){"use strict";o.r(e);var n={computed:{ingredients:function(){return this.$store.getters.ingredient_preview}}},r=o(42),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"px-6 py-5 content-start gap-y-3 font-fonts"},[o("p",{staticClass:"food-name text-3xl font-bold mb-5"},[t._v("ingredients:")]),t._v(" "),t._l(t.ingredients,(function(e){return o("div",{key:e.id,staticClass:"grid grid-cols-5 my-3 text-md gap-x-2 ml-2"},[o("li",{staticClass:"col-span-3"},[t._v(t._s(e.ingredient))]),t._v(" "),o("p",{staticClass:"col-span-2 "},[t._v(t._s(e.amount))]),t._v(" "),o("hr",{staticClass:"mt-3 col-span-5"})])}))],2)}),[],!1,null,"41d89c44",null);e.default=component.exports},393:function(t,e,o){"use strict";o.r(e);o(38);var n={computed:{processes:function(){return this.$store.getters.method_preview}},watch:{processes:function(t){t.map((function(t,e){t.order="md:order-".concat(t.id%2+1)}))}}},r=o(42),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"px-6 py-5 content-start gap-y-3 font-fonts"},[o("p",{staticClass:"food-name text-3xl font-bold mb-5"},[t._v("Methods:")]),t._v(" "),t._l(t.processes,(function(e){return o("div",{key:e.id,staticClass:"mb-5 bg-primary py-5 px-6 shadow-md rounded-xl md:px-8 md:py-3 md:bg-opacity-0 md:shadow-none"},[o("p",{staticClass:"uppercase text-center text-xl mb-8 font-semibold relative md:mb-3"},[t._v("\n      Step:"+t._s(e.id+1)+"\n    ")]),t._v(" "),o("div",{staticClass:"md:grid md:grid-cols-3 md:items-start md:w-full md:mx-auto md:h-40  md:rounded-md overflow-hidden md:shadow-xl md:bg-primary"},[e.img?o("img",{staticClass:"h-48 overflow-hidden  w-full object-cover md:h-full md:col-span-1",class:e.order,attrs:{src:e.img,alt:""}}):t._e(),t._v(" "),o("p",{staticClass:"font-fonts font-semibold w-full text-justify mx-auto h-auto mt-5 p-3 md:h-full md:col-span-2 md:order-1 md:mt-0 md:p-5"},[t._v("\n        "+t._s(e.text)+"\n      ")])])])}))],2)}),[],!1,null,"716fd2f1",null);e.default=component.exports},407:function(t,e,o){"use strict";o.r(e);var n=o(6),r=(o(43),o(356)),c=o(44),l=o.n(c),d={components:{userIcon:r.default},props:{food:{type:Object}},data:function(){return{grade:this.food.grade}},methods:{rate:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(data),console.log(t.grade),0!=t.grade){e.next=8;break}return console.log("a"),e.next=6,t.$axios({url:"/api/grade",method:"post",data:{food_id:t.food.food_id,token:l.a.get("token"),grade:data}}).then((function(e){console.log(e.data),t.grade=data})).catch((function(t){alert(t)}));case 6:e.next=11;break;case 8:return console.log("b"),e.next=11,t.$axios({url:"/api/grade",method:"patch",data:{food_id:t.food.food_id,token:l.a.get("token"),grade:data}}).then((function(e){console.log(e.data),t.grade=e.data})).catch((function(t){alert(t)}));case 11:case"end":return e.stop()}}),e)})))()}},mounted:function(){}},f=o(42),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("user-icon",{staticClass:"w-20 h-20 mx-auto"}),t._v(" "),o("ul",{staticClass:"list grid grid-cols-5 justify-items-center text-4xl w-1/3 mx-auto my-10"},[o("li",{on:{click:function(e){return t.rate(1)}}},[t.grade>0?o("span",{staticClass:"text-yellow-400 cursor-pointer"},[t._v("★")]):o("span",{staticClass:"cursor-pointer"},[t._v("☆")])]),t._v(" "),o("li",{on:{click:function(e){return t.rate(2)}}},[t.grade>1?o("span",{staticClass:"text-yellow-400 cursor-pointer"},[t._v("★")]):o("span",{staticClass:"cursor-pointer"},[t._v("☆")])]),t._v(" "),o("li",{on:{click:function(e){return t.rate(3)}}},[t.grade>2?o("span",{staticClass:"text-yellow-400 cursor-pointer"},[t._v("★")]):o("span",{staticClass:"cursor-pointer"},[t._v("☆")])]),t._v(" "),o("li",{on:{click:function(e){return t.rate(4)}}},[t.grade>3?o("span",{staticClass:"text-yellow-400 cursor-pointer"},[t._v("★")]):o("span",{staticClass:"cursor-pointer"},[t._v("☆")])]),t._v(" "),o("li",{on:{click:function(e){return t.rate(5)}}},[t.grade>4?o("span",{staticClass:"text-yellow-400 cursor-pointer"},[t._v("★")]):o("span",{staticClass:"cursor-pointer"},[t._v("☆")])])])],1)}),[],!1,null,"50670b80",null);e.default=component.exports},420:function(t,e,o){"use strict";o.r(e);var n=o(6),r=(o(43),o(380)),c=o(392),l=o(393),d=o(381),f=o(407),h=o(376),v=o(367),m=o(44),_=o.n(m),w={components:{sideBar:v.default,FoodPhoto:d.default,FoodInfoText:r.default,FoodIngredients:c.default,FoodMethods:l.default,BottomBar:h.default,RateGrade:f.default},data:function(){return{loading:!1,ShowFood:{},MethodsData:{},MethodsDisplay:!0,ingredientDisplay:!0,processDisplay:!0}},props:{food:{type:Object}},computed:{lan:function(){return this.$store.getters.lan},checkUser:function(){return!!_.a.get("user")&&Boolean(_.a.get("user").user_id==this.ShowFood.user_id)}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.params,n=o.foodId,e.abrupt("return",{foodId:n});case 3:case"end":return e.stop()}}),e)})))()},methods:{back:function(){window.history.back()},getFood:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={food_id:t.foodId},e.next=3,t.$axios.get("/api/foods",{params:o});case 3:n=e.sent,t.ShowFood=n.data,t.$store.commit("foodInfo_temp_Edit",n.data),t.loading=!0;case 7:case"end":return e.stop()}}),e)})))()},getMethod:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={food_id:t.foodId},e.next=3,t.$axios.get("/api/methods",{params:o});case 3:""==(n=e.sent).data.ingredient&&""==n.data.process&&(t.MethodsDisplay=!1),""==n.data.ingredient&&(t.ingredientDisplay=!1),""==n.data.process&&(t.processDisplay=!1),t.$store.commit("foodIngredients_temp_Edit",n.data.ingredient),t.$store.commit("foodMethods_temp_Edit",n.data.process);case 9:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getFood(),this.getMethod()}},x=o(42),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-background"},[o("div",{staticClass:"page"},[o("div",{staticClass:"left"},[o("side-bar")],1),t._v(" "),t.loading?o("div",{staticClass:"right md:grid md:grid-cols-2 -mb-4"},[o("div",{staticClass:"back fixed z-10 md:hidden",on:{click:t.back}},[o("svg",{staticClass:"h-10 w-10 bg-gray-200 rounded-lg shadow-2xl m-3 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"}})])]),t._v(" "),o("food-photo",{staticClass:"h-h60Screen md:col-span-1 sticky top-0 z-0"}),t._v(" "),o("food-info-text",{staticClass:"rounded-t-3xl bg-white md:col-span-1 md:sticky md:top-0 md:h-h60Screen z-20 relative",attrs:{checkUser:t.checkUser}}),t._v(" "),o("div",{staticClass:"methods-part bg-white md:col-span-2 z-20 relative -top-4 py-10 md:-top-8"},[t.MethodsDisplay?o("div",{staticClass:"md:w-3/4 mx-auto"},[t.ingredientDisplay?o("food-ingredients",{attrs:{ingredients:t.MethodsData.ingredient}}):t._e(),t._v(" "),t.processDisplay?o("food-methods",{attrs:{processes:t.MethodsData.process}}):t._e()],1):o("div",{staticClass:"text-center py-10 text-xl font-fonts"},[t.checkUser?o("div",[t.lan?o("span",[t._v("你还没有分享他的制作方法")]):o("span",[t._v("You haven't shared your recipe")])]):o("div",[t.lan?o("span",[t._v("作者还没有分享他的制作方法")]):o("span",[t._v("Author hasn't shared the recipe")])]),t._v(" "),t.checkUser?o("button",{staticClass:"button my-10"},[t.lan?o("span",[t._v("分享你的的制作方法")]):o("span",[t._v("Shared your recipe")])]):t._e()]),t._v(" "),o("div",{staticClass:"splitter h-splitter bg-gray-300 w-11/12 mb-10 mx-auto"}),t._v(" "),o("rate-grade",{attrs:{food:t.ShowFood}})],1)],1):t._e()]),t._v(" "),o("bottom-bar")],1)}),[],!1,null,"a4facba6",null);e.default=component.exports;installComponents(component,{FoodPhoto:o(381).default,FoodInfoText:o(380).default,FoodIngredients:o(392).default,FoodMethods:o(393).default})}}]);