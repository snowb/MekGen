(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor-type-data-module"],{"706d":function(t,n,e){"use strict";e.d(n,"d",function(){return o}),e.d(n,"c",function(){return f}),e.d(n,"b",function(){return d}),e.d(n,"a",function(){return s});var r=e("f499"),a=e.n(r),i=e("a745"),u=e.n(i),c=(e("cadf"),e("551c"),e("f751"),e("097d"),void 0),o=function(t,n){return function(e){if("undefined"===typeof e||!u()(n)||0==n.length)return!1;var r=t.some(function(t){return n.every(function(n){return e[n]==t[n]})});return r}},f=function(t){return function(n,e){return t.some(function(t){return void 0!==t[n]&&t[n]==e})}},d=function(t,n){return function(e,r){var a=null;return n(e,r)&&t.some(function(t){if(t[e]==r)return a=t,!0},c),a}},s=function(t,n,e,r,i){return function(u,c){var o=void 0,f=[],d=!1,s=[],p=a()(c);return void 0!==c&&n(u,c[u])?t(c)?(o=JSON.parse(a()(c)),f=[o[u]],d=!1):(o=JSON.parse(a()(e(u,c[u]))),f=[o[u]],d=!0,s.push(i+": "+p),s.push("**** Invalid data. Reseting. ****")):(o=r,f=[o[u]],d=!0,s.push(i+": "+p),s.push("**** Invalid data. Reseting to default. ****")),{data:o,key_list:f,update:d,alerts:s}}}},a21f:function(t,n,e){var r=e("584a"),a=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},e492:function(t,n,e){"use strict";e.r(n),e.d(n,"armor_type_data_table",function(){return a}),e.d(n,"armor_type_validate",function(){return c}),e.d(n,"has_feature",function(){return o}),e.d(n,"get_feature",function(){return f}),e.d(n,"cleaned_feature",function(){return d});var r=e("706d"),a=[{type:"Ablative",damage_coefficient:0,cost:.5},{type:"Standard",damage_coefficient:1,cost:1},{type:"Alpha",damage_coefficient:2,cost:1.25},{type:"Beta",damage_coefficient:4,cost:1.5},{type:"Gamma",damage_coefficient:8,cost:2}],i={type:"Standard",damage_coefficient:1,cost:1},u=["type","damage_coefficient","cost"],c=Object(r["d"])(a,u),o=Object(r["c"])(a),f=Object(r["b"])(a,o),d=Object(r["a"])(c,o,f,i,"Mek_Armor-Type")},f499:function(t,n,e){t.exports=e("a21f")}}]);
//# sourceMappingURL=mek_armor-type-data-module-legacy.430adadc.js.map