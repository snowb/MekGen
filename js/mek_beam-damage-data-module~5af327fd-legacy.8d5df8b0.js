(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-damage-data-module~5af327fd"],{"706d":function(n,t,r){"use strict";r.d(t,"d",function(){return a}),r.d(t,"c",function(){return u}),r.d(t,"b",function(){return i}),r.d(t,"a",function(){return d});var e=void 0,a=function(n,t){return function(r){if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;var e=n.some(function(n){return t.every(function(t){return r[t]==n[t]})});return e}},u=function(n){return function(t,r){return n.some(function(n){return void 0!==n[t]&&n[t]==r})}},i=function(n,t){return function(r,a){var u=null;return t(r,a)&&n.some(function(n){if(n[r]==a)return u=n,!0},e),u}},d=function(n,t,r,e,a){return function(u,i){var d=void 0,o=[],c=!1,f=[],s=JSON.stringify(i);return void 0!==i&&t(u,i[u])?n(i)?(d=JSON.parse(JSON.stringify(i)),o=[d[u]],c=!1):(d=JSON.parse(JSON.stringify(r(u,i[u]))),o=[d[u]],c=!0,f.push(a+": "+s),f.push("**** Invalid data. Reseting. ****")):(d=e,o=[d[u]],c=!0,f.push(a+": "+s),f.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:o,update:c,alerts:f}}}},"999d":function(n,t,r){"use strict";r.r(t),r.d(t,"damage_data_table",function(){return a}),r.d(t,"damage_validate",function(){return d}),r.d(t,"has_feature",function(){return o}),r.d(t,"get_feature",function(){return c}),r.d(t,"cleaned_feature",function(){return f});var e=r("706d"),a=Array.apply({},Array(20)).map(function(n,t){var r=t+1,e=1.5*r,a=Math.round(4*Math.sqrt(r));return{damage:r,cost:e,range:a}}),u=["damage","cost","range"],i={damage:1,cost:1,range:4},d=Object(e["d"])(a,u),o=Object(e["c"])(a),c=Object(e["b"])(a,o),f=Object(e["a"])(d,o,c,i,"Mek_Beam-Damage")}}]);