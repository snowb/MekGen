(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-turns-in-use-data-module"],{"706d":function(n,t,u){"use strict";u.d(t,"d",function(){return a}),u.d(t,"c",function(){return c}),u.d(t,"b",function(){return f}),u.d(t,"a",function(){return d});var r=u("f499"),e=u.n(r),s=u("a745"),i=u.n(s),o=void 0,a=function(n,t){return function(u){if("undefined"===typeof u||!i()(t)||0==t.length)return!1;var r=n.some(function(n){return t.every(function(t){return u[t]==n[t]})});return r}},c=function(n){return function(t,u){return n.some(function(n){return void 0!==n[t]&&n[t]==u})}},f=function(n,t){return function(u,r){var e=null;return t(u,r)&&n.some(function(n){if(n[u]==r)return e=n,!0},o),e}},d=function(n,t,u,r,s){return function(i,o){var a=void 0,c=[],f=!1,d=[],p=e()(o);return void 0!==o&&t(i,o[i])?n(o)?(a=JSON.parse(e()(o)),c=[a[i]],f=!1):(a=JSON.parse(e()(u(i,o[i]))),c=[a[i]],f=!0,d.push(s+": "+p),d.push("**** Invalid data. Reseting. ****")):(a=r,c=[a[i]],f=!0,d.push(s+": "+p),d.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:c,update:f,alerts:d}}}},"9e76":function(n,t,u){"use strict";u.r(t),u.d(t,"turns_data_table",function(){return i}),u.d(t,"turns_validate",function(){return c}),u.d(t,"has_feature",function(){return f}),u.d(t,"get_feature",function(){return d}),u.d(t,"cleaned_feature",function(){return p});var r=u("f499"),e=u.n(r),s=u("706d"),i=[{turns:1,cost:.3},{turns:2,cost:.4},{turns:3,cost:.5},{turns:4,cost:.6},{turns:5,cost:.7},{turns:7,cost:.8},{turns:10,cost:.9},{turns:"__INFINITY__",cost:1}],o=["turns","cost"],a={turns:1/0,cost:1},c=Object(s["d"])(i,o),f=Object(s["c"])(i),d=Object(s["b"])(i,f),p=function(n,t){var u=void 0,r=[],s=!1,i=[],o=e()(t);return void 0!==t&&f(n,t[n])?c(t)?(u=JSON.parse(e()(t)),u.turns=null===u.turns?1/0:u.turns,r=[u[n]],s=!1):(u=JSON.parse(e()(d(n,t[n]))),u.turns=null===u.turns?1/0:u.turns,r=[u[n]],s=!0,i.push("Mek_EMW-Turns-In-Use: "+o),i.push("**** Invalid data. Reseting. ****")):(u=a,r=[u[n]],s=!0,i.push("Mek_EMW-Turns-In-Use: "+o),i.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:r,update:s,alerts:i}}},a21f:function(n,t,u){var r=u("584a"),e=r.JSON||(r.JSON={stringify:JSON.stringify});n.exports=function(n){return e.stringify.apply(e,arguments)}},f499:function(n,t,u){n.exports=u("a21f")}}]);
//# sourceMappingURL=mek_emw-turns-in-use-data-module-legacy.e7414997.js.map