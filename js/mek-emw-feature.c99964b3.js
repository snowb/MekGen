(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-feature"],{"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return s}),r.d(t,"c",function(){return a}),r.d(t,"b",function(){return u}),r.d(t,"a",function(){return i});let s=(e,t)=>r=>{if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;let s=e.some(e=>{return!t.some(t=>{return r[t]!=e[t]})});return s},a=e=>(t,r)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==r})},u=(e,t)=>(r,s)=>{let a=null;return t(r,s)&&e.some(e=>{if(e[r]==s)return a=e,!0},void 0),a},i=(e,t,r,s,a)=>(u,i)=>{let l=void 0,n=[],h=!1,d=[],c=JSON.stringify(i);return void 0!==i&&t(u,i[u])?e(i)?(l=JSON.parse(JSON.stringify(i)),n=[l[u]],h=!1):(l=JSON.parse(JSON.stringify(r(u,i[u]))),n=[l[u]],h=!0,d.push(a+": "+c),d.push("**** Invalid data. Reseting. ****")):(l=s,n=[l[u]],h=!0,d.push(a+": "+c),d.push("**** Invalid data. Reseting to default. ****")),{data:l,key_list:n,update:h,alerts:d}}},c48b:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"pkey-col","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_feature}})},a=[],u=(r("ac6a"),r("8fcf")),i=r("d866"),l=r("706d");let n=[{feature:"Rechargeable",cost:1.1},{feature:"Thrown",cost:1.2},{feature:"Quick",cost:2},{feature:"Hyper",cost:7.5},{feature:"Beam Shield",cost:1.5,exclusive_beam_shield:!0},{feature:"Variable Beam Shield",cost:2,exclusive_beam_shield:!0}],h=n.filter(e=>{return"undefined"!==typeof e.exclusive_beam_shield}),d=["feature","cost","exclusive_beam_shield"],c=Object(l["d"])(n,d),o=Object(l["c"])(n),p=Object(l["b"])(n,o),f=function(e,t,r){let s=null;switch(e.toLowerCase()){case"exclusive_beam":s=h;break}return null!==s&&s.some(e=>{return e[t]==r})},y=function(e,t){let r=!1,s=!1,a=[],u=[];if(void 0===e||void 0===t){u.push("Mek_EMW-Feature: ");let t=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return u.push(t),{cleaned_array:[],update:!0,key_list:[],alerts:u}}let i=e.reduceRight((e,i)=>{if(void 0===i[t])return u.push("Mek_EMW-Feature: "+JSON.stringify(i)),u.push("**** Missing primary key. Ignoring. ****"),e;let l=i;if(c(i)||(u.push("Mek_EMW-Feature: "+JSON.stringify(i)),u.push("**** Invalid data, attempting to reset. ****"),l=p(t,i[t]),s=!0),null===l)return u.push("**** Unable to reset. No matching data. ****"),s=!0,e;let n=f("exclusive_beam",t,i[t]);return n&&!r?(e.push(i),r=!0,a.push(i[t]),e):n&&r?(u.push("Mek_EMW-Feature: "+i),u.push("**** Duplicate exclusive EMW data. Ignoring. ****"),s=!0,e):(a.includes(i[t])||(e.push(i),a.push(i[t])),e)},[]);return i.reverse(),{cleaned_array:i,update:s,key_list:a,alerts:u}};var m={name:"mek_melee_feature",props:["featureArray","turnsInUse"],mixins:[u["a"],i["a"]],components:{"mek-sub-component-table":()=>r.e("chunk-96bd1ca6").then(r.bind(null,"09c0"))},data:function(){let e={alerts:[],pkey:"feature",suppressAlerts:!1,selected_feature_array:[]};return e},methods:{select_feature:function(e){this.suppressAlerts=!0;let t=this.toggleFeature(this.selected_feature_array,e),r=y(t,this.pkey);t=r.cleaned_array,r.alerts.length>0&&!this.suppressAlerts&&(r.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),this.publishAlerts(),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t),this.suppressAlerts=!1},toggleFeature(e,t){let r=JSON.parse(JSON.stringify(e)),s=r.some(e=>{return e[this.pkey]==t[this.pkey]},this);if(s){let e=r.filter(e=>{return e[this.pkey]!=t[this.pkey]},this);return e}return r.push(t),r}},computed:{feature_table(){return this.turnsInUse?n:n.filter(e=>{return"Rechargeable"!=e.feature})},selected_keys(){let e=y(this.featureArray,this.pkey);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.$emit("update-feature",e.cleaned_array),this.$set(this,"selected_feature_array",e.cleaned_array),e.key_list}}},_=m,b=r("2877"),k=Object(b["a"])(_,s,a,!1,null,null,null);t["default"]=k.exports},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-emw-feature.c99964b3.js.map