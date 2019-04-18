(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-projectile-feature"],{"5cc0":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.filteredFeatureTable,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},flow:"pkey-col",name:"Features"},on:{"update-selected-data":e.select_feature}})},s=[],u=r("f499"),a=r.n(u),i=(r("ac6a"),r("d866")),l=(r("6762"),r("2fdb"),r("706d")),c=[{feature:"Long Range",cost:1.33},{feature:"Hypervelocity",cost:1.25},{feature:"Phalanx",cost:.5,exclusive_phalanx:!0},{feature:"Variable Phalanx",cost:1.4,exclusive_phalanx:!0},{feature:"Anti-Personnel",cost:1,exclusive_personnel:!0},{feature:"Variable Anti-Personnel",cost:1.8,exclusive_personnel:!0},{feature:"Anti-Personnel Phalanx",cost:1.6,exclusive_personnel:!0,exclusive_phalanx:!0},{feature:"All Purpose",cost:2.6,exclusive_personnel:!0,exclusive_phalanx:!0}],o=c.filter(function(e){return void 0!==e.exclusive_phalanx}),p=c.filter(function(e){return void 0!==e.exclusive_personnel}),h=c.filter(function(e){return void 0!==e.exclusive_personnel&&void 0!==e.exclusive_phalanx}),f=["feature","cost","exclusive_phalanx","exclusive_personnel"],d=c,v=!1,_=function(e){v=!1,d=e>1?c:c.filter(function(e){return!e.exclusive_phalanx})},x=Object(l["d"])(c,f),y=function(e){return v?x(e):(v=!0,x=Object(l["d"])(d,f),x(e))},k=function(e,t){return Object(l["c"])(d)(e,t)},g=function(e,t){return Object(l["b"])(d,k)(e,t)},m=function(e,t,r){var n=null;switch(e.toLowerCase()){case"exclusive_phalanx":n=JSON.parse(a()(o));break;case"exclusive_personnel":n=JSON.parse(a()(p));break;case"exclusive_personnel_phalanx":n=JSON.parse(a()(h));break}return null!==n&&n.some(function(e){return e[t]==r})},b=function(e,t){var r=!1,n=!1,s=!1,u=!1,i=[],l=[];if(0===e.length)return{cleaned_array:[],update:!1,key_list:[],alerts:l};if(void 0===e||void 0===t){l.push("Mek_Projectile-Feature: ");var c=void 0===e?"**** Missing feature array. Returning default. ****":"**** No primary key provided. Returning default. ****";return l.push(c),{cleaned_array:[],update:!0,key_list:[],alerts:l}}var o=e.reduceRight(function(e,c){if(void 0===c[t])return l.push("Mek_Projectile-Feature: "+a()(c)),l.push("**** Missing primary key. Ignoring. ****"),e;var o=c;if(y(c)||(l.push("Mek_Projectile-Feature: "+a()(c)),l.push("**** Invalid data, attempting to reset. ****"),o=g(t,c[t]),u=!0),null===o)return l.push("**** Unable to reset. No matching data. ****"),u=!0,e;var p=m("exclusive_phalanx",t,c[t]),h=m("exclusive_personnel",t,c[t]),f=m("exclusive_personnel_phalanx",t,c[t]);return f&&!s?(e.push(c),s=!0,n=!0,r=!0,i.push(c[t]),e):f&&s?(l.push("Mek_Projectile-Feature: "+c),l.push("**** Duplicate Exclusive Personnel-Phalanx data. Ignoring. ****"),u=!0,e):p&&!r?(e.push(c),r=!0,s=!0,i.push(c[t]),e):p&&r?(l.push("Mek_Projectile-Feature: "+c),l.push("**** Duplicate Exclusive Phalanx data. Ignoring. ****"),u=!0,e):h&&!n?(e.push(c),n=!0,s=!0,i.push(c[t]),e):h&&n?(l.push("Mek_Projectile-Feature: "+c),l.push("**** Duplicate Exclusive Anti-Personnel data. Ignoring. ****"),u=!0,e):(i.includes(c[t])||(e.push(c),i.push(c[t])),e)},[]);return o=o.reverse(),0==o.length&&(o=[],u=!0,i=[],l.push("Mek_Projectile-Feature: "),l.push("**** Reseting to default ****")),{cleaned_array:o,update:u,key_list:i,alerts:l}},A={name:"mek_projectile_feature",props:["featureArray","burstValue"],mixins:[i["a"]],components:{"mek-sub-component-table":function(){return r.e("chunk-6c105c2e").then(r.bind(null,"09c0"))}},data:function(){var e={pkey:"feature",alerts:[],suppressAlerts:!1,selected_feature_array:[]};return e},methods:{select_feature:function(e){var t=this;this.suppressAlerts=!0;var r=this.toggleFeature(this.selected_feature_array,e),n=b(r,this.pkey);r=n.cleaned_array,n.alerts.length>0&&!this.suppressAlerts&&(n.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),this.$set(this,"selected_feature_array",r),this.$emit("update-feature",r),this.suppressAlerts=!1},toggleFeature:function(e,t){var r=this,n=JSON.parse(a()(e)),s=n.some(function(e){return e[r.pkey]==t[r.pkey]},this);return s?n.filter(function(e){return e[r.pkey]!=t[r.pkey]},this):(n.push(t),n)}},computed:{filteredFeatureTable:function(){return _(this.burstValue),d},selected_keys:function(){var e=this;this.burstValue;var t=b(this.featureArray,this.pkey);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.$emit("update-feature",t.cleaned_array)),this.$set(this,"selected_feature_array",t.cleaned_array),t.key_list}},watch:{burstValue:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},P=A,j=r("2877"),F=Object(j["a"])(P,n,s,!1,null,null,null);t["default"]=F.exports},"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return l}),r.d(t,"c",function(){return c}),r.d(t,"b",function(){return o}),r.d(t,"a",function(){return p});var n=r("f499"),s=r.n(n),u=r("a745"),a=r.n(u),i=(r("cadf"),r("551c"),r("f751"),r("097d"),void 0),l=function(e,t){return function(r){if("undefined"===typeof r||!a()(t)||0==t.length)return!1;var n=e.some(function(e){return t.every(function(t){return r[t]==e[t]})});return n}},c=function(e){return function(t,r){return e.some(function(e){return void 0!==e[t]&&e[t]==r})}},o=function(e,t){return function(r,n){var s=null;return t(r,n)&&e.some(function(e){if(e[r]==n)return s=e,!0},i),s}},p=function(e,t,r,n,u){return function(a,i){var l=void 0,c=[],o=!1,p=[],h=s()(i);return void 0!==i&&t(a,i[a])?e(i)?(l=JSON.parse(s()(i)),c=[l[a]],o=!1):(l=JSON.parse(s()(r(a,i[a]))),c=[l[a]],o=!0,p.push(u+": "+h),p.push("**** Invalid data. Reseting. ****")):(l=n,c=[l[a]],o=!0,p.push(u+": "+h),p.push("**** Invalid data. Reseting to default. ****")),{data:l,key_list:c,update:o,alerts:p}}}},d866:function(e,t,r){"use strict";r("cadf"),r("551c"),r("f751"),r("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-projectile-feature-legacy.8206478e.js.map