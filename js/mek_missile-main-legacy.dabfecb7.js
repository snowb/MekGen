(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-main"],{"072f":function(e,t,s){"use strict";s("6762"),s("2fdb");var i=s("a745"),a=s.n(i);s("cadf"),s("551c"),s("f751"),s("097d");t["a"]={methods:{selectedItem:function(e,t,s,i){var a="undefined"===typeof i?"":i;return"undefined"===typeof s?this[e]==t?"selected_item":a:this[e]==t?s:a},selectedItemMultiple:function(e,t,s,i){var n="undefined"===typeof i?"":i;return a()(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":n:this[e].includes(t)?s:n:""}}}},"2fdb":function(e,t,s){"use strict";var i=s("5ca1"),a=s("d2c8"),n="includes";i(i.P+i.F*s("5147")(n),"String",{includes:function(e){return!!~a(this,e,n).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,s){var i=s("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[i]=!1,!"/./"[e](t)}catch(a){}}return!0}},6762:function(e,t,s){"use strict";var i=s("5ca1"),a=s("c366")(!0);i(i.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"7b4b":function(e,t,s){"use strict";var i=s("f499"),a=s.n(i);t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,s){return e+=s>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(a()(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},a21f:function(e,t,s){var i=s("584a"),a=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},aae3:function(e,t,s){var i=s("d3f4"),a=s("2d95"),n=s("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},b954:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.missile_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-missile-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage}}),s("mek-missile-pack-size",{staticStyle:{"align-self":"flex-end"},attrs:{pack:e.selected_pack_size},on:{"update-pack-size":e.updatePackSize}}),e.is_mine?e._e():s("mek-missile-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy}}),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-missile-range-mod",{staticStyle:{"align-self":"baseline"},attrs:{"range-mod":e.selected_range_mod,"anti-missile":e.has_feature("countermissile"),"base-range":e.selected_damage.range},on:{"update-range-mod":e.updateRangeMod}}),s("div",{staticClass:"mek-inline-flex-col"},[e.is_mine||e.is_bomb?e._e():s("mek-missile-smart",{attrs:{smart:e.selected_smart},on:{"update-smart":e.updateSmart}}),e.selected_smart.smart>0&&!e.is_mine&&!e.is_bomb?s("mek-missile-skill",{attrs:{skill:e.selected_skill},on:{"update-skill":e.updateSkill}}):e._e(),s("mek-space-efficiency",{staticStyle:{"align-self":"baseline"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1),s("mek-missile-blast-radius",{attrs:{blast_radius:e.selected_blast_radius},on:{"update-blast-radius":e.updateBlastRadius}}),s("mek-missile-feature",{staticStyle:{"align-self":"baseline"},attrs:{"feature-array":e.feature_array,"smart-missile":e.selected_smart.smart>0,"blast-radius":e.selected_blast_radius.blast_radius},on:{"update-feature":e.updateFeature}})],1)],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:5}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.selected_damage.damage)+" K")]),s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Final Range: "+e._s(e.selected_damage.range*e.selected_range_mod.range_mod))]),e.has_duration?s("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Duration: "+e._s(e.smoke_scatter_duration)+" rounds")]):e._e(),s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),s("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),s("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},a=[],n=s("f499"),c=s.n(n),o=s("072f"),r=s("8fcf"),l=s("7b4b"),u=s("f52e"),d={name:"mek_missile",props:[],mixins:[o["a"],r["a"],l["a"],u["a"]],components:{"mek-missile-damage":function(){return s.e("mek-missile-damage").then(s.bind(null,"d899"))},"mek-missile-pack-size":function(){return s.e("mek-missile-pack-size").then(s.bind(null,"5886"))},"mek-missile-accuracy":function(){return s.e("mek-missile-accuracy").then(s.bind(null,"6d75"))},"mek-missile-range-mod":function(){return s.e("mek-missile-range-mod").then(s.bind(null,"492e"))},"mek-missile-smart":function(){return s.e("mek-missile-smart").then(s.bind(null,"fa2a"))},"mek-missile-skill":function(){return s.e("mek-missile-skill").then(s.bind(null,"7473"))},"mek-missile-blast-radius":function(){return s.e("mek-missile-blast-radius").then(s.bind(null,"6ed7"))},"mek-missile-feature":function(){return s.e("mek-missile-feature").then(s.bind(null,"deb2"))},"mek-space-efficiency":function(){return s.e("mek-space-efficiency").then(s.bind(null,"57c1"))},"mek-component-name":function(){return s.e("mek-component-name").then(s.bind(null,"dba3"))},"mek-save-reset-component":function(){return s.e("mek-save-reset-component").then(s.bind(null,"c342"))},"mek-component-stats":function(){return s.e("mek-component-stats").then(s.bind(null,"67b1"))}},data:function(){var e={uuid:null,component_name:null,component_category:"equipment",component_type:"missile",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:.1,range:4},selected_pack_size:1,selected_accuracy:{accuracy:0,cost:1},selected_range_mod:{range_mod:1,cost:1,id:6},selected_smart:{smart:"__NIL__",cost:1},selected_skill:{skill:6,cost:1},selected_blast_radius:{blast_radius:"__NIL__",cost:1},smoke_scatter_duration:null};return e.damage_capacity=this.round(1/15,2),e.feature_array=[],e.efficiencies={},e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.accuracy=1,e.cost_multipliers.feature=1,e.cost_multipliers.smart=1,e.cost_multipliers.skill=1,e.cost_multipliers.range_mod=1,e.cost_multipliers.blast_radius=1,e},methods:{updateComponentName:function(e){this.component_name=e,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=this.round(this.selected_pack_size*e.damage/15,2),this.has_duration&&this.$set(this,"smoke_scatter_duration",this.round(this.selected_damage.damage/2,0))},updatePackSize:function(e){var t=e>0?e:1;this.$set(this,"selected_pack_size",t),this.component_changed=!0,this.damage_capacity=this.round(this.selected_damage.damage*e/15,1)},updateAccuracy:function(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.accuracy=e.cost,this.component_changed=!0},updateRangeMod:function(e){this.$set(this,"selected_range_mod",e),this.cost_multipliers.range_mod=e.cost,this.selected_range_mod.type="undefined"!==typeof e.type?e.type:null,(this.is_mine||this.is_bomb)&&(this.updateSmart({smart:"__NIL__",cost:1}),this.updateSkill({skill:6,cost:1})),this.is_mine&&this.updateAccuracy({accuracy:0,cost:1}),this.component_changed=!0},updateSmart:function(e){this.$set(this,"selected_smart",e),this.cost_multipliers.smart=e.cost,this.component_changed=!0},updateSkill:function(e){this.$set(this,"selected_skill",e),this.cost_multipliers.smart=e.cost,this.component_changed=!0},updateBlastRadius:function(e){this.$set(this,"selected_blast_radius",e),this.cost_multipliers.blast_radius=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.missile_name,this.has_duration&&this.$set(this,"smoke_scatter_duration",this.round(this.selected_damage.damage/2,0))},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.selected_damage.damage=1,this.selected_pack_size=1,this.selected_accuracy.accuracy=0,this.selected_range_mod.range_mod=1,this.selected_smart.smart="__NIL__",this.selected_skill.skill=6,this.selected_blast_radius.blast_radius="__NIL__",this.smoke_scatter_duration=null,this.$set(this,"feature_array",[]),this.$store.commit("saveComponent",null);break}},output_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="missile",t.component_name=null===this.component_name?this.missile_name:this.component_name,t.cost_multipliers=JSON.parse(c()(this.cost_multipliers)),t.efficiencies=JSON.parse(c()(this.efficiencies)),t.selected_damage=JSON.parse(c()(this.selected_damage)),t.selected_pack_size=this.selected_pack_size,t.selected_accuracy=JSON.parse(c()(this.selected_accuracy)),t.selected_range_mod=JSON.parse(c()(this.selected_range_mod)),t.selected_smart=JSON.parse(c()(this.selected_smart)),t.selected_skill=JSON.parse(c()(this.selected_skill)),t.selected_blast_radius=JSON.parse(c()(this.selected_blast_radius)),t.cost=this.total_cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.damage_capacity,this.$nextTick(function(){e.component_changed=!1}),this.original_component=c()(t),t},ingest_data:function(e){var t=this,s="Missile is not valid, resetting.";this.universal_ingest_data(e,s),this.component_name==this.missile_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1})},has_feature:function(e){return this.feature_array.some(function(t){return t.feature.toLowerCase()==e.toLowerCase()})}},computed:{raw_space:function(){var e=this.has_feature("nuclear")?this.cost_multiplier/1e3:this.cost_multiplier;return this.round(this.selected_damage.cost*e*this.selected_pack_size,2)},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e*this.selected_pack_size,2)},missile_name:function(){var e=this.has_feature("nuclear")?"Nuclear ":"";e+="__NIL__"!=this.selected_smart.smart?"Smart-"+this.selected_skill.skill+" ":"",e=this.feature_array.reduce(function(e,t){return"nuclear"==t.feature.toLowerCase()?e:e+t.feature+" "},e);var t=this.is_mine?" Mine":this.is_bomb?" Bomb":" Missile";return e=e+t+" Pack",e+" ("+this.selected_pack_size+")"},is_bomb:function(){return"undefined"!==typeof this.selected_range_mod.type&&null!==this.selected_range_mod.type&&"bomb"==this.selected_range_mod.type.toLowerCase()},is_mine:function(){return"undefined"!==typeof this.selected_range_mod.type&&null!==this.selected_range_mod.type&&"mine"==this.selected_range_mod.type.toLowerCase()},has_duration:function(){var e=this.has_feature("smoke")||this.has_feature("scatter")||this.has_feature("smoke-scatter");return e}}},m=d,_=s("2877"),h=Object(_["a"])(m,i,a,!1,null,null,null);t["default"]=h.exports},d2c8:function(e,t,s){var i=s("aae3"),a=s("be13");e.exports=function(e,t,s){if(i(t))throw TypeError("String#"+s+" doesn't accept regex!");return String(a(e))}},f499:function(e,t,s){e.exports=s("a21f")},f52e:function(e,t,s){"use strict";var i=s("a745"),a=s.n(i),n=s("7618"),c=s("a4bb"),o=s.n(c),r=(s("6762"),s("2fdb"),s("f499")),l=s.n(r);t["a"]={methods:{universal_ingest_data:function(e,t){for(var s in this.original_component=l()(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),e)if(!o()(this._computedWatchers).includes(s))if("object"!==Object(n["a"])(e[s])||a()(e[s]))a()(e[s]),this.$set(this,s,e[s]);else for(var i in"object"===Object(n["a"])(this[s])&&null!==this[s]||(this[s]={}),e[s])this.$set(this[s],[i],e[s][i]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_missile-main-legacy.dabfecb7.js.map