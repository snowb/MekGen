(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-damage"],{"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l});var a=n("f499"),r=n.n(a),u=n("a745"),s=n.n(u),d=void 0,i=function(e,t){return function(n){if("undefined"===typeof n||!s()(t)||0==t.length)return!1;var a=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return a}},c=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},o=function(e,t){return function(n,a){var r=null;return t(n,a)&&e.some(function(e){if(e[n]==a)return r=e,!0},d),r}},l=function(e,t,n,a,u){return function(s,d){var i=void 0,c=[],o=!1,l=[],f=r()(d);return void 0!==d&&t(s,d[s])?e(d)?(i=JSON.parse(r()(d)),c=[i[s]],o=!1):(i=JSON.parse(r()(n(s,d[s]))),c=[i[s]],o=!0,l.push(u+": "+f),l.push("**** Invalid data. Reseting. ****")):(i=a,c=[i[s]],o=!0,l.push(u+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:c,update:o,alerts:l}}}},7701:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],u=(n("ac6a"),n("f499")),s=n.n(u),d=n("d866"),i=n("999d"),c={name:"mek_beam_damage",props:["damage"],mixins:[d["a"]],components:{"mek-sub-component-table":function(){return n.e("mek_sub-component-table").then(n.bind(null,"09c0"))}},data:function(){var e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){var t=JSON.parse(s()(e));this.$emit("update-damage",t)}},computed:{damage_table:function(){return i["damage_data_table"]},selected_keys:function(){var e=this,t=Object(i["cleaned_feature"])(this.pkey,this.damage);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_damage(t.data)),t.key_list}}},o=c,l=n("2877"),f=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=f.exports},"999d":function(e,t,n){"use strict";n.r(t),n.d(t,"damage_data_table",function(){return r}),n.d(t,"damage_validate",function(){return d}),n.d(t,"has_feature",function(){return i}),n.d(t,"get_feature",function(){return c}),n.d(t,"cleaned_feature",function(){return o});var a=n("706d"),r=Array.apply({},Array(20)).map(function(e,t){var n=t+1,a=1.5*n,r=Math.round(4*Math.sqrt(n));return{damage:n,cost:a,range:r}}),u=["damage","cost","range"],s={damage:1,cost:1,range:4},d=Object(a["d"])(r,u),i=Object(a["c"])(r),c=Object(a["b"])(r,i),o=Object(a["a"])(d,i,c,s,"Mek_Beam-Damage")},d866:function(e,t,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_beam-damage-legacy.97fa8df8.js.map