(window.webpackJsonp=window.webpackJsonp||[]).push([[34,20,21,22],{352:function(t,e,n){},355:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(43),n(359),n(37),n(96),{components:{iconLoading:n(358).default},data:function(){return{name:"",if_loading:!1,date:this.$store.getters.Date,url:null}},props:{image_type:{type:String},image_url:{type:String},id:{type:Number}},methods:{onchange:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.if_loading=!0,o=t.target.files[0],e.name="".concat(e.date,"_").concat(e.image_type,"_").concat(o.name),(r=new FormData).set("file",o,e.name),n.next=7,e.$axios.$post("/api/upload",r,{headers:{"content-type":"multipart/form-data"}});case 7:""==n.sent&&(e.url="https://homedelicious.ml/img/uploadImgs/"+e.name,e.$emit("newImage",e.url,e.id),e.if_loading=!1);case 9:case"end":return n.stop()}}),n)})))()}}}),l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid justify-items-center"},[t.if_loading?n("icon-loading"):n("input",{staticClass:"w-1/2",attrs:{type:"file",accept:"image/*"},on:{change:t.onchange}})],1)}),[],!1,null,"463eb198",null);e.default=component.exports},357:function(t,e,n){"use strict";n(352)},358:function(t,e,n){"use strict";n.r(e);var o={},r=(n(357),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-roller"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])}],!1,null,"3079d279",null);e.default=component.exports},359:function(t,e,n){"use strict";var o=n(8),r=n(4),l=n(98),c=n(14),v=n(10),d=n(49),f=n(212),m=n(70),_=n(5),h=n(72),y=n(71).f,C=n(31).f,w=n(13).f,x=n(360).trim,I="Number",k=r.Number,$=k.prototype,E=d(h($))==I,N=function(t){var e,n,o,r,l,c,v,code,d=m(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=x(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(c=(l=d.slice(2)).length,v=0;v<c;v++)if((code=l.charCodeAt(v))<48||code>r)return NaN;return parseInt(l,o)}return+d};if(l(I,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var A,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(E?_((function(){$.valueOf.call(n)})):d(n)!=I)?f(new k(N(e)),n,S):N(e)},j=o?y(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;j.length>P;P++)v(k,A=j[P])&&!v(S,A)&&w(S,A,C(k,A));S.prototype=$,$.constructor=S,c(r,I,S)}},360:function(t,e,n){var o=n(18),r="["+n(361)+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),v=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},361:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},364:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(43),n(55),n(97),{data:function(){return{icon_class:""}},props:{image_type:{type:String},image_url:{type:String}},methods:{Delete:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.image_url.replace("https://homedelicious.ml/img/uploadImgs/",""),{image:n},e.next=4,t.$axios({url:"/api/upload",method:"delete",data:{image:n}}).then((function(){t.$emit("delete_res",!0)})).catch((function(){alert("delete not success")}));case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){switch(this.image_type){case"user":this.icon_class="rounded-round object-cover";break;case"image":this.icon_class="w-full h-full object-cover"}}}),l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("img",{class:t.icon_class,attrs:{src:t.image_url,alt:""}}),t._v(" "),n("svg",{staticClass:"h-5 w-5 top-0 right-0 absolute bg-gray-200 rounded-sm shadow-md cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},on:{click:t.Delete}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])}),[],!1,null,"24a7c9c3",null);e.default=component.exports},384:function(t,e,n){t.exports=n.p+"img/food.d45b11e.png"},404:function(t,e,n){"use strict";n.r(e);n(136),n(45),n(11),n(37),n(46),n(23),n(28),n(47),n(48),n(30);var o=n(364);function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,v=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){v=!0,r=t},f:function(){try{c||null==n.return||n.return()}finally{if(v)throw r}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c={components:{ImageUpload:n(355).default,ImagePreview:o.default},data:function(){return{images:"",food_preview:{},pre_img_list:[],imageType:"image",imageUrl:"",food_name:"",food_description:"",time:"",location:"",category:"",tag:"",cook_way:"fry",difficulty:"easy",lang:"English"}},computed:{user:function(){return this.$store.state.user}},methods:{newImage:function(data){this.imageUrl=data;var image={id:this.pre_img_list.length,url:this.imageUrl};this.pre_img_list.push(image)},delete_res:function(t){for(var e in this.pre_img_list)this.pre_img_list[e].id==t&&this.pre_img_list.splice(e,1)},Cook:function(){this.cook_way=document.getElementById("cook").value,console.log(this.cook_way)},Difficulty:function(){this.difficulty=document.getElementById("difficult").value,console.log(this.difficulty)},Language:function(){this.lang=document.getElementById("language").value,console.log(this.lang)},preview:function(){var t,e=r(this.pre_img_list);try{for(e.s();!(t=e.n()).done;){var img=t.value;this.images+="".concat(img.url,"<###^^&&###>")}}catch(t){e.e(t)}finally{e.f()}var data={username:this.user.username,food_name:this.food_name,food_description:this.food_description,cooking_time:this.time,food_location:this.location,food_category:this.category,tag:this.tag,cooking_way:this.cook_way,difficulty:this.difficulty,image:this.images,icon:this.user.icon,collection:!1,lang:this.lang};this.$store.commit("sharePageContentToggle","infoPreview"),this.$store.commit("foodInfo_temp_Edit",data)}}},v=n(42),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"upload-area grid gap-y-4 text-lg font-fonts"},[o("div",{staticClass:"images bg-white"},[o("div",{staticClass:"image-preview"},t._l(t.pre_img_list,(function(image){return o("div",{key:image.id,staticClass:"relative"},[o("image-preview",{staticClass:"h-half",attrs:{image_url:image.url,image_type:t.imageType},on:{delete_res:function(e){return t.delete_res(image.id)}}})],1)})),0),t._v(" "),o("div",{staticClass:"upload py-10 text-center"},[o("img",{staticClass:"w-1/3 mx-auto",attrs:{src:n(384),alt:""}}),t._v(" "),o("p",[t._v("Please upload you food photo")]),t._v(" "),o("image-upload",{on:{newImage:t.newImage}})],1)]),t._v(" "),o("div",{staticClass:"food-name"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.food_name,expression:"food_name"}],staticClass:"w-full px-5",attrs:{type:"text",name:"food-name",placeholder:"Food name"},domProps:{value:t.food_name},on:{input:function(e){e.target.composing||(t.food_name=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"food-description"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.food_description,expression:"food_description"}],staticClass:"w-full px-5",attrs:{name:"food-description",cols:"40",rows:"5",placeholder:"Tell us about your food..."},domProps:{value:t.food_description},on:{input:function(e){e.target.composing||(t.food_description=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"cooking-way info-line-between"},[o("span",[this.$store.getters.lan?o("span",[t._v("烹饪方式：")]):o("span",[t._v("Cooking method： ")])]),t._v(" "),o("span",[o("span",{staticClass:"required"},[this.$store.getters.lan?o("span",[t._v("必填")]):o("span",[t._v("Required")])]),t._v(" "),this.$store.getters.lan?o("select",{staticClass:"select",attrs:{name:"cook",id:"cook"},on:{change:t.Cook}},[o("option",{staticClass:"option",attrs:{value:"fry"}},[t._v("炒")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"deep fry"}},[t._v("炸")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"stew"}},[t._v("炖")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"steam"}},[t._v("蒸")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"bake"}},[t._v("烤")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"salad"}},[t._v("拌")])]):o("select",{staticClass:"select",attrs:{name:"cook",id:"cook"},on:{change:t.Cook}},[o("option",{staticClass:"option",attrs:{value:"fry"}},[t._v("fry")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"deep fry"}},[t._v("deep fry")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"stew"}},[t._v("stew")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"steam"}},[t._v("steam")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"bake"}},[t._v("bake")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"salad"}},[t._v("salad")])])])]),t._v(" "),o("div",{staticClass:"diffculty info-line-between"},[o("div",[this.$store.getters.lan?o("span",[t._v("难度：")]):o("span",[t._v("difficulty：")])]),t._v(" "),o("div",[o("span",{staticClass:"required"},[this.$store.getters.lan?o("span",[t._v("必填")]):o("span",[t._v("Required")])]),t._v(" "),this.$store.getters.lan?o("select",{staticClass:"select",attrs:{id:"difficult",name:"difficult"},on:{change:t.Difficulty}},[o("option",{staticClass:"option",attrs:{value:"easy"}},[t._v("简单")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"medium"}},[t._v("中等")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"difficult"}},[t._v("困难")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"super"}},[t._v("大师")])]):o("select",{staticClass:"select",attrs:{id:"difficult",name:"difficult"},on:{change:t.Difficulty}},[o("option",{staticClass:"option",attrs:{value:"easy"}},[t._v("easy")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"medium"}},[t._v("medium")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"difficult"}},[t._v("difficult")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"super"}},[t._v("super")])])])]),t._v(" "),o("div",{staticClass:"cook-time info-line-between"},[o("div",[this.$store.getters.lan?o("span",[t._v("烹饪时间：")]):o("span",[t._v("Cook Time:")])]),t._v(" "),o("div",{staticClass:"flex items-center"},[o("div",{staticClass:"required"},[this.$store.getters.lan?o("span",[t._v("必填")]):o("span",[t._v("Required")])]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],staticClass:"select w-16 mr-2",attrs:{type:"text",placeholder:"30"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}}),t._v(" "),this.$store.getters.lan?o("span",[t._v("分钟")]):o("span",[t._v("Min")])])]),t._v(" "),o("div",{staticClass:"location info-line-between"},[o("div",[this.$store.getters.lan?o("span",[t._v("地域：")]):o("span",[t._v("Location:")])]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"select w-24 mr-2",attrs:{type:"text",placeholder:"Calgary"},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"category info-line-between"},[o("div",[this.$store.getters.lan?o("span",[t._v("类别：")]):o("span",[t._v("Category:")])]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],staticClass:"select w-24 mr-2",attrs:{type:"text",placeholder:"pasta"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"tag info-line-between"},[o("div",[this.$store.getters.lan?o("span",[t._v("标签：")]):o("span",[t._v("Tag:")])]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],staticClass:"select w-24 mr-2",attrs:{type:"text",placeholder:"for kids"},domProps:{value:t.tag},on:{input:function(e){e.target.composing||(t.tag=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"language info-line-between"},[o("div",[this.$store.getters.lan?o("span",[t._v("语言：")]):o("span",[t._v("Language:")])]),t._v(" "),o("div",[o("span",{staticClass:"required"},[this.$store.getters.lan?o("span",[t._v("必填")]):o("span",[t._v("Required")])]),t._v(" "),o("select",{staticClass:"select",attrs:{id:"language",name:"语言"},on:{change:t.Language}},[o("option",{staticClass:"option",attrs:{value:"English"}},[t._v("English")]),t._v(" "),o("option",{staticClass:"option",attrs:{value:"Chinese"}},[t._v("中文")])])])]),t._v(" "),o("div",{staticClass:"previewbtn flex justify-center"},[o("button",{staticClass:"button",on:{click:t.preview}},[t._v("Preview")])])])}),[],!1,null,"4bf8708e",null);e.default=component.exports}}]);