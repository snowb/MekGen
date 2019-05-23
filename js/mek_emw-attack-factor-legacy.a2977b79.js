(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-attack-factor","mek_emw-attack-factor-data-module"],{2170:function(t,e,a){"use strict";a.r(e),a.d(e,"attack_factor_data_table",function(){return n}),a.d(e,"attack_factor_validate",function(){return s}),a.d(e,"has_feature",function(){return u}),a.d(e,"get_feature",function(){return i}),a.d(e,"cleaned_feature",function(){return f});var r=a("706d"),n=[{attack_factor:"__NIL__",cost:1},{attack_factor:1,cost:1.5},{attack_factor:2,cost:2},{attack_factor:3,cost:2.5},{attack_factor:4,cost:3},{attack_factor:5,cost:3.5}],c=["attack_factor","cost"],o={attack_factor:0,cost:1},s=Object(r["d"])(n,c),u=Object(r["c"])(n),i=Object(r["b"])(n,u),f=Object(r["a"])(s,u,i,o,"Mek_EMW-Attack-Factor")},"706d":function(t,e,a){"use strict";a.d(e,"d",function(){return n}),a.d(e,"c",function(){return c}),a.d(e,"b",function(){return o}),a.d(e,"a",function(){return s});var r=void 0,n=function(t,e){return function(a){if("undefined"===typeof a||!Array.isArray(e)||0==e.length)return!1;var r=t.some(function(t){return e.every(function(e){return a[e]==t[e]})});return r}},c=function(t){return function(e,a){return t.some(function(t){return void 0!==t[e]&&t[e]==a})}},o=function(t,e){return function(a,n){var c=null;return e(a,n)&&t.some(function(t){if(t[a]==n)return c=t,!0},r),c}},s=function(t,e,a,r,n){return function(c,o){var s=void 0,u=[],i=!1,f=[],l=JSON.stringify(o);return void 0!==o&&e(c,o[c])?t(o)?(s=JSON.parse(JSON.stringify(o)),u=[s[c]],i=!1):(s=JSON.parse(JSON.stringify(a(c,o[c]))),u=[s[c]],i=!0,f.push(n+": "+l),f.push("**** Invalid data. Reseting. ****")):(s=r,u=[s[c]],i=!0,f.push(n+": "+l),f.push("**** Invalid data. Reseting to default. ****")),{data:s,key_list:u,update:i,alerts:f}}}},b84a:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mek-sub-component-table",{attrs:{items:t.attack_factor_table,pkey:t.pkey,"selected-keys":t.selected_keys,headers:{attack_factor:"AF",cost:"Cost"},name:"Attack Factor",flow:"pkey-row","show-headers":!0,format:{cost:"multiplier",attack_factor:"nullzero"}},on:{"update-selected-data":t.select_attack_factor}})},n=[],c=(a("ac6a"),a("d866")),o=a("2170"),s={name:"mek_emw_attack_factor",props:["attackFactor"],mixins:[c["a"]],components:{"mek-sub-component-table":function(){return a.e("mek_sub-component-table").then(a.bind(null,"09c0"))}},data:function(){var t={alerts:[],pkey:"attack_factor",suppresAlerts:!1};return t},methods:{select_attack_factor:function(t){var e=JSON.parse(JSON.stringify(t));this.$emit("update-attack-factor",e)}},computed:{attack_factor_table:function(){return o["attack_factor_data_table"]},selected_keys:function(){var t=this,e=Object(o["cleaned_feature"])(this.pkey,this.attackFactor);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_attack_factor(e.data)),e.key_list}}},u=s,i=a("2877"),f=Object(i["a"])(u,r,n,!1,null,"4b360ea4",null);e["default"]=f.exports},d866:function(t,e,a){"use strict";e["a"]={methods:{addAlert:function(t){this.alerts.push(t)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_emw-attack-factor-legacy.a2977b79.js.map