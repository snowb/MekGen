(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_locomotion-main"],{"02f4":function(t,e,n){var o=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var c,s,r=String(i(e)),a=o(n),l=r.length;return a<0||a>=l?t?"":void 0:(c=r.charCodeAt(a),c<55296||c>56319||a+1===l||(s=r.charCodeAt(a+1))<56320||s>57343?t?r.charAt(a):c:t?r.slice(a,a+2):s-56320+(c-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var o=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},"08df":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":t.newComponent,"component-name":t.component_name||t.locomotion_name,"component-changed":t.component_changed},on:{"update-component-name":t.updateComponentName}}),n("span",{staticClass:"mek-inline-flex-row"},[n("mek-locomotion-type",{staticStyle:{"align-self":"flex-start"},attrs:{"locomotion-type":t.selected_locomotion_type},on:{"update-locomotion-type":t.updateLocomotionType,"alert-generated":t.handleAlert}}),n("mek-locomotion-class",{attrs:{"locomotion-type":t.selected_locomotion_type.type,"locomotion-class":t.selected_locomotion_class},on:{"update-locomotion-class":t.updateLocomotionClass,"alert-generated":t.handleAlert}}),n("span",{staticClass:"mek-inline-flex-col"},[n("mek-component-stats",{attrs:{cols:4,rows:6}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Total Damage Capacity: "+t._s(t.damage_capacity))]),n("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[t._v("Total Weight: "+t._s(t.weight)+" tons")]),n("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[t._v("Total Cost: "+t._s(t.cost)+" tons")])]),n("mek-save-reset-component",{on:{"save-reset-component":t.componentSaveReset}})],1)],1)],1)},i=[],c=n("8fcf"),s=n("f52e"),r=n("7b4b"),a={name:"mek_locomotion",props:[],mixins:[c["a"],s["a"],r["a"]],components:{"mek-locomotion-type":()=>n.e("mek_locomotion-type").then(n.bind(null,"9947")),"mek-locomotion-class":()=>n.e("mek_locomotion-class").then(n.bind(null,"f41a")),"mek-component-name":()=>n.e("mek-component-name").then(n.bind(null,"dba3")),"mek-save-reset-component":()=>n.e("mek-save-reset-component").then(n.bind(null,"c342")),"mek-component-stats":()=>n.e("mek_component-stats").then(n.bind(null,"67b1"))},data:function(){let t={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"locomotion",original_component:null,component_changed:!0,selected_locomotion_type:{type:"Wheels"},selected_locomotion_class:{name:"Superlight",cost:1,kills:1},hasAlert:!1};return t},methods:{updateComponentName(t){this.component_name=t,this.custom_component_name=!0,this.component_changed=!0},updateLocomotionType(t){this.component_type=t.type,this.$set(this,"selected_locomotion_type",t),this.component_changed=!0},updateLocomotionClass(t){this.$set(this,"selected_locomotion_class",t),this.component_changed=!0},ingest_data(t){let e="Bad data, resetting to 1K Wheels.";this.universal_ingest_data(t,e),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=this.hasAlert})},output_data(){let t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="locomotion",t.component_name=null===this.component_name?this.locomotion_name:this.component_name,t.custom_component_name=this.custom_component_name,t.selected_locomotion_type=JSON.parse(JSON.stringify(this.selected_locomotion_type)),t.selected_locomotion_class=JSON.parse(JSON.stringify(this.selected_locomotion_class)),t.damage_capacity=t.selected_locomotion_class.kills,t.cost=this.cost,t.weight=this.weight,this.$nextTick(()=>{this.component_changed=this.hasAlert}),this.original_component=JSON.stringify(t),t},componentSaveReset:function(t){let e="reset"==t&&null==this.original_component?"clear":t;switch(e){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.selected_locomotion_type.type="Wheels",this.$set(this,"selected_locomotion_class",{name:"Superlight",cost:1,kills:1}),this.component_name=null,this.$store.commit("saveComponent",null);break}},handleAlert(t){this.hasAlert=t}},computed:{locomotion_name(){return this.selected_locomotion_class.kills+"K "+this.selected_locomotion_type.type},cost(){return this.selected_locomotion_class.cost},damage_capacity(){return this.selected_locomotion_class.kills},weight(){return this.round(this.damage_capacity/2,2)}}},l=a,u=n("2877"),p=Object(u["a"])(l,o,i,!1,null,null,null);e["default"]=p.exports},"0bfb":function(t,e,n){"use strict";var o=n("cb7c");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var o=n("2aba"),i=n("32e9"),c=n("79e5"),s=n("be13"),r=n("2b4c"),a=n("520a"),l=r("species"),u=!c(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var m=r(t),h=!c(function(){var e={};return e[m]=function(){return 7},7!=""[t](e)}),d=h?!c(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[m](""),!e}):void 0;if(!h||!d||"replace"===t&&!u||"split"===t&&!p){var f=/./[m],_=n(s,m,""[t],function(t,e,n,o,i){return e.exec===a?h&&!i?{done:!0,value:f.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}}),g=_[0],v=_[1];o(String.prototype,t,g),i(RegExp.prototype,m,2==e?function(t,e){return v.call(t,this,e)}:function(t){return v.call(t,this)})}}},"23c6":function(t,e,n){var o=n("2d95"),i=n("2b4c")("toStringTag"),c="Arguments"==o(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"520a":function(t,e,n){"use strict";var o=n("0bfb"),i=RegExp.prototype.exec,c=String.prototype.replace,s=i,r="lastIndex",a=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[r]||0!==e[r]}(),l=void 0!==/()??/.exec("")[1],u=a||l;u&&(s=function(t){var e,n,s,u,p=this;return l&&(n=new RegExp("^"+p.source+"$(?!\\s)",o.call(p))),a&&(e=p[r]),s=i.call(p,t),a&&s&&(p[r]=p.global?s.index+s[0].length:e),l&&s&&s.length>1&&c.call(s[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),t.exports=s},"5f1b":function(t,e,n){"use strict";var o=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"6b54":function(t,e,n){"use strict";n("3846");var o=n("cb7c"),i=n("0bfb"),c=n("9e1e"),s="toString",r=/./[s],a=function(t){n("2aba")(RegExp.prototype,s,t,!0)};n("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?a(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!c&&t instanceof RegExp?i.call(t):void 0)}):r.name!=s&&a(function(){return r.call(this)})},"7b4b":function(t,e,n){"use strict";e["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let t=1;for(let e in this.cost_multipliers)t*=this.cost_multipliers[e];return this.round(t,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(t,e,n){return t+=n>0?", ":"",t+=e.feature,t},"")},newComponent(){let t=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof t||null===t||(t.uuid!==this.uuid&&t.component_category==this.component_category&&t.component_type==this.component_type&&this.ingest_data(t),!1)}}}},"8fcf":function(t,e,n){"use strict";n("ac6a"),n("6b54"),n("a481");e["a"]={methods:{round:function(t,e){if("undefined"===typeof e||0==+e)return Math.round(+t);let n=10**+e;return Math.round(+t*n)/n},floor:function(t){return Math.floor(+t)},ceiling:function(t){return Math.ceiling(+t)},decimalPad(t){return+t%1===0?t.toPrecision(2):t},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16))},invisible_pad:function(t){let e="";return t.forEach(function(t){t.length>e.length&&(e=t)},0),e+"XX"},isNumeric:function(t){return"undefined"!==typeof t&&!isNaN(parseFloat(t))&&isFinite(t)}}}},a481:function(t,e,n){"use strict";var o=n("cb7c"),i=n("4bf8"),c=n("9def"),s=n("4588"),r=n("0390"),a=n("5f1b"),l=Math.max,u=Math.min,p=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,f){return[function(o,i){var c=t(this),s=void 0==o?void 0:o[e];return void 0!==s?s.call(o,c,i):n.call(String(c),o,i)},function(t,e){var i=f(n,t,this,e);if(i.done)return i.value;var p=o(t),m=String(this),h="function"===typeof e;h||(e=String(e));var g=p.global;if(g){var v=p.unicode;p.lastIndex=0}var y=[];while(1){var b=a(p,m);if(null===b)break;if(y.push(b),!g)break;var x=String(b[0]);""===x&&(p.lastIndex=r(m,c(p.lastIndex),v))}for(var k="",w=0,S=0;S<y.length;S++){b=y[S];for(var $=String(b[0]),A=l(u(s(b.index),m.length),0),C=[],N=1;N<b.length;N++)C.push(d(b[N]));var E=b.groups;if(h){var R=[$].concat(C,A,m);void 0!==E&&R.push(E);var O=String(e.apply(void 0,R))}else O=_($,m,A,C,E,e);A>=w&&(k+=m.slice(w,A)+O,w=A+$.length)}return k+m.slice(w)}];function _(t,e,o,c,s,r){var a=o+t.length,l=c.length,u=h;return void 0!==s&&(s=i(s),u=m),n.call(r,u,function(n,i){var r;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(a);case"<":r=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var m=p(u/10);return 0===m?n:m<=l?void 0===c[m-1]?i.charAt(1):c[m-1]+i.charAt(1):n}r=c[u-1]}return void 0===r?"":r})}})},b0c5:function(t,e,n){"use strict";var o=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},f52e:function(t,e,n){"use strict";n("ac6a");e["a"]={methods:{universal_ingest_data(t,e){this.original_component=JSON.stringify(t),null===t&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",e));for(let n in t)if(!Object.keys(this._computedWatchers).includes(n))if("object"!==typeof t[n]||Array.isArray(t[n]))Array.isArray(t[n]),this.$set(this,n,t[n]);else{"object"===typeof this[n]&&null!==this[n]||(this[n]={});for(let e in t[n])this.$set(this[n],[e],t[n][e])}this.$forceUpdate()},updateComponentName:function(t){this.component_name=t,this.component_changed=!0},addAlert(t){this.alerts.push(t)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_locomotion-main.5a06afd9.js.map