(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-shield-type"],{"072f":function(e,t,n){"use strict";t["a"]={methods:{selectedItem:function(e,t,n,s){let i="undefined"===typeof s?"":s;return"undefined"===typeof n?this[e]==t?"selected_item":i:this[e]==t?n:i},selectedItemMultiple:function(e,t,n,s){let i="undefined"===typeof s?"":s;return Array.isArray(this[e])?"undefined"===typeof n?this[e].includes(t)?"selected_item":i:this[e].includes(t)?n:i:""}}}},"45a6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.type_table,headers:{name:""},name:"Type",flow:"col","show-headers":!1,"selected-indices":e.type_index},on:{"update-selected-indices":e.select_type}})},i=[],a=n("072f"),l=n("8fcf"),o={name:"mek_shield_type",props:["type"],mixins:[a["a"],l["a"]],components:{"mek-sub-component-table":()=>n.e("chunk-0a2ef8c8").then(n.bind(null,"97ea"))},data:function(){let e={type_table:[{name:"Standard"},{name:"Active"},{name:"Reactive"}]};return e},methods:{select_type:function(e){this.$emit("update-type",this.type_table[e].name.toLowerCase())}},computed:{type_index(){let e=0;return this.type_table.some((t,n)=>{if(t.name.toLowerCase()==this.type.toLowerCase())return e=n,!0},this),[e]}}},c=o,d=n("2877"),u=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=mek-shield-type.f4c6fe85.js.map