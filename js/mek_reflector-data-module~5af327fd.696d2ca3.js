(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector-data-module~5af327fd"],{2429:function(e,t,r){"use strict";r.r(t),r.d(t,"reflector_data_table",function(){return u}),r.d(t,"reflector_validate",function(){return d}),r.d(t,"has_feature",function(){return o}),r.d(t,"get_feature",function(){return f}),r.d(t,"cleaned_feature",function(){return s});var n=r("706d");let u=Array.apply({},Array(10));u=u.map((e,t)=>{let r=t+1,n=r*r;return{quality_value:r,cost:n}});let a=["quality_value","cost"],i=JSON.parse(JSON.stringify(u[0])),d=Object(n["d"])(u,a),o=Object(n["c"])(u),f=Object(n["b"])(u,o),s=Object(n["a"])(d,o,f,i,"Mek_Reflector")},"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"c",function(){return u}),r.d(t,"b",function(){return a}),r.d(t,"a",function(){return i});let n=(e,t)=>r=>{if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;let n=e.some(e=>{return t.every(t=>{return r[t]==e[t]})});return n},u=e=>(t,r)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==r})},a=(e,t)=>(r,n)=>{let u=null;return t(r,n)&&e.some(e=>{if(e[r]==n)return u=e,!0},void 0),u},i=(e,t,r,n,u)=>(a,i)=>{let d=void 0,o=[],f=!1,s=[],c=JSON.stringify(i);return void 0!==i&&t(a,i[a])?e(i)?(d=JSON.parse(JSON.stringify(i)),o=[d[a]],f=!1):(d=JSON.parse(JSON.stringify(r(a,i[a]))),o=[d[a]],f=!0,s.push(u+": "+c),s.push("**** Invalid data. Reseting. ****")):(d=n,o=[d[a]],f=!0,s.push(u+": "+c),s.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:o,update:f,alerts:s}}}}]);