(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_master_validator"],{"7b06":function(e,a,r){var t={"./mek_armor_validators":["db1c","mek_armor_validators"],"./mek_armor_validators.js":["db1c","mek_armor_validators"],"./mek_master_validator":["9972"],"./mek_master_validator.js":["9972"],"./mek_servo_validators":["e117","mek_servo_validators"],"./mek_servo_validators.js":["e117","mek_servo_validators"]};function o(e){var a=t[e];return a?Promise.all(a.slice(1).map(r.e)).then(function(){var e=a[0];return r(e)}):Promise.resolve().then(function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a})}o.keys=function(){return Object.keys(t)},o.id="7b06",e.exports=o},9972:function(e,a,r){"use strict";r.r(a),r.d(a,"validateComponent",function(){return l}),r.d(a,"getAlerts",function(){return d});let t=[],o={},s=(e,a)=>{r("7b06")(`${e}`).then(e=>{o[a]=e.validators})},_=[{module_name:"./mek_armor_validators",validator_prop_name:"mek_armor"},{module_name:"./mek_servo_validators",validator_prop_name:"mek_servo"}];_.forEach(e=>{s(e.module_name,e.validator_prop_name)});let c=e=>{let a,r=e;a=o.mek_servo.type("type",e.selected_servo_type),a.update&&(t=t.concat(a.alerts)),r.selected_servo_type=a.data,o.mek_servo.create_class_table(e.selected_servo_type.type),a=o.mek_servo.servo("code",e.selected_servo_class),a.update&&(t=t.concat(a.alerts)),r.selected_servo_class=a.data;let s={kills:e.kills_space_trade.kills_modifier,space:e.kills_space_trade.space_modifier,cost:e.kills_space_trade.cost};return a=o.mek_servo.trade(s,e.selected_servo_class.kills,e.selected_servo_class.space),a.update&&(t=t.concat(a.alerts)),r.kills_space_trade=a.data,o.mek_armor.armor_filter(e.selected_servo_class.code+2),a=o.mek_armor.armor("code",e.selected_armor),a.update&&(t=t.concat(a.alerts)),r.selected_armor=a.data,a=o.mek_armor.type("damage_coefficient",e.selected_armor_type),a.update&&(t=t.concat(a.alerts)),r.selected_armor_type=a.data,a=o.mek_armor.RAM("absorption",e.selected_absorption),a.update&&(t=t.concat(a.alerts)),r.selected_absorption=a.data,r},l=e=>{let a;if("equipment"==e.component_category)switch(e.component_type){case"servo":a=c(e);break;case"beam":break;case"emw":break;case"melee":break;case"missile":break;case"projectile":break;case"magazine":break;case"energy_pool":break;case"shield":break;case"reflector":break;case"locomotion":break}return a},d=()=>t}}]);
//# sourceMappingURL=mek_master_validator.3c83b83c.js.map