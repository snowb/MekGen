(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_build-general"],{"02f4":function(e,t,n){var o=n("4588"),r=n("be13");e.exports=function(e){return function(t,n){var i,a,c=String(r(t)),s=o(n),u=c.length;return s<0||s>=u?e?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):i:e?c.slice(s,s+2):a-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var o=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?o(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var o=n("cb7c");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,n){"use strict";n("b0c5");var o=n("2aba"),r=n("32e9"),i=n("79e5"),a=n("be13"),c=n("2b4c"),s=n("520a"),u=c("species"),l=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var m=c(e),f=!i(function(){var t={};return t[m]=function(){return 7},7!=""[e](t)}),h=f?!i(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[m](""),!t}):void 0;if(!f||!h||"replace"===e&&!l||"split"===e&&!p){var d=/./[m],g=n(a,m,""[e],function(e,t,n,o,r){return t.exec===s?f&&!r?{done:!0,value:d.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),v=g[0],_=g[1];o(String.prototype,e,v),r(RegExp.prototype,m,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}}},"23c6":function(e,t,n){var o=n("2d95"),r=n("2b4c")("toStringTag"),i="Arguments"==o(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(n){}};e.exports=function(e){var t,n,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=a(t=Object(e),r))?n:i?o(t):"Object"==(c=o(t))&&"function"==typeof t.callee?"Arguments":c}},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"520a":function(e,t,n){"use strict";var o=n("0bfb"),r=RegExp.prototype.exec,i=String.prototype.replace,a=r,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[c]||0!==t[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(a=function(e){var t,n,a,l,p=this;return u&&(n=new RegExp("^"+p.source+"$(?!\\s)",o.call(p))),s&&(t=p[c]),a=r.call(p,e),s&&a&&(p[c]=p.global?a.index+a[0].length:t),u&&a&&a.length>1&&i.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),e.exports=a},"5f1b":function(e,t,n){"use strict";var o=n("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"6b54":function(e,t,n){"use strict";n("3846");var o=n("cb7c"),r=n("0bfb"),i=n("9e1e"),a="toString",c=/./[a],s=function(e){n("2aba")(RegExp.prototype,a,e,!0)};n("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?s(function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?r.call(e):void 0)}):c.name!=a&&s(function(){return c.call(this)})},"7b4b":function(e,t,n){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)if("object"===typeof this.cost_multipliers[t])for(let n in this.cost_multipliers[t])e*=this.cost_multipliers[t][n];else e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,n){return e+=n>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,n){"use strict";n("ac6a"),n("6b54"),n("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let n=10**+t;return Math.round(+e*n)/n},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},a481:function(e,t,n){"use strict";var o=n("cb7c"),r=n("4bf8"),i=n("9def"),a=n("4588"),c=n("0390"),s=n("5f1b"),u=Math.max,l=Math.min,p=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,function(e,t,n,d){return[function(o,r){var i=e(this),a=void 0==o?void 0:o[t];return void 0!==a?a.call(o,i,r):n.call(String(i),o,r)},function(e,t){var r=d(n,e,this,t);if(r.done)return r.value;var p=o(e),m=String(this),f="function"===typeof t;f||(t=String(t));var v=p.global;if(v){var _=p.unicode;p.lastIndex=0}var b=[];while(1){var y=s(p,m);if(null===y)break;if(b.push(y),!v)break;var x=String(y[0]);""===x&&(p.lastIndex=c(m,i(p.lastIndex),_))}for(var k="",S=0,w=0;w<b.length;w++){y=b[w];for(var $=String(y[0]),A=u(l(a(y.index),m.length),0),E=[],R=1;R<y.length;R++)E.push(h(y[R]));var N=y.groups;if(f){var C=[$].concat(E,A,m);void 0!==N&&C.push(N);var O=String(t.apply(void 0,C))}else O=g($,m,A,E,N,t);A>=S&&(k+=m.slice(S,A)+O,S=A+$.length)}return k+m.slice(S)}];function g(e,t,o,i,a,c){var s=o+e.length,u=i.length,l=f;return void 0!==a&&(a=r(a),l=m),n.call(c,l,function(n,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,o);case"'":return t.slice(s);case"<":c=a[r.slice(1,-1)];break;default:var l=+r;if(0===l)return n;if(l>u){var m=p(l/10);return 0===m?n:m<=u?void 0===i[m-1]?r.charAt(1):i[m-1]+r.charAt(1):n}c=i[l-1]}return void 0===c?"":c})}})},b0c5:function(e,t,n){"use strict";var o=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},b41f:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.mek_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("mek-save-reset-component",{staticStyle:{"align-self":"start"},on:{"save-reset-component":e.componentSaveReset}})],1)},r=[],i=n("8fcf"),a=n("7b4b"),c=n("f52e"),s={name:"mek_build-general",props:[],mixins:[i["a"],a["a"],c["a"]],components:{"mek-save-reset-component":()=>n.e("mek-save-reset-component").then(n.bind(null,"972e")),"mek-component-name":()=>n.e("mek-component-name").then(n.bind(null,"dba3"))},data:()=>{let e={uuid:null,component_name:null,custom_component_name:!1,component_category:"mek",component_type:"mek",original_component:null,component_changed:!0,alerts:[],hasAlert:!1};return e},methods:{updateComponentName(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"new":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"new":this.uuid=null,this.component_name=null,this.$store.commit("saveComponent",null);break}},output_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="mek",e.component_type="mek",e.component_name=this.custom_component_name?this.component_name:this.mek_name,e.custom_component_name=this.custom_component_name,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),JSON.parse(this.original_component)},ingest_data(e){let t="Beam is not valid, resetting.";this.universal_ingest_data(e,t),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=this.hasAlert})},handleAlert(e){this.hasAlert=e}},computed:{mek_name(){return this.custom_component_name?this.component_name:"Unnamed Mek"}}},u=s,l=n("2877"),p=Object(l["a"])(u,o,r,!1,null,"55391449",null);t["default"]=p.exports},f52e:function(e,t,n){"use strict";n("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e);let n=JSON.parse(this.original_component);null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let o in n)if(!Object.keys(this._computedWatchers).includes(o))if("object"!==typeof n[o]||Array.isArray(n[o]))Array.isArray(n[o]),this.$set(this,o,n[o]);else{"object"===typeof this[o]&&null!==this[o]||(this[o]={});for(let e in n[o])this.$set(this[o],[e],n[o][e])}this.$forceUpdate()},updateComponentName(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_build-general.41cb533f.js.map