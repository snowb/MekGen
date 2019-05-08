(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile_validator"],{1252:function(e,t,a){"use strict";a.r(t),a.d(t,"validateComponent",function(){return d});var c,n,r,o=a("2d1f"),l=a.n(o),i={};a.e("mek_projectile-accuracy-data-module").then(a.bind(null,"171a")).then(function(e){i.accuracy=e.cleaned_feature}),a.e("mek_projectile-damage-data-module").then(a.bind(null,"61df")).then(function(e){i.damage=e.cleaned_feature}),a.e("mek_projectile-feature-data-module").then(a.bind(null,"50da")).then(function(e){i.feature=e.cleaned_feature,i.feature_filter=e.filter_data_table}),a.e("mek_projectile-range-mod-data-module").then(a.bind(null,"b801")).then(function(e){i.range_mod=e.cleaned_feature,i.udpate_range_mod=e.create_range_mod_data_table}),a.e("mek_projectile-multi-feed-data-module").then(a.bind(null,"cedc")).then(function(e){i.multi_feed=e.cleaned_feature}),a.e("mek_projectile-burst-value-data-module").then(a.bind(null,"cc3f")).then(function(e){i.burst_value=e.cleaned_feature}),a.e("mek_space-efficiency-data-module").then(a.bind(null,"16e1")).then(function(e){i.space_efficiency=e.validate_efficiency}),a.e("validator_functions").then(a.bind(null,"07de")).then(function(e){c=e.loopValidators,n=e.updateMultipliers,r=e.round}),i.derived=function(e){var t,a=e,c=[],o=["selected_accuracy","feature_array","selected_range_mod","selected_burst_value","selected_multi_feed"];t=n(o,a,"Mek-Projectile"),a.cost_multipliers=t.data,c=c.concat(t.alerts);var i=l()(a.cost_multipliers).reduce(function(e,t){return e*t[1]},1);i=r(i,2),a.cost_multiplier!=i&&(c.push("Mek-Projectile: cost_multiplier"),c.push("**** Invalid Cost Multiplier. Correcting. ****"),a.cost_multiplier=r(i,2));var d=a.selected_damage.damage;a.damage_capacity!=d&&(c.push("Mek-Projectile: damage_capacity"),c.push("**** Invalid Damage Capacity. Correcting. ****"),a.damage_capacity=d);var u=r(d/2,2);a.weight!=u&&(c.push("Mek-Projectile: weight"),c.push("**** Invalid Weight. Correcting. ****"),a.weight=u);var _=a.selected_damage.cost*i+a.efficiencies.space.cost;return _=r(_,2),a.cost!=_&&(c.push("Mek-Projectile: cost"),c.push("**** Invalid Cost. Correcting. ****"),a.cost=_),{data:a,alerts:c}};var d=function(e){var t,a,n=e,r=[],o=[{validator:i.damage,pkey:"damage",component_prop:"selected_damage"},{validator:i.accuracy,pkey:"accuracy",component_prop:"selected_accuracy"},{validator:i.burst_value,pkey:"burst_value",component_prop:"selected_burst_value"},{validator:i.multi_feed,pkey:"feeds",component_prop:"selected_multi_feed"}],l=c(o,n);n=l.cleanedComponent,a=l.loopAlerts,r=r.concat(a),i.feature_filter(n.selected_burst_value.burst_value),i.udpate_range_mod(n.selected_damage.range),o=[{validator:i.feature,pkey:"feature",component_prop:"feature_array"},{validator:i.range_mod,pkey:"range_mod",component_prop:"selected_range_mod"}];var d=c(o,n);return n=d.cleanedComponent,a=d.loopAlerts,r=r.concat(a),t=i.derived(n),n=t.data,r=r.concat(t.alerts),t=i.space_efficiency(n.efficiencies.space,n.cost,"Mek-Projectile"),r=r.concat(t.alerts),n.efficiencies.space=t.data,{data:n,alerts:r}}},"13c8":function(e,t,a){var c=a("c3a1"),n=a("36c3"),r=a("355d").f;e.exports=function(e){return function(t){var a,o=n(t),l=c(o),i=l.length,d=0,u=[];while(i>d)r.call(o,a=l[d++])&&u.push(e?[a,o[a]]:o[a]);return u}}},"2d1f":function(e,t,a){e.exports=a("b606")},"9c60":function(e,t,a){var c=a("63b6"),n=a("13c8")(!0);c(c.S,"Object",{entries:function(e){return n(e)}})},b606:function(e,t,a){a("9c60"),e.exports=a("584a").Object.entries}}]);
//# sourceMappingURL=mek_projectile_validator-legacy.9db441da.js.map