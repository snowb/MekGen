(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_type-menu"],{"4e1f":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-flex-col"},attrs:{id:"app"}},[n("mek-top-menu",{attrs:{section:e.targetTypeTab,"section-list":e.sectionList,size:"sm",color:"d","color-offset":"rgb"},on:{"focus-section":e.focusSection}}),""!=e.targetTypeTab?n("span",{staticClass:"mek-flex-row"},[n("mek-component-menu"),n("mek-data-display")],1):e._e()],1)},a=[],i=n("cebc"),m=n("2f62"),r={name:"export-type-menu",components:{"mek-top-menu":function(){return n.e("mek_top-menu").then(n.bind(null,"4d27"))},"mek-component-menu":function(){return Promise.all([n.e("mek_beam-main~mek_component-menu~mek_emw-main~mek_energy_pool-main~mek_magazine-main~mek_melee-main~~29038e2f"),n.e("mek_component-menu")]).then(n.bind(null,"f0a1"))},"mek-data-display":function(){return n.e("mek_data-display").then(n.bind(null,"74fa"))}},data:function(){var e={};return e},methods:{focusSection:function(e){this.$store.commit("showTab",{prop:"currentTypeTab",tab:e})}},computed:Object(i["a"])({sectionList:function(){return this.typeList(this.targetExportTab).map(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);return{id:e,name:t}})}},Object(m["b"])({targetTypeTab:"targetTypeTab",targetExportTab:"targetExportTab",typeList:"typeList",getComponentByType:"getComponentByType"}))},p=r,s=n("2877"),c=Object(s["a"])(p,o,a,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=mek_type-menu-legacy.713b71b1.js.map