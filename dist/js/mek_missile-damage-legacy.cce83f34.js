(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-damage","mek_missile-damage-data-module"],{"662e":function(e,t,n){"use strict";var a=n("8234"),r=n.n(a);r.a},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return i});var a=void 0,r=function(e,t){return function(n){if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;var a=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return a}},s=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},u=function(e,t){return function(n,r){var s=null;return t(n,r)&&e.some(function(e){if(e[n]==r)return s=e,!0},a),s}},i=function(e,t,n,a,r){return function(s,u){var i=void 0,d=[],o=!1,c=[],l=JSON.stringify(u);return void 0!==u&&t(s,u[s])?e(u)?(i=JSON.parse(JSON.stringify(u)),d=[i[s]],o=!1):(i=JSON.parse(JSON.stringify(n(s,u[s]))),d=[i[s]],o=!0,c.push(r+": "+l),c.push("**** Invalid data. Reseting. ****")):(i=a,d=[i[s]],o=!0,c.push(r+": "+l),c.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:d,update:o,alerts:c}}}},"7f35":function(e,t,n){"use strict";n.r(t),n.d(t,"damage_data_table",function(){return r}),n.d(t,"damage_validate",function(){return i}),n.d(t,"has_feature",function(){return d}),n.d(t,"get_feature",function(){return o}),n.d(t,"cleaned_feature",function(){return c});var a=n("706d"),r=Array.apply({},Array(20)).map(function(e,t){var n=t+1,a=n/10,r=Math.round(3.5*Math.sqrt(n));return{damage:n,cost:a,range:r}}),s=["damage","cost","range"],u={damage:1,cost:.1,range:4},i=Object(a["d"])(r,s),d=Object(a["c"])(r),o=Object(a["b"])(r,d),c=Object(a["a"])(i,d,o,u,"Mek_Missile-Damage")},8234:function(e,t,n){},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},d899:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],s=(n("ac6a"),n("d866")),u=n("7f35"),i={name:"mek_missile_damage",props:["damage"],mixins:[s["a"]],components:{"mek-sub-component-table":function(){return n.e("mek_sub-component-table").then(n.bind(null,"a949"))}},data:function(){var e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){var t=JSON.parse(JSON.stringify(e));this.$emit("update-damage",t)}},computed:{damage_table:function(){return u["damage_data_table"]},selected_keys:function(){var e=this,t=Object(u["cleaned_feature"])(this.pkey,this.damage);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_damage(t.data)),t.key_list}}},d=i,o=(n("662e"),n("2877")),c=Object(o["a"])(d,a,r,!1,null,"f3d7da76",null);t["default"]=c.exports}}]);
//# sourceMappingURL=mek_missile-damage-legacy.cce83f34.js.map