(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee-feature","mek_melee-feature-data-module"],{"6b67":function(e,t,r){"use strict";r.r(t),r.d(t,"feature_data_table",function(){return a}),r.d(t,"feature_validate",function(){return l}),r.d(t,"has_feature",function(){return c}),r.d(t,"get_feature",function(){return o}),r.d(t,"shock_exclusive",function(){return u}),r.d(t,"throw_exclusive",function(){return n}),r.d(t,"cleaned_feature",function(){return d});var s=r("706d");let a=[{feature:"Handy",cost:1.5,name:"Handy"},{feature:"Quick",cost:2,name:"Quick"},{feature:"Clumsy",cost:.5,name:"Clumsy"},{feature:"Armor Piercing",cost:2,name:"AP"},{feature:"Entangle",cost:1.25,name:"Entangling"},{feature:"Thrown",cost:1.2,throw_exclusive:!0,name:"Thrown"},{feature:"Returning",cost:1.5,throw_exclusive:!0,name:"Returning"},{feature:"Disruptor",cost:2,name:"Disrupting"},{feature:"Shock (only)",cost:2,shock_exclusive:!0,name:"Shock"},{feature:"Shock (added)",cost:3,shock_exclusive:!0,name:"Shocking"}],u=a.filter(e=>{return"undefined"!==typeof e.shock_exclusive}),n=a.filter(e=>{return"undefined"!==typeof e.throw_exclusive}),i=["feature","cost","name","throw_exclusive","shock_exclusive"],l=Object(s["d"])(a,i),c=Object(s["c"])(a),o=Object(s["b"])(a,c),h=function(e,t,r){let s=null;switch(e.toLowerCase()){case"shock_exclusive":s=u;break;case"throw_exclusive":s=n;break}return null!==s&&s.some(e=>{return e[t]==r})},d=function(e,t){let r=!1,s=!1,a=!1,u=[],n=[];if(void 0===e||void 0===t){n.push("Mek_Melee-Feature: ");let t=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return n.push(t),{cleaned_array:[],update:!0,key_list:[],alerts:n}}let i=e.reduceRight((e,i)=>{if(void 0===i[t])return n.push("Mek_Melee-Feature: "+JSON.stringify(i)),n.push("**** Missing primary key. Ignoring. ****"),e;let c=i;if(l(i)||(n.push("Mek_Melee-Feature: "+JSON.stringify(i)),n.push("**** Invalid data, attempting to reset. ****"),c=o(t,i[t]),i=c,a=!0),null===c)return n.push("**** Unable to reset. No matching data. ****"),a=!0,e;let d=h("shock_exclusive",t,i[t]),f=h("throw_exclusive",t,i[t]);return d&&!r?(e.push(i),r=!0,u.push(i[t]),e):d&&r?(n.push("Mek_Melee-Feature: "+i),n.push("**** Duplicate exclusive Shock data. Ignoring. ****"),a=!0,e):f&&!s?(e.push(i),s=!0,u.push(i[t]),e):f&&s?(n.push("Mek_Melee-Feature: "+i),n.push("**** Duplicate exclusive Throw data. Ignoring. ****"),a=!0,e):(u.includes(i[t])||(e.push(i),u.push(i[t])),e)},[]);return i.reverse(),{cleaned_array:i,update:a,key_list:u,alerts:n}}},"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return s}),r.d(t,"c",function(){return a}),r.d(t,"b",function(){return u}),r.d(t,"a",function(){return n});let s=(e,t)=>r=>{if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;let s=e.some(e=>{return t.every(t=>{return r[t]==e[t]})});return s},a=e=>(t,r)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==r})},u=(e,t)=>(r,s)=>{let a=null;return t(r,s)&&e.some(e=>{if(e[r]==s)return a=e,!0},void 0),a},n=(e,t,r,s,a)=>(u,n)=>{let i=void 0,l=[],c=!1,o=[],h=JSON.stringify(n);return void 0!==n&&t(u,n[u])?e(n)?(i=JSON.parse(JSON.stringify(n)),l=[i[u]],c=!1):(i=JSON.parse(JSON.stringify(r(u,n[u]))),l=[i[u]],c=!0,o.push(a+": "+h),o.push("**** Invalid data. Reseting. ****")):(i=s,l=[i[u]],c=!0,o.push(a+": "+h),o.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:l,update:c,alerts:o}}},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},e7d5:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"pkey-col","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_feature}})},a=[],u=(r("ac6a"),r("d866")),n=r("6b67"),i={name:"mek_melee_feature",props:["featureArray"],mixins:[u["a"]],components:{"mek-sub-component-table":()=>r.e("mek_sub-component-table").then(r.bind(null,"09c0"))},data:function(){let e={alerts:[],pkey:"feature",selected_feature_array:[],suppressAlerts:!1};return e},methods:{select_feature:function(e){this.suppressAlerts=!0;let t=this.toggleFeature(this.selected_feature_array,e),r=Object(n["cleaned_feature"])(t,this.pkey);t=r.cleaned_array,r.alerts.length>0&&!this.suppressAlerts&&(r.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),this.publishAlerts(),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t),this.suppressAlerts=!1},toggleFeature(e,t){let r=JSON.parse(JSON.stringify(e)),s=r.some(e=>{return e[this.pkey]==t[this.pkey]},this);if(s){let e=r.filter(e=>{return e[this.pkey]!=t[this.pkey]},this);return e}return r.push(t),r}},computed:{feature_table(){return n["feature_data_table"]},selected_keys(){let e=Object(n["cleaned_feature"])(this.featureArray,this.pkey);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.$emit("update-feature",e.cleaned_array)),this.$set(this,"selected_feature_array",e.cleaned_array),e.key_list}}},l=i,c=r("2877"),o=Object(c["a"])(l,s,a,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=mek_melee-feature.fd3a5eef.js.map