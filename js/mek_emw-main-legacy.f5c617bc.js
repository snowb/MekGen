(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-main"],{f60e:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[a("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.emw_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-emw-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage}}),a("mek-emw-accuracy",{attrs:{accuracy:e.selected_accuracy,"is-beam-shield":e.is_beam_shield,"is-variable-beam-shield":e.is_variable_beam_shield},on:{"update-accuracy":e.updateAccuracy}}),a("mek-emw-attack-factor",{attrs:{"attack-factor":e.selected_attack_factor},on:{"update-attack-factor":e.updateAttackFactor}})],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-emw-turns-in-use",{attrs:{"turns-in-use":e.selected_turns_in_use},on:{"update-turns-in-use":e.updateTurnsInUse}}),a("mek-emw-feature",{staticStyle:{"align-self":"start"},attrs:{"feature-array":e.feature_array,"turns-in-use":e.selected_turns_in_use.turns!=1/0},on:{"update-feature":e.updateFeature}}),a("span",{staticClass:"mek-flex-col no-margin"},[a("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-component-stats",{attrs:{cols:4,rows:3}},[a("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v(e._s(e.is_beam_shield&&!e.is_variable_beam_shield?"Base":"")+" Kills: "+e._s(e.selected_damage.damage)+" K")]),e.is_beam_shield?a("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[a("div",[e._v("Beam Shield Kills: "+e._s(e.beam_shield.damage)+" K")]),a("div",[e._v("Stopping Power: "+e._s(e.beam_shield.stopping_power)+" K")]),a("div",[e._v("Defense Accuracy: "+e._s(e.beam_shield.defense_accuracy))])]):e._e(),a("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),a("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),a("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),a("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),a("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),a("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),a("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),a("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),a("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),a("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},c=[],n=(a("a481"),a("f499")),i=a.n(n),o=a("072f"),r=a("8fcf"),u=a("7b4b"),l=a("f52e"),m={name:"mek_emw",props:[],mixins:[o["a"],r["a"],u["a"],l["a"]],components:{"mek-emw-damage":function(){return a.e("mek-emw-damage").then(a.bind(null,"c787"))},"mek-emw-accuracy":function(){return a.e("mek-emw-accuracy").then(a.bind(null,"2edc"))},"mek-emw-attack-factor":function(){return a.e("mek-emw-attack-factor").then(a.bind(null,"14f3"))},"mek-emw-turns-in-use":function(){return a.e("mek-emw-turns-in-use").then(a.bind(null,"3f76"))},"mek-emw-feature":function(){return a.e("mek-emw-feature").then(a.bind(null,"6168"))},"mek-space-efficiency":function(){return a.e("mek-space-efficiency").then(a.bind(null,"cd4a"))},"mek-component-name":function(){return a.e("mek-component-name").then(a.bind(null,"192f"))},"mek-save-reset-component":function(){return a.e("mek-save-reset-component").then(a.bind(null,"c849"))},"mek-component-stats":function(){return a.e("mek-component-stats").then(a.bind(null,"d854"))}},data:function(){var e={uuid:null,component_name:null,component_category:"equipment",component_type:"emw",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:1},selected_accuracy:{accuracy:1,cost:1},selected_attack_factor:{attack_factor:0,cost:1},selected_turns_in_use:{turns:1/0,cost:1},damage_capacity:.25,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.cost_multipliers.attack_factor=1,e.cost_multipliers.turns_in_use=1,e},methods:{updateComponentName:function(e){this.component_name=e,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.selected_damage.damage=e.damage,this.selected_damage.cost=e.cost,this.component_changed=!0,this.damage_capacity=e.damage/4},updateAccuracy:function(e){this.selected_accuracy.accuracy=e.accuracy,this.selected_accuracy.cost=e.cost,this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateAttackFactor:function(e){this.selected_attack_factor.attack_factor=e.attack_factor,this.selected_attack_factor.cost=e.cost,this.cost_multipliers.attack_factor=e.cost,this.component_changed=!0},updateTurnsInUse:function(e){this.selected_turns_in_use.turns=e.turns,this.selected_turns_in_use.cost=e.cost,this.cost_multipliers.turns_in_use=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.emw_name},output_emw_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="emw",t.component_name=null===this.component_name?this.emw_name:this.component_name,t.cost_multipliers=JSON.parse(i()(this.cost_multipliers)),t.efficiencies=JSON.parse(i()(this.efficiencies)),t.selected_damage=JSON.parse(i()(this.selected_damage)),t.selected_accuracy=JSON.parse(i()(this.selected_accuracy)),t.selected_turns_in_use=JSON.parse(i()(this.selected_turns_in_use)),t.selected_turns_in_use.turns=this.selected_turns_in_use.turns===1/0?"Infinity":this.selected_turns_in_use.turns,t.selected_attack_factor=JSON.parse(i()(this.selected_attack_factor)),t.feature_array=JSON.parse(i()(this.feature_array)),t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.selected_damage.damage,this.is_beam_shield&&(t.beam_shield=JSON.parse(i()(this.beam_shield))),this.$nextTick(function(){e.component_changed=!1}),this.original_component=i()(t),t},ingest_data:function(e){var t=this,a="EMW is not valid, resetting.";this.universal_ingest_data(e,a),this.component_name==this.emw_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_emw_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.selected_damage.damage=1,this.selected_accuracy.accuracy=1,this.selected_attack_factor.attack_factor=0,this.selected_turns_in_use.turns=0,this.$set(this,"feature_array",[]),this.$store.commit("saveComponent",null);break}}},computed:{raw_space:function(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},is_beam_shield:function(){return this.feature_array.some(function(e){return/beam/gi.test(e.feature)})},is_variable_beam_shield:function(){return this.feature_array.some(function(e){return/variable beam/gi.test(e.feature)})},beam_shield:function(){if(this.is_beam_shield){var e={};return e.stopping_power=this.selected_damage.damage,e.defense_accuracy=this.selected_accuracy.accuracy-2,e.damage=this.selected_damage.damage/2,e}return null},emw_name:function(){var e=0!=this.selected_attack_factor.attack_factor?"Automated ":"";return e=this.feature_array.reduce(function(e,t){return e+t.feature+" "},e),e=this.is_beam_shield?e.replace(/ $/,""):e+"EMW",e}}},_=m,d=a("2877"),p=Object(d["a"])(_,s,c,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=mek_emw-main-legacy.f5c617bc.js.map