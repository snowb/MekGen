(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_space-efficiency-data-module"],{"16e1":function(e,i,s){"use strict";s.r(i),s.d(i,"validate_efficiency",function(){return a});var o=function(e){return void 0!==e&&null!==e&&""!=e},a=function(e,i,s){var a=!1,t={modifier:0,cost:0},r=[],c=o(s)?s:"Unknown";switch(!0){case void 0===i:case isNaN(parseFloat(i)):case void 0===e:case void 0===e.modifier&&void 0===e.cost:case isNaN(parseFloat(e.modifier))&&isNaN(parseFloat(e.cost)):return r.push(c+" - Mek_Space-Efficiency:"),r.push("**** Missing or invalid values, reseting to 0 space efficiency."),a=!0,{update:a,data:t,alerts:r}}return t.modifier=parseFloat(e.modifier)==parseInt(e.modifier)?parseInt(e.modifier):parseFloat(e.modifier),t.cost=parseFloat(e.cost)==parseInt(e.cost)?parseInt(e.cost):parseFloat(e.cost),isNaN(t.modifier)&&(r.push(c+" - Mek_Space-Efficiency:"),r.push("**** Missing Modifier, reseting based on Cost."),a=!0,t.modifier=2*t.cost),(isNaN(t.cost)||t.cost!=t.modifier/2)&&(r.push(c+" - Mek_Space-Efficiency:"),r.push("**** Missing Cost, reseting based on Modifier."),a=!0,t.cost=t.modifier/2),t.modifier>i&&(r.push(c+" - Mek_Space-Efficiency:"),r.push("**** Modifier greater than Raw Space. Reseting to 0."),a=!0,t.modifier=0,t.cost=0),{update:a,data:t,alerts:r}}}}]);
//# sourceMappingURL=mek_space-efficiency-data-module-legacy.799e309b.js.map