(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-damage"],{"14bb":function(a,e,t){},1963:function(a,e,t){"use strict";var n=t("14bb"),s=t.n(n);s.a},c787:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("mek-sub-component-table",{attrs:{items:a.damage_table,headers:{damage:"Damage",cost:"Cost"},name:"Damage",flow:"row","show-headers":!0,"selected-indices":a.damage_index},on:{"update-selected-indices":a.select_damage}})},s=[],m=(t("ac6a"),t("072f")),d=t("8fcf"),c={name:"mek_emw_damage",props:["damage"],mixins:[m["a"],d["a"]],components:{"mek-sub-component-table":function(){return t.e("chunk-5a8f0fc3").then(t.bind(null,"97ea"))}},data:function(){var a={};return a.damage_table=Array.apply({},Array(20)),a.damage_table.forEach(function(e,t){var n=t+1,s=n;a.damage_table[t]={damage:n,cost:s}},this),a},methods:{select_damage:function(a){this.$emit("update-damage",this.damage_table[a])}},computed:{damage_index:function(){var a=this,e=0;this.damage_table.some(function(t,n){if(a.damage.damage==t.damage)return e=n,!0});var t=!1;switch(!0){case this.damage.damage!=this.damage_table[e].damage:case this.damage.cost!=this.damage_table[e].cost:t=!0}return t&&this.select_damage(e),[e]}}},i=c,o=(t("1963"),t("2877")),r=Object(o["a"])(i,n,s,!1,null,"7ff5492c",null);e["default"]=r.exports}}]);
//# sourceMappingURL=mek-emw-damage-legacy.3bc068fb.js.map