(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-range-mod-data-module~5af327fd"],{"706d":function(n,e,r){"use strict";r.d(e,"d",function(){return a}),r.d(e,"c",function(){return o}),r.d(e,"b",function(){return d}),r.d(e,"a",function(){return i});var t=void 0,a=function(n,e){return function(r){if("undefined"===typeof r||!Array.isArray(e)||0==e.length)return!1;var t=n.some(function(n){return e.every(function(e){return r[e]==n[e]})});return t}},o=function(n){return function(e,r){return n.some(function(n){return void 0!==n[e]&&n[e]==r})}},d=function(n,e){return function(r,a){var o=null;return e(r,a)&&n.some(function(n){if(n[r]==a)return o=n,!0},t),o}},i=function(n,e,r,t,a){return function(o,d){var i=void 0,u=[],c=!1,g=[],f=JSON.stringify(d);return void 0!==d&&e(o,d[o])?n(d)?(i=JSON.parse(JSON.stringify(d)),u=[i[o]],c=!1):(i=JSON.parse(JSON.stringify(r(o,d[o]))),u=[i[o]],c=!0,g.push(a+": "+f),g.push("**** Invalid data. Reseting. ****")):(i=t,u=[i[o]],c=!0,g.push(a+": "+f),g.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:u,update:c,alerts:g}}}},feff:function(n,e,r){"use strict";r.r(e),r.d(e,"range_mod_data_table",function(){return a}),r.d(e,"range_mod_validate",function(){return f}),r.d(e,"has_feature",function(){return s}),r.d(e,"get_feature",function(){return _}),r.d(e,"cleaned_feature",function(){return m}),r.d(e,"create_range_mod_data_table",function(){return i});var t=r("706d"),a=[],o=[{range_mod:0,cost:.5,range:0,type:"Mine",id:1},{range_mod:0,cost:.5,range:0,type:"Bomb",id:2},{range_mod:.25,cost:.62,range:1,id:3},{range_mod:.5,cost:.75,range:2,id:4},{range_mod:.75,cost:.88,range:3,id:5},{range_mod:1,cost:1,range:4,id:6},{range_mod:1.25,cost:1.12,range:5,id:7},{range_mod:1.5,cost:1.25,range:6,id:8},{range_mod:1.75,cost:1.38,range:7,id:9},{range_mod:2,cost:1.5,range:8,id:10},{range_mod:5,cost:3,range:20,id:11},{range_mod:10,cost:5.5,range:40,id:12},{range_mod:30,cost:15.5,range:120,id:13},{range_mod:50,cost:25.5,range:200,id:14}],d=!1,i=function(n){var e=void 0===n?4:n;a=o.map(function(n){return n.range=n.range_mod*e,n}),d=!1};i(4);var u=["range_modifier","cost","type","id"],c={range_mod:1,cost:1,range:4,id:6},g=Object(t["d"])(a,u),f=function(n){return d?g(n):(d=!0,g=Object(t["d"])(a,u),g(n))},s=Object(t["c"])(a),_=Object(t["b"])(a,s),m=Object(t["a"])(f,s,_,c,"Mek_Shield-Range-Mod")}}]);