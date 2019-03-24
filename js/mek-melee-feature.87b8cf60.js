(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-melee-feature"],{d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},dd03:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"pkey-col","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_feature}})},a=[],u=(r("ac6a"),r("072f")),i=r("8fcf"),l=r("d866");let n=[{feature:"Handy",cost:1.5,name:"Handy"},{feature:"Quick",cost:2,name:"Quick"},{feature:"Clumsy",cost:.5,name:"Clumsy"},{feature:"Armor Piercing",cost:2,name:"AP"},{feature:"Entangle",cost:1.25,name:"Entangling"},{feature:"Thrown",cost:1.2,throw_exclusive:!0,name:"Thrown"},{feature:"Returning",cost:1.5,throw_exclusive:!0,name:"Returning"},{feature:"Disruptor",cost:2,name:"Disrupting"},{feature:"Shock (only)",cost:2,shock_exclusive:!0,name:"Shock"},{feature:"Shock (added)",cost:3,shock_exclusive:!0,name:"Shocking"}],o=n.filter(e=>{return"undefined"!==typeof e.shock_exclusive}),c=n.filter(e=>{return"undefined"!==typeof e.throw_exclusive}),h=e=>{if("undefined"===typeof e)return!1;let t=n.some(t=>{return t.feature==e.feature&&t.cost==e.cost&&t.name==e.name&&t.shock_exclusive==e.shock_exclusive&&t.throw_exclusive==e.throw_exclusive});return t},p=(e,t)=>{return n.some(r=>{return void 0!==r[e]&&r[e]==t})},d=(e,t)=>{if(p(e,t)){let r=null;return n.some(s=>{if(s[e]==t)return r=s,!0},void 0),r}},f=function(e,t,r){let s=null;switch(e.toLowerCase()){case"shock_exclusive":s=o;break;case"throw_exclusive":s=c;break}return null!==s&&s.some(e=>{return e[t]==r})},k=function(e,t){let r=!1,s=!1,a=!1,u=[],i=[];if(void 0===e||void 0===t){i.push("Mek_Melee-Feature: ");let t=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return i.push(t),{cleaned_array:[],update:!0,key_list:[],alerts:i}}let l=e.reduceRight((e,l)=>{if(void 0===l[t])return i.push("Mek_Melee-Feature: "+JSON.stringify(l)),i.push("**** Missing primary key. Ignoring. ****"),e;let n=l;if(h(l)||(i.push("Mek_Melee-Feature: "+JSON.stringify(l)),i.push("**** Invalid data, attempting to reset. ****"),n=d(t,l[t]),a=!0),null===n)return i.push("**** Unable to reset. No matching data. ****"),a=!0,e;let o=f("shock_exclusive",t,l[t]),c=f("throw_exclusive",t,l[t]);return o&&!r?(e.push(l),r=!0,u.push(l[t]),e):o&&r?(i.push("Mek_Melee-Feature: "+l),i.push("**** Duplicate exclusive Shock data. Ignoring. ****"),a=!0,e):c&&!s?(e.push(l),s=!0,u.push(l[t]),e):c&&s?(i.push("Mek_Melee-Feature: "+l),i.push("**** Duplicate exclusive Throw data. Ignoring. ****"),a=!0,e):(u.includes(l[t])||(e.push(l),u.push(l[t])),e)},[]);return l.reverse(),{cleaned_array:l,update:a,key_list:u,alerts:i}};var m={name:"mek_melee_feature",props:["featureArray"],mixins:[u["a"],i["a"],l["a"]],components:{"mek-sub-component-table":()=>r.e("chunk-0a2ef8c8").then(r.bind(null,"97ea"))},data:function(){let e={alerts:[],pkey:"feature",selected_feature_array:[],suppressAlerts:!1};return e},methods:{select_feature:function(e){this.suppressAlerts=!0;let t=this.toggleFeature(this.selected_feature_array,e),r=k(t,this.pkey);t=r.cleaned_array,r.alerts.length>0&&!this.suppressAlerts&&(r.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),this.publishAlerts(),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t),this.suppressAlerts=!1},toggleFeature(e,t){let r=JSON.parse(JSON.stringify(e)),s=r.some(e=>{return e[this.pkey]==t[this.pkey]},this);if(s){let e=r.filter(e=>{return e[this.pkey]!=t[this.pkey]},this);return e}return r.push(t),r}},computed:{feature_table(){return n},selected_keys(){let e=k(this.featureArray,this.pkey);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.$emit("update-feature",e.cleaned_array),this.$set(this,"selected_feature_array",e.cleaned_array),e.key_list}}},_=m,y=r("2877"),g=Object(y["a"])(_,s,a,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=mek-melee-feature.87b8cf60.js.map