(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_side-menu"],{"95aa":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"auto"}},[t.collapsed?i("div",{staticClass:"expand_bar",attrs:{title:"expand"},on:{click:function(e){t.collapsed=!t.collapsed}}},[t._v(" ")]):i("div",{class:t.container},[t.list?i("div",{staticStyle:{"margin-right":"5px"}},[void 0!==t.title?i("div",{staticClass:"side_menu_header",staticStyle:{"margin-bottom":"5px"}},[t._v(t._s(t.title))]):t._e(),0==Object.keys(t.sections).length?i("div",{staticClass:"no-data"},[t._v("No Data")]):t._e(),t._l(t.sections,function(e,s,n){return i("div",{key:"side-menu-content-"+s+"-"+n,staticClass:"bottom_spacing list item",class:t.content,attrs:{"data-text":e,draggable:t.draggable},on:{click:function(e){return t.emitClick(s)}}},[t._v("\n        "+t._s(e)+"\n      ")])})],2):i("div",{staticStyle:{"margin-right":"5px","max-width":"119px",overflow:"hidden","text-overflow":"ellipsis"}},[i("div",{staticClass:"side_menu_header"},[t._v(t._s(t.title))]),t._l(t.sections,function(e,s,n){return i("div",{key:"side-menu-section-"+s+"-"+n},[t.displaySection(e)?i("div",[i("div",{staticClass:"subsection_header",class:t.subsection_header},[t._v(t._s(s))]),t._l(e,function(e,s,n){return i("div",{key:"side-menu-content-"+s+"-"+n,staticClass:"bottom_spacing item",class:t.content,attrs:{"data-text":e,draggable:t.draggable},on:{click:function(e){return t.emitClick(s)}}},[t._v("\n            "+t._s(e)+"\n          ")])})],2):t._e()])})],2),t.collapsible?i("div",{staticClass:"collapse_bar",attrs:{title:"collapse"},on:{click:function(e){t.collapsed=!t.collapsed}}},[t._v(" ")]):t._e()])])},n=[],a=(i("ac6a"),i("456d"),i("7618")),c={name:"mek_frame_side_menu",props:["sections","format","title","draggable","list","clickable","collapsible"],mixins:[],components:{},data:function(){var t={collapsed:!1};return t},methods:{emitClick:function(t){this.clickable&&this.$emit("side-menu-clicked",t)},displaySection:function(t){return"object"===Object(a["a"])(t)&&Object.keys(t).length>0}},computed:{container:function(){switch(!0){case void 0===this.format:case null===this.format:case"cut"==this.format:return"side_menu_container_cut";default:return"side_menu_container_full"}},subsection_header:function(){switch(!0){case void 0===this.format:case null===this.format:case"cut"==this.format:return"subsection_header_cut"}return""},content:function(){switch(!0){case void 0===this.format:case null===this.format:case"cut"==this.format:return"content_cut";default:return"content_full"}}}},l=c,o=(i("b7f2"),i("2877")),r=Object(o["a"])(l,s,n,!1,null,"466e39f4",null);e["default"]=r.exports},b7f2:function(t,e,i){"use strict";var s=i("d84f"),n=i.n(s);n.a},d84f:function(t,e,i){}}]);
//# sourceMappingURL=mek_side-menu-legacy.2128088f.js.map