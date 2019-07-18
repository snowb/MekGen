(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo_validator"],{"504c":function(e,a,t){var r=t("9e1e"),l=t("0d58"),s=t("6821"),o=t("52a7").f;e.exports=function(e){return function(a){var t,c=s(a),i=l(c),n=i.length,_=0,d=[];while(n>_)t=i[_++],r&&!o.call(c,t)||d.push(e?[t,c[t]]:c[t]);return d}}},de33:function(e,a,t){"use strict";t.r(a),t.d(a,"validateComponent",function(){return c});t("ac6a"),t("ffc1");var r,l,s,o={};t.e("mek_servo-class-data-module").then(t.bind(null,"063b")).then(function(e){o.servo_class=e.cleaned_feature,o.create_class_table=e.create_class_data_table}),t.e("mek_servo-kills-space-trade-data-module").then(t.bind(null,"f1d4")).then(function(e){o.servo_trade=e.cleaned_feature}),t.e("mek_servo-type-data-module").then(t.bind(null,"5ca7")).then(function(e){o.servo_type=e.cleaned_feature}),t.e("mek_armor-data-module").then(t.bind(null,"4753")).then(function(e){o.armor=e.cleaned_feature,o.armor_filter=e.filter_data_table}),t.e("mek_armor-type-data-module").then(t.bind(null,"e492")).then(function(e){o.armor_type=e.cleaned_feature}),t.e("mek_armor-RAM-data-module").then(t.bind(null,"4277")).then(function(e){o.armor_RAM=e.cleaned_feature}),t.e("validator_functions").then(t.bind(null,"07de")).then(function(e){r=e.loopValidators,l=e.updateMultipliers,s=e.round}),o.derived=function(e){var a=e,t=[],r=["selected_armor_type","selected_absorption"],o=l(r,a,"Mek-Servo");a.cost_multipliers.armor=o.data,t=t.concat(o.alerts);var c=Object.entries(a.cost_multipliers.armor).reduce(function(e,a){return e*a[1]},1);c=s(c,2),a.armor_cost_multiplier!=c&&(t.push("Mek-Servo: cost_multiplier.armor"),t.push("**** Invalid Armor Cost Multiplier. Correcting. ****"),a.armor_cost_multiplier=c);var i=a.selected_servo_class.cost+a.selected_armor.cost*a.armor_cost_multiplier+a.kills_space_trade.cost;i=s(i,2),a.cost!=i&&(t.push("Mek-Servo: cost"),t.push("**** Invalid Cost. Correcting. ****"),a.cost=i);var n=(a.total_kills+a.selected_armor.stopping_power)/2;n=s(n,2),a.weight!=n&&(t.push("Mek-Servo: weight"),t.push("**** Invalid Weight. Correcting. ****"),a.weight=n);var _=a.selected_servo_class.kills+a.kills_space_trade.kills_modifier;a.total_kills!=_&&(t.push("Mek-Servo: total_kills"),t.push("**** Invalid Total Kills. Correcting. ****"),a.total_kills=_);var d=a.selected_servo_class.space+a.kills_space_trade.space_modifier;return a.available_space!=d&&(t.push("Mek-Servo: available_space"),t.push("**** Invalid Available Space. Correcting. ****"),a.available_space=d),{data:a,alerts:t}};var c=function(e){var a,t,l=e,s=[],c=[{validator:o.servo_type,pkey:"type",component_prop:"selected_servo_type",skipUpdateList:!0},{validator:o.armor_type,pkey:"damage_coefficient",component_prop:"selected_armor_type"},{validator:o.armor_RAM,pkey:"absorption",component_prop:"selected_absorption"}],i=r(c,l);l=i.cleanedComponent,t=i.loopAlerts,s=s.concat(t),o.create_class_table(e.selected_servo_type.type),a=o.servo_class("code",e.selected_servo_class),s=s.concat(a.alerts),l.selected_servo_class=a.data;var n={kills_modifier:e.kills_space_trade.kills_modifier,space_modifier:e.kills_space_trade.space_modifier,cost:e.kills_space_trade.cost,kills:e.kills_space_trade.kills,space:e.kills_space_trade.space};return a=o.servo_trade(n,e.selected_servo_class.kills,e.selected_servo_class.space),s=s.concat(a.alerts),l.kills_space_trade=a.data,o.armor_filter(e.selected_servo_class.code+2),a=o.armor("code",e.selected_armor),s=s.concat(a.alerts),l.selected_armor=a.data,a=o.derived(l),l=a.data,s=s.concat(a.alerts),{data:l,alerts:s}}},ffc1:function(e,a,t){var r=t("5ca1"),l=t("504c")(!0);r(r.S,"Object",{entries:function(e){return l(e)}})}}]);
//# sourceMappingURL=mek_servo_validator-legacy.88ffdd25.js.map