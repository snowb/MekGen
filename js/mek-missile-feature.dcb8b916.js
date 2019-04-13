(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-missile-feature"],{"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return r}),s.d(t,"c",function(){return a}),s.d(t,"b",function(){return u}),s.d(t,"a",function(){return i});let r=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let r=e.some(e=>{return t.every(t=>{return s[t]==e[t]})});return r},a=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},u=(e,t)=>(s,r)=>{let a=null;return t(s,r)&&e.some(e=>{if(e[s]==r)return a=e,!0},void 0),a},i=(e,t,s,r,a)=>(u,i)=>{let l=void 0,n=[],c=!1,o=[],d=JSON.stringify(i);return void 0!==i&&t(u,i[u])?e(i)?(l=JSON.parse(JSON.stringify(i)),n=[l[u]],c=!1):(l=JSON.parse(JSON.stringify(s(u,i[u]))),n=[l[u]],c=!0,o.push(a+": "+d),o.push("**** Invalid data. Reseting. ****")):(l=r,n=[l[u]],c=!0,o.push(a+": "+d),o.push("**** Invalid data. Reseting to default. ****")),{data:l,key_list:n,update:c,alerts:o}}},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},deb2:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.filteredFeatureTable,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},name:"Features",flow:"pkey-col"},on:{"update-selected-data":e.select_feature}})},a=[],u=(s("ac6a"),s("d866")),i=s("706d");let l=[{feature:"Long Range",cost:1.33},{feature:"Hypervelocity",cost:1.25},{feature:"Tunneling",cost:1.3},{feature:"Home On Jam",cost:2},{feature:"Fuse",cost:1.1},{feature:"Foam",cost:1.33},{feature:"Flare",cost:.5},{feature:"Smoke",cost:.5,exclusive_smoke_scatter:!0},{feature:"Scatter",cost:.5,exclusive_smoke_scatter:!0},{feature:"Countermissile",cost:1,exclusive_counter:!0},{feature:"Variable Countermissile",cost:1.8,exclusive_counter:!0},{feature:"Smoke-Scatter",cost:1,exclusive_smoke_scatter:!0},{feature:"Nuclear",cost:1e3}],n=l.filter(e=>{return"undefined"!==typeof e.exclusive_smoke_scatter}),c=l.filter(e=>{return"undefined"!==typeof e.exclusive_counter}),o=["feature","cost","exclusive_smoke_scatter","exclusive_counter"],d=l,h=!1,p=(e,t)=>{h=!1,d="__NIL__"!=e&&t?l:l.filter(s=>{return("__NIL__"!=e||!["nuclear","scatter","smoke","smoke-scatter"].includes(s.feature.toLowerCase()))&&!(!t&&"home on jam"==s.feature.toLowerCase())})},f=Object(i["d"])(l,o),_=e=>{return h?f(e):(h=!0,f=Object(i["d"])(d,o),f(e))},m=(e,t)=>{return Object(i["c"])(d)(e,t)},y=(e,t)=>{return Object(i["b"])(d,m)(e,t)},k=function(e,t,s){let r=null;switch(e.toLowerCase()){case"exclusive_smoke_scatter":r=n;break;case"exclusive_counter":r=c;break}return null!==r&&r.some(e=>{return e[t]==s})},g=function(e,t){let s=!1,r=!1,a=!1,u=[],i=[];if(0===e.length)return{cleaned_array:[],update:!1,key_list:[],alerts:i};if(void 0===e||void 0===t){i.push("Mek_Missile-Feature: ");let t=void 0===e?"**** Missing feature array. Returning default. ****":"**** No primary key provided. Returning default. ****";return i.push(t),{cleaned_array:[],update:!0,key_list:[],alerts:i}}let l=e.reduceRight((e,l)=>{if(void 0===l[t])return i.push("Mek_Missile-Feature: "+JSON.stringify(l)),i.push("**** Missing primary key. Ignoring. ****"),e;let n=l;if(_(l)||(i.push("Mek_Missile-Feature: "+JSON.stringify(l)),i.push("**** Invalid data, attempting to reset. ****"),n=y(t,l[t]),a=!0),null===n)return i.push("**** Unable to reset. No matching data. ****"),a=!0,e;let c=k("exclusive_smoke_scatter",t,l[t]),o=k("exclusive_counter",t,l[t]);return c&&!s?(e.push(l),s=!0,u.push(l[t]),e):c&&s?(i.push("Mek_Missile-Feature: "+l),i.push("**** Duplicate Exclusive SmokeScatter data. Ignoring. ****"),a=!0,e):o&&!r?(e.push(l),r=!0,u.push(l[t]),e):o&&r?(i.push("Mek_Missile-Feature: "+l),i.push("**** Duplicate Exclusive Counter data. Ignoring. ****"),a=!0,e):(u.includes(l[t])||(e.push(l),u.push(l[t])),e)},[]);return l=l.reverse(),0==l.length&&(l=[],a=!0,u=[],i.push("Mek_Missile-Feature: "),i.push("**** Reseting to default ****")),{cleaned_array:l,update:a,key_list:u,alerts:i}};var v={name:"mek_beam_feature",props:["featureArray","blastRadius","smartMissile"],mixins:[u["a"]],components:{"mek-sub-component-table":()=>s.e("chunk-afd6182c").then(s.bind(null,"09c0"))},data:function(){let e={pkey:"feature",alerts:[],suppressAlerts:!1,selected_feature_array:[]};return e},methods:{select_feature:function(e){this.suppressAlerts=!0;let t=this.toggleFeature(this.selected_feature_array,e),s=g(t,this.pkey);t=s.cleaned_array,s.alerts.length>0&&!this.suppressAlerts&&(s.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t),this.suppressAlerts=!1},toggleFeature(e,t){let s=JSON.parse(JSON.stringify(e)),r=s.some(e=>{return e[this.pkey]==t[this.pkey]},this);return r?s.filter(e=>{return e[this.pkey]!=t[this.pkey]},this):(s.push(t),s)}},computed:{filteredFeatureTable(){return p(this.blastRadius,this.smartMissile),d},selected_keys(){this.blastRadius,this.smartMissile;let e=g(this.featureArray,this.pkey);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.$emit("update-feature",e.cleaned_array)),this.$set(this,"selected_feature_array",e.cleaned_array),e.key_list}},watch:{blastRadius:function(e,t){e!=t&&(this.suppressAlerts=!0)},smartMissile:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},b=v,M=s("2877"),x=Object(M["a"])(b,r,a,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=mek-missile-feature.dcb8b916.js.map