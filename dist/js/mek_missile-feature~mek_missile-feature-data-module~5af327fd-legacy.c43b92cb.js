(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-feature~mek_missile-feature-data-module~5af327fd"],{"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"c",function(){return i}),r.d(t,"b",function(){return s}),r.d(t,"a",function(){return a});var u=void 0,n=function(e,t){return function(r){if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;var u=e.some(function(e){return t.every(function(t){return r[t]==e[t]})});return u}},i=function(e){return function(t,r){return e.some(function(e){return void 0!==e[t]&&e[t]==r})}},s=function(e,t){return function(r,n){var i=null;return t(r,n)&&e.some(function(e){if(e[r]==n)return i=e,!0},u),i}},a=function(e,t,r,u,n){return function(i,s){var a=void 0,o=[],c=!1,f=[],l=JSON.stringify(s);return void 0!==s&&t(i,s[i])?e(s)?(a=JSON.parse(JSON.stringify(s)),o=[a[i]],c=!1):(a=JSON.parse(JSON.stringify(r(i,s[i]))),o=[a[i]],c=!0,f.push(n+": "+l),f.push("**** Invalid data. Reseting. ****")):(a=u,o=[a[i]],c=!0,f.push(n+": "+l),f.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:o,update:c,alerts:f}}}},c257:function(e,t,r){"use strict";r.r(t),r.d(t,"feature_data_table",function(){return o}),r.d(t,"feature_validate",function(){return d}),r.d(t,"has_feature",function(){return _}),r.d(t,"get_feature",function(){return p}),r.d(t,"cleaned_feature",function(){return h}),r.d(t,"filter_data_table",function(){return f});r("6762"),r("2fdb");var u=r("706d"),n=[{feature:"Long Range",cost:1.33},{feature:"Hypervelocity",cost:1.25},{feature:"Tunneling",cost:1.3},{feature:"Home On Jam",cost:2},{feature:"Fuse",cost:1.1},{feature:"Foam",cost:1.33},{feature:"Flare",cost:.5},{feature:"Smoke",cost:.5,exclusive_smoke_scatter:!0},{feature:"Scatter",cost:.5,exclusive_smoke_scatter:!0},{feature:"Countermissile",cost:1,exclusive_counter:!0},{feature:"Variable Countermissile",cost:1.8,exclusive_counter:!0},{feature:"Smoke-Scatter",cost:1,exclusive_smoke_scatter:!0},{feature:"Nuclear",cost:1e3}],i=n.filter(function(e){return"undefined"!==typeof e.exclusive_smoke_scatter}),s=n.filter(function(e){return"undefined"!==typeof e.exclusive_counter}),a=["feature","cost","exclusive_smoke_scatter","exclusive_counter"],o=n,c=!1,f=function(e,t){c=!1,o="__NIL__"!=e&&t?n:n.filter(function(r){return("__NIL__"!=e||!["nuclear","scatter","smoke","smoke-scatter"].includes(r.feature.toLowerCase()))&&!(!t&&"home on jam"==r.feature.toLowerCase())})},l=Object(u["d"])(n,a),d=function(e){return c?l(e):(c=!0,l=Object(u["d"])(o,a),l(e))},_=function(e,t){return Object(u["c"])(o)(e,t)},p=function(e,t){return Object(u["b"])(o,_)(e,t)},v=function(e,t,r){var u=null;switch(e.toLowerCase()){case"exclusive_smoke_scatter":u=i;break;case"exclusive_counter":u=s;break}return null!==u&&u.some(function(e){return e[t]==r})},h=function(e,t){var r=!1,u=!1,n=!1,i=[],s=[];if(0===e.length)return{cleaned_array:[],update:!1,key_list:[],alerts:s};if(void 0===e||void 0===t){s.push("Mek_Missile-Feature: ");var a=void 0===e?"**** Missing feature array. Returning default. ****":"**** No primary key provided. Returning default. ****";return s.push(a),{cleaned_array:[],update:!0,key_list:[],alerts:s}}var o=e.reduceRight(function(e,a){if(void 0===a[t])return s.push("Mek_Missile-Feature: "+JSON.stringify(a)),s.push("**** Missing primary key. Ignoring. ****"),e;var o=a;if(d(a)||(s.push("Mek_Missile-Feature: "+JSON.stringify(a)),s.push("**** Invalid data, attempting to reset. ****"),o=p(t,a[t]),a=o,n=!0),null===o)return s.push("**** Unable to reset. No matching data. ****"),n=!0,e;var c=v("exclusive_smoke_scatter",t,a[t]),f=v("exclusive_counter",t,a[t]);return c&&!r?(e.push(a),r=!0,i.push(a[t]),e):c&&r?(s.push("Mek_Missile-Feature: "+a),s.push("**** Duplicate Exclusive SmokeScatter data. Ignoring. ****"),n=!0,e):f&&!u?(e.push(a),u=!0,i.push(a[t]),e):f&&u?(s.push("Mek_Missile-Feature: "+a),s.push("**** Duplicate Exclusive Counter data. Ignoring. ****"),n=!0,e):(i.includes(a[t])||(e.push(a),i.push(a[t])),e)},[]);return o=o.reverse(),0==o.length&&(o=[],n=!0,i=[],s.push("Mek_Missile-Feature: "),s.push("**** Reseting to default ****")),{cleaned_array:o,update:n,key_list:i,alerts:s}}}}]);