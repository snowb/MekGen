(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-binder"],{"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return u}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return p});var r=n("f499"),i=n.n(r),s=n("a745"),o=n.n(s),a=(n("cadf"),n("551c"),n("f751"),n("097d"),void 0),u=function(e,t){return function(n){if("undefined"===typeof n||!o()(t)||0==t.length)return!1;var r=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return r}},c=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},d=function(e,t){return function(n,r){var i=null;return t(n,r)&&e.some(function(e){if(e[n]==r)return i=e,!0},a),i}},p=function(e,t,n,r,s){return function(o,a){var u=void 0,c=[],d=!1,p=[],f=i()(a);return void 0!==a&&t(o,a[o])?e(a)?(u=JSON.parse(i()(a)),c=[u[o]],d=!1):(u=JSON.parse(i()(n(o,a[o]))),c=[u[o]],d=!0,p.push(s+": "+f),p.push("**** Invalid data. Reseting. ****")):(u=r,c=[u[o]],d=!0,p.push(s+": "+f),p.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:c,update:d,alerts:p}}}},c30e:function(e,t,n){"use strict";n.r(t),n.d(t,"binder_data_table",function(){return i}),n.d(t,"binder_validate",function(){return p}),n.d(t,"has_feature",function(){return f}),n.d(t,"get_feature",function(){return l}),n.d(t,"cleaned_feature",function(){return _}),n.d(t,"create_binder_data_table",function(){return c});n("cadf"),n("551c"),n("f751"),n("097d");var r=n("706d"),i=[],s=[{stopping_power_modifier:0,cost:1,space:0},{stopping_power_modifier:.25,cost:1.1,space:0},{stopping_power_modifier:.33,cost:1.2,space:0},{stopping_power_modifier:.5,cost:1.3,space:0},{stopping_power_modifier:.66,cost:1.2,space:0},{stopping_power_modifier:.75,cost:1.1,space:0}],o=["stopping_power_modifier","cost","space"],a={stopping_power_modifier:0,cost:1,space:0},u=!1,c=function(e){u=!1;var t=void 0===e?5:e;i=s.map(function(e){var n=Math.round(t*e.stopping_power_modifier*2*10)/10;return{stopping_power_modifier:e.stopping_power_modifier,cost:e.cost,space:n}})};c(5);var d=Object(r["d"])(i,o),p=function(e){return u?d(e):(u=!0,d=Object(r["d"])(i,o),d(e))},f=function(e,t){return Object(r["c"])(i)(e,t)},l=function(e,t){return Object(r["b"])(i,f)(e,t)},_=Object(r["a"])(p,f,l,a,"Mek_Shield-Binder")},d866:function(e,t,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},da25:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.binder_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{stopping_power_modifier:"-SP",space:"+Space",cost:"Cost"},name:"Binder",flow:"pkey-row","show-headers":!0,format:{stopping_power_modifier:"percent",cost:"multiplier"}},on:{"update-selected-data":e.select_binder}})},i=[],s=(n("ac6a"),n("f499")),o=n.n(s),a=n("d866"),u=n("c30e"),c={name:"mek_shield_binder",props:["binder","base_stopping_power"],mixins:[a["a"]],components:{"mek-sub-component-table":function(){return n.e("mek_sub-component-table").then(n.bind(null,"09c0"))}},data:function(){var e={alerts:[],suppressAlerts:!1,pkey:"stopping_power_modifier",updateBinder:!1};return e},methods:{select_binder:function(e){var t=JSON.parse(o()(e));this.$emit("update-binder",t)}},computed:{binder_table:function(){return Object(u["create_binder_data_table"])(this.base_stopping_power),u["binder_data_table"]},selected_keys:function(){var e=this,t=Object(u["cleaned_feature"])(this.pkey,this.binder);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),(t.update||this.updateBinder)&&(this.$emit("alert-generated",!0),this.select_binder(t.data)),this.updateBinder=!1,t.key_list}},watch:{base_stopping_power:function(e,t){e!=t&&(this.suppressAlerts=!0,this.updateBinder=!0)}}},d=c,p=n("2877"),f=Object(p["a"])(d,r,i,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=mek_shield-binder-legacy.3fb02c0d.js.map