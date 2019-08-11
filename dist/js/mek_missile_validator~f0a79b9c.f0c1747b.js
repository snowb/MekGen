(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile_validator~f0a79b9c"],{"5a54":function(e,a,t){"use strict";t.r(a),t.d(a,"validateComponent",function(){return c});t("ac6a");let l,s,i,d={};t.e("mek_missile-accuracy-data-module~5af327fd").then(t.bind(null,"6f19")).then(e=>{d.accuracy=e.cleaned_feature}),t.e("mek_missile-damage-data-module~5af327fd").then(t.bind(null,"7f35")).then(e=>{d.damage=e.cleaned_feature}),t.e("mek_missile-feature-data-module~5af327fd").then(t.bind(null,"c257")).then(e=>{d.feature=e.cleaned_feature,d.feature_filter=e.filter_data_table}),t.e("mek_missile-blast-radius-data-module~5af327fd").then(t.bind(null,"5312")).then(e=>{d.blast_radius=e.cleaned_feature}),t.e("mek_missile-skill-data-module~5af327fd").then(t.bind(null,"db8a")).then(e=>{d.skill=e.cleaned_feature}),t.e("mek_missile-smart-data-module~5af327fd").then(t.bind(null,"a66f")).then(e=>{d.smart=e.cleaned_feature}),t.e("mek_missile-range-mod-data-module~5af327fd").then(t.bind(null,"feff")).then(e=>{d.range_mod=e.cleaned_feature,d.udpate_range_mod=e.create_range_mod_data_table}),t.e("mek_space-efficiency-data-module~b5871db3").then(t.bind(null,"16e1")).then(e=>{d.space_efficiency=e.validate_efficiency}),t.e("validator_functions~89b2afcf").then(t.bind(null,"07de")).then(e=>{l=e.loopValidators,s=e.updateMultipliers,i=e.round}),d.derived=e=>{let a,t=e,l=[],d=["selected_accuracy","feature_array","selected_range_mod","selected_blast_radius","selected_skill","selected_smart","selected_pack_size"],c=parseInt(t.selected_pack_size.size);t.selected_pack_size.size!=c&&(l.push("Mek-Missile: selected_pack_size"),l.push("**** Invalid Selected Pack Size. Correcting. ****"),t.selected_pack_size=isNaN(c)?{size:1,cost:1}:{size:c,cost:c}),a=s(d,t,"Mek-Missile"),t.cost_multipliers=a.data,l=l.concat(a.alerts);let n=Object.entries(t.cost_multipliers).reduce((e,a)=>{return e*a[1]},1);n=i(n,2),t.cost_multiplier!=n&&(l.push("Mek-Missile: cost_multiplier"),l.push("**** Invalid Cost Multiplier. Correcting. ****"),t.cost_multiplier=i(n,2));let r=i(c*t.selected_damage.damage/15,2);t.damage_capacity!=r&&(l.push("Mek-Missile: damage_capacity"),l.push("**** Invalid Damage Capacity. Correcting. ****"),t.damage_capacity=r);let o=i(r/2,2);t.weight!=o&&(l.push("Mek-Missile: weight"),l.push("**** Invalid Weight. Correcting. ****"),t.weight=o);let _=c*(t.selected_damage.cost*n)+t.efficiencies.space.cost;return _=i(_,2),t.cost!=_&&(l.push("Mek-Missile: cost"),l.push("**** Invalid Cost. Correcting. ****"),t.cost=_),{data:t,alerts:l}};let c=e=>{let a,t,s=e,i=[],c=[{validator:d.damage,pkey:"damage",component_prop:"selected_damage"},{validator:d.accuracy,pkey:"accuracy",component_prop:"selected_accuracy"},{validator:d.blast_radius,pkey:"blast_radius",component_prop:"selected_blast_radius"},{validator:d.skill,pkey:"skill",component_prop:"selected_skill"},{validator:d.smart,pkey:"smart",component_prop:"selected_smart"}];var n=l(c,s);s=n.cleanedComponent,t=n.loopAlerts,i=i.concat(t),d.feature_filter(s.selected_blast_radius.blast_radius,s.selected_smart.smart),d.udpate_range_mod(s.selected_damage.range),c=[{validator:d.feature,pkey:"feature",component_prop:"feature_array"},{validator:d.range_mod,pkey:"range_mod",component_prop:"selected_range_mod"}];var r=l(c,s);return s=r.cleanedComponent,t=r.loopAlerts,i=i.concat(t),a=d.derived(s),s=a.data,i=i.concat(a.alerts),a=d.space_efficiency(s.efficiencies.space,s.cost,"Mek-Missile"),i=i.concat(a.alerts),s.efficiencies.space=a.data,{data:s,alerts:i}}}}]);