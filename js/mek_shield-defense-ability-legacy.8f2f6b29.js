(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-defense-ability"],{e030:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.da_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{da:"DA",cost:"Cost"},name:"Defense Ability",flow:"pkey-row","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_da}})},n=[],c=(s("ac6a"),s("f499")),l=s.n(c),d=s("d866"),i=s("706d"),o=[{da:-4,cost:.6,name:"Micro"},{da:-3,cost:.8,name:"Small"},{da:-2,cost:1,name:"Medium"},{da:-1,cost:1.25,name:"Large"},{da:0,cost:1.5,name:"Huge"}],r=["da","cost"],u={da:-2,cost:1},p=Object(i["d"])(o,r),m=Object(i["c"])(o),b=Object(i["b"])(o,m),f=Object(i["a"])(p,m,b,u,"Mek_Shield-Defense-Accuracy"),h={name:"mek_shield_defense_ability",props:["defense_ability","cost"],mixins:[d["a"]],components:{"mek-sub-component-table":function(){return s.e("mek_sub-component-table").then(s.bind(null,"09c0"))}},data:function(){var e={alerts:[],pkey:"da",suppressAlerts:!1};return e},methods:{select_da:function(e){var t=JSON.parse(l()(e));this.$emit("update-defense-ability",t)}},computed:{da_table:function(){return o},selected_keys:function(){var e=this,t=f(this.pkey,this.defense_ability);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_da(t.data)),t.key_list}}},_=h,k=s("2877"),y=Object(k["a"])(_,a,n,!1,null,null,null);t["default"]=y.exports}}]);
//# sourceMappingURL=mek_shield-defense-ability-legacy.8f2f6b29.js.map