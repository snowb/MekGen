(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-turns-in-use","mek_emw-turns-in-use-data-module"],{"4fd5":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mek-sub-component-table",{attrs:{items:t.turns_table,pkey:t.pkey,"selected-keys":t.selected_keys,headers:{turns:"Turns",cost:"Cost"},name:"Turns in Use",flow:"pkey-row","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":t.select_turns}})},r=[],u=(n("ac6a"),n("d866")),i=n("9e76"),a={name:"mek_emw_turns_in_use",props:["turnsInUse"],mixins:[u["a"]],components:{"mek-sub-component-table":function(){return n.e("mek_sub-component-table").then(n.bind(null,"a949"))}},data:function(){var t={pkey:"turns",suppressAlerts:!1,alerts:[]};return t},methods:{select_turns:function(t){var e=JSON.parse(JSON.stringify(t));e.turns=t.turns===1/0?1/0:t.turns,this.$emit("update-turns-in-use",e)}},computed:{turns_table:function(){return i["turns_data_table"]},selected_keys:function(){var t=this,e=Object(i["cleaned_feature"])(this.pkey,this.turnsInUse);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_turns(e.data)),e.key_list}}},o=a,c=n("2877"),d=Object(c["a"])(o,s,r,!1,null,null,null);e["default"]=d.exports},"706d":function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return i}),n.d(e,"a",function(){return a});var s=void 0,r=function(t,e){return function(n){if("undefined"===typeof n||!Array.isArray(e)||0==e.length)return!1;var s=t.some(function(t){return e.every(function(e){return n[e]==t[e]})});return s}},u=function(t){return function(e,n){return t.some(function(t){return void 0!==t[e]&&t[e]==n})}},i=function(t,e){return function(n,r){var u=null;return e(n,r)&&t.some(function(t){if(t[n]==r)return u=t,!0},s),u}},a=function(t,e,n,s,r){return function(u,i){var a=void 0,o=[],c=!1,d=[],l=JSON.stringify(i);return void 0!==i&&e(u,i[u])?t(i)?(a=JSON.parse(JSON.stringify(i)),o=[a[u]],c=!1):(a=JSON.parse(JSON.stringify(n(u,i[u]))),o=[a[u]],c=!0,d.push(r+": "+l),d.push("**** Invalid data. Reseting. ****")):(a=s,o=[a[u]],c=!0,d.push(r+": "+l),d.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:o,update:c,alerts:d}}}},"9e76":function(t,e,n){"use strict";n.r(e),n.d(e,"turns_data_table",function(){return r}),n.d(e,"turns_validate",function(){return a}),n.d(e,"has_feature",function(){return o}),n.d(e,"get_feature",function(){return c}),n.d(e,"cleaned_feature",function(){return d});var s=n("706d"),r=[{turns:1,cost:.3},{turns:2,cost:.4},{turns:3,cost:.5},{turns:4,cost:.6},{turns:5,cost:.7},{turns:7,cost:.8},{turns:10,cost:.9},{turns:"__INFINITY__",cost:1}],u=["turns","cost"],i={turns:1/0,cost:1},a=Object(s["d"])(r,u),o=Object(s["c"])(r),c=Object(s["b"])(r,o),d=function(t,e){var n=void 0,s=[],r=!1,u=[],d=JSON.stringify(e);return void 0!==e&&o(t,e[t])?a(e)?(n=JSON.parse(JSON.stringify(e)),n.turns=null===n.turns?1/0:n.turns,s=[n[t]],r=!1):(n=JSON.parse(JSON.stringify(c(t,e[t]))),n.turns=null===n.turns?1/0:n.turns,s=[n[t]],r=!0,u.push("Mek_EMW-Turns-In-Use: "+d),u.push("**** Invalid data. Reseting. ****")):(n=i,s=[n[t]],r=!0,u.push("Mek_EMW-Turns-In-Use: "+d),u.push("**** Invalid data. Reseting to default. ****")),{data:n,key_list:s,update:r,alerts:u}}},d866:function(t,e,n){"use strict";e["a"]={methods:{addAlert:function(t){this.alerts.push(t)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_emw-turns-in-use-legacy.d68b9cfe.js.map