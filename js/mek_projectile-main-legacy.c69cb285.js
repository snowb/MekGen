(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-main"],{"072f":function(e,t,n){"use strict";n("6762"),n("2fdb");t["a"]={methods:{selectedItem:function(e,t,n,s){var i="undefined"===typeof s?"":s;return"undefined"===typeof n?this[e]==t?"selected_item":i:this[e]==t?n:i},selectedItemMultiple:function(e,t,n,s){var i="undefined"===typeof s?"":s;return Array.isArray(this[e])?"undefined"===typeof n?this[e].includes(t)?"selected_item":i:this[e].includes(t)?n:i:""}}}},"2fdb":function(e,t,n){"use strict";var s=n("5ca1"),i=n("d2c8"),a="includes";s(s.P+s.F*n("5147")(a),"String",{includes:function(e){return!!~i(this,e,a).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,n){var s=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[s]=!1,!"/./"[e](t)}catch(i){}}return!0}},6762:function(e,t,n){"use strict";var s=n("5ca1"),i=n("c366")(!0);s(s.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},7352:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.projectile_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-projectile-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage,"alert-generated":e.handleAlert}}),n("mek-projectile-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy,"alert-generated":e.handleAlert}}),n("mek-projectile-burst-value",{attrs:{"burst-value":e.selected_burst_value},on:{"update-burst-value":e.updateBurstValue,"alert-generated":e.handleAlert}}),n("div",{staticClass:"mek-inline-flex-row"},[n("div",{staticClass:"mek-inline-flex-col"},[n("mek-projectile-multi-feed",{attrs:{"multi-feed":e.selected_multi_feed},on:{"update-multi-feed":e.updateMultiFeed,"alert-generated":e.handleAlert}})],1),n("mek-projectile-range-mod",{staticStyle:{"align-self":"baseline"},attrs:{"range-mod":e.selected_range_mod,"base-range":e.selected_damage.range},on:{"update-range-mod":e.updateRangeMod,"alert-generated":e.handleAlert}}),n("mek-projectile-feature",{staticStyle:{"align-self":"baseline"},attrs:{"feature-array":e.feature_array,"burst-value":e.selected_burst_value.burst_value},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}}),n("mek-space-efficiency",{staticStyle:{"align-self":"baseline"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-Projectile"},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-component-stats",{attrs:{cols:4,rows:5}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.selected_damage.damage)+" K")]),n("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),n("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Final Range: "+e._s(e.selected_damage.range*e.selected_range_mod.range_mod))]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),n("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),n("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),n("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row4"},slot:"col3-row4"},[e._v(" ")]),n("div",{attrs:{slot:"col3-row5"},slot:"col3-row5"},[e._v("Standard Ammo Cost: "+e._s(e.round(.01*e.cost,2))+"/shot")]),n("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),n("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),n("mek-save-reset-component",{attrs:{"active-buttons":"save,reset,new"},on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],a=(n("a481"),n("072f")),c=n("8fcf"),o=n("7b4b"),r=n("f52e"),l={name:"mek_projectile",props:[],mixins:[a["a"],c["a"],o["a"],r["a"]],components:{"mek-projectile-damage":function(){return n.e("mek_projectile-damage").then(n.bind(null,"16ce"))},"mek-projectile-accuracy":function(){return n.e("mek_projectile-accuracy").then(n.bind(null,"d666"))},"mek-projectile-multi-feed":function(){return n.e("mek_projectile-multi-feed").then(n.bind(null,"454e"))},"mek-projectile-range-mod":function(){return n.e("mek_projectile-range-mod").then(n.bind(null,"42bc"))},"mek-projectile-burst-value":function(){return n.e("mek_projectile-burst-value").then(n.bind(null,"a75c"))},"mek-projectile-feature":function(){return n.e("mek_projectile-feature").then(n.bind(null,"5cc0"))},"mek-space-efficiency":function(){return n.e("mek-space-efficiency").then(n.bind(null,"57c1"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"4a3f"))},"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"972e"))},"mek-component-stats":function(){return n.e("mek_component-stats").then(n.bind(null,"67b1"))}},data:function(){var e={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"projectile",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:1,range:3},selected_accuracy:{accuracy:0,cost:1},selected_range_mod:{range_mod:1,cost:1,range:3},selected_multi_feed:{feeds:1,cost:1},selected_burst_value:{burst_value:1,cost:1},damage_capacity:1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.selected_accuracy=1,e.cost_multipliers.feature_array=1,e.cost_multipliers.selected_multi_feed=1,e.cost_multipliers.selected_burst_value=1,e.cost_multipliers.selected_range_mod=1,e.hasAlert=!1,e},methods:{updateComponentName:function(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy:function(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.selected_accuracy=e.cost,this.component_changed=!0},updateMultiFeed:function(e){this.$set(this,"selected_multi_feed",e),this.cost_multipliers.selected_multi_feed=e.cost,this.component_changed=!0},updateBurstValue:function(e){this.$set(this,"selected_burst_value",e),this.cost_multipliers.selected_burst_value=e.cost,this.component_changed=!0},updateRangeMod:function(e){this.$set(this,"selected_range_mod",e),this.cost_multipliers.selected_range_mod=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature_array=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.projectile_name},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"new":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"new":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"selected_damage",{damage:1,cost:1,range:3}),this.$set(this,"selected_accuracy",{accuracy:0,cost:1}),this.$set(this,"selected_range_mod",{range_mod:1,cost:1,range:3}),this.$set(this,"selected_multi_feed",{feeds:1,cost:1}),this.$set(this,"selected_burst_value",{burst_value:1,cost:1}),this.$set(this,"feature_array",[]),this.cost_multipliers.selected_accuracy=1,this.cost_multipliers.feature_array=1,this.cost_multipliers.selected_multi_feed=1,this.cost_multipliers.selected_burst_value=1,this.cost_multipliers.selected_range_mod=1,this.$store.commit("saveComponent",null);break}},output_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="projectile",t.component_name=null===this.component_name?this.projectile_name:this.component_name,t.custom_component_name=this.custom_component_name,t.cost_multipliers=this.cost_multipliers,t.efficiencies=this.efficiencies,t.selected_damage=this.selected_damage,t.selected_accuracy=this.selected_accuracy,t.feature_array=this.feature_array,t.selected_range_mod=this.selected_range_mod,t.selected_multi_feed=this.selected_multi_feed,t.selected_burst_value=this.selected_burst_value,t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.damage_capacity,this.$nextTick(function(){e.component_changed=!1}),this.original_component=JSON.stringify(t),JSON.parse(this.original_component)},ingest_data:function(e){var t=this,n="Projectile is not valid, resetting.";this.universal_ingest_data(e,n),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=t.hasAlert})},handleAlert:function(e){this.hasAlert=e}},computed:{raw_space:function(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},projectile_name:function(){var e=this.selected_burst_value.burst_value>1?"Burst-"+this.selected_burst_value.burst_value+" ":"";return e=this.feature_array.reduce(function(e,t){return e+t.feature+" "},e),e+=this.selected_damage.damage+"K Gun",e.replace(/\s+/g," ")}}},u=l,d=n("2877"),m=Object(d["a"])(u,s,i,!1,null,null,null);t["default"]=m.exports},"7b4b":function(e,t,n){"use strict";var s=n("7618");t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)if("object"===Object(s["a"])(this.cost_multipliers[t]))for(var n in this.cost_multipliers[t])e*=this.cost_multipliers[t][n];else e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,n){return e+=n>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,n){"use strict";n("ac6a"),n("34ef"),n("6b54"),n("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);var n=Math.pow(10,+t);return Math.round(+e*n)/n},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad:function(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},invisible_pad:function(e){var t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},aae3:function(e,t,n){var s=n("d3f4"),i=n("2d95"),a=n("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},d2c8:function(e,t,n){var s=n("aae3"),i=n("be13");e.exports=function(e,t,n){if(s(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},f52e:function(e,t,n){"use strict";var s=n("7618");n("ac6a"),n("456d"),n("6762"),n("2fdb");t["a"]={methods:{universal_ingest_data:function(e,t){this.original_component=JSON.stringify(e);var n=JSON.parse(this.original_component);for(var i in null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),n)if(!Object.keys(this._computedWatchers).includes(i))if("object"!==Object(s["a"])(n[i])||Array.isArray(n[i]))Array.isArray(n[i]),this.$set(this,i,n[i]);else for(var a in"object"===Object(s["a"])(this[i])&&null!==this[i]||this.$set(this,i,{}),n[i])this.$set(this[i],[a],n[i][a]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_projectile-main-legacy.c69cb285.js.map