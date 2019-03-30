(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-melee-feature"],{d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,r){"use strict";r.d(t,"d",function(){return c}),r.d(t,"c",function(){return o}),r.d(t,"b",function(){return l}),r.d(t,"a",function(){return f});var n=r("f499"),s=r.n(n),u=r("a745"),a=r.n(u),i=(r("cadf"),r("551c"),r("f751"),r("097d"),void 0),c=function(e,t){return function(r){if("undefined"===typeof r||!a()(t)||0==t.length)return!1;var n=e.some(function(e){return!t.some(function(t){return r[t]!=e[t]})});return n}},o=function(e){return function(t,r){return e.some(function(e){return void 0!==e[t]&&e[t]==r})}},l=function(e,t){return function(r,n){var s=null;return t(r,n)&&e.some(function(e){if(e[r]==n)return s=e,!0},i),s}},f=function(e,t,r,n,u){return function(a,i){var c=void 0,o=[],l=!1,f=[],h=s()(i);return void 0!==i&&t(a,i[a])?e(i)?(c=JSON.parse(s()(i)),o=[c[a]],l=!1):(c=JSON.parse(s()(r(a,i[a]))),o=[c[a]],l=!0,f.push(u+": "+h),f.push("**** Invalid data. Reseting. ****")):(c=n,o=[c[a]],l=!0,f.push(u+": "+h),f.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:o,update:l,alerts:f}}}},dd03:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"pkey-col","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_feature}})},s=[],u=r("f499"),a=r.n(u),i=(r("ac6a"),r("8fcf")),c=r("d866"),o=(r("6762"),r("cadf"),r("551c"),r("f751"),r("097d"),r("daf4")),l=[{feature:"Handy",cost:1.5,name:"Handy"},{feature:"Quick",cost:2,name:"Quick"},{feature:"Clumsy",cost:.5,name:"Clumsy"},{feature:"Armor Piercing",cost:2,name:"AP"},{feature:"Entangle",cost:1.25,name:"Entangling"},{feature:"Thrown",cost:1.2,throw_exclusive:!0,name:"Thrown"},{feature:"Returning",cost:1.5,throw_exclusive:!0,name:"Returning"},{feature:"Disruptor",cost:2,name:"Disrupting"},{feature:"Shock (only)",cost:2,shock_exclusive:!0,name:"Shock"},{feature:"Shock (added)",cost:3,shock_exclusive:!0,name:"Shocking"}],f=l.filter(function(e){return"undefined"!==typeof e.shock_exclusive}),h=l.filter(function(e){return"undefined"!==typeof e.throw_exclusive}),d=["feature","cost","name","throw_exclusive","shock_exclusive"],p=Object(o["d"])(l,d),k=Object(o["c"])(l),m=Object(o["b"])(l,k),v=function(e,t,r){var n=null;switch(e.toLowerCase()){case"shock_exclusive":n=f;break;case"throw_exclusive":n=h;break}return null!==n&&n.some(function(e){return e[t]==r})},_=function(e,t){var r=!1,n=!1,s=!1,u=[],i=[];if(void 0===e||void 0===t){i.push("Mek_Melee-Feature: ");var c=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return i.push(c),{cleaned_array:[],update:!0,key_list:[],alerts:i}}var o=e.reduceRight(function(e,c){if(void 0===c[t])return i.push("Mek_Melee-Feature: "+a()(c)),i.push("**** Missing primary key. Ignoring. ****"),e;var o=c;if(p(c)||(i.push("Mek_Melee-Feature: "+a()(c)),i.push("**** Invalid data, attempting to reset. ****"),o=m(t,c[t]),s=!0),null===o)return i.push("**** Unable to reset. No matching data. ****"),s=!0,e;var l=v("shock_exclusive",t,c[t]),f=v("throw_exclusive",t,c[t]);return l&&!r?(e.push(c),r=!0,u.push(c[t]),e):l&&r?(i.push("Mek_Melee-Feature: "+c),i.push("**** Duplicate exclusive Shock data. Ignoring. ****"),s=!0,e):f&&!n?(e.push(c),n=!0,u.push(c[t]),e):f&&n?(i.push("Mek_Melee-Feature: "+c),i.push("**** Duplicate exclusive Throw data. Ignoring. ****"),s=!0,e):(u.includes(c[t])||(e.push(c),u.push(c[t])),e)},[]);return o.reverse(),{cleaned_array:o,update:s,key_list:u,alerts:i}},y={name:"mek_melee_feature",props:["featureArray"],mixins:[i["a"],c["a"]],components:{"mek-sub-component-table":function(){return r.e("chunk-5a4d04f7").then(r.bind(null,"97ea"))}},data:function(){var e={alerts:[],pkey:"feature",selected_feature_array:[],suppressAlerts:!1};return e},methods:{select_feature:function(e){var t=this;this.suppressAlerts=!0;var r=this.toggleFeature(this.selected_feature_array,e),n=_(r,this.pkey);r=n.cleaned_array,n.alerts.length>0&&!this.suppressAlerts&&(n.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),this.publishAlerts(),this.$set(this,"selected_feature_array",r),this.$emit("update-feature",r),this.suppressAlerts=!1},toggleFeature:function(e,t){var r=this,n=JSON.parse(a()(e)),s=n.some(function(e){return e[r.pkey]==t[r.pkey]},this);if(s){var u=n.filter(function(e){return e[r.pkey]!=t[r.pkey]},this);return u}return n.push(t),n}},computed:{feature_table:function(){return l},selected_keys:function(){var e=this,t=_(this.featureArray,this.pkey);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.$emit("update-feature",t.cleaned_array),this.$set(this,"selected_feature_array",t.cleaned_array),t.key_list}}},g=y,b=r("2877"),w=Object(b["a"])(g,n,s,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=mek-melee-feature-legacy.cec57cd0.js.map