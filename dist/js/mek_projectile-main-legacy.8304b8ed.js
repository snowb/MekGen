(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-main"],{"072f":function(e,t,a){"use strict";a("6762"),a("2fdb");var s=a("a745"),n=a.n(s);a("cadf"),a("551c"),a("f751"),a("097d");t["a"]={methods:{selectedItem:function(e,t,a,s){var n="undefined"===typeof s?"":s;return"undefined"===typeof a?this[e]==t?"selected_item":n:this[e]==t?a:n},selectedItemMultiple:function(e,t,a,s){var c="undefined"===typeof s?"":s;return n()(this[e])?"undefined"===typeof a?this[e].includes(t)?"selected_item":c:this[e].includes(t)?a:c:""}}}},7352:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[a("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.projectile_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-projectile-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage,"alert-generated":e.handleAlert}}),a("mek-projectile-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy,"alert-generated":e.handleAlert}}),a("mek-projectile-burst-value",{attrs:{"burst-value":e.selected_burst_value},on:{"update-burst-value":e.updateBurstValue,"alert-generated":e.handleAlert}}),a("div",{staticClass:"mek-inline-flex-row"},[a("div",{staticClass:"mek-inline-flex-col"},[a("mek-projectile-multi-feed",{attrs:{"multi-feed":e.selected_multi_feed},on:{"update-multi-feed":e.updateMultiFeed,"alert-generated":e.handleAlert}})],1),a("mek-projectile-range-mod",{staticStyle:{"align-self":"baseline"},attrs:{"range-mod":e.selected_range_mod,"base-range":e.selected_damage.range},on:{"update-range-mod":e.updateRangeMod,"alert-generated":e.handleAlert}}),a("mek-projectile-feature",{staticStyle:{"align-self":"baseline"},attrs:{"feature-array":e.feature_array,"burst-value":e.selected_burst_value.burst_value},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}}),a("mek-space-efficiency",{staticStyle:{"align-self":"baseline"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-component-stats",{attrs:{cols:4,rows:5}},[a("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.selected_damage.damage)+" K")]),a("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),a("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Final Range: "+e._s(e.selected_damage.range*e.selected_range_mod.range_mod))]),a("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),a("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),a("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),a("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),a("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),a("div",{attrs:{slot:"col3-row4"},slot:"col3-row4"},[e._v(" ")]),a("div",{attrs:{slot:"col3-row5"},slot:"col3-row5"},[e._v("Standard Ammo Cost: "+e._s(e.round(.01*e.cost,2))+"/shot")]),a("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),a("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),a("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),a("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},n=[],c=(a("a481"),a("f499")),i=a.n(c),o=a("072f"),l=a("8fcf"),r=a("7b4b"),u=a("f52e"),d={name:"mek_projectile",props:[],mixins:[o["a"],l["a"],r["a"],u["a"]],components:{"mek-projectile-damage":function(){return a.e("mek-projectile-damage").then(a.bind(null,"16ce"))},"mek-projectile-accuracy":function(){return a.e("mek-projectile-accuracy").then(a.bind(null,"d666"))},"mek-projectile-multi-feed":function(){return a.e("mek-projectile-multi-feed").then(a.bind(null,"454e"))},"mek-projectile-range-mod":function(){return a.e("mek-projectile-range-mod").then(a.bind(null,"42bc"))},"mek-projectile-burst-value":function(){return a.e("mek-projectile-burst-value").then(a.bind(null,"a75c"))},"mek-projectile-feature":function(){return a.e("mek-projectile-feature").then(a.bind(null,"5cc0"))},"mek-space-efficiency":function(){return a.e("mek-space-efficiency").then(a.bind(null,"57c1"))},"mek-component-name":function(){return a.e("mek-component-name").then(a.bind(null,"dba3"))},"mek-save-reset-component":function(){return a.e("mek-save-reset-component").then(a.bind(null,"c342"))},"mek-component-stats":function(){return a.e("mek-component-stats").then(a.bind(null,"67b1"))}},data:function(){var e={uuid:null,component_name:null,component_category:"equipment",component_type:"projectile",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:1,range:3},selected_accuracy:{accuracy:0,cost:1},selected_range_mod:{range_mod:1,cost:1,range:3},selected_multi_feed:{feeds:1,cost:1},selected_burst_value:{burst_value:1,cost:1},damage_capacity:1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.cost_multipliers.multi_feed=1,e.cost_multipliers.burst_value=1,e.cost_multipliers.range_mod=1,e.hasAlert=!1,e},methods:{updateComponentName:function(e){this.component_name=e,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy:function(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateMultiFeed:function(e){this.$set(this,"selected_multi_feed",e),this.cost_multipliers.multi_feed=e.cost,this.component_changed=!0},updateBurstValue:function(e){this.$set(this,"selected_burst_value",e),this.cost_multipliers.burst_value=e.cost,this.component_changed=!0},updateRangeMod:function(e){this.$set(this,"selected_range_mod",e),this.cost_multipliers.range_mod=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.projectile_name},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"selected_damage",{damage:1,cost:1,range:3}),this.$set(this,"selected_accuracy",{accuracy:0,cost:1}),this.$set(this,"selected_range_mod",{range_mod:1,cost:1,range:3}),this.$set(this,"selected_multi_feed",{feeds:1,cost:1}),this.$set(this,"selected_burst_value",{burst_value:1,cost:1}),this.$set(this,"feature_array",[]),this.$store.commit("saveComponent",null);break}},output_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="projectile",t.component_name=null===this.component_name?this.projectile_name:this.component_name,t.cost_multipliers=JSON.parse(i()(this.cost_multipliers)),t.efficiencies=JSON.parse(i()(this.efficiencies)),t.selected_damage=JSON.parse(i()(this.selected_damage)),t.selected_accuracy=JSON.parse(i()(this.selected_accuracy)),t.feature_array=JSON.parse(i()(this.feature_array)),t.selected_range_mod=JSON.parse(i()(this.selected_range_mod)),t.selected_multi_feed=JSON.parse(i()(this.selected_multi_feed)),t.selected_burst_value=JSON.parse(i()(this.selected_burst_value)),t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.damage_capacity,this.$nextTick(function(){e.component_changed=!1}),this.original_component=i()(t),t},ingest_data:function(e){var t=this,a="Projectile is not valid, resetting.";this.universal_ingest_data(e,a),this.component_name==this.projectile_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=t.hasAlert})},handleAlert:function(e){this.hasAlert=e}},computed:{raw_space:function(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},projectile_name:function(){var e=this.selected_burst_value.burst_value>1?"Burst-"+this.selected_burst_value.burst_value+" ":"";return e=this.feature_array.reduce(function(e,t){return e+t.feature+" "},e),e=e.length>0?e+" Gun":"Gun",e.replace(/\s+/g," ")}}},m=d,_=a("2877"),p=Object(_["a"])(m,s,n,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=mek_projectile-main-legacy.8304b8ed.js.map