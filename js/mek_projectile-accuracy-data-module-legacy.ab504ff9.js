(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-accuracy-data-module"],{"171a":function(t,n,r){"use strict";r.r(n),r.d(n,"accuracy_data_table",function(){return u}),r.d(n,"accuracy_validate",function(){return i}),r.d(n,"has_feature",function(){return o}),r.d(n,"get_feature",function(){return f}),r.d(n,"cleaned_feature",function(){return d});var c=r("706d"),u=[{accuracy:-2,cost:.6},{accuracy:-1,cost:.8},{accuracy:0,cost:1},{accuracy:1,cost:1.5},{accuracy:2,cost:2}],e=["accuracy","cost"],a={accuracy:0,cost:1},i=Object(c["d"])(u,e),o=Object(c["c"])(u),f=Object(c["b"])(u,o),d=Object(c["a"])(i,o,f,a,"Mek_Projectile-Accuracy")},"706d":function(t,n,r){"use strict";r.d(n,"d",function(){return u}),r.d(n,"c",function(){return e}),r.d(n,"b",function(){return a}),r.d(n,"a",function(){return i});var c=void 0,u=function(t,n){return function(r){if("undefined"===typeof r||!Array.isArray(n)||0==n.length)return!1;var c=t.some(function(t){return n.every(function(n){return r[n]==t[n]})});return c}},e=function(t){return function(n,r){return t.some(function(t){return void 0!==t[n]&&t[n]==r})}},a=function(t,n){return function(r,u){var e=null;return n(r,u)&&t.some(function(t){if(t[r]==u)return e=t,!0},c),e}},i=function(t,n,r,c,u){return function(e,a){var i=void 0,o=[],f=!1,d=[],s=JSON.stringify(a);return void 0!==a&&n(e,a[e])?t(a)?(i=JSON.parse(JSON.stringify(a)),o=[i[e]],f=!1):(i=JSON.parse(JSON.stringify(r(e,a[e]))),o=[i[e]],f=!0,d.push(u+": "+s),d.push("**** Invalid data. Reseting. ****")):(i=c,o=[i[e]],f=!0,d.push(u+": "+s),d.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:o,update:f,alerts:d}}}}}]);
//# sourceMappingURL=mek_projectile-accuracy-data-module-legacy.ab504ff9.js.map