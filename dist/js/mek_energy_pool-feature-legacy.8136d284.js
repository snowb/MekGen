(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy_pool-feature"],{"0af0":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},name:"Features",flow:"pkey-col"},on:{"update-selected-data":e.select_feature}})},a=[],s=(r("ac6a"),r("d866")),u=r("46e2"),i={name:"mek_energy_pool_feature",props:["featureArray"],mixins:[s["a"]],components:{"mek-sub-component-table":function(){return r.e("mek_sub-component-table").then(r.bind(null,"09c0"))}},data:function(){var e={selected_feature_array:[],pkey:"feature",alerts:[],suppressAlerts:!1};return e},methods:{select_feature:function(e){var t=this;this.suppressAlerts=!0;var r=this.toggleFeature(this.selected_feature_array,e),n=Object(u["cleaned_feature"])(r,this.pkey);r=n.cleaned_array,n.alerts.length>0&&!this.suppressAlerts&&(n.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),this.$set(this,"selected_feature_array",r),this.$emit("update-feature",r),this.suppressAlerts=!1},toggleFeature:function(e,t){var r=this,n=JSON.parse(JSON.stringify(e)),a=n.some(function(e){return e[r.pkey]==t[r.pkey]},this);return a?n.filter(function(e){return e[r.pkey]!=t[r.pkey]},this):(n.push(t),n)}},computed:{feature_table:function(){return u["feature_data_table"]},selected_keys:function(){var e=this,t=Object(u["cleaned_feature"])(this.featureArray,this.pkey);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.$emit("update-feature",t.cleaned_array)),this.$set(this,"selected_feature_array",t.cleaned_array),t.key_list}}},o=i,l=r("2877"),c=Object(l["a"])(o,n,a,!1,null,null,null);t["default"]=c.exports},"46e2":function(e,t,r){"use strict";r.r(t),r.d(t,"feature_data_table",function(){return a}),r.d(t,"feature_validate",function(){return u}),r.d(t,"has_feature",function(){return i}),r.d(t,"get_feature",function(){return o}),r.d(t,"cleaned_feature",function(){return l});r("6762");var n=r("706d"),a=[{feature:"Morphable",cost:1.25},{feature:"Fragile",cost:1}],s=["feature","cost"],u=Object(n["d"])(a,s),i=Object(n["c"])(a),o=Object(n["b"])(a,i),l=function(e,t){var r=!1,n=[],a=[],s=JSON.stringify(e);if(void 0===e||void 0===t){a.push("Mek_Energy_Pool-Feature: ");var i=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return a.push(i),{cleaned_array:[],update:!0,key_list:n,alerts:a}}if(0==e.length)return{cleaned_array:[],update:r,key_list:n,alerts:a};var l=e.reduceRight(function(e,i){if(void 0===i[t])return a.push("Mek_Energy_Pool-Feature: "+s),a.push("**** Missing primary key. Ignoring. ****"),e;var l=i;return u(i)||(a.push("Mek_Energy_Pool-Feature: "+s),a.push("**** Invalid data, attempting to reset. ****"),l=o(t,i[t]),r=!0),null===l?(a.push("**** Unable to reset. No matching data. ****"),r=!0,e):(n.includes(i[t])||(e.push(i),n.push(i[t])),e)},[]);return l=l.reverse(),{cleaned_array:l,update:r,key_list:n,alerts:a}}},"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return a}),r.d(t,"c",function(){return s}),r.d(t,"b",function(){return u}),r.d(t,"a",function(){return i});var n=void 0,a=function(e,t){return function(r){if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;var n=e.some(function(e){return t.every(function(t){return r[t]==e[t]})});return n}},s=function(e){return function(t,r){return e.some(function(e){return void 0!==e[t]&&e[t]==r})}},u=function(e,t){return function(r,a){var s=null;return t(r,a)&&e.some(function(e){if(e[r]==a)return s=e,!0},n),s}},i=function(e,t,r,n,a){return function(s,u){var i=void 0,o=[],l=!1,c=[],f=JSON.stringify(u);return void 0!==u&&t(s,u[s])?e(u)?(i=JSON.parse(JSON.stringify(u)),o=[i[s]],l=!1):(i=JSON.parse(JSON.stringify(r(s,u[s]))),o=[i[s]],l=!0,c.push(a+": "+f),c.push("**** Invalid data. Reseting. ****")):(i=n,o=[i[s]],l=!0,c.push(a+": "+f),c.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:o,update:l,alerts:c}}}},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_energy_pool-feature-legacy.8136d284.js.map