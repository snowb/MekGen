(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy_pool-main"],{"02f4":function(e,t,o){var i=o("4588"),n=o("be13");e.exports=function(e){return function(t,o){var r,s,a=String(n(t)),c=i(o),l=a.length;return c<0||c>=l?e?"":void 0:(r=a.charCodeAt(c),r<55296||r>56319||c+1===l||(s=a.charCodeAt(c+1))<56320||s>57343?e?a.charAt(c):r:e?a.slice(c,c+2):s-56320+(r-55296<<10)+65536)}}},"0390":function(e,t,o){"use strict";var i=o("02f4")(!0);e.exports=function(e,t,o){return t+(o?i(e,t).length:1)}},"0bfb":function(e,t,o){"use strict";var i=o("cb7c");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,o){"use strict";o("b0c5");var i=o("2aba"),n=o("32e9"),r=o("79e5"),s=o("be13"),a=o("2b4c"),c=o("520a"),l=a("species"),u=!r(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var o="ab".split(e);return 2===o.length&&"a"===o[0]&&"b"===o[1]}();e.exports=function(e,t,o){var f=a(e),_=!r(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),h=_?!r(function(){var t=!1,o=/a/;return o.exec=function(){return t=!0,null},"split"===e&&(o.constructor={},o.constructor[l]=function(){return o}),o[f](""),!t}):void 0;if(!_||!h||"replace"===e&&!u||"split"===e&&!p){var d=/./[f],m=o(s,f,""[e],function(e,t,o,i,n){return t.exec===c?_&&!n?{done:!0,value:d.call(t,o,i)}:{done:!0,value:e.call(o,t,i)}:{done:!1}}),g=m[0],y=m[1];i(String.prototype,e,g),n(RegExp.prototype,f,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}}},"23c6":function(e,t,o){var i=o("2d95"),n=o("2b4c")("toStringTag"),r="Arguments"==i(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(o){}};e.exports=function(e){var t,o,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(o=s(t=Object(e),n))?o:r?i(t):"Object"==(a=i(t))&&"function"==typeof t.callee?"Arguments":a}},3846:function(e,t,o){o("9e1e")&&"g"!=/./g.flags&&o("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:o("0bfb")})},"520a":function(e,t,o){"use strict";var i=o("0bfb"),n=RegExp.prototype.exec,r=String.prototype.replace,s=n,a="lastIndex",c=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[a]||0!==t[a]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(s=function(e){var t,o,s,u,p=this;return l&&(o=new RegExp("^"+p.source+"$(?!\\s)",i.call(p))),c&&(t=p[a]),s=n.call(p,e),c&&s&&(p[a]=p.global?s.index+s[0].length:t),l&&s&&s.length>1&&r.call(s[0],o,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,o){"use strict";var i=o("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var o=e.exec;if("function"===typeof o){var r=o.call(e,t);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"6b54":function(e,t,o){"use strict";o("3846");var i=o("cb7c"),n=o("0bfb"),r=o("9e1e"),s="toString",a=/./[s],c=function(e){o("2aba")(RegExp.prototype,s,e,!0)};o("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?c(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?n.call(e):void 0)}):a.name!=s&&c(function(){return a.call(this)})},"7b4b":function(e,t,o){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)if("object"===typeof this.cost_multipliers[t])for(let o in this.cost_multipliers[t])e*=this.cost_multipliers[t][o];else e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,o){return e+=o>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,o){"use strict";o("ac6a"),o("6b54"),o("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let o=10**+t;return Math.round(+e*o)/o},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},"9dcf":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[o("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.energy_pool_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),o("div",{staticClass:"mek-inline-flex-row"},[o("mek-energy-pool-pool",{staticStyle:{"align-self":"flex-start"},attrs:{"energy-pool":e.selected_energy_pool},on:{"update-energy-pool":e.updateEnergyPool,"alert-generated":e.handleAlert}}),o("div",{staticClass:"mek-inline-flex-col"},[o("mek-energy-pool-size",{attrs:{"portfolio-size":e.selected_portfolio_size},on:{"update-portfolio-size":e.updatePortfolioSize,"alert-generated":e.handleAlert}}),o("mek-energy-pool-feature",{staticStyle:{"align-self":"flex-start"},attrs:{"feature-array":e.feature_array},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}})],1),o("mek-space-efficiency",{staticStyle:{"align-self":"flex-start"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-Energy_Pool"},on:{"update-efficiencies":e.updateEfficiencies}})],1),o("div",{staticClass:"mek-inline-flex-row"},[o("mek-component-stats",{attrs:{cols:4,rows:5}},[o("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Portfolio Size: "+e._s(e.infinite_size?"Infinite":e.selected_portfolio_size.size))]),o("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),o("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),o("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),o("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),o("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),o("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),o("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_energy_pool.cost))]),o("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),o("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),o("mek-save-reset-component",{attrs:{"active-buttons":"save,reset,new"},on:{"save-reset-component":e.componentSaveReset}})],1)],1)},n=[],r=o("8fcf"),s=o("7b4b"),a=o("f52e"),c={name:"mek_energy_pool",props:[],mixins:[r["a"],s["a"],a["a"]],components:{"mek-energy-pool-pool":()=>o.e("mek_energy_pool-pool").then(o.bind(null,"ed4f")),"mek-energy-pool-size":()=>o.e("mek_energy_pool-size").then(o.bind(null,"c177")),"mek-energy-pool-feature":()=>o.e("mek_energy_pool-feature").then(o.bind(null,"0af0")),"mek-space-efficiency":()=>o.e("mek-space-efficiency").then(o.bind(null,"57c1")),"mek-component-name":()=>o.e("mek-component-name").then(o.bind(null,"4a3f")),"mek-save-reset-component":()=>o.e("mek-save-reset-component").then(o.bind(null,"972e")),"mek-component-stats":()=>o.e("mek_component-stats").then(o.bind(null,"67b1"))},data:function(){let e={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"energy-pool",original_component:null,component_changed:!0,damage_capacity:5,selected_energy_pool:{cost:10,power_available:0,max_power:50,damage_capacity:5},selected_portfolio_size:{size:3,cost:1},selected_morphable:!1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.selected_portfolio_size=1,e.cost_multipliers.feature_array=1,e.hasAlert=!1,e},methods:{updateComponentName(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateEnergyPool(e){this.selected_energy_pool.cost=e.cost,this.selected_energy_pool.power_available=e.power_available,this.selected_energy_pool.max_power=e.max_power,this.selected_energy_pool.damage_capacity=e.damage_capacity,this.component_changed=!0,this.damage_capacity=e.damage_capacity},updatePortfolioSize(e){this.selected_portfolio_size.cost=e.cost,this.selected_portfolio_size.size=e.size,this.cost_multipliers.selected_portfolio_size=e.cost,this.component_changed=!0},updateFeature(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature_array=this.feature_array.reduce((e,t)=>{return e*t.cost},1),this.energy_pool_name,this.damage_capacity=this.fragile?1:this.selected_energy_pool.damage_capacity,this.selected_morphable=this.feature_array.some(e=>{return"Morphable"==e.feature})},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"new":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"new":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"selected_energy_pool",{cost:10,power_available:0,max_power:50,damage_capacity:5}),this.$set(this,"feature_array",[]),this.$set(this,"selected_portfolio_size",{size:3,cost:1}),this.selected_morphable=!1,this.cost_multipliers.portfolio_size=1,this.cost_multipliers.feature=1,this.$store.commit("saveComponent",null);break}},output_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="energy-pool",e.component_name=null===this.component_name?this.energy_pool_name:this.component_name,e.custom_component_name=this.custom_component_name,e.cost_multipliers=this.cost_multipliers,e.efficiencies=this.efficiencies,e.selected_energy_pool=this.selected_energy_pool,e.selected_portfolio_size=this.selected_portfolio_size,e.selected_portfolio_size.size=this.selected_portfolio_size.size===1/0?"Infinity":this.selected_portfolio_size.size,e.feature_array=this.feature_array,e.selected_morphable=this.selected_morphable,e.cost=this.cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.selected_energy_pool.damage_capacity/2,e.damage_capacity=this.damage_capacity,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),JSON.parse(this.original_component)},ingest_data(e){let t="Energy Pool is not valid, resetting.";this.universal_ingest_data(e,t),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=this.hasAlert}),this.selected_portfolio_size.size="Infinity"==this.selected_portfolio_size.size?1/0:this.selected_portfolio_size.size},handleAlert(e){this.hasAlert=e}},computed:{raw_space(){return this.round(this.selected_energy_pool.cost*this.cost_multiplier,2)},cost(){let e=this.selected_energy_pool.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},energy_pool_name(){let e="";return e=this.feature_array.reduce((e,t)=>{return e+t.feature+" "},e),e+=this.infinite_size?"Infinite-Portfolio ":"Portfolio-"+this.selected_portfolio_size.size+" ",e+" Energy Pool"},fragile(){return this.feature_array.some(function(e){if("fragile"==e.feature.toLowerCase())return!0})},infinite_size(){return this.selected_portfolio_size.size===1/0||"__INFINITY__"===this.selected_portfolio_size.size}}},l=c,u=o("2877"),p=Object(u["a"])(l,i,n,!1,null,null,null);t["default"]=p.exports},a481:function(e,t,o){"use strict";var i=o("cb7c"),n=o("4bf8"),r=o("9def"),s=o("4588"),a=o("0390"),c=o("5f1b"),l=Math.max,u=Math.min,p=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,_=/\$([$&`']|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};o("214f")("replace",2,function(e,t,o,d){return[function(i,n){var r=e(this),s=void 0==i?void 0:i[t];return void 0!==s?s.call(i,r,n):o.call(String(r),i,n)},function(e,t){var n=d(o,e,this,t);if(n.done)return n.value;var p=i(e),f=String(this),_="function"===typeof t;_||(t=String(t));var g=p.global;if(g){var y=p.unicode;p.lastIndex=0}var v=[];while(1){var b=c(p,f);if(null===b)break;if(v.push(b),!g)break;var w=String(b[0]);""===w&&(p.lastIndex=a(f,r(p.lastIndex),y))}for(var x="",z=0,k=0;k<v.length;k++){b=v[k];for(var S=String(b[0]),$=l(u(s(b.index),f.length),0),A=[],E=1;E<b.length;E++)A.push(h(b[E]));var C=b.groups;if(_){var N=[S].concat(A,$,f);void 0!==C&&N.push(C);var R=String(t.apply(void 0,N))}else R=m(S,f,$,A,C,t);$>=z&&(x+=f.slice(z,$)+R,z=$+S.length)}return x+f.slice(z)}];function m(e,t,i,r,s,a){var c=i+e.length,l=r.length,u=_;return void 0!==s&&(s=n(s),u=f),o.call(a,u,function(o,n){var a;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(c);case"<":a=s[n.slice(1,-1)];break;default:var u=+n;if(0===u)return o;if(u>l){var f=p(u/10);return 0===f?o:f<=l?void 0===r[f-1]?n.charAt(1):r[f-1]+n.charAt(1):o}a=r[u-1]}return void 0===a?"":a})}})},b0c5:function(e,t,o){"use strict";var i=o("520a");o("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},f52e:function(e,t,o){"use strict";o("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e);let o=JSON.parse(this.original_component);null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let i in o)if(!Object.keys(this._computedWatchers).includes(i))if("object"!==typeof o[i]||Array.isArray(o[i]))Array.isArray(o[i]),this.$set(this,i,o[i]);else{"object"===typeof this[i]&&null!==this[i]||this.$set(this,i,{});for(let e in o[i])this.$set(this[i],[e],o[i][e])}this.$forceUpdate()},updateComponentName(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_energy_pool-main.652cd5a3.js.map