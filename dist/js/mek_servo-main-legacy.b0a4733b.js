(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-main"],{"7b4b":function(e,t,s){"use strict";var o=s("f499"),r=s.n(o);t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,s){return e+=s>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(r()(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"93db":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.servo_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("span",{staticClass:"mek-inline-flex-row"},[s("span",{staticClass:"mek-inline-flex-col"},[s("mek-servo-type",{staticStyle:{"align-self":"flex-start"},attrs:{"servo-type":e.selected_servo_type},on:{"update-servo-type":e.updateServoType,"alert-generated":e.handleAlert}}),s("mek-servo-kills-space-trade",{staticStyle:{"align-self":"baseline"},attrs:{base_kills:e.selected_servo_class.kills,kills_modifier:e.kills_space_trade.kills_modifier,space_modifier:e.kills_space_trade.space_modifier,base_space:e.selected_servo_class.space},on:{"update-extra-space":e.updateExtraSpace,"alert-generated":e.handleAlert}})],1),s("mek-servo-class",{attrs:{"servo-type":e.selected_servo_type.type,"servo-class":e.selected_servo_class},on:{"update-servo-class":e.updateServoClass,"alert-generated":e.handleAlert}}),s("mek-armor",{attrs:{armor:e.selected_armor,"max-armor":e.selected_servo_class.code+2},on:{"update-armor":e.updateArmor,"alert-generated":e.handleAlert}}),s("span",{staticClass:"mek-inline-flex-col"},[0!=e.selected_armor.cost?s("mek-armor-type",{attrs:{"armor-type":e.selected_armor_type},on:{"update-armor-type":e.updateArmorType,"alert-generated":e.handleAlert}}):e._e(),0!=e.selected_armor.cost?s("mek-armor-ram",{attrs:{absorption:e.selected_absorption},on:{"update-absorption":e.updateAbsorption,"alert-generated":e.handleAlert}}):e._e()],1)],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:6}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Base Kills: "+e._s(e.selected_servo_class.kills))]),s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Total Kills: "+e._s(e.total_kills))]),0!=e.selected_armor.cost?s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Base Armor Stopping Power: "+e._s(e.round(e.selected_armor.stopping_power,2))+"\n                "),s("br"),e._v("Final Stopping Power: "+e._s(e.round(e.final_stopping_power,2))+"\n            ")]):e._e(),0!=e.selected_armor.cost?s("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Armor Type: "+e._s(e.selected_armor_type.type))]):e._e(),0!=e.selected_armor.cost?s("div",{staticStyle:{"padding-left":"10px"},attrs:{slot:"col1-row5"},slot:"col1-row5"},[e._v("Damage Coefficient: "+e._s(e.selected_armor_type.damage_coefficient))]):e._e(),1!=e.selected_absorption.cost?s("div",{attrs:{slot:"col1-row6"},slot:"col1-row6"},[e._v("Absorption: "+e._s(100*e.selected_absorption.absorption)+"%")]):e._e(),e.is_arm|e.is_leg?s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Damage Bonus: "+e._s(e.selected_servo_class.damage_bonus))]):e._e(),e.is_arm?s("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Throw Range: "+e._s(e.selected_servo_class.throw_range))]):e._e(),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.selected_servo_class.space))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Available Space: "+e._s(e.available_space))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.weight)+" tons")]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.base_cost))]),s("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},r=[],i=(s("a481"),s("7f7f"),s("f499")),a=s.n(i),n=s("8fcf"),l=s("f52e"),c=s("7b4b"),_={name:"mek_servo",props:[],mixins:[n["a"],l["a"],c["a"]],components:{"mek-servo-type":function(){return Promise.resolve().then(s.bind(null,"1d91"))},"mek-servo-class":function(){return Promise.resolve().then(s.bind(null,"9509"))},"mek-servo-kills-space-trade":function(){return Promise.resolve().then(s.bind(null,"8c50"))},"mek-component-name":function(){return Promise.resolve().then(s.bind(null,"dba3"))},"mek-save-reset-component":function(){return Promise.resolve().then(s.bind(null,"c342"))},"mek-component-stats":function(){return Promise.resolve().then(s.bind(null,"67b1"))},"mek-armor":function(){return Promise.resolve().then(s.bind(null,"68cb"))},"mek-armor-type":function(){return Promise.resolve().then(s.bind(null,"e4ac"))},"mek-armor-ram":function(){return Promise.resolve().then(s.bind(null,"592e"))}},data:function(){var e={uuid:null,component_name:null,component_category:"equipment",component_type:"servo",original_component:null,component_changed:!0,selected_servo_type:{type:"Torso"},selected_servo_class:{code:1,name:"Superlight",space:2,cost:2,kills:2,id:"SL"},cost_multipliers:{},selected_armor:{name:"None",cost:0,stopping_power:0,code:0},selected_armor_type:{type:"Standard",damage_coefficient:1,cost:1}};return e.cost_multipliers.armor_type=1,e.selected_absorption={absorption:0,cost:1,armor_penalty:0},e.cost_multipliers.absorption=1,e.kills_space_trade={},e.kills_space_trade.space_modifier=0,e.kills_space_trade.kills_modifier=0,e.kills_space_trade.cost=0,e.hasAlert=!1,e},methods:{updateServoType:function(e){this.component_type=e.type,this.$set(this,"selected_servo_type",e),this.component_changed=!0},updateServoClass:function(e){this.$set(this,"selected_servo_class",e),this.component_changed=!0},updateArmor:function(e){this.$set(this,"selected_armor",e),this.component_changed=!0,0==e.stopping_power&&(this.updateAbsorption({absorption:0,cost:1,armor_penalty:0}),this.updateArmorType({type:"Standard",damage_coefficient:1,cost:1}))},updateArmorType:function(e){this.$set(this,"selected_armor_type",JSON.parse(a()(e))),this.cost_multipliers.armor_type=this.selected_armor_type.cost,this.component_changed=!0},updateAbsorption:function(e){this.$set(this,"selected_absorption",JSON.parse(a()(e))),this.cost_multipliers.absorption=this.selected_absorption.cost,this.component_changed=!0},updateExtraSpace:function(e){this.kills_space_trade.space_modifier=e.space,this.kills_space_trade.kills_modifier=e.kills,this.kills_space_trade.cost=e.cost,this.component_changed=!0},ingest_data:function(e){var t=this,s="Torso bad, resetting to 'standard' shield.";this.universal_ingest_data(e,s),this.component_name==this.servo_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=t.hasAlert})},output_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="servo",t.component_name=null===this.component_name?this.servo_name:this.component_name,t.selected_servo_type=JSON.parse(a()(this.selected_servo_type)),t.selected_servo_class=JSON.parse(a()(this.selected_servo_class)),t.selected_armor=JSON.parse(a()(this.selected_armor)),t.selected_armor_type=JSON.parse(a()(this.selected_armor_type)),t.selected_absorption=JSON.parse(a()(this.selected_absorption)),t.cost_multipliers=JSON.parse(a()(this.cost_multipliers)),t.kills_space_trade=JSON.parse(a()(this.kills_space_trade)),t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.total_kills=this.total_kills,t.available_space=this.available_space,this.$nextTick(function(){e.component_changed=e.hasAlert}),this.original_component=a()(t),t},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.selected_servo_type.type="Torso",this.$set(this,"selected_servo_class",{code:1,name:"Superlight",space:2,cost:2,kills:2}),this.$set(this,"selected_armor",{name:"None",cost:0,stopping_power:0,code:0}),this.$set(this,"selected_armor_type",{type:"Standard",damage_coefficient:1,cost:1}),this.cost_multipliers.armor_type=1,this.$set(this,"selected_absorption",{absorption:0,cost:1,armor_penalty:0}),this.cost_multipliers.absorption=1,this.$set(this,"kills_space_trade",{space_modifier:0,kills_modifier:0,cost:0}),this.component_name=null,this.$store.commit("saveComponent",null);break}},handleAlert:function(e){this.hasAlert=e}},computed:{servo_name:function(){var e=this.selected_servo_type.type,t=this.selected_servo_class.name,s=this.kills_space_trade.kills_modifier>0?" Reinforced ":"",o=this.selected_armor_type.type,r=this.selected_armor.cost>0&&1==this.selected_armor_type.cost?" Armored ":this.selected_armor.cost>0&&1!=this.selected_armor_type.cost?" "+o+"-Armored ":"",i=this.selected_absorption.cost>1?" Absorbing ":"",a=""!=s||this.selected_armor.cost>0?" - ":"",n=e+" "+t+" Servo"+a+s+i+r;return n=n.trim(),n=n.replace(/\s+/gi," "),n},base_cost:function(){return this.selected_servo_class.cost+this.selected_armor.cost+this.kills_space_trade.cost},cost:function(){return this.selected_servo_class.cost+this.selected_armor.cost*this.cost_multiplier+this.kills_space_trade.cost},available_space:function(){return this.selected_servo_class.space+this.kills_space_trade.space_modifier},damage_capacity:function(){var e=this.selected_servo_class.kills,t=this.kills_space_trade.kills_modifier;return e+this.final_stopping_power+t},total_kills:function(){return this.selected_servo_class.kills+this.kills_space_trade.kills_modifier},weight:function(){return this.round(this.damage_capacity/2,2)},final_stopping_power:function(){return this.selected_armor.stopping_power-this.selected_armor.stopping_power*this.selected_absorption.armor_penalty},is_arm:function(){return"arm"==this.selected_servo_type.type.toLowerCase()},is_leg:function(){return"leg"==this.selected_servo_type.type.toLowerCase()}}},p=_,d=s("2877"),m=Object(d["a"])(p,o,r,!1,null,null,null);t["default"]=m.exports},f52e:function(e,t,s){"use strict";var o=s("a745"),r=s.n(o),i=s("7618"),a=s("a4bb"),n=s.n(a),l=(s("6762"),s("2fdb"),s("f499")),c=s.n(l);t["a"]={methods:{universal_ingest_data:function(e,t){for(var s in this.original_component=c()(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),e)if(!n()(this._computedWatchers).includes(s))if("object"!==Object(i["a"])(e[s])||r()(e[s]))r()(e[s]),this.$set(this,s,e[s]);else for(var o in"object"===Object(i["a"])(this[s])&&null!==this[s]||(this[s]={}),e[s])this.$set(this[s],[o],e[s][o]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_servo-main-legacy.b0a4733b.js.map