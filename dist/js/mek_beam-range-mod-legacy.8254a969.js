(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-range-mod","mek_beam-range-mod-data-module"],{"1d3a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.range_mod_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost"},name:"Range Mod",flow:"pkey-col","show-headers":!0,format:{range_mod:"percent",cost:"multiplier"}},on:{"update-selected-data":e.select_range_mod}})},a=[],s=(n("ac6a"),n("d866")),o=n("8e68"),u={name:"mek_beam_range_mod",props:["rangeMod","baseRange"],mixins:[s["a"]],components:{"mek-sub-component-table":function(){return n.e("mek_sub-component-table").then(n.bind(null,"09c0"))}},data:function(){var e={alerts:[],suppressAlerts:!1,updatedBaseRange:!1,pkey:"range_mod"};return e},methods:{select_range_mod:function(e){var t=JSON.parse(JSON.stringify(e));this.$emit("update-range-mod",t)}},computed:{range_mod_table:function(){return Object(o["create_range_mod_data_table"])(this.baseRange),o["range_mod_data_table"]},selected_keys:function(){var e=this,t=Object(o["cleaned_feature"])(this.pkey,this.rangeMod);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),(t.update||this.updatedBaseRange)&&(this.$emit("alert-generated",!0),this.select_range_mod(t.data)),this.updatedBaseRange=!1,t.key_list}},watch:{baseRange:function(e,t){e!=t&&(this.suppressAlerts=!0,this.updatedBaseRange=!0)}}},d=u,i=n("2877"),c=Object(i["a"])(d,r,a,!1,null,null,null);t["default"]=c.exports},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return u});var r=void 0,a=function(e,t){return function(n){if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;var r=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return r}},s=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},o=function(e,t){return function(n,a){var s=null;return t(n,a)&&e.some(function(e){if(e[n]==a)return s=e,!0},r),s}},u=function(e,t,n,r,a){return function(s,o){var u=void 0,d=[],i=!1,c=[],g=JSON.stringify(o);return void 0!==o&&t(s,o[s])?e(o)?(u=JSON.parse(JSON.stringify(o)),d=[u[s]],i=!1):(u=JSON.parse(JSON.stringify(n(s,o[s]))),d=[u[s]],i=!0,c.push(a+": "+g),c.push("**** Invalid data. Reseting. ****")):(u=r,d=[u[s]],i=!0,c.push(a+": "+g),c.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:d,update:i,alerts:c}}}},"8e68":function(e,t,n){"use strict";n.r(t),n.d(t,"range_mod_data_table",function(){return a}),n.d(t,"range_mod_validate",function(){return g}),n.d(t,"has_feature",function(){return l}),n.d(t,"get_feature",function(){return m}),n.d(t,"cleaned_feature",function(){return _}),n.d(t,"create_range_mod_data_table",function(){return u});var r=n("706d"),a=[],s=[{range_mod:.25,cost:.62,range:1},{range_mod:.5,cost:.75,range:2},{range_mod:.75,cost:.88,range:3},{range_mod:1,cost:1,range:4},{range_mod:1.25,cost:1.12,range:5},{range_mod:1.5,cost:1.25,range:6},{range_mod:1.75,cost:1.38,range:7},{range_mod:2,cost:1.5,range:8},{range_mod:2.5,cost:1.75,range:10},{range_mod:3,cost:2,range:12}],o=!1,u=function(e){var t=void 0===e?4:e;a=s.map(function(e){return e.range=e.range_mod*t,e}),o=!1};u(4);var d=["range_modifier","cost","range"],i={range_mod:1,cost:1,range:3},c=Object(r["d"])(a,d),g=function(e){return o?c(e):(o=!0,c=Object(r["d"])(a,d),c(e))},l=Object(r["c"])(a),m=Object(r["b"])(a,l),_=Object(r["a"])(g,l,m,i,"Mek_Beam-Range-Mod")},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_beam-range-mod-legacy.8254a969.js.map