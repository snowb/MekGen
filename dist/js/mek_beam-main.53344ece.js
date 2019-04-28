(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-main"],{"02f4":function(e,t,a){var s=a("4588"),n=a("be13");e.exports=function(e){return function(t,a){var i,r,c=String(n(t)),o=s(a),l=c.length;return o<0||o>=l?e?"":void 0:(i=c.charCodeAt(o),i<55296||i>56319||o+1===l||(r=c.charCodeAt(o+1))<56320||r>57343?e?c.charAt(o):i:e?c.slice(o,o+2):r-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var s=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?s(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var s=a("cb7c");e.exports=function(){var e=s(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"1a6f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.mounted?a("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[a("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.beam_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-beam-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage,"alert-generated":e.handleAlert}}),a("mek-beam-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy}})],1),a("div",{staticClass:"mek-inline-flex-row"},[a("div",{staticClass:"mek-flex-col no-margin"},[a("mek-beam-burst-value",{attrs:{"burst-value":e.selected_burst_value},on:{"update-burst-value":e.updateBurstValue,"alert-generated":e.handleAlert}}),a("mek-beam-shots",{attrs:{shots:e.selected_shots,"mag-fed":e.mag_fed},on:{"update-shots":e.updateShots,"alert-generated":e.handleAlert}})],1),a("mek-beam-range-mod",{staticStyle:{"align-self":"start"},attrs:{"range-mod":e.selected_range_mod,"anti-missile":e.anti_missile,"base-range":e.selected_damage.range},on:{"update-range-mod":e.updateRangeMod,"alert-generated":e.handleAlert}}),a("div",{staticClass:"mek-inline-flex-col"},[e.show_warm_up_time?a("mek-beam-warm-up-time",{attrs:{"warm-up-time":e.selected_warm_up_time},on:{"update-warm-up-time":e.updateWarmUpTime,"alert-generated":e.handleAlert}}):e._e(),a("mek-beam-wide-angle",{attrs:{"wide-angle":e.selected_wide_angle},on:{"update-wide-angle":e.updateWideAngle,"alert-generated":e.handleAlert}}),a("mek-space-efficiency",{staticStyle:{"align-self":"baseline"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-Beam"},on:{"update-efficiencies":e.updateEfficiencies}})],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-beam-feature",{staticStyle:{"align-self":"baseline"},attrs:{"feature-array":e.feature_array,"burst-value":e.selected_burst_value.burst_value},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}})],1)],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-component-stats",{attrs:{cols:4,rows:4}},[a("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.selected_damage.damage)+" K")]),a("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),0==e.selected_shots.shots?a("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Shutdown: "+e._s(e.selected_damage.damage)+" turns")]):e._e(),a("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Final Range: "+e._s(e.selected_damage.range*e.selected_range_mod.range_mod))]),a("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),a("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),a("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.round(e.raw_space,2)))]),a("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),a("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),e.mag_fed?a("div",{attrs:{slot:"col3-row4"},slot:"col3-row4"},[e._v("E-Mag: +1CP, +1SP")]):e._e(),a("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),a("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.round(e.cost_multiplier,2)))]),a("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),a("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1):e._e()},n=[],i=(a("a481"),a("8fcf")),r=a("7b4b"),c=a("f52e"),o={name:"mek_beam",props:[],mixins:[i["a"],r["a"],c["a"]],components:{"mek-beam-damage":()=>a.e("mek_beam-damage").then(a.bind(null,"7701")),"mek-beam-accuracy":()=>a.e("mek_beam-accuracy").then(a.bind(null,"becb")),"mek-beam-burst-value":()=>a.e("mek_beam-burst-value").then(a.bind(null,"7ed4")),"mek-beam-range-mod":()=>a.e("mek_beam-range-mod").then(a.bind(null,"1d3a")),"mek-beam-shots":()=>a.e("mek_beam-shots").then(a.bind(null,"e656")),"mek-beam-warm-up-time":()=>a.e("mek_beam-warm-up-time").then(a.bind(null,"6eb1")),"mek-beam-wide-angle":()=>a.e("mek_beam-wide-angle").then(a.bind(null,"ebc1")),"mek-beam-feature":()=>a.e("mek_beam-feature").then(a.bind(null,"000c")),"mek-space-efficiency":()=>a.e("mek-space-efficiency").then(a.bind(null,"57c1")),"mek-component-name":()=>a.e("mek-component-name").then(a.bind(null,"dba3")),"mek-save-reset-component":()=>a.e("mek-save-reset-component").then(a.bind(null,"c342")),"mek-component-stats":()=>a.e("mek_component-stats").then(a.bind(null,"67b1"))},data:function(){let e={mounted:!1,uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"beam",original_component:null,component_changed:!0,damage_capacity:1,selected_damage:{damage:1,cost:1.5,range:4},selected_burst_value:{burst_value:1,cost:1},selected_range_mod:{range_mod:1,cost:1,range:4},selected_accuracy:{accuracy:1,cost:1},selected_shots:{shots:"__INFINITY__",cost:1},selected_warm_up_time:{time:0,cost:1},selected_wide_angle:{angle:"__NIL__",cost:1},feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.selected_accuracy=1,e.cost_multipliers.feature_array=1,e.cost_multipliers.selected_shots=1,e.cost_multipliers.wide_angle=1,e.cost_multipliers.selected_warm_up_time=1,e.cost_multipliers.selected_range_mod=1,e.cost_multipliers.selected_burst_value=1,e.hasAlert=!1,e},methods:{updateComponentName(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.selected_accuracy=e.cost,this.component_changed=!0},updateBurstValue(e){this.$set(this,"selected_burst_value",e),this.cost_multipliers.selected_burst_value=e.cost,this.component_changed=!0},updateRangeMod(e){this.$set(this,"selected_range_mod",e),this.cost_multipliers.selected_range_mod=e.cost,this.component_changed=!0},updateShots(e){this.$set(this,"selected_shots",e),this.cost_multipliers.selected_shots=e.cost,this.component_changed=!0},updateWarmUpTime(e){this.$set(this,"selected_warm_up_time",e),this.cost_multipliers.selected_warm_up_time=e.cost,this.component_changed=!0},updateWideAngle(e){this.$set(this,"selected_wide_angle",e),this.cost_multipliers.selected_wide_angle=e.cost,this.component_changed=!0},updateFeature(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature_array=this.feature_array.reduce((e,t)=>{return e*t.cost},1),this.projectile_name,this.damage_capacity=this.fragile?1:this.selected_damage.damage},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"feature_array",[]),this.$set(this,"selected_damage",{damage:1,cost:1.5,range:4}),this.$set(this,"selected_burst_value",{burst_value:1,cost:1}),this.$set(this,"selected_range_mod",{range_mod:1,cost:1,range:4}),this.$set(this,"selected_accuracy",{accuracy:1,cost:1}),this.$set(this,"selected_shots",{shots:"__INFINITY__",cost:1}),this.$set(this,"selected_warm_up_time",{time:0,cost:1}),this.$set(this,"selected_wide_angle",{angle:"__NIL__",cost:1}),this.cost_multipliers.selected_accuracy=1,this.cost_multipliers.feature_array=1,this.cost_multipliers.selected_shots=1,this.cost_multipliers.wide_angle=1,this.cost_multipliers.selected_warm_up_time=1,this.cost_multipliers.selected_range_mod=1,this.cost_multipliers.selected_burst_value=1,this.$store.commit("saveComponent",null);break}},output_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="beam",e.component_name=null===this.component_name?this.beam_name:this.component_name,e.custom_component_name=this.custom_component_name,e.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers)),e.efficiencies=JSON.parse(JSON.stringify(this.efficiencies)),e.selected_damage=JSON.parse(JSON.stringify(this.selected_damage)),e.selected_burst_value=JSON.parse(JSON.stringify(this.selected_burst_value)),e.selected_range_mod=JSON.parse(JSON.stringify(this.selected_range_mod)),e.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy)),e.selected_shots=JSON.parse(JSON.stringify(this.selected_shots)),e.selected_warm_up_time=JSON.parse(JSON.stringify(this.selected_warm_up_time)),e.selected_wide_angle=JSON.parse(JSON.stringify(this.selected_wide_angle)),e.feature_array=JSON.parse(JSON.stringify(this.feature_array)),e.cost=this.total_cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.final_damage=this.final_damage,e.damage_capacity=this.damage_capacity,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),e},ingest_data(e){let t="Beam is not valid, resetting.";this.universal_ingest_data(e,t),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=this.hasAlert})},handleAlert(e){this.hasAlert=e}},computed:{raw_space(){return this.selected_damage.cost*this.cost_multiplier},cost:function(){let e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,e+=this.mag_fed?1:0,this.round(e,2)},beam_name(){let e="__INFINITY__"==this.selected_burst_value.burst_value,t=1!=this.selected_burst_value.burst_value&&!e,a=t?"Burst-"+this.selected_burst_value.burst_value+" ":e?"Infinite-Burst ":"";a+="__NIL__"!=this.selected_wide_angle.angle?"Wide-Angle ":"";let s=!1,n=!1;return a=this.feature_array.reduce((e,t)=>{switch(t.feature.toLowerCase()){case"hydro":return s=!0,e;case"mega-beam":return n=!0,e}return e+t.feature+" "},a),a+=s?"":" "+this.selected_damage.damage+"K",a+=s?" Hydro":n?" Mega-Beam":" Beam",a=a.trim(),a=a.replace(/\s+/g," "),a},mag_fed(){return this.feature_array.some(function(e){if("mag-fed"==e.feature.toLowerCase())return!0})},show_warm_up_time(){return!this.mag_fed&&"__INFINITY__"==this.selected_shots.shots},anti_missile(){return this.feature_array.some(function(e){if("anti-missile"==e.feature.toLowerCase())return!0})},fragile(){return this.feature_array.some(function(e){if("fragile"==e.feature.toLowerCase())return!0})}},mounted(){this.mounted=!0}},l=o,u=a("2877"),m=Object(u["a"])(l,s,n,!1,null,null,null);t["default"]=m.exports},"214f":function(e,t,a){"use strict";a("b0c5");var s=a("2aba"),n=a("32e9"),i=a("79e5"),r=a("be13"),c=a("2b4c"),o=a("520a"),l=c("species"),u=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),m=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var d=c(e),_=!i(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),h=_?!i(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[l]=function(){return a}),a[d](""),!t}):void 0;if(!_||!h||"replace"===e&&!u||"split"===e&&!m){var p=/./[d],f=a(r,d,""[e],function(e,t,a,s,n){return t.exec===o?_&&!n?{done:!0,value:p.call(t,a,s)}:{done:!0,value:e.call(a,t,s)}:{done:!1}}),g=f[0],v=f[1];s(String.prototype,e,g),n(RegExp.prototype,d,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"23c6":function(e,t,a){var s=a("2d95"),n=a("2b4c")("toStringTag"),i="Arguments"==s(function(){return arguments}()),r=function(e,t){try{return e[t]}catch(a){}};e.exports=function(e){var t,a,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=r(t=Object(e),n))?a:i?s(t):"Object"==(c=s(t))&&"function"==typeof t.callee?"Arguments":c}},3846:function(e,t,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"520a":function(e,t,a){"use strict";var s=a("0bfb"),n=RegExp.prototype.exec,i=String.prototype.replace,r=n,c="lastIndex",o=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[c]||0!==t[c]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(r=function(e){var t,a,r,u,m=this;return l&&(a=new RegExp("^"+m.source+"$(?!\\s)",s.call(m))),o&&(t=m[c]),r=n.call(m,e),o&&r&&(m[c]=m.global?r.index+r[0].length:t),l&&r&&r.length>1&&i.call(r[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)}),r}),e.exports=r},"5f1b":function(e,t,a){"use strict";var s=a("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==s(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"6b54":function(e,t,a){"use strict";a("3846");var s=a("cb7c"),n=a("0bfb"),i=a("9e1e"),r="toString",c=/./[r],o=function(e){a("2aba")(RegExp.prototype,r,e,!0)};a("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?o(function(){var e=s(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?n.call(e):void 0)}):c.name!=r&&o(function(){return c.call(this)})},"7b4b":function(e,t,a){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,a){return e+=a>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,a){"use strict";a("ac6a"),a("6b54"),a("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let a=10**+t;return Math.round(+e*a)/a},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},a481:function(e,t,a){"use strict";var s=a("cb7c"),n=a("4bf8"),i=a("9def"),r=a("4588"),c=a("0390"),o=a("5f1b"),l=Math.max,u=Math.min,m=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,_=/\$([$&`']|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,function(e,t,a,p){return[function(s,n){var i=e(this),r=void 0==s?void 0:s[t];return void 0!==r?r.call(s,i,n):a.call(String(i),s,n)},function(e,t){var n=p(a,e,this,t);if(n.done)return n.value;var m=s(e),d=String(this),_="function"===typeof t;_||(t=String(t));var g=m.global;if(g){var v=m.unicode;m.lastIndex=0}var b=[];while(1){var y=o(m,d);if(null===y)break;if(b.push(y),!g)break;var w=String(y[0]);""===w&&(m.lastIndex=c(d,i(m.lastIndex),v))}for(var k="",x=0,S=0;S<b.length;S++){y=b[S];for(var N=String(y[0]),$=l(u(r(y.index),d.length),0),A=[],O=1;O<y.length;O++)A.push(h(y[O]));var J=y.groups;if(_){var C=[N].concat(A,$,d);void 0!==J&&C.push(J);var I=String(t.apply(void 0,C))}else I=f(N,d,$,A,J,t);$>=x&&(k+=d.slice(x,$)+I,x=$+N.length)}return k+d.slice(x)}];function f(e,t,s,i,r,c){var o=s+e.length,l=i.length,u=_;return void 0!==r&&(r=n(r),u=d),a.call(c,u,function(a,n){var c;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,s);case"'":return t.slice(o);case"<":c=r[n.slice(1,-1)];break;default:var u=+n;if(0===u)return a;if(u>l){var d=m(u/10);return 0===d?a:d<=l?void 0===i[d-1]?n.charAt(1):i[d-1]+n.charAt(1):a}c=i[u-1]}return void 0===c?"":c})}})},b0c5:function(e,t,a){"use strict";var s=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},f52e:function(e,t,a){"use strict";a("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let a in e)if(!Object.keys(this._computedWatchers).includes(a))if("object"!==typeof e[a]||Array.isArray(e[a]))Array.isArray(e[a]),this.$set(this,a,e[a]);else{"object"===typeof this[a]&&null!==this[a]||(this[a]={});for(let t in e[a])this.$set(this[a],[t],e[a][t])}this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_beam-main.53344ece.js.map