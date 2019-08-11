(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-main~a97bfcba"],{6863:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-inline-flex-col"},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.shield_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("div",{staticClass:"mek-inline-flex-row"},[s("div",{staticClass:"mek-flex-col"},[s("mek-shield-type",{attrs:{type:e.type},on:{"update-type":e.select_type,"alert-generated":e.handleAlert}}),s("mek-shield-class",{attrs:{shield_class:e.shield_class,type:e.type.name,is_ablative:e.is_ablative},on:{"update-class-code":e.select_class_code,"alert-generated":e.handleAlert}})],1),s("span",{staticClass:"mek-flex-col no-margin"},["standard"==e.type.name.toLowerCase()?s("mek-shield-defense-ability",{attrs:{defense_ability:e.defense_ability,cost:e.cost_multipliers.defense_ability},on:{"update-defense-ability":e.select_da,"alert-generated":e.handleAlert}}):e._e(),"standard"==e.type.name.toLowerCase()||"active"==e.type.name.toLowerCase()?s("mek-shield-binder",{attrs:{binder:e.binder,base_stopping_power:e.shield_class.stopping_power},on:{"update-binder":e.select_binder,"alert-generated":e.handleAlert}}):e._e(),"reactive"==e.type.name.toLowerCase()?s("mek-shield-reset-time",{attrs:{"reset-time":e.reset_time},on:{"update-reset-time":e.select_reset,"alert-generated":e.handleAlert}}):e._e(),"reactive"==e.type.name.toLowerCase()?s("mek-shield-turns-in-use",{attrs:{"turns-in-use":e.turns_in_use},on:{"update-turns-in-use":e.select_turns,"alert-generated":e.handleAlert}}):e._e()],1),s("span",{staticClass:"mek-flex-col no-margin"},["standard"==e.type.name.toLowerCase()||"active"==e.type.name.toLowerCase()?s("mek-armor-type",{attrs:{"armor-type":e.armor_type},on:{"update-armor-type":e.select_armor_type,"alert-generated":e.handleAlert}}):e._e(),"standard"==e.type.name.toLowerCase()||"active"==e.type.name.toLowerCase()?s("mek-armor-ram",{attrs:{absorption:e.absorption},on:{"update-absorption":e.select_absorption,"alert-generated":e.handleAlert}}):e._e()],1),"reactive"==e.type.name.toLowerCase()?s("span",{staticClass:"mek-flex-col no-margin"},[s("mek-shield-weakness",{attrs:{"weakness-array":e.weakness_array},on:{"update-weakness":e.select_weakness,"alert-generated":e.handleAlert}})],1):e._e(),s("span",{staticClass:"mek-flex-col no-margin"},[s("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-Shield"},on:{"update-efficiencies":e.updateEfficiencies}})],1)]),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:5}},[e.is_ablative?s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.shield_class.kills))]):s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Base Stopping Power: "+e._s(e.round(e.shield_class.stopping_power,2))+"\n                "),s("br"),e._v("Final Stopping Power: "+e._s(e.round(e.calculate_stopping_power(),2))+"\n            ")]),1!=e.armor_type.damage_coefficient?s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Armor Type: "+e._s(e.armor_type.type))]):e._e(),1!=e.armor_type.damage_coefficient?s("div",{staticStyle:{"padding-left":"10px"},attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Damage Coefficient: "+e._s(e.armor_type.damage_coefficient))]):e._e(),0!=e.absorption.absorption?s("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Absorption: "+e._s(100*e.absorption.absorption)+"%")]):e._e(),"standard"==e.type.name.toLowerCase()||"active"==e.type.name.toLowerCase()?s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Binder Space: "+e._s(e.round(e.binder.space,3)))]):e._e(),"reactive"==e.type.name.toLowerCase()?s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Weakness(es):"),s("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]):e._e(),"reactive"==e.type.name.toLowerCase()?s("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Reset Time: "+e._s("__NIL__"==e.reset_time.time?"Nil":e.reset_time.time))]):e._e(),"reactive"==e.type.name.toLowerCase()?s("div",{attrs:{slot:"col2-row3"},slot:"col2-row3"},[e._v("Turns in Use: "+e._s("__INFINITY__"==e.turns_in_use.time?"Infinite":e.turns_in_use.time))]):e._e(),"reactive"==e.type.name.toLowerCase()?s("div",{attrs:{slot:"col2-row4"},slot:"col2-row4"},[e._v("Surge Damage: "+e._s(e.surge_damage))]):e._e(),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.shield_class.cost))]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{attrs:{"active-buttons":e.activeButtons},on:{"save-reset-component":e.componentSaveReset}})],1)],1)},n=[],o=(s("a481"),s("8fcf")),a=s("f52e"),r=s("7b4b"),l={name:"mek_shield",mixins:[o["a"],a["a"],r["a"]],components:{"mek-shield-type":()=>s.e("mek_shield-type~a97bfcba").then(s.bind(null,"5669")),"mek-shield-class":()=>s.e("mek_shield-class~a97bfcba").then(s.bind(null,"0edc")),"mek-shield-defense-ability":()=>s.e("mek_shield-defense-ability~a97bfcba").then(s.bind(null,"e030")),"mek-shield-binder":()=>s.e("mek_shield-binder~a97bfcba").then(s.bind(null,"da25")),"mek-shield-reset-time":()=>s.e("mek_shield-reset-time~a97bfcba").then(s.bind(null,"f213")),"mek-shield-turns-in-use":()=>s.e("mek_shield-turns-in-use~a97bfcba").then(s.bind(null,"ab5f")),"mek-shield-weakness":()=>s.e("mek_shield-weakness~a97bfcba").then(s.bind(null,"5237")),"mek-space-efficiency":()=>s.e("mek-space-efficiency~a97bfcba").then(s.bind(null,"57c1")),"mek-component-name":()=>s.e("mek-component-name~31ecd969").then(s.bind(null,"4a3f")),"mek-save-reset-component":()=>s.e("mek-save-reset-component~31ecd969").then(s.bind(null,"972e")),"mek-component-stats":()=>s.e("mek_component-stats~d62c8532").then(s.bind(null,"67b1")),"mek-armor-type":()=>Promise.all([s.e("mek_sub-component-table~31ecd969"),s.e("mek_armor-type~a97bfcba")]).then(s.bind(null,"e4ac")),"mek-armor-ram":()=>Promise.all([s.e("mek_sub-component-table~31ecd969"),s.e("mek_armor-RAM~a97bfcba")]).then(s.bind(null,"592e"))},data:function(){let e={uuid:null,type:{name:"Standard"},component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"shield",original_component:null,component_changed:!0,shield_class:{code:1,stopping_power:5,kills:25,cost:5,id:"SL",name:"Superlight"},defense_ability:{da:-2,cost:1,name:"Medium"},cost_multipliers:{}};return e.cost_multipliers.defense_ability=1,e.binder={cost:1,space:0,stopping_power_modifier:0,new_stopping_power:5},e.cost_multipliers.binder=1,e.reset_time={time:2,cost:1},e.cost_multipliers.reset_time=1,e.turns_in_use={time:"__INFINITY__",cost:1},e.cost_multipliers.turns_in_use=1,e.weakness_array=[{weakness:"All",monicker:"Shield",cost:1,exclusive:!1}],e.cost_multipliers.weakness_array=1,e.efficiencies={},e.efficiencies.space={modifier:0,cost:0},e.armor_type={type:"Standard",damage_coefficient:1,cost:1},e.cost_multipliers.armor_type=1,e.absorption={absorption:0,cost:1,armor_penalty:0},e.cost_multipliers.absorption=1,e.hasAlert=!1,e},methods:{select_type:function(e){if(this.type.name.toLowerCase()==e.name.toLowerCase())return;this.component_changed=!0,this.$set(this,"type",e);let t=e.name.toLowerCase();"reactive"===t?(this.shield_class.cost=3*this.shield_class.stopping_power,this.$set(this,"defense_ability",{da:-2,cost:1}),this.cost_multipliers.defense_ability=1,this.$set(this,"binder",{cost:1,space:0,stopping_power_modifier:0}),this.cost_multipliers.binder=1,this.$set(this,"armor_type",{type:"Standard",damage_coefficient:1,cost:1}),this.cost_multipliers.armor_type=1,this.$set(this,"absorption",{absorption:0,cost:1,armor_penalty:0}),this.cost_multipliers.absorption=1):"active"===t?(this.shield_class.cost=1.5*this.shield_class.stopping_power,this.$set(this,"defense_ability",{da:-2,cost:1,name:"medium"}),this.cost_multipliers.defense_ability=1,this.$set(this,"reset_time",{cost:1,time:2}),this.cost_multipliers.reset_time=1,this.$set(this,"turns_in_use",{time:"__INFINITY__",cost:1}),this.cost_multipliers.turns_in_use=1,this.$set(this,"weakness_array",[{weakness:"All",monicker:"Shield",cost:1,exclusive:!1}]),this.cost_multipliers.weakness_array=1):"standard"==t&&(this.shield_class.cost=this.shield_class.stopping_power,this.$set(this,"reset_time",{cost:1,time:2}),this.cost_multipliers.reset_time=1,this.$set(this,"turns_in_use",{time:"__INFINITY__",cost:1}),this.cost_multipliers.turns_in_use=1,this.$set(this,"weakness_array",[{weakness:"All",monicker:"Shield",cost:1,exclusive:!1}]),this.cost_multipliers.weakness_array=1),this.component_changed=!0},select_class_code:function(e){this.$set(this,"shield_class",e),this.component_changed=!0},select_da:function(e){this.$set(this,"defense_ability",e),this.cost_multipliers.defense_ability=e.cost,this.component_changed=!0},select_binder:function(e){this.$set(this,"binder",e),this.cost_multipliers.binder=e.cost,this.shield_name,this.component_changed=!0},select_reset:function(e){this.$set(this,"reset_time",e),this.cost_multipliers.reset_time=e.cost,this.component_changed=!0},select_turns:function(e){this.$set(this,"turns_in_use",e),this.turns_in_use.time=null===this.turns_in_use.time?1/0:this.turns_in_use.time,this.cost_multipliers.turns_in_use=e.cost,this.component_changed=!0},select_weakness:function(e){this.$set(this,"weakness_array",e),this.cost_multipliers.weakness_array=this.weakness_array.reduce(function(e,t){return e*=t.cost,e},1),this.component_changed=!0},select_armor_type(e){this.$set(this,"armor_type",e),this.cost_multipliers.armor_type=this.armor_type.cost},select_absorption(e){this.$set(this,"absorption",e),this.cost_multipliers.absorption=this.absorption.cost},updateComponentName(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},calculate_stopping_power(){let e=0!=this.absorption.absorption?this.absorption.armor_penalty+this.binder.stopping_power_modifier:this.binder.stopping_power_modifier;return this.shield_class.stopping_power-Math.ceil(this.shield_class.stopping_power*e)},weighted_stopping_power(){return this.shield_class.stopping_power-Math.ceil(this.shield_class.stopping_power*this.binder.stopping_power_modifier)},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},ingest_data(e){let t="Shield Has No Type, resetting to 'standard' shield.";this.universal_ingest_data(e,t),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=this.hasAlert})},output_shield_data(){let e={};switch(this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="shield",e.component_name=null===this.component_name?this.shield_name:this.component_name,e.custom_component_name=this.custom_component_name,e.type=this.type,e.shield_class=this.shield_class,e.cost_multipliers=this.cost_multipliers,e.armor_multiplier=this.armor_multiplier,e.efficiencies=this.efficiencies,e.cost=this.cost,e.cost_multiplier=this.cost_multiplier,e.is_ablative=this.is_ablative,e.weight=this.shield_class.stopping_power/2,this.type.name.toLowerCase()){case"standard":e.defense_ability=this.defense_ability;case"active":e.binder=this.binder,e.armor_type=this.armor_type,e.absorption=this.absorption;break;case"reactive":e.reset_time=this.reset_time,e.turns_in_use=this.turns_in_use,e.weakness_array=this.weakness_array,e.surge_damage=this.surge_damage;break}return this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),JSON.parse(this.original_component)},componentSaveReset(e){let t="reset"==e&&null==this.original_component?"new":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_shield_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"delete":this.uuid&&(this.$store.commit("deleteComponent",{category:this.component_category,type:this.component_type,uuid:this.uuid}),this.uuid=null,this.$emit("updateMSMKey"));case"new":this.uuid=null,this.select_type({name:"Standard"}),this.$set(this,"shield_class",{code:1,stopping_power:5,kills:25,cost:5,id:"SL",name:"Superlight"}),this.$set(this,"defense_ability",{da:-2,cost:1,name:"Medium"}),this.cost_multipliers.defense_ability=1,this.$set(this,"binder",{cost:1,space:0,stopping_power_modifier:0,new_stopping_power:5}),this.cost_multipliers.binder=1,this.efficiencies.space.modifier=0,this.$set(this,"armor_type",{type:"Standard",damage_coefficient:1,cost:1}),this.cost_multipliers.armor_type=1,this.$set(this,"absorption",{absorption:0,cost:1,armor_penalty:0}),this.cost_multipliers.absorption=1,this.component_name=null,this.shield_name,this.$store.commit("saveComponent",null);break}},handleAlert(e){this.hasAlert=e}},computed:{is_ablative(){if(null===this.weakness_array||0==this.weakness_array.length)return!1;let e=this.weakness_array.some(function(e){return"ablative"==e.weakness.toLowerCase()},this);return e},surge_damage(){if(null===this.weakness_array||0==this.weakness_array.length)return!1;let e=this.weakness_array.some(function(e){return"surge"==e.weakness.toLowerCase()});return e?this.shield_class.stopping_power:null},cost_multiplier(){let e=1;return e*=this.cost_multipliers.defense_ability,e*=this.cost_multipliers.binder,e*=this.cost_multipliers.reset_time,e*=this.cost_multipliers.turns_in_use,e*=this.cost_multipliers.weakness_array,this.round(e,2)},armor_multiplier(){return this.cost_multipliers.armor_type*this.cost_multipliers.absorption},raw_space(){if("standard"==this.type.name.toLowerCase())return 1;let e=this.shield_class.cost*this.cost_multiplier;return"active"==this.type.name.toLowerCase()?this.round(e/2,2):"reactive"==this.type.name.toLowerCase()?this.round(e,2):void 0},cost(){let e=this.shield_class.cost*this.cost_multiplier;return e*=this.cost_multipliers.armor_type,e*=this.cost_multipliers.absorption,e+=this.efficiencies.space.cost,this.round(e,2)},damage_capacity(){return this.round(this.weighted_stopping_power(this.shield_class.code)/2,2)},shield_name(){let e="";if("standard"==this.type.name.toLowerCase()&&(e=this.defense_ability.name),e+=" "+this.shield_class.name,"standard"==this.type.name.toLowerCase()||"active"==this.type.name.toLowerCase())this.binder,e+="active"==this.type.name.toLowerCase()?" Active":"",e+=null!==this.absorption&&this.absorption.absorption>0?" Absorbing":"",e+=null!==this.armor_type&&"standard"!=this.armor_type.type.toLowerCase()?" "+this.armor_type.type:"",e+=" "+this.round(this.calculate_stopping_power(),2)+"SP",e+=null!==this.binder&&this.binder.space>0?" Binder":" Shield";else if("reactive"==this.type.name.toLowerCase()){e+=" Reactive";let t="",s=this.weakness_array.reduce(function(e,s){return s.exclusive?t=s.monicker:e+=" "+s.monicker,e},""),i=this.is_ablative?this.shield_class.kills+"K":this.shield_class.stopping_power+"SP";e+=" "+t+" "+i+" "+s}return e=e.replace(/\s+/g," ").trim(),e},activeButtons(){return"save,reset,new"+(null!==this.uuid?",delete":"")}}},c=l,_=s("2877"),p=Object(_["a"])(c,i,n,!1,null,null,null);t["default"]=p.exports},"7b4b":function(e,t,s){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)if("object"===typeof this.cost_multipliers[t])for(let s in this.cost_multipliers[t])e*=this.cost_multipliers[t][s];else e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,s){return e+=s>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,s){"use strict";s("ac6a"),s("6b54"),s("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let s=10**+t;return Math.round(+e*s)/s},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},f52e:function(e,t,s){"use strict";s("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e);let s=JSON.parse(this.original_component);null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let i in s)if(!Object.keys(this._computedWatchers).includes(i))if("object"!==typeof s[i]||Array.isArray(s[i]))Array.isArray(s[i]),this.$set(this,i,s[i]);else{"object"===typeof this[i]&&null!==this[i]||this.$set(this,i,{});for(let e in s[i])this.$set(this[i],[e],s[i][e])}this.$forceUpdate()},updateComponentName(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);