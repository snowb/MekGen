(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy_pool-feature-data-module~31ecd969"],{"46e2":function(e,r,n){"use strict";n.r(r),n.d(r,"feature_data_table",function(){return u}),n.d(r,"feature_validate",function(){return a}),n.d(r,"has_feature",function(){return o}),n.d(r,"get_feature",function(){return s}),n.d(r,"cleaned_feature",function(){return c});n("6762");var t=n("706d"),u=[{feature:"Morphable",cost:1.25},{feature:"Fragile",cost:1}],i=["feature","cost"],a=Object(t["d"])(u,i),o=Object(t["c"])(u),s=Object(t["b"])(u,o),c=function(e,r){var n=!1,t=[],u=[],i=JSON.stringify(e);if(void 0===e||void 0===r){u.push("Mek_Energy_Pool-Feature: ");var o=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return u.push(o),{cleaned_array:[],update:!0,key_list:t,alerts:u}}if(0==e.length)return{cleaned_array:[],update:n,key_list:t,alerts:u};var c=e.reduceRight(function(e,o){if(void 0===o[r])return u.push("Mek_Energy_Pool-Feature: "+i),u.push("**** Missing primary key. Ignoring. ****"),e;var c=o;return a(o)||(u.push("Mek_Energy_Pool-Feature: "+i),u.push("**** Invalid data, attempting to reset. ****"),c=s(r,o[r]),o=c,n=!0),null===c?(u.push("**** Unable to reset. No matching data. ****"),n=!0,e):(t.includes(o[r])||(e.push(o),t.push(o[r])),e)},[]);return c=c.reverse(),{cleaned_array:c,update:n,key_list:t,alerts:u}}},6762:function(e,r,n){"use strict";var t=n("5ca1"),u=n("c366")(!0);t(t.P,"Array",{includes:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"706d":function(e,r,n){"use strict";n.d(r,"d",function(){return u}),n.d(r,"c",function(){return i}),n.d(r,"b",function(){return a}),n.d(r,"a",function(){return o});var t=void 0,u=function(e,r){return function(n){if("undefined"===typeof n||!Array.isArray(r)||0==r.length)return!1;var t=e.some(function(e){return r.every(function(r){return n[r]==e[r]})});return t}},i=function(e){return function(r,n){return e.some(function(e){return void 0!==e[r]&&e[r]==n})}},a=function(e,r){return function(n,u){var i=null;return r(n,u)&&e.some(function(e){if(e[n]==u)return i=e,!0},t),i}},o=function(e,r,n,t,u){return function(i,a){var o=void 0,s=[],c=!1,d=[],f=JSON.stringify(a);return void 0!==a&&r(i,a[i])?e(a)?(o=JSON.parse(JSON.stringify(a)),s=[o[i]],c=!1):(o=JSON.parse(JSON.stringify(n(i,a[i]))),s=[o[i]],c=!0,d.push(u+": "+f),d.push("**** Invalid data. Reseting. ****")):(o=t,s=[o[i]],c=!0,d.push(u+": "+f),d.push("**** Invalid data. Reseting to default. ****")),{data:o,key_list:s,update:c,alerts:d}}}}}]);