(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_locomotion_validator"],{cea0:function(e,t,o){"use strict";o.r(t),o.d(t,"validateComponent",function(){return c});var a={};o.e("mek_locomotion-class-data-module").then(o.bind(null,"57e8")).then(function(e){a.create_class_table=e.create_data_table,a.class=e.cleaned_feature}),o.e("mek_locomotion-type-data-module").then(o.bind(null,"2649")).then(function(e){a.type=e.cleaned_feature}),a.derived=function(e){var t=e,o=[],a=t.selected_locomotion_class.kills;t.damage_capacity!=a&&(o.push("Mek-Locomotion: damage_capacity"),o.push("**** Invalid Damage Capacity. Correcting. ****"),t.damage_capacity=a),t.weight!=a/2&&(o.push("Mek-Locomotion: weight"),o.push("**** Invalid Weight. Correcting. ****"),t.weight=a/2);var c=t.selected_locomotion_class.cost;return t.cost!=c&&(o.push("Mek-Locomotion: cost"),o.push("**** Invalid Cost. Correcting. ****"),t.cost=c),{data:t,alerts:o}};var c=function(e){var t,o=e,c=[];return t=a.type("type",o.selected_locomotion_type),o.selected_locomotion_type=t.data,c=c.concat(t.alerts),a.create_class_table(o.selected_locomotion_type.type),t=a.class("name",o.selected_locomotion_class),o.selected_locomotion_class=t.data,c=c.concat(t.alerts),t=a.derived(o),o=t.data,c=c.concat(t.alerts),{data:o,alerts:c}}}}]);
//# sourceMappingURL=mek_locomotion_validator-legacy.af85f1e7.js.map