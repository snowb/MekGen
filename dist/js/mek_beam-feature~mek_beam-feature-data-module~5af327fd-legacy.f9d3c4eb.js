(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-feature~mek_beam-feature-data-module~5af327fd"],{"706d":function(e,n,t){"use strict";t.d(n,"d",function(){return i}),t.d(n,"c",function(){return u}),t.d(n,"b",function(){return s}),t.d(n,"a",function(){return a});var r=void 0,i=function(e,n){return function(t){if("undefined"===typeof t||!Array.isArray(n)||0==n.length)return!1;var r=e.some(function(e){return n.every(function(n){return t[n]==e[n]})});return r}},u=function(e){return function(n,t){return e.some(function(e){return void 0!==e[n]&&e[n]==t})}},s=function(e,n){return function(t,i){var u=null;return n(t,i)&&e.some(function(e){if(e[t]==i)return u=e,!0},r),u}},a=function(e,n,t,r,i){return function(u,s){var a=void 0,l=[],o=!1,c=[],f=JSON.stringify(s);return void 0!==s&&n(u,s[u])?e(s)?(a=JSON.parse(JSON.stringify(s)),l=[a[u]],o=!1):(a=JSON.parse(JSON.stringify(t(u,s[u]))),l=[a[u]],o=!0,c.push(i+": "+f),c.push("**** Invalid data. Reseting. ****")):(a=r,l=[a[u]],o=!0,c.push(i+": "+f),c.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:l,update:o,alerts:c}}}},b8e7:function(e,n,t){"use strict";t.r(n),t.d(n,"feature_data_table",function(){return o}),t.d(n,"feature_validate",function(){return p}),t.d(n,"has_feature",function(){return _}),t.d(n,"get_feature",function(){return v}),t.d(n,"cleaned_feature",function(){return h}),t.d(n,"filter_data_table",function(){return f});t("6762"),t("2fdb");var r=t("706d"),i=[{feature:"Mag-Fed",cost:.9},{feature:"Anti-Missile",cost:1,exclusive_anti_missile:!0},{feature:"Variable Anti-Missile",cost:1.8,exclusive_anti_missile:!0},{feature:"Anti-Personnel",cost:1,exclusive_personnel:!0},{feature:"Variable Anti-Personnel",cost:1.8,exclusive_personnel:!0},{feature:"Anti-Missile Anti-Personnel",cost:1.6,exclusive_personnel:!0,exclusive_anti_missile:!0},{feature:"All Purpose",cost:2.6,exclusive_personnel:!0,exclusive_anti_missile:!0},{feature:"Fragile",cost:1},{feature:"Long Range",cost:1.33},{feature:"Hydro",cost:.2},{feature:"Mega-Beam",cost:10},{feature:"Disruptor",cost:2}],u=i.filter(function(e){return void 0!==e.exclusive_anti_missile}),s=i.filter(function(e){return void 0!==e.exclusive_personnel}),a=i.filter(function(e){return void 0!==e.exclusive_personnel&&void 0!==e.exclusive_anti_missile}),l=["feature","cost","exclusive_anti_missile","exclusive_personnel"],o=i,c=!1,f=function(e){c=!1,o=e>1||"__INFINITY__"==e?i:i.filter(function(e){return!e.exclusive_anti_missile})},d=Object(r["d"])(i,l),p=function(e){return c?d(e):(c=!0,d=Object(r["d"])(o,l),d(e))},_=function(e,n){return Object(r["c"])(o)(e,n)},v=function(e,n){return Object(r["b"])(o,_)(e,n)},g=function(e,n,t){var r=null;switch(e.toLowerCase()){case"exclusive_anti_missile":r=JSON.parse(JSON.stringify(u));break;case"exclusive_personnel":r=JSON.parse(JSON.stringify(s));break;case"exclusive_personnel_missile":r=JSON.parse(JSON.stringify(a));break}return null!==r&&r.some(function(e){return e[n]==t})},h=function(e,n){var t=!1,r=!1,i=!1,u=!1,s=[],a=[];if(0===e.length)return{cleaned_array:[],update:!1,key_list:[],alerts:a};if(void 0===e||void 0===n){a.push("Mek_Beam-Feature: ");var l=void 0===e?"**** Missing feature array. Returning default. ****":"**** No primary key provided. Returning default. ****";return a.push(l),{cleaned_array:[],update:!0,key_list:[],alerts:a}}var o=e.reduceRight(function(e,l){if(void 0===l[n])return a.push("Mek_Beam-Feature: "+JSON.stringify(l)),a.push("**** Missing primary key. Ignoring. ****"),e;var o=l;if(p(l)||(a.push("Mek_Beam-Feature: "+JSON.stringify(l)),a.push("**** Invalid data, attempting to reset. ****"),o=v(n,l[n]),l=o,u=!0),null===o)return a.push("**** Unable to reset. No matching data. ****"),u=!0,e;var c=g("exclusive_anti_missile",n,l[n]),f=g("exclusive_personnel",n,l[n]),d=g("exclusive_personnel_missile",n,l[n]);return d&&!i?(e.push(l),i=!0,r=!0,t=!0,s.push(l[n]),e):d&&i?(a.push("Mek_Beam-Feature: "+l),a.push("**** Duplicate Exclusive Personnel-Beam data. Ignoring. ****"),u=!0,e):c&&!t?(e.push(l),t=!0,i=!0,s.push(l[n]),e):c&&t?(a.push("Mek_Beam-Feature: "+l),a.push("**** Duplicate Exclusive missile data. Ignoring. ****"),u=!0,e):f&&!r?(e.push(l),r=!0,i=!0,s.push(l[n]),e):f&&r?(a.push("Mek_Beam-Feature: "+l),a.push("**** Duplicate Exclusive Anti-Personnel data. Ignoring. ****"),u=!0,e):(s.includes(l[n])||(e.push(l),s.push(l[n])),e)},[]);return o=o.reverse(),0==o.length&&(o=[],u=!0,s=[],a.push("Mek_Beam-Feature: "),a.push("**** Reseting to default ****")),{cleaned_array:o,update:u,key_list:s,alerts:a}}}}]);