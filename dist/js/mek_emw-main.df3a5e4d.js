(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-main"],{"0966":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[a("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.emw_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-emw-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage,"alert-generated":e.handleAlert}}),a("mek-emw-accuracy",{attrs:{accuracy:e.selected_accuracy,"is-beam-shield":e.is_beam_shield,"is-variable-beam-shield":e.is_variable_beam_shield},on:{"update-accuracy":e.updateAccuracy,"alert-generated":e.handleAlert}}),a("mek-emw-attack-factor",{attrs:{"attack-factor":e.selected_attack_factor},on:{"update-attack-factor":e.updateAttackFactor,"alert-generated":e.handleAlert}})],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-emw-turns-in-use",{attrs:{"turns-in-use":e.selected_turns_in_use},on:{"update-turns-in-use":e.updateTurnsInUse,"alert-generated":e.handleAlert}}),a("mek-emw-feature",{staticStyle:{"align-self":"start"},attrs:{"feature-array":e.feature_array,"infinite-use":"__INFINITY__"==e.selected_turns_in_use.turns},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}}),a("span",{staticClass:"mek-flex-col no-margin"},[a("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-component-stats",{attrs:{cols:4,rows:3}},[a("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v(e._s(e.is_beam_shield&&!e.is_variable_beam_shield?"Base":"")+" Kills: "+e._s(e.selected_damage.damage)+" K")]),e.is_beam_shield?a("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[a("div",[e._v("Beam Shield Kills: "+e._s(e.beam_shield.damage)+" K")]),a("div",[e._v("Stopping Power: "+e._s(e.beam_shield.stopping_power)+" K")]),a("div",[e._v("Defense Accuracy: "+e._s(e.beam_shield.defense_accuracy))])]):e._e(),a("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),a("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),a("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),a("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),a("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),a("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),a("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),a("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),a("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),a("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],n=(a("a481"),a("8fcf")),c=a("7b4b"),r=a("f52e"),o={name:"mek_emw",props:[],mixins:[n["a"],c["a"],r["a"]],components:{"mek-emw-damage":()=>a.e("mek-emw-damage").then(a.bind(null,"77d9")),"mek-emw-accuracy":()=>a.e("mek-emw-accuracy").then(a.bind(null,"f278")),"mek-emw-attack-factor":()=>a.e("mek-emw-attack-factor").then(a.bind(null,"b84a")),"mek-emw-turns-in-use":()=>a.e("mek-emw-turns-in-use").then(a.bind(null,"4fd5")),"mek-emw-feature":()=>a.e("mek-emw-feature").then(a.bind(null,"c48b")),"mek-space-efficiency":()=>a.e("mek-space-efficiency").then(a.bind(null,"57c1")),"mek-component-name":()=>a.e("mek-component-name").then(a.bind(null,"dba3")),"mek-save-reset-component":()=>a.e("mek-save-reset-component").then(a.bind(null,"c342")),"mek-component-stats":()=>a.e("mek-component-stats").then(a.bind(null,"67b1"))},data:function(){let e={uuid:null,component_name:null,component_category:"equipment",component_type:"emw",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:1},selected_accuracy:{accuracy:1,cost:1,defense_ability:-1},selected_attack_factor:{attack_factor:"__NIL__",cost:1},selected_turns_in_use:{turns:"__INFINITY__",cost:1},damage_capacity:.25,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.cost_multipliers.attack_factor=1,e.cost_multipliers.turns_in_use=1,e.hasAlert=!1,e},methods:{updateComponentName(e){this.component_name=e,this.component_changed=!0},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=e.damage/4},updateAccuracy(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateAttackFactor(e){this.$set(this,"selected_attack_factor",e),this.cost_multipliers.attack_factor=e.cost,this.component_changed=!0},updateTurnsInUse(e){this.$set(this,"selected_turns_in_use",e),this.cost_multipliers.turns_in_use=e.cost,this.component_changed=!0},updateFeature(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce((e,t)=>{return e*t.cost},1),this.emw_name},output_emw_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="emw",e.component_name=null===this.component_name?this.emw_name:this.component_name,e.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers)),e.efficiencies=JSON.parse(JSON.stringify(this.efficiencies)),e.selected_damage=JSON.parse(JSON.stringify(this.selected_damage)),e.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy)),e.selected_turns_in_use=JSON.parse(JSON.stringify(this.selected_turns_in_use)),e.selected_attack_factor=JSON.parse(JSON.stringify(this.selected_attack_factor)),e.feature_array=JSON.parse(JSON.stringify(this.feature_array)),e.cost=this.cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.final_damage=this.final_damage,e.damage_capacity=this.selected_damage.damage,this.is_beam_shield&&(e.beam_shield=JSON.parse(JSON.stringify(this.beam_shield))),this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),e},ingest_data(e){let t="EMW is not valid, resetting.";this.universal_ingest_data(e,t),this.component_name==this.emw_name&&this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=this.hasAlert})},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_emw_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.selected_damage.damage=1,this.selected_accuracy.accuracy=1,this.selected_attack_factor.attack_factor="__NIL__",this.selected_turns_in_use.turns="__INFINITY__",this.$set(this,"feature_array",[]),this.$store.commit("saveComponent",null);break}},handleAlert(e){this.hasAlert=e}},computed:{raw_space(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){let e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},is_beam_shield(){return this.feature_array.some(e=>{return/beam/gi.test(e.feature)})},is_variable_beam_shield(){return this.feature_array.some(e=>{return/variable beam/gi.test(e.feature)})},beam_shield(){if(this.is_beam_shield){let e={};return e.stopping_power=this.selected_damage.damage,e.defense_accuracy=this.selected_accuracy.accuracy-2,e.damage=this.selected_damage.damage/2,e}return null},emw_name(){let e="__NIL__"!=this.selected_attack_factor.attack_factor?"Automated ":"";return e=this.feature_array.reduce((e,t)=>{return e+t.feature+" "},e),e=this.is_beam_shield?e.replace(/ $/,""):e+"EMW",e}}},l=o,u=a("2877"),_=Object(u["a"])(l,s,i,!1,null,null,null);t["default"]=_.exports},"7b4b":function(e,t,a){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,a){return e+=a>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,a){"use strict";a("ac6a"),a("6b54"),a("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let a=10**+t;return Math.round(+e*a)/a},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},f52e:function(e,t,a){"use strict";a("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let a in e)if(!Object.keys(this._computedWatchers).includes(a))if("object"!==typeof e[a]||Array.isArray(e[a]))Array.isArray(e[a]),this.$set(this,a,e[a]);else{"object"===typeof this[a]&&null!==this[a]||(this[a]={});for(let t in e[a])this.$set(this[a],[t],e[a][t])}this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_emw-main.df3a5e4d.js.map