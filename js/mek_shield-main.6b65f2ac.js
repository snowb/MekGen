(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-main"],{"3ffa":function(e,t,s){"use strict";t["a"]={data:function(){return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},"7b4b":function(e,t,s){"use strict";var i=s("f499"),n=s.n(i);t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,s){return e+=s>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(n()(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"7f7f":function(e,t,s){var i=s("86cc").f,n=Function.prototype,o=/^\s*function ([^ (]*)/,r="name";r in n||s("9e1e")&&i(n,r,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},f014:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-inline-flex-col"},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.shield_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("div",{staticClass:"mek-inline-flex-row"},[s("div",{staticClass:"mek-flex-col"},[s("mekshield-type",{attrs:{type:e.type},on:{"update-type":e.select_type}}),s("mekshield-class",{attrs:{shield_class:e.shield_class,type:e.type,is_ablative:e.is_ablative},on:{"update-class-code":e.select_class_code}})],1),s("span",{staticClass:"mek-flex-col no-margin"},["standard"==e.type.toLowerCase()?s("mekshield-defense-ability",{attrs:{defense_ability:e.defense_ability,cost:e.cost_multipliers.defense_ability},on:{"update-defense-ability":e.select_da}}):e._e(),"standard"==e.type.toLowerCase()||"active"==e.type.toLowerCase()?s("mekshield-binder",{attrs:{binder:e.binder,base_stopping_power:e.shield_class.stopping_power},on:{"update-binder":e.select_binder}}):e._e(),"reactive"==e.type.toLowerCase()?s("mekshield-reset-time",{attrs:{"reset-time":e.reset_time},on:{"update-reset-time":e.select_reset}}):e._e(),"reactive"==e.type.toLowerCase()?s("mekshield-turns-in-use",{attrs:{"turns-in-use":e.turns_in_use},on:{"update-turns-in-use":e.select_turns}}):e._e()],1),s("span",{staticClass:"mek-flex-col no-margin"},["standard"==e.type.toLowerCase()||"active"==e.type.toLowerCase()?s("mek-armor-type",{attrs:{"armor-type":e.armor_type},on:{"update-armor-type":e.select_armor_type}}):e._e(),"standard"==e.type.toLowerCase()||"active"==e.type.toLowerCase()?s("mek-energy-absorbing-armor",{attrs:{absorption:e.absorption},on:{"update-absorption":e.select_absorption}}):e._e()],1),"reactive"==e.type.toLowerCase()?s("span",{staticClass:"mek-flex-col no-margin"},[s("mekshield-weakness",{attrs:{"weakness-array":e.weakness_array},on:{"update-weakness":e.select_weakness}})],1):e._e(),s("span",{staticClass:"mek-flex-col no-margin"},[s("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)]),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:5}},[null!==e.shield_class.kills?s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.shield_class.kills))]):s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Base Stopping Power: "+e._s(e.round(e.shield_class.stopping_power,2))+"\n                "),s("br"),e._v("Final Stopping Power: "+e._s(e.round(e.calculate_stopping_power(),2))+"\n            ")]),null!==e.armor_type?s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Armor Type: "+e._s(e.armor_type.type))]):e._e(),null!==e.armor_type?s("div",{staticStyle:{"padding-left":"10px"},attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Damage Coefficient: "+e._s(e.armor_type.damage_coefficient))]):e._e(),null!==e.absorption?s("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Absorption: "+e._s(100*e.absorption.absorption)+"%")]):e._e(),"standard"==e.type.toLowerCase()||"active"==e.type.toLowerCase()?s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Binder Space: "+e._s(e.round(e.binder.space,3)))]):e._e(),"reactive"==e.type.toLowerCase()?s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Weakness(es):"),s("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]):e._e(),"reactive"==e.type.toLowerCase()?s("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Reset Time: "+e._s(e.reset_time.time))]):e._e(),"reactive"==e.type.toLowerCase()?s("div",{attrs:{slot:"col2-row3"},slot:"col2-row3"},[e._v("Turns in Use: "+e._s(e.turns_in_use.time))]):e._e(),"reactive"==e.type.toLowerCase()?s("div",{attrs:{slot:"col2-row4"},slot:"col2-row4"},[e._v("Surge Damage: "+e._s(e.surge_damage))]):e._e(),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.shield_class.cost))]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},n=[],o=(s("a481"),s("f499")),r=s.n(o),a=(s("7f7f"),s("3ffa")),l=s("072f"),c=s("8fcf"),_=s("f52e"),p=s("7b4b"),h={name:"mek_shield",mixins:[a["a"],l["a"],c["a"],_["a"],p["a"]],components:{"mekshield-type":function(){return s.e("chunk-0e889f83").then(s.bind(null,"45a6"))},"mekshield-class":function(){return s.e("chunk-58e3f5a4").then(s.bind(null,"4fe9"))},"mekshield-defense-ability":function(){return s.e("chunk-d0f3b53a").then(s.bind(null,"110f"))},"mekshield-binder":function(){return s.e("chunk-2c40915e").then(s.bind(null,"e2d2"))},"mekshield-reset-time":function(){return s.e("chunk-2876d1e0").then(s.bind(null,"83d2"))},"mekshield-turns-in-use":function(){return s.e("chunk-3353792e").then(s.bind(null,"69f3"))},"mekshield-weakness":function(){return s.e("chunk-00381fee").then(s.bind(null,"f228"))},"mek-space-efficiency":function(){return s.e("mek-space-efficiency").then(s.bind(null,"cd4a"))},"mek-component-name":function(){return s.e("chunk-08f8efce").then(s.bind(null,"192f"))},"mek-save-reset-component":function(){return s.e("mek-save-reset-component").then(s.bind(null,"c849"))},"mek-component-stats":function(){return s.e("mek-component-stats").then(s.bind(null,"d854"))},"mek-armor-type":function(){return s.e("chunk-1c252dba").then(s.bind(null,"5bb4"))},"mek-energy-absorbing-armor":function(){return s.e("chunk-77de5932").then(s.bind(null,"178d"))}},data:function(){var e={uuid:null,type:"standard",component_name:null,component_category:"equipment",component_type:"shield",original_component:null,component_changed:!0,shield_class:{}};return e.shield_class.code=1,e.shield_class.stopping_power=5,e.shield_class.kills=null,e.shield_class.cost=5,e.shield_class.id="SL",e.shield_class.name="Superlight",e.defense_ability=-2,e.cost_multipliers={},e.cost_multipliers.defense_ability=1,e.binder={},e.binder.cost=1,e.binder.space=0,e.binder.stopping_power_modifier=0,e.cost_multipliers.binder=1,e.reset_time={},e.reset_time.time=2,e.reset_time.cost=1,e.cost_multipliers.reset_time=1,e.turns_in_use={},e.turns_in_use.time="X",e.turns_in_use.cost=1,e.cost_multipliers.turns_in_use=1,e.weakness_array=[],e.weakness_array[0]={},e.weakness_array[0].weakness="All",e.weakness_array[0].monicker="Shield",e.weakness_array[0].cost=1,e.weakness_array[0].exclusive=!1,e.cost_multipliers.weakness=1,e.efficiencies={},e.efficiencies.space={modifier:0,cost:0},e.armor_type={type:"Standard",damage_coefficient:1,cost:1},e.cost_multipliers.armor_type=1,e.absorption={absorption:0,cost:1,armor_penalty:1},e.cost_multipliers.absorption=1,e},methods:{select_type:function(e){if(this.type.toLowerCase()!=e.toLowerCase()){if(this.component_changed=!0,this.type=e.toLowerCase(),"reactive"===this.type){this.shield_class.cost=3*this.shield_class.stopping_power,this.defense_ability=null,this.cost_multipliers.defense_ability=1,this.$set(this,"binder",{stopping_power_modifier:0}),this.cost_multipliers.binder=1;var t=null===this.reset_time?{cost:1,time:2}:this.reset_time;this.$set(this,"reset_time",t),this.cost_multipliers.reset_time=this.reset_time.cost;var s=null===this.turns_in_use?{time:"X",cost:1}:this.turns_in_use;this.$set(this,"turns_in_use",s),this.cost_multipliers.turns_in_use=this.turns_in_use.cost;var i=null===this.weakness_array?[{weakness:"All",monicker:"Shield",cost:1,exclusive:!1}]:this.weakness_array;this.$set(this,"weakness_array",i),this.cost_multipliers.weakness=this.weakness_array.reduce(function(e,t){return e*t.cost},1),this.$set(this,"armor_type",null),this.cost_multipliers.armor_type=1,this.$set(this,"absorption",null),this.cost_multipliers.absorption=1}else"active"===this.type?(this.shield_class.cost=1.5*this.shield_class.stopping_power,this.defense_ability=null,this.cost_multipliers.defense_ability=1,"undefined"===typeof this.binder.space&&(this.$set(this,"binder",{cost:1,space:0,stopping_power_modifier:0}),this.shield_name),this.cost_multipliers.binder=this.binder.cost,this.reset_time=null,this.cost_multipliers.reset_time=1,this.turns_in_use=null,this.cost_multipliers.turns_in_use=1,this.weakness_array=null,this.cost_multipliers.weakness=1,null===this.armor_type&&(this.$set(this,"armor_type",{type:"Standard",damage_coefficient:1,cost:1}),this.cost_multipliers.armor_type=1),null===this.absorption&&(this.$set(this,"absorption",{absorption:0,cost:1,armor_penalty:1}),this.cost_multipliers.absorption=1)):"standard"==this.type&&(this.shield_class.cost=this.shield_class.stopping_power,this.defense_ability=null===this.defense_ability?-2:this.defense_ability,this.cost_multipliers.defense_ability=null===this.cost_multipliers.defense_ability?1:this.cost_multipliers.defense_ability,null===this.binder&&(this.$set(this,"binder",{cost:1,space:0,stopping_power_modifier:0}),this.shield_name),this.cost_multipliers.binder=this.binder.cost,this.reset_time=null,this.cost_multipliers.reset_time=1,this.turns_in_use=null,this.cost_multipliers.turns_in_use=1,this.weakness_array=null,this.cost_multipliers.weakness=1,null===this.armor_type&&(this.$set(this,"armor_type",{type:"Standard",damage_coefficient:1,cost:1}),this.cost_multipliers.armor_type=1),null===this.absorption&&(this.$set(this,"absorption",{absorption:0,cost:1,armor_penalty:1}),this.cost_multipliers.absorption=1));this.component_changed=!0}},select_class_code:function(e){this.shield_class.code=e.code,this.shield_class.stopping_power=e.stopping_power,this.shield_class.cost=e.cost,this.shield_class.id=e.id,this.shield_class.name=e.name,this.component_changed=!0},select_da:function(e){this.defense_ability=e.da,this.cost_multipliers.defense_ability=e.cost,this.component_changed=!0},select_binder:function(e){this.binder.cost=e.cost,this.binder.space=e.space,this.binder.stopping_power_modifier=e.stopping_power_modifier,this.cost_multipliers.binder=e.cost,this.shield_name,this.component_changed=!0},select_reset:function(e){this.reset_time=e,this.cost_multipliers.reset_time=e.cost,this.component_changed=!0},select_turns:function(e){this.turns_in_use=e,this.cost_multipliers.turns_in_use=e.cost,this.component_changed=!0},select_weakness:function(e){this.$set(this,"weakness_array",e),this.cost_multipliers.weakness=this.weakness_array.reduce(function(e,t){return e*=t.cost,e},1),this.shield_class.kills=this.is_ablative?5*this.calculate_stopping_power():null,this.component_changed=!0},select_armor_type:function(e){this.$set(this,"armor_type",JSON.parse(r()(e))),this.cost_multipliers.armor_type=this.armor_type.cost},select_absorption:function(e){this.$set(this,"absorption",JSON.parse(r()(e))),this.cost_multipliers.absorption=this.absorption.cost},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},calculate_stopping_power:function(){var e=null!==this.absorption?this.absorption.armor_penalty+this.binder.stopping_power_modifier:this.binder.stopping_power_modifier;return this.shield_class.stopping_power-this.shield_class.stopping_power*e},weighted_stopping_power:function(){return this.shield_class.stopping_power-this.shield_class.stopping_power*this.binder.stopping_power_modifier},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},ingest_data:function(e){var t=this,s="Shield Has No Type, resetting to 'standard' shield.";this.universal_ingest_data(e,s),this.component_name==this.shield_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1})},output_shield_data:function(){var e=this,t={};switch(this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="shield",t.component_name=null===this.component_name?this.shield_name:this.component_name,t.type=this.type,t.shield_class=JSON.parse(r()(this.shield_class)),t.cost_multipliers=JSON.parse(r()(this.cost_multipliers)),t.efficiencies=JSON.parse(r()(this.efficiencies)),t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.is_ablative=this.is_ablative,t.weight=this.weight,this.type.toLowerCase()){case"standard":t.defense_ability=JSON.parse(r()(this.defense_ability));case"active":t.binder=JSON.parse(r()(this.binder)),t.armor_type=JSON.parse(r()(this.armor_type)),t.absorption=JSON.parse(r()(this.absorption));break;case"reactive":t.reset_time=JSON.parse(r()(this.reset_time)),t.turns_in_use=JSON.parse(r()(this.turns_in_use)),t.weakness_array=JSON.parse(r()(this.weakness_array)),t.surge_damage=this.surge_damage;break}return this.$nextTick(function(){e.component_changed=!1}),this.original_component=r()(t),t},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_shield_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.select_type("standard"),this.shield_class.code=1,this.defense_ability=-2,this.binder.stopping_power_modifier=0,this.efficiencies.space.modifier=0,this.armor_type.type="Standard",this.absorption.absorption=0,this.component_name=null,this.shield_name,this.$store.commit("saveComponent",null);break}}},computed:{is_ablative:function(){if(null===this.weakness_array)return this.shield_class.kills=null,!1;var e=this.weakness_array.some(function(e){return"ablative"==e.weakness.toLowerCase()},this);return e},surge_damage:function(){if(null===this.weakness_array)return!1;var e=this.weakness_array.some(function(e){return"surge"==e.weakness.toLowerCase()});return e?this.shield_class.stopping_power:null},cost_multiplier:function(){var e=1;return e*=this.cost_multipliers.defense_ability,e*=this.cost_multipliers.binder,e*=this.cost_multipliers.reset_time,e*=this.cost_multipliers.turns_in_use,e*=this.cost_multipliers.weakness,this.round(e,2)},raw_space:function(){if("standard"==this.type.toLowerCase())return 1;var e=this.shield_class.cost*this.cost_multiplier;return"active"==this.type.toLowerCase()?this.round(e/2,2):"reactive"==this.type.toLowerCase()?this.round(e,2):void 0},cost:function(){var e=this.shield_class.cost*this.cost_multiplier;return e*=this.cost_multipliers.armor_type,e*=this.cost_multipliers.absorption,e+=this.efficiencies.space.cost,this.round(e,2)},damage_capacity:function(){return this.round(this.weighted_stopping_power(this.shield_class.code)/2,2)},shield_name:function(){var e="";if("standard"==this.type.toLowerCase()&&null!==this.defense_ability&&(e=["Huge","Large","Medium","Small","Tiny"][-1*this.defense_ability]),e+=" "+this.shield_class.name,"standard"==this.type.toLowerCase()||"active"==this.type.toLowerCase())this.binder,e+="active"==this.type.toLowerCase()?" Active":"",e+=null!==this.absorption&&this.absorption.absorption>0?" Absorbing":"",e+=null!==this.armor_type&&"standard"!=this.armor_type.type.toLowerCase()?" "+this.armor_type.type:"",e+=null!==this.binder&&this.binder.space>0?" Binder":" Shield";else if("reactive"==this.type.toLowerCase()){e+=" Reactive";var t="",s=this.weakness_array.reduce(function(e,s){return s.exclusive?t=s.monicker:e+=" "+s.monicker,e},"");e+=" "+t+" "+s}return e=e.replace(/\s+/g," "),e}}},u=h,d=s("2877"),m=Object(d["a"])(u,i,n,!1,null,null,null);t["default"]=m.exports},f52e:function(e,t,s){"use strict";var i=s("a745"),n=s.n(i),o=s("7618"),r=s("a4bb"),a=s.n(r),l=(s("6762"),s("2fdb"),s("f499")),c=s.n(l);t["a"]={methods:{universal_ingest_data:function(e,t){for(var s in this.original_component=c()(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),e)if(!a()(this._computedWatchers).includes(s))if("object"!==Object(o["a"])(e[s])||n()(e[s]))n()(e[s]),this.$set(this,s,e[s]);else for(var i in"object"===Object(o["a"])(this[s])&&null!==this[s]||(this[s]={}),e[s])this.$set(this[s],[i],e[s][i]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0}}}}}]);
//# sourceMappingURL=mek_shield-main.6b65f2ac.js.map