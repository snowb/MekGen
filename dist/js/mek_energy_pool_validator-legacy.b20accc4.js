(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy_pool_validator"],{"10ad":function(e,t,n){"use strict";n.r(t),n.d(t,"validateComponent",function(){return u});var a,o,c,r=n("2d1f"),i=n.n(r),l=(n("cadf"),n("551c"),n("f751"),n("097d"),{});n.e("mek_energy_pool-size-data-module").then(n.bind(null,"ca58")).then(function(e){l.size=e.cleaned_feature}),n.e("mek_energy_pool-pool-data-module").then(n.bind(null,"5d4a")).then(function(e){l.pool=e.cleaned_feature}),n.e("mek_energy_pool-feature-data-module").then(n.bind(null,"46e2")).then(function(e){l.feature=e.cleaned_feature}),n.e("mek_space-efficiency-data-module").then(n.bind(null,"16e1")).then(function(e){l.space_efficiency=e.validate_efficiency}),n.e("validator_functions").then(n.bind(null,"07de")).then(function(e){a=e.loopValidators,o=e.updateMultipliers,c=e.round});var u=function(e){var t,n,r=e,u=["selected_portfolio_size","feature_array"],p=[],d=[{validator:l.pool,pkey:"power_available",component_prop:"selected_energy_pool"},{validator:l.size,pkey:"size",component_prop:"selected_portfolio_size"},{validator:l.feature,pkey:"feature",component_prop:"feature_array"}],f=a(d,r);r=f.cleanedComponent,n=f.loopAlerts,p=p.concat(n),t=o(u,r),r.cost_multipliers=t.data,p=p.concat(t.alerts);var s=i()(r.cost_multipliers).reduce(function(e,t){return e*t[1]},1);r.cost_multiplier=c(s,2);var _=r.selected_energy_pool.cost*r.cost_multiplier;t=l.space_efficiency(r.efficiencies.space,_,"Mek-Energy_Pool"),p=p.concat(t.alerts),r.efficiencies.space=t.data;var m=r.feature_array.some(function(e){return"Fragile"==e.feature});return r.damage_capacity=m?1:r.selected_energy_pool.damage_capacity,r.weight=r.selected_energy_pool.damage_capacity/2,{data:r,alerts:p}}},"13c8":function(e,t,n){var a=n("c3a1"),o=n("36c3"),c=n("355d").f;e.exports=function(e){return function(t){var n,r=o(t),i=a(r),l=i.length,u=0,p=[];while(l>u)c.call(r,n=i[u++])&&p.push(e?[n,r[n]]:r[n]);return p}}},"2d1f":function(e,t,n){e.exports=n("b606")},"9c60":function(e,t,n){var a=n("63b6"),o=n("13c8")(!0);a(a.S,"Object",{entries:function(e){return o(e)}})},b606:function(e,t,n){n("9c60"),e.exports=n("584a").Object.entries}}]);
//# sourceMappingURL=mek_energy_pool_validator-legacy.b20accc4.js.map