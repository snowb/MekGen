(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-range-mod-data-module"],{"706d":function(n,e,r){"use strict";r.d(e,"d",function(){return u}),r.d(e,"c",function(){return c}),r.d(e,"b",function(){return f}),r.d(e,"a",function(){return g});var t=r("f499"),o=r.n(t),a=r("a745"),d=r.n(a),i=void 0,u=function(n,e){return function(r){if("undefined"===typeof r||!d()(e)||0==e.length)return!1;var t=n.some(function(n){return e.every(function(e){return r[e]==n[e]})});return t}},c=function(n){return function(e,r){return n.some(function(n){return void 0!==n[e]&&n[e]==r})}},f=function(n,e){return function(r,t){var o=null;return e(r,t)&&n.some(function(n){if(n[r]==t)return o=n,!0},i),o}},g=function(n,e,r,t,a){return function(d,i){var u=void 0,c=[],f=!1,g=[],s=o()(i);return void 0!==i&&e(d,i[d])?n(i)?(u=JSON.parse(o()(i)),c=[u[d]],f=!1):(u=JSON.parse(o()(r(d,i[d]))),c=[u[d]],f=!0,g.push(a+": "+s),g.push("**** Invalid data. Reseting. ****")):(u=t,c=[u[d]],f=!0,g.push(a+": "+s),g.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:c,update:f,alerts:g}}}},a21f:function(n,e,r){var t=r("584a"),o=t.JSON||(t.JSON={stringify:JSON.stringify});n.exports=function(n){return o.stringify.apply(o,arguments)}},f499:function(n,e,r){n.exports=r("a21f")},feff:function(n,e,r){"use strict";r.r(e),r.d(e,"range_mod_data_table",function(){return o}),r.d(e,"range_mod_validate",function(){return g}),r.d(e,"has_feature",function(){return s}),r.d(e,"get_feature",function(){return _}),r.d(e,"cleaned_feature",function(){return m}),r.d(e,"create_range_mod_data_table",function(){return i});var t=r("706d"),o=[],a=[{range_mod:0,cost:.5,range:0,type:"Mine",id:1},{range_mod:0,cost:.5,range:0,type:"Bomb",id:2},{range_mod:.25,cost:.62,range:1,id:3},{range_mod:.5,cost:.75,range:2,id:4},{range_mod:.75,cost:.88,range:3,id:5},{range_mod:1,cost:1,range:4,id:6},{range_mod:1.25,cost:1.12,range:5,id:7},{range_mod:1.5,cost:1.25,range:6,id:8},{range_mod:1.75,cost:1.38,range:7,id:9},{range_mod:2,cost:1.5,range:8,id:10},{range_mod:5,cost:3,range:20,id:11},{range_mod:10,cost:5.5,range:40,id:12},{range_mod:30,cost:15.5,range:120,id:13},{range_mod:50,cost:25.5,range:200,id:14}],d=!1,i=function(n){var e=void 0===n?4:n;o=a.map(function(n){return n.range=n.range_mod*e,n}),d=!1};i(4);var u=["range_modifier","cost","type","id"],c={range_mod:1,cost:1,range:4,id:6},f=Object(t["d"])(o,u),g=function(n){return d?f(n):(d=!0,f=Object(t["d"])(o,u),f(n))},s=Object(t["c"])(o),_=Object(t["b"])(o,s),m=Object(t["a"])(g,s,_,c,"Mek_Shield-Range-Mod")}}]);
//# sourceMappingURL=mek_missile-range-mod-data-module-legacy.80249113.js.map