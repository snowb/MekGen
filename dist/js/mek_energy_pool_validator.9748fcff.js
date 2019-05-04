(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy_pool_validator"],{"10ad":function(e,a,t){"use strict";t.r(a),t.d(a,"validateComponent",function(){return c});t("ac6a");let o,l,r,n={};t.e("mek_energy_pool-size-data-module").then(t.bind(null,"ca58")).then(e=>{n.size=e.cleaned_feature}),t.e("mek_energy_pool-pool-data-module").then(t.bind(null,"5d4a")).then(e=>{n.pool=e.cleaned_feature}),t.e("mek_energy_pool-feature-data-module").then(t.bind(null,"46e2")).then(e=>{n.feature=e.cleaned_feature}),t.e("mek_space-efficiency-data-module").then(t.bind(null,"16e1")).then(e=>{n.space_efficiency=e.validate_efficiency}),t.e("validator_functions").then(t.bind(null,"07de")).then(e=>{o=e.loopValidators,l=e.updateMultipliers,r=e.round}),n.derived=(e=>{let a=e,t=[],o=a.feature_array.some(e=>{return"Fragile"==e.feature}),l=o?1:a.selected_energy_pool.damage_capacity;a.damage_capacity!=l&&(t.push("Mek-Energy_Pool: damage_capacity"),t.push("**** Invalid Damage Capacity. Correcting. ****"),a.damage_capacity=l);let r=a.selected_energy_pool.damage_capacity/2;a.weight!=r&&(t.push("Mek-Energy_Pool: weight"),t.push("**** Invalid Weight. Correcting. ****"),a.weight=r);let n=a.selected_energy_pool.cost*a.cost_multiplier+a.efficiencies.space.cost;a.cost!=n&&(t.push("Mek-Energy_Pool: cost"),t.push("**** Invalid Cost. Correcting. ****"),a.cost=n);let c=a.feature_array.some(e=>{return"Morphable"==e.feature});switch(!0){case c&&(void 0===a.selected_morphable||!a.selected_morphable):case!c&&a.selected_morphable:t.push("Mek-Energy_Pool: Morphable"),t.push("**** Invalid Morphable data. Correcting. ****"),a.selected_morphable=c}return{data:a,alerts:t}});let c=e=>{let a,t,c=e,i=["selected_portfolio_size","feature_array"],p=[],s=[{validator:n.pool,pkey:"power_available",component_prop:"selected_energy_pool"},{validator:n.size,pkey:"size",component_prop:"selected_portfolio_size"},{validator:n.feature,pkey:"feature",component_prop:"feature_array"}];var d=o(s,c);c=d.cleanedComponent,t=d.loopAlerts,p=p.concat(t),a=l(i,c,"Mek-Energy_Pool"),c.cost_multipliers=a.data,p=p.concat(a.alerts);let _=Object.entries(c.cost_multipliers).reduce((e,a)=>{return e*a[1]},1);c.cost_multiplier=r(_,2);let u=c.selected_energy_pool.cost*c.cost_multiplier;return a=n.space_efficiency(c.efficiencies.space,u,"Mek-Energy_Pool"),p=p.concat(a.alerts),c.efficiencies.space=a.data,a=n.derived(c),c=a.data,p=p.concat(a.alerts),{data:c,alerts:p}}}}]);
//# sourceMappingURL=mek_energy_pool_validator.9748fcff.js.map