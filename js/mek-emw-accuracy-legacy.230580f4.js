(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-accuracy"],{"2edc":function(c,e,a){"use strict";a.r(e);var t=function(){var c=this,e=c.$createElement,a=c._self._c||e;return a("mek-sub-component-table",{attrs:{items:c.accuracy_table,headers:c.headers,name:"Accuracy",flow:"row",showHeaders:!0,format:{cost:"multiplier"},selectedIndices:c.accuracy_index},on:{"update-selected-indices":c.select_accuracy}})},s=[],i=a("072f"),r=a("8fcf"),n={name:"mek_emw_accuracy",props:["accuracy","isBeamShield","isVariableBeamShield"],mixins:[i["a"],r["a"]],components:{"mek-sub-component-table":function(){return a.e("chunk-5a8f0fc3").then(a.bind(null,"97ea"))}},data:function(){var c={accuracy_table:[{accuracy:-2,cost:.6,defense_ability:-4},{accuracy:-1,cost:.8,defense_ability:-3},{accuracy:0,cost:.9,defense_ability:-2},{accuracy:1,cost:1,defense_ability:-1},{accuracy:2,cost:1.5,defense_ability:0},{accuracy:3,cost:2,defense_ability:1}]};return c},methods:{select_accuracy:function(c){this.$emit("update-accuracy",this.accuracy_table[c])}},computed:{accuracy_index:function(){var c=2;return this.accuracy,this.accuracy_table.some(function(e,a){return e.accuracy==this.accuracy.accuracy&&(c=a,!0)},this),this.accuracy_table[c].cost!==this.cost&&this.select_accuracy(c),[c]},headers:function(){return this.isVariableBeamShield?{accuracy:"WA",defense_ability:"DA",cost:"Cost"}:this.isBeamShield?{defense_ability:"DA",cost:"Cost"}:{accuracy:"WA",cost:"Cost"}}}},u=n,o=a("2877"),l=Object(o["a"])(u,t,s,!1,null,"0a92895e",null);e["default"]=l.exports}}]);
//# sourceMappingURL=mek-emw-accuracy-legacy.230580f4.js.map