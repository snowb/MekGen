(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-main"],{"0966":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[a("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.emw_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-emw-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage,"alert-generated":e.handleAlert}}),a("mek-emw-accuracy",{attrs:{accuracy:e.selected_accuracy,"is-beam-shield":e.is_beam_shield,"is-variable-beam-shield":e.is_variable_beam_shield},on:{"update-accuracy":e.updateAccuracy,"alert-generated":e.handleAlert}}),a("mek-emw-attack-factor",{attrs:{"attack-factor":e.selected_attack_factor},on:{"update-attack-factor":e.updateAttackFactor,"alert-generated":e.handleAlert}})],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-emw-turns-in-use",{attrs:{"turns-in-use":e.selected_turns_in_use},on:{"update-turns-in-use":e.updateTurnsInUse,"alert-generated":e.handleAlert}}),a("mek-emw-feature",{staticStyle:{"align-self":"start"},attrs:{"feature-array":e.feature_array,"infinite-use":"__INFINITY__"==e.selected_turns_in_use.turns},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}}),a("span",{staticClass:"mek-flex-col no-margin"},[a("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-component-stats",{attrs:{cols:4,rows:3}},[a("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v(e._s(e.is_beam_shield&&!e.is_variable_beam_shield?"Base":"")+" Kills: "+e._s(e.selected_damage.damage)+" K")]),e.is_beam_shield?a("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[a("div",[e._v("Beam Shield Kills: "+e._s(e.beam_shield.damage)+" K")]),a("div",[e._v("Stopping Power: "+e._s(e.beam_shield.stopping_power)+" K")]),a("div",[e._v("Defense Accuracy: "+e._s(e.beam_shield.defense_accuracy))])]):e._e(),a("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),a("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),a("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),a("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),a("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),a("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),a("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),a("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),a("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),a("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],n=(a("a481"),a("f499")),c=a.n(n),o=a("8fcf"),r=a("7b4b"),l=a("f52e"),u={name:"mek_emw",props:[],mixins:[o["a"],r["a"],l["a"]],components:{"mek-emw-damage":function(){return Promise.resolve().then(a.bind(null,"77d9"))},"mek-emw-accuracy":function(){return Promise.resolve().then(a.bind(null,"f278"))},"mek-emw-attack-factor":function(){return Promise.resolve().then(a.bind(null,"b84a"))},"mek-emw-turns-in-use":function(){return Promise.resolve().then(a.bind(null,"4fd5"))},"mek-emw-feature":function(){return Promise.resolve().then(a.bind(null,"c48b"))},"mek-space-efficiency":function(){return Promise.resolve().then(a.bind(null,"57c1"))},"mek-component-name":function(){return Promise.resolve().then(a.bind(null,"dba3"))},"mek-save-reset-component":function(){return Promise.resolve().then(a.bind(null,"c342"))},"mek-component-stats":function(){return Promise.resolve().then(a.bind(null,"67b1"))}},data:function(){var e={uuid:null,component_name:null,component_category:"equipment",component_type:"emw",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:1},selected_accuracy:{accuracy:1,cost:1,defense_ability:-1},selected_attack_factor:{attack_factor:"__NIL__",cost:1},selected_turns_in_use:{turns:"__INFINITY__",cost:1},damage_capacity:.25,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.cost_multipliers.attack_factor=1,e.cost_multipliers.turns_in_use=1,e.hasAlert=!1,e},methods:{updateComponentName:function(e){this.component_name=e,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=e.damage/4},updateAccuracy:function(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateAttackFactor:function(e){this.$set(this,"selected_attack_factor",e),this.cost_multipliers.attack_factor=e.cost,this.component_changed=!0},updateTurnsInUse:function(e){this.$set(this,"selected_turns_in_use",e),this.cost_multipliers.turns_in_use=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.emw_name},output_emw_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="emw",t.component_name=null===this.component_name?this.emw_name:this.component_name,t.cost_multipliers=JSON.parse(c()(this.cost_multipliers)),t.efficiencies=JSON.parse(c()(this.efficiencies)),t.selected_damage=JSON.parse(c()(this.selected_damage)),t.selected_accuracy=JSON.parse(c()(this.selected_accuracy)),t.selected_turns_in_use=JSON.parse(c()(this.selected_turns_in_use)),t.selected_attack_factor=JSON.parse(c()(this.selected_attack_factor)),t.feature_array=JSON.parse(c()(this.feature_array)),t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.selected_damage.damage,this.is_beam_shield&&(t.beam_shield=JSON.parse(c()(this.beam_shield))),this.$nextTick(function(){e.component_changed=!1}),this.original_component=c()(t),t},ingest_data:function(e){var t=this,a="EMW is not valid, resetting.";this.universal_ingest_data(e,a),this.component_name==this.emw_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=t.hasAlert})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_emw_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.selected_damage.damage=1,this.selected_accuracy.accuracy=1,this.selected_attack_factor.attack_factor="__NIL__",this.selected_turns_in_use.turns="__INFINITY__",this.$set(this,"feature_array",[]),this.$store.commit("saveComponent",null);break}},handleAlert:function(e){this.hasAlert=e}},computed:{raw_space:function(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},is_beam_shield:function(){return this.feature_array.some(function(e){return/beam/gi.test(e.feature)})},is_variable_beam_shield:function(){return this.feature_array.some(function(e){return/variable beam/gi.test(e.feature)})},beam_shield:function(){if(this.is_beam_shield){var e={};return e.stopping_power=this.selected_damage.damage,e.defense_accuracy=this.selected_accuracy.accuracy-2,e.damage=this.selected_damage.damage/2,e}return null},emw_name:function(){var e="__NIL__"!=this.selected_attack_factor.attack_factor?"Automated ":"";return e=this.feature_array.reduce(function(e,t){return e+t.feature+" "},e),e+=this.selected_damage.damage+"K ",e=this.is_beam_shield?e.replace(/ $/,""):e+"EMW",e}}},_=u,m=a("2877"),d=Object(m["a"])(_,s,i,!1,null,null,null);t["default"]=d.exports},"7b4b":function(e,t,a){"use strict";var s=a("f499"),i=a.n(s);t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,a){return e+=a>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(i()(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},f52e:function(e,t,a){"use strict";var s=a("a745"),i=a.n(s),n=a("7618"),c=a("a4bb"),o=a.n(c),r=(a("6762"),a("2fdb"),a("f499")),l=a.n(r);t["a"]={methods:{universal_ingest_data:function(e,t){for(var a in this.original_component=l()(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),e)if(!o()(this._computedWatchers).includes(a))if("object"!==Object(n["a"])(e[a])||i()(e[a]))i()(e[a]),this.$set(this,a,e[a]);else for(var s in"object"===Object(n["a"])(this[a])&&null!==this[a]||(this[a]={}),e[a])this.$set(this[a],[s],e[a][s]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_emw-main-legacy.bb0a7677.js.map