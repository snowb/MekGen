(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-shield-type"],{"45a6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.type_table,headers:{name:""},name:"Type",flow:"col",showHeaders:!1,selectedIndices:e.type_index},on:{"update-selected-indices":e.select_type}})},s=[],o=n("072f"),i=n("8fcf"),p={name:"mek_shield_type",props:["type"],mixins:[o["a"],i["a"]],components:{"mek-sub-component-table":()=>n.e("chunk-0a2ef8c8").then(n.bind(null,"97ea"))},data:function(){let e={type_table:[{name:"Standard"},{name:"Active"},{name:"Reactive"}]};return e},methods:{select_type:function(e){this.$emit("update-type",this.type_table[e].name.toLowerCase())}},computed:{type_index(){let e=0;return this.type_table.some((t,n)=>{if(t.name.toLowerCase()==this.type.toLowerCase())return e=n,!0},this),[e]}}},l=p,c=n("2877"),m=Object(c["a"])(l,a,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=mek-shield-type.0c1bed30.js.map