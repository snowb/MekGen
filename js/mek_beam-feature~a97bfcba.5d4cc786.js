(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-feature~a97bfcba"],{"000c":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.filteredFeatureTable,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},flow:"pkey-col",name:"Features"},on:{"update-selected-data":e.select_feature}})},a=[],l=(s("ac6a"),s("d866")),u=s("b8e7"),i={name:"mek_beam_feature",props:["featureArray","burstValue"],mixins:[l["a"]],components:{"mek-sub-component-table":()=>s.e("mek_sub-component-table~31ecd969").then(s.bind(null,"a949"))},data:function(){let e={pkey:"feature",alerts:[],suppressAlerts:!1,selected_feature_array:[]};return e},methods:{select_feature:function(e){this.suppressAlerts=!0;let t=this.toggleFeature(this.selected_feature_array,e),s=Object(u["cleaned_feature"])(t,this.pkey);t=s.cleaned_array,s.alerts.length>0&&!this.suppressAlerts&&(s.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t),this.suppressAlerts=!1},toggleFeature(e,t){let s=JSON.parse(JSON.stringify(e)),r=s.some(e=>{return e[this.pkey]==t[this.pkey]},this);return r?s.filter(e=>{return e[this.pkey]!=t[this.pkey]},this):(s.push(t),s)}},computed:{filteredFeatureTable(){return Object(u["filter_data_table"])(this.burstValue),u["feature_data_table"]},selected_keys(){this.burstValue;let e=Object(u["cleaned_feature"])(this.featureArray,this.pkey);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.$emit("update-feature",e.cleaned_array)),this.$set(this,"selected_feature_array",e.cleaned_array),e.key_list}},watch:{burstValue:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},h=i,n=s("2877"),c=Object(n["a"])(h,r,a,!1,null,null,null);t["default"]=c.exports},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);