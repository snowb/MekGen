(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-main"],{"072f":function(e,t,s){"use strict";s("6762"),s("2fdb");var a=s("a745"),n=s.n(a);s("cadf"),s("551c"),s("f751"),s("097d");t["a"]={methods:{selectedItem:function(e,t,s,a){var n="undefined"===typeof a?"":a;return"undefined"===typeof s?this[e]==t?"selected_item":n:this[e]==t?s:n},selectedItemMultiple:function(e,t,s,a){var i="undefined"===typeof a?"":a;return n()(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":i:this[e].includes(t)?s:i:""}}}},"4fa3":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.mounted?s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.beam_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-beam-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage}}),s("mek-beam-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy}})],1),s("div",{staticClass:"mek-inline-flex-row"},[s("div",{staticClass:"mek-flex-col no-margin"},[s("mek-beam-burst-value",{attrs:{"burst-value":e.selected_burst_value},on:{"update-burst-value":e.updateBurstValue}}),s("mek-beam-shots",{attrs:{shots:e.selected_shots,"mag-fed":e.mag_fed},on:{"update-shots":e.updateShots}}),s("mek-beam-shots")],1),s("mek-beam-range-mod",{staticStyle:{"align-self":"start"},attrs:{"range-mod":e.selected_range_mod,"anti-missile":e.anti_missile,"base-range":e.selected_damage.range},on:{"update-range-mod":e.updateRangeMod}}),s("div",{staticClass:"mek-inline-flex-col"},[e.show_warm_up_time?s("mek-beam-warm-up-time",{attrs:{"warm-up-time":e.selected_warm_up_time},on:{"update-warm-up-time":e.updateWarmUpTime}}):e._e(),s("mek-beam-wide-angle",{attrs:{"wide-angle":e.selected_wide_angle},on:{"update-wide-angle":e.updateWideAngle}}),s("mek-space-efficiency",{staticStyle:{"align-self":"baseline"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-beam-feature",{staticStyle:{"align-self":"baseline"},attrs:{"feature-array":e.feature_array,"burst-value":e.selected_burst_value.burst_value},on:{"update-feature":e.updateFeature}})],1)],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:4}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.selected_damage.damage)+" K")]),s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),0==e.selected_shots.shots?s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Shutdown: "+e._s(e.selected_damage.damage)+" turns")]):e._e(),s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Final Range: "+e._s(e.selected_damage.range*e.selected_range_mod.range_mod))]),s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),s("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.round(e.raw_space,2)))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),e.mag_fed?s("div",{attrs:{slot:"col3-row4"},slot:"col3-row4"},[e._v("E-Mag: +1CP, +1SP")]):e._e(),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),s("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.round(e.cost_multiplier,2)))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1):e._e()},n=[],i=(s("a481"),s("f499")),c=s.n(i),o=(s("cadf"),s("551c"),s("f751"),s("097d"),s("072f")),r=s("8fcf"),l=s("7b4b"),u=s("f52e"),m={name:"mek_beam",props:[],mixins:[o["a"],r["a"],l["a"],u["a"]],components:{"mek-beam-damage":function(){return s.e("mek_beam-damage").then(s.bind(null,"3d75"))},"mek-beam-accuracy":function(){return s.e("mek_beam-accuracy").then(s.bind(null,"35d7"))},"mek-beam-burst-value":function(){return s.e("mek_beam-burst-value").then(s.bind(null,"1d74"))},"mek-beam-range-mod":function(){return s.e("mek_beam-range-mod").then(s.bind(null,"c43c"))},"mek-beam-shots":function(){return s.e("mek_beam-shots").then(s.bind(null,"a804"))},"mek-beam-warm-up-time":function(){return s.e("mek_beam-warm-up-time").then(s.bind(null,"27b7"))},"mek-beam-wide-angle":function(){return s.e("mek_beam-wide-angle").then(s.bind(null,"7795"))},"mek-beam-feature":function(){return s.e("mek_beam-feature").then(s.bind(null,"bc65"))},"mek-space-efficiency":function(){return s.e("mek-space-efficiency").then(s.bind(null,"cd4a"))},"mek-component-name":function(){return s.e("mek-component-name").then(s.bind(null,"192f"))},"mek-save-reset-component":function(){return s.e("mek-save-reset-component").then(s.bind(null,"c849"))},"mek-component-stats":function(){return s.e("mek-component-stats").then(s.bind(null,"d854"))}},data:function(){var e={mounted:!1,uuid:null,component_name:null,component_category:"equipment",component_type:"beam",original_component:null,component_changed:!0,damage_capacity:1,selected_damage:{damage:1,cost:1.5,range:4},selected_burst_value:{burst_value:1,cost:1},selected_range_mod:{range_mod:1,cost:1,range:4},selected_accuracy:{accuracy:1,cost:1},selected_shots:{shots:"__INFINITY__",cost:1},selected_warm_up_time:{time:0,cost:1},selected_wide_angle:{angle:"__NIL__",cost:1},feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.cost_multipliers.shots=1,e.cost_multipliers.wide_angle=1,e.cost_multipliers.warm_up_time=1,e.cost_multipliers.burst_value=1,e},methods:{updateComponentName:function(e){this.component_name=e,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy:function(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateBurstValue:function(e){this.$set(this,"selected_burst_value",e),this.cost_multipliers.burst_value=e.cost,this.component_changed=!0},updateRangeMod:function(e){this.$set(this,"selected_range_mod",e),this.cost_multipliers.range_mod=e.cost,this.component_changed=!0},updateShots:function(e){this.$set(this,"selected_shots",e),this.cost_multipliers.shots=e.cost,this.component_changed=!0},updateWarmUpTime:function(e){this.$set(this,"selected_warm_up_time",e),this.cost_multipliers.warm_up_time=e.cost,this.component_changed=!0},updateWideAngle:function(e){this.$set(this,"selected_wide_angle",e),this.cost_multipliers.wide_angle=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.projectile_name,this.damage_capacity=this.fragile?1:this.selected_damage.damage},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"feature_array",[]),this.$set(this,"selected_damage",{damage:1,cost:1.5,range:4}),this.$set(this,"selected_burst_value",{burst_value:1,cost:1}),this.$set(this,"selected_range_mod",{range_mod:1,cost:1,range:4}),this.$set(this,"selected_accuracy",{accuracy:1,cost:1}),this.$set(this,"selected_shots",{shots:"__INFINITY__",cost:1}),this.$set(this,"selected_warm_up_time",{time:0,cost:1}),this.$set(this,"selected_wide_angle",{angle:"__NIL__",cost:1}),this.$store.commit("saveComponent",null);break}},output_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="beam",t.component_name=null===this.component_name?this.beam_name:this.component_name,t.cost_multipliers=JSON.parse(c()(this.cost_multipliers)),t.efficiencies=JSON.parse(c()(this.efficiencies)),t.selected_damage=JSON.parse(c()(this.selected_damage)),t.selected_burst_value=JSON.parse(c()(this.selected_burst_value)),t.selected_range_mod=JSON.parse(c()(this.selected_range_mod)),t.selected_accuracy=JSON.parse(c()(this.selected_accuracy)),t.selected_shots=JSON.parse(c()(this.selected_shots)),t.selected_warm_up_time=JSON.parse(c()(this.selected_warm_up_time)),t.selected_wide_angle=JSON.parse(c()(this.selected_wide_angle)),t.feature_array=JSON.parse(c()(this.feature_array)),t.cost=this.total_cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.damage_capacity,this.$nextTick(function(){e.component_changed=!1}),this.original_component=c()(t),t},ingest_data:function(e){var t=this,s="Beam is not valid, resetting.";this.universal_ingest_data(e,s),this.component_name==this.beam_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1})}},computed:{raw_space:function(){return this.selected_damage.cost*this.cost_multiplier},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,e+=this.mag_fed?1:0,this.round(e,2)},beam_name:function(){var e="__INFINITY__"==this.selected_burst_value.burst_value,t=1!=this.selected_burst_value.burst_value&&!e,s=t?"Burst-"+this.selected_burst_value.burst_value+" ":e?"Infinite-Burst ":"";s+="__NIL__"!=this.selected_wide_angle.angle?"Wide-Angle ":"";var a=!1,n=!1;return s=this.feature_array.reduce(function(e,t){switch(t.feature.toLowerCase()){case"hydro":return a=!0,e;case"mega-beam":return n=!0,e}return e+t.feature+" "},s),s+=a?" Hydro":n?" Mega-Beam":" Beam",s=s.trim(),s=s.replace(/\s+/g," "),s},mag_fed:function(){return this.feature_array.some(function(e){if("mag-fed"==e.feature.toLowerCase())return!0})},show_warm_up_time:function(){return!this.mag_fed&&"__INFINITY__"==this.selected_shots.shots},anti_missile:function(){return this.feature_array.some(function(e){if("anti-missile"==e.feature.toLowerCase())return!0})},fragile:function(){return this.feature_array.some(function(e){if("fragile"==e.feature.toLowerCase())return!0})}},mounted:function(){this.mounted=!0}},_=m,d=s("2877"),h=Object(d["a"])(_,a,n,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=mek_beam-main-legacy.a75ea621.js.map