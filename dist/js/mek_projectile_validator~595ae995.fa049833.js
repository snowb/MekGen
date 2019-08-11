(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile_validator~595ae995"],{1252:function(e,a,t){"use strict";t.r(a),t.d(a,"validateComponent",function(){return n});t("ac6a");let c,l,d,r={};t.e("mek_projectile-accuracy-data-module~5af327fd").then(t.bind(null,"171a")).then(e=>{r.accuracy=e.cleaned_feature}),t.e("mek_projectile-damage-data-module~5af327fd").then(t.bind(null,"61df")).then(e=>{r.damage=e.cleaned_feature}),t.e("mek_projectile-feature-data-module~5af327fd").then(t.bind(null,"50da")).then(e=>{r.feature=e.cleaned_feature,r.feature_filter=e.filter_data_table}),t.e("mek_projectile-range-mod-data-module~5af327fd").then(t.bind(null,"b801")).then(e=>{r.range_mod=e.cleaned_feature,r.udpate_range_mod=e.create_range_mod_data_table}),t.e("mek_projectile-multi-feed-data-module~5af327fd").then(t.bind(null,"cedc")).then(e=>{r.multi_feed=e.cleaned_feature}),t.e("mek_projectile-burst-value-data-module~5af327fd").then(t.bind(null,"cc3f")).then(e=>{r.burst_value=e.cleaned_feature}),t.e("mek_space-efficiency-data-module~b5871db3").then(t.bind(null,"16e1")).then(e=>{r.space_efficiency=e.validate_efficiency}),t.e("validator_functions~89b2afcf").then(t.bind(null,"07de")).then(e=>{c=e.loopValidators,l=e.updateMultipliers,d=e.round}),r.derived=e=>{let a,t=e,c=[],r=["selected_accuracy","feature_array","selected_range_mod","selected_burst_value","selected_multi_feed"];a=l(r,t,"Mek-Projectile"),t.cost_multipliers=a.data,c=c.concat(a.alerts);let n=Object.entries(t.cost_multipliers).reduce((e,a)=>{return e*a[1]},1);n=d(n,2),t.cost_multiplier!=n&&(c.push("Mek-Projectile: cost_multiplier"),c.push("**** Invalid Cost Multiplier. Correcting. ****"),t.cost_multiplier=d(n,2));let o=t.selected_damage.damage;t.damage_capacity!=o&&(c.push("Mek-Projectile: damage_capacity"),c.push("**** Invalid Damage Capacity. Correcting. ****"),t.damage_capacity=o);let i=d(o/2,2);t.weight!=i&&(c.push("Mek-Projectile: weight"),c.push("**** Invalid Weight. Correcting. ****"),t.weight=i);let u=t.selected_damage.cost*n+t.efficiencies.space.cost;return u=d(u,2),t.cost!=u&&(c.push("Mek-Projectile: cost"),c.push("**** Invalid Cost. Correcting. ****"),t.cost=u),{data:t,alerts:c}};let n=e=>{let a,t,l=e,d=[],n=[{validator:r.damage,pkey:"damage",component_prop:"selected_damage"},{validator:r.accuracy,pkey:"accuracy",component_prop:"selected_accuracy"},{validator:r.burst_value,pkey:"burst_value",component_prop:"selected_burst_value"},{validator:r.multi_feed,pkey:"feeds",component_prop:"selected_multi_feed"}];var o=c(n,l);l=o.cleanedComponent,t=o.loopAlerts,d=d.concat(t),r.feature_filter(l.selected_burst_value.burst_value),r.udpate_range_mod(l.selected_damage.range),n=[{validator:r.feature,pkey:"feature",component_prop:"feature_array"},{validator:r.range_mod,pkey:"range_mod",component_prop:"selected_range_mod"}];var i=c(n,l);return l=i.cleanedComponent,t=i.loopAlerts,d=d.concat(t),a=r.derived(l),l=a.data,d=d.concat(a.alerts),a=r.space_efficiency(l.efficiencies.space,l.cost,"Mek-Projectile"),d=d.concat(a.alerts),l.efficiencies.space=a.data,{data:l,alerts:d}}}}]);