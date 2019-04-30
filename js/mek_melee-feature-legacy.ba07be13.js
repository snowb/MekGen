(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee-feature"],{"6b67":function(e,t,r){"use strict";r.r(t),r.d(t,"feature_data_table",function(){return s}),r.d(t,"feature_validate",function(){return l}),r.d(t,"has_feature",function(){return f}),r.d(t,"get_feature",function(){return d}),r.d(t,"shock_exclusive",function(){return i}),r.d(t,"throw_exclusive",function(){return c}),r.d(t,"cleaned_feature",function(){return p});r("6762");var n=r("f499"),u=r.n(n),a=r("706d"),s=[{feature:"Handy",cost:1.5,name:"Handy"},{feature:"Quick",cost:2,name:"Quick"},{feature:"Clumsy",cost:.5,name:"Clumsy"},{feature:"Armor Piercing",cost:2,name:"AP"},{feature:"Entangle",cost:1.25,name:"Entangling"},{feature:"Thrown",cost:1.2,throw_exclusive:!0,name:"Thrown"},{feature:"Returning",cost:1.5,throw_exclusive:!0,name:"Returning"},{feature:"Disruptor",cost:2,name:"Disrupting"},{feature:"Shock (only)",cost:2,shock_exclusive:!0,name:"Shock"},{feature:"Shock (added)",cost:3,shock_exclusive:!0,name:"Shocking"}],i=s.filter(function(e){return"undefined"!==typeof e.shock_exclusive}),c=s.filter(function(e){return"undefined"!==typeof e.throw_exclusive}),o=["feature","cost","name","throw_exclusive","shock_exclusive"],l=Object(a["d"])(s,o),f=Object(a["c"])(s),d=Object(a["b"])(s,f),h=function(e,t,r){var n=null;switch(e.toLowerCase()){case"shock_exclusive":n=i;break;case"throw_exclusive":n=c;break}return null!==n&&n.some(function(e){return e[t]==r})},p=function(e,t){var r=!1,n=!1,a=!1,s=[],i=[];if(void 0===e||void 0===t){i.push("Mek_Melee-Feature: ");var c=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return i.push(c),{cleaned_array:[],update:!0,key_list:[],alerts:i}}var o=e.reduceRight(function(e,c){if(void 0===c[t])return i.push("Mek_Melee-Feature: "+u()(c)),i.push("**** Missing primary key. Ignoring. ****"),e;var o=c;if(l(c)||(i.push("Mek_Melee-Feature: "+u()(c)),i.push("**** Invalid data, attempting to reset. ****"),o=d(t,c[t]),a=!0),null===o)return i.push("**** Unable to reset. No matching data. ****"),a=!0,e;var f=h("shock_exclusive",t,c[t]),p=h("throw_exclusive",t,c[t]);return f&&!r?(e.push(c),r=!0,s.push(c[t]),e):f&&r?(i.push("Mek_Melee-Feature: "+c),i.push("**** Duplicate exclusive Shock data. Ignoring. ****"),a=!0,e):p&&!n?(e.push(c),n=!0,s.push(c[t]),e):p&&n?(i.push("Mek_Melee-Feature: "+c),i.push("**** Duplicate exclusive Throw data. Ignoring. ****"),a=!0,e):(s.includes(c[t])||(e.push(c),s.push(c[t])),e)},[]);return o.reverse(),{cleaned_array:o,update:a,key_list:s,alerts:i}}},"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return c}),r.d(t,"c",function(){return o}),r.d(t,"b",function(){return l}),r.d(t,"a",function(){return f});var n=r("f499"),u=r.n(n),a=r("a745"),s=r.n(a),i=void 0,c=function(e,t){return function(r){if("undefined"===typeof r||!s()(t)||0==t.length)return!1;var n=e.some(function(e){return t.every(function(t){return r[t]==e[t]})});return n}},o=function(e){return function(t,r){return e.some(function(e){return void 0!==e[t]&&e[t]==r})}},l=function(e,t){return function(r,n){var u=null;return t(r,n)&&e.some(function(e){if(e[r]==n)return u=e,!0},i),u}},f=function(e,t,r,n,a){return function(s,i){var c=void 0,o=[],l=!1,f=[],d=u()(i);return void 0!==i&&t(s,i[s])?e(i)?(c=JSON.parse(u()(i)),o=[c[s]],l=!1):(c=JSON.parse(u()(r(s,i[s]))),o=[c[s]],l=!0,f.push(a+": "+d),f.push("**** Invalid data. Reseting. ****")):(c=n,o=[c[s]],l=!0,f.push(a+": "+d),f.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:o,update:l,alerts:f}}}},d866:function(e,t,r){"use strict";r("cadf"),r("551c"),r("f751"),r("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},e7d5:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"pkey-col","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_feature}})},u=[],a=r("f499"),s=r.n(a),i=(r("ac6a"),r("d866")),c=r("6b67"),o={name:"mek_melee_feature",props:["featureArray"],mixins:[i["a"]],components:{"mek-sub-component-table":function(){return r.e("mek_sub-component-table").then(r.bind(null,"09c0"))}},data:function(){var e={alerts:[],pkey:"feature",selected_feature_array:[],suppressAlerts:!1};return e},methods:{select_feature:function(e){var t=this;this.suppressAlerts=!0;var r=this.toggleFeature(this.selected_feature_array,e),n=Object(c["cleaned_feature"])(r,this.pkey);r=n.cleaned_array,n.alerts.length>0&&!this.suppressAlerts&&(n.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),this.publishAlerts(),this.$set(this,"selected_feature_array",r),this.$emit("update-feature",r),this.suppressAlerts=!1},toggleFeature:function(e,t){var r=this,n=JSON.parse(s()(e)),u=n.some(function(e){return e[r.pkey]==t[r.pkey]},this);if(u){var a=n.filter(function(e){return e[r.pkey]!=t[r.pkey]},this);return a}return n.push(t),n}},computed:{feature_table:function(){return c["feature_data_table"]},selected_keys:function(){var e=this,t=Object(c["cleaned_feature"])(this.featureArray,this.pkey);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.$emit("update-feature",t.cleaned_array)),this.$set(this,"selected_feature_array",t.cleaned_array),t.key_list}}},l=o,f=r("2877"),d=Object(f["a"])(l,n,u,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=mek_melee-feature-legacy.ba07be13.js.map