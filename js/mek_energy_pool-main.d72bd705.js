(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy_pool-main"],{"02f4":function(e,t,i){var n=i("4588"),o=i("be13");e.exports=function(e){return function(t,i){var r,s,a=String(o(t)),c=n(i),l=a.length;return c<0||c>=l?e?"":void 0:(r=a.charCodeAt(c),r<55296||r>56319||c+1===l||(s=a.charCodeAt(c+1))<56320||s>57343?e?a.charAt(c):r:e?a.slice(c,c+2):s-56320+(r-55296<<10)+65536)}}},"0390":function(e,t,i){"use strict";var n=i("02f4")(!0);e.exports=function(e,t,i){return t+(i?n(e,t).length:1)}},"072f":function(e,t,i){"use strict";t["a"]={methods:{selectedItem:function(e,t,i,n){let o="undefined"===typeof n?"":n;return"undefined"===typeof i?this[e]==t?"selected_item":o:this[e]==t?i:o},selectedItemMultiple:function(e,t,i,n){let o="undefined"===typeof n?"":n;return Array.isArray(this[e])?"undefined"===typeof i?this[e].includes(t)?"selected_item":o:this[e].includes(t)?i:o:""}}}},"0bfb":function(e,t,i){"use strict";var n=i("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,i){"use strict";i("b0c5");var n=i("2aba"),o=i("32e9"),r=i("79e5"),s=i("be13"),a=i("2b4c"),c=i("520a"),l=a("species"),u=!r(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();e.exports=function(e,t,i){var f=a(e),h=!r(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),d=h?!r(function(){var t=!1,i=/a/;return i.exec=function(){return t=!0,null},"split"===e&&(i.constructor={},i.constructor[l]=function(){return i}),i[f](""),!t}):void 0;if(!h||!d||"replace"===e&&!u||"split"===e&&!p){var _=/./[f],m=i(s,f,""[e],function(e,t,i,n,o){return t.exec===c?h&&!o?{done:!0,value:_.call(t,i,n)}:{done:!0,value:e.call(i,t,n)}:{done:!1}}),g=m[0],y=m[1];n(String.prototype,e,g),o(RegExp.prototype,f,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}}},"23c6":function(e,t,i){var n=i("2d95"),o=i("2b4c")("toStringTag"),r="Arguments"==n(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(i){}};e.exports=function(e){var t,i,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(i=s(t=Object(e),o))?i:r?n(t):"Object"==(a=n(t))&&"function"==typeof t.callee?"Arguments":a}},3846:function(e,t,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"520a":function(e,t,i){"use strict";var n=i("0bfb"),o=RegExp.prototype.exec,r=String.prototype.replace,s=o,a="lastIndex",c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[a]||0!==t[a]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(s=function(e){var t,i,s,u,p=this;return l&&(i=new RegExp("^"+p.source+"$(?!\\s)",n.call(p))),c&&(t=p[a]),s=o.call(p,e),c&&s&&(p[a]=p.global?s.index+s[0].length:t),l&&s&&s.length>1&&r.call(s[0],i,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,i){"use strict";var n=i("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var i=e.exec;if("function"===typeof i){var r=i.call(e,t);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"6b54":function(e,t,i){"use strict";i("3846");var n=i("cb7c"),o=i("0bfb"),r=i("9e1e"),s="toString",a=/./[s],c=function(e){i("2aba")(RegExp.prototype,s,e,!0)};i("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?c(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?o.call(e):void 0)}):a.name!=s&&c(function(){return a.call(this)})},"7b4b":function(e,t,i){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,i){return e+=i>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,i){"use strict";i("ac6a"),i("6b54"),i("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let i=10**+t;return Math.round(+e*i)/i},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},a481:function(e,t,i){"use strict";var n=i("cb7c"),o=i("4bf8"),r=i("9def"),s=i("4588"),a=i("0390"),c=i("5f1b"),l=Math.max,u=Math.min,p=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,d=function(e){return void 0===e?e:String(e)};i("214f")("replace",2,function(e,t,i,_){return[function(n,o){var r=e(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,r,o):i.call(String(r),n,o)},function(e,t){var o=_(i,e,this,t);if(o.done)return o.value;var p=n(e),f=String(this),h="function"===typeof t;h||(t=String(t));var g=p.global;if(g){var y=p.unicode;p.lastIndex=0}var v=[];while(1){var b=c(p,f);if(null===b)break;if(v.push(b),!g)break;var w=String(b[0]);""===w&&(p.lastIndex=a(f,r(p.lastIndex),y))}for(var x="",S=0,k=0;k<v.length;k++){b=v[k];for(var z=String(b[0]),$=l(u(s(b.index),f.length),0),N=[],E=1;E<b.length;E++)N.push(d(b[E]));var O=b.groups;if(h){var C=[z].concat(N,$,f);void 0!==O&&C.push(O);var A=String(t.apply(void 0,C))}else A=m(z,f,$,N,O,t);$>=S&&(x+=f.slice(S,$)+A,S=$+z.length)}return x+f.slice(S)}];function m(e,t,n,r,s,a){var c=n+e.length,l=r.length,u=h;return void 0!==s&&(s=o(s),u=f),i.call(a,u,function(i,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(c);case"<":a=s[o.slice(1,-1)];break;default:var u=+o;if(0===u)return i;if(u>l){var f=p(u/10);return 0===f?i:f<=l?void 0===r[f-1]?o.charAt(1):r[f-1]+o.charAt(1):i}a=r[u-1]}return void 0===a?"":a})}})},b0c5:function(e,t,i){"use strict";var n=i("520a");i("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},f52e:function(e,t,i){"use strict";i("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let i in e)if(!Object.keys(this._computedWatchers).includes(i))if("object"!==typeof e[i]||Array.isArray(e[i]))Array.isArray(e[i]),this.$set(this,i,e[i]);else{"object"===typeof this[i]&&null!==this[i]||(this[i]={});for(let t in e[i])this.$set(this[i],[t],e[i][t])}this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},fcc7:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[i("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.energy_pool_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),i("div",{staticClass:"mek-inline-flex-row"},[i("mek-energy-pool-pool",{staticStyle:{"align-self":"flex-start"},attrs:{"energy-pool":e.selected_energy_pool},on:{"update-energy-pool":e.updateEnergyPool}}),i("div",{staticClass:"mek-inline-flex-col"},[i("mek-energy-pool-size",{attrs:{"portfolio-size":e.selected_portfolio_size},on:{"update-portfolio-size":e.updatePortfolioSize}}),i("mek-energy-pool-feature",{staticStyle:{"align-self":"flex-start"},attrs:{"feature-array":e.feature_array},on:{"update-feature":e.updateFeature}})],1),i("mek-space-efficiency",{staticStyle:{"align-self":"flex-start"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1),i("div",{staticClass:"mek-inline-flex-row"},[i("mek-component-stats",{attrs:{cols:4,rows:5}},[i("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Portfolio Size: "+e._s(e.infinite_size?"Infinite":e.selected_portfolio_size.size))]),i("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),i("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),i("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),i("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),i("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),i("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),i("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_energy_pool.cost))]),i("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),i("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),i("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},o=[],r=i("072f"),s=i("8fcf"),a=i("7b4b"),c=i("f52e"),l={name:"mek_energy_pool",props:[],mixins:[r["a"],s["a"],a["a"],c["a"]],components:{"mek-energy-pool-pool":()=>i.e("mek-energy-pool-pool").then(i.bind(null,"696c")),"mek-energy-pool-size":()=>i.e("mek-energy-pool-size").then(i.bind(null,"a027")),"mek-energy-pool-feature":()=>i.e("mek-energy-pool-feature").then(i.bind(null,"048f")),"mek-space-efficiency":()=>i.e("mek-space-efficiency").then(i.bind(null,"cd4a")),"mek-component-name":()=>i.e("mek-component-name").then(i.bind(null,"192f")),"mek-save-reset-component":()=>i.e("mek-save-reset-component").then(i.bind(null,"c849")),"mek-component-stats":()=>i.e("mek-component-stats").then(i.bind(null,"d854"))},data:function(){let e={uuid:null,component_name:null,component_category:"equipment",component_type:"energy-pool",original_component:null,component_changed:!0,damage_capacity:5,selected_energy_pool:{cost:10,power_available:0,max_power:50,damage_capacity:5},selected_portfolio_size:{size:3,cost:1},selected_morphable:!1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.portfolio_size=1,e.cost_multipliers.feature=1,e},methods:{updateComponentName(e){this.component_name=e,this.component_changed=!0},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateEnergyPool(e){this.selected_energy_pool.cost=e.cost,this.selected_energy_pool.power_available=e.power_available,this.selected_energy_pool.max_power=e.max_power,this.selected_energy_pool.damage_capacity=e.damage_capacity,this.component_changed=!0,this.damage_capacity=e.damage_capacity},updatePortfolioSize(e){this.selected_portfolio_size.cost=e.cost,this.selected_portfolio_size.size=e.size,this.cost_multipliers.portfolio_size=e.cost,this.component_changed=!0},updateFeature(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce((e,t)=>{return e*t.cost},1),this.energy_pool_name,this.damage_capacity=this.fragile?1:this.selected_energy_pool.damage_capacity},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"selected_energy_pool",{cost:10,power_available:0,max_power:50,damage_capacity:5}),this.$set(this,"feature_array",[]),this.$set(this,"selected_portfolio_size",{size:3,cost:1}),this.selected_morphable=!1,this.cost_multipliers.portfolio_size=1,this.cost_multipliers.feature=1,this.$store.commit("saveComponent",null);break}},output_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="energy-pool",e.component_name=null===this.component_name?this.energy_pool_name:this.component_name,e.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers)),e.efficiencies=JSON.parse(JSON.stringify(this.efficiencies)),e.selected_energy_pool=JSON.parse(JSON.stringify(this.selected_energy_pool)),e.selected_portfolio_size=JSON.parse(JSON.stringify(this.selected_portfolio_size)),e.selected_portfolio_size.size=this.selected_portfolio_size.size===1/0?"Infinity":this.selected_portfolio_size.size,e.feature_array=JSON.parse(JSON.stringify(this.feature_array)),e.selected_morphable=this.selected_morphable,e.cost=this.total_cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.damage_capacity=this.damage_capacity,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),e},ingest_data(e){let t="Energy Pool is not valid, resetting.";this.universal_ingest_data(e,t),this.component_name==this.energy_pool_name&&this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=!1})}},computed:{raw_space(){return this.selected_energy_pool.cost*this.cost_multiplier},cost:function(){let e=this.selected_energy_pool.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},energy_pool_name(){let e="";return e=this.feature_array.reduce((e,t)=>{return e+t.feature+" "},e),e+=this.infinite_size?"Infinite-Portfolio ":"Portfolio-"+this.selected_portfolio_size.size+" ",e+" Energy Pool"},fragile(){return this.feature_array.some(function(e){if("fragile"==e.feature.toLowerCase())return!0})},infinite_size(){return this.selected_portfolio_size.size===1/0}}},u=l,p=i("2877"),f=Object(p["a"])(u,n,o,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=mek_energy_pool-main.d72bd705.js.map