(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-energy-pool-feature"],{"048f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,selectedKeys:e.selected_keys,headers:{feature:"Feature",cost:"Cost"},showHeaders:!0,format:{cost:"multiplier"},name:"Features",flow:"pkey-col"},on:{"update-selected-data":e.select_feature}})},s=[],n=(r("6762"),r("f499")),u=r.n(n),i=r("072f"),l=r("8fcf"),o=r("d866"),c=[{feature:"Morphable",cost:1.25},{feature:"Fragile",cost:1}],f=function(e){if("undefined"===typeof e)return!1;var t=c.some(function(t){return t.feature==e.feature&&t.cost==e.cost});return t},d={name:"mek_energy_pool_feature",props:["featureArray"],mixins:[i["a"],l["a"],o["a"]],components:{"mek-sub-component-table":function(){return r.e("chunk-5a8f0fc3").then(r.bind(null,"97ea"))}},data:function(){var e={selected_feature_array:[],pkey:"feature",alerts:[]};return e},methods:{select_feature:function(e){var t=this.toggleFeature(this.selected_feature_array,e);t=this.cleanFeatureArray(t).cleaned_array,this.publishAlerts(),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t)},cleanFeatureArray:function(e){var t=this,r=this,a=!1,s=[];if(0==e.length)return{cleaned_array:[],update:a,key_list:s};var n=e.reduceRight(function(e,n){if(void 0===n[r.pkey])return r.addAlert("Mek_Energy_Pool-Feature: "+u()(n)),r.addAlert("**** Missing primary key. Ignoring. ****"),e;var i=n;return f(n)||(r.addAlert("Mek_Energy_Pool-Feature: "+u()(n)),r.addAlert("**** Invalid data, attempting to reset. ****"),i=t.get_feature(r.pkey,n[r.pkey]),a=!0),null===i?(r.addAlert("**** Unable to reset. No matching data. ****"),a=!0,e):(s.includes(n[r.pkey])||(e.push(n),s.push(n[r.pkey])),e)},[]);return n=n.reverse(),{cleaned_array:n,update:a,key_list:s}},toggleFeature:function(e,t){var r=this,a=JSON.parse(u()(e)),s=a.some(function(e){return e[r.pkey]==t[r.pkey]},this);return s?a.filter(function(e){return e[r.pkey]!=t[r.pkey]},this):(a.push(t),a)}},computed:{feature_table:function(){return c},selected_keys:function(){var e=this.cleanFeatureArray(this.featureArray);return this.publishAlerts(),e.update&&this.$emit("update-feature",e.cleaned_array),this.$set(this,"selected_feature_array",e.cleaned_array),e.key_list}}},p=d,h=r("2877"),y=Object(h["a"])(p,a,s,!1,null,null,null);t["default"]=y.exports},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-energy-pool-feature-legacy.6ef31505.js.map