(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy_pool_validator"],{"10ad":function(e,a,t){"use strict";t.r(a),t.d(a,"validateComponent",function(){return i});t("ac6a");let o,l,n,r={};t.e("mek_energy_pool-size-data-module").then(t.bind(null,"ca58")).then(e=>{r.size=e.cleaned_feature}),t.e("mek_energy_pool-pool-data-module").then(t.bind(null,"5d4a")).then(e=>{r.pool=e.cleaned_feature}),t.e("mek_energy_pool-feature-data-module").then(t.bind(null,"46e2")).then(e=>{r.feature=e.cleaned_feature}),t.e("mek_space-efficiency-data-module").then(t.bind(null,"16e1")).then(e=>{r.space_efficiency=e.validate_efficiency}),t.e("validator_functions").then(t.bind(null,"07de")).then(e=>{o=e.loopValidators,l=e.updateMultipliers,n=e.round});let i=e=>{let a,t,i=e,c=["selected_portfolio_size","feature_array"],p=[],d=[{validator:r.pool,pkey:"power_available",component_prop:"selected_energy_pool"},{validator:r.size,pkey:"size",component_prop:"selected_portfolio_size"},{validator:r.feature,pkey:"feature",component_prop:"feature_array"}];var _=o(d,i);i=_.cleanedComponent,t=_.loopAlerts,p=p.concat(t),i=l(c,i);let s=Object.entries(i.cost_multipliers).reduce((e,a)=>{return e*a[1]},1);i.cost_multiplier=n(s,2);let u=i.selected_energy_pool.cost*i.cost_multiplier;a=r.space_efficiency(i.efficiencies.space,u,"Mek-Energy_Pool"),p=p.concat(a.alerts),i.efficiencies.space=a.data;let f=i.feature_array.some(e=>{return"Fragile"==e.feature});return i.damage_capacity=f?1:i.selected_energy_pool.damage_capacity,i.weight=i.selected_energy_pool.damage_capacity/2,{data:i,alerts:p}}}}]);
//# sourceMappingURL=mek_energy_pool_validator.0ec43391.js.map