(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0609e8f8"],{"7b4b":function(e,t,s){"use strict";var a=s("f499"),c=s.n(a);t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,s){return e+=s>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(c()(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8b5d":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.projectile_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-projectile-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage}}),s("mek-projectile-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy}}),s("mek-projectile-burst-value",{attrs:{"burst-value":e.selected_burst_value},on:{"update-burst-value":e.updateBurstValue}}),s("div",{staticClass:"mek-inline-flex-row"},[s("div",{staticClass:"mek-inline-flex-col"},[s("mek-projectile-multi-feed",{attrs:{"multi-feed":e.selected_multi_feed},on:{"update-multi-feed":e.updateMultiFeed}})],1),s("mek-projectile-range-mod",{staticStyle:{"align-self":"baseline"},attrs:{"range-mod":e.selected_range_mod,"base-range":e.selected_damage.range},on:{"update-range-mod":e.updateRangeMod}}),s("mek-projectile-feature",{staticStyle:{"align-self":"baseline"},attrs:{"feature-array":e.feature_array,"burst-value":e.selected_burst_value.burst_value},on:{"update-feature":e.updateFeature}}),s("mek-space-efficiency",{staticStyle:{"align-self":"baseline"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:5}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.selected_damage.damage)+" K")]),s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Final Range: "+e._s(e.selected_damage.range*e.selected_range_mod.range_mod))]),s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),s("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),s("div",{attrs:{slot:"col3-row4"},slot:"col3-row4"},[e._v(" ")]),s("div",{attrs:{slot:"col3-row5"},slot:"col3-row5"},[e._v("Standard Ammo Cost: "+e._s(e.round(.01*e.cost,2))+"/shot")]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),s("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},c=[],n=(s("a481"),s("f499")),i=s.n(n),o=s("072f"),r=s("8fcf"),l=s("7b4b"),u=s("f52e"),d={name:"mek_projectile",props:[],mixins:[o["a"],r["a"],l["a"],u["a"]],components:{"mek-projectile-damage":function(){return s.e("chunk-0d1d47f0").then(s.bind(null,"1787"))},"mek-projectile-accuracy":function(){return s.e("chunk-302284be").then(s.bind(null,"eadc"))},"mek-projectile-multi-feed":function(){return s.e("chunk-c97df4f0").then(s.bind(null,"e556"))},"mek-projectile-range-mod":function(){return s.e("chunk-229dc35a").then(s.bind(null,"9613"))},"mek-projectile-burst-value":function(){return s.e("chunk-3b2c424f").then(s.bind(null,"f594"))},"mek-projectile-feature":function(){return s.e("chunk-5c68ca0f").then(s.bind(null,"e987"))},"mek-space-efficiency":function(){return s.e("mek-space-efficiency").then(s.bind(null,"cd4a"))},"mek-component-name":function(){return s.e("mek-component-name").then(s.bind(null,"192f"))},"mek-save-reset-component":function(){return s.e("mek-save-reset-component").then(s.bind(null,"c849"))},"mek-component-stats":function(){return s.e("mek-component-stats").then(s.bind(null,"d854"))}},data:function(){var e={uuid:null,component_name:null,component_category:"equipment",component_type:"projectile",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:1,range:3},selected_accuracy:{accuracy:0,cost:1},selected_range_mod:{range_mod:1,cost:1},selected_multi_feed:{feeds:1,cost:1},selected_burst_value:{burst_value:1,cost:1},damage_capacity:1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.cost_multipliers.multi_feed=1,e.cost_multipliers.burst_value=1,e.cost_multipliers.range_mod=1,e},methods:{updateComponentName:function(e){this.component_name=e,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.selected_damage.damage=e.damage,this.selected_damage.cost=e.cost,this.selected_damage.range=e.range,this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy:function(e){this.selected_accuracy.accuracy=e.accuracy,this.selected_accuracy.cost=e.cost,this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateMultiFeed:function(e){this.selected_multi_feed.feeds=e.feeds,this.selected_multi_feed.cost=e.cost,this.cost_multipliers.multi_feed=e.cost,this.component_changed=!0},updateBurstValue:function(e){this.selected_burst_value.burst_value=e.burst_value,this.selected_burst_value.cost=e.cost,this.cost_multipliers.burst_value=e.cost,this.component_changed=!0},updateRangeMod:function(e){this.selected_range_mod.range_mod=e.range_mod,this.selected_range_mod.cost=e.cost,this.cost_multipliers.range_mod=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.projectile_name},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.selected_damage.damage=1,this.selected_accuracy.accuracy=1,this.selected_range_mod.range_mod=1,this.selected_multi_feed.feeds1,this.selected_burst_value.burst_value=1,this.$set(this,"feature_array",[]),this.$store.commit("saveComponent",null);break}},output_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="projectile",t.component_name=null===this.component_name?this.projectile_name:this.component_name,t.cost_multipliers=JSON.parse(i()(this.cost_multipliers)),t.efficiencies=JSON.parse(i()(this.efficiencies)),t.selected_damage=JSON.parse(i()(this.selected_damage)),t.selected_accuracy=JSON.parse(i()(this.selected_accuracy)),t.feature_array=JSON.parse(i()(this.feature_array)),t.selected_range_mod=JSON.parse(i()(this.selected_range_mod)),t.selected_multi_feed=JSON.parse(i()(this.selected_multi_feed)),t.selected_burst_value=JSON.parse(i()(this.selected_burst_value)),t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.damage_capacity,this.$nextTick(function(){e.component_changed=!1}),this.original_component=i()(t),t},ingest_data:function(e){var t=this,s="Projectile is not valid, resetting.";this.universal_ingest_data(e,s),this.component_name==this.projectile_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1})}},computed:{raw_space:function(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},projectile_name:function(){var e=this.selected_burst_value.burst_value>1?"Burst-"+this.selected_burst_value.burst_value+" ":"";return e=this.feature_array.reduce(function(e,t){return e+t.feature+" "},e),e=e.length>0?e+" Gun":"Gun",e.replace(/\s+/g," ")}}},m=d,_=s("2877"),p=Object(_["a"])(m,a,c,!1,null,null,null);t["default"]=p.exports},f52e:function(e,t,s){"use strict";var a=s("a745"),c=s.n(a),n=s("7618"),i=s("a4bb"),o=s.n(i),r=(s("6762"),s("2fdb"),s("f499")),l=s.n(r);t["a"]={methods:{universal_ingest_data:function(e,t){for(var s in this.original_component=l()(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),e)if(!o()(this._computedWatchers).includes(s))if("object"!==Object(n["a"])(e[s])||c()(e[s]))c()(e[s]),this.$set(this,s,e[s]);else for(var a in"object"===Object(n["a"])(this[s])&&null!==this[s]||(this[s]={}),e[s])this.$set(this[s],[a],e[s][a]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0}}}}}]);
//# sourceMappingURL=chunk-0609e8f8.e7c8f869.js.map