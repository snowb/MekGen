(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw_validator"],{"13c8":function(e,a,t){var c=t("c3a1"),n=t("36c3"),r=t("355d").f;e.exports=function(e){return function(a){var t,u=n(a),d=c(u),i=d.length,l=0,o=[];while(i>l)r.call(u,t=d[l++])&&o.push(e?[t,u[t]]:u[t]);return o}}},"2d1f":function(e,a,t){e.exports=t("b606")},"9c60":function(e,a,t){var c=t("63b6"),n=t("13c8")(!0);c(c.S,"Object",{entries:function(e){return n(e)}})},b606:function(e,a,t){t("9c60"),e.exports=t("584a").Object.entries},ffd5:function(e,a,t){"use strict";t.r(a),t.d(a,"validateComponent",function(){return l});var c,n,r,u=t("2d1f"),d=t.n(u),i=(t("cadf"),t("551c"),t("f751"),t("097d"),{});t.e("mek_emw-accuracy-data-module").then(t.bind(null,"643f")).then(function(e){i.accuracy=e.cleaned_feature}),t.e("mek_emw-attack-factor-data-module").then(t.bind(null,"2170")).then(function(e){i.attack_factor=e.cleaned_feature}),t.e("mek_emw-damage-data-module").then(t.bind(null,"77b7")).then(function(e){i.damage=e.cleaned_feature}),t.e("mek_emw-feature-data-module").then(t.bind(null,"e125")).then(function(e){i.filter_feature=e.filter_data_table,i.feature=e.cleaned_feature}),t.e("mek_emw-turns-in-use-data-module").then(t.bind(null,"9e76")).then(function(e){i.turns_in_use=e.cleaned_feature}),t.e("mek_space-efficiency-data-module").then(t.bind(null,"16e1")).then(function(e){i.space_efficiency=e.validate_efficiency}),t.e("validator_functions").then(t.bind(null,"07de")).then(function(e){c=e.loopValidators,n=e.updateMultipliers,r=e.round});var l=function(e){var a,t,u=e,l=["selected_turns_in_use","selected_accuracy","selected_attack_factor","feature_array"],o=[],_=[{validator:i.damage,pkey:"damage",component_prop:"selected_damage"},{validator:i.turns_in_use,pkey:"turns",component_prop:"selected_turns_in_use"},{validator:i.accuracy,pkey:"accuracy",component_prop:"selected_accuracy"},{validator:i.attack_factor,pkey:"attack_factor",component_prop:"selected_attack_factor"}],s=c(_,u);u=s.cleanedComponent,t=s.loopAlerts,o=o.concat(t),i.filter_feature("__INFINITY__"==u.selected_turns_in_use.turns),a=i.feature(u.feature_array,"feature"),u.feature_array=a.cleaned_array,o=o.concat(a.alerts),a=n(l,u),u.cost_multipliers=a.data,o=o.concat(a.alerts);var f=d()(u.cost_multipliers).reduce(function(e,a){return e*a[1]},1);u.cost_multiplier=r(f,2);var m=u.selected_damage.cost*u.cost_multiplier;a=i.space_efficiency(u.efficiencies.space,m,"Mek-EMW"),o=o.concat(a.alerts),u.efficiencies.space=a.data,u.damage_capacity=u.selected_damage.damage,u.weight=u.damage_capacity/2;var p=u.feature_array.some(function(e){return/.*beam.*shield.*/gi.test(e.feature)});return p&&(u.beam_shield={},u.beam_shield.stopping_power=u.selected_damage.damage,u.beam_shield.defense_accuracy=u.selected_accuracy.accuracy-2,u.beam_shield.damage=u.selected_damage.damage/2),{data:u,alerts:o}}}}]);
//# sourceMappingURL=mek_emw_validator-legacy.9e6f9dfa.js.map