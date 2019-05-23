(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-feature-data-module"],{"2fdb":function(e,t,r){"use strict";var n=r("5ca1"),u=r("d2c8"),i="includes";n(n.P+n.F*r("5147")(i),"String",{includes:function(e){return!!~u(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,r){var n=r("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(u){}}return!0}},6762:function(e,t,r){"use strict";var n=r("5ca1"),u=r("c366")(!0);n(n.P,"Array",{includes:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return u}),r.d(t,"c",function(){return i}),r.d(t,"b",function(){return a}),r.d(t,"a",function(){return s});var n=void 0,u=function(e,t){return function(r){if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;var n=e.some(function(e){return t.every(function(t){return r[t]==e[t]})});return n}},i=function(e){return function(t,r){return e.some(function(e){return void 0!==e[t]&&e[t]==r})}},a=function(e,t){return function(r,u){var i=null;return t(r,u)&&e.some(function(e){if(e[r]==u)return i=e,!0},n),i}},s=function(e,t,r,n,u){return function(i,a){var s=void 0,c=[],o=!1,f=[],l=JSON.stringify(a);return void 0!==a&&t(i,a[i])?e(a)?(s=JSON.parse(JSON.stringify(a)),c=[s[i]],o=!1):(s=JSON.parse(JSON.stringify(r(i,a[i]))),c=[s[i]],o=!0,f.push(u+": "+l),f.push("**** Invalid data. Reseting. ****")):(s=n,c=[s[i]],o=!0,f.push(u+": "+l),f.push("**** Invalid data. Reseting to default. ****")),{data:s,key_list:c,update:o,alerts:f}}}},aae3:function(e,t,r){var n=r("d3f4"),u=r("2d95"),i=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==u(e))}},c257:function(e,t,r){"use strict";r.r(t),r.d(t,"feature_data_table",function(){return c}),r.d(t,"feature_validate",function(){return d}),r.d(t,"has_feature",function(){return v}),r.d(t,"get_feature",function(){return p}),r.d(t,"cleaned_feature",function(){return h}),r.d(t,"filter_data_table",function(){return f});r("6762"),r("2fdb");var n=r("706d"),u=[{feature:"Long Range",cost:1.33},{feature:"Hypervelocity",cost:1.25},{feature:"Tunneling",cost:1.3},{feature:"Home On Jam",cost:2},{feature:"Fuse",cost:1.1},{feature:"Foam",cost:1.33},{feature:"Flare",cost:.5},{feature:"Smoke",cost:.5,exclusive_smoke_scatter:!0},{feature:"Scatter",cost:.5,exclusive_smoke_scatter:!0},{feature:"Countermissile",cost:1,exclusive_counter:!0},{feature:"Variable Countermissile",cost:1.8,exclusive_counter:!0},{feature:"Smoke-Scatter",cost:1,exclusive_smoke_scatter:!0},{feature:"Nuclear",cost:1e3}],i=u.filter(function(e){return"undefined"!==typeof e.exclusive_smoke_scatter}),a=u.filter(function(e){return"undefined"!==typeof e.exclusive_counter}),s=["feature","cost","exclusive_smoke_scatter","exclusive_counter"],c=u,o=!1,f=function(e,t){o=!1,c="__NIL__"!=e&&t?u:u.filter(function(r){return("__NIL__"!=e||!["nuclear","scatter","smoke","smoke-scatter"].includes(r.feature.toLowerCase()))&&!(!t&&"home on jam"==r.feature.toLowerCase())})},l=Object(n["d"])(u,s),d=function(e){return o?l(e):(o=!0,l=Object(n["d"])(c,s),l(e))},v=function(e,t){return Object(n["c"])(c)(e,t)},p=function(e,t){return Object(n["b"])(c,v)(e,t)},_=function(e,t,r){var n=null;switch(e.toLowerCase()){case"exclusive_smoke_scatter":n=i;break;case"exclusive_counter":n=a;break}return null!==n&&n.some(function(e){return e[t]==r})},h=function(e,t){var r=!1,n=!1,u=!1,i=[],a=[];if(0===e.length)return{cleaned_array:[],update:!1,key_list:[],alerts:a};if(void 0===e||void 0===t){a.push("Mek_Missile-Feature: ");var s=void 0===e?"**** Missing feature array. Returning default. ****":"**** No primary key provided. Returning default. ****";return a.push(s),{cleaned_array:[],update:!0,key_list:[],alerts:a}}var c=e.reduceRight(function(e,s){if(void 0===s[t])return a.push("Mek_Missile-Feature: "+JSON.stringify(s)),a.push("**** Missing primary key. Ignoring. ****"),e;var c=s;if(d(s)||(a.push("Mek_Missile-Feature: "+JSON.stringify(s)),a.push("**** Invalid data, attempting to reset. ****"),c=p(t,s[t]),u=!0),null===c)return a.push("**** Unable to reset. No matching data. ****"),u=!0,e;var o=_("exclusive_smoke_scatter",t,s[t]),f=_("exclusive_counter",t,s[t]);return o&&!r?(e.push(s),r=!0,i.push(s[t]),e):o&&r?(a.push("Mek_Missile-Feature: "+s),a.push("**** Duplicate Exclusive SmokeScatter data. Ignoring. ****"),u=!0,e):f&&!n?(e.push(s),n=!0,i.push(s[t]),e):f&&n?(a.push("Mek_Missile-Feature: "+s),a.push("**** Duplicate Exclusive Counter data. Ignoring. ****"),u=!0,e):(i.includes(s[t])||(e.push(s),i.push(s[t])),e)},[]);return c=c.reverse(),0==c.length&&(c=[],u=!0,i=[],a.push("Mek_Missile-Feature: "),a.push("**** Reseting to default ****")),{cleaned_array:c,update:u,key_list:i,alerts:a}}},d2c8:function(e,t,r){var n=r("aae3"),u=r("be13");e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(u(e))}}}]);
//# sourceMappingURL=mek_missile-feature-data-module-legacy.5d66fd78.js.map