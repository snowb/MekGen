(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-shield-type"],{"45a6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.type_table,headers:{name:""},name:"Type",flow:"col","show-headers":!1,"selected-indices":e.type_index},on:{"update-selected-indices":e.select_type}})},s=[],i=(n("7f7f"),n("072f")),o=n("8fcf"),c={name:"mek_shield_type",props:["type"],mixins:[i["a"],o["a"]],components:{"mek-sub-component-table":function(){return n.e("chunk-5a8f0fc3").then(n.bind(null,"97ea"))}},data:function(){var e={type_table:[{name:"Standard"},{name:"Active"},{name:"Reactive"}]};return e},methods:{select_type:function(e){this.$emit("update-type",this.type_table[e].name.toLowerCase())}},computed:{type_index:function(){var e=this,t=0;return this.type_table.some(function(n,a){if(n.name.toLowerCase()==e.type.toLowerCase())return t=a,!0},this),[t]}}},p=c,r=n("2877"),l=Object(r["a"])(p,a,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=mek-shield-type-legacy.a696707a.js.map