(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-range-mod-data-module~5af327fd"],{"706d":function(e,n,r){"use strict";r.d(n,"d",function(){return t}),r.d(n,"c",function(){return a}),r.d(n,"b",function(){return o}),r.d(n,"a",function(){return d});let t=(e,n)=>r=>{if("undefined"===typeof r||!Array.isArray(n)||0==n.length)return!1;let t=e.some(e=>{return n.every(n=>{return r[n]==e[n]})});return t},a=e=>(n,r)=>{return e.some(e=>{return void 0!==e[n]&&e[n]==r})},o=(e,n)=>(r,t)=>{let a=null;return n(r,t)&&e.some(e=>{if(e[r]==t)return a=e,!0},void 0),a},d=(e,n,r,t,a)=>(o,d)=>{let u=void 0,i=[],g=!1,c=[],s=JSON.stringify(d);return void 0!==d&&n(o,d[o])?e(d)?(u=JSON.parse(JSON.stringify(d)),i=[u[o]],g=!1):(u=JSON.parse(JSON.stringify(r(o,d[o]))),i=[u[o]],g=!0,c.push(a+": "+s),c.push("**** Invalid data. Reseting. ****")):(u=t,i=[u[o]],g=!0,c.push(a+": "+s),c.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:i,update:g,alerts:c}}},"8e68":function(e,n,r){"use strict";r.r(n),r.d(n,"range_mod_data_table",function(){return a}),r.d(n,"range_mod_validate",function(){return s}),r.d(n,"has_feature",function(){return _}),r.d(n,"get_feature",function(){return f}),r.d(n,"cleaned_feature",function(){return m}),r.d(n,"create_range_mod_data_table",function(){return u});var t=r("706d");let a=[],o=[{range_mod:.25,cost:.62,range:1},{range_mod:.5,cost:.75,range:2},{range_mod:.75,cost:.88,range:3},{range_mod:1,cost:1,range:4},{range_mod:1.25,cost:1.12,range:5},{range_mod:1.5,cost:1.25,range:6},{range_mod:1.75,cost:1.38,range:7},{range_mod:2,cost:1.5,range:8},{range_mod:2.5,cost:1.75,range:10},{range_mod:3,cost:2,range:12}],d=!1,u=e=>{let n=void 0===e?4:e;a=o.map(e=>{return e.range=e.range_mod*n,e}),d=!1};u(4);let i=["range_modifier","cost","range"],g={range_mod:1,cost:1,range:3},c=Object(t["d"])(a,i),s=e=>{return d?c(e):(d=!0,c=Object(t["d"])(a,i),c(e))},_=Object(t["c"])(a),f=Object(t["b"])(a,_),m=Object(t["a"])(s,_,f,g,"Mek_Beam-Range-Mod")}}]);