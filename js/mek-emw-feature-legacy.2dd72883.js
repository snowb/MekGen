(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-feature"],{6168:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"pkey-col","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_feature}})},a=[],u=r("f499"),n=r.n(u),i=(r("ac6a"),r("cadf"),r("551c"),r("f751"),r("097d"),r("072f")),l=r("8fcf"),c=r("d866"),o=(r("6762"),void 0),f=[{feature:"Rechargeable",cost:1.1},{feature:"Thrown",cost:1.2},{feature:"Quick",cost:2},{feature:"Hyper",cost:7.5},{feature:"Beam Shield",cost:1.5,exclusive_beam_shield:!0},{feature:"Variable Beam Shield",cost:2,exclusive_beam_shield:!0}],h=f.filter(function(e){return"undefined"!==typeof e.exclusive_beam_shield}),p=function(e){if("undefined"===typeof e)return!1;var t=f.some(function(t){return t.feature==e.feature&&t.cost==e.cost&&t.exclusive_beam_shield==e.exclusive_beam_shield});return t},d=function(e,t){return f.some(function(r){return void 0!==r[e]&&r[e]==t})},m=function(e,t){if(d(e,t)){var r=null;return f.some(function(s){if(s[e]==t)return r=s,!0},o),r}},_=function(e,t,r){var s=null;switch(e.toLowerCase()){case"exclusive_beam":s=h;break}return null!==s&&s.some(function(e){return e[t]==r})},y=function(e,t){var r=!1,s=!1,a=[],u=[];if(void 0===e||void 0===t){u.push("Mek_EMW-Feature: ");var i=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return u.push(i),{cleaned_array:[],update:!0,key_list:[],alerts:u}}var l=e.reduceRight(function(e,i){if(void 0===i[t])return u.push("Mek_EMW-Feature: "+n()(i)),u.push("**** Missing primary key. Ignoring. ****"),e;var l=i;if(p(i)||(u.push("Mek_EMW-Feature: "+n()(i)),u.push("**** Invalid data, attempting to reset. ****"),l=m(t,i[t]),s=!0),null===l)return u.push("**** Unable to reset. No matching data. ****"),s=!0,e;var c=_("exclusive_beam",t,i[t]);return c&&!r?(e.push(i),r=!0,a.push(i[t]),e):c&&r?(u.push("Mek_EMW-Feature: "+i),u.push("**** Duplicate exclusive Beam data. Ignoring. ****"),s=!0,e):(a.includes(i[t])||(e.push(i),a.push(i[t])),e)},[]);return l.reverse(),{cleaned_array:l,update:s,key_list:a,alerts:u}},k={name:"mek_melee_feature",props:["featureArray","turnsInUse"],mixins:[i["a"],l["a"],c["a"]],components:{"mek-sub-component-table":function(){return r.e("chunk-5a8f0fc3").then(r.bind(null,"97ea"))}},data:function(){var e={alerts:[],pkey:"feature",suppressAlerts:!1,selected_feature_array:[]};return e},methods:{select_feature:function(e){var t=this;this.suppressAlerts=!0;var r=this.toggleFeature(this.selected_feature_array,e),s=y(r,this.pkey);r=s.cleaned_array,s.alerts.length>0&&!this.suppressAlerts&&(s.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),this.publishAlerts(),this.$set(this,"selected_feature_array",r),this.$emit("update-feature",r),this.suppressAlerts=!1},toggleFeature:function(e,t){var r=this,s=JSON.parse(n()(e)),a=s.some(function(e){return e[r.pkey]==t[r.pkey]},this);if(a){var u=s.filter(function(e){return e[r.pkey]!=t[r.pkey]},this);return u}return s.push(t),s}},computed:{feature_table:function(){return this.turnsInUse?f:f.filter(function(e){return"Rechargeable"!=e.feature})},selected_keys:function(){var e=this,t=y(this.featureArray,this.pkey);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.$emit("update-feature",t.cleaned_array),this.$set(this,"selected_feature_array",t.cleaned_array),t.key_list}}},v=k,b=r("2877"),g=Object(b["a"])(v,s,a,!1,null,null,null);t["default"]=g.exports},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-emw-feature-legacy.2dd72883.js.map