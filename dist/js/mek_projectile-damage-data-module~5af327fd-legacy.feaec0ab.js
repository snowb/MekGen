(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-damage-data-module~5af327fd"],{"61df":function(n,t,r){"use strict";r.r(t),r.d(t,"damage_data_table",function(){return u}),r.d(t,"damage_validate",function(){return o}),r.d(t,"has_feature",function(){return d}),r.d(t,"get_feature",function(){return c}),r.d(t,"cleaned_feature",function(){return f});var e=r("706d"),u=Array.apply({},Array(20)).map(function(n,t){var r=t+1,e=r,u=Math.round(3*Math.sqrt(r));return{damage:r,cost:e,range:u}}),a=["damage","cost","range"],i={damage:1,cost:1,range:3},o=Object(e["d"])(u,a),d=Object(e["c"])(u),c=Object(e["b"])(u,d),f=Object(e["a"])(o,d,c,i,"Mek_Projectile-Damage")},"706d":function(n,t,r){"use strict";r.d(t,"d",function(){return u}),r.d(t,"c",function(){return a}),r.d(t,"b",function(){return i}),r.d(t,"a",function(){return o});var e=void 0,u=function(n,t){return function(r){if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;var e=n.some(function(n){return t.every(function(t){return r[t]==n[t]})});return e}},a=function(n){return function(t,r){return n.some(function(n){return void 0!==n[t]&&n[t]==r})}},i=function(n,t){return function(r,u){var a=null;return t(r,u)&&n.some(function(n){if(n[r]==u)return a=n,!0},e),a}},o=function(n,t,r,e,u){return function(a,i){var o=void 0,d=[],c=!1,f=[],s=JSON.stringify(i);return void 0!==i&&t(a,i[a])?n(i)?(o=JSON.parse(JSON.stringify(i)),d=[o[a]],c=!1):(o=JSON.parse(JSON.stringify(r(a,i[a]))),d=[o[a]],c=!0,f.push(u+": "+s),f.push("**** Invalid data. Reseting. ****")):(o=e,d=[o[a]],c=!0,f.push(u+": "+s),f.push("**** Invalid data. Reseting to default. ****")),{data:o,key_list:d,update:c,alerts:f}}}}}]);