(window.webpackJsonp=window.webpackJsonp||[]).push([[47,15,20,22,23,24,25,26,28,29,30,31,32,33],{352:function(t,e,n){},355:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(43),n(359),n(37),n(96),{components:{iconLoading:n(358).default},data:function(){return{name:"",if_loading:!1,date:this.$store.getters.Date,url:null}},props:{image_type:{type:String},image_url:{type:String},id:{type:Number}},methods:{onchange:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.if_loading=!0,r=t.target.files[0],e.name="".concat(e.date,"_").concat(e.image_type,"_").concat(r.name),(o=new FormData).set("file",r,e.name),n.next=7,e.$axios.$post("/api/upload",o,{headers:{"content-type":"multipart/form-data"}});case 7:""==n.sent&&(e.url="https://homedelicious.ml/img/uploadImgs/"+e.name,e.$emit("newImage",e.url,e.id),e.if_loading=!1);case 9:case"end":return n.stop()}}),n)})))()}}}),c=n(42),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid justify-items-center"},[t.if_loading?n("icon-loading"):n("input",{staticClass:"w-1/2",attrs:{type:"file",accept:"image/*"},on:{change:t.onchange}})],1)}),[],!1,null,"463eb198",null);e.default=component.exports},356:function(t,e,n){"use strict";n.r(e);var r=n(44),o=n.n(r),c={computed:{iconPath:function(){return this.$store.state.user.icon}},mounted:function(){o.a.get("user")&&this.$store.commit("setUser",o.a.get("user"))}},l=n(42),component=Object(l.a)(c,(function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("img",{staticClass:"icon-title",attrs:{src:e.iconPath,alt:""},on:{click:function(){t.$router.push("/setting")}}})])}),[],!1,null,"5a7d5e23",null);e.default=component.exports},357:function(t,e,n){"use strict";n(352)},358:function(t,e,n){"use strict";n.r(e);var r={},o=(n(357),n(42)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-roller"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])}],!1,null,"3079d279",null);e.default=component.exports},359:function(t,e,n){"use strict";var r=n(8),o=n(4),c=n(98),l=n(14),d=n(10),h=n(49),m=n(212),f=n(70),v=n(5),_=n(72),w=n(71).f,C=n(31).f,x=n(13).f,k=n(360).trim,$="Number",y=o.Number,P=y.prototype,E=h(_(P))==$,O=function(t){var e,n,r,o,c,l,d,code,h=f(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=k(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+h}for(l=(c=h.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+h};if(c($,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var S,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(E?v((function(){P.valueOf.call(n)})):h(n)!=$)?m(new y(O(e)),n,N):O(e)},I=r?w(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;I.length>j;j++)d(y,S=I[j])&&!d(N,S)&&x(N,S,C(y,S));N.prototype=P,P.constructor=N,l(o,$,N)}},360:function(t,e,n){var r=n(18),o="["+n(361)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},361:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},362:function(t,e,n){t.exports=n.p+"img/logo-C.285d67b.png"},363:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid"},[r("div",{staticClass:"title text-2xl font-title items-center text-center"},[r("img",{staticClass:"h-8 inline -mt-2",attrs:{src:n(362),alt:""}}),t._v(" "),r("span",{staticClass:"text-fontColorlight items-end"},[t._v("Home Delicious")])]),t._v(" "),r("div",{staticClass:"slogen font-bold text-xl font-fonts text-center"},[r("span",{staticClass:"mr-5"},[t._v("Trending")]),t._v(" "),r("span",{staticClass:"text-fontColorlight"},[t._v("Food")])])])}],o={},c=n(42),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"f49e63cc",null);e.default=component.exports},365:function(t,e,n){n(366)},366:function(t,e,n){"use strict";var r=n(2),o=n(18),c=n(99),l=n(100),d=n(213),h=n(3),m=n(24),f=h("replace"),v=RegExp.prototype,_=Math.max,w=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,h,C,x,k,$,y,P=o(this),E=0,O=0,S="";if(null!=t){if((n=c(t))&&!~String(o("flags"in v?t.flags:l.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=t[f]))return r.call(t,P,e);if(m&&n)return String(P).replace(t,e)}for(h=String(P),C=String(t),(x="function"==typeof e)||(e=String(e)),k=C.length,$=_(1,k),E=w(h,C,0);-1!==E;)y=x?String(e(C,E,h)):d(C,h,E,[],void 0,e),S+=h.slice(O,E)+y,O=E+k,E=w(h,C,E+$);return O<h.length&&(S+=h.slice(O)),S}})},367:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(55),n(134),n(365),n(68),n(69),n(43),n(44)),c=n.n(o),l=n(363),d=n(356),h={components:{logo:l.default,UserIcon:d.default},data:function(){return{home:"button_select",user:"",collection:"",share:"",search:"",select:"button_select",unSelect:""}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.params,n;case 2:case"end":return e.stop()}}),e)})))()},methods:{toPath:function(data){this.$router.push(data)},confirmLogin:function(){1==confirm("Please login your account.")&&this.$router.push("/login")},toProduction:function(){if(c.a.get("user")){var t=c.a.get("user").user_id;t&&(this.$store.commit("userPage_shift",!0),this.$router.push("/user/".concat(t)),this.user=this.select,this.home=this.collection=this.share=this.search=this.unSelect)}else this.confirmLogin()},toCollection:function(){if(c.a.get("user")){var t=c.a.get("user").user_id;t&&(this.$store.commit("userPage_shift",!1),this.$router.push("/user/".concat(t)),this.collection=this.select,this.home=this.user=this.share=this.search=this.unSelect)}else this.confirmLogin()},sharePage:function(){c.a.get("user")?this.$router.push("/share"):this.confirmLogin()},logout:function(){c.a.remove("token"),c.a.remove("user"),this.$router.push("/login")}},computed:{userInfo:function(){return c.a.get("user")}},mounted:function(){var path=this.$route.path.replaceAll("/","");""==path&&(this.home=this.select,this.user=this.collection=this.share=this.search=this.unSelect),path.includes("user")&&(this.$store.state.userPageToggle?(this.user=this.select,this.home=this.collection=this.share=this.search=this.unSelect):(this.collection=this.select,this.home=this.user=this.share=this.search=this.unSelect)),"share"==path&&(this.share=this.select,this.user=this.collection=this.home=this.search=this.unSelect),path.includes("search")&&(this.search=this.select,this.user=this.collection=this.share=this.home=this.unSelect)}},m=n(42),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-bar-md h-screen w-full sticky top-0 py-20"},[n("logo"),t._v(" "),n("div",{staticClass:"w-full h-20 my-10 flex justify-center"},[n("user-icon",{staticClass:"h-full"})],1),t._v(" "),n("div",{staticClass:"btn w-1/3 mx-auto grid gap-y-5 text-center"},[n("div",{staticClass:"side-bar-btn",class:t.home,on:{click:function(e){return t.toPath("/")}}},[this.$store.getters.lan?n("span",[t._v("首页")]):n("span",[t._v("HOME")])]),t._v(" "),n("div",{staticClass:"side-bar-btn",class:t.user,on:{click:t.toProduction}},[this.$store.getters.lan?n("span",[t._v("我的分享")]):n("span",[t._v("PRODUCTION")])]),t._v(" "),n("div",{staticClass:"side-bar-btn",class:t.collection,on:{click:t.toCollection}},[this.$store.getters.lan?n("span",[t._v("我的收藏")]):n("span",[t._v("COLLECTION")])]),t._v(" "),n("div",{staticClass:"side-bar-btn",class:t.share,on:{click:t.sharePage}},[this.$store.getters.lan?n("span",[t._v("上传美食")]):n("span",[t._v("SHARE")])]),t._v(" "),n("div",{staticClass:"side-bar-btn",class:t.search,on:{click:function(e){return t.toPath("/search/tag/")}}},[this.$store.getters.lan?n("span",[t._v("搜索")]):n("span",[t._v("SEARCH")])]),t._v(" "),n("div",{staticClass:"side-bar-btn logout",on:{click:t.logout}},[this.$store.getters.lan?n("span",[t._v("注销")]):n("span",[t._v("LOGOUT")])])])],1)}),[],!1,null,"3a4b13ea",null);e.default=component.exports},376:function(t,e,n){"use strict";n.r(e);var r=n(44),o=n.n(r),c={methods:{confirmLogin:function(){1==confirm("Please login your account.")&&this.$router.push("/login")},toUserPage:function(){if(o.a.get("user")){var t=o.a.get("user").user_id;t&&this.$router.push("/user/".concat(t))}else this.confirmLogin()},share:function(){o.a.get("user")?this.$router.push("/share"):this.confirmLogin()}}},l=n(42),component=Object(l.a)(c,(function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"fixed bottom-0 w-screen h-16 md:hidden z-50 rounded-t-md shadow-md bg-white flex justify-around items-center"},[r("svg",{staticClass:"h-7 w-7 text-fontColordark",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:function(){t.$router.push("/")}}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}})]),e._v(" "),r("svg",{staticClass:"h-7 w-7 text-fontColordark",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:e.toUserPage}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}})]),e._v(" "),r("svg",{staticClass:"h-7 w-7 text-fontColordark",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:e.share}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}})]),e._v(" "),r("svg",{staticClass:"h-7 w-7 text-fontColordark",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:function(){t.$router.push("/search/tag")}}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])])}),[],!1,null,"0808f54e",null);e.default=component.exports},378:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(43),{data:function(){return{params:{},searchContent:""}},methods:{enter:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.searchContent),n={content:t.searchContent},e.next=4,t.$axios.get("/api/search",{params:n});case 4:r=e.sent,t.$store.commit("setSearchRes",r.data),console.log(r.data),"/search/result"!=t.$route.path&&t.$router.push("/search/result");case 8:case"end":return e.stop()}}),e)})))()}}}),c=n(42),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-10 w-5/6 mx-auto h-full relative "},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchContent,expression:"searchContent"}],staticClass:"w-full h-10 self-center mx-auto rounded-3xl pl-14 md:pl-16 bg-barBgc md:w-full",attrs:{type:"text"},domProps:{value:t.searchContent},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enter(e)},input:function(e){e.target.composing||(t.searchContent=e.target.value)}}}),t._v(" "),n("svg",{staticClass:"h-5 w-5 absolute text-white top-2.5 self-center left-4 md:left-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"}})])])}),[],!1,null,"d98a80e4",null);e.default=component.exports},387:function(t,e,n){"use strict";n.r(e);var r={},o=n(42),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:" absolute top-0 w-full h-full bg-red-400"},[t._v("\n    password\n")])}),[],!1,null,"09ddfa9f",null);e.default=component.exports},388:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(43),n(55),n(97),{data:function(){return{icon_class:""}},props:{image_type:{type:String},image_url:{type:String}},methods:{Delete:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.image_url.replace("https://homedelicious.ml/img/uploadImgs/",""),{image:n},e.next=4,t.$axios({url:"/api/upload",method:"delete",data:{image:n}}).then((function(){t.$emit("delete_res",!0)})).catch((function(){alert("delete not success")}));case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){switch(this.image_type){case"user":this.icon_class="rounded-round object-cover";break;case"image":this.icon_class="w-full h-full object-cover"}}}),c=n(42),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("img",{class:t.icon_class,attrs:{src:t.image_url,alt:""}})])}),[],!1,null,"a3499da6",null);e.default=component.exports},400:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(43),n(44)),c=n.n(o),l=n(355),d=n(387),h=n(388),m={components:{imageUpload:l.default,PasswordComfirm:d.default,ImageEditPreview:h.default},data:function(){return{username:"",email:"",birthday:"",location:"",bio:"",icon:"",type_user:"user"}},computed:{user:function(){return this.$store.getters.defaultUser}},methods:{back:function(){console.log("back"),this.$emit("finish","menu")},newImage:function(data){this.icon=data,console.log(this.icon)},delete_res:function(data){switch(console.log(data),data){case!0:this.icon=null;break;case!1:alert("Delete falied")}},updateAccount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.username),console.log(t.birthday),console.log(t.email),console.log(t.location),console.log(t.bio),console.log(t.icon),n=prompt("Please input your password"),e.next=9,t.$axios({url:"/api/users",method:"patch",data:{token:c.a.get("token"),username:t.username,old_password:n,email:t.email,birthday:t.birthday,location:t.location,bio:t.bio,icon:t.icon}}).then((function(e){console.log(e.data),c.a.set("user",e.data),alert("Edit Success"),t.$emit("finish","menu")}));case 9:case"end":return e.stop()}}),e)})))()}},mounted:function(){"visiter"!=this.user.username&&(this.username=this.user.username,this.birthday=this.user.birthday,this.email=this.user.email,this.location=this.user.location,this.bio=this.user.bio,this.icon=this.user.icon)}},f=n(42),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("p",{staticClass:"capitalize mt-3"},[this.$store.getters.lan?n("span",[t._v("用户名")]):n("span",[t._v("username")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-area",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),n("p",{staticClass:"capitalize mt-3"},[this.$store.getters.lan?n("span",[t._v("电子邮箱")]):n("span",[t._v("email")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input-area",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("p",{staticClass:"capitalize mt-3"},[this.$store.getters.lan?n("span",[t._v("生日")]):n("span",[t._v("birthday")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.birthday,expression:"birthday"}],staticClass:"input-area",attrs:{type:"date"},domProps:{value:t.birthday},on:{input:function(e){e.target.composing||(t.birthday=e.target.value)}}}),t._v(" "),n("p",{staticClass:"capitalize mt-3"},[this.$store.getters.lan?n("span",[t._v("所在地")]):n("span",[t._v("location")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"input-area",attrs:{type:"text"},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}}),t._v(" "),n("p",{staticClass:"capitalize mt-3"},[this.$store.getters.lan?n("span",[t._v("简介")]):n("span",[t._v("bio")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bio,expression:"bio"}],staticClass:"input-area",attrs:{type:"text"},domProps:{value:t.bio},on:{input:function(e){e.target.composing||(t.bio=e.target.value)}}}),t._v(" "),n("p",{staticClass:"capitalize mt-3"},[this.$store.getters.lan?n("span",[t._v("头像")]):n("span",[t._v("icon")])]),t._v(" "),n("image-upload",{staticClass:"mt-3",attrs:{image_type:t.type_user},on:{newImage:t.newImage}}),t._v(" "),t.icon?n("image-edit-preview",{staticClass:"image-preview h-20 w-20 mx-auto relative pt-5",attrs:{image_url:t.icon,image_type:t.type_user}}):t._e(),t._v(" "),n("div",[n("button",{staticClass:"button mt-10",on:{click:t.updateAccount}},[t._v("update")]),t._v(" "),n("button",{staticClass:"button mt-10",on:{click:t.back}},[t._v("back")])])],1)}),[],!1,null,"29d4e5dd",null);e.default=component.exports},401:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(43),n(44)),c=n.n(o),l={data:function(){return{password:""}},methods:{back:function(){console.log("back"),this.$emit("finish","menu")},deleteUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm("Do you make sure to delete this user?")){e.next=3;break}return e.next=3,t.$axios({url:"/api/users",method:"delete",data:{token:c.a.get("token"),password:t.password}}).then((function(e){console.log(e.data),c.a.remove("user"),c.a.remove("token"),t.$emit("finish","menu"),t.$router.push("/login")})).catch((function(t){alert(t)}));case 3:case"end":return e.stop()}}),e)})))()}}},d=n(42),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("p",{staticClass:"capitalize mt-3"},[this.$store.getters.lan?n("span",[t._v("请输入您的密码:")]):n("span",[t._v("Please input your password:")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-area",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("div",[n("button",{staticClass:"button mt-10",on:{click:t.deleteUser}},[t._v("Delete")]),t._v(" "),n("button",{staticClass:"button mt-10",on:{click:t.back}},[t._v("back")])])])}),[],!1,null,"1b6b9238",null);e.default=component.exports},402:function(t,e,n){"use strict";n.r(e);var r=n(44),o=n.n(r),c={methods:{languageSetting:function(data){console.log(data),o.a.set("lang",data),this.$store.commit("setLang",data),this.$emit("finish","menu")}}},l=n(42),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",[n("button",{staticClass:"button mt-10",on:{click:function(e){return t.languageSetting(!1)}}},[t._v("English")]),t._v(" "),n("button",{staticClass:"button mt-10",on:{click:function(e){return t.languageSetting(!0)}}},[t._v("中文")])])])}),[],!1,null,"461cfe50",null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(43),n(44)),c=n.n(o),l={data:function(){return{oldPassword:"",newPassword:"",confirmPassword:""}},methods:{back:function(){console.log("back"),this.$emit("finish","menu")},passwordChange:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.newPassword!=t.confirmPassword){e.next=5;break}return e.next=3,t.$axios({url:"/api/users",method:"patch",data:{token:c.a.get("token"),old_password:t.oldPassword,password:t.newPassword}}).then((function(e){console.log(e.data),c.a.remove("user"),c.a.remove("token"),t.$emit("finish","menu"),t.$router.push("/login/")})).catch((function(t){alert(t)}));case 3:e.next=7;break;case 5:t.$store.getters.lan?alert("您两次输入的密码不符！"):alert("The passwords you entered do not match"),t.newPassword=t.confirmPassword=t.oldPassword="";case 7:case"end":return e.stop()}}),e)})))()}}},d=n(42),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("p",{staticClass:"capitalize mt-3"},[this.$store.getters.lan?n("span",[t._v("请输入原有密码:")]):n("span",[t._v("Please input old password:")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPassword,expression:"oldPassword"}],staticClass:"input-area",attrs:{type:"password"},domProps:{value:t.oldPassword},on:{input:function(e){e.target.composing||(t.oldPassword=e.target.value)}}}),t._v(" "),n("p",{staticClass:"capitalize mt-3"},[this.$store.getters.lan?n("span",[t._v("请输入新密码:")]):n("span",[t._v("Please input new password:")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"input-area",attrs:{type:"password"},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}}),t._v(" "),n("p",{staticClass:"capitalize mt-3"},[this.$store.getters.lan?n("span",[t._v("请再次输入新密码:")]):n("span",[t._v("Please re-input new password:")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],staticClass:"input-area",attrs:{type:"password"},domProps:{value:t.newPassword},on:{input:function(e){e.target.composing||(t.newPassword=e.target.value)}}}),t._v(" "),n("div",[n("button",{staticClass:"button mt-10",on:{click:t.passwordChange}},[t._v("update")]),t._v(" "),n("button",{staticClass:"button mt-10",on:{click:t.back}},[t._v("back")])])])}),[],!1,null,"5ac4f278",null);e.default=component.exports},415:function(t,e,n){"use strict";n.r(e);var r=n(376),o=n(378),c=n(367),l=n(400),d=n(401),h=n(402),m=n(403),f=n(44),v=n.n(f),_={components:{SideBar:c.default,searchBar:o.default,AccountModify:l.default,BottomBar:r.default,PasswordModify:m.default,DeleteAccount:d.default,LanuageSetting:h.default},data:function(){return{pop_up:"menu"}},computed:{lang:function(){return this.$store.getters.lan}},methods:{toggle:function(data){this.pop_up=data},logout:function(){v.a.remove("user"),v.a.remove("token"),this.$router.push("/login")}}},w=n(42),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-background"},[n("div",{staticClass:"page"},[n("div",{staticClass:"left"},[n("side-bar")],1),t._v(" "),n("div",{staticClass:"right"},[n("search-bar",{staticClass:"search-bar"}),t._v(" "),"menu"==t.pop_up?n("div",{staticClass:"setting-content font-fonts mx-10 mt-10"},[n("h2",{staticClass:"title text-2xl font-bold mb-5"},[t.lang?n("span",[t._v("设置：")]):n("span",[t._v("SETTING： ")])]),t._v(" "),n("div",{staticClass:"content grid gap-y-6 justify-items-start"},[n("button",{staticClass:"button",on:{click:function(e){return t.toggle("account_modify")}}},[this.$store.getters.lan?n("span",[t._v("修改用户信息")]):n("span",[t._v("MODIFY ACCOUNT")])]),t._v(" "),n("button",{staticClass:"button",on:{click:function(e){return t.toggle("password")}}},[this.$store.getters.lan?n("span",[t._v("修改密码")]):n("span",[t._v("MODIFY PASSWORD")])]),t._v(" "),n("button",{staticClass:"button",on:{click:function(e){return t.toggle("deleteUser")}}},[this.$store.getters.lan?n("span",[t._v("删除用户")]):n("span",[t._v("DELETE ACCOUNT")])]),t._v(" "),n("button",{staticClass:"button",on:{click:function(e){return t.toggle("language")}}},[this.$store.getters.lan?n("span",[t._v("更改语言")]):n("span",[t._v("LANGUAGE SETTING")])]),t._v(" "),n("button",{staticClass:"button",on:{click:function(e){return t.logout()}}},[this.$store.getters.lan?n("span",[t._v("退出登陆")]):n("span",[t._v("LOGOUT")])])])]):"account_modify"==t.pop_up?n("account-modify",{staticClass:"pop-up font-fonts mt-10 mx-auto text-center",on:{finish:t.toggle}}):"password"==t.pop_up?n("password-modify",{staticClass:"pop-up font-fonts mt-10 mx-auto text-center",on:{finish:t.toggle}}):"deleteUser"==t.pop_up?n("delete-account",{staticClass:"pop-up font-fonts mt-10 mx-auto text-center",on:{finish:t.toggle}}):"language"==t.pop_up?n("lanuage-setting",{attrs:{lass:"pop-up font-fonts mt-10 mx-auto text-center"},on:{finish:t.toggle}}):t._e()],1)]),t._v(" "),n("bottom-bar")],1)}),[],!1,null,null,null);e.default=component.exports}}]);