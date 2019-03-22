(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-main"],{"3ffa":function(e,t,s){"use strict";t["a"]={data:function(){return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},"7f7f":function(e,t,s){var o=s("86cc").f,r=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in r||s("9e1e")&&o(r,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},dda4:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.servo_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("span",{staticClass:"mek-inline-flex-row"},[s("span",{staticClass:"mek-inline-flex-col"},[s("mek-servo-type",{staticStyle:{"align-self":"flex-start"},attrs:{"servo-type":e.selected_servo_type},on:{"update-servo-type":e.updateServoType}}),s("mek-servo-kills-space-trade",{staticStyle:{"align-self":"baseline"},attrs:{base_kills:e.selected_servo_class.kills,kills_modifier:e.kills_space_trade.kills_modifier,space_modifier:e.kills_space_trade.space_modifier,base_space:e.selected_servo_class.space},on:{"update-extra-space":e.updateExtraSpace}})],1),s("mek-servo-class",{attrs:{"suppress-alerts":e.suppress_alerts,"servo-type":e.selected_servo_type.type,"servo-class":e.selected_servo_class},on:{"update-servo-class":e.updateServoClass}}),s("mek-armor",{attrs:{armor:e.selected_armor,"max-armor":e.selected_servo_class.code+2},on:{"update-armor":e.updateArmor}}),s("span",{staticClass:"mek-inline-flex-col"},[0!=e.selected_armor.cost?s("mek-armor-type",{attrs:{"armor-type":e.selected_armor_type},on:{"update-armor-type":e.updateArmorType}}):e._e(),0!=e.selected_armor.cost?s("mek-energy-absorbing-armor",{attrs:{absorption:e.selected_absorption},on:{"update-absorption":e.updateAbsorption}}):e._e()],1)],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:6}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Base Kills: "+e._s(e.selected_servo_class.kills))]),s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Total Kills: "+e._s(e.total_kills))]),0!=e.selected_armor.cost?s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Base Armor Stopping Power: "+e._s(e.round(e.selected_armor.stopping_power,2))+"\n                "),s("br"),e._v("Final Stopping Power: "+e._s(e.round(e.final_stopping_power,2))+"\n            ")]):e._e(),0!=e.selected_armor.cost?s("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Armor Type: "+e._s(e.selected_armor_type.type))]):e._e(),0!=e.selected_armor.cost?s("div",{staticStyle:{"padding-left":"10px"},attrs:{slot:"col1-row5"},slot:"col1-row5"},[e._v("Damage Coefficient: "+e._s(e.selected_armor_type.damage_coefficient))]):e._e(),1!=e.selected_absorption.cost?s("div",{attrs:{slot:"col1-row6"},slot:"col1-row6"},[e._v("Absorption: "+e._s(100*e.selected_absorption.absorption)+"%")]):e._e(),e.is_arm|e.is_leg?s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Damage Bonus: "+e._s(e.selected_servo_class.damage_bonus))]):e._e(),e.is_arm?s("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Throw Range: "+e._s(e.selected_servo_class.throw_range))]):e._e(),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.selected_servo_class.space))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Available Space: "+e._s(e.available_space))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.weight)+" tons")]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.base_cost))]),s("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},r=[],a=(s("a481"),s("7f7f"),s("f499")),i=s.n(a),n=(s("cadf"),s("551c"),s("f751"),s("097d"),s("3ffa")),l=s("072f"),c=s("8fcf"),_=s("f52e"),p=s("7b4b"),d={name:"mek_servo",props:[],mixins:[n["a"],l["a"],c["a"],_["a"],p["a"]],components:{"mek-servo-type":function(){return s.e("mek_servo-type").then(s.bind(null,"601d"))},"mek-servo-class":function(){return s.e("mek_servo-class").then(s.bind(null,"de38"))},"mek-servo-kills-space-trade":function(){return s.e("mek_servo-kills-space-trade").then(s.bind(null,"58ff"))},"mek-component-name":function(){return s.e("mek-component-name").then(s.bind(null,"192f"))},"mek-save-reset-component":function(){return s.e("mek-save-reset-component").then(s.bind(null,"c849"))},"mek-component-stats":function(){return s.e("mek-component-stats").then(s.bind(null,"d854"))},"mek-armor":function(){return s.e("mek_armor").then(s.bind(null,"b02b"))},"mek-armor-type":function(){return s.e("mek_armor-type").then(s.bind(null,"5bb4"))},"mek-energy-absorbing-armor":function(){return s.e("mek_energy-absorbing-armor").then(s.bind(null,"178d"))}},data:function(){var e={uuid:null,component_name:null,component_category:"equipment",component_type:"servo",original_component:null,component_changed:!0,selected_servo_type:{type:"Torso"},selected_servo_class:{code:1,name:"Superlight",space:2,cost:2,kills:2,id:"SL"},cost_multipliers:{},selected_armor:{name:"None",cost:0,stopping_power:0,code:0},selected_armor_type:{type:"Standard",damage_coefficient:1,cost:1}};return e.cost_multipliers.armor_type=1,e.selected_absorption={absorption:0,cost:1,armor_penalty:0},e.cost_multipliers.absorption=1,e.kills_space_trade={},e.kills_space_trade.space_modifier=0,e.kills_space_trade.kills_modifier=0,e.kills_space_trade.cost=0,e.suppress_alerts=!1,e},methods:{updateServoType:function(e){this.component_type=e.type,this.suppress_alerts=e.type!=this.selected_servo_type.type,this.$set(this,"selected_servo_type",e),this.component_changed=!0},updateServoClass:function(e){this.$set(this,"selected_servo_class",e),this.component_changed=!0},updateArmor:function(e){this.$set(this,"selected_armor",e),this.component_changed=!0,0==e.stopping_power&&(this.updateAbsorption({absorption:0,cost:1,armor_penalty:0}),this.updateArmorType({type:"Standard",damage_coefficient:1,cost:1}))},updateArmorType:function(e){this.$set(this,"selected_armor_type",JSON.parse(i()(e))),this.cost_multipliers.armor_type=this.selected_armor_type.cost,this.component_changed=!0},updateAbsorption:function(e){this.$set(this,"selected_absorption",JSON.parse(i()(e))),this.cost_multipliers.absorption=this.selected_absorption.cost,this.component_changed=!0},updateExtraSpace:function(e){this.kills_space_trade.space_modifier=e.space,this.kills_space_trade.kills_modifier=e.kills,this.kills_space_trade.cost=e.cost,this.component_changed=!0},ingest_data:function(e){var t=this,s="Torso bad, resetting to 'standard' shield.";this.universal_ingest_data(e,s),this.component_name==this.servo_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1})},output_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="servo",t.component_name=null===this.component_name?this.servo_name:this.component_name,t.selected_servo_type=JSON.parse(i()(this.selected_servo_type)),t.selected_servo_class=JSON.parse(i()(this.selected_servo_class)),t.selected_armor=JSON.parse(i()(this.selected_armor)),t.selected_armor_type=JSON.parse(i()(this.selected_armor_type)),t.selected_absorption=JSON.parse(i()(this.selected_absorption)),t.cost_multipliers=JSON.parse(i()(this.cost_multipliers)),t.kills_space_trade=JSON.parse(i()(this.kills_space_trade)),t.cost=this.cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.total_kills=this.total_kills,t.available_space=this.available_space,this.$nextTick(function(){e.component_changed=!1}),this.original_component=i()(t),t},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.selected_servo_type.type="Torso",this.$set(this,"selected_servo_class",{code:1,name:"Superlight",space:2,cost:2,kills:2}),this.$set(this,"selected_armor",{name:"None",cost:0,stopping_power:0,code:0}),this.$set(this,"selected_armor_type",{type:"Standard",damage_coefficient:1,cost:1}),this.cost_multipliers.armor_type=1,this.$set(this,"selected_absorption",{absorption:0,cost:1,armor_penalty:1}),this.cost_multipliers.absorption=1,this.$set(this,"kills_space_trade",{space_modifier:0,kills_modifier:0,cost:0}),this.component_name=null,this.$store.commit("saveComponent",null);break}}},computed:{servo_name:function(){var e=this.selected_servo_type.type,t=this.selected_servo_class.name,s=this.kills_space_trade.kills_modifier>0?" Reinforced ":"",o=this.selected_armor_type.type,r=this.selected_armor.cost>0&&1==this.selected_armor_type.cost?" Armored ":this.selected_armor.cost>0&&1!=this.selected_armor_type.cost?" "+o+"-Armored ":"",a=this.selected_absorption.cost>1?" Absorbing ":"",i=""!=s||this.selected_armor.cost>0?" - ":"",n=e+" "+t+" Servo"+i+s+a+r;return n=n.trim(),n=n.replace(/\s+/gi," "),n},base_cost:function(){return this.selected_servo_class.cost+this.selected_armor.cost+this.kills_space_trade.cost},cost:function(){return this.selected_servo_class.cost+this.selected_armor.cost*this.cost_multiplier+this.kills_space_trade.cost},available_space:function(){return this.selected_servo_class.space+this.kills_space_trade.space_modifier},damage_capacity:function(){var e=this.selected_servo_class.kills,t=this.kills_space_trade.kills_modifier;return e+this.final_stopping_power+t},total_kills:function(){return this.selected_servo_class.kills+this.kills_space_trade.kills_modifier},weight:function(){return this.round(this.damage_capacity/2,2)},final_stopping_power:function(){return this.selected_armor.stopping_power-this.selected_armor.stopping_power*this.selected_absorption.armor_penalty},is_arm:function(){return"arm"==this.selected_servo_type.type.toLowerCase()},is_leg:function(){return"leg"==this.selected_servo_type.type.toLowerCase()}}},m=d,u=s("2877"),h=Object(u["a"])(m,o,r,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=mek_servo-main-legacy.cfbbfd9a.js.map