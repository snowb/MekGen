(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam_validator"],{c84c:function(e,a,t){"use strict";t.r(a),t.d(a,"validateComponent",function(){return c});t("ac6a");let l,r,d,n={};t.e("mek_beam-accuracy-data-module").then(t.bind(null,"4c09")).then(e=>{n.accuracy=e.cleaned_feature}),t.e("mek_beam-burst-value-data-module").then(t.bind(null,"0959")).then(e=>{n.burst_value=e.cleaned_feature}),t.e("mek_beam-damage-data-module").then(t.bind(null,"999d")).then(e=>{n.damage=e.cleaned_feature}),t.e("mek_beam-feature-data-module").then(t.bind(null,"b8e7")).then(e=>{n.filter_feature=e.filter_data_table,n.feature=e.cleaned_feature}),t.e("mek_beam-range-mod-data-module").then(t.bind(null,"8e68")).then(e=>{n.update_range_mod=e.create_range_mod_data_table,n.range_mod=e.cleaned_feature}),t.e("mek_beam-shots-data-module").then(t.bind(null,"d919")).then(e=>{n.update_shots=e.filter_shots_data_table,n.shots=e.cleaned_feature}),t.e("mek_beam-warm-up-data-module").then(t.bind(null,"1265")).then(e=>{n.warm_up=e.cleaned_feature}),t.e("mek_beam-wide-angle-data-module").then(t.bind(null,"4536")).then(e=>{n.wide_angle=e.cleaned_feature}),t.e("mek_space-efficiency-data-module").then(t.bind(null,"16e1")).then(e=>{n.space_efficiency=e.validate_efficiency}),t.e("validator_functions").then(t.bind(null,"07de")).then(e=>{l=e.loopValidators,r=e.updateMultipliers,d=e.round}),n.derived=(e=>{let a,t=e,l=[],n=["selected_burst_value","selected_accuracy","selected_warm_up_time","selected_wide_angle","selected_range_mod","feature_array","selected_shots"];a=r(n,t,"Mek-Beam"),t.cost_multipliers=a.data,l=l.concat(a.alerts);let c=Object.entries(t.cost_multipliers).reduce((e,a)=>{return e*a[1]},1);c=d(c,2),t.cost_multiplier!=c&&(l.push("Mek-Beam: cost_multiplier"),l.push("**** Invalid Cost Multiplier. Correcting. ****"),t.cost_multiplier=d(c,2));let o=t.selected_damage.damage;t.damage_capacity!=o&&(l.push("Mek-Beam: damage_capacity"),l.push("**** Invalid Damage Capacity. Correcting. ****"),t.damage_capacity=o);let u=t.feature_array.some(e=>{return"Fragile"==e.feature}),_=u?1:o/2;t.weight!=_&&(l.push("Mek-Beam: weight"),l.push("**** Invalid Weight. Correcting. ****"),t.weight=_);let s=t.feature_array.some(e=>{return"Mag-Fed"==e.feature});s=s?1:0;let i=t.selected_damage.cost*c+t.efficiencies.space.cost+s;return i=d(i,2),t.cost!=i&&(l.push("Mek-Beam: cost"),l.push("**** Invalid Cost. Correcting. ****"),t.cost=i),{data:t,alerts:l}});let c=e=>{let a,t,r=e,d=[],c=[{validator:n.damage,pkey:"damage",component_prop:"selected_damage"},{validator:n.burst_value,pkey:"burst_value",component_prop:"selected_burst_value"},{validator:n.accuracy,pkey:"accuracy",component_prop:"selected_accuracy"},{validator:n.warm_up,pkey:"time",component_prop:"selected_warm_up_time"},{validator:n.wide_angle,pkey:"angle",component_prop:"selected_wide_angle"}];var o=l(c,r);r=o.cleanedComponent,t=o.loopAlerts,d=d.concat(t),n.update_range_mod(r.selected_damage.range),n.filter_feature(r.selected_burst_value.burst_value);let u=r.feature_array.some(e=>"Mag-Fed"==e.feature);n.update_shots(u),c=[{validator:n.range_mod,pkey:"range_mod",component_prop:"selected_range_mod"},{validator:n.feature,pkey:"feature",component_prop:"feature_array"},{validator:n.shots,pkey:"shots",component_prop:"selected_shots"}];var _=l(c,r);r=_.cleanedComponent,t=_.loopAlerts,d=d.concat(t),a=n.derived(r),r=a.data,d=d.concat(a.alerts);let s=r.selected_damage.cost*r.cost_multiplier;return a=n.space_efficiency(r.efficiencies.space,s,"Mek-Beam"),d=d.concat(a.alerts),r.efficiencies.space=a.data,{data:r,alerts:d}}}}]);
//# sourceMappingURL=mek_beam_validator.b45341bf.js.map