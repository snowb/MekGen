(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-range-mod-data-module"],{"706d":function(n,e,r){"use strict";r.d(e,"d",function(){return i}),r.d(e,"c",function(){return d}),r.d(e,"b",function(){return f}),r.d(e,"a",function(){return g});var t=r("f499"),o=r.n(t),a=r("a745"),u=r.n(a),c=void 0,i=function(n,e){return function(r){if("undefined"===typeof r||!u()(e)||0==e.length)return!1;var t=n.some(function(n){return e.every(function(e){return r[e]==n[e]})});return t}},d=function(n){return function(e,r){return n.some(function(n){return void 0!==n[e]&&n[e]==r})}},f=function(n,e){return function(r,t){var o=null;return e(r,t)&&n.some(function(n){if(n[r]==t)return o=n,!0},c),o}},g=function(n,e,r,t,a){return function(u,c){var i=void 0,d=[],f=!1,g=[],s=o()(c);return void 0!==c&&e(u,c[u])?n(c)?(i=JSON.parse(o()(c)),d=[i[u]],f=!1):(i=JSON.parse(o()(r(u,c[u]))),d=[i[u]],f=!0,g.push(a+": "+s),g.push("**** Invalid data. Reseting. ****")):(i=t,d=[i[u]],f=!0,g.push(a+": "+s),g.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:d,update:f,alerts:g}}}},a21f:function(n,e,r){var t=r("584a"),o=t.JSON||(t.JSON={stringify:JSON.stringify});n.exports=function(n){return o.stringify.apply(o,arguments)}},b801:function(n,e,r){"use strict";r.r(e),r.d(e,"range_mod_data_table",function(){return o}),r.d(e,"range_mod_validate",function(){return g}),r.d(e,"has_feature",function(){return s}),r.d(e,"get_feature",function(){return _}),r.d(e,"cleaned_feature",function(){return m}),r.d(e,"create_range_mod_data_table",function(){return c});var t=r("706d"),o=[],a=[{range_mod:0,cost:.5,range:0},{range_mod:.25,cost:.62,range:.75},{range_mod:.5,cost:.75,range:1.5},{range_mod:.75,cost:.88,range:2.25},{range_mod:1,cost:1,range:3},{range_mod:1.25,cost:1.12,range:3.75},{range_mod:1.5,cost:1.25,range:4.5},{range_mod:1.75,cost:1.38,range:5.25},{range_mod:2,cost:1.5,range:6},{range_mod:2.5,cost:1.75,range:7.5},{range_mod:3,cost:2,range:9}],u=!1,c=function(n){var e=void 0===n?3:n;o=a.map(function(n){return n.range=n.range_mod*e,n}),u=!1};c(3);var i=["range_modifier","cost","range"],d={range_mod:1,cost:1,range:3},f=Object(t["d"])(o,i),g=function(n){return u?f(n):(u=!0,f=Object(t["d"])(o,i),f(n))},s=Object(t["c"])(o),_=Object(t["b"])(o,s),m=Object(t["a"])(g,s,_,d,"Mek_Projectile-Range-Mod")},f499:function(n,e,r){n.exports=r("a21f")}}]);
//# sourceMappingURL=mek_projectile-range-mod-data-module-legacy.cb74b32b.js.map