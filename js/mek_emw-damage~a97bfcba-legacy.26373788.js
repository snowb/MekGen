(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-damage~a97bfcba","mek_emw-damage-data-module~5af327fd"],{"1fb3":function(e,t,a){"use strict";var n=a("5e10"),r=a.n(n);r.a},"5e10":function(e,t,a){},"706d":function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return u}),a.d(t,"a",function(){return i});var n=void 0,r=function(e,t){return function(a){if("undefined"===typeof a||!Array.isArray(t)||0==t.length)return!1;var n=e.some(function(e){return t.every(function(t){return a[t]==e[t]})});return n}},s=function(e){return function(t,a){return e.some(function(e){return void 0!==e[t]&&e[t]==a})}},u=function(e,t){return function(a,r){var s=null;return t(a,r)&&e.some(function(e){if(e[a]==r)return s=e,!0},n),s}},i=function(e,t,a,n,r){return function(s,u){var i=void 0,d=[],c=!1,o=[],f=JSON.stringify(u);return void 0!==u&&t(s,u[s])?e(u)?(i=JSON.parse(JSON.stringify(u)),d=[i[s]],c=!1):(i=JSON.parse(JSON.stringify(a(s,u[s]))),d=[i[s]],c=!0,o.push(r+": "+f),o.push("**** Invalid data. Reseting. ****")):(i=n,d=[i[s]],c=!0,o.push(r+": "+f),o.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:d,update:c,alerts:o}}}},"77b7":function(e,t,a){"use strict";a.r(t),a.d(t,"damage_data_table",function(){return i}),a.d(t,"damage_validate",function(){return f}),a.d(t,"has_feature",function(){return m}),a.d(t,"get_feature",function(){return l}),a.d(t,"cleaned_feature",function(){return p}),a.d(t,"create_damage_data_table",function(){return c});var n=a("706d"),r=Array.apply({},Array(20)).map(function(e,t){var a=t+1,n=a;return{damage:a,cost:n}}),s=["damage","cost"],u={damage:1,cost:1},i=JSON.parse(JSON.stringify(r)),d=!1,c=function(e){e?(i=r.map(function(e){var t={damage:e.damage/2,cost:e.cost};return t}),u={damage:.5,cost:1}):(i=JSON.parse(JSON.stringify(r)),u={damage:1,cost:1}),d=!1},o=Object(n["d"])(i,s),f=function(e){return d?o(e):(d=!0,o=Object(n["d"])(i,s),o(e))},m=function(e,t){return Object(n["c"])(i)(e,t)},l=function(e,t){return Object(n["b"])(i,m)(e,t)},p=Object(n["a"])(f,m,l,u,"Mek_EMW-Damage")},"77d9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],s=(a("ac6a"),a("d866")),u=a("77b7"),i={name:"mek_emw_damage",props:["damage","nvBeamShield"],mixins:[s["a"]],components:{"mek-sub-component-table":function(){return a.e("mek_sub-component-table~31ecd969").then(a.bind(null,"a949"))}},data:function(){var e={pkey:"cost",alerts:[],suppressAlerts:!1,updateDamge:!1};return e},methods:{select_damage:function(e){var t=JSON.parse(JSON.stringify(e));this.$emit("update-damage",t)}},computed:{damage_table:function(){return Object(u["create_damage_data_table"])(this.nvBeamShield),u["damage_data_table"]},selected_keys:function(){var e=this,t=Object(u["cleaned_feature"])(this.pkey,this.damage);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),(t.update||this.updateDamge)&&(this.$emit("alert-generated",!0),this.select_damage(t.data)),this.updateDamge=!1,t.key_list}},watch:{nvBeamShield:function(e,t){e!=t&&(this.suppressAlerts=!0,this.updateDamge=!0)}}},d=i,c=(a("1fb3"),a("2877")),o=Object(c["a"])(d,n,r,!1,null,"5a58d8d6",null);t["default"]=o.exports},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);