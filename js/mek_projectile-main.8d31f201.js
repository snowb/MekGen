(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-main"],{"02f4":function(e,t,n){var a=n("4588"),i=n("be13");e.exports=function(e){return function(t,n){var c,s,r=String(i(t)),o=a(n),l=r.length;return o<0||o>=l?e?"":void 0:(c=r.charCodeAt(o),c<55296||c>56319||o+1===l||(s=r.charCodeAt(o+1))<56320||s>57343?e?r.charAt(o):c:e?r.slice(o,o+2):s-56320+(c-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var a=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},"072f":function(e,t,n){"use strict";t["a"]={methods:{selectedItem:function(e,t,n,a){let i="undefined"===typeof a?"":a;return"undefined"===typeof n?this[e]==t?"selected_item":i:this[e]==t?n:i},selectedItemMultiple:function(e,t,n,a){let i="undefined"===typeof a?"":a;return Array.isArray(this[e])?"undefined"===typeof n?this[e].includes(t)?"selected_item":i:this[e].includes(t)?n:i:""}}}},"0bfb":function(e,t,n){"use strict";var a=n("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,n){"use strict";n("b0c5");var a=n("2aba"),i=n("32e9"),c=n("79e5"),s=n("be13"),r=n("2b4c"),o=n("520a"),l=r("species"),u=!c(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var p=r(e),f=!c(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),m=f?!c(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[l]=function(){return n}),n[p](""),!t}):void 0;if(!f||!m||"replace"===e&&!u||"split"===e&&!d){var _=/./[p],h=n(s,p,""[e],function(e,t,n,a,i){return t.exec===o?f&&!i?{done:!0,value:_.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),g=h[0],v=h[1];a(String.prototype,e,g),i(RegExp.prototype,p,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"23c6":function(e,t,n){var a=n("2d95"),i=n("2b4c")("toStringTag"),c="Arguments"==a(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(n){}};e.exports=function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=s(t=Object(e),i))?n:c?a(t):"Object"==(r=a(t))&&"function"==typeof t.callee?"Arguments":r}},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"520a":function(e,t,n){"use strict";var a=n("0bfb"),i=RegExp.prototype.exec,c=String.prototype.replace,s=i,r="lastIndex",o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[r]||0!==t[r]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(s=function(e){var t,n,s,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),o&&(t=d[r]),s=i.call(d,e),o&&s&&(d[r]=d.global?s.index+s[0].length:t),l&&s&&s.length>1&&c.call(s[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,n){"use strict";var a=n("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"6b54":function(e,t,n){"use strict";n("3846");var a=n("cb7c"),i=n("0bfb"),c=n("9e1e"),s="toString",r=/./[s],o=function(e){n("2aba")(RegExp.prototype,s,e,!0)};n("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?o(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!c&&e instanceof RegExp?i.call(e):void 0)}):r.name!=s&&o(function(){return r.call(this)})},"7b4b":function(e,t,n){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,n){return e+=n>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8b5d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.projectile_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-projectile-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage}}),n("mek-projectile-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy}}),n("mek-projectile-burst-value",{attrs:{"burst-value":e.selected_burst_value},on:{"update-burst-value":e.updateBurstValue}}),n("div",{staticClass:"mek-inline-flex-row"},[n("div",{staticClass:"mek-inline-flex-col"},[n("mek-projectile-multi-feed",{attrs:{"multi-feed":e.selected_multi_feed},on:{"update-multi-feed":e.updateMultiFeed}})],1),n("mek-projectile-range-mod",{staticStyle:{"align-self":"baseline"},attrs:{"range-mod":e.selected_range_mod,"base-range":e.selected_damage.range},on:{"update-range-mod":e.updateRangeMod}}),n("mek-projectile-feature",{staticStyle:{"align-self":"baseline"},attrs:{"feature-array":e.feature_array,"burst-value":e.selected_burst_value.burst_value},on:{"update-feature":e.updateFeature}}),n("mek-space-efficiency",{staticStyle:{"align-self":"baseline"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-component-stats",{attrs:{cols:4,rows:5}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.selected_damage.damage)+" K")]),n("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),n("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Final Range: "+e._s(e.selected_damage.range*e.selected_range_mod.range_mod))]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),n("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),n("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),n("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row4"},slot:"col3-row4"},[e._v(" ")]),n("div",{attrs:{slot:"col3-row5"},slot:"col3-row5"},[e._v("Standard Ammo Cost: "+e._s(e.round(.01*e.cost,2))+"/shot")]),n("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),n("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),n("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],c=(n("a481"),n("072f")),s=n("8fcf"),r=n("7b4b"),o=n("f52e"),l={name:"mek_projectile",props:[],mixins:[c["a"],s["a"],r["a"],o["a"]],components:{"mek-projectile-damage":()=>n.e("chunk-7c01f7a7").then(n.bind(null,"1787")),"mek-projectile-accuracy":()=>n.e("chunk-b3f03c02").then(n.bind(null,"eadc")),"mek-projectile-multi-feed":()=>n.e("chunk-197b6e49").then(n.bind(null,"e556")),"mek-projectile-range-mod":()=>n.e("chunk-196a8d9b").then(n.bind(null,"9613")),"mek-projectile-burst-value":()=>n.e("chunk-67529e50").then(n.bind(null,"f594")),"mek-projectile-feature":()=>n.e("chunk-0fb1f2a7").then(n.bind(null,"e987")),"mek-space-efficiency":()=>n.e("mek-space-efficiency").then(n.bind(null,"cd4a")),"mek-component-name":()=>n.e("mek-component-name").then(n.bind(null,"192f")),"mek-save-reset-component":()=>n.e("mek-save-reset-component").then(n.bind(null,"c849")),"mek-component-stats":()=>n.e("mek-component-stats").then(n.bind(null,"d854"))},data:function(){let e={uuid:null,component_name:null,component_category:"equipment",component_type:"projectile",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:1,range:3},selected_accuracy:{accuracy:0,cost:1},selected_range_mod:{range_mod:1,cost:1},selected_multi_feed:{feeds:1,cost:1},selected_burst_value:{burst_value:1,cost:1},damage_capacity:1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.cost_multipliers.multi_feed=1,e.cost_multipliers.burst_value=1,e.cost_multipliers.range_mod=1,e},methods:{updateComponentName(e){this.component_name=e,this.component_changed=!0},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage(e){this.selected_damage.damage=e.damage,this.selected_damage.cost=e.cost,this.selected_damage.range=e.range,this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy(e){this.selected_accuracy.accuracy=e.accuracy,this.selected_accuracy.cost=e.cost,this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateMultiFeed(e){this.selected_multi_feed.feeds=e.feeds,this.selected_multi_feed.cost=e.cost,this.cost_multipliers.multi_feed=e.cost,this.component_changed=!0},updateBurstValue(e){this.selected_burst_value.burst_value=e.burst_value,this.selected_burst_value.cost=e.cost,this.cost_multipliers.burst_value=e.cost,this.component_changed=!0},updateRangeMod(e){this.selected_range_mod.range_mod=e.range_mod,this.selected_range_mod.cost=e.cost,this.cost_multipliers.range_mod=e.cost,this.component_changed=!0},updateFeature(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce((e,t)=>{return e*t.cost},1),this.projectile_name},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.selected_damage.damage=1,this.selected_accuracy.accuracy=1,this.selected_range_mod.range_mod=1,this.selected_multi_feed.feeds1,this.selected_burst_value.burst_value=1,this.$set(this,"feature_array",[]),this.$store.commit("saveComponent",null);break}},output_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="projectile",e.component_name=null===this.component_name?this.projectile_name:this.component_name,e.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers)),e.efficiencies=JSON.parse(JSON.stringify(this.efficiencies)),e.selected_damage=JSON.parse(JSON.stringify(this.selected_damage)),e.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy)),e.feature_array=JSON.parse(JSON.stringify(this.feature_array)),e.selected_range_mod=JSON.parse(JSON.stringify(this.selected_range_mod)),e.selected_multi_feed=JSON.parse(JSON.stringify(this.selected_multi_feed)),e.selected_burst_value=JSON.parse(JSON.stringify(this.selected_burst_value)),e.cost=this.cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.final_damage=this.final_damage,e.damage_capacity=this.damage_capacity,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),e},ingest_data(e){let t="Projectile is not valid, resetting.";this.universal_ingest_data(e,t),this.component_name==this.projectile_name&&this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=!1})}},computed:{raw_space(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){let e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},projectile_name(){let e=this.selected_burst_value.burst_value>1?"Burst-"+this.selected_burst_value.burst_value+" ":"";return e=this.feature_array.reduce((e,t)=>{return e+t.feature+" "},e),e=e.length>0?e+" Gun":"Gun",e.replace(/\s+/g," ")}}},u=l,d=n("2877"),p=Object(d["a"])(u,a,i,!1,null,null,null);t["default"]=p.exports},"8fcf":function(e,t,n){"use strict";n("ac6a"),n("6b54"),n("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let n=10**+t;return Math.round(+e*n)/n},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},a481:function(e,t,n){"use strict";var a=n("cb7c"),i=n("4bf8"),c=n("9def"),s=n("4588"),r=n("0390"),o=n("5f1b"),l=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,function(e,t,n,_){return[function(a,i){var c=e(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,c,i):n.call(String(c),a,i)},function(e,t){var i=_(n,e,this,t);if(i.done)return i.value;var d=a(e),p=String(this),f="function"===typeof t;f||(t=String(t));var g=d.global;if(g){var v=d.unicode;d.lastIndex=0}var y=[];while(1){var b=o(d,p);if(null===b)break;if(y.push(b),!g)break;var w=String(b[0]);""===w&&(d.lastIndex=r(p,c(d.lastIndex),v))}for(var x="",k=0,S=0;S<y.length;S++){b=y[S];for(var j=String(b[0]),N=l(u(s(b.index),p.length),0),O=[],J=1;J<b.length;J++)O.push(m(b[J]));var $=b.groups;if(f){var C=[j].concat(O,N,p);void 0!==$&&C.push($);var A=String(t.apply(void 0,C))}else A=h(j,p,N,O,$,t);N>=k&&(x+=p.slice(k,N)+A,k=N+j.length)}return x+p.slice(k)}];function h(e,t,a,c,s,r){var o=a+e.length,l=c.length,u=f;return void 0!==s&&(s=i(s),u=p),n.call(r,u,function(n,i){var r;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(o);case"<":r=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var p=d(u/10);return 0===p?n:p<=l?void 0===c[p-1]?i.charAt(1):c[p-1]+i.charAt(1):n}r=c[u-1]}return void 0===r?"":r})}})},b0c5:function(e,t,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},f52e:function(e,t,n){"use strict";n("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let n in e)if(!Object.keys(this._computedWatchers).includes(n))if("object"!==typeof e[n]||Array.isArray(e[n]))Array.isArray(e[n]),this.$set(this,n,e[n]);else{"object"===typeof this[n]&&null!==this[n]||(this[n]={});for(let t in e[n])this.$set(this[n],[t],e[n][t])}this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0}}}}}]);
//# sourceMappingURL=mek_projectile-main.8d31f201.js.map