(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-accuracy-data-module"],{"171a":function(t,e,r){"use strict";r.r(e),r.d(e,"accuracy_data_table",function(){return n}),r.d(e,"accuracy_validate",function(){return i}),r.d(e,"has_feature",function(){return o}),r.d(e,"get_feature",function(){return d}),r.d(e,"cleaned_feature",function(){return s});var c=r("706d");let n=[{accuracy:-2,cost:.6},{accuracy:-1,cost:.8},{accuracy:0,cost:1},{accuracy:1,cost:1.5},{accuracy:2,cost:2}],u=["accuracy","cost"],a={accuracy:0,cost:1},i=Object(c["d"])(n,u),o=Object(c["c"])(n),d=Object(c["b"])(n,o),s=Object(c["a"])(i,o,d,a,"Mek_Projectile-Accuracy")},"706d":function(t,e,r){"use strict";r.d(e,"d",function(){return c}),r.d(e,"c",function(){return n}),r.d(e,"b",function(){return u}),r.d(e,"a",function(){return a});let c=(t,e)=>r=>{if("undefined"===typeof r||!Array.isArray(e)||0==e.length)return!1;let c=t.some(t=>{return e.every(e=>{return r[e]==t[e]})});return c},n=t=>(e,r)=>{return t.some(t=>{return void 0!==t[e]&&t[e]==r})},u=(t,e)=>(r,c)=>{let n=null;return e(r,c)&&t.some(t=>{if(t[r]==c)return n=t,!0},void 0),n},a=(t,e,r,c,n)=>(u,a)=>{let i=void 0,o=[],d=!1,s=[],f=JSON.stringify(a);return void 0!==a&&e(u,a[u])?t(a)?(i=JSON.parse(JSON.stringify(a)),o=[i[u]],d=!1):(i=JSON.parse(JSON.stringify(r(u,a[u]))),o=[i[u]],d=!0,s.push(n+": "+f),s.push("**** Invalid data. Reseting. ****")):(i=c,o=[i[u]],d=!0,s.push(n+": "+f),s.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:o,update:d,alerts:s}}}}]);
//# sourceMappingURL=mek_projectile-accuracy-data-module.c636152d.js.map