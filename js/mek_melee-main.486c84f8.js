(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee-main"],{"02f4":function(e,t,n){var a=n("4588"),i=n("be13");e.exports=function(e){return function(t,n){var r,c,s=String(i(t)),o=a(n),l=s.length;return o<0||o>=l?e?"":void 0:(r=s.charCodeAt(o),r<55296||r>56319||o+1===l||(c=s.charCodeAt(o+1))<56320||c>57343?e?s.charAt(o):r:e?s.slice(o,o+2):c-56320+(r-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var a=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},"072f":function(e,t,n){"use strict";t["a"]={methods:{selectedItem:function(e,t,n,a){let i="undefined"===typeof a?"":a;return"undefined"===typeof n?this[e]==t?"selected_item":i:this[e]==t?n:i},selectedItemMultiple:function(e,t,n,a){let i="undefined"===typeof a?"":a;return Array.isArray(this[e])?"undefined"===typeof n?this[e].includes(t)?"selected_item":i:this[e].includes(t)?n:i:""}}}},"0bfb":function(e,t,n){"use strict";var a=n("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,n){"use strict";n("b0c5");var a=n("2aba"),i=n("32e9"),r=n("79e5"),c=n("be13"),s=n("2b4c"),o=n("520a"),l=s("species"),u=!r(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var m=s(e),f=!r(function(){var t={};return t[m]=function(){return 7},7!=""[e](t)}),p=f?!r(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[l]=function(){return n}),n[m](""),!t}):void 0;if(!f||!p||"replace"===e&&!u||"split"===e&&!d){var g=/./[m],h=n(c,m,""[e],function(e,t,n,a,i){return t.exec===o?f&&!i?{done:!0,value:g.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),_=h[0],v=h[1];a(String.prototype,e,_),i(RegExp.prototype,m,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"23c6":function(e,t,n){var a=n("2d95"),i=n("2b4c")("toStringTag"),r="Arguments"==a(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=Object(e),i))?n:r?a(t):"Object"==(s=a(t))&&"function"==typeof t.callee?"Arguments":s}},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"520a":function(e,t,n){"use strict";var a=n("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,c=i,s="lastIndex",o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[s]||0!==t[s]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(c=function(e){var t,n,c,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),o&&(t=d[s]),c=i.call(d,e),o&&c&&(d[s]=d.global?c.index+c[0].length:t),l&&c&&c.length>1&&r.call(c[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)}),c}),e.exports=c},"5f1b":function(e,t,n){"use strict";var a=n("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var r=n.call(e,t);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"6b54":function(e,t,n){"use strict";n("3846");var a=n("cb7c"),i=n("0bfb"),r=n("9e1e"),c="toString",s=/./[c],o=function(e){n("2aba")(RegExp.prototype,c,e,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?o(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?i.call(e):void 0)}):s.name!=c&&o(function(){return s.call(this)})},"7b4b":function(e,t,n){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,n){return e+=n>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,n){"use strict";n("ac6a"),n("6b54"),n("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let n=10**+t;return Math.round(+e*n)/n},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},"9df1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.melee_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-melee-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage}}),n("mek-melee-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy}})],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-melee-feature",{attrs:{"feature-array":e.feature_array},on:{"update-feature":e.updateFeature}}),e.isEntangle?n("mek-melee-entangle-range",{staticStyle:{"align-self":"start"},attrs:{base_damage:e.selected_damage.damage,range_modifier:e.entangle.range_modifier,damage_modifier:e.entangle.damage_modifier},on:{"update-damage-and-range":e.updateDamageAndRange}}):e._e(),n("mek-space-efficiency",{staticStyle:{"align-self":"start"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-component-stats",{attrs:{cols:4,rows:4}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v(e._s(0!=e.entangle.damage_modifier?"Base":"")+" Kills: "+e._s(e.selected_damage.damage)+" K")]),0!=e.entangle.damage_modifier?n("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Kills: "+e._s(e.selected_damage.damage-e.entangle.damage_modifier)+" K")]):e._e(),0!=e.entangle.range_modifier?n("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Range: "+e._s(e.entangle.range_modifier)+" hex")]):e._e(),n("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),n("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),n("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),n("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),n("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),n("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),n("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],r=n("072f"),c=n("8fcf"),s=n("7b4b"),o=n("f52e"),l={name:"mek_melee",props:[""],mixins:[r["a"],c["a"],s["a"],o["a"]],components:{"mek-melee-damage":()=>n.e("mek-melee-damage").then(n.bind(null,"5b53")),"mek-melee-accuracy":()=>n.e("mek-melee-accuracy").then(n.bind(null,"ce32")),"mek-melee-feature":()=>n.e("mek-melee-feature").then(n.bind(null,"dd03")),"mek-melee-entangle-range":()=>n.e("mek-melee-entangle-range").then(n.bind(null,"f25b")),"mek-space-efficiency":()=>n.e("mek-space-efficiency").then(n.bind(null,"cd4a")),"mek-component-name":()=>n.e("mek-component-name").then(n.bind(null,"192f")),"mek-save-reset-component":()=>n.e("mek-save-reset-component").then(n.bind(null,"c849")),"mek-component-stats":()=>n.e("mek-component-stats").then(n.bind(null,"d854"))},data:function(){let e={uuid:null,component_name:null,component_category:"equipment",component_type:"melee",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:.5},selected_accuracy:{accuracy:0,cost:1},damage_capacity:1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.entangle={},e.entangle.range_modifier=0,e.entangle.damage_modifier=0,e},methods:{updateComponentName(e){this.component_name=e,this.component_changed=!0},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage(e){this.selected_damage.damage=e.damage,this.selected_damage.cost=e.cost,this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy(e){this.selected_accuracy.accuracy=e.accuracy,this.selected_accuracy.cost=e.cost,this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateFeature(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce((e,t)=>{return e*t.cost},1),this.isEntangle||(this.entangle.range_modifier=0,this.entangle.damage_modifier=0),this.melee_name},updateDamageAndRange(e){this.entangle.range_modifier=e.range,this.entangle.damage_modifier=e.damage},output_melee_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="melee",e.component_name=null===this.component_name?this.melee_name:this.component_name,e.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers)),e.efficiencies=JSON.parse(JSON.stringify(this.efficiencies)),e.selected_damage=JSON.parse(JSON.stringify(this.selected_damage)),e.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy)),e.feature_array=JSON.parse(JSON.stringify(this.feature_array)),e.cost=this.cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.final_damage=this.final_damage,e.damage_capacity=this.selected_damage.damage,this.isEntangle&&(e.entangle={},e.entangle.damage_modifier=this.entangle.damage_modifier,e.entangle.range_modifier=this.entangle.range_modifier),this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),e},ingest_data(e){let t="Melee is not valid, resetting.";this.universal_ingest_data(e,t),this.component_name==this.melee_name&&this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=!1})},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_melee_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.entangle.damage_modifier=0,this.entangle.range_modifier=0,this.selected_damage.damage=1,this.selected_accuracy.accuracy=0,this.$set(this,"feature_array",[]),this.$store.commit("saveComponent",null);break}}},computed:{final_damage(){return this.selected_damage.damage-this.entangle.damage_modifier},raw_space(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){let e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},isEntangle(){return this.feature_array.some(e=>{return"entangle"==e.feature.toLowerCase()})},melee_name(){let e=this.feature_array.reduce((e,t)=>{return e+=t.name+" ",e},"");return e+"Melee"}}},u=l,d=n("2877"),m=Object(d["a"])(u,a,i,!1,null,null,null);t["default"]=m.exports},a481:function(e,t,n){"use strict";var a=n("cb7c"),i=n("4bf8"),r=n("9def"),c=n("4588"),s=n("0390"),o=n("5f1b"),l=Math.max,u=Math.min,d=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,function(e,t,n,g){return[function(a,i){var r=e(this),c=void 0==a?void 0:a[t];return void 0!==c?c.call(a,r,i):n.call(String(r),a,i)},function(e,t){var i=g(n,e,this,t);if(i.done)return i.value;var d=a(e),m=String(this),f="function"===typeof t;f||(t=String(t));var _=d.global;if(_){var v=d.unicode;d.lastIndex=0}var y=[];while(1){var b=o(d,m);if(null===b)break;if(y.push(b),!_)break;var w=String(b[0]);""===w&&(d.lastIndex=s(m,r(d.lastIndex),v))}for(var x="",k=0,S=0;S<y.length;S++){b=y[S];for(var $=String(b[0]),N=l(u(c(b.index),m.length),0),A=[],E=1;E<b.length;E++)A.push(p(b[E]));var O=b.groups;if(f){var C=[$].concat(A,N,m);void 0!==O&&C.push(O);var R=String(t.apply(void 0,C))}else R=h($,m,N,A,O,t);N>=k&&(x+=m.slice(k,N)+R,k=N+$.length)}return x+m.slice(k)}];function h(e,t,a,r,c,s){var o=a+e.length,l=r.length,u=f;return void 0!==c&&(c=i(c),u=m),n.call(s,u,function(n,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(o);case"<":s=c[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var m=d(u/10);return 0===m?n:m<=l?void 0===r[m-1]?i.charAt(1):r[m-1]+i.charAt(1):n}s=r[u-1]}return void 0===s?"":s})}})},b0c5:function(e,t,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},f52e:function(e,t,n){"use strict";n("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let n in e)if(!Object.keys(this._computedWatchers).includes(n))if("object"!==typeof e[n]||Array.isArray(e[n]))Array.isArray(e[n]),this.$set(this,n,e[n]);else{"object"===typeof this[n]&&null!==this[n]||(this[n]={});for(let t in e[n])this.$set(this[n],[t],e[n][t])}this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_melee-main.486c84f8.js.map