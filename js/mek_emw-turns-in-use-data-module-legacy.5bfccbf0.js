(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-turns-in-use-data-module"],{"706d":function(n,t,r){"use strict";r.d(t,"d",function(){return e}),r.d(t,"c",function(){return s}),r.d(t,"b",function(){return i}),r.d(t,"a",function(){return o});var u=void 0,e=function(n,t){return function(r){if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;var u=n.some(function(n){return t.every(function(t){return r[t]==n[t]})});return u}},s=function(n){return function(t,r){return n.some(function(n){return void 0!==n[t]&&n[t]==r})}},i=function(n,t){return function(r,e){var s=null;return t(r,e)&&n.some(function(n){if(n[r]==e)return s=n,!0},u),s}},o=function(n,t,r,u,e){return function(s,i){var o=void 0,a=[],c=!1,d=[],f=JSON.stringify(i);return void 0!==i&&t(s,i[s])?n(i)?(o=JSON.parse(JSON.stringify(i)),a=[o[s]],c=!1):(o=JSON.parse(JSON.stringify(r(s,i[s]))),a=[o[s]],c=!0,d.push(e+": "+f),d.push("**** Invalid data. Reseting. ****")):(o=u,a=[o[s]],c=!0,d.push(e+": "+f),d.push("**** Invalid data. Reseting to default. ****")),{data:o,key_list:a,update:c,alerts:d}}}},"9e76":function(n,t,r){"use strict";r.r(t),r.d(t,"turns_data_table",function(){return e}),r.d(t,"turns_validate",function(){return o}),r.d(t,"has_feature",function(){return a}),r.d(t,"get_feature",function(){return c}),r.d(t,"cleaned_feature",function(){return d});var u=r("706d"),e=[{turns:1,cost:.3},{turns:2,cost:.4},{turns:3,cost:.5},{turns:4,cost:.6},{turns:5,cost:.7},{turns:7,cost:.8},{turns:10,cost:.9},{turns:"__INFINITY__",cost:1}],s=["turns","cost"],i={turns:1/0,cost:1},o=Object(u["d"])(e,s),a=Object(u["c"])(e),c=Object(u["b"])(e,a),d=function(n,t){var r=void 0,u=[],e=!1,s=[],d=JSON.stringify(t);return void 0!==t&&a(n,t[n])?o(t)?(r=JSON.parse(JSON.stringify(t)),r.turns=null===r.turns?1/0:r.turns,u=[r[n]],e=!1):(r=JSON.parse(JSON.stringify(c(n,t[n]))),r.turns=null===r.turns?1/0:r.turns,u=[r[n]],e=!0,s.push("Mek_EMW-Turns-In-Use: "+d),s.push("**** Invalid data. Reseting. ****")):(r=i,u=[r[n]],e=!0,s.push("Mek_EMW-Turns-In-Use: "+d),s.push("**** Invalid data. Reseting to default. ****")),{data:r,key_list:u,update:e,alerts:s}}}}]);
//# sourceMappingURL=mek_emw-turns-in-use-data-module-legacy.5bfccbf0.js.map