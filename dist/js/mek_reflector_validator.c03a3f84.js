(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector_validator"],{b374:function(e,t,c){"use strict";c.r(t),c.d(t,"validateComponent",function(){return l});let a={};c.e("mek_reflector-data-module").then(c.bind(null,"2429")).then(e=>{a.reflector=e.cleaned_feature}),c.e("mek_space-efficiency-data-module").then(c.bind(null,"16e1")).then(e=>{a.space_efficiency=e.validate_efficiency}),a.derived=(e=>{let t=e,c=[];t.damage_capacity!=t.selected_reflector.quality_value&&(c.push("Mek-Reflector: damage_capacity"),c.push("**** Invalid Damage Capacity. Correcting. ****"),t.damage_capacity=t.selected_reflector.quality_value),t.weight!=t.damage_capacity/2&&(c.push("Mek-Reflector: weight"),c.push("**** Invalid Weight. Correcting. ****"),t.weight=t.damage_capacity/2);let a=t.selected_reflector.cost+t.efficiencies.space.cost;return t.cost!=a&&(c.push("Mek-Reflector: cost"),c.push("**** Invalid Cost. Correcting. ****"),t.cost=a),{data:t,alerts:c}});let l=e=>{let t,c=e,l=[];t=a.reflector("quality_value",c.selected_reflector),l=l.concat(t.alerts),c.selected_reflector=t.data;let i=c.selected_reflector.cost;return t=a.space_efficiency(c.efficiencies.space,i,"Mek-Reflector"),l=l.concat(t.alerts),c.efficiencies.space=t.data,t=a.derived(c),c=t.data,l=l.concat(t.alerts),{data:c,alerts:l}}}}]);
//# sourceMappingURL=mek_reflector_validator.c03a3f84.js.map