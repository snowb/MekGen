(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-warm-up-data-module"],{1265:function(t,e,r){"use strict";r.r(e),r.d(e,"warm_up_data_table",function(){return u}),r.d(e,"accuracy_validate",function(){return d}),r.d(e,"has_feature",function(){return c}),r.d(e,"get_feature",function(){return o}),r.d(e,"cleaned_feature",function(){return s});var n=r("706d");let u=[{time:0,cost:1},{time:1,cost:.9},{time:2,cost:.7},{time:3,cost:.6}],i=["time","cost"],a={time:0,cost:1},d=Object(n["d"])(u,i),c=Object(n["c"])(u),o=Object(n["b"])(u,c),s=Object(n["a"])(d,c,o,a,"Mek_Beam-Warm-Up-Time")},"706d":function(t,e,r){"use strict";r.d(e,"d",function(){return n}),r.d(e,"c",function(){return u}),r.d(e,"b",function(){return i}),r.d(e,"a",function(){return a});let n=(t,e)=>r=>{if("undefined"===typeof r||!Array.isArray(e)||0==e.length)return!1;let n=t.some(t=>{return e.every(e=>{return r[e]==t[e]})});return n},u=t=>(e,r)=>{return t.some(t=>{return void 0!==t[e]&&t[e]==r})},i=(t,e)=>(r,n)=>{let u=null;return e(r,n)&&t.some(t=>{if(t[r]==n)return u=t,!0},void 0),u},a=(t,e,r,n,u)=>(i,a)=>{let d=void 0,c=[],o=!1,s=[],f=JSON.stringify(a);return void 0!==a&&e(i,a[i])?t(a)?(d=JSON.parse(JSON.stringify(a)),c=[d[i]],o=!1):(d=JSON.parse(JSON.stringify(r(i,a[i]))),c=[d[i]],o=!0,s.push(u+": "+f),s.push("**** Invalid data. Reseting. ****")):(d=n,c=[d[i]],o=!0,s.push(u+": "+f),s.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:c,update:o,alerts:s}}}}]);
//# sourceMappingURL=mek_beam-warm-up-data-module.2b6cb766.js.map