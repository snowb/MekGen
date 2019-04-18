(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-feature"],{"5cc0":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.filteredFeatureTable,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},flow:"pkey-col",name:"Features"},on:{"update-selected-data":e.select_feature}})},a=[],n=r("f499"),u=r.n(n),l=(r("ac6a"),r("d866")),i=(r("6762"),r("2fdb"),r("706d")),c=[{feature:"Long Range",cost:1.33},{feature:"Hypervelocity",cost:1.25},{feature:"Phalanx",cost:.5,exclusive_phalanx:!0},{feature:"Variable Phalanx",cost:1.4,exclusive_phalanx:!0},{feature:"Anti-Personnel",cost:1,exclusive_personnel:!0},{feature:"Variable Anti-Personnel",cost:1.8,exclusive_personnel:!0},{feature:"Anti-Personnel Phalanx",cost:1.6,exclusive_personnel:!0,exclusive_phalanx:!0},{feature:"All Purpose",cost:2.6,exclusive_personnel:!0,exclusive_phalanx:!0}],o=c.filter(function(e){return void 0!==e.exclusive_phalanx}),p=c.filter(function(e){return void 0!==e.exclusive_personnel}),h=c.filter(function(e){return void 0!==e.exclusive_personnel&&void 0!==e.exclusive_phalanx}),f=["feature","cost","exclusive_phalanx","exclusive_personnel"],d=c,_=!1,v=function(e){_=!1,d=e>1?c:c.filter(function(e){return!e.exclusive_phalanx})},x=Object(i["d"])(c,f),k=function(e){return _?x(e):(_=!0,x=Object(i["d"])(d,f),x(e))},y=function(e,t){return Object(i["c"])(d)(e,t)},b=function(e,t){return Object(i["b"])(d,y)(e,t)},g=function(e,t,r){var s=null;switch(e.toLowerCase()){case"exclusive_phalanx":s=JSON.parse(u()(o));break;case"exclusive_personnel":s=JSON.parse(u()(p));break;case"exclusive_personnel_phalanx":s=JSON.parse(u()(h));break}return null!==s&&s.some(function(e){return e[t]==r})},m=function(e,t){var r=!1,s=!1,a=!1,n=!1,l=[],i=[];if(0===e.length)return{cleaned_array:[],update:!1,key_list:[],alerts:i};if(void 0===e||void 0===t){i.push("Mek_Projectile-Feature: ");var c=void 0===e?"**** Missing feature array. Returning default. ****":"**** No primary key provided. Returning default. ****";return i.push(c),{cleaned_array:[],update:!0,key_list:[],alerts:i}}var o=e.reduceRight(function(e,c){if(void 0===c[t])return i.push("Mek_Projectile-Feature: "+u()(c)),i.push("**** Missing primary key. Ignoring. ****"),e;var o=c;if(k(c)||(i.push("Mek_Projectile-Feature: "+u()(c)),i.push("**** Invalid data, attempting to reset. ****"),o=b(t,c[t]),n=!0),null===o)return i.push("**** Unable to reset. No matching data. ****"),n=!0,e;var p=g("exclusive_phalanx",t,c[t]),h=g("exclusive_personnel",t,c[t]),f=g("exclusive_personnel_phalanx",t,c[t]);return f&&!a?(e.push(c),a=!0,s=!0,r=!0,l.push(c[t]),e):f&&a?(i.push("Mek_Projectile-Feature: "+c),i.push("**** Duplicate Exclusive Personnel-Phalanx data. Ignoring. ****"),n=!0,e):p&&!r?(e.push(c),r=!0,a=!0,l.push(c[t]),e):p&&r?(i.push("Mek_Projectile-Feature: "+c),i.push("**** Duplicate Exclusive Phalanx data. Ignoring. ****"),n=!0,e):h&&!s?(e.push(c),s=!0,a=!0,l.push(c[t]),e):h&&s?(i.push("Mek_Projectile-Feature: "+c),i.push("**** Duplicate Exclusive Anti-Personnel data. Ignoring. ****"),n=!0,e):(l.includes(c[t])||(e.push(c),l.push(c[t])),e)},[]);return o=o.reverse(),0==o.length&&(o=[],n=!0,l=[],i.push("Mek_Projectile-Feature: "),i.push("**** Reseting to default ****")),{cleaned_array:o,update:n,key_list:l,alerts:i}},P={name:"mek_projectile_feature",props:["featureArray","burstValue"],mixins:[l["a"]],components:{"mek-sub-component-table":function(){return r.e("mek_sub-component-table").then(r.bind(null,"09c0"))}},data:function(){var e={pkey:"feature",alerts:[],suppressAlerts:!1,selected_feature_array:[]};return e},methods:{select_feature:function(e){var t=this;this.suppressAlerts=!0;var r=this.toggleFeature(this.selected_feature_array,e),s=m(r,this.pkey);r=s.cleaned_array,s.alerts.length>0&&!this.suppressAlerts&&(s.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),this.$set(this,"selected_feature_array",r),this.$emit("update-feature",r),this.suppressAlerts=!1},toggleFeature:function(e,t){var r=this,s=JSON.parse(u()(e)),a=s.some(function(e){return e[r.pkey]==t[r.pkey]},this);return a?s.filter(function(e){return e[r.pkey]!=t[r.pkey]},this):(s.push(t),s)}},computed:{filteredFeatureTable:function(){return v(this.burstValue),d},selected_keys:function(){var e=this;this.burstValue;var t=m(this.featureArray,this.pkey);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.$emit("update-feature",t.cleaned_array)),this.$set(this,"selected_feature_array",t.cleaned_array),t.key_list}},watch:{burstValue:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},A=P,j=r("2877"),F=Object(j["a"])(A,s,a,!1,null,null,null);t["default"]=F.exports}}]);
//# sourceMappingURL=mek_projectile-feature-legacy.28505737.js.map