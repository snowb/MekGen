(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-burst-value-data-module"],{"706d":function(t,u,n){"use strict";n.d(u,"d",function(){return e}),n.d(u,"c",function(){return a}),n.d(u,"b",function(){return i}),n.d(u,"a",function(){return o});var r=void 0,e=function(t,u){return function(n){if("undefined"===typeof n||!Array.isArray(u)||0==u.length)return!1;var r=t.some(function(t){return u.every(function(u){return n[u]==t[u]})});return r}},a=function(t){return function(u,n){return t.some(function(t){return void 0!==t[u]&&t[u]==n})}},i=function(t,u){return function(n,e){var a=null;return u(n,e)&&t.some(function(t){if(t[n]==e)return a=t,!0},r),a}},o=function(t,u,n,r,e){return function(a,i){var o=void 0,s=[],c=!1,f=[],d=JSON.stringify(i);return void 0!==i&&u(a,i[a])?t(i)?(o=JSON.parse(JSON.stringify(i)),s=[o[a]],c=!1):(o=JSON.parse(JSON.stringify(n(a,i[a]))),s=[o[a]],c=!0,f.push(e+": "+d),f.push("**** Invalid data. Reseting. ****")):(o=r,s=[o[a]],c=!0,f.push(e+": "+d),f.push("**** Invalid data. Reseting to default. ****")),{data:o,key_list:s,update:c,alerts:f}}}},cc3f:function(t,u,n){"use strict";n.r(u),n.d(u,"burst_value_data_table",function(){return e}),n.d(u,"burst_value_validate",function(){return o}),n.d(u,"has_feature",function(){return s}),n.d(u,"get_feature",function(){return c}),n.d(u,"cleaned_feature",function(){return f});var r=n("706d"),e=[{burst_value:1,cost:1},{burst_value:2,cost:1.5},{burst_value:3,cost:2},{burst_value:4,cost:2.5},{burst_value:5,cost:3},{burst_value:6,cost:3.5},{burst_value:7,cost:4},{burst_value:8,cost:4.5}],a=["burst_value","cost"],i={burst_value:1,cost:1},o=Object(r["d"])(e,a),s=Object(r["c"])(e),c=Object(r["b"])(e,s),f=Object(r["a"])(o,s,c,i,"Mek_Projectile-Burst_Value")}}]);
//# sourceMappingURL=mek_projectile-burst-value-data-module-legacy.6762cf90.js.map