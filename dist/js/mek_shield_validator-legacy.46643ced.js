(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield_validator"],{"13c8":function(e,t,n){var r=n("c3a1"),a=n("36c3"),i=n("355d").f;e.exports=function(e){return function(t){var n,o=a(t),c=r(o),s=c.length,u=0,d=[];while(s>u)i.call(o,n=c[u++])&&d.push(e?[n,o[n]]:o[n]);return d}}},"20fd":function(e,t,n){"use strict";var r=n("d9f6"),a=n("aebd");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},"2d1f":function(e,t,n){e.exports=n("b606")},"2fdb":function(e,t,n){"use strict";var r=n("5ca1"),a=n("d2c8"),i="includes";r(r.P+r.F*n("5147")(i),"String",{includes:function(e){return!!~a(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},3702:function(e,t,n){var r=n("481b"),a=n("5168")("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||i[a]===e)}},"40c3":function(e,t,n){var r=n("6b4c"),a=n("5168")("toStringTag"),i="Arguments"==r(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(n){}};e.exports=function(e){var t,n,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=o(t=Object(e),a))?n:i?r(t):"Object"==(c=r(t))&&"function"==typeof t.callee?"Arguments":c}},"4ee1":function(e,t,n){var r=n("5168")("iterator"),a=!1;try{var i=[7][r]();i["return"]=function(){a=!0},Array.from(i,function(){throw 2})}catch(o){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},e(i)}catch(o){}return n}},5147:function(e,t,n){var r=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},"549b":function(e,t,n){"use strict";var r=n("d864"),a=n("63b6"),i=n("241e"),o=n("b0dc"),c=n("3702"),s=n("b447"),u=n("20fd"),d=n("7cd6");a(a.S+a.F*!n("4ee1")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,l,f=i(e),p="function"==typeof this?this:Array,h=arguments.length,_=h>1?arguments[1]:void 0,v=void 0!==_,b=0,m=d(f);if(v&&(_=r(_,h>2?arguments[2]:void 0,2)),void 0==m||p==Array&&c(m))for(t=s(f.length),n=new p(t);t>b;b++)u(n,b,v?_(f[b],b):f[b]);else for(l=m.call(f),n=new p;!(a=l.next()).done;b++)u(n,b,v?o(l,_,[a.value,b],!0):a.value);return n.length=b,n}})},"54a1":function(e,t,n){n("6c1c"),n("1654"),e.exports=n("95d5")},"574e":function(e,t,n){"use strict";n.r(t),n.d(t,"validateComponent",function(){return d});var r,a,i,o=n("75fc"),c=(n("6762"),n("2fdb"),n("2d1f")),s=n.n(c),u=(n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d"),{});n.e("mek_shield-type-data-module").then(n.bind(null,"f56b")).then(function(e){u.type=e.cleaned_feature}),n.e("mek_shield-binder-data-module").then(n.bind(null,"c30e")).then(function(e){u.binder=e.cleaned_feature,u.create_binder=e.create_binder_data_table}),n.e("mek_shield-class-data-module").then(n.bind(null,"1dc1")).then(function(e){u.class=e.cleaned_feature,u.create_class=e.create_class_data_table}),n.e("mek_shield-weakness-data-module").then(n.bind(null,"cf03")).then(function(e){u.weakness=e.cleaned_weakness}),n.e("mek_shield-defense-ability-data-module").then(n.bind(null,"a7da")).then(function(e){u.defense_ability=e.cleaned_feature}),n.e("mek_shield-reset-time-data-module").then(n.bind(null,"abc8")).then(function(e){u.reset_time=e.cleaned_feature}),n.e("mek_shield-turns-in-use-data-module").then(n.bind(null,"11fe")).then(function(e){u.turns=e.cleaned_feature}),n.e("mek_armor-type-data-module").then(n.bind(null,"e492")).then(function(e){u.armor_type=e.cleaned_feature}),n.e("mek_armor-RAM-data-module").then(n.bind(null,"4277")).then(function(e){u.armor_RAM=e.cleaned_feature}),n.e("mek_space-efficiency-data-module").then(n.bind(null,"16e1")).then(function(e){u.space_efficiency=e.validate_efficiency}),n.e("validator_functions").then(n.bind(null,"07de")).then(function(e){r=e.loopValidators,a=e.updateMultipliers,i=e.round}),u.derived=function(e){var t,n,r=e,o=[];switch(r.type.name){case"Standard":n=["binder","defense_ability","armor_type","absorption"];break;case"Active":n=["binder","armor_type","absorption"];break;case"Reactive":n=["reset_time","turns_in_use","weakness_array"]}t=a(n,r,"Mek-Shield"),r.cost_multipliers=t.data,o=o.concat(t.alerts);var c=s()(r.cost_multipliers).reduce(function(e,t){return["armor_type","absorption"].includes(t[0])?e:e*t[1]},1);c=i(c,2),r.cost_multiplier!=c&&(o.push("Mek-Shield: cost_multiplier"),o.push("**** Invalid Cost Multiplier. Correcting. ****"),r.cost_multiplier=i(c,2));var u=r.cost_multipliers.armor_type*r.cost_multipliers.absorption;r.armor_multiplier!=u&&(o.push("Mek-Shield: armor_multiplier"),o.push("**** Invalid Armor Multiplier. Correcting. ****"),r.armor_multiplier=i(u,2));var d=r.shield_class.stopping_power/2;r.weight!=d&&(o.push("Mek-Shield: weight"),o.push("**** Invalid Weight. Correcting. ****"),r.weight=d);var l=r.shield_class.cost*c*u+r.efficiencies.space.cost;l=i(l,2),r.cost!=l&&(o.push("Mek-Shield: cost"),o.push("**** Invalid Cost. Correcting. ****"),r.cost=l);var f=void 0!==r.weakness_array&&r.weakness_array.some(function(e){return"Ablative"==e.weakness});return r.is_ablative!=f&&(o.push("Mek-Shield: is_ablative"),o.push("**** Invalid Is_Ablative. Correcting. ****"),r.is_ablative=f),{data:r,alerts:o}};var d=function(e){var t,n,a=e,i=[];t=u.type("name",a.type),i=i.concat(t.alerts),a.type=t.data,u.create_class(a.type.name.toLowerCase()),t=u.class("code",a.shield_class),i=i.concat(t.alerts),a.shield_class=t.data,["Standard","Active"].includes(a.type.name)&&u.create_binder(a.shield_class.stopping_power);var c=[];switch(a.type.name){case"Standard":c=[{validator:u.defense_ability,pkey:"da",component_prop:"defense_ability"}];case"Active":c=[].concat(Object(o["a"])(c),[{validator:u.binder,pkey:"stopping_power_modifier",component_prop:"binder"},{validator:u.armor_type,pkey:"type",component_prop:"armor_type"},{validator:u.armor_RAM,pkey:"absorption",component_prop:"absorption"}]);break;case"Reactive":c=[{validator:u.reset_time,pkey:"time",component_prop:"reset_time"},{validator:u.turns,pkey:"time",component_prop:"turns_in_use"},{validator:u.weakness,pkey:"weakness",component_prop:"weakness_array"}];break}var s=r(c,a);return a=s.cleanedComponent,n=s.loopAlerts,i=i.concat(n),t=u.derived(a),a=t.data,i=i.concat(t.alerts),t=u.space_efficiency(a.efficiencies.space,a.cost,"Mek-Shield"),i=i.concat(t.alerts),a.efficiencies.space=t.data,{data:a,alerts:i}}},6762:function(e,t,n){"use strict";var r=n("5ca1"),a=n("c366")(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"75fc":function(e,t,n){"use strict";var r=n("a745"),a=n.n(r);function i(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var o=n("774e"),c=n.n(o),s=n("c8bb"),u=n.n(s);function d(e){if(u()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return c()(e)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(e){return i(e)||d(e)||l()}n.d(t,"a",function(){return f})},"774e":function(e,t,n){e.exports=n("d2d5")},"7cd6":function(e,t,n){var r=n("40c3"),a=n("5168")("iterator"),i=n("481b");e.exports=n("584a").getIteratorMethod=function(e){if(void 0!=e)return e[a]||e["@@iterator"]||i[r(e)]}},"7f7f":function(e,t,n){var r=n("86cc").f,a=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in a||n("9e1e")&&r(a,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},"95d5":function(e,t,n){var r=n("40c3"),a=n("5168")("iterator"),i=n("481b");e.exports=n("584a").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||i.hasOwnProperty(r(t))}},"9c60":function(e,t,n){var r=n("63b6"),a=n("13c8")(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},aae3:function(e,t,n){var r=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},b0dc:function(e,t,n){var r=n("e4ae");e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(o){var i=e["return"];throw void 0!==i&&r(i.call(e)),o}}},b606:function(e,t,n){n("9c60"),e.exports=n("584a").Object.entries},c8bb:function(e,t,n){e.exports=n("54a1")},d2c8:function(e,t,n){var r=n("aae3"),a=n("be13");e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},d2d5:function(e,t,n){n("1654"),n("549b"),e.exports=n("584a").Array.from}}]);
//# sourceMappingURL=mek_shield_validator-legacy.46643ced.js.map