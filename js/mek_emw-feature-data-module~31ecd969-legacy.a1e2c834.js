(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-feature-data-module~31ecd969"],{6762:function(e,t,n){"use strict";var r=n("5ca1"),u=n("c366")(!0);r(r.P,"Array",{includes:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return u}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c});var r=void 0,u=function(e,t){return function(n){if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;var r=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return r}},i=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},a=function(e,t){return function(n,u){var i=null;return t(n,u)&&e.some(function(e){if(e[n]==u)return i=e,!0},r),i}},c=function(e,t,n,r,u){return function(i,a){var c=void 0,s=[],o=!1,f=[],d=JSON.stringify(a);return void 0!==a&&t(i,a[i])?e(a)?(c=JSON.parse(JSON.stringify(a)),s=[c[i]],o=!1):(c=JSON.parse(JSON.stringify(n(i,a[i]))),s=[c[i]],o=!0,f.push(u+": "+d),f.push("**** Invalid data. Reseting. ****")):(c=r,s=[c[i]],o=!0,f.push(u+": "+d),f.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:s,update:o,alerts:f}}}},e125:function(e,t,n){"use strict";n.r(t),n.d(t,"feature_data_table",function(){return c}),n.d(t,"feature_validate",function(){return d}),n.d(t,"has_feature",function(){return l}),n.d(t,"get_feature",function(){return v}),n.d(t,"exclusive_beam",function(){return i}),n.d(t,"cleaned_feature",function(){return h}),n.d(t,"filter_data_table",function(){return o});n("6762");var r=n("706d"),u=[{feature:"Rechargeable",cost:1.1},{feature:"Thrown",cost:1.2},{feature:"Quick",cost:2},{feature:"Hyper",cost:7.5},{feature:"Beam Shield",cost:1.5,exclusive_beam_shield:!0},{feature:"Variable Beam Shield",cost:2,exclusive_beam_shield:!0}],i=u.filter(function(e){return"undefined"!==typeof e.exclusive_beam_shield}),a=["feature","cost","exclusive_beam_shield"],c=u,s=!1,o=function(e){s=!1,c=e?u.filter(function(e){return"Rechargeable"!=e.feature}):u},f=Object(r["d"])(u,a),d=function(e){return s?f(e):(s=!0,f=Object(r["d"])(c,a),f(e))},l=function(e,t){return Object(r["c"])(c)(e,t)},v=function(e,t){return Object(r["b"])(c,l)(e,t)},p=function(e,t,n){var r=null;switch(e.toLowerCase()){case"exclusive_beam":r=i;break}return null!==r&&r.some(function(e){return e[t]==n})},h=function(e,t){var n=!1,r=!1,u=[],i=[];if(void 0===e||void 0===t){i.push("Mek_EMW-Feature: ");var a=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return i.push(a),{cleaned_array:[],update:!0,key_list:[],alerts:i}}var c=e.reduceRight(function(e,a){if(void 0===a[t])return i.push("Mek_EMW-Feature: "+JSON.stringify(a)),i.push("**** Missing primary key. Ignoring. ****"),e;var c=a;if(d(a)||(i.push("Mek_EMW-Feature: "+JSON.stringify(a)),i.push("**** Invalid data, attempting to reset. ****"),c=v(t,a[t]),a=c,r=!0),null===c)return i.push("**** Unable to reset. No matching data. ****"),r=!0,e;var s=p("exclusive_beam",t,a[t]);return s&&!n?(e.push(a),n=!0,u.push(a[t]),e):s&&n?(i.push("Mek_EMW-Feature: "+a),i.push("**** Duplicate exclusive EMW data. Ignoring. ****"),r=!0,e):(u.includes(a[t])||(e.push(a),u.push(a[t])),e)},[]);return c.reverse(),{cleaned_array:c,update:r,key_list:u,alerts:i}}}}]);