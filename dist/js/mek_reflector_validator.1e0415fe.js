(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector_validator"],{b374:function(e,t,c){"use strict";c.r(t),c.d(t,"validateComponent",function(){return l});let a={};c.e("mek_reflector-data-module").then(c.bind(null,"2429")).then(e=>{a.reflector=e.cleaned_feature}),c.e("mek_space-efficiency-data-module").then(c.bind(null,"16e1")).then(e=>{a.space_efficiency=e.validate_efficiency});let l=e=>{let t,c=e,l=[];t=a.reflector("quality_value",c.selected_reflector),l=l.concat(t.alerts),c.selected_reflector=t.data;let i=c.selected_reflector.cost;return t=a.space_efficiency(c.efficiencies.space,i,"Mek-Reflector"),l=l.concat(t.alerts),c.efficiencies.space=t.data,c.damage_capacity=c.selected_reflector.quality_value,c.weight=c.damage_capacity/2,{data:c,alerts:l}}}}]);
//# sourceMappingURL=mek_reflector_validator.1e0415fe.js.map