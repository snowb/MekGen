(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw_validator"],{"13c8":function(e,a,t){var c=t("c3a1"),n=t("36c3"),r=t("355d").f;e.exports=function(e){return function(a){var t,i=n(a),d=c(i),s=d.length,u=0,l=[];while(s>u)r.call(i,t=d[u++])&&l.push(e?[t,i[t]]:i[t]);return l}}},"2d1f":function(e,a,t){e.exports=t("b606")},"9c60":function(e,a,t){var c=t("63b6"),n=t("13c8")(!0);c(c.S,"Object",{entries:function(e){return n(e)}})},b606:function(e,a,t){t("9c60"),e.exports=t("584a").Object.entries},ffd5:function(e,a,t){"use strict";t.r(a),t.d(a,"validateComponent",function(){return u});var c,n,r,i=t("2d1f"),d=t.n(i),s=(t("cadf"),t("551c"),t("f751"),t("097d"),{});t.e("mek_emw-accuracy-data-module").then(t.bind(null,"643f")).then(function(e){s.accuracy=e.cleaned_feature}),t.e("mek_emw-attack-factor-data-module").then(t.bind(null,"2170")).then(function(e){s.attack_factor=e.cleaned_feature}),t.e("mek_emw-damage-data-module").then(t.bind(null,"77b7")).then(function(e){s.damage=e.cleaned_feature,s.update_damage=e.create_damage_data_table}),t.e("mek_emw-feature-data-module").then(t.bind(null,"e125")).then(function(e){s.filter_feature=e.filter_data_table,s.feature=e.cleaned_feature}),t.e("mek_emw-turns-in-use-data-module").then(t.bind(null,"9e76")).then(function(e){s.turns_in_use=e.cleaned_feature}),t.e("mek_space-efficiency-data-module").then(t.bind(null,"16e1")).then(function(e){s.space_efficiency=e.validate_efficiency}),t.e("validator_functions").then(t.bind(null,"07de")).then(function(e){c=e.loopValidators,n=e.updateMultipliers,r=e.round}),s.derived=function(e,a,t){var c,i=e,s=[],u=["selected_turns_in_use","selected_accuracy","selected_attack_factor","feature_array"];c=n(u,i,"Mek-EMW"),i.cost_multipliers=c.data,s=s.concat(c.alerts);var l=d()(i.cost_multipliers).reduce(function(e,a){return e*a[1]},1);l=r(l,2),i.cost_multiplier!=l&&(s.push("Mek-EMW: cost_multiplier"),s.push("**** Invalid Cost Multiplier. Correcting. ****"),i.cost_multiplier=r(l,2));var o=i.selected_damage.cost/4;i.damage_capacity!=o&&(s.push("Mek-EMW: damage_capacity"),s.push("**** Invalid Damage Capacity. Correcting. ****"),i.damage_capacity=o);var _=o/2;i.weight!=_&&(s.push("Mek-EMW: weight"),s.push("**** Invalid Weight. Correcting. ****"),i.weight=_);var p=i.selected_damage.cost*l+i.efficiencies.space.cost;p=r(p,2),i.cost!=p&&(s.push("Mek-EMW: cost"),s.push("**** Invalid cost. Correcting. ****"),i.cost=p);var f={stopping_power:i.selected_damage.cost,defense_accuracy:i.selected_accuracy.accuracy-2,damage:i.selected_damage.damage};return void 0===i.beam_shield&&t&&(s.push("Mek-EMW: beam_shield"),s.push("**** Beam Shield data missing. Correcting. ****"),i.beam_shield=f),i.beam_shield.stopping_power!=f.stopping_power&&(s.push("Mek-EMW: beam_shield.stopping_power"),s.push("**** Invalid Beam Shield Stopping Power: Correcting. ****"),i.beam_shield.stopping_power=f.stopping_power),i.beam_shield.defense_accuracy!=f.defense_accuracy&&(s.push("Mek-EMW: beam_shield.defense_accuracy"),s.push("**** Invalid Beam Shield Defense Accuracy: Correcting. ****"),i.beam_shield.defense_accuracy=f.defense_accuracy),i.beam_shield.damage!=f.damage&&(s.push("Mek-EMW: beam_shield.damage"),s.push("**** Invalid Beam Shield Damage: Correcting. ****"),i.beam_shield.damage=f.damage),{data:i,alerts:s}};var u=function(e){var a,t,n=e,r=[];a=s.turns_in_use("turns",n.selected_turns_in_use),n.selected_turns_in_use=a.data,r=r.concat(a.alerts),s.filter_feature("__INFINITY__"==n.selected_turns_in_use.turns),a=s.feature(n.feature_array,"feature"),n.feature_array=a.cleaned_array,r=r.concat(a.alerts);var i=!1,d=n.feature_array.some(function(e){return/.*variable.*beam.*shield.*/gi.test(e.feature)&&(i=!0),/.*beam.*shield.*/gi.test(e.feature)});s.update_damage(d&&!i);var u=[{validator:s.damage,pkey:"cost",component_prop:"selected_damage"},{validator:s.accuracy,pkey:"accuracy",component_prop:"selected_accuracy"},{validator:s.attack_factor,pkey:"attack_factor",component_prop:"selected_attack_factor"}],l=c(u,n);n=l.cleanedComponent,t=l.loopAlerts,r=r.concat(t),a=s.derived(n,i,d),n=a.data,r=r.concat(a.alerts);var o=n.selected_damage.cost*n.cost_multiplier;return a=s.space_efficiency(n.efficiencies.space,o,"Mek-EMW"),r=r.concat(a.alerts),n.efficiencies.space=a.data,{data:n,alerts:r}}}}]);
//# sourceMappingURL=mek_emw_validator-legacy.bfa36cd4.js.map