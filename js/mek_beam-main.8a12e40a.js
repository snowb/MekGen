(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-main"],{"02f4":function(e,t,s){var a=s("4588"),n=s("be13");e.exports=function(e){return function(t,s){var i,r,o=String(n(t)),c=a(s),l=o.length;return c<0||c>=l?e?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===l||(r=o.charCodeAt(c+1))<56320||r>57343?e?o.charAt(c):i:e?o.slice(c,c+2):r-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,s){"use strict";var a=s("02f4")(!0);e.exports=function(e,t,s){return t+(s?a(e,t).length:1)}},"0bfb":function(e,t,s){"use strict";var a=s("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,s){"use strict";s("b0c5");var a=s("2aba"),n=s("32e9"),i=s("79e5"),r=s("be13"),o=s("2b4c"),c=s("520a"),l=o("species"),u=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var s="ab".split(e);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();e.exports=function(e,t,s){var m=o(e),h=!i(function(){var t={};return t[m]=function(){return 7},7!=""[e](t)}),_=h?!i(function(){var t=!1,s=/a/;return s.exec=function(){return t=!0,null},"split"===e&&(s.constructor={},s.constructor[l]=function(){return s}),s[m](""),!t}):void 0;if(!h||!_||"replace"===e&&!u||"split"===e&&!d){var p=/./[m],f=s(r,m,""[e],function(e,t,s,a,n){return t.exec===c?h&&!n?{done:!0,value:p.call(t,s,a)}:{done:!0,value:e.call(s,t,a)}:{done:!1}}),g=f[0],b=f[1];a(String.prototype,e,g),n(RegExp.prototype,m,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"23c6":function(e,t,s){var a=s("2d95"),n=s("2b4c")("toStringTag"),i="Arguments"==a(function(){return arguments}()),r=function(e,t){try{return e[t]}catch(s){}};e.exports=function(e){var t,s,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(s=r(t=Object(e),n))?s:i?a(t):"Object"==(o=a(t))&&"function"==typeof t.callee?"Arguments":o}},3846:function(e,t,s){s("9e1e")&&"g"!=/./g.flags&&s("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:s("0bfb")})},"4fa3":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.mounted?s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.beam_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-beam-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage}}),s("mek-beam-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy}})],1),s("div",{staticClass:"mek-inline-flex-row"},[s("div",{staticClass:"mek-flex-col no-margin"},[s("mek-beam-burst-value",{attrs:{"burst-value":e.selected_burst_value},on:{"update-burst-value":e.updateBurstValue}}),s("mek-beam-shots",{directives:[{name:"show",rawName:"v-show",value:e.forceTrue,expression:"forceTrue"}],attrs:{shots:e.selected_shots,"mag-fed":e.mag_fed},on:{"update-shots":e.updateShots}})],1),s("mek-beam-range-mod",{staticStyle:{"align-self":"start"},attrs:{"range-mod":e.selected_range_mod,"anti-missile":e.anti_missile,"base-range":e.selected_damage.range},on:{"update-range-mod":e.updateRangeMod}}),s("div",{staticClass:"mek-inline-flex-col"},[e.show_warm_up_time?s("mek-beam-warm-up-time",{attrs:{"warm-up-time":e.selected_warm_up_time},on:{"update-warm-up-time":e.updateWarmUpTime}}):e._e(),s("mek-beam-wide-angle",{attrs:{"wide-angle":e.selected_wide_angle},on:{"update-wide-angle":e.updateWideAngle}}),s("mek-space-efficiency",{staticStyle:{"align-self":"baseline"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-beam-feature",{staticStyle:{"align-self":"baseline"},attrs:{"feature-array":e.feature_array,"burst-value":e.selected_burst_value.burst_value},on:{"update-feature":e.updateFeature}})],1)],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:4}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.selected_damage.damage)+" K")]),s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),0==e.selected_shots.shots?s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Shutdown: "+e._s(e.selected_damage.damage)+" turns")]):e._e(),s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Final Range: "+e._s(e.selected_damage.range*e.selected_range_mod.range_mod))]),s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),s("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.round(e.raw_space,2)))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),e.mag_fed?s("div",{attrs:{slot:"col3-row4"},slot:"col3-row4"},[e._v("E-Mag: +1CP, +1SP")]):e._e(),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),s("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.round(e.cost_multiplier,2)))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1):e._e()},n=[],i=(s("a481"),s("8fcf")),r=s("7b4b"),o=s("f52e"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.shots_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{shots:"Shots",cost:"Cost"},name:"Shots",flow:"pkey-row","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_shots}})},l=[],u=(s("ac6a"),s("d866")),d=s("daf4");let m=[{shots:0,cost:.33},{shots:1,cost:.5},{shots:2,cost:.6},{shots:3,cost:.7},{shots:5,cost:.8},{shots:10,cost:.9},{shots:"__INFINITY__",cost:1},{shots:15,cost:1}],h=m,_=!1,p=e=>{e?(h=m.filter(e=>{return 0!=e.shots&&"__INFINITY__"!=e.shots}),g={shots:15,cost:1}):(h=m.filter(e=>{return 15!=e.shots}),g={shots:"__INFINITY__",cost:1}),y=Object(d["c"])(h),w=Object(d["b"])(h,y),k=Object(d["a"])(v,y,w,g,"Mek_Beam-Shots"),_=!1};p(!1);let f=["shots","cost"],g={shots:"__INFINITY__",cost:1},b=Object(d["d"])(h,f),v=e=>{return _?b(e):(_=!0,b=Object(d["d"])(h,f),b(e))},y=Object(d["c"])(h),w=Object(d["b"])(h,y),k=Object(d["a"])(v,y,w,g,"Mek_Beam-Shots");console.error("mek_beam-shots.vue importing");var S={name:"mek_beam_shots",props:["shots","magFed"],mixins:[u["a"]],components:{"mek-sub-component-table":()=>s.e("chunk-46482d78").then(s.bind(null,"97ea"))},data:function(){let e={alerts:[],pkey:"shots",suppressAlerts:!1};return e},methods:{select_shots:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-shots",t)}},computed:{shots_table(){return p(this.magFed),h},selected_keys(){this.magFed;let e=k(this.pkey,this.shots);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_shots(e.data),this.suppressAlerts=!1,e.key_list}},watch:{magFed(e,t){e!=t&&(this.suppressAlerts=!0)}}},N=S,x=s("2877"),O=Object(x["a"])(N,c,l,!1,null,null,null),$=O.exports,I={name:"mek_beam",props:[],mixins:[i["a"],r["a"],o["a"]],components:{"mek-beam-damage":()=>s.e("mek_beam-damage").then(s.bind(null,"3d75")),"mek-beam-accuracy":()=>s.e("mek_beam-accuracy").then(s.bind(null,"35d7")),"mek-beam-burst-value":()=>s.e("mek_beam-burst-value").then(s.bind(null,"1d74")),"mek-beam-range-mod":()=>s.e("mek_beam-range-mod").then(s.bind(null,"c43c")),"mek-beam-shots":$,"mek-beam-warm-up-time":()=>s.e("mek_beam-warm-up-time").then(s.bind(null,"27b7")),"mek-beam-wide-angle":()=>s.e("mek_beam-wide-angle").then(s.bind(null,"7795")),"mek-beam-feature":()=>s.e("mek_beam-feature").then(s.bind(null,"bc65")),"mek-space-efficiency":()=>s.e("mek-space-efficiency").then(s.bind(null,"cd4a")),"mek-component-name":()=>s.e("mek-component-name").then(s.bind(null,"192f")),"mek-save-reset-component":()=>s.e("mek-save-reset-component").then(s.bind(null,"c849")),"mek-component-stats":()=>s.e("mek-component-stats").then(s.bind(null,"d854"))},data:function(){let e={mounted:!1,uuid:null,component_name:null,component_category:"equipment",component_type:"beam",original_component:null,component_changed:!0,damage_capacity:1,selected_damage:{damage:1,cost:1.5,range:4},selected_burst_value:{burst_value:1,cost:1},selected_range_mod:{range_mod:1,cost:1,range:4},selected_accuracy:{accuracy:1,cost:1},selected_shots:{shots:"__INFINITY__",cost:1},selected_warm_up_time:{time:0,cost:1},selected_wide_angle:{angle:"__NIL__",cost:1},feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.cost_multipliers.shots=1,e.cost_multipliers.wide_angle=1,e.cost_multipliers.warm_up_time=1,e.cost_multipliers.burst_value=1,e.forceTrue=!0,e},methods:{updateComponentName(e){this.component_name=e,this.component_changed=!0},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateBurstValue(e){this.$set(this,"selected_burst_value",e),this.cost_multipliers.burst_value=e.cost,this.component_changed=!0},updateRangeMod(e){this.$set(this,"selected_range_mod",e),this.cost_multipliers.range_mod=e.cost,this.component_changed=!0},updateShots(e){this.$set(this,"selected_shots",e),this.cost_multipliers.shots=e.cost,this.component_changed=!0},updateWarmUpTime(e){this.$set(this,"selected_warm_up_time",e),this.cost_multipliers.warm_up_time=e.cost,this.component_changed=!0},updateWideAngle(e){this.$set(this,"selected_wide_angle",e),this.cost_multipliers.wide_angle=e.cost,this.component_changed=!0},updateFeature(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce((e,t)=>{return e*t.cost},1),this.projectile_name,this.damage_capacity=this.fragile?1:this.selected_damage.damage},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"feature_array",[]),this.$set(this,"selected_damage",{damage:1,cost:1.5,range:4}),this.$set(this,"selected_burst_value",{burst_value:1,cost:1}),this.$set(this,"selected_range_mod",{range_mod:1,cost:1,range:4}),this.$set(this,"selected_accuracy",{accuracy:1,cost:1}),this.$set(this,"selected_shots",{shots:"__INFINITY__",cost:1}),this.$set(this,"selected_warm_up_time",{time:0,cost:1}),this.$set(this,"selected_wide_angle",{angle:"__NIL__",cost:1}),this.$store.commit("saveComponent",null);break}},output_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="beam",e.component_name=null===this.component_name?this.beam_name:this.component_name,e.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers)),e.efficiencies=JSON.parse(JSON.stringify(this.efficiencies)),e.selected_damage=JSON.parse(JSON.stringify(this.selected_damage)),e.selected_burst_value=JSON.parse(JSON.stringify(this.selected_burst_value)),e.selected_range_mod=JSON.parse(JSON.stringify(this.selected_range_mod)),e.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy)),e.selected_shots=JSON.parse(JSON.stringify(this.selected_shots)),e.selected_warm_up_time=JSON.parse(JSON.stringify(this.selected_warm_up_time)),e.selected_wide_angle=JSON.parse(JSON.stringify(this.selected_wide_angle)),e.feature_array=JSON.parse(JSON.stringify(this.feature_array)),e.cost=this.total_cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.final_damage=this.final_damage,e.damage_capacity=this.damage_capacity,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),e},ingest_data(e){let t="Beam is not valid, resetting.";this.universal_ingest_data(e,t),this.component_name==this.beam_name&&this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=!1})}},computed:{raw_space(){return this.selected_damage.cost*this.cost_multiplier},cost:function(){let e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,e+=this.mag_fed?1:0,this.round(e,2)},beam_name(){let e="__INFINITY__"==this.selected_burst_value.burst_value,t=1!=this.selected_burst_value.burst_value&&!e,s=t?"Burst-"+this.selected_burst_value.burst_value+" ":e?"Infinite-Burst ":"";s+="__NIL__"!=this.selected_wide_angle.angle?"Wide-Angle ":"";let a=!1,n=!1;return s=this.feature_array.reduce((e,t)=>{switch(t.feature.toLowerCase()){case"hydro":return a=!0,e;case"mega-beam":return n=!0,e}return e+t.feature+" "},s),s+=a?" Hydro":n?" Mega-Beam":" Beam",s=s.trim(),s=s.replace(/\s+/g," "),s},mag_fed(){return this.feature_array.some(function(e){if("mag-fed"==e.feature.toLowerCase())return!0})},show_warm_up_time(){return!this.mag_fed&&"__INFINITY__"==this.selected_shots.shots},anti_missile(){return this.feature_array.some(function(e){if("anti-missile"==e.feature.toLowerCase())return!0})},fragile(){return this.feature_array.some(function(e){if("fragile"==e.feature.toLowerCase())return!0})}},mounted(){this.mounted=!0}},J=I,A=Object(x["a"])(J,a,n,!1,null,null,null);t["default"]=A.exports},"520a":function(e,t,s){"use strict";var a=s("0bfb"),n=RegExp.prototype.exec,i=String.prototype.replace,r=n,o="lastIndex",c=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[o]||0!==t[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(r=function(e){var t,s,r,u,d=this;return l&&(s=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),c&&(t=d[o]),r=n.call(d,e),c&&r&&(d[o]=d.global?r.index+r[0].length:t),l&&r&&r.length>1&&i.call(r[0],s,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)}),r}),e.exports=r},"5f1b":function(e,t,s){"use strict";var a=s("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var s=e.exec;if("function"===typeof s){var i=s.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"6b54":function(e,t,s){"use strict";s("3846");var a=s("cb7c"),n=s("0bfb"),i=s("9e1e"),r="toString",o=/./[r],c=function(e){s("2aba")(RegExp.prototype,r,e,!0)};s("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?n.call(e):void 0)}):o.name!=r&&c(function(){return o.call(this)})},"7b4b":function(e,t,s){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,s){return e+=s>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,s){"use strict";s("ac6a"),s("6b54"),s("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let s=10**+t;return Math.round(+e*s)/s},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},a481:function(e,t,s){"use strict";var a=s("cb7c"),n=s("4bf8"),i=s("9def"),r=s("4588"),o=s("0390"),c=s("5f1b"),l=Math.max,u=Math.min,d=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,_=function(e){return void 0===e?e:String(e)};s("214f")("replace",2,function(e,t,s,p){return[function(a,n){var i=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,i,n):s.call(String(i),a,n)},function(e,t){var n=p(s,e,this,t);if(n.done)return n.value;var d=a(e),m=String(this),h="function"===typeof t;h||(t=String(t));var g=d.global;if(g){var b=d.unicode;d.lastIndex=0}var v=[];while(1){var y=c(d,m);if(null===y)break;if(v.push(y),!g)break;var w=String(y[0]);""===w&&(d.lastIndex=o(m,i(d.lastIndex),b))}for(var k="",S=0,N=0;N<v.length;N++){y=v[N];for(var x=String(y[0]),O=l(u(r(y.index),m.length),0),$=[],I=1;I<y.length;I++)$.push(_(y[I]));var J=y.groups;if(h){var A=[x].concat($,O,m);void 0!==J&&A.push(J);var C=String(t.apply(void 0,A))}else C=f(x,m,O,$,J,t);O>=S&&(k+=m.slice(S,O)+C,S=O+x.length)}return k+m.slice(S)}];function f(e,t,a,i,r,o){var c=a+e.length,l=i.length,u=h;return void 0!==r&&(r=n(r),u=m),s.call(o,u,function(s,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(c);case"<":o=r[n.slice(1,-1)];break;default:var u=+n;if(0===u)return s;if(u>l){var m=d(u/10);return 0===m?s:m<=l?void 0===i[m-1]?n.charAt(1):i[m-1]+n.charAt(1):s}o=i[u-1]}return void 0===o?"":o})}})},b0c5:function(e,t,s){"use strict";var a=s("520a");s("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,s){"use strict";s.d(t,"d",function(){return a}),s.d(t,"c",function(){return n}),s.d(t,"b",function(){return i}),s.d(t,"a",function(){return r});let a=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let a=e.some(e=>{return!t.some(t=>{return s[t]!=e[t]})});return a},n=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},i=(e,t)=>(s,a)=>{let n=null;return t(s,a)&&e.some(e=>{if(e[s]==a)return n=e,!0},void 0),n},r=(e,t,s,a,n)=>(i,r)=>{let o=void 0,c=[],l=!1,u=[],d=JSON.stringify(r);return void 0!==r&&t(i,r[i])?e(r)?(o=JSON.parse(JSON.stringify(r)),c=[o[i]],l=!1):(o=JSON.parse(JSON.stringify(s(i,r[i]))),c=[o[i]],l=!0,u.push(n+": "+d),u.push("**** Invalid data. Reseting. ****")):(o=a,c=[o[i]],l=!0,u.push(n+": "+d),u.push("**** Invalid data. Reseting to default. ****")),{data:o,key_list:c,update:l,alerts:u}}},f52e:function(e,t,s){"use strict";s("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let s in e)if(!Object.keys(this._computedWatchers).includes(s))if("object"!==typeof e[s]||Array.isArray(e[s]))Array.isArray(e[s]),this.$set(this,s,e[s]);else{"object"===typeof this[s]&&null!==this[s]||(this[s]={});for(let t in e[s])this.$set(this[s],[t],e[s][t])}this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_beam-main.8a12e40a.js.map