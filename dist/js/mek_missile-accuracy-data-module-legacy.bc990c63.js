(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-accuracy-data-module"],{"6f19":function(n,t,c){"use strict";c.r(t),c.d(t,"accuracy_data_table",function(){return u}),c.d(t,"accuracy_validate",function(){return i}),c.d(t,"has_feature",function(){return o}),c.d(t,"get_feature",function(){return s}),c.d(t,"cleaned_feature",function(){return f});var r=c("706d"),u=[{accuracy:-2,cost:.6},{accuracy:-1,cost:.8},{accuracy:0,cost:1},{accuracy:1,cost:1.3},{accuracy:2,cost:1.6},{accuracy:3,cost:2}],e=["accuracy","cost"],a={accuracy:0,cost:1},i=Object(r["d"])(u,e),o=Object(r["c"])(u),s=Object(r["b"])(u,o),f=Object(r["a"])(i,o,s,a,"Mek_Missile-Accuracy")},"706d":function(n,t,c){"use strict";c.d(t,"d",function(){return u}),c.d(t,"c",function(){return e}),c.d(t,"b",function(){return a}),c.d(t,"a",function(){return i});var r=void 0,u=function(n,t){return function(c){if("undefined"===typeof c||!Array.isArray(t)||0==t.length)return!1;var r=n.some(function(n){return t.every(function(t){return c[t]==n[t]})});return r}},e=function(n){return function(t,c){return n.some(function(n){return void 0!==n[t]&&n[t]==c})}},a=function(n,t){return function(c,u){var e=null;return t(c,u)&&n.some(function(n){if(n[c]==u)return e=n,!0},r),e}},i=function(n,t,c,r,u){return function(e,a){var i=void 0,o=[],s=!1,f=[],d=JSON.stringify(a);return void 0!==a&&t(e,a[e])?n(a)?(i=JSON.parse(JSON.stringify(a)),o=[i[e]],s=!1):(i=JSON.parse(JSON.stringify(c(e,a[e]))),o=[i[e]],s=!0,f.push(u+": "+d),f.push("**** Invalid data. Reseting. ****")):(i=r,o=[i[e]],s=!0,f.push(u+": "+d),f.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:o,update:s,alerts:f}}}}}]);
//# sourceMappingURL=mek_missile-accuracy-data-module-legacy.bc990c63.js.map