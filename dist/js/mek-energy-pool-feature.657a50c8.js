(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-energy-pool-feature"],{"048f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},name:"Features",flow:"pkey-col"},on:{"update-selected-data":e.select_feature}})},s=[],l=r("072f"),u=r("8fcf"),n=r("d866");let i=[{feature:"Morphable",cost:1.25},{feature:"Fragile",cost:1}],o=e=>{if("undefined"===typeof e)return!1;let t=i.some(t=>{return t.feature==e.feature&&t.cost==e.cost});return t},d=(e,t)=>{return i.some(r=>{return void 0!==r[e]&&r[e]==t})},c=(e,t)=>{if(d(e,t)){let r=null;return i.some(a=>{if(a[e]==t)return r=a,!0},void 0),r}};var h={name:"mek_energy_pool_feature",props:["featureArray"],mixins:[l["a"],u["a"],n["a"]],components:{"mek-sub-component-table":()=>r.e("chunk-0a2ef8c8").then(r.bind(null,"97ea"))},data:function(){let e={selected_feature_array:[],pkey:"feature",alerts:[]};return e},methods:{select_feature:function(e){let t=this.toggleFeature(this.selected_feature_array,e);t=this.cleanFeatureArray(t).cleaned_array,this.publishAlerts(),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t)},cleanFeatureArray(e){let t=this,r=!1,a=[];if(0==e.length)return{cleaned_array:[],update:r,key_list:a};let s=e.reduceRight((e,s)=>{if(void 0===s[t.pkey])return t.addAlert("Mek_Energy_Pool-Feature: "+JSON.stringify(s)),t.addAlert("**** Missing primary key. Ignoring. ****"),e;let l=s;return o(s)||(t.addAlert("Mek_Energy_Pool-Feature: "+JSON.stringify(s)),t.addAlert("**** Invalid data, attempting to reset. ****"),l=c(t.pkey,s[t.pkey]),r=!0),null===l?(t.addAlert("**** Unable to reset. No matching data. ****"),r=!0,e):(a.includes(s[t.pkey])||(e.push(s),a.push(s[t.pkey])),e)},[]);return s=s.reverse(),{cleaned_array:s,update:r,key_list:a}},toggleFeature(e,t){let r=JSON.parse(JSON.stringify(e)),a=r.some(e=>{return e[this.pkey]==t[this.pkey]},this);return a?r.filter(e=>{return e[this.pkey]!=t[this.pkey]},this):(r.push(t),r)}},computed:{feature_table(){return i},selected_keys(){let e=this.cleanFeatureArray(this.featureArray);return this.publishAlerts(),e.update&&this.$emit("update-feature",e.cleaned_array),this.$set(this,"selected_feature_array",e.cleaned_array),e.key_list}}},p=h,f=r("2877"),y=Object(f["a"])(p,a,s,!1,null,null,null);t["default"]=y.exports},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-energy-pool-feature.657a50c8.js.map