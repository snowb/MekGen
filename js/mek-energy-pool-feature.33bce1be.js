(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-energy-pool-feature"],{"048f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,selectedKeys:e.selected_keys,headers:{feature:"Feature",cost:"Cost"},showHeaders:!0,format:{cost:"multiplier"},name:"Features",flow:"pkey-col"},on:{"update-selected-data":e.select_feature}})},s=[],l=r("072f"),u=r("8fcf"),i=r("d866");let n=[{feature:"Morphable",cost:1.25},{feature:"Fragile",cost:1}],o=e=>{if("undefined"===typeof e)return!1;let t=n.some(t=>{return t.feature==e.feature&&t.cost==e.cost});return t};var d={name:"mek_energy_pool_feature",props:["featureArray"],mixins:[l["a"],u["a"],i["a"]],components:{"mek-sub-component-table":()=>r.e("chunk-0a2ef8c8").then(r.bind(null,"97ea"))},data:function(){let e={selected_feature_array:[],pkey:"feature",alerts:[]};return e},methods:{select_feature:function(e){let t=this.toggleFeature(this.selected_feature_array,e);t=this.cleanFeatureArray(t).cleaned_array,this.publishAlerts(),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t)},cleanFeatureArray(e){let t=this,r=!1,a=[];if(0==e.length)return{cleaned_array:[],update:r,key_list:a};let s=e.reduceRight((e,s)=>{if(void 0===s[t.pkey])return t.addAlert("Mek_Energy_Pool-Feature: "+JSON.stringify(s)),t.addAlert("**** Missing primary key. Ignoring. ****"),e;let l=s;return o(s)||(t.addAlert("Mek_Energy_Pool-Feature: "+JSON.stringify(s)),t.addAlert("**** Invalid data, attempting to reset. ****"),l=this.get_feature(t.pkey,s[t.pkey]),r=!0),null===l?(t.addAlert("**** Unable to reset. No matching data. ****"),r=!0,e):(a.includes(s[t.pkey])||(e.push(s),a.push(s[t.pkey])),e)},[]);return s=s.reverse(),{cleaned_array:s,update:r,key_list:a}},toggleFeature(e,t){let r=JSON.parse(JSON.stringify(e)),a=r.some(e=>{return e[this.pkey]==t[this.pkey]},this);return a?r.filter(e=>{return e[this.pkey]!=t[this.pkey]},this):(r.push(t),r)}},computed:{feature_table(){return n},selected_keys(){let e=this.cleanFeatureArray(this.featureArray);return this.publishAlerts(),e.update&&this.$emit("update-feature",e.cleaned_array),this.$set(this,"selected_feature_array",e.cleaned_array),e.key_list}}},c=d,h=r("2877"),p=Object(h["a"])(c,a,s,!1,null,null,null);t["default"]=p.exports},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-energy-pool-feature.33bce1be.js.map