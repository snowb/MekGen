(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee-main"],{"7f7f":function(e,t,a){var n=a("86cc").f,i=Function.prototype,c=/^\s*function ([^ (]*)/,s="name";s in i||a("9e1e")&&n(i,s,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},"9df1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[a("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.melee_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-melee-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage}}),a("mek-melee-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy}})],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-melee-feature",{attrs:{"feature-array":e.feature_array},on:{"update-feature":e.updateFeature}}),e.isEntangle?a("mek-melee-entangle-range",{staticStyle:{"align-self":"start"},attrs:{base_damage:e.selected_damage.damage,range_modifier:e.entangle.range_modifier,damage_modifier:e.entangle.damage_modifier},on:{"update-damage-and-range":e.updateDamageAndRange}}):e._e(),a("mek-space-efficiency",{staticStyle:{"align-self":"start"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-component-stats",{attrs:{cols:4,rows:4}},[a("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v(e._s(0!=e.entangle.damage_modifier?"Base":"")+" Kills: "+e._s(e.selected_damage.damage)+" K")]),0!=e.entangle.damage_modifier?a("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Kills: "+e._s(e.selected_damage.damage-e.entangle.damage_modifier)+" K")]):e._e(),0!=e.entangle.range_modifier?a("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Range: "+e._s(e.entangle.range_modifier)+" hex")]):e._e(),a("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),a("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),a("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),a("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),a("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),a("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),a("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),a("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),a("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),a("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],c=(a("7f7f"),a("f499")),s=a.n(c),o=(a("cadf"),a("551c"),a("f751"),a("097d"),a("072f")),r=a("8fcf"),l=a("7b4b"),m=a("f52e"),d={name:"mek_melee",props:[""],mixins:[o["a"],r["a"],l["a"],m["a"]],components:{"mek-melee-damage":function(){return a.e("mek-melee-damage").then(a.bind(null,"5b53"))},"mek-melee-accuracy":function(){return a.e("mek-melee-accuracy").then(a.bind(null,"ce32"))},"mek-melee-feature":function(){return a.e("mek-melee-feature").then(a.bind(null,"dd03"))},"mek-melee-entangle-range":function(){return a.e("mek-melee-entangle-range").then(a.bind(null,"f25b"))},"mek-space-efficiency":function(){return a.e("mek-space-efficiency").then(a.bind(null,"cd4a"))},"mek-component-name":function(){return a.e("mek-component-name").then(a.bind(null,"192f"))},"mek-save-reset-component":function(){return a.e("mek-save-reset-component").then(a.bind(null,"c849"))},"mek-component-stats":function(){return a.e("mek-component-stats").then(a.bind(null,"d854"))}},data:function(){var e={uuid:null,component_name:null,component_category:"equipment",component_type:"melee",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:.5},selected_accuracy:{accuracy:0,cost:1},damage_capacity:1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.entangle={},e.entangle.range_modifier=0,e.entangle.damage_modifier=0,e},methods:{updateComponentName:function(e){this.component_name=e,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.selected_damage.damage=e.damage,this.selected_damage.cost=e.cost,this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy:function(e){this.selected_accuracy.accuracy=e.accuracy,this.selected_accuracy.cost=e.cost,this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.isEntangle||(this.entangle.range_modifier=0,this.entangle.damage_modifier=0),this.melee_name},updateDamageAndRange:function(e){this.entangle.range_modifier=e.range,this.entangle.damage_modifier=e.damage},output_melee_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="melee",t.component_name=null===this.component_name?this.melee_name:this.component_name,t.cost_multipliers=JSON.parse(s()(this.cost_multipliers)),t.efficiencies=JSON.parse(s()(this.efficiencies)),t.selected_damage=JSON.parse(s()(this.selected_damage)),t.selected_accuracy=JSON.parse(s()(this.selected_accuracy)),t.feature_array=JSON.parse(s()(this.feature_array)),t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.selected_damage.damage,this.isEntangle&&(t.entangle={},t.entangle.damage_modifier=this.entangle.damage_modifier,t.entangle.range_modifier=this.entangle.range_modifier),this.$nextTick(function(){e.component_changed=!1}),this.original_component=s()(t),t},ingest_data:function(e){var t=this,a="Melee is not valid, resetting.";this.universal_ingest_data(e,a),this.component_name==this.melee_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_melee_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.entangle.damage_modifier=0,this.entangle.range_modifier=0,this.selected_damage.damage=1,this.selected_accuracy.accuracy=0,this.$set(this,"feature_array",[]),this.$store.commit("saveComponent",null);break}}},computed:{final_damage:function(){return this.selected_damage.damage-this.entangle.damage_modifier},raw_space:function(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},isEntangle:function(){return this.feature_array.some(function(e){return"entangle"==e.feature.toLowerCase()})},melee_name:function(){var e=this.feature_array.reduce(function(e,t){return e+=t.name+" ",e},"");return e+"Melee"}}},u=d,_=a("2877"),f=Object(_["a"])(u,n,i,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=mek_melee-main-legacy.95bf1f6d.js.map