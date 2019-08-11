(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee_validator~31ecd969"],{"0618":function(e,a,n){"use strict";n.r(a),n.d(a,"validateComponent",function(){return l});n("ac6a"),n("ffc1");var t,c,i,r={};n.e("mek_melee-accuracy-data-module~5af327fd").then(n.bind(null,"6403")).then(function(e){r.accuracy=e.cleaned_feature}),n.e("mek_melee-damage-data-module~5af327fd").then(n.bind(null,"a520")).then(function(e){r.damage=e.cleaned_feature}),n.e("mek_melee-feature-data-module~31ecd969").then(n.bind(null,"6b67")).then(function(e){r.feature=e.cleaned_feature}),n.e("mek_melee-entangle-range-data-module~78704949").then(n.bind(null,"da12")).then(function(e){r.entangle=e.cleaned_feature}),n.e("mek_space-efficiency-data-module~b5871db3").then(n.bind(null,"16e1")).then(function(e){r.space_efficiency=e.validate_efficiency}),n.e("validator_functions~31ecd969").then(n.bind(null,"07de")).then(function(e){t=e.loopValidators,c=e.updateMultipliers,i=e.round}),r.derived=function(e){var a,n=e,t=[],l=["selected_accuracy","feature_array"];a=c(l,n,"Mek-Melee"),n.cost_multipliers=a.data,t=t.concat(a.alerts);var d=Object.entries(n.cost_multipliers).reduce(function(e,a){return e*a[1]},1);d=i(d,2),n.cost_multiplier!=d&&(t.push("Mek-Melee: cost_multiplier"),t.push("**** Invalid Cost Multiplier. Correcting. ****"),n.cost_multiplier=i(d,2));var o=n.selected_damage.damage;n.damage_capacity!=o&&(t.push("Mek-Melee: damage_capacity"),t.push("**** Invalid Damage Capacity. Correcting. ****"),n.damage_capacity=o);var u=o/2;n.weight!=u&&(t.push("Mek-Melee: weight"),t.push("**** Invalid Weight. Correcting. ****"),n.weight=u);var s=n.selected_damage.cost*d+n.efficiencies.space.cost;s=i(s,2),n.cost!=s&&(t.push("Mek-Melee: cost"),t.push("**** Invalid Cost. Correcting. ****"),n.cost=s);var m=n.feature_array.some(function(e){return"Entangle"==e.feature});if(m){var f=n.selected_damage.damage,g=n.entangle.range_modifier,p=n.entangle.damage_modifier,_=r.entangle(f,g,p);n.entangle={range_modifier:_.range_mod,damage_modifier:_.damage_mod},t=t.concat(_.alerts),n.final_damage!=_.damage&&(t.push("Mek-Melee: final_damage"),t.push("**** Invalid Final Damage. Correcting. ****"),n.final_damage=_.damage)}else void 0!==n.entangle&&(t.push("Mek-Melee: entangle"),t.push("**** Invalid Entangle. Correcting. ****"),n.entangle={range_mod:0,damage_mod:0},n.final_damage!=n.selected_damage.damage&&(t.push("Mek-Melee: final_damage"),t.push("**** Invalid Final Damage. Correcting. ****")));return{data:n,alerts:t}};var l=function(e){var a,n,c=e,i=[],l=[{validator:r.damage,pkey:"damage",component_prop:"selected_damage"},{validator:r.accuracy,pkey:"accuracy",component_prop:"selected_accuracy"},{validator:r.feature,pkey:"feature",component_prop:"feature_array"}],d=t(l,c);c=d.cleanedComponent,n=d.loopAlerts,i=i.concat(n),a=r.derived(c),c=a.data,i=i.concat(a.alerts);var o=c.selected_damage.cost*c.cost_multiplier;return a=r.space_efficiency(c.efficiencies.space,o,"Mek-Melee"),i=i.concat(a.alerts),c.efficiencies.space=a.data,{data:c,alerts:i}}},"504c":function(e,a,n){var t=n("9e1e"),c=n("0d58"),i=n("6821"),r=n("52a7").f;e.exports=function(e){return function(a){var n,l=i(a),d=c(l),o=d.length,u=0,s=[];while(o>u)n=d[u++],t&&!r.call(l,n)||s.push(e?[n,l[n]]:l[n]);return s}}},ffc1:function(e,a,n){var t=n("5ca1"),c=n("504c")(!0);t(t.S,"Object",{entries:function(e){return c(e)}})}}]);