(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-component-name"],{"0874":function(t,n,e){"use strict";e("6b54");var r=e("e814"),i=e.n(r),o=(e("a481"),e("bd86")),a=(e("c5f6"),e("a745")),c=e.n(a);function s(t){if(c()(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}var u=e("774e"),f=e.n(u),l=e("c8bb"),h=e.n(l);function d(t){if(h()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return f()(t)}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(t){return s(t)||d(t)||p()}e("7f7f"),e("ac6a");function m(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return e.forEach(function(n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])}),t}var g={},b={name:"fa-icon",render:function(t){if(null===this.name)return t();var n={class:this.klass,style:this.style,attrs:{role:this.label?"img":"presentation","aria-label":this.label||null,tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}};return this.raw&&(n.domProps={innerHTML:this.raw}),t("svg",n,this.raw&&this.icon?null:this.$slots.default||[].concat(v(this.icon.paths.map(function(n,e){return t("path",{attrs:n,key:"path-".concat(e)})})),v(this.icon.polygons.map(function(n,e){return t("polygon",{attrs:n,key:"polygon-".concat(e)})}))))},props:{name:{type:String,validator:function(t){return!t||t in g||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(t,'".')+"\nPlease make sure you have imported this icon before using it."),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String,tabindex:[Number,String]},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t="undefined"===typeof t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return Object(o["a"])({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?g[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var t=this.icon,n=t.width,e=t.height;return Math.max(n,e)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,n={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,e,r){var i=w();return n[r]=i,' id="'.concat(i,'"')}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,e,r,i){var o=e||i;return o&&n[o]?"#".concat(n[o]):t}),t},focusable:function(){var t=this.tabindex;if(null==t)return"false";var n="string"===typeof t?i()(t,10):t;return n>=0?null:"false"}},mounted:function(){var t=this;if(this.name||null===this.name||0!==this.$children.length){if(!this.icon){var n=0,e=0;this.$children.forEach(function(r){r.outerScale=t.normalizedScale,n=Math.max(n,r.width),e=Math.max(e,r.height)}),this.childrenWidth=n,this.childrenHeight=e,this.$children.forEach(function(t){t.x=(n-t.width)/2,t.y=(e-t.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(t){for(var n in t){var e=t[n],r=e.paths,i=void 0===r?[]:r,o=e.d,a=e.polygons,c=void 0===a?[]:a,s=e.points;o&&i.push({d:o}),s&&c.push({points:s}),g[n]=m({},e,{paths:i,polygons:c})}},icons:g},y=870711;function w(){return"fa-".concat((y++).toString(16))}var x,_,N=b,S=(e("df9a"),e("2877")),E=Object(S["a"])(N,x,_,!1,null,null,null);n["a"]=E.exports},"192f":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{margin:"10px 0px","align-self":"flex-start"},on:{mouseover:function(n){t.showEdit=!0},mouseout:function(n){t.showEdit=!1}}},[e("span",{staticClass:"section_header"},[e("span",{staticStyle:{"font-size":"50%","vertical-align":"super"}},[t._v(t._s(t.newComponent?"(New)":"")+" "+t._s(t.componentChanged?"(Unsaved)":"")+" ")]),e("span",{staticClass:"edit_name",attrs:{contenteditable:t.editMode},on:{keydown:function(n){return t.catchEnter(n)}}},[t._v(t._s(t.componentName))])]),t.showEdit&&!t.editMode?e("span",{staticClass:"icon_container edit_icon",attrs:{title:"Edit Name"},on:{click:t.editName}},[e("v-icon",{attrs:{name:"edit",scale:"2"}})],1):t._e(),t.editMode?e("span",{staticClass:"icon_container save_icon",attrs:{title:"Save Name"},on:{click:t.saveName}},[e("v-icon",{attrs:{name:"save",scale:"2"}})],1):t._e()])},i=[],o=e("0874");o["a"].register({edit:{width:575,height:512,paths:[{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8l-218.4 218.4-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8 218.4-218.4c3.8-3.8 10-3.8 13.8 0zM564.6 60.3c15.2 15.2 15.2 39.9 0 55.2l-35.4 35.4c-3.8 3.8-10 3.8-13.8 0l-90.2-90.2c-3.8-3.8-3.8-10 0-13.8l35.4-35.4c15.3-15.2 40-15.2 55.2 0zM384 346.2c0-3.2 1.3-6.2 3.5-8.5l40-40c7.6-7.5 20.5-2.2 20.5 8.5v157.8c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h285.8c10.7 0 16.1 12.9 8.5 20.5l-40 40c-2.3 2.2-5.3 3.5-8.5 3.5h-229.8v320h320v-101.8z"}]}}),o["a"].register({save:{width:448,height:512,paths:[{d:"M433.9 129.9c7.8 7.8 14.1 23 14.1 33.9v268.1c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h268.1c11 0 26.2 6.3 33.9 14.1zM224 416c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zM320 111.5c0-2.7-1.6-6.5-3.5-8.5l-3.5-3.5c-2.3-2.3-5.3-3.5-8.5-3.5h-228.5c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h232c6.6 0 12-5.4 12-12v-100.5z"}]}});var a={name:"mek_component_name",props:["componentName","newComponent","componentChanged"],components:{"v-icon":o["a"]},data:function(){var t={showEdit:!1,editMode:!1};return t},methods:{editName:function(){this.editMode=!0;var t=document.querySelector(".edit_name");t.focus(),t.innerText=this.componentName;var n=document.createRange(),e=window.getSelection();n.setStart(t.childNodes[0],0),n.setEnd(t.childNodes[0],t.childNodes[0].length),e.removeAllRanges(),e.addRange(n),window.setTimeout(function(){t.focus()},1)},saveName:function(){this.editMode=!1;var t=document.querySelector(".edit_name").textContent;this.$emit("update-component-name",t)},catchEnter:function(t){switch(!0){case/^[\w\d-_ ]$|^Arrow(Up|Down|Left|Right)$|^(Delete|Backspace)$/i.test(t.key):break;case/^Enter$/i.test(t.key):t.preventDefault(),t.stopPropagation(),this.saveName();break;default:t.preventDefault(),t.stopPropagation()}}}},c=a,s=(e("49ed"),e("2877")),u=Object(s["a"])(c,r,i,!1,null,"9978ced4",null);n["default"]=u.exports},"20fd":function(t,n,e){"use strict";var r=e("d9f6"),i=e("aebd");t.exports=function(t,n,e){n in t?r.f(t,n,i(0,e)):t[n]=e}},3702:function(t,n,e){var r=e("481b"),i=e("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},"40c3":function(t,n,e){var r=e("6b4c"),i=e("5168")("toStringTag"),o="Arguments"==r(function(){return arguments}()),a=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=a(n=Object(t),i))?e:o?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},"49ed":function(t,n,e){"use strict";var r=e("5481"),i=e.n(r);i.a},"4ee1":function(t,n,e){var r=e("5168")("iterator"),i=!1;try{var o=[7][r]();o["return"]=function(){i=!0},Array.from(o,function(){throw 2})}catch(a){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],c=o[r]();c.next=function(){return{done:e=!0}},o[r]=function(){return c},t(o)}catch(a){}return e}},5481:function(t,n,e){},"549b":function(t,n,e){"use strict";var r=e("d864"),i=e("63b6"),o=e("241e"),a=e("b0dc"),c=e("3702"),s=e("b447"),u=e("20fd"),f=e("7cd6");i(i.S+i.F*!e("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,i,l,h=o(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,m=void 0!==v,g=0,b=f(h);if(m&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==b||d==Array&&c(b))for(n=s(h.length),e=new d(n);n>g;g++)u(e,g,m?v(h[g],g):h[g]);else for(l=b.call(h),e=new d;!(i=l.next()).done;g++)u(e,g,m?a(l,v,[i.value,g],!0):i.value);return e.length=g,e}})},"54a1":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("95d5")},"5d6b":function(t,n,e){var r=e("e53d").parseInt,i=e("a1ce").trim,o=e("e692"),a=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,n){var e=i(String(t),3);return r(e,n>>>0||(a.test(e)?16:10))}:r},"5dbc":function(t,n,e){var r=e("d3f4"),i=e("8b97").set;t.exports=function(t,n,e){var o,a=n.constructor;return a!==e&&"function"==typeof a&&(o=a.prototype)!==e.prototype&&r(o)&&i&&i(t,o),t}},7445:function(t,n,e){var r=e("63b6"),i=e("5d6b");r(r.G+r.F*(parseInt!=i),{parseInt:i})},"774e":function(t,n,e){t.exports=e("d2d5")},"7cd6":function(t,n,e){var r=e("40c3"),i=e("5168")("iterator"),o=e("481b");t.exports=e("584a").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},"7f7f":function(t,n,e){var r=e("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in i||e("9e1e")&&r(i,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"8b97":function(t,n,e){var r=e("d3f4"),i=e("cb7c"),o=function(t,n){if(i(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(i){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},"95d5":function(t,n,e){var r=e("40c3"),i=e("5168")("iterator"),o=e("481b");t.exports=e("584a").isIterable=function(t){var n=Object(t);return void 0!==n[i]||"@@iterator"in n||o.hasOwnProperty(r(n))}},aa77:function(t,n,e){var r=e("5ca1"),i=e("be13"),o=e("79e5"),a=e("fdef"),c="["+a+"]",s="​",u=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,n,e){var i={},c=o(function(){return!!a[t]()||s[t]()!=s}),u=i[t]=c?n(h):a[t];e&&(i[e]=u),r(r.P+r.F*c,"String",i)},h=l.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(u,"")),2&n&&(t=t.replace(f,"")),t};t.exports=l},b0dc:function(t,n,e){var r=e("e4ae");t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(a){var o=t["return"];throw void 0!==o&&r(o.call(t)),a}}},b9e9:function(t,n,e){e("7445"),t.exports=e("584a").parseInt},c5f6:function(t,n,e){"use strict";var r=e("7726"),i=e("69a8"),o=e("2d95"),a=e("5dbc"),c=e("6a99"),s=e("79e5"),u=e("9093").f,f=e("11e9").f,l=e("86cc").f,h=e("aa77").trim,d="Number",p=r[d],v=p,m=p.prototype,g=o(e("2aeb")(m))==d,b="trim"in String.prototype,y=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=b?n.trim():h(n,3);var e,r,i,o=n.charCodeAt(0);if(43===o||45===o){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+n}for(var a,s=n.slice(2),u=0,f=s.length;u<f;u++)if(a=s.charCodeAt(u),a<48||a>i)return NaN;return parseInt(s,r)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof p&&(g?s(function(){m.valueOf.call(e)}):o(e)!=d)?a(new v(y(n)),e,p):y(n)};for(var w,x=e("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;x.length>_;_++)i(v,w=x[_])&&!i(p,w)&&l(p,w,f(v,w));p.prototype=m,m.constructor=p,e("2aba")(r,d,p)}},c8bb:function(t,n,e){t.exports=e("54a1")},d2d5:function(t,n,e){e("1654"),e("549b"),t.exports=e("584a").Array.from},dbf1:function(t,n,e){},df9a:function(t,n,e){"use strict";var r=e("dbf1"),i=e.n(r);i.a},e814:function(t,n,e){t.exports=e("b9e9")},fdef:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=mek-component-name-legacy.fd56b96f.js.map