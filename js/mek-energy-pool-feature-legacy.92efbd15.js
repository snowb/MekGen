(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-energy-pool-feature"],{"048f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},name:"Features",flow:"pkey-col"},on:{"update-selected-data":e.select_feature}})},n=[],s=(r("6762"),r("f499")),u=r.n(s),i=r("072f"),l=r("8fcf"),o=r("d866"),c=void 0,f=[{feature:"Morphable",cost:1.25},{feature:"Fragile",cost:1}],d=function(e){if("undefined"===typeof e)return!1;var t=f.some(function(t){return t.feature==e.feature&&t.cost==e.cost});return t},p=function(e,t){return f.some(function(r){return void 0!==r[e]&&r[e]==t})},h=function(e,t){if(p(e,t)){var r=null;return f.some(function(a){if(a[e]==t)return r=a,!0},c),r}},y={name:"mek_energy_pool_feature",props:["featureArray"],mixins:[i["a"],l["a"],o["a"]],components:{"mek-sub-component-table":function(){return r.e("chunk-5a8f0fc3").then(r.bind(null,"97ea"))}},data:function(){var e={selected_feature_array:[],pkey:"feature",alerts:[]};return e},methods:{select_feature:function(e){var t=this.toggleFeature(this.selected_feature_array,e);t=this.cleanFeatureArray(t).cleaned_array,this.publishAlerts(),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t)},cleanFeatureArray:function(e){var t=this,r=!1,a=[];if(0==e.length)return{cleaned_array:[],update:r,key_list:a};var n=e.reduceRight(function(e,n){if(void 0===n[t.pkey])return t.addAlert("Mek_Energy_Pool-Feature: "+u()(n)),t.addAlert("**** Missing primary key. Ignoring. ****"),e;var s=n;return d(n)||(t.addAlert("Mek_Energy_Pool-Feature: "+u()(n)),t.addAlert("**** Invalid data, attempting to reset. ****"),s=h(t.pkey,n[t.pkey]),r=!0),null===s?(t.addAlert("**** Unable to reset. No matching data. ****"),r=!0,e):(a.includes(n[t.pkey])||(e.push(n),a.push(n[t.pkey])),e)},[]);return n=n.reverse(),{cleaned_array:n,update:r,key_list:a}},toggleFeature:function(e,t){var r=this,a=JSON.parse(u()(e)),n=a.some(function(e){return e[r.pkey]==t[r.pkey]},this);return n?a.filter(function(e){return e[r.pkey]!=t[r.pkey]},this):(a.push(t),a)}},computed:{feature_table:function(){return f},selected_keys:function(){var e=this.cleanFeatureArray(this.featureArray);return this.publishAlerts(),e.update&&this.$emit("update-feature",e.cleaned_array),this.$set(this,"selected_feature_array",e.cleaned_array),e.key_list}}},_=y,k=r("2877"),m=Object(k["a"])(_,a,n,!1,null,null,null);t["default"]=m.exports},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-energy-pool-feature-legacy.92efbd15.js.map