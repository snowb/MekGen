(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-binder-data-module"],{"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"c",function(){return i}),r.d(t,"b",function(){return o}),r.d(t,"a",function(){return d});let n=(e,t)=>r=>{if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;let n=e.some(e=>{return t.every(t=>{return r[t]==e[t]})});return n},i=e=>(t,r)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==r})},o=(e,t)=>(r,n)=>{let i=null;return t(r,n)&&e.some(e=>{if(e[r]==n)return i=e,!0},void 0),i},d=(e,t,r,n,i)=>(o,d)=>{let p=void 0,s=[],u=!1,a=[],c=JSON.stringify(d);return void 0!==d&&t(o,d[o])?e(d)?(p=JSON.parse(JSON.stringify(d)),s=[p[o]],u=!1):(p=JSON.parse(JSON.stringify(r(o,d[o]))),s=[p[o]],u=!0,a.push(i+": "+c),a.push("**** Invalid data. Reseting. ****")):(p=n,s=[p[o]],u=!0,a.push(i+": "+c),a.push("**** Invalid data. Reseting to default. ****")),{data:p,key_list:s,update:u,alerts:a}}},c30e:function(e,t,r){"use strict";r.r(t),r.d(t,"binder_data_table",function(){return i}),r.d(t,"binder_validate",function(){return c}),r.d(t,"has_feature",function(){return f}),r.d(t,"get_feature",function(){return _}),r.d(t,"cleaned_feature",function(){return l}),r.d(t,"create_binder_data_table",function(){return u});var n=r("706d");let i=[],o=[{stopping_power_modifier:0,cost:1,space:0},{stopping_power_modifier:.25,cost:1.1,space:0},{stopping_power_modifier:.33,cost:1.2,space:0},{stopping_power_modifier:.5,cost:1.3,space:0},{stopping_power_modifier:.66,cost:1.2,space:0},{stopping_power_modifier:.75,cost:1.1,space:0}],d=["stopping_power_modifier","cost","space"],p={stopping_power_modifier:0,cost:1,space:0},s=!1,u=function(e){s=!1;let t=void 0===e?5:e;i=o.map(e=>{let r=Math.round(t*e.stopping_power_modifier*2*10)/10;return{stopping_power_modifier:e.stopping_power_modifier,cost:e.cost,space:r}})};u(5);let a=Object(n["d"])(i,d),c=e=>{return s?a(e):(s=!0,a=Object(n["d"])(i,d),a(e))},f=(e,t)=>{return Object(n["c"])(i)(e,t)},_=(e,t)=>{return Object(n["b"])(i,f)(e,t)},l=Object(n["a"])(c,f,_,p,"Mek_Shield-Binder")}}]);
//# sourceMappingURL=mek_shield-binder-data-module.450eac2d.js.map