(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-kills-space-trade","mek_servo-kills-space-trade-data-module"],{"0874":function(e,t,i){"use strict";i("6b54");var r=i("e814"),n=i.n(r),s=(i("a481"),i("bd86")),a=(i("c5f6"),i("75fc"));i("7f7f"),i("ac6a");function o(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return i.forEach(function(t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])}),e}var c={},l={name:"fa-icon",render:function(e){if(null===this.name)return e();var t={class:this.klass,style:this.style,attrs:{role:this.label?"img":"presentation","aria-label":this.label||null,tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}};return this.raw&&(t.domProps={innerHTML:this.raw}),e("svg",t,this.raw&&this.icon?null:this.$slots.default||[].concat(Object(a["a"])(this.icon.paths.map(function(t,i){return e("path",{attrs:t,key:"path-".concat(i)})})),Object(a["a"])(this.icon.polygons.map(function(t,i){return e("polygon",{attrs:t,key:"polygon-".concat(i)})}))))},props:{name:{type:String,validator:function(e){return!e||e in c||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(e,'".')+"\nPlease make sure you have imported this icon before using it."),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String,tabindex:[Number,String]},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e="undefined"===typeof e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return Object(s["a"])({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?c[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,i=e.height;return Math.max(t,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(e,i,r){var n=f();return t[r]=n,' id="'.concat(n,'"')}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,i,r,n){var s=i||n;return s&&t[s]?"#".concat(t[s]):e}),e},focusable:function(){var e=this.tabindex;if(null==e)return"false";var t="string"===typeof e?n()(e,10):e;return t>=0?null:"false"}},mounted:function(){var e=this;if(this.name||null===this.name||0!==this.$children.length){if(!this.icon){var t=0,i=0;this.$children.forEach(function(r){r.outerScale=e.normalizedScale,t=Math.max(t,r.width),i=Math.max(i,r.height)}),this.childrenWidth=t,this.childrenHeight=i,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(i-e.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(e){for(var t in e){var i=e[t],r=i.paths,n=void 0===r?[]:r,s=i.d,a=i.polygons,l=void 0===a?[]:a,u=i.points;s&&n.push({d:s}),u&&l.push({points:u}),c[t]=o({},i,{paths:n,polygons:l})}},icons:c},u=870711;function f(){return"fa-".concat((u++).toString(16))}var d,h,p=l,v=(i("df9a"),i("2877")),m=Object(v["a"])(p,d,h,!1,null,null,null);t["a"]=m.exports},"20fd":function(e,t,i){"use strict";var r=i("d9f6"),n=i("aebd");e.exports=function(e,t,i){t in e?r.f(e,t,n(0,i)):e[t]=i}},3702:function(e,t,i){var r=i("481b"),n=i("5168")("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||s[n]===e)}},"40c3":function(e,t,i){var r=i("6b4c"),n=i("5168")("toStringTag"),s="Arguments"==r(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(i){}};e.exports=function(e){var t,i,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(i=a(t=Object(e),n))?i:s?r(t):"Object"==(o=r(t))&&"function"==typeof t.callee?"Arguments":o}},"4ee1":function(e,t,i){var r=i("5168")("iterator"),n=!1;try{var s=[7][r]();s["return"]=function(){n=!0},Array.from(s,function(){throw 2})}catch(a){}e.exports=function(e,t){if(!t&&!n)return!1;var i=!1;try{var s=[7],o=s[r]();o.next=function(){return{done:i=!0}},s[r]=function(){return o},e(s)}catch(a){}return i}},"549b":function(e,t,i){"use strict";var r=i("d864"),n=i("63b6"),s=i("241e"),a=i("b0dc"),o=i("3702"),c=i("b447"),l=i("20fd"),u=i("7cd6");n(n.S+n.F*!i("4ee1")(function(e){Array.from(e)}),"Array",{from:function(e){var t,i,n,f,d=s(e),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,m=void 0!==v,_=0,b=u(d);if(m&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==b||h==Array&&o(b))for(t=c(d.length),i=new h(t);t>_;_++)l(i,_,m?v(d[_],_):d[_]);else for(f=b.call(d),i=new h;!(n=f.next()).done;_++)l(i,_,m?a(f,v,[n.value,_],!0):n.value);return i.length=_,i}})},"54a1":function(e,t,i){i("6c1c"),i("1654"),e.exports=i("95d5")},"5d6b":function(e,t,i){var r=i("e53d").parseInt,n=i("a1ce").trim,s=i("e692"),a=/^[-+]?0[xX]/;e.exports=8!==r(s+"08")||22!==r(s+"0x16")?function(e,t){var i=n(String(e),3);return r(i,t>>>0||(a.test(i)?16:10))}:r},"5dbc":function(e,t,i){var r=i("d3f4"),n=i("8b97").set;e.exports=function(e,t,i){var s,a=t.constructor;return a!==i&&"function"==typeof a&&(s=a.prototype)!==i.prototype&&r(s)&&n&&n(e,s),e}},7445:function(e,t,i){var r=i("63b6"),n=i("5d6b");r(r.G+r.F*(parseInt!=n),{parseInt:n})},"75fc":function(e,t,i){"use strict";var r=i("a745"),n=i.n(r);function s(e){if(n()(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}var a=i("774e"),o=i.n(a),c=i("c8bb"),l=i.n(c);function u(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return o()(e)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(e){return s(e)||u(e)||f()}i.d(t,"a",function(){return d})},"774e":function(e,t,i){e.exports=i("d2d5")},"7cd6":function(e,t,i){var r=i("40c3"),n=i("5168")("iterator"),s=i("481b");e.exports=i("584a").getIteratorMethod=function(e){if(void 0!=e)return e[n]||e["@@iterator"]||s[r(e)]}},"8b97":function(e,t,i){var r=i("d3f4"),n=i("cb7c"),s=function(e,t){if(n(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,i){return s(e,i),t?e.__proto__=i:r(e,i),e}}({},!1):void 0),check:s}},"8c50":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"mek-flex-col"},[i("div",{staticClass:"metallic_background_small1"},[i("div",{staticClass:"subsection_container1",on:{mousedown:function(e){return e.preventDefault()}}},[i("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.title))]),i("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.title))]),i("div",[i("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(t){return e.incrementProperty("kills")}}},[i("v-icon",{attrs:{name:"plus-square"}})],1),e._v("\n                Kills: "+e._s(e.checked_modifiers.kills)+" | Space"+e._s(e.checked_modifiers.space>1?"s":"")+": "+e._s(e.checked_modifiers.space)+"\n                "),i("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(t){return e.incrementProperty("space")}}},[i("v-icon",{attrs:{name:"plus-square"}})],1)])])])])},n=[],s=i("d866"),a=i("f1d4"),o=(i("aa2b"),i("0874")),c={name:"mek_servo_kills_space_trade",mixins:[s["a"]],props:["base_kills","space_modifier","kills_modifier","base_space"],components:{"v-icon":o["a"]},data:function(){var e={selected_modifier:{}};return e.selected_modifier.kills=0,e.selected_modifier.space=0,e.selected_modifier.cost=0,e.alerts=[],e},methods:{selectExtraSpace:function(){this.$emit("update-extra-space",this.selected_modifier)},incrementProperty:function(e){this.selected_modifier.kills="kills"==e?this.selected_modifier.kills+1:this.selected_modifier.kills-1,this.selected_modifier.space="space"==e?this.selected_modifier.space+2:this.selected_modifier.space-2;var t=Object(a["cleaned_feature"])(this.selected_modifier,this.base_kills,this.base_space);this.selected_modifier.kills=t.data.kills_modifier,this.selected_modifier.space=t.data.space_modifier,this.selected_modifier.cost=t.data.cost,this.publishAlerts(),this.selectExtraSpace()}},computed:{checked_modifiers:function(){this.selected_modifier.kills=this.kills_modifier,this.selected_modifier.space=this.space_modifier;var e=Object(a["cleaned_feature"])(this.selected_modifier,this.base_kills,this.base_space);return e.update&&(this.selected_modifier.kills=e.data.kills_modifier,this.selected_modifier.space=e.data.space_modifier,this.selected_modifier.cost=e.data.cost,this.publishAlerts(),this.$emit("alert-generated",!0)),{kills:e.data.kills,space:e.data.space}},title:function(){switch(!0){case this.selected_modifier.kills<0:return"Extra Space";case this.selected_modifier.kills>0:return"Reinforced Servo"}return"Kill/Space Trade"}}},l=c,u=(i("fb6c"),i("2877")),f=Object(u["a"])(l,r,n,!1,null,"289be8fe",null);t["default"]=f.exports},"95d5":function(e,t,i){var r=i("40c3"),n=i("5168")("iterator"),s=i("481b");e.exports=i("584a").isIterable=function(e){var t=Object(e);return void 0!==t[n]||"@@iterator"in t||s.hasOwnProperty(r(t))}},aa2b:function(e,t,i){"use strict";var r=i("0874");r["a"].register({"plus-square":{width:448,height:512,paths:[{d:"M400 32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352zM368 284v-56c0-6.6-5.4-12-12-12h-92v-92c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12v92h-92c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h92v92c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-92h92c6.6 0 12-5.4 12-12z"}]}})},aa77:function(e,t,i){var r=i("5ca1"),n=i("be13"),s=i("79e5"),a=i("fdef"),o="["+a+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(e,t,i){var n={},o=s(function(){return!!a[e]()||c[e]()!=c}),l=n[e]=o?t(d):a[e];i&&(n[i]=l),r(r.P+r.F*o,"String",n)},d=f.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},b0dc:function(e,t,i){var r=i("e4ae");e.exports=function(e,t,i,n){try{return n?t(r(i)[0],i[1]):t(i)}catch(a){var s=e["return"];throw void 0!==s&&r(s.call(e)),a}}},b7b1:function(e,t,i){},b9e9:function(e,t,i){i("7445"),e.exports=i("584a").parseInt},c5f6:function(e,t,i){"use strict";var r=i("7726"),n=i("69a8"),s=i("2d95"),a=i("5dbc"),o=i("6a99"),c=i("79e5"),l=i("9093").f,u=i("11e9").f,f=i("86cc").f,d=i("aa77").trim,h="Number",p=r[h],v=p,m=p.prototype,_=s(i("2aeb")(m))==h,b="trim"in String.prototype,g=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():d(t,3);var i,r,n,s=t.charCodeAt(0);if(43===s||45===s){if(i=t.charCodeAt(2),88===i||120===i)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var a,c=t.slice(2),l=0,u=c.length;l<u;l++)if(a=c.charCodeAt(l),a<48||a>n)return NaN;return parseInt(c,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof p&&(_?c(function(){m.valueOf.call(i)}):s(i)!=h)?a(new v(g(t)),i,p):g(t)};for(var k,y=i("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)n(v,k=y[x])&&!n(p,k)&&f(p,k,u(v,k));p.prototype=m,m.constructor=p,i("2aba")(r,h,p)}},c8bb:function(e,t,i){e.exports=i("54a1")},d2d5:function(e,t,i){i("1654"),i("549b"),e.exports=i("584a").Array.from},d866:function(e,t,i){"use strict";i("cadf"),i("551c"),i("f751"),i("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},dbf1:function(e,t,i){},df9a:function(e,t,i){"use strict";var r=i("dbf1"),n=i.n(r);n.a},e814:function(e,t,i){e.exports=i("b9e9")},f1d4:function(e,t,i){"use strict";i.r(t),i.d(t,"cleaned_feature",function(){return r});var r=function(e,t,i){var r={kills_modifier:0,space_modifier:0,cost:0};r.kills=void 0!==t?t:2,r.space=void 0!==i?i:2;var n=[],s=!0;if(void 0===t&&(n.push("Mek_Servo-Kills-Space-Trade:"),n.push("**** Missing Base Kills, reseting to 2."),s=!0),void 0===i&&(n.push("Mek_Servo-Kills-Space-Trade:"),n.push("**** Missing Base Space, reseting to 2."),s=!0),void 0===e.kills||void 0===e.space||void 0===e.cost)return n.push("Mek_Servo-Kills-Space-Trade:"),n.push("**** Missing values, reseting to 0."),s=!0,{data:r,update:s,alerts:n};r.kills_modifier=e.kills,r.space_modifier=e.space,r.cost=e;var a=t+r.kills_modifier,o=i+r.space_modifier;switch(!0){case a<=0:case o<0:case 2*r.kills_modifier+r.space_modifier!==0:n.push("Mek_Servo-Kills-Space-Trade:"),n.push("**** Invalid values, reseting to 0."),r.kills_modifier=0,r.space_modifier=0,r.cost=0,s=!0;break}return r.cost=r.kills_modifier>0?2*r.kills_modifier:0,r.kills=r.kills+r.kills_modifier,r.space=r.space+r.space_modifier,{data:r,update:s,alerts:n}}},fb6c:function(e,t,i){"use strict";var r=i("b7b1"),n=i.n(r);n.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=mek_servo-kills-space-trade-legacy.85387cdc.js.map