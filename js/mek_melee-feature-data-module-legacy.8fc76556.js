(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee-feature-data-module"],{6762:function(e,n,t){"use strict";var r=t("5ca1"),u=t("c366")(!0);r(r.P,"Array",{includes:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")("includes")},"6b67":function(e,n,t){"use strict";t.r(n),t.d(n,"feature_data_table",function(){return a}),t.d(n,"feature_validate",function(){return f}),t.d(n,"has_feature",function(){return d}),t.d(n,"get_feature",function(){return l}),t.d(n,"shock_exclusive",function(){return o}),t.d(n,"throw_exclusive",function(){return c}),t.d(n,"cleaned_feature",function(){return p});t("6762");var r=t("f499"),u=t.n(r),i=t("706d"),a=[{feature:"Handy",cost:1.5,name:"Handy"},{feature:"Quick",cost:2,name:"Quick"},{feature:"Clumsy",cost:.5,name:"Clumsy"},{feature:"Armor Piercing",cost:2,name:"AP"},{feature:"Entangle",cost:1.25,name:"Entangling"},{feature:"Thrown",cost:1.2,throw_exclusive:!0,name:"Thrown"},{feature:"Returning",cost:1.5,throw_exclusive:!0,name:"Returning"},{feature:"Disruptor",cost:2,name:"Disrupting"},{feature:"Shock (only)",cost:2,shock_exclusive:!0,name:"Shock"},{feature:"Shock (added)",cost:3,shock_exclusive:!0,name:"Shocking"}],o=a.filter(function(e){return"undefined"!==typeof e.shock_exclusive}),c=a.filter(function(e){return"undefined"!==typeof e.throw_exclusive}),s=["feature","cost","name","throw_exclusive","shock_exclusive"],f=Object(i["d"])(a,s),d=Object(i["c"])(a),l=Object(i["b"])(a,d),h=function(e,n,t){var r=null;switch(e.toLowerCase()){case"shock_exclusive":r=o;break;case"throw_exclusive":r=c;break}return null!==r&&r.some(function(e){return e[n]==t})},p=function(e,n){var t=!1,r=!1,i=!1,a=[],o=[];if(void 0===e||void 0===n){o.push("Mek_Melee-Feature: ");var c=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return o.push(c),{cleaned_array:[],update:!0,key_list:[],alerts:o}}var s=e.reduceRight(function(e,c){if(void 0===c[n])return o.push("Mek_Melee-Feature: "+u()(c)),o.push("**** Missing primary key. Ignoring. ****"),e;var s=c;if(f(c)||(o.push("Mek_Melee-Feature: "+u()(c)),o.push("**** Invalid data, attempting to reset. ****"),s=l(n,c[n]),i=!0),null===s)return o.push("**** Unable to reset. No matching data. ****"),i=!0,e;var d=h("shock_exclusive",n,c[n]),p=h("throw_exclusive",n,c[n]);return d&&!t?(e.push(c),t=!0,a.push(c[n]),e):d&&t?(o.push("Mek_Melee-Feature: "+c),o.push("**** Duplicate exclusive Shock data. Ignoring. ****"),i=!0,e):p&&!r?(e.push(c),r=!0,a.push(c[n]),e):p&&r?(o.push("Mek_Melee-Feature: "+c),o.push("**** Duplicate exclusive Throw data. Ignoring. ****"),i=!0,e):(a.includes(c[n])||(e.push(c),a.push(c[n])),e)},[]);return s.reverse(),{cleaned_array:s,update:i,key_list:a,alerts:o}}},"706d":function(e,n,t){"use strict";t.d(n,"d",function(){return c}),t.d(n,"c",function(){return s}),t.d(n,"b",function(){return f}),t.d(n,"a",function(){return d});var r=t("f499"),u=t.n(r),i=t("a745"),a=t.n(i),o=void 0,c=function(e,n){return function(t){if("undefined"===typeof t||!a()(n)||0==n.length)return!1;var r=e.some(function(e){return n.every(function(n){return t[n]==e[n]})});return r}},s=function(e){return function(n,t){return e.some(function(e){return void 0!==e[n]&&e[n]==t})}},f=function(e,n){return function(t,r){var u=null;return n(t,r)&&e.some(function(e){if(e[t]==r)return u=e,!0},o),u}},d=function(e,n,t,r,i){return function(a,o){var c=void 0,s=[],f=!1,d=[],l=u()(o);return void 0!==o&&n(a,o[a])?e(o)?(c=JSON.parse(u()(o)),s=[c[a]],f=!1):(c=JSON.parse(u()(t(a,o[a]))),s=[c[a]],f=!0,d.push(i+": "+l),d.push("**** Invalid data. Reseting. ****")):(c=r,s=[c[a]],f=!0,d.push(i+": "+l),d.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:s,update:f,alerts:d}}}},a21f:function(e,n,t){var r=t("584a"),u=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return u.stringify.apply(u,arguments)}},f499:function(e,n,t){e.exports=t("a21f")}}]);
//# sourceMappingURL=mek_melee-feature-data-module-legacy.8fc76556.js.map