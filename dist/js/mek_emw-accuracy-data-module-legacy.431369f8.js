(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-accuracy-data-module"],{"643f":function(n,t,e){"use strict";e.r(t),e.d(t,"accuracy_data_table",function(){return r}),e.d(t,"accuracy_validate",function(){return i}),e.d(t,"has_feature",function(){return f}),e.d(t,"get_feature",function(){return o}),e.d(t,"cleaned_feature",function(){return s});var c=e("706d"),r=[{accuracy:-2,cost:.6,defense_ability:-4},{accuracy:-1,cost:.8,defense_ability:-3},{accuracy:0,cost:.9,defense_ability:-2},{accuracy:1,cost:1,defense_ability:-1},{accuracy:2,cost:1.5,defense_ability:0},{accuracy:3,cost:2,defense_ability:1}],u=["accuracy","cost","defense_ability"],a={accuracy:1,cost:1,defense_ability:-1},i=Object(c["d"])(r,u),f=Object(c["c"])(r),o=Object(c["b"])(r,f),s=Object(c["a"])(i,f,o,a,"Mek_EMW-Accuracy")},"706d":function(n,t,e){"use strict";e.d(t,"d",function(){return f}),e.d(t,"c",function(){return o}),e.d(t,"b",function(){return s}),e.d(t,"a",function(){return d});var c=e("f499"),r=e.n(c),u=e("a745"),a=e.n(u),i=void 0,f=function(n,t){return function(e){if("undefined"===typeof e||!a()(t)||0==t.length)return!1;var c=n.some(function(n){return t.every(function(t){return e[t]==n[t]})});return c}},o=function(n){return function(t,e){return n.some(function(n){return void 0!==n[t]&&n[t]==e})}},s=function(n,t){return function(e,c){var r=null;return t(e,c)&&n.some(function(n){if(n[e]==c)return r=n,!0},i),r}},d=function(n,t,e,c,u){return function(a,i){var f=void 0,o=[],s=!1,d=[],y=r()(i);return void 0!==i&&t(a,i[a])?n(i)?(f=JSON.parse(r()(i)),o=[f[a]],s=!1):(f=JSON.parse(r()(e(a,i[a]))),o=[f[a]],s=!0,d.push(u+": "+y),d.push("**** Invalid data. Reseting. ****")):(f=c,o=[f[a]],s=!0,d.push(u+": "+y),d.push("**** Invalid data. Reseting to default. ****")),{data:f,key_list:o,update:s,alerts:d}}}},a21f:function(n,t,e){var c=e("584a"),r=c.JSON||(c.JSON={stringify:JSON.stringify});n.exports=function(n){return r.stringify.apply(r,arguments)}},f499:function(n,t,e){n.exports=e("a21f")}}]);
//# sourceMappingURL=mek_emw-accuracy-data-module-legacy.431369f8.js.map