(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-burst-value-data-module"],{"706d":function(t,e,u){"use strict";u.d(e,"d",function(){return r}),u.d(e,"c",function(){return n}),u.d(e,"b",function(){return s}),u.d(e,"a",function(){return a});let r=(t,e)=>u=>{if("undefined"===typeof u||!Array.isArray(e)||0==e.length)return!1;let r=t.some(t=>{return e.every(e=>{return u[e]==t[e]})});return r},n=t=>(e,u)=>{return t.some(t=>{return void 0!==t[e]&&t[e]==u})},s=(t,e)=>(u,r)=>{let n=null;return e(u,r)&&t.some(t=>{if(t[u]==r)return n=t,!0},void 0),n},a=(t,e,u,r,n)=>(s,a)=>{let i=void 0,o=[],c=!1,d=[],l=JSON.stringify(a);return void 0!==a&&e(s,a[s])?t(a)?(i=JSON.parse(JSON.stringify(a)),o=[i[s]],c=!1):(i=JSON.parse(JSON.stringify(u(s,a[s]))),o=[i[s]],c=!0,d.push(n+": "+l),d.push("**** Invalid data. Reseting. ****")):(i=r,o=[i[s]],c=!0,d.push(n+": "+l),d.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:o,update:c,alerts:d}}},cc3f:function(t,e,u){"use strict";u.r(e),u.d(e,"burst_value_data_table",function(){return n}),u.d(e,"burst_value_validate",function(){return i}),u.d(e,"has_feature",function(){return o}),u.d(e,"get_feature",function(){return c}),u.d(e,"cleaned_feature",function(){return d});var r=u("706d");let n=[{burst_value:1,cost:1},{burst_value:2,cost:1.5},{burst_value:3,cost:2},{burst_value:4,cost:2.5},{burst_value:5,cost:3},{burst_value:6,cost:3.5},{burst_value:7,cost:4},{burst_value:8,cost:4.5}],s=["burst_value","cost"],a={burst_value:1,cost:1},i=Object(r["d"])(n,s),o=Object(r["c"])(n),c=Object(r["b"])(n,o),d=Object(r["a"])(i,o,c,a,"Mek_Projectile-Burst_Value")}}]);
//# sourceMappingURL=mek_projectile-burst-value-data-module.3141797b.js.map