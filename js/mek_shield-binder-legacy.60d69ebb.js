(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-binder","mek_shield-binder-data-module"],{"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return p});var r=void 0,i=function(e,t){return function(n){if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;var r=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return r}},s=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},o=function(e,t){return function(n,i){var s=null;return t(n,i)&&e.some(function(e){if(e[n]==i)return s=e,!0},r),s}},p=function(e,t,n,r,i){return function(s,o){var p=void 0,a=[],u=!1,d=[],c=JSON.stringify(o);return void 0!==o&&t(s,o[s])?e(o)?(p=JSON.parse(JSON.stringify(o)),a=[p[s]],u=!1):(p=JSON.parse(JSON.stringify(n(s,o[s]))),a=[p[s]],u=!0,d.push(i+": "+c),d.push("**** Invalid data. Reseting. ****")):(p=r,a=[p[s]],u=!0,d.push(i+": "+c),d.push("**** Invalid data. Reseting to default. ****")),{data:p,key_list:a,update:u,alerts:d}}}},c30e:function(e,t,n){"use strict";n.r(t),n.d(t,"binder_data_table",function(){return i}),n.d(t,"binder_validate",function(){return c}),n.d(t,"has_feature",function(){return _}),n.d(t,"get_feature",function(){return f}),n.d(t,"cleaned_feature",function(){return l}),n.d(t,"create_binder_data_table",function(){return u});var r=n("706d"),i=[],s=[{stopping_power_modifier:0,cost:1,space:0,new_stopping_power:0},{stopping_power_modifier:.25,cost:1.1,space:0,new_stopping_power:0},{stopping_power_modifier:.33,cost:1.2,space:0,new_stopping_power:0},{stopping_power_modifier:.5,cost:1.3,space:0,new_stopping_power:0},{stopping_power_modifier:.66,cost:1.2,space:0,new_stopping_power:0},{stopping_power_modifier:.75,cost:1.1,space:0,new_stopping_power:0}],o=["stopping_power_modifier","cost","space","new_stopping_power"],p={stopping_power_modifier:0,cost:1,space:0,new_stopping_power:5},a=!1,u=function(e){a=!1;var t=void 0===e?5:e;i=s.map(function(e){var n=t-Math.floor(t*e.stopping_power_modifier),r=2*(t-n);return{stopping_power_modifier:e.stopping_power_modifier,cost:e.cost,space:r,new_stopping_power:n}})};u(5);var d=Object(r["d"])(i,o),c=function(e){return a?d(e):(a=!0,d=Object(r["d"])(i,o),d(e))},_=function(e,t){return Object(r["c"])(i)(e,t)},f=function(e,t){return Object(r["b"])(i,_)(e,t)},l=Object(r["a"])(c,_,f,p,"Mek_Shield-Binder")},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},da25:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.binder_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{stopping_power_modifier:"-SP",new_stopping_power:"New SP",space:"+Space",cost:"Cost"},name:"Binder",flow:"pkey-row","show-headers":!0,format:{stopping_power_modifier:"percent",cost:"multiplier"}},on:{"update-selected-data":e.select_binder}})},i=[],s=(n("ac6a"),n("d866")),o=n("c30e"),p={name:"mek_shield_binder",props:["binder","base_stopping_power"],mixins:[s["a"]],components:{"mek-sub-component-table":function(){return n.e("mek_sub-component-table").then(n.bind(null,"09c0"))}},data:function(){var e={alerts:[],suppressAlerts:!1,pkey:"stopping_power_modifier",updateBinder:!1};return e},methods:{select_binder:function(e){var t=JSON.parse(JSON.stringify(e));this.$emit("update-binder",t)}},computed:{binder_table:function(){return Object(o["create_binder_data_table"])(this.base_stopping_power),o["binder_data_table"]},selected_keys:function(){var e=this,t=Object(o["cleaned_feature"])(this.pkey,this.binder);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),(t.update||this.updateBinder)&&(this.$emit("alert-generated",!0),this.select_binder(t.data)),this.updateBinder=!1,t.key_list}},watch:{base_stopping_power:function(e,t){e!=t&&(this.suppressAlerts=!0,this.updateBinder=!0)}}},a=p,u=n("2877"),d=Object(u["a"])(a,r,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=mek_shield-binder-legacy.60d69ebb.js.map