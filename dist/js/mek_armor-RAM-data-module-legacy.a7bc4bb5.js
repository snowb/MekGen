(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor-RAM-data-module"],{4277:function(n,t,r){"use strict";r.r(t),r.d(t,"ram_data_table",function(){return o}),r.d(t,"ram_validate",function(){return i}),r.d(t,"has_feature",function(){return c}),r.d(t,"get_feature",function(){return f}),r.d(t,"cleaned_feature",function(){return s});var e=r("706d"),o=[{absorption:0,cost:1,armor_penalty:0},{absorption:.2,cost:1.5,armor_penalty:0},{absorption:.25,cost:1.8,armor_penalty:.2},{absorption:.33,cost:2.2,armor_penalty:.25},{absorption:.5,cost:2.5,armor_penalty:.33}],a={absorption:0,cost:1,armor_penalty:0},u=["absorption","cost","armor_penalty"],i=Object(e["d"])(o,u),c=Object(e["c"])(o),f=Object(e["b"])(o,c),s=Object(e["a"])(i,c,f,a,"Mek_RAM-Type")},"706d":function(n,t,r){"use strict";r.d(t,"d",function(){return c}),r.d(t,"c",function(){return f}),r.d(t,"b",function(){return s}),r.d(t,"a",function(){return d});var e=r("f499"),o=r.n(e),a=r("a745"),u=r.n(a),i=(r("cadf"),r("551c"),r("f751"),r("097d"),void 0),c=function(n,t){return function(r){if("undefined"===typeof r||!u()(t)||0==t.length)return!1;var e=n.some(function(n){return t.every(function(t){return r[t]==n[t]})});return e}},f=function(n){return function(t,r){return n.some(function(n){return void 0!==n[t]&&n[t]==r})}},s=function(n,t){return function(r,e){var o=null;return t(r,e)&&n.some(function(n){if(n[r]==e)return o=n,!0},i),o}},d=function(n,t,r,e,a){return function(u,i){var c=void 0,f=[],s=!1,d=[],p=o()(i);return void 0!==i&&t(u,i[u])?n(i)?(c=JSON.parse(o()(i)),f=[c[u]],s=!1):(c=JSON.parse(o()(r(u,i[u]))),f=[c[u]],s=!0,d.push(a+": "+p),d.push("**** Invalid data. Reseting. ****")):(c=e,f=[c[u]],s=!0,d.push(a+": "+p),d.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:f,update:s,alerts:d}}}},a21f:function(n,t,r){var e=r("584a"),o=e.JSON||(e.JSON={stringify:JSON.stringify});n.exports=function(n){return o.stringify.apply(o,arguments)}},f499:function(n,t,r){n.exports=r("a21f")}}]);
//# sourceMappingURL=mek_armor-RAM-data-module-legacy.a7bc4bb5.js.map