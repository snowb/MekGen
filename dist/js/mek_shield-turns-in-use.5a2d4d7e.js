(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-turns-in-use","mek_shield-turns-in-use-data-module"],{"11fe":function(e,t,s){"use strict";s.r(t),s.d(t,"turns_data_table",function(){return r}),s.d(t,"turns_validate",function(){return a}),s.d(t,"has_feature",function(){return l}),s.d(t,"get_feature",function(){return o}),s.d(t,"cleaned_feature",function(){return d});var n=s("706d");let r=[{time:1,cost:.3},{time:2,cost:.4},{time:3,cost:.5},{time:4,cost:.6},{time:5,cost:.7},{time:7,cost:.8},{time:10,cost:.9},{time:"__INFINITY__",cost:1}],i=["time","cost"],u={time:"X",cost:1},a=Object(n["d"])(r,i),l=Object(n["c"])(r),o=Object(n["b"])(r,l),d=Object(n["a"])(a,l,o,u,"Mek_Shield-Turns-In-Use")},"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return n}),s.d(t,"c",function(){return r}),s.d(t,"b",function(){return i}),s.d(t,"a",function(){return u});let n=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let n=e.some(e=>{return t.every(t=>{return s[t]==e[t]})});return n},r=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},i=(e,t)=>(s,n)=>{let r=null;return t(s,n)&&e.some(e=>{if(e[s]==n)return r=e,!0},void 0),r},u=(e,t,s,n,r)=>(i,u)=>{let a=void 0,l=[],o=!1,d=[],c=JSON.stringify(u);return void 0!==u&&t(i,u[i])?e(u)?(a=JSON.parse(JSON.stringify(u)),l=[a[i]],o=!1):(a=JSON.parse(JSON.stringify(s(i,u[i]))),l=[a[i]],o=!0,d.push(r+": "+c),d.push("**** Invalid data. Reseting. ****")):(a=n,l=[a[i]],o=!0,d.push(r+": "+c),d.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:l,update:o,alerts:d}}},ab5f:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.turns_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{time:"Turns",cost:"Cost"},name:"Turns in Use",flow:"pkey-row","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_turns}})},r=[],i=(s("ac6a"),s("d866")),u=s("11fe"),a={name:"mek_shield_turns_in_use",props:["turnsInUse"],mixins:[i["a"]],components:{"mek-sub-component-table":()=>s.e("mek_sub-component-table").then(s.bind(null,"a949"))},data:function(){let e={pkey:"time",alerts:[],suppressAlerts:!1};return e},methods:{select_turns:function(e){let t=JSON.parse(JSON.stringify(e));t.size=e.size===1/0?1/0:e.size,this.$emit("update-turns-in-use",t)}},computed:{turns_table(){return u["turns_data_table"]},selected_keys(){let e=Object(u["cleaned_feature"])(this.pkey,this.turnsInUse);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_turns(e.data)),e.key_list}}},l=a,o=s("2877"),d=Object(o["a"])(l,n,r,!1,null,null,null);t["default"]=d.exports},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_shield-turns-in-use.5a2d4d7e.js.map