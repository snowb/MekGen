(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-damage-data-module"],{"706d":function(n,t,e){"use strict";e.d(t,"d",function(){return f}),e.d(t,"c",function(){return c}),e.d(t,"b",function(){return d}),e.d(t,"a",function(){return s});var r=e("f499"),u=e.n(r),a=e("a745"),i=e.n(a),o=void 0,f=function(n,t){return function(e){if("undefined"===typeof e||!i()(t)||0==t.length)return!1;var r=n.some(function(n){return t.every(function(t){return e[t]==n[t]})});return r}},c=function(n){return function(t,e){return n.some(function(n){return void 0!==n[t]&&n[t]==e})}},d=function(n,t){return function(e,r){var u=null;return t(e,r)&&n.some(function(n){if(n[e]==r)return u=n,!0},o),u}},s=function(n,t,e,r,a){return function(i,o){var f=void 0,c=[],d=!1,s=[],p=u()(o);return void 0!==o&&t(i,o[i])?n(o)?(f=JSON.parse(u()(o)),c=[f[i]],d=!1):(f=JSON.parse(u()(e(i,o[i]))),c=[f[i]],d=!0,s.push(a+": "+p),s.push("**** Invalid data. Reseting. ****")):(f=r,c=[f[i]],d=!0,s.push(a+": "+p),s.push("**** Invalid data. Reseting to default. ****")),{data:f,key_list:c,update:d,alerts:s}}}},"77b7":function(n,t,e){"use strict";e.r(t),e.d(t,"damage_data_table",function(){return u}),e.d(t,"damage_validate",function(){return o}),e.d(t,"has_feature",function(){return f}),e.d(t,"get_feature",function(){return c}),e.d(t,"cleaned_feature",function(){return d});var r=e("706d"),u=Array.apply({},Array(20)).map(function(n,t){var e=t+1,r=e;return{damage:e,cost:r}}),a=["damage","cost"],i={damage:1,cost:1},o=Object(r["d"])(u,a),f=Object(r["c"])(u),c=Object(r["b"])(u,f),d=Object(r["a"])(o,f,c,i,"Mek_EMW-Damage")},a21f:function(n,t,e){var r=e("584a"),u=r.JSON||(r.JSON={stringify:JSON.stringify});n.exports=function(n){return u.stringify.apply(u,arguments)}},f499:function(n,t,e){n.exports=e("a21f")}}]);
//# sourceMappingURL=mek_emw-damage-data-module-legacy.a2fe7879.js.map