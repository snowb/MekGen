(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy_pool-pool","mek_energy_pool-pool-data-module"],{"5d4a":function(e,t,a){"use strict";a.r(t),a.d(t,"energy_pool_data_table",function(){return r}),a.d(t,"energy_pool_validate",function(){return s}),a.d(t,"has_feature",function(){return c}),a.d(t,"get_feature",function(){return l}),a.d(t,"cleaned_feature",function(){return u});var n=a("706d"),r=[{cost:10,power_available:0,max_power:50,damage_capacity:5},{cost:10,power_available:5,max_power:25,damage_capacity:4},{cost:20,power_available:10,max_power:40,damage_capacity:7},{cost:30,power_available:15,max_power:45,damage_capacity:8},{cost:40,power_available:20,max_power:50,damage_capacity:10},{cost:50,power_available:25,max_power:55,damage_capacity:11},{cost:60,power_available:30,max_power:60,damage_capacity:13}],o=["power_available","cost","max_power","damage_capacity"],i={cost:10,power_available:0,max_power:50,damage_capacity:5},s=Object(n["d"])(r,o),c=Object(n["c"])(r),l=Object(n["b"])(r,c),u=Object(n["a"])(s,c,l,i,"Mek_Energy_Pool-Pool")},"706d":function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"c",function(){return o}),a.d(t,"b",function(){return i}),a.d(t,"a",function(){return s});var n=void 0,r=function(e,t){return function(a){if("undefined"===typeof a||!Array.isArray(t)||0==t.length)return!1;var n=e.some(function(e){return t.every(function(t){return a[t]==e[t]})});return n}},o=function(e){return function(t,a){return e.some(function(e){return void 0!==e[t]&&e[t]==a})}},i=function(e,t){return function(a,r){var o=null;return t(a,r)&&e.some(function(e){if(e[a]==r)return o=e,!0},n),o}},s=function(e,t,a,n,r){return function(o,i){var s=void 0,c=[],l=!1,u=[],p=JSON.stringify(i);return void 0!==i&&t(o,i[o])?e(i)?(s=JSON.parse(JSON.stringify(i)),c=[s[o]],l=!1):(s=JSON.parse(JSON.stringify(a(o,i[o]))),c=[s[o]],l=!0,u.push(r+": "+p),u.push("**** Invalid data. Reseting. ****")):(s=n,c=[s[o]],l=!0,u.push(r+": "+p),u.push("**** Invalid data. Reseting to default. ****")),{data:s,key_list:c,update:l,alerts:u}}}},c3f1:function(e,t,a){"use strict";var n=a("f656"),r=a.n(n);r.a},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},ed4f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.energy_pool_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{cost:"Cost",power_available:"Power Available",max_power:"Maximum Power",damage_capacity:"DC"},name:"Energy Pool",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_energy_pool}})},r=[],o=(a("ac6a"),a("d866")),i=a("5d4a"),s={name:"mek_energy_pool_pool",props:["energyPool"],mixins:[o["a"]],components:{"mek-sub-component-table":function(){return a.e("mek_sub-component-table").then(a.bind(null,"a949"))}},data:function(){var e={pkey:"power_available",alerts:[],suppressAlerts:!1};return e},methods:{select_energy_pool:function(e){this.$emit("update-energy-pool",JSON.parse(JSON.stringify(e)))}},computed:{energy_pool_table:function(){return i["energy_pool_data_table"]},selected_keys:function(){var e=this,t=Object(i["cleaned_feature"])(this.pkey,this.energyPool);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_portfolio_size(t.data)),t.key_list}}},c=s,l=(a("c3f1"),a("2877")),u=Object(l["a"])(c,n,r,!1,null,"34c6e560",null);t["default"]=u.exports},f656:function(e,t,a){}}]);
//# sourceMappingURL=mek_energy_pool-pool-legacy.b521718e.js.map