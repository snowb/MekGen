(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-damage-data-module"],{"61df":function(e,t,r){"use strict";r.r(t),r.d(t,"damage_data_table",function(){return a}),r.d(t,"damage_validate",function(){return i}),r.d(t,"has_feature",function(){return o}),r.d(t,"get_feature",function(){return s}),r.d(t,"cleaned_feature",function(){return c});var n=r("706d");let a=Array.apply({},Array(20)).map((e,t)=>{let r=t+1,n=r,a=Math.round(3*Math.sqrt(r));return{damage:r,cost:n,range:a}}),u=["damage","cost","range"],d={damage:1,cost:1,range:3},i=Object(n["d"])(a,u),o=Object(n["c"])(a),s=Object(n["b"])(a,o),c=Object(n["a"])(i,o,s,d,"Mek_Projectile-Damage")},"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"c",function(){return a}),r.d(t,"b",function(){return u}),r.d(t,"a",function(){return d});let n=(e,t)=>r=>{if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;let n=e.some(e=>{return t.every(t=>{return r[t]==e[t]})});return n},a=e=>(t,r)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==r})},u=(e,t)=>(r,n)=>{let a=null;return t(r,n)&&e.some(e=>{if(e[r]==n)return a=e,!0},void 0),a},d=(e,t,r,n,a)=>(u,d)=>{let i=void 0,o=[],s=!1,c=[],f=JSON.stringify(d);return void 0!==d&&t(u,d[u])?e(d)?(i=JSON.parse(JSON.stringify(d)),o=[i[u]],s=!1):(i=JSON.parse(JSON.stringify(r(u,d[u]))),o=[i[u]],s=!0,c.push(a+": "+f),c.push("**** Invalid data. Reseting. ****")):(i=n,o=[i[u]],s=!0,c.push(a+": "+f),c.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:o,update:s,alerts:c}}}}]);
//# sourceMappingURL=mek_projectile-damage-data-module.a0e53501.js.map