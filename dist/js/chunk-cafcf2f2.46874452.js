(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cafcf2f2","chunk-21801d46"],{"28a5":function(e,t,n){"use strict";var s=n("aae3"),i=n("cb7c"),a=n("ebd6"),r=n("0390"),l=n("9def"),c=n("5f1b"),u=n("520a"),d=n("79e5"),o=Math.min,f=[].push,h="split",m="length",_="lastIndex",p=4294967295,v=!d(function(){RegExp(p,"y")});n("214f")("split",2,function(e,t,n,d){var b;return b="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[m]||2!="ab"[h](/(?:ab)*/)[m]||4!="."[h](/(.?)(.?)/)[m]||"."[h](/()()/)[m]>1||""[h](/.?/)[m]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(i,e,t);var a,r,l,c=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,h=void 0===t?p:t>>>0,v=new RegExp(e.source,d+"g");while(a=u.call(v,i)){if(r=v[_],r>o&&(c.push(i.slice(o,a.index)),a[m]>1&&a.index<i[m]&&f.apply(c,a.slice(1)),l=a[0][m],o=r,c[m]>=h))break;v[_]===a.index&&v[_]++}return o===i[m]?!l&&v.test("")||c.push(""):c.push(i.slice(o)),c[m]>h?c.slice(0,h):c}:"0"[h](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,s):b.call(String(i),n,s)},function(e,t){var s=d(b,e,this,t,b!==n);if(s.done)return s.value;var u=i(e),f=String(this),h=a(u,RegExp),m=u.unicode,_=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),w=new h(v?u:"^(?:"+u.source+")",_),y=void 0===t?p:t>>>0;if(0===y)return[];if(0===f.length)return null===c(w,f)?[f]:[];var k=0,g=0,x=[];while(g<f.length){w.lastIndex=v?g:0;var C,I=c(w,v?f:f.slice(g));if(null===I||(C=o(l(w.lastIndex+(v?0:g)),f.length))===k)g=r(f,g,m);else{if(x.push(f.slice(k,g)),x.length===y)return x;for(var D=1;D<=I.length-1;D++)if(x.push(I[D]),x.length===y)return x;g=k=C}}return x.push(f.slice(k)),x}]})},"3f76":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.turns_table,headers:{turns:"Turns",cost:"Cost"},name:"Turns in Use",flow:"row",showHeaders:!0,format:{cost:"multiplier"},selectedIndices:e.selected_turns_index},on:{"update-selected-indices":e.select_turns}})},i=[],a=n("072f"),r=n("97ea"),l={name:"mek_emw_turns_in_use",props:["turnsInUse"],mixins:[a["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){var e={turns_table:[{turns:1,cost:.3},{turns:2,cost:.4},{turns:3,cost:.5},{turns:4,cost:.6},{turns:5,cost:.7},{turns:7,cost:.8},{turns:10,cost:.9},{turns:1/0,cost:1}]};return e},methods:{select_turns:function(e){this.$emit("update-turns-in-use",this.turns_table[e])}},computed:{selected_turns_index:function(){var e=7;return this.turns_table.some(function(t,n){return t.turns==this.turnsInUse.turns&&(e=n,!0)},this),this.turns_table[e].cost!==this.turnsInUse.cost&&this.select_turns(e),[e]}}},c=l,u=n("2877"),d=Object(u["a"])(c,s,i,!1,null,null,null);t["default"]=d.exports},"6c16":function(e,t,n){"use strict";var s=n("d9d1"),i=n.n(s);i.a},"97ea":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=n("a4bb"),r=n.n(a),l=(n("6762"),n("2fdb"),n("28a5"),n("072f")),c={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[l["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,n){var s={};for(var i in n)r()(e).includes(i)&&(s[i]=n[i]);return t.push(s),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var s=""+t[n];e[n].length<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},u=c,d=(n("6c16"),n("2877")),o=Object(d["a"])(u,s,i,!1,null,"3a1dbf41",null);t["default"]=o.exports},d9d1:function(e,t,n){}}]);
//# sourceMappingURL=chunk-cafcf2f2.46874452.js.map