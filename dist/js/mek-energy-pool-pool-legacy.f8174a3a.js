(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-energy-pool-pool"],{"696c":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("mek-sub-component-table",{attrs:{items:e.energy_pool_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{cost:"Cost",power_available:"Power Available",max_power:"Maximum Power",damage_capacity:"DC"},name:"Energy Pool",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_energy_pool}})},r=[],s=(t("ac6a"),t("f499")),n=t.n(s),l=t("072f"),i=t("8fcf"),c=t("d866"),p=void 0,u=[{cost:10,power_available:0,max_power:50,damage_capacity:5},{cost:10,power_available:5,max_power:25,damage_capacity:4},{cost:20,power_available:10,max_power:40,damage_capacity:7},{cost:30,power_available:15,max_power:45,damage_capacity:8},{cost:40,power_available:20,max_power:50,damage_capacity:10},{cost:50,power_available:25,max_power:55,damage_capacity:11},{cost:60,power_available:30,max_power:60,damage_capacity:13}],_={cost:10,power_available:0,max_power:50,damage_capacity:5},d=function(e){if("undefined"===typeof e)return!1;var a=u.some(function(a){return a.power_available==e.power_available&&a.cost==e.cost&&a.max_power==e.max_power&&a.damage_capacity==e.damage_capacity});return a},m=function(e,a){return u.some(function(t){return void 0!==t[e]&&t[e]==a})},f=function(e,a){if(m(e,a)){var t=null;return u.some(function(o){if(o[e]==a)return t=o,!0},p),t}},y=function(e,a){var t=void 0,o=[],r=!1,s=[],l=n()(a);return void 0!==a&&m(e,a[e])?d(a)?(t=JSON.parse(n()(a)),o=[t[e]],r=!1):(t=JSON.parse(n()(f(e,a[e]))),o=[t[e]],r=!0,s.push("Mek_Energy_Pool-Pool: "+l),s.push("**** Invalid data. Reseting. ****")):(t=_,o=[t[e]],r=!0,s.push("Mek_Energy_Pool-Pool: "+l),s.push("**** Invalid data. Reseting to default. ****")),{data:t,key_list:o,update:r,alerts:s}},w={name:"mek_energy_pool_pool",props:["energyPool"],mixins:[l["a"],i["a"],c["a"]],components:{"mek-sub-component-table":function(){return t.e("chunk-5a8f0fc3").then(t.bind(null,"97ea"))}},data:function(){var e={pkey:"power_available",alerts:[],suppressAlerts:!1};return e},methods:{select_energy_pool:function(e){this.$emit("update-energy-pool",JSON.parse(n()(e)))}},computed:{energy_pool_table:function(){return u},selected_keys:function(){var e=this,a=y(this.pkey,this.energyPool);return a.alerts.length>0&&!this.suppressAlerts&&(a.alerts.forEach(function(a){e.addAlert(a)}),this.publishAlerts()),a.update&&this.select_portfolio_size(a.data),a.key_list}}},h=w,b=(t("9209"),t("2877")),g=Object(b["a"])(h,o,r,!1,null,"74bfdd53",null);a["default"]=g.exports},"6b28":function(e,a,t){},9209:function(e,a,t){"use strict";var o=t("6b28"),r=t.n(o);r.a},d866:function(e,a,t){"use strict";a["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-energy-pool-pool-legacy.f8174a3a.js.map