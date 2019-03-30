(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-feature"],{6168:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"pkey-col","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_feature}})},a=[],n=r("f499"),u=r.n(n),i=(r("ac6a"),r("8fcf")),l=r("d866"),c=(r("6762"),r("daf4")),o=[{feature:"Rechargeable",cost:1.1},{feature:"Thrown",cost:1.2},{feature:"Quick",cost:2},{feature:"Hyper",cost:7.5},{feature:"Beam Shield",cost:1.5,exclusive_beam_shield:!0},{feature:"Variable Beam Shield",cost:2,exclusive_beam_shield:!0}],f=o.filter(function(e){return"undefined"!==typeof e.exclusive_beam_shield}),d=["feature","cost","exclusive_beam_shield"],h=Object(c["d"])(o,d),p=Object(c["c"])(o),m=Object(c["b"])(o,p),_=function(e,t,r){var s=null;switch(e.toLowerCase()){case"exclusive_beam":s=f;break}return null!==s&&s.some(function(e){return e[t]==r})},v=function(e,t){var r=!1,s=!1,a=[],n=[];if(void 0===e||void 0===t){n.push("Mek_EMW-Feature: ");var i=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return n.push(i),{cleaned_array:[],update:!0,key_list:[],alerts:n}}var l=e.reduceRight(function(e,i){if(void 0===i[t])return n.push("Mek_EMW-Feature: "+u()(i)),n.push("**** Missing primary key. Ignoring. ****"),e;var l=i;if(h(i)||(n.push("Mek_EMW-Feature: "+u()(i)),n.push("**** Invalid data, attempting to reset. ****"),l=m(t,i[t]),s=!0),null===l)return n.push("**** Unable to reset. No matching data. ****"),s=!0,e;var c=_("exclusive_beam",t,i[t]);return c&&!r?(e.push(i),r=!0,a.push(i[t]),e):c&&r?(n.push("Mek_EMW-Feature: "+i),n.push("**** Duplicate exclusive EMW data. Ignoring. ****"),s=!0,e):(a.includes(i[t])||(e.push(i),a.push(i[t])),e)},[]);return l.reverse(),{cleaned_array:l,update:s,key_list:a,alerts:n}},y={name:"mek_melee_feature",props:["featureArray","turnsInUse"],mixins:[i["a"],l["a"]],components:{"mek-sub-component-table":function(){return r.e("chunk-5a4d04f7").then(r.bind(null,"97ea"))}},data:function(){var e={alerts:[],pkey:"feature",suppressAlerts:!1,selected_feature_array:[]};return e},methods:{select_feature:function(e){var t=this;this.suppressAlerts=!0;var r=this.toggleFeature(this.selected_feature_array,e),s=v(r,this.pkey);r=s.cleaned_array,s.alerts.length>0&&!this.suppressAlerts&&(s.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),this.publishAlerts(),this.$set(this,"selected_feature_array",r),this.$emit("update-feature",r),this.suppressAlerts=!1},toggleFeature:function(e,t){var r=this,s=JSON.parse(u()(e)),a=s.some(function(e){return e[r.pkey]==t[r.pkey]},this);if(a){var n=s.filter(function(e){return e[r.pkey]!=t[r.pkey]},this);return n}return s.push(t),s}},computed:{feature_table:function(){return this.turnsInUse?o:o.filter(function(e){return"Rechargeable"!=e.feature})},selected_keys:function(){var e=this,t=v(this.featureArray,this.pkey);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.$emit("update-feature",t.cleaned_array),this.$set(this,"selected_feature_array",t.cleaned_array),t.key_list}}},k=y,b=r("2877"),g=Object(b["a"])(k,s,a,!1,null,null,null);t["default"]=g.exports},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,r){"use strict";r.d(t,"d",function(){return l}),r.d(t,"c",function(){return c}),r.d(t,"b",function(){return o}),r.d(t,"a",function(){return f});var s=r("f499"),a=r.n(s),n=r("a745"),u=r.n(n),i=(r("cadf"),r("551c"),r("f751"),r("097d"),void 0),l=function(e,t){return function(r){if("undefined"===typeof r||!u()(t)||0==t.length)return!1;var s=e.some(function(e){return!t.some(function(t){return r[t]!=e[t]})});return s}},c=function(e){return function(t,r){return e.some(function(e){return void 0!==e[t]&&e[t]==r})}},o=function(e,t){return function(r,s){var a=null;return t(r,s)&&e.some(function(e){if(e[r]==s)return a=e,!0},i),a}},f=function(e,t,r,s,n){return function(u,i){var l=void 0,c=[],o=!1,f=[],d=a()(i);return void 0!==i&&t(u,i[u])?e(i)?(l=JSON.parse(a()(i)),c=[l[u]],o=!1):(l=JSON.parse(a()(r(u,i[u]))),c=[l[u]],o=!0,f.push(n+": "+d),f.push("**** Invalid data. Reseting. ****")):(l=s,c=[l[u]],o=!0,f.push(n+": "+d),f.push("**** Invalid data. Reseting to default. ****")),{data:l,key_list:c,update:o,alerts:f}}}}}]);
//# sourceMappingURL=mek-emw-feature-legacy.035eb7eb.js.map