(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-burst-value-data-module"],{"0959":function(t,u,n){"use strict";n.r(u),n.d(u,"burst_value_data_table",function(){return r}),n.d(u,"burst_value_validate",function(){return s}),n.d(u,"has_feature",function(){return i}),n.d(u,"get_feature",function(){return c}),n.d(u,"cleaned_feature",function(){return f});var e=n("706d"),r=[{burst_value:1,cost:1},{burst_value:2,cost:1.5},{burst_value:3,cost:2},{burst_value:4,cost:2.5},{burst_value:5,cost:3},{burst_value:6,cost:3.5},{burst_value:7,cost:4},{burst_value:8,cost:4.5},{burst_value:"__INFINITY__",cost:5}],a=["burst_value","cost"],o={burst_value:1,cost:1},s=Object(e["d"])(r,a),i=Object(e["c"])(r),c=Object(e["b"])(r,i),f=Object(e["a"])(s,i,c,o,"Mek_Beam-Burst_Value")},"706d":function(t,u,n){"use strict";n.d(u,"d",function(){return i}),n.d(u,"c",function(){return c}),n.d(u,"b",function(){return f}),n.d(u,"a",function(){return d});var e=n("f499"),r=n.n(e),a=n("a745"),o=n.n(a),s=void 0,i=function(t,u){return function(n){if("undefined"===typeof n||!o()(u)||0==u.length)return!1;var e=t.some(function(t){return u.every(function(u){return n[u]==t[u]})});return e}},c=function(t){return function(u,n){return t.some(function(t){return void 0!==t[u]&&t[u]==n})}},f=function(t,u){return function(n,e){var r=null;return u(n,e)&&t.some(function(t){if(t[n]==e)return r=t,!0},s),r}},d=function(t,u,n,e,a){return function(o,s){var i=void 0,c=[],f=!1,d=[],l=r()(s);return void 0!==s&&u(o,s[o])?t(s)?(i=JSON.parse(r()(s)),c=[i[o]],f=!1):(i=JSON.parse(r()(n(o,s[o]))),c=[i[o]],f=!0,d.push(a+": "+l),d.push("**** Invalid data. Reseting. ****")):(i=e,c=[i[o]],f=!0,d.push(a+": "+l),d.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:c,update:f,alerts:d}}}},a21f:function(t,u,n){var e=n("584a"),r=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},f499:function(t,u,n){t.exports=n("a21f")}}]);
//# sourceMappingURL=mek_beam-burst-value-data-module-legacy.3af55281.js.map