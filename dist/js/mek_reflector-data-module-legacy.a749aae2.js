(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector-data-module"],{2429:function(n,t,r){"use strict";r.r(t),r.d(t,"reflector_data_table",function(){return a}),r.d(t,"reflector_validate",function(){return c}),r.d(t,"has_feature",function(){return d}),r.d(t,"get_feature",function(){return s}),r.d(t,"cleaned_feature",function(){return l});var e=r("f499"),u=r.n(e),i=r("706d"),a=Array.apply({},Array(10));a=a.map(function(n,t){var r=t+1,e=r*r;return{quality_value:r,cost:e}});var o=["quality_value","cost"],f=JSON.parse(u()(a[0])),c=Object(i["d"])(a,o),d=Object(i["c"])(a),s=Object(i["b"])(a,d),l=Object(i["a"])(c,d,s,f,"Mek_Reflector")},"706d":function(n,t,r){"use strict";r.d(t,"d",function(){return f}),r.d(t,"c",function(){return c}),r.d(t,"b",function(){return d}),r.d(t,"a",function(){return s});var e=r("f499"),u=r.n(e),i=r("a745"),a=r.n(i),o=void 0,f=function(n,t){return function(r){if("undefined"===typeof r||!a()(t)||0==t.length)return!1;var e=n.some(function(n){return t.every(function(t){return r[t]==n[t]})});return e}},c=function(n){return function(t,r){return n.some(function(n){return void 0!==n[t]&&n[t]==r})}},d=function(n,t){return function(r,e){var u=null;return t(r,e)&&n.some(function(n){if(n[r]==e)return u=n,!0},o),u}},s=function(n,t,r,e,i){return function(a,o){var f=void 0,c=[],d=!1,s=[],l=u()(o);return void 0!==o&&t(a,o[a])?n(o)?(f=JSON.parse(u()(o)),c=[f[a]],d=!1):(f=JSON.parse(u()(r(a,o[a]))),c=[f[a]],d=!0,s.push(i+": "+l),s.push("**** Invalid data. Reseting. ****")):(f=e,c=[f[a]],d=!0,s.push(i+": "+l),s.push("**** Invalid data. Reseting to default. ****")),{data:f,key_list:c,update:d,alerts:s}}}},a21f:function(n,t,r){var e=r("584a"),u=e.JSON||(e.JSON={stringify:JSON.stringify});n.exports=function(n){return u.stringify.apply(u,arguments)}},f499:function(n,t,r){n.exports=r("a21f")}}]);
//# sourceMappingURL=mek_reflector-data-module-legacy.a749aae2.js.map