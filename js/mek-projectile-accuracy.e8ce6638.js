(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-projectile-accuracy"],{eadc:function(c,a,e){"use strict";e.r(a);var t=function(){var c=this,a=c.$createElement,e=c._self._c||a;return e("mek-sub-component-table",{attrs:{items:c.accuracy_table,headers:{accuracy:"WA",cost:"Cost"},"show-headers":!0,name:"Accuracy",flow:"row",format:{cost:"multiplier"},"selected-indices":c.accuracy_index},on:{"update-selected-indices":c.select_accuracy}})},r=[],u=e("072f"),s=e("8fcf"),n={name:"mek_projectile_accuracy",props:["accuracy"],mixins:[u["a"],s["a"]],components:{"mek-sub-component-table":()=>e.e("chunk-0a2ef8c8").then(e.bind(null,"97ea"))},data:function(){let c={accuracy_table:[{accuracy:-2,cost:.6},{accuracy:-1,cost:.8},{accuracy:0,cost:1},{accuracy:1,cost:1.5},{accuracy:2,cost:2}]};return c},methods:{select_accuracy:function(c){this.$emit("update-accuracy",this.accuracy_table[c])}},computed:{accuracy_index:function(){let c=2;return this.accuracy,this.accuracy_table.some(function(a,e){return a.accuracy==this.accuracy.accuracy&&(c=e,!0)},this),this.accuracy_table[c].cost!==this.accuracy.cost&&this.select_accuracy(c),[c]}}},o=n,i=e("2877"),l=Object(i["a"])(o,t,r,!1,null,"549b452c",null);a["default"]=l.exports}}]);
//# sourceMappingURL=mek-projectile-accuracy.e8ce6638.js.map