(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_side-menu~a1b242b3"],{"95aa":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"auto"}},[t.collapsed?s("div",{staticClass:"expand_bar",attrs:{title:"expand"},on:{click:function(e){t.collapsed=!t.collapsed}}},[t._v(" ")]):s("div",{class:t.container_class},[t.list?s("div",{staticStyle:{"margin-right":"5px"}},[void 0!==t.title?s("div",{staticClass:"side_menu_header",staticStyle:{"margin-bottom":"5px"}},[t._v(t._s(t.title))]):t._e(),void 0===t.sections||0==Object.keys(t.sections).length?s("div",{staticClass:"no-data"},[t._v("No Data")]):t._e(),t._l(t.sections,function(e,i,a){return s("div",{key:"side-menu-content-"+i+"-"+a,staticClass:"bottom_spacing list item",class:[t.content_class,t.selectedItem==i?"selected_class":""],attrs:{"data-text":e,draggable:t.draggable},on:{click:function(e){return t.emitClick(i)}}},[t._v("\n        "+t._s(e)+"\n      ")])})],2):s("div",{staticStyle:{"margin-right":"5px","max-width":"119px",overflow:"hidden","text-overflow":"ellipsis"}},[s("div",{staticClass:"side_menu_header"},[t._v(t._s(t.title))]),t._l(t.sections,function(e,i,a){return s("div",{key:"side-menu-section-"+i+"-"+a},[t.displaySection(e)?s("div",[s("div",{staticClass:"subsection_header",class:t.subsection_header_class},[t._v(t._s(i))]),t._l(e,function(e,i,a){return s("div",{key:"side-menu-content-"+i+"-"+a,staticClass:"bottom_spacing item",class:[t.content_class,t.selectedItem==i?"selected_class":""],attrs:{"data-text":e,draggable:t.draggable},on:{click:function(e){return t.emitClick(i)}}},[t._v("\n            "+t._s(e)+"\n          ")])})],2):t._e()])})],2),t.collapsible?s("div",{staticClass:"collapse_bar",attrs:{title:"collapse"},on:{click:function(e){t.collapsed=!t.collapsed}}},[t._v(" ")]):t._e()])])},a=[],c=(s("ac6a"),s("456d"),s("7618")),n={name:"mek_frame_side_menu",props:["sections","format","title","draggable","list","clickable","collapsible","selectedItem"],mixins:[],components:{},data:function(){var t={collapsed:!1};return t},methods:{emitClick:function(t){this.clickable&&this.$emit("side-menu-clicked",t)},displaySection:function(t){return"object"===Object(c["a"])(t)&&Object.keys(t).length>0}},computed:{container_class:function(){switch(!0){case void 0===this.format:case null===this.format:case"cut"==this.format:return"side_menu_container_cut";default:return"side_menu_container_full"}},subsection_header_class:function(){switch(!0){case void 0===this.format:case null===this.format:case"cut"==this.format:return"subsection_header_cut"}return""},content_class:function(){switch(!0){case void 0===this.format:case null===this.format:case"cut"==this.format:return"content_cut";default:return"content_full"}}},watch:{sections:function(){this.emitClick("")}}},l=n,o=(s("aa37"),s("2877")),r=Object(o["a"])(l,i,a,!1,null,"764c4715",null);e["default"]=r.exports},aa37:function(t,e,s){"use strict";var i=s("ca5a3"),a=s.n(i);a.a},ca5a3:function(t,e,s){}}]);