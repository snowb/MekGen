(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-class-data-module"],{"1dc1":function(e,n,t){"use strict";t.r(n),t.d(n,"class_data_table",function(){return u}),t.d(n,"class_validate",function(){return p}),t.d(n,"has_feature",function(){return l}),t.d(n,"get_feature",function(){return v}),t.d(n,"cleaned_feature",function(){return S}),t.d(n,"create_class_data_table",function(){return o});var r=t("f499"),a=t.n(r),i=(t("7f7f"),t("a58a")),d=t("706d"),u=[],c=!1,o=function(e){var n=void 0===e?"standard":e,t=1;switch(n.toLowerCase()){case"active":t=1.5;break;case"reactive":t=3;break}u=i["a"].map(function(e){var n={stopping_power:e.code+4,code:e.code,id:e.id,name:e.name,kills:5*(e.code+4),cost:(e.code+4)*t};return n},this),c=!1};o("standard");var s=["stopping_power","code","id","name","kills","cost"],f=Object(d["d"])(u,s),p=function(e){return c?f(e):(c=!0,f=Object(d["d"])(u,s),f(e))},l=Object(d["c"])(u),v=Object(d["b"])(u,l),m=JSON.parse(a()(v("code",1))),S=Object(d["a"])(p,l,v,m,"Mek_Shield-Class")},"706d":function(e,n,t){"use strict";t.d(n,"d",function(){return c}),t.d(n,"c",function(){return o}),t.d(n,"b",function(){return s}),t.d(n,"a",function(){return f});var r=t("f499"),a=t.n(r),i=t("a745"),d=t.n(i),u=void 0,c=function(e,n){return function(t){if("undefined"===typeof t||!d()(n)||0==n.length)return!1;var r=e.some(function(e){return n.every(function(n){return t[n]==e[n]})});return r}},o=function(e){return function(n,t){return e.some(function(e){return void 0!==e[n]&&e[n]==t})}},s=function(e,n){return function(t,r){var a=null;return n(t,r)&&e.some(function(e){if(e[t]==r)return a=e,!0},u),a}},f=function(e,n,t,r,i){return function(d,u){var c=void 0,o=[],s=!1,f=[],p=a()(u);return void 0!==u&&n(d,u[d])?e(u)?(c=JSON.parse(a()(u)),o=[c[d]],s=!1):(c=JSON.parse(a()(t(d,u[d]))),o=[c[d]],s=!0,f.push(i+": "+p),f.push("**** Invalid data. Reseting. ****")):(c=r,o=[c[d]],s=!0,f.push(i+": "+p),f.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:o,update:s,alerts:f}}}},a21f:function(e,n,t){var r=t("584a"),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},a58a:function(e,n,t){"use strict";n["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},f499:function(e,n,t){e.exports=t("a21f")}}]);
//# sourceMappingURL=mek_shield-class-data-module-legacy.102d1d9c.js.map