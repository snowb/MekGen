(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor-type-data-module~5af327fd"],{"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return d});let r=(e,t)=>n=>{if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;let r=e.some(e=>{return t.every(t=>{return n[t]==e[t]})});return r},a=e=>(t,n)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==n})},i=(e,t)=>(n,r)=>{let a=null;return t(n,r)&&e.some(e=>{if(e[n]==r)return a=e,!0},void 0),a},d=(e,t,n,r,a)=>(i,d)=>{let u=void 0,c=[],o=!1,f=[],s=JSON.stringify(d);return void 0!==d&&t(i,d[i])?e(d)?(u=JSON.parse(JSON.stringify(d)),c=[u[i]],o=!1):(u=JSON.parse(JSON.stringify(n(i,d[i]))),c=[u[i]],o=!0,f.push(a+": "+s),f.push("**** Invalid data. Reseting. ****")):(u=r,c=[u[i]],o=!0,f.push(a+": "+s),f.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:c,update:o,alerts:f}}},e492:function(e,t,n){"use strict";n.r(t),n.d(t,"armor_type_data_table",function(){return a}),n.d(t,"armor_type_validate",function(){return u}),n.d(t,"has_feature",function(){return c}),n.d(t,"get_feature",function(){return o}),n.d(t,"cleaned_feature",function(){return f});var r=n("706d");let a=[{type:"Ablative",damage_coefficient:0,cost:.5},{type:"Standard",damage_coefficient:1,cost:1},{type:"Alpha",damage_coefficient:2,cost:1.25},{type:"Beta",damage_coefficient:4,cost:1.5},{type:"Gamma",damage_coefficient:8,cost:2}],i={type:"Standard",damage_coefficient:1,cost:1},d=["type","damage_coefficient","cost"],u=Object(r["d"])(a,d),c=Object(r["c"])(a),o=Object(r["b"])(a,c),f=Object(r["a"])(u,c,o,i,"Mek_Armor-Type")}}]);