(window.webpackJsonp=window.webpackJsonp||[]).push([[5,20,21,22],{352:function(t,e,o){},355:function(t,e,o){"use strict";o.r(e);var n=o(6),r=(o(43),o(359),o(37),o(96),{components:{iconLoading:o(358).default},data:function(){return{name:"",if_loading:!1,date:this.$store.getters.Date,url:null}},props:{image_type:{type:String},image_url:{type:String},id:{type:Number}},methods:{onchange:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.if_loading=!0,n=t.target.files[0],e.name="".concat(e.date,"_").concat(e.image_type,"_").concat(n.name),(r=new FormData).set("file",n,e.name),o.next=7,e.$axios.$post("/api/upload",r,{headers:{"content-type":"multipart/form-data"}});case 7:""==o.sent&&(e.url="https://homedelicious.ml/img/uploadImgs/"+e.name,e.$emit("newImage",e.url,e.id),e.if_loading=!1);case 9:case"end":return o.stop()}}),o)})))()}}}),l=o(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"grid justify-items-center"},[t.if_loading?o("icon-loading"):o("input",{staticClass:"w-1/2",attrs:{type:"file",accept:"image/*"},on:{change:t.onchange}})],1)}),[],!1,null,"463eb198",null);e.default=component.exports},357:function(t,e,o){"use strict";o(352)},358:function(t,e,o){"use strict";o.r(e);var n={},r=(o(357),o(42)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lds-roller"},[o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div")])}],!1,null,"3079d279",null);e.default=component.exports},359:function(t,e,o){"use strict";var n=o(8),r=o(4),l=o(98),c=o(14),d=o(10),v=o(49),f=o(212),m=o(70),_=o(5),h=o(72),y=o(71).f,C=o(31).f,w=o(13).f,x=o(360).trim,k="Number",I=r.Number,$=I.prototype,N=v(h($))==k,E=function(t){var e,o,n,r,l,c,d,code,v=m(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=x(v)).charCodeAt(0))||45===e){if(88===(o=v.charCodeAt(2))||120===o)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+v}for(c=(l=v.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>r)return NaN;return parseInt(l,n)}return+v};if(l(k,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var A,S=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof S&&(N?_((function(){$.valueOf.call(o)})):v(o)!=k)?f(new I(E(e)),o,S):E(e)},j=n?y(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;j.length>P;P++)d(I,A=j[P])&&!d(S,A)&&w(S,A,C(I,A));S.prototype=$,$.constructor=S,c(r,k,S)}},360:function(t,e,o){var n=o(18),r="["+o(361)+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t){return function(e){var o=String(n(e));return 1&t&&(o=o.replace(l,"")),2&t&&(o=o.replace(c,"")),o}};t.exports={start:d(1),end:d(2),trim:d(3)}},361:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},364:function(t,e,o){"use strict";o.r(e);var n=o(6),r=(o(43),o(55),o(97),{data:function(){return{icon_class:""}},props:{image_type:{type:String},image_url:{type:String}},methods:{Delete:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.image_url.replace("https://homedelicious.ml/img/uploadImgs/",""),{image:o},e.next=4,t.$axios({url:"/api/upload",method:"delete",data:{image:o}}).then((function(){t.$emit("delete_res",!0)})).catch((function(){alert("delete not success")}));case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){switch(this.image_type){case"user":this.icon_class="rounded-round object-cover";break;case"image":this.icon_class="w-full h-full object-cover"}}}),l=o(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative"},[o("img",{class:t.icon_class,attrs:{src:t.image_url,alt:""}}),t._v(" "),o("svg",{staticClass:"h-5 w-5 top-0 right-0 absolute bg-gray-200 rounded-sm shadow-md cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},on:{click:t.Delete}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])}),[],!1,null,"24a7c9c3",null);e.default=component.exports},384:function(t,e,o){t.exports=o.p+"img/food.d45b11e.png"},406:function(t,e,o){"use strict";o.r(e);o(136),o(45),o(11),o(37),o(46),o(23),o(28),o(47),o(48),o(30);var n=o(364);function r(t,e){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return c=t.done,t},e:function(t){d=!0,r=t},f:function(){try{c||null==o.return||o.return()}finally{if(d)throw r}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var c={components:{ImageUpload:o(355).default,ImagePreview:n.default},data:function(){return{images:"",food_preview:{},pre_img_list:this.food.image,imageType:"image",imageUrl:"",food_name:this.food.food_name,food_description:this.food.food_description,time:this.food.cooking_time,location:this.food.food_location,category:this.food.food_category,tag:this.food.tag,cook_way:this.food.cook_way,difficulty:this.food.difficulty,lang:this.food.lang}},props:{food:{type:Object}},computed:{user:function(){return this.$store.state.user}},methods:{newImage:function(data){this.imageUrl=data;var image={id:this.pre_img_list.length,url:this.imageUrl};this.pre_img_list.push(image)},delete_res:function(t){for(var e in this.pre_img_list)this.pre_img_list[e].id==t&&this.pre_img_list.splice(e,1)},Cook:function(){this.cook_way=document.getElementById("cook").value,console.log(this.cook_way)},Difficulty:function(){this.difficulty=document.getElementById("difficult").value,console.log(this.difficulty)},Language:function(){this.lang=document.getElementById("language").value,console.log(this.lang)},preview:function(){var t,e=r(this.pre_img_list);try{for(e.s();!(t=e.n()).done;){var img=t.value;this.images+="".concat(img.url,"<###^^&&###>")}}catch(t){e.e(t)}finally{e.f()}console.log(this.pre_img_list);var data={username:this.food.username,food_name:this.food_name,food_description:this.food_description,cooking_time:this.time,food_location:this.location,food_category:this.category,tag:this.tag,cooking_way:this.cook_way,difficulty:this.difficulty,image:this.images,icon:this.user.icon,collection:!1,lang:this.lang};console.log(data),this.$store.commit("sharePageContentToggle","infoPreview"),this.$store.commit("foodInfo_temp_Edit",data)}},mounted:function(){console.log(this.food)}},d=o(42),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.food?n("div",{staticClass:"upload-area grid gap-y-4 text-lg font-fonts"},[n("div",{staticClass:"images bg-white"},[n("div",{staticClass:"image-preview"},t._l(t.pre_img_list,(function(image){return n("div",{key:image.id,staticClass:"relative"},[n("image-preview",{attrs:{image_url:image.url,image_type:t.imageType},on:{delete_res:function(e){return t.delete_res(image.id)}}})],1)})),0),t._v(" "),n("div",{staticClass:"upload py-10 text-center"},[n("img",{staticClass:"w-1/3 mx-auto",attrs:{src:o(384),alt:""}}),t._v(" "),n("p",[t._v("Please upload you food photo")]),t._v(" "),n("image-upload",{on:{newImage:t.newImage}})],1)]),t._v(" "),n("div",{staticClass:"food-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.food_name,expression:"food_name"}],staticClass:"w-full px-5",attrs:{type:"text",name:"food-name",placeholder:"Food name"},domProps:{value:t.food_name},on:{input:function(e){e.target.composing||(t.food_name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"food-description"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.food_description,expression:"food_description"}],staticClass:"w-full px-5",attrs:{name:"food-description",cols:"40",rows:"5",placeholder:"Tell us about your food..."},domProps:{value:t.food_description},on:{input:function(e){e.target.composing||(t.food_description=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"cooking-way info-line-between"},[n("span",[this.$store.getters.lan?n("span",[t._v("烹饪方式：")]):n("span",[t._v("Cooking method： ")])]),t._v(" "),n("span",[n("span",{staticClass:"required"},[this.$store.getters.lan?n("span",[t._v("必填")]):n("span",[t._v("Required")])]),t._v(" "),this.$store.getters.lan?n("select",{staticClass:"select",attrs:{name:"cook",id:"cook"},on:{change:t.Cook}},[n("option",{staticClass:"option",attrs:{value:"fry"}},[t._v("炒")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"deep fry"}},[t._v("炸")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"stew"}},[t._v("炖")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"steam"}},[t._v("蒸")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"bake"}},[t._v("烤")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"salad"}},[t._v("拌")])]):n("select",{staticClass:"select",attrs:{name:"cook",id:"cook"},on:{change:t.Cook}},[n("option",{staticClass:"option",attrs:{value:"fry"}},[t._v("fry")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"deep fry"}},[t._v("deep fry")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"stew"}},[t._v("stew")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"steam"}},[t._v("steam")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"bake"}},[t._v("bake")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"salad"}},[t._v("salad")])])])]),t._v(" "),n("div",{staticClass:"diffculty info-line-between"},[n("div",[this.$store.getters.lan?n("span",[t._v("难度：")]):n("span",[t._v("difficulty：")])]),t._v(" "),n("div",[n("span",{staticClass:"required"},[this.$store.getters.lan?n("span",[t._v("必填")]):n("span",[t._v("Required")])]),t._v(" "),this.$store.getters.lan?n("select",{staticClass:"select",attrs:{id:"difficult",name:"difficult"},on:{change:t.Difficulty}},[n("option",{staticClass:"option",attrs:{value:"easy"}},[t._v("简单")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"medium"}},[t._v("中等")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"difficult"}},[t._v("困难")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"super"}},[t._v("大师")])]):n("select",{staticClass:"select",attrs:{id:"difficult",name:"difficult"},on:{change:t.Difficulty}},[n("option",{staticClass:"option",attrs:{value:"easy"}},[t._v("easy")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"medium"}},[t._v("medium")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"difficult"}},[t._v("difficult")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"super"}},[t._v("super")])])])]),t._v(" "),n("div",{staticClass:"cook-time info-line-between"},[n("div",[this.$store.getters.lan?n("span",[t._v("烹饪时间：")]):n("span",[t._v("Cook Time:")])]),t._v(" "),n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"required"},[this.$store.getters.lan?n("span",[t._v("必填")]):n("span",[t._v("Required")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],staticClass:"select w-16 mr-2",attrs:{type:"text",placeholder:"30"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}}),t._v(" "),this.$store.getters.lan?n("span",[t._v("分钟")]):n("span",[t._v("Min")])])]),t._v(" "),n("div",{staticClass:"location info-line-between"},[n("div",[this.$store.getters.lan?n("span",[t._v("地域：")]):n("span",[t._v("Location:")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"select w-24 mr-2",attrs:{type:"text",placeholder:"Calgary"},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"category info-line-between"},[n("div",[this.$store.getters.lan?n("span",[t._v("类别：")]):n("span",[t._v("Category:")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"select w-24 mr-2",attrs:{type:"text",placeholder:"pasta"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"tag info-line-between"},[n("div",[this.$store.getters.lan?n("span",[t._v("标签：")]):n("span",[t._v("Tag:")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],staticClass:"select w-24 mr-2",attrs:{type:"text",placeholder:"for kids"},domProps:{value:t.tag},on:{input:function(e){e.target.composing||(t.tag=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"language info-line-between"},[n("div",[this.$store.getters.lan?n("span",[t._v("语言：")]):n("span",[t._v("Language:")])]),t._v(" "),n("div",[n("span",{staticClass:"required"},[this.$store.getters.lan?n("span",[t._v("必填")]):n("span",[t._v("Required")])]),t._v(" "),n("select",{staticClass:"select",attrs:{id:"language",name:"语言"},on:{change:t.Language}},[n("option",{staticClass:"option",attrs:{value:"English"}},[t._v("English")]),t._v(" "),n("option",{staticClass:"option",attrs:{value:"Chinese"}},[t._v("中文")])])])]),t._v(" "),n("div",{staticClass:"previewbtn flex justify-center"},[n("button",{staticClass:"button",on:{click:t.preview}},[t._v("Preview")])])]):t._e()}),[],!1,null,"063bf915",null);e.default=component.exports}}]);