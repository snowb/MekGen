(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_export-components"],{"76a9":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-flex-col"},attrs:{id:"app"}},[n("mek-top-menu",{attrs:{section:t.targetImportTab,"section-list":t.sectionList},on:{"focus-section":t.focusSection}}),t._v("\n    "+t._s(t.typeList("equipment"))+"\n")],1)},c=[],i=n("cebc"),s=n("2f62"),r={name:"export-components",components:{"mek-top-menu":function(){return n.e("mek_top-menu").then(n.bind(null,"4d27"))}},data:function(){var t={};return t},methods:{focusSection:function(t){this.$store.commit("showTab",{prop:"currentExportTab",tab:t})}},computed:Object(i["a"])({sectionList:function(){return this.categoryList.map(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);return{id:t,name:e}})}},Object(s["b"])({targetImportTab:"targetImportTab",componentList:"componentList",categoryList:"categoryList",typeList:"typeList"}))},a=r,p=n("2877"),u=Object(p["a"])(a,o,c,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=mek_export-components-legacy.1d6b80c7.js.map