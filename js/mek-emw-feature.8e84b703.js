(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-feature"],{6168:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.filteredFeatureTable,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"col",showHeaders:!0,format:{cost:"multiplier"},selectedIndices:e.selected_feature_index_array},on:{"update-selected-indices":e.select_feature}})},u=[],s=r("072f"),i=r("8fcf"),f={name:"mek_melee_feature",props:["featureArray","turnsInUse"],mixins:[s["a"],i["a"]],components:{"mek-sub-component-table":()=>r.e("chunk-0a2ef8c8").then(r.bind(null,"97ea"))},data:function(){let e={feature_table:[{feature:"Rechargeable",cost:1.1},{feature:"Thrown",cost:1.2},{feature:"Quick",cost:2},{feature:"Hyper",cost:7.5},{feature:"Beam Shield",cost:1.5,exclusive_beam_shield:!0},{feature:"Variable Beam Shield",cost:2,exclusive_beam_shield:!0}]};return e.exclusive_beam=e.feature_table.filter(e=>{return"undefined"!==typeof e.exclusive_beam_shield}),e.selected_feature_array=[],e},methods:{select_feature:function(e){let t=this.filteredFeatureTable[e].feature,r=this.is_exclusive_feature("exclusive_beam",t),a=Object.assign({},this.filteredFeatureTable[e]),u=this.selected_feature_array.filter(e=>{return e.feature.toLowerCase()!=t.toLowerCase()}),s=this.selected_feature_array.some(e=>{return e.feature.toLowerCase()==t.toLowerCase()},this);r&&(u=u.filter(e=>{return!e.exclusive_beam_shield})),this.$set(this,"selected_feature_array",u),s||this.selected_feature_array.push(a),0==u.length&&this.$set(this,"selected_feature_array",[]),this.$emit("update-feature",this.selected_feature_array)},find_feature_index:function(e){let t;return this.filteredFeatureTable.some(function(r,a){return r.feature.toLowerCase()==e.toLowerCase()&&(t=a,!0)}),t},is_exclusive_feature:function(e,t){return this[e].some(function(e){return e.feature.toLowerCase()==t.toLowerCase()})}},computed:{selected_feature_index_array:function(){let e=[];if(0==this.featureArray.length&&(this.selected_feature_array=[]),1==this.featureArray.length)return this.selected_feature_array=[this.filteredFeatureTable[this.find_feature_index(this.featureArray[0].feature)]],[this.find_feature_index(this.featureArray[0].feature)];let t=!1,r=this,a=[];return this.selected_feature_array=this.featureArray.reduceRight(function(e,u){return r.is_exclusive_feature("exclusive_beam",u.feature)?t||(e.push(u),t=!0,a.push(u.feature.toLowerCase())):a.includes(u.feature.toLowerCase())||(e.push(u),a.push(u.feature.toLowerCase())),e},[]),e=this.selected_feature_array.reduce(function(e,t){return e.push(r.find_feature_index(t.feature)),e},[]),this.featureArray.length!=this.selected_feature_array.length&&this.$emit("update-feature",this.selected_feature_array),e},flat_feature_array:function(){return this.feature_table.reduce(function(e,t){return e.push(t.feature),e},[])},filteredFeatureTable(){return this.turnsInUse?this.feature_table:this.feature_table.filter(e=>{return"Rechargeable"!=e.feature})}},watch:{turnsInUse:function(e,t){if(e&&!t){let e=this.selected_feature_array.filter(e=>{return"undefined"!==typeof e&&"rechargeable"!=e.feature.toLowerCase()});this.$emit("update-feature",e)}}}},n=f,l=r("2877"),c=Object(l["a"])(n,a,u,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=mek-emw-feature.8e84b703.js.map