(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-damage"],{"97c5":function(e,t,a){},"9be7":function(e,t,a){"use strict";var s=a("97c5"),n=a.n(s);n.a},c787:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},n=[],r=(a("ac6a"),a("f499")),u=a.n(r),i=a("072f"),o=a("8fcf"),d=a("d866"),c=void 0,l=Array.apply({},Array(20)).map(function(e,t){var a=t+1,s=a;return{damage:a,cost:s}}),m={damage:1,cost:1},p=function(e){if("undefined"===typeof e)return!1;var t=l.some(function(t){return t.damage==e.damage&&t.cost==e.cost});return t},f=function(e,t){return l.some(function(a){return void 0!==a[e]&&a[e]==t})},h=function(e,t){if(f(e,t)){var a=null;return l.some(function(s){if(s[e]==t)return a=s,!0},c),a}},g=function(e,t){var a=void 0,s=[],n=!1,r=[],i=u()(t);return void 0!==t&&f(e,t[e])?p(t)?(a=JSON.parse(u()(t)),s=[a[e]],n=!1):(a=JSON.parse(u()(h(e,t[e]))),s=[a[e]],n=!0,r.push("Mek_EMW-Damage: "+i),r.push("**** Invalid data. Reseting. ****")):(a=m,s=[a[e]],n=!0,r.push("Mek_EMW-Damage: "+i),r.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:s,update:n,alerts:r}},k={name:"mek_emw_damage",props:["damage"],mixins:[i["a"],o["a"],d["a"]],components:{"mek-sub-component-table":function(){return a.e("chunk-5a8f0fc3").then(a.bind(null,"97ea"))}},data:function(){var e={pkey:"damage",alerts:[],suppressAlerts:!1};return e},methods:{select_damage:function(e){var t=JSON.parse(u()(e));this.$emit("update-damage",t)}},computed:{damage_table:function(){return l},selected_keys:function(){var e=this,t=g(this.pkey,this.damage);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_damage(t.data),t.key_list}}},v=k,b=(a("9be7"),a("2877")),_=Object(b["a"])(v,s,n,!1,null,"badc57d6",null);t["default"]=_.exports},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-emw-damage-legacy.381f1cde.js.map