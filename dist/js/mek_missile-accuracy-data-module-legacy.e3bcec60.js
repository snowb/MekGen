(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-accuracy-data-module"],{"6f19":function(n,t,c){"use strict";c.r(t),c.d(t,"accuracy_data_table",function(){return u}),c.d(t,"accuracy_validate",function(){return i}),c.d(t,"has_feature",function(){return o}),c.d(t,"get_feature",function(){return f}),c.d(t,"cleaned_feature",function(){return s});var r=c("706d"),u=[{accuracy:-2,cost:.6},{accuracy:-1,cost:.8},{accuracy:0,cost:1},{accuracy:1,cost:1.3},{accuracy:2,cost:1.6},{accuracy:3,cost:2}],e=["accuracy","cost"],a={accuracy:0,cost:1},i=Object(r["d"])(u,e),o=Object(r["c"])(u),f=Object(r["b"])(u,o),s=Object(r["a"])(i,o,f,a,"Mek_Missile-Accuracy")},"706d":function(n,t,c){"use strict";c.d(t,"d",function(){return o}),c.d(t,"c",function(){return f}),c.d(t,"b",function(){return s}),c.d(t,"a",function(){return d});var r=c("f499"),u=c.n(r),e=c("a745"),a=c.n(e),i=void 0,o=function(n,t){return function(c){if("undefined"===typeof c||!a()(t)||0==t.length)return!1;var r=n.some(function(n){return t.every(function(t){return c[t]==n[t]})});return r}},f=function(n){return function(t,c){return n.some(function(n){return void 0!==n[t]&&n[t]==c})}},s=function(n,t){return function(c,r){var u=null;return t(c,r)&&n.some(function(n){if(n[c]==r)return u=n,!0},i),u}},d=function(n,t,c,r,e){return function(a,i){var o=void 0,f=[],s=!1,d=[],y=u()(i);return void 0!==i&&t(a,i[a])?n(i)?(o=JSON.parse(u()(i)),f=[o[a]],s=!1):(o=JSON.parse(u()(c(a,i[a]))),f=[o[a]],s=!0,d.push(e+": "+y),d.push("**** Invalid data. Reseting. ****")):(o=r,f=[o[a]],s=!0,d.push(e+": "+y),d.push("**** Invalid data. Reseting to default. ****")),{data:o,key_list:f,update:s,alerts:d}}}},a21f:function(n,t,c){var r=c("584a"),u=r.JSON||(r.JSON={stringify:JSON.stringify});n.exports=function(n){return u.stringify.apply(u,arguments)}},f499:function(n,t,c){n.exports=c("a21f")}}]);
//# sourceMappingURL=mek_missile-accuracy-data-module-legacy.e3bcec60.js.map