(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-damage"],{"16ce":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},n=[],r=(t("ac6a"),t("f499")),c=t.n(r),d=t("d866"),l=t("706d"),o=Array.apply({},Array(20)).map(function(e,a){var t=a+1,s=t,n=Math.round(3*Math.sqrt(t));return{damage:t,cost:s,range:n}}),m=["damage","cost","range"],u={damage:1,cost:1,range:3},i=Object(l["d"])(o,m),p=Object(l["c"])(o),g=Object(l["b"])(o,p),h=Object(l["a"])(i,p,g,u,"Mek_Projectile-Damage"),b={name:"mek_projectile_damage",props:["damage"],mixins:[d["a"]],components:{"mek-sub-component-table":function(){return t.e("mek_sub-component-table").then(t.bind(null,"09c0"))}},data:function(){var e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){var a=JSON.parse(c()(e));this.$emit("update-damage",a)}},computed:{damage_table:function(){return o},selected_keys:function(){var e=this,a=h(this.pkey,this.damage);return a.alerts.length>0&&!this.suppressAlerts&&(a.alerts.forEach(function(a){e.addAlert(a)}),this.publishAlerts()),a.update&&(this.$emit("alert-generated",!0),this.select_damage(a.data)),a.key_list}}},k=b,_=t("2877"),f=Object(_["a"])(k,s,n,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=mek_projectile-damage-legacy.168cf076.js.map