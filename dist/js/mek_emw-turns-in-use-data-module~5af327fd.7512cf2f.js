(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-turns-in-use-data-module~5af327fd"],{"706d":function(t,n,r){"use strict";r.d(n,"d",function(){return e}),r.d(n,"c",function(){return u}),r.d(n,"b",function(){return s}),r.d(n,"a",function(){return i});let e=(t,n)=>r=>{if("undefined"===typeof r||!Array.isArray(n)||0==n.length)return!1;let e=t.some(t=>{return n.every(n=>{return r[n]==t[n]})});return e},u=t=>(n,r)=>{return t.some(t=>{return void 0!==t[n]&&t[n]==r})},s=(t,n)=>(r,e)=>{let u=null;return n(r,e)&&t.some(t=>{if(t[r]==e)return u=t,!0},void 0),u},i=(t,n,r,e,u)=>(s,i)=>{let a=void 0,d=[],o=!1,c=[],f=JSON.stringify(i);return void 0!==i&&n(s,i[s])?t(i)?(a=JSON.parse(JSON.stringify(i)),d=[a[s]],o=!1):(a=JSON.parse(JSON.stringify(r(s,i[s]))),d=[a[s]],o=!0,c.push(u+": "+f),c.push("**** Invalid data. Reseting. ****")):(a=e,d=[a[s]],o=!0,c.push(u+": "+f),c.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:d,update:o,alerts:c}}},"9e76":function(t,n,r){"use strict";r.r(n),r.d(n,"turns_data_table",function(){return u}),r.d(n,"turns_validate",function(){return a}),r.d(n,"has_feature",function(){return d}),r.d(n,"get_feature",function(){return o}),r.d(n,"cleaned_feature",function(){return c});var e=r("706d");let u=[{turns:1,cost:.3},{turns:2,cost:.4},{turns:3,cost:.5},{turns:4,cost:.6},{turns:5,cost:.7},{turns:7,cost:.8},{turns:10,cost:.9},{turns:"__INFINITY__",cost:1}],s=["turns","cost"],i={turns:1/0,cost:1},a=Object(e["d"])(u,s),d=Object(e["c"])(u),o=Object(e["b"])(u,d),c=function(t,n){let r=void 0,e=[],u=!1,s=[],c=JSON.stringify(n);return void 0!==n&&d(t,n[t])?a(n)?(r=JSON.parse(JSON.stringify(n)),r.turns=null===r.turns?1/0:r.turns,e=[r[t]],u=!1):(r=JSON.parse(JSON.stringify(o(t,n[t]))),r.turns=null===r.turns?1/0:r.turns,e=[r[t]],u=!0,s.push("Mek_EMW-Turns-In-Use: "+c),s.push("**** Invalid data. Reseting. ****")):(r=i,e=[r[t]],u=!0,s.push("Mek_EMW-Turns-In-Use: "+c),s.push("**** Invalid data. Reseting to default. ****")),{data:r,key_list:e,update:u,alerts:s}}}}]);