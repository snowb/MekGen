(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_magazine_validator"],{"9e5f":function(e,t,a){"use strict";a.r(t),a.d(t,"validateComponent",function(){return i});a("ac6a");let s,l,r={};a.e("mek_ammo-list-data-module").then(a.bind(null,"f155")).then(e=>{r.filter_data_table=e.filter_data_table,r.ammo=e.cleaned_feature}),a.e("validator_functions").then(a.bind(null,"07de")).then(e=>{s=e.updateMultipliers,l=e.round}),r.derive=(e=>{let t=e,a=[],s=parseInt(t.selected_shots);t.selected_shots!=s&&(a.push("Mek-Magazine: selected_shots"),a.push("**** Invalid Selected Shots. Correcting. ****"),t.selected_shots=isNaN(s)?1:s);let r=l(.01*t.selected_gun.cost*t.selected_shots);t.base_cost!=r&&(a.push("Mek-Magazine: base_cost"),a.push("**** Invalid Base Cost. Correcting. ****"),t.base_cost=r),t.damage_capacity!=r&&(a.push("Mek-Magazine: damage_capacity"),a.push("**** Invalid Base Damage Capacity. Correcting. ****"),t.damage_capacity=r);let i=r*t.cost_multiplier;t.cost!=i&&(a.push("Mek-Magazine: cost"),a.push("**** Invalid Cost. Correcting. ****"),t.cost=i);let n=r/2;return t.weight!=n&&(a.push("Mek-Magazine: weight"),a.push("**** Invalid Weight. Correcting. ****"),t.weight=n),{data:t,alerts:a}});let i=e=>{let t=e,a=["feature_array"],l=[],i=t.feature_array.some(e=>{return/blast/gi.test(e.feature)});r.filter_data_table(i),t.hasBlast!=i&&(l.push("Mek-Magazine: hasBlast"),l.push("**** Invalid hasBlast. Correcting. ****"),t.hasBlast=i);let n=r.ammo(t.feature_array,"type");return t.feature_array=n.cleaned_array,l=l.concat(n.alerts),n=s(a,t),t.cost_multipliers=n.data,l=l.concat(n.alerts),t.cost_multiplier=Object.entries(t.cost_multipliers).reduce((e,t)=>{return e*t[1]},1),t.cost=t.selected_gun.cost*t.cost_multiplier,{data:t,alerts:l}}}}]);
//# sourceMappingURL=mek_magazine_validator.bbe3d8ed.js.map