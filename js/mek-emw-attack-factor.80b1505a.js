(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-attack-factor"],{"14f3":function(t,a,c){"use strict";c.r(a);var e=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("mek-sub-component-table",{attrs:{items:t.attack_factor_table,headers:{attack_factor:"AF",cost:"Cost"},name:"Attack Factor",flow:"row",showHeaders:!0,format:{cost:"multiplier",attack_factor:"nullzero"},selectedIndices:t.attack_factor_index},on:{"update-selected-indices":t.select_attack_factor}})},o=[],r=c("072f"),s=c("8fcf"),n={name:"mek_emw_attack_factor",props:["attackFactor"],mixins:[r["a"],s["a"]],components:{"mek-sub-component-table":()=>c.e("chunk-0a2ef8c8").then(c.bind(null,"97ea"))},data:function(){let t={attack_factor_table:[{attack_factor:0,cost:1},{attack_factor:1,cost:1.5},{attack_factor:2,cost:2},{attack_factor:3,cost:2.5},{attack_factor:4,cost:3},{attack_factor:5,cost:3.5}]};return t},methods:{select_attack_factor:function(t){this.$emit("update-attack-factor",this.attack_factor_table[t])}},computed:{attack_factor_index:function(){let t=0;return this.attackFactor,this.attack_factor_table.some(function(a,c){return a.attack_factor==this.attackFactor.attack_factor&&(t=c,!0)},this),this.attack_factor_table[t].cost!==this.attackFactor.cost&&this.select_attack_factor(t),[t]}}},f=n,k=c("2877"),_=Object(k["a"])(f,e,o,!1,null,"a47e7b86",null);a["default"]=_.exports}}]);
//# sourceMappingURL=mek-emw-attack-factor.80b1505a.js.map