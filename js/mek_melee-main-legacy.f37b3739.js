(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee-main"],{"2fdb":function(e,t,n){"use strict";var a=n("5ca1"),i=n("d2c8"),s="includes";a(a.P+a.F*n("5147")(s),"String",{includes:function(e){return!!~i(this,e,s).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,n){var a=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(i){}}return!0}},"52ee":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.melee_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-melee-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage,"alert-generated":e.handleAlert}}),n("mek-melee-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy,"alert-generated":e.handleAlert}})],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-melee-feature",{attrs:{"feature-array":e.feature_array},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}}),e.isEntangle?n("mek-melee-entangle-range",{staticStyle:{"align-self":"start"},attrs:{base_damage:e.selected_damage.damage,range_modifier:e.entangle.range_modifier,damage_modifier:e.entangle.damage_modifier},on:{"update-damage-and-range":e.updateDamageAndRange,"alert-generated":e.handleAlert}}):e._e(),n("mek-space-efficiency",{staticStyle:{"align-self":"start"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-Melee"},on:{"update-efficiencies":e.updateEfficiencies}})],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-component-stats",{attrs:{cols:4,rows:4}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v(e._s(0!=e.entangle.damage_modifier?"Base":"")+" Kills: "+e._s(e.selected_damage.damage)+" K")]),0!=e.entangle.damage_modifier?n("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Kills: "+e._s(e.selected_damage.damage-e.entangle.damage_modifier)+" K")]):e._e(),0!=e.entangle.range_modifier?n("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Range: "+e._s(e.entangle.range_modifier)+" hex")]):e._e(),n("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),n("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),n("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),n("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),n("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),n("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),n("mek-save-reset-component",{attrs:{"active-buttons":e.activeButtons},on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],s=(n("7f7f"),n("8fcf")),c=n("7b4b"),o=n("f52e"),r={name:"mek_melee",props:[""],mixins:[s["a"],c["a"],o["a"]],components:{"mek-melee-damage":function(){return n.e("mek_melee-damage").then(n.bind(null,"d928"))},"mek-melee-accuracy":function(){return n.e("mek_melee-accuracy").then(n.bind(null,"d250"))},"mek-melee-feature":function(){return n.e("mek_melee-feature").then(n.bind(null,"e7d5"))},"mek-melee-entangle-range":function(){return n.e("mek_melee-entangle-range").then(n.bind(null,"c433"))},"mek-space-efficiency":function(){return n.e("mek-space-efficiency").then(n.bind(null,"57c1"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"4a3f"))},"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"972e"))},"mek-component-stats":function(){return n.e("mek_component-stats").then(n.bind(null,"67b1"))}},data:function(){var e={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"melee",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:.5},selected_accuracy:{accuracy:0,cost:1},damage_capacity:1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.selected_accuracy=1,e.cost_multipliers.feature_array=1,e.entangle={},e.entangle.range_modifier=0,e.entangle.damage_modifier=0,e.hasAlert=!1,e},methods:{updateComponentName:function(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.selected_damage.damage=e.damage,this.selected_damage.cost=e.cost,this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy:function(e){this.selected_accuracy.accuracy=e.accuracy,this.selected_accuracy.cost=e.cost,this.cost_multipliers.selected_accuracy=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature_array=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.isEntangle||(this.entangle.range_modifier=0,this.entangle.damage_modifier=0),this.melee_name,this.component_changed=!0},updateDamageAndRange:function(e){this.entangle.range_modifier=e.range,this.entangle.damage_modifier=e.damage,this.component_changed=!0},output_melee_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="melee",t.component_name=null===this.component_name?this.melee_name:this.component_name,t.custom_component_name=this.custom_component_name,t.cost_multipliers=this.cost_multipliers,t.efficiencies=this.efficiencies,t.selected_damage=this.selected_damage,t.selected_accuracy=this.selected_accuracy,t.feature_array=this.feature_array,t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.selected_damage.damage,this.isEntangle&&(t.entangle={},t.entangle.damage_modifier=this.entangle.damage_modifier,t.entangle.range_modifier=this.entangle.range_modifier),this.$nextTick(function(){e.component_changed=!1}),this.original_component=JSON.stringify(t),JSON.parse(this.original_component)},ingest_data:function(e){var t=this,n="Melee is not valid, resetting.";this.universal_ingest_data(e,n),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=t.hasAlert})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"new":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_melee_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"delete":this.uuid&&(this.$store.commit("deleteComponent",{category:this.component_category,type:this.component_type,uuid:this.uuid}),this.uuid=null,this.$emit("updateMSMKey"));case"new":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"feature_array",[]),this.$set(this,"selected_damage",{damage:1,cost:.5}),this.$set(this,"selected_accuracy",{accuracy:0,cost:1}),this.$set(this,"entangle",{range_modifier:0,damage_modifier:0}),this.cost_multipliers.selected_accuracy=1,this.cost_multipliers.feature_array=1,this.$store.commit("saveComponent",null);break}},handleAlert:function(e){this.hasAlert=e}},computed:{final_damage:function(){return this.selected_damage.damage-this.entangle.damage_modifier},raw_space:function(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},isEntangle:function(){return this.feature_array.some(function(e){return"entangle"==e.feature.toLowerCase()})},melee_name:function(){var e=this.feature_array.reduce(function(e,t){return e+=t.name+" ",e},"");return e+=this.selected_damage.damage+"K ",e+"Melee"},activeButtons:function(){return"save,reset,new"+(null!==this.uuid?",delete":"")}}},l=r,u=n("2877"),m=Object(u["a"])(l,a,i,!1,null,null,null);t["default"]=m.exports},6762:function(e,t,n){"use strict";var a=n("5ca1"),i=n("c366")(!0);a(a.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"7b4b":function(e,t,n){"use strict";var a=n("7618");t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)if("object"===Object(a["a"])(this.cost_multipliers[t]))for(var n in this.cost_multipliers[t])e*=this.cost_multipliers[t][n];else e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,n){return e+=n>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,n){"use strict";n("ac6a"),n("34ef"),n("6b54"),n("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);var n=Math.pow(10,+t);return Math.round(+e*n)/n},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad:function(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},invisible_pad:function(e){var t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},aae3:function(e,t,n){var a=n("d3f4"),i=n("2d95"),s=n("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},d2c8:function(e,t,n){var a=n("aae3"),i=n("be13");e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},f52e:function(e,t,n){"use strict";var a=n("7618");n("ac6a"),n("456d"),n("6762"),n("2fdb");t["a"]={methods:{universal_ingest_data:function(e,t){this.original_component=JSON.stringify(e);var n=JSON.parse(this.original_component);for(var i in null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),n)if(!Object.keys(this._computedWatchers).includes(i))if("object"!==Object(a["a"])(n[i])||Array.isArray(n[i]))Array.isArray(n[i]),this.$set(this,i,n[i]);else for(var s in"object"===Object(a["a"])(this[i])&&null!==this[i]||this.$set(this,i,{}),n[i])this.$set(this[i],[s],n[i][s]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_melee-main-legacy.f37b3739.js.map