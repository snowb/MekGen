(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["validator_functions"],{"07de":function(r,t,e){"use strict";e.r(t),e.d(t,"loopValidators",function(){return o}),e.d(t,"updateMultipliers",function(){return n}),e.d(t,"round",function(){return u});e("ac6a");let o=(r,t)=>{let e=t,o=[];return r.forEach(r=>{let t=a(r,e);e[r.component_prop]="feature_array"==r.component_prop?t.cleaned_array:t.data,o=o.concat(t.alerts)}),{cleanedComponent:e,loopAlerts:o}},a=(r,t)=>{let e=r.validator,o=r.pkey,a=t[r.component_prop];return"feature_array"==r.component_prop?e(a,o):e(o,a)},n=(r,t,e)=>{let o=t,a=[],n=o.cost_multipliers.armor||o.cost_multipliers,u=o.cost_multipliers.armor?"cost_multipliers.armor.":"cost_multipliers.";return 0==r.length?{data:n,alerts:a}:(r.forEach(r=>{if("feature_array"==r){let t=o.feature_array.reduce((r,t)=>{return r*t.cost},1);o.cost_multipliers.feature_array!=t&&(a.push(e+": "+u+r),a.push("**** Invalid Cost Multiplier. Correcting. ****"),n.feature_array=t)}else n[r]!=o[r].cost&&(a.push(e+": "+u+r),a.push("**** Invalid Cost Multiplier. Correcting. ****"),n[r]=o[r].cost)}),{data:n,alerts:a})},u=(r,t)=>{if("undefined"===typeof t||0==+t)return Math.round(+r);let e=10**+t;return Math.round(+r*e)/e}}}]);
//# sourceMappingURL=validator_functions.e819fa03.js.map