(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-burst-value"],{"1d74":function(t,e,u){"use strict";u.r(e);var s=function(){var t=this,e=t.$createElement,u=t._self._c||e;return u("mek-sub-component-table",{attrs:{items:t.burst_value_table,headers:{burst_value:"BV",cost:"Cost"},showHeaders:!0,name:"Burst Value",flow:"row",format:{cost:"multiplier"},selectedIndices:t.burst_value_index},on:{"update-selected-indices":t.select_burst_value}})},a=[],l=u("072f"),r=u("8fcf"),b={name:"mek_beam_burst_value",props:["burstValue"],mixins:[l["a"],r["a"]],components:{"mek-sub-component-table":()=>u.e("chunk-0a2ef8c8").then(u.bind(null,"97ea"))},data:function(){let t={burst_value_table:[{burst_value:1,cost:1},{burst_value:2,cost:1.5},{burst_value:3,cost:2},{burst_value:4,cost:2.5},{burst_value:5,cost:3},{burst_value:6,cost:3.5},{burst_value:7,cost:4},{burst_value:8,cost:4.5},{burst_value:1/0,cost:5}]};return t},methods:{select_burst_value:function(t){this.$emit("update-burst-value",this.burst_value_table[t])}},computed:{burst_value_index:function(){let t=0;return this.burstValue,this.burst_value_table.some(function(e,u){return e.burst_value==this.burstValue.burst_value&&(t=u,!0)},this),this.burst_value_table[t].cost!==this.burstValue.cost&&this.select_burst_value(t),[t]}}},n=b,o=u("2877"),c=Object(o["a"])(n,s,a,!1,null,"506ef3e2",null);e["default"]=c.exports}}]);
//# sourceMappingURL=mek_beam-burst-value.ee1823d7.js.map