(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-energy-pool-feature"],{"0af0":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},name:"Features",flow:"pkey-col"},on:{"update-selected-data":e.select_feature}})},a=[],u=(r("ac6a"),r("d866")),n=r("706d");let i=[{feature:"Morphable",cost:1.25},{feature:"Fragile",cost:1}],l=["feature","cost"],o=Object(n["d"])(i,l),d=Object(n["c"])(i),p=Object(n["b"])(i,d),h=function(e,t){let r=!1,s=[],a=[],u=JSON.stringify(e);if(void 0===e||void 0===t){a.push("Mek_Energy_Pool-Feature: ");let t=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return a.push(t),{cleaned_array:[],update:!0,key_list:s,alerts:a}}if(0==e.length)return{cleaned_array:[],update:r,key_list:s,alerts:a};let n=e.reduceRight((e,n)=>{if(void 0===n[t])return a.push("Mek_Energy_Pool-Feature: "+u),a.push("**** Missing primary key. Ignoring. ****"),e;let i=n;return o(n)||(a.push("Mek_Energy_Pool-Feature: "+u),a.push("**** Invalid data, attempting to reset. ****"),i=p(t,n[t]),r=!0),null===i?(a.push("**** Unable to reset. No matching data. ****"),r=!0,e):(s.includes(n[t])||(e.push(n),s.push(n[t])),e)},[]);return n=n.reverse(),{cleaned_array:n,update:r,key_list:s,alerts:a}};var c={name:"mek_energy_pool_feature",props:["featureArray"],mixins:[u["a"]],components:{"mek-sub-component-table":()=>r.e("mel_sub-component-table").then(r.bind(null,"09c0"))},data:function(){let e={selected_feature_array:[],pkey:"feature",alerts:[],suppressAlerts:!1};return e},methods:{select_feature:function(e){this.suppressAlerts=!0;let t=this.toggleFeature(this.selected_feature_array,e),r=h(t,this.pkey);t=r.cleaned_array,r.alerts.length>0&&!this.suppressAlerts&&(r.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t),this.suppressAlerts=!1},toggleFeature(e,t){let r=JSON.parse(JSON.stringify(e)),s=r.some(e=>{return e[this.pkey]==t[this.pkey]},this);return s?r.filter(e=>{return e[this.pkey]!=t[this.pkey]},this):(r.push(t),r)}},computed:{feature_table(){return i},selected_keys(){let e=h(this.featureArray,this.pkey);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.$emit("update-feature",e.cleaned_array)),this.$set(this,"selected_feature_array",e.cleaned_array),e.key_list}}},f=c,y=r("2877"),_=Object(y["a"])(f,s,a,!1,null,null,null);t["default"]=_.exports},"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return s}),r.d(t,"c",function(){return a}),r.d(t,"b",function(){return u}),r.d(t,"a",function(){return n});let s=(e,t)=>r=>{if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;let s=e.some(e=>{return!t.some(t=>{return r[t]!=e[t]})});return s},a=e=>(t,r)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==r})},u=(e,t)=>(r,s)=>{let a=null;return t(r,s)&&e.some(e=>{if(e[r]==s)return a=e,!0},void 0),a},n=(e,t,r,s,a)=>(u,n)=>{let i=void 0,l=[],o=!1,d=[],p=JSON.stringify(n);return void 0!==n&&t(u,n[u])?e(n)?(i=JSON.parse(JSON.stringify(n)),l=[i[u]],o=!1):(i=JSON.parse(JSON.stringify(r(u,n[u]))),l=[i[u]],o=!0,d.push(a+": "+p),d.push("**** Invalid data. Reseting. ****")):(i=s,l=[i[u]],o=!0,d.push(a+": "+p),d.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:l,update:o,alerts:d}}},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-energy-pool-feature.17be9399.js.map