(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee-main"],{"52ee":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[a("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.melee_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-melee-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage,"alert-generated":e.handleAlert}}),a("mek-melee-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy,"alert-generated":e.handleAlert}})],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-melee-feature",{attrs:{"feature-array":e.feature_array},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}}),e.isEntangle?a("mek-melee-entangle-range",{staticStyle:{"align-self":"start"},attrs:{base_damage:e.selected_damage.damage,range_modifier:e.entangle.range_modifier,damage_modifier:e.entangle.damage_modifier},on:{"update-damage-and-range":e.updateDamageAndRange,"alert-generated":e.handleAlert}}):e._e(),a("mek-space-efficiency",{staticStyle:{"align-self":"start"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-component-stats",{attrs:{cols:4,rows:4}},[a("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v(e._s(0!=e.entangle.damage_modifier?"Base":"")+" Kills: "+e._s(e.selected_damage.damage)+" K")]),0!=e.entangle.damage_modifier?a("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Kills: "+e._s(e.selected_damage.damage-e.entangle.damage_modifier)+" K")]):e._e(),0!=e.entangle.range_modifier?a("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Range: "+e._s(e.entangle.range_modifier)+" hex")]):e._e(),a("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),a("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),a("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),a("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),a("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),a("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),a("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),a("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),a("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),a("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],s=(a("7f7f"),a("f499")),c=a.n(s),o=(a("cadf"),a("551c"),a("f751"),a("097d"),a("8fcf")),r=a("7b4b"),l=a("f52e"),m={name:"mek_melee",props:[""],mixins:[o["a"],r["a"],l["a"]],components:{"mek-melee-damage":function(){return a.e("mek_melee-damage").then(a.bind(null,"d928"))},"mek-melee-accuracy":function(){return a.e("mek_melee-accuracy").then(a.bind(null,"d250"))},"mek-melee-feature":function(){return a.e("mek_melee-feature").then(a.bind(null,"e7d5"))},"mek-melee-entangle-range":function(){return a.e("mek_melee-entangle-range").then(a.bind(null,"c433"))},"mek-space-efficiency":function(){return a.e("mek-space-efficiency").then(a.bind(null,"57c1"))},"mek-component-name":function(){return a.e("mek-component-name").then(a.bind(null,"dba3"))},"mek-save-reset-component":function(){return a.e("mek-save-reset-component").then(a.bind(null,"c342"))},"mek-component-stats":function(){return a.e("mek_component-stats").then(a.bind(null,"67b1"))}},data:function(){var e={uuid:null,component_name:null,component_category:"equipment",component_type:"melee",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:.5},selected_accuracy:{accuracy:0,cost:1},damage_capacity:1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.entangle={},e.entangle.range_modifier=0,e.entangle.damage_modifier=0,e.hasAlert=!1,e},methods:{updateComponentName:function(e){this.component_name=e,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.selected_damage.damage=e.damage,this.selected_damage.cost=e.cost,this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy:function(e){this.selected_accuracy.accuracy=e.accuracy,this.selected_accuracy.cost=e.cost,this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.isEntangle||(this.entangle.range_modifier=0,this.entangle.damage_modifier=0),this.melee_name},updateDamageAndRange:function(e){this.entangle.range_modifier=e.range,this.entangle.damage_modifier=e.damage},output_melee_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="melee",t.component_name=null===this.component_name?this.melee_name:this.component_name,t.cost_multipliers=JSON.parse(c()(this.cost_multipliers)),t.efficiencies=JSON.parse(c()(this.efficiencies)),t.selected_damage=JSON.parse(c()(this.selected_damage)),t.selected_accuracy=JSON.parse(c()(this.selected_accuracy)),t.feature_array=JSON.parse(c()(this.feature_array)),t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.selected_damage.damage,this.isEntangle&&(t.entangle={},t.entangle.damage_modifier=this.entangle.damage_modifier,t.entangle.range_modifier=this.entangle.range_modifier),this.$nextTick(function(){e.component_changed=!1}),this.original_component=c()(t),t},ingest_data:function(e){var t=this,a="Melee is not valid, resetting.";this.universal_ingest_data(e,a),this.component_name==this.melee_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=t.hasAlert})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_melee_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.entangle.damage_modifier=0,this.entangle.range_modifier=0,this.selected_damage.damage=1,this.selected_accuracy.accuracy=0,this.$set(this,"feature_array",[]),this.$store.commit("saveComponent",null);break}},handleAlert:function(e){this.hasAlert=e}},computed:{final_damage:function(){return this.selected_damage.damage-this.entangle.damage_modifier},raw_space:function(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},isEntangle:function(){return this.feature_array.some(function(e){return"entangle"==e.feature.toLowerCase()})},melee_name:function(){var e=this.feature_array.reduce(function(e,t){return e+=t.name+" ",e},"");return e+=this.selected_damage.damage+"K ",e+"Melee"}}},u=m,d=a("2877"),_=Object(d["a"])(u,n,i,!1,null,null,null);t["default"]=_.exports},"7b4b":function(e,t,a){"use strict";var n=a("f499"),i=a.n(n);t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,a){return e+=a>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(i()(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"7f7f":function(e,t,a){var n=a("86cc").f,i=Function.prototype,s=/^\s*function ([^ (]*)/,c="name";c in i||a("9e1e")&&n(i,c,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},f52e:function(e,t,a){"use strict";var n=a("a745"),i=a.n(n),s=a("7618"),c=a("a4bb"),o=a.n(c),r=(a("6762"),a("2fdb"),a("f499")),l=a.n(r);t["a"]={methods:{universal_ingest_data:function(e,t){for(var a in this.original_component=l()(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),e)if(!o()(this._computedWatchers).includes(a))if("object"!==Object(s["a"])(e[a])||i()(e[a]))i()(e[a]),this.$set(this,a,e[a]);else for(var n in"object"===Object(s["a"])(this[a])&&null!==this[a]||(this[a]={}),e[a])this.$set(this[a],[n],e[a][n]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_melee-main-legacy.078f32a0.js.map