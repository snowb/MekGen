(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-damage"],{"03c0":function(e,a,t){"use strict";var s=t("ede3"),n=t.n(s);n.a},d899:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},n=[],r=(t("ac6a"),t("f499")),c=t.n(r),d=t("d866"),m=t("706d"),i=Array.apply({},Array(20)).map(function(e,a){var t=a+1,s=t/10,n=Math.round(3.5*Math.sqrt(t));return{damage:t,cost:s,range:n}}),o=["damage","cost","range"],l={damage:1,cost:.1,range:4},u=Object(m["d"])(i,o),p=Object(m["c"])(i),g=Object(m["b"])(i,p),b=Object(m["a"])(u,p,g,l,"Mek_Missile-Damage"),h={name:"mek_missile_damage",props:["damage"],mixins:[d["a"]],components:{"mek-sub-component-table":function(){return t.e("mek_sub-component-table").then(t.bind(null,"09c0"))}},data:function(){var e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){var a=JSON.parse(c()(e));this.$emit("update-damage",a)}},computed:{damage_table:function(){return i},selected_keys:function(){var e=this,a=b(this.pkey,this.damage);return a.alerts.length>0&&!this.suppressAlerts&&(a.alerts.forEach(function(a){e.addAlert(a)}),this.publishAlerts()),a.update&&(this.$emit("alert-generated",!0),this.select_damage(a.data)),a.key_list}}},k=h,f=(t("03c0"),t("2877")),_=Object(f["a"])(k,s,n,!1,null,"3200bbec",null);a["default"]=_.exports},ede3:function(e,a,t){}}]);
//# sourceMappingURL=mek_missile-damage-legacy.8c646562.js.map