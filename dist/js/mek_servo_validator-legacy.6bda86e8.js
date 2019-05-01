(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo_validator"],{"13c8":function(e,t,a){var r=a("c3a1"),l=a("36c3"),s=a("355d").f;e.exports=function(e){return function(t){var a,o=l(t),c=r(o),n=c.length,i=0,_=[];while(n>i)s.call(o,a=c[i++])&&_.push(e?[a,o[a]]:o[a]);return _}}},"2d1f":function(e,t,a){e.exports=a("b606")},"9c60":function(e,t,a){var r=a("63b6"),l=a("13c8")(!0);r(r.S,"Object",{entries:function(e){return l(e)}})},b606:function(e,t,a){a("9c60"),e.exports=a("584a").Object.entries},de33:function(e,t,a){"use strict";a.r(t),a.d(t,"validateComponent",function(){return i});var r,l,s,o=a("2d1f"),c=a.n(o),n=(a("cadf"),a("551c"),a("f751"),a("097d"),{});a.e("mek_servo-class-data-module").then(a.bind(null,"063b")).then(function(e){n.servo_class=e.cleaned_feature,n.create_class_table=e.create_class_data_table}),a.e("mek_servo-kills-space-trade-data-module").then(a.bind(null,"f1d4")).then(function(e){n.servo_trade=e.cleaned_feature}),a.e("mek_servo-type-data-module").then(a.bind(null,"5ca7")).then(function(e){n.servo_type=e.cleaned_feature}),a.e("mek_armor-data-module").then(a.bind(null,"4753")).then(function(e){n.armor=e.cleaned_feature,n.armor_filter=e.filter_data_table}),a.e("mek_armor-type-data-module").then(a.bind(null,"e492")).then(function(e){n.armor_type=e.cleaned_feature}),a.e("mek_armor-RAM-data-module").then(a.bind(null,"4277")).then(function(e){n.armor_RAM=e.cleaned_feature}),a.e("validator_functions").then(a.bind(null,"07de")).then(function(e){r=e.loopValidators,l=e.updateMultipliers,s=e.round}),n.derived=function(e){var t=e,a=[],r=["selected_armor_type","selected_absorption"],o=l(r,t);t.cost_multipliers.armor=o.data,a.concat(o.alerts);var n=c()(t.cost_multipliers.armor).reduce(function(e,t){return e*t[1]},1);n=s(n,2),t.armor_cost_multiplier!=n&&(a.push("Mek-Servo: cost_multiplier.armor"),a.push("**** Invalid Armor Cost Multiplier. Correcting. ****"),t.armor_cost_multiplier=n);var i=t.selected_servo_class.cost+t.selected_armor.cost*t.armor_cost_multiplier+t.kills_space_trade.cost;t.cost!=i&&(a.push("Mek-Servo: cost"),a.push("**** Invalid Cost. Correcting. ****"),t.cost=i);var _=(t.total_kills+t.selected_armor.stopping_power)/2;t.weight!=_&&(a.push("Mek-Servo: weight"),a.push("**** Invalid Weight. Correcting. ****"),t.weight=_);var d=t.selected_servo_class.kills+t.kills_space_trade.kills_modifier;t.total_kills!=d&&(a.push("Mek-Servo: total_kills"),a.push("**** Invalid Total Kills. Correcting. ****"),t.total_kills=d);var p=t.selected_servo_class.space+t.kills_space_trade.space_modifier;return t.available_space!=p&&(a.push("Mek-Servo: available_space"),a.push("**** Invalid Available Space. Correcting. ****"),t.available_space=p),{data:t,alerts:a}};var i=function(e){var t,a,l=e,s=[],o=[{validator:n.servo_type,pkey:"type",component_prop:"selected_servo_type",skipUpdateList:!0},{validator:n.armor_type,pkey:"damage_coefficient",component_prop:"selected_armor_type"},{validator:n.armor_RAM,pkey:"absorption",component_prop:"selected_absorption"}],c=r(o,l);l=c.cleanedComponent,a=c.loopAlerts,s=s.concat(a),n.create_class_table(e.selected_servo_type.type),t=n.servo_class("code",e.selected_servo_class),s=s.concat(t.alerts),l.selected_servo_class=t.data;var i={kills:e.kills_space_trade.kills_modifier,space:e.kills_space_trade.space_modifier,cost:e.kills_space_trade.cost};return t=n.servo_trade(i,e.selected_servo_class.kills,e.selected_servo_class.space),s=s.concat(t.alerts),l.kills_space_trade=t.data,n.armor_filter(e.selected_servo_class.code+2),t=n.armor("code",e.selected_armor),s=s.concat(t.alerts),l.selected_armor=t.data,t=n.derived(l),l=t.data,s=s.concat(t.alerts),{data:l,alerts:s}}}}]);
//# sourceMappingURL=mek_servo_validator-legacy.6bda86e8.js.map