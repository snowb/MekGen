(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_master_validator"],{d3d7:function(e,a,r){"use strict";r.r(a),r.d(a,"validateComponent",function(){return n}),r.d(a,"getAlerts",function(){return s});r("cadf"),r("551c"),r("f751"),r("097d");var t=[],o={};r.e("mek_armor_validators").then(r.bind(null,"b1fb")).then(function(e){o.mek_armor=e.validators});var c=function(e){var a,r={};return o.mek_armor.armor_filter(e.selected_servo_class.code+2),a=o.mek_armor.armor("code",e.selected_armor),a.update&&(t=t.concat(a.alerts)),r.selected_armor=a.data,a=o.mek_armor.type("damage_coefficient",e.selected_armor_type),a.update&&(t=t.concat(a.alerts)),r.selected_aselected_armor_typermor=a.data,a=o.mek_armor.RAM("absorption",e.selected_absorption),a.update&&(t=t.concat(a.alerts)),r.selected_absorption=a.data,r},n=function(e){var a;if("equipment"==e.component_category)switch(e.component_type){case"servo":a=c(e);break;case"beam":break;case"emw":break;case"melee":break;case"missile":break;case"projectile":break;case"magazine":break;case"energy_pool":break;case"shield":break;case"reflector":break;case"locomotion":break}return a},s=function(){return t}}}]);
//# sourceMappingURL=mek_master_validator-legacy.049318db.js.map