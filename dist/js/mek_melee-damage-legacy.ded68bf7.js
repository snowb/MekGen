(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee-damage","mek_melee-damage-data-module"],{"706d":function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return u}),a.d(t,"a",function(){return i});var n=void 0,r=function(e,t){return function(a){if("undefined"===typeof a||!Array.isArray(t)||0==t.length)return!1;var n=e.some(function(e){return t.every(function(t){return a[t]==e[t]})});return n}},s=function(e){return function(t,a){return e.some(function(e){return void 0!==e[t]&&e[t]==a})}},u=function(e,t){return function(a,r){var s=null;return t(a,r)&&e.some(function(e){if(e[a]==r)return s=e,!0},n),s}},i=function(e,t,a,n,r){return function(s,u){var i=void 0,d=[],c=!1,o=[],l=JSON.stringify(u);return void 0!==u&&t(s,u[s])?e(u)?(i=JSON.parse(JSON.stringify(u)),d=[i[s]],c=!1):(i=JSON.parse(JSON.stringify(a(s,u[s]))),d=[i[s]],c=!0,o.push(r+": "+l),o.push("**** Invalid data. Reseting. ****")):(i=n,d=[i[s]],c=!0,o.push(r+": "+l),o.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:d,update:c,alerts:o}}}},a520:function(e,t,a){"use strict";a.r(t),a.d(t,"damage_data_table",function(){return r}),a.d(t,"damage_validate",function(){return i}),a.d(t,"has_feature",function(){return d}),a.d(t,"get_feature",function(){return c}),a.d(t,"cleaned_feature",function(){return o});var n=a("706d"),r=Array.apply({},Array(20)).map(function(e,t){var a=t+1,n=a/2;return{damage:a,cost:n}}),s=["damage","cost"],u={damage:1,cost:.5},i=Object(n["d"])(r,s),d=Object(n["c"])(r),c=Object(n["b"])(r,d),o=Object(n["a"])(i,d,c,u,"Mek_Melee-Damage")},bafe:function(e,t,a){},bbc2:function(e,t,a){"use strict";var n=a("bafe"),r=a.n(n);r.a},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},d928:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.damage_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{damage:"Damage",cost:"Cost"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],s=(a("ac6a"),a("d866")),u=a("a520"),i={name:"mek_melee_damage",props:["damage"],mixins:[s["a"]],components:{"mek-sub-component-table":function(){return a.e("mek_sub-component-table").then(a.bind(null,"09c0"))}},data:function(){var e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){this.$emit("alert-generated",!0);var t=JSON.parse(JSON.stringify(e));this.$emit("update-damage",t)}},computed:{damage_table:function(){return u["damage_data_table"]},selected_keys:function(){var e=this,t=Object(u["cleaned_feature"])(this.pkey,this.damage);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_damage(t.data),t.key_list}}},d=i,c=(a("bbc2"),a("2877")),o=Object(c["a"])(d,n,r,!1,null,"7095922e",null);t["default"]=o.exports}}]);
//# sourceMappingURL=mek_melee-damage-legacy.ded68bf7.js.map