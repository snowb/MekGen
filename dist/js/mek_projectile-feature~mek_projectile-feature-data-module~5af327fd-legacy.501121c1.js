(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-feature~mek_projectile-feature-data-module~5af327fd"],{"50da":function(e,n,r){"use strict";r.r(n),r.d(n,"feature_data_table",function(){return o}),r.d(n,"feature_validate",function(){return d}),r.d(n,"has_feature",function(){return v}),r.d(n,"get_feature",function(){return h}),r.d(n,"cleaned_feature",function(){return x}),r.d(n,"filter_data_table",function(){return f});r("6762"),r("2fdb");var t=r("706d"),u=[{feature:"Long Range",cost:1.33},{feature:"Hypervelocity",cost:1.25},{feature:"Phalanx",cost:.5,exclusive_phalanx:!0},{feature:"Variable Phalanx",cost:1.4,exclusive_phalanx:!0},{feature:"Anti-Personnel",cost:1,exclusive_personnel:!0},{feature:"Variable Anti-Personnel",cost:1.8,exclusive_personnel:!0},{feature:"Anti-Personnel Phalanx",cost:1.6,exclusive_personnel:!0,exclusive_phalanx:!0},{feature:"All Purpose",cost:2.6,exclusive_personnel:!0,exclusive_phalanx:!0}],a=u.filter(function(e){return void 0!==e.exclusive_phalanx}),i=u.filter(function(e){return void 0!==e.exclusive_personnel}),s=u.filter(function(e){return void 0!==e.exclusive_personnel&&void 0!==e.exclusive_phalanx}),l=["feature","cost","exclusive_phalanx","exclusive_personnel"],o=u,c=!1,f=function(e){c=!1,o=e>1?u:u.filter(function(e){return!e.exclusive_phalanx})},p=Object(t["d"])(u,l),d=function(e){return c?p(e):(c=!0,p=Object(t["d"])(o,l),p(e))},v=function(e,n){return Object(t["c"])(o)(e,n)},h=function(e,n){return Object(t["b"])(o,v)(e,n)},_=function(e,n,r){var t=null;switch(e.toLowerCase()){case"exclusive_phalanx":t=JSON.parse(JSON.stringify(a));break;case"exclusive_personnel":t=JSON.parse(JSON.stringify(i));break;case"exclusive_personnel_phalanx":t=JSON.parse(JSON.stringify(s));break}return null!==t&&t.some(function(e){return e[n]==r})},x=function(e,n){var r=!1,t=!1,u=!1,a=!1,i=[],s=[];if(0===e.length)return{cleaned_array:[],update:!1,key_list:[],alerts:s};if(void 0===e||void 0===n){s.push("Mek_Projectile-Feature: ");var l=void 0===e?"**** Missing feature array. Returning default. ****":"**** No primary key provided. Returning default. ****";return s.push(l),{cleaned_array:[],update:!0,key_list:[],alerts:s}}var o=e.reduceRight(function(e,l){if(void 0===l[n])return s.push("Mek_Projectile-Feature: "+JSON.stringify(l)),s.push("**** Missing primary key. Ignoring. ****"),e;var o=l;if(d(l)||(s.push("Mek_Projectile-Feature: "+JSON.stringify(l)),s.push("**** Invalid data, attempting to reset. ****"),o=h(n,l[n]),l=o,a=!0),null===o)return s.push("**** Unable to reset. No matching data. ****"),a=!0,e;var c=_("exclusive_phalanx",n,l[n]),f=_("exclusive_personnel",n,l[n]),p=_("exclusive_personnel_phalanx",n,l[n]);return p&&!u?(e.push(l),u=!0,t=!0,r=!0,i.push(l[n]),e):p&&u?(s.push("Mek_Projectile-Feature: "+l),s.push("**** Duplicate Exclusive Personnel-Phalanx data. Ignoring. ****"),a=!0,e):c&&!r?(e.push(l),r=!0,u=!0,i.push(l[n]),e):c&&r?(s.push("Mek_Projectile-Feature: "+l),s.push("**** Duplicate Exclusive Phalanx data. Ignoring. ****"),a=!0,e):f&&!t?(e.push(l),t=!0,u=!0,i.push(l[n]),e):f&&t?(s.push("Mek_Projectile-Feature: "+l),s.push("**** Duplicate Exclusive Anti-Personnel data. Ignoring. ****"),a=!0,e):(i.includes(l[n])||(e.push(l),i.push(l[n])),e)},[]);return o=o.reverse(),0==o.length&&(o=[],a=!0,i=[],s.push("Mek_Projectile-Feature: "),s.push("**** Reseting to default ****")),{cleaned_array:o,update:a,key_list:i,alerts:s}}},"706d":function(e,n,r){"use strict";r.d(n,"d",function(){return u}),r.d(n,"c",function(){return a}),r.d(n,"b",function(){return i}),r.d(n,"a",function(){return s});var t=void 0,u=function(e,n){return function(r){if("undefined"===typeof r||!Array.isArray(n)||0==n.length)return!1;var t=e.some(function(e){return n.every(function(n){return r[n]==e[n]})});return t}},a=function(e){return function(n,r){return e.some(function(e){return void 0!==e[n]&&e[n]==r})}},i=function(e,n){return function(r,u){var a=null;return n(r,u)&&e.some(function(e){if(e[r]==u)return a=e,!0},t),a}},s=function(e,n,r,t,u){return function(a,i){var s=void 0,l=[],o=!1,c=[],f=JSON.stringify(i);return void 0!==i&&n(a,i[a])?e(i)?(s=JSON.parse(JSON.stringify(i)),l=[s[a]],o=!1):(s=JSON.parse(JSON.stringify(r(a,i[a]))),l=[s[a]],o=!0,c.push(u+": "+f),c.push("**** Invalid data. Reseting. ****")):(s=t,l=[s[a]],o=!0,c.push(u+": "+f),c.push("**** Invalid data. Reseting to default. ****")),{data:s,key_list:l,update:o,alerts:c}}}}}]);