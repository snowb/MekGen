(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-binder-data-module"],{"706d":function(n,e,t){"use strict";t.d(e,"d",function(){return o}),t.d(e,"c",function(){return i}),t.d(e,"b",function(){return p}),t.d(e,"a",function(){return u});var r=void 0,o=function(n,e){return function(t){if("undefined"===typeof t||!Array.isArray(e)||0==e.length)return!1;var r=n.some(function(n){return e.every(function(e){return t[e]==n[e]})});return r}},i=function(n){return function(e,t){return n.some(function(n){return void 0!==n[e]&&n[e]==t})}},p=function(n,e){return function(t,o){var i=null;return e(t,o)&&n.some(function(n){if(n[t]==o)return i=n,!0},r),i}},u=function(n,e,t,r,o){return function(i,p){var u=void 0,s=[],c=!1,d=[],a=JSON.stringify(p);return void 0!==p&&e(i,p[i])?n(p)?(u=JSON.parse(JSON.stringify(p)),s=[u[i]],c=!1):(u=JSON.parse(JSON.stringify(t(i,p[i]))),s=[u[i]],c=!0,d.push(o+": "+a),d.push("**** Invalid data. Reseting. ****")):(u=r,s=[u[i]],c=!0,d.push(o+": "+a),d.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:s,update:c,alerts:d}}}},c30e:function(n,e,t){"use strict";t.r(e),t.d(e,"binder_data_table",function(){return o}),t.d(e,"binder_validate",function(){return a}),t.d(e,"has_feature",function(){return _}),t.d(e,"get_feature",function(){return f}),t.d(e,"cleaned_feature",function(){return w}),t.d(e,"create_binder_data_table",function(){return c});var r=t("706d"),o=[],i=[{stopping_power_modifier:0,cost:1,space:0,new_stopping_power:0},{stopping_power_modifier:.25,cost:1.1,space:0,new_stopping_power:0},{stopping_power_modifier:.33,cost:1.2,space:0,new_stopping_power:0},{stopping_power_modifier:.5,cost:1.3,space:0,new_stopping_power:0},{stopping_power_modifier:.66,cost:1.2,space:0,new_stopping_power:0},{stopping_power_modifier:.75,cost:1.1,space:0,new_stopping_power:0}],p=["stopping_power_modifier","cost","space","new_stopping_power"],u={stopping_power_modifier:0,cost:1,space:0,new_stopping_power:5},s=!1,c=function(n){s=!1;var e=void 0===n?5:n;o=i.map(function(n){var t=e-Math.ceil(e*n.stopping_power_modifier),r=2*(e-t);return{stopping_power_modifier:n.stopping_power_modifier,cost:n.cost,space:r,new_stopping_power:t}})};c(5);var d=Object(r["d"])(o,p),a=function(n){return s?d(n):(s=!0,d=Object(r["d"])(o,p),d(n))},_=function(n,e){return Object(r["c"])(o)(n,e)},f=function(n,e){return Object(r["b"])(o,_)(n,e)},w=Object(r["a"])(a,_,f,u,"Mek_Shield-Binder")}}]);
//# sourceMappingURL=mek_shield-binder-data-module-legacy.93a4a330.js.map