(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector_validator~c14c5c71"],{b374:function(e,t,c){"use strict";c.r(t),c.d(t,"validateComponent",function(){return n});var a,i={};c.e("mek_reflector-data-module~5af327fd").then(c.bind(null,"2429")).then(function(e){i.reflector=e.cleaned_feature}),c.e("mek_space-efficiency-data-module~b5871db3").then(c.bind(null,"16e1")).then(function(e){i.space_efficiency=e.validate_efficiency}),c.e("validator_functions~31ecd969").then(c.bind(null,"07de")).then(function(e){a=e.round}),i.derived=function(e){var t=e,c=[];t.damage_capacity!=t.selected_reflector.quality_value&&(c.push("Mek-Reflector: damage_capacity"),c.push("**** Invalid Damage Capacity. Correcting. ****"),t.damage_capacity=t.selected_reflector.quality_value),t.weight!=t.damage_capacity/2&&(c.push("Mek-Reflector: weight"),c.push("**** Invalid Weight. Correcting. ****"),t.weight=t.damage_capacity/2);var i=t.selected_reflector.cost+t.efficiencies.space.cost;return i=a(i,2),t.cost!=i&&(c.push("Mek-Reflector: cost"),c.push("**** Invalid Cost. Correcting. ****"),t.cost=i),{data:t,alerts:c}};var n=function(e){var t,c=e,a=[];t=i.reflector("quality_value",c.selected_reflector),a=a.concat(t.alerts),c.selected_reflector=t.data;var n=c.selected_reflector.cost;return t=i.space_efficiency(c.efficiencies.space,n,"Mek-Reflector"),a=a.concat(t.alerts),c.efficiencies.space=t.data,t=i.derived(c),c=t.data,a=a.concat(t.alerts),{data:c,alerts:a}}}}]);