(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-damage"],{"706d":function(e,t,a){"use strict";a.d(t,"d",function(){return i}),a.d(t,"c",function(){return c}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return l});var n=a("f499"),r=a.n(n),u=a("a745"),s=a.n(u),d=(a("cadf"),a("551c"),a("f751"),a("097d"),void 0),i=function(e,t){return function(a){if("undefined"===typeof a||!s()(t)||0==t.length)return!1;var n=e.some(function(e){return t.every(function(t){return a[t]==e[t]})});return n}},c=function(e){return function(t,a){return e.some(function(e){return void 0!==e[t]&&e[t]==a})}},o=function(e,t){return function(a,n){var r=null;return t(a,n)&&e.some(function(e){if(e[a]==n)return r=e,!0},d),r}},l=function(e,t,a,n,u){return function(s,d){var i=void 0,c=[],o=!1,l=[],f=r()(d);return void 0!==d&&t(s,d[s])?e(d)?(i=JSON.parse(r()(d)),c=[i[s]],o=!1):(i=JSON.parse(r()(a(s,d[s]))),c=[i[s]],o=!0,l.push(u+": "+f),l.push("**** Invalid data. Reseting. ****")):(i=n,c=[i[s]],o=!0,l.push(u+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:c,update:o,alerts:l}}}},7701:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],u=(a("ac6a"),a("f499")),s=a.n(u),d=a("d866"),i=a("999d"),c={name:"mek_beam_damage",props:["damage"],mixins:[d["a"]],components:{"mek-sub-component-table":function(){return a.e("mek_sub-component-table").then(a.bind(null,"09c0"))}},data:function(){var e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){var t=JSON.parse(s()(e));this.$emit("update-damage",t)}},computed:{damage_table:function(){return i["damage_data_table"]},selected_keys:function(){var e=this,t=Object(i["cleaned_feature"])(this.pkey,this.damage);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_damage(t.data)),t.key_list}}},o=c,l=a("2877"),f=Object(l["a"])(o,n,r,!1,null,null,null);t["default"]=f.exports},"999d":function(e,t,a){"use strict";a.r(t),a.d(t,"damage_data_table",function(){return r}),a.d(t,"damage_validate",function(){return d}),a.d(t,"has_feature",function(){return i}),a.d(t,"get_feature",function(){return c}),a.d(t,"cleaned_feature",function(){return o});var n=a("706d"),r=Array.apply({},Array(20)).map(function(e,t){var a=t+1,n=1.5*a,r=Math.round(4*Math.sqrt(a));return{damage:a,cost:n,range:r}}),u=["damage","cost","range"],s={damage:1,cost:1,range:4},d=Object(n["d"])(r,u),i=Object(n["c"])(r),c=Object(n["b"])(r,i),o=Object(n["a"])(d,i,c,s,"Mek_Beam-Damage")},d866:function(e,t,a){"use strict";a("cadf"),a("551c"),a("f751"),a("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_beam-damage-legacy.f37f7d17.js.map