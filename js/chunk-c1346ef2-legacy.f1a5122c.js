(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1346ef2","chunk-5a8f0fc3"],{"28a5":function(e,t,n){"use strict";var a=n("aae3"),s=n("cb7c"),i=n("ebd6"),r=n("0390"),l=n("9def"),c=n("5f1b"),d=n("520a"),o=n("79e5"),u=Math.min,m=[].push,_="split",f="length",h="lastIndex",p=4294967295,g=!o(function(){RegExp(p,"y")});n("214f")("split",2,function(e,t,n,o){var v;return v="c"=="abbc"[_](/(b)*/)[1]||4!="test"[_](/(?:)/,-1)[f]||2!="ab"[_](/(?:ab)*/)[f]||4!="."[_](/(.?)(.?)/)[f]||"."[_](/()()/)[f]>1||""[_](/.?/)[f]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(s,e,t);var i,r,l,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,_=void 0===t?p:t>>>0,g=new RegExp(e.source,o+"g");while(i=d.call(g,s)){if(r=g[h],r>u&&(c.push(s.slice(u,i.index)),i[f]>1&&i.index<s[f]&&m.apply(c,i.slice(1)),l=i[0][f],u=r,c[f]>=_))break;g[h]===i.index&&g[h]++}return u===s[f]?!l&&g.test("")||c.push(""):c.push(s.slice(u)),c[f]>_?c.slice(0,_):c}:"0"[_](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,a){var s=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,s,a):v.call(String(s),n,a)},function(e,t){var a=o(v,e,this,t,v!==n);if(a.done)return a.value;var d=s(e),m=String(this),_=i(d,RegExp),f=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new _(g?d:"^(?:"+d.source+")",h),b=void 0===t?p:t>>>0;if(0===b)return[];if(0===m.length)return null===c(y,m)?[m]:[];var w=0,k=0,C=[];while(k<m.length){y.lastIndex=g?k:0;var x,D=c(y,g?m:m.slice(k));if(null===D||(x=u(l(y.lastIndex+(g?0:k)),m.length))===w)k=r(m,k,f);else{if(C.push(m.slice(w,k)),C.length===b)return C;for(var S=1;S<=D.length-1;S++)if(C.push(D[S]),C.length===b)return C;k=w=x}}return C.push(m.slice(w)),C}]})},3321:function(e,t,n){},9613:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.range_mod_table,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost"},name:"Range Mod",flow:"col",showHeaders:!0,format:{range_mod:"percent",cost:"multiplier"},selectedIndices:e.selected_range_mod_index},on:{"update-selected-indices":e.select_range_mod}})},s=[],i=n("072f"),r=n("8fcf"),l=n("97ea"),c={name:"mek_range_mod",props:["rangeMod","baseRange"],mixins:[i["a"],r["a"]],components:{"mek-sub-component-table":l["default"]},data:function(){var e={range_mod_table:[{range_mod:0,cost:.5,range:0},{range_mod:.25,cost:.62,range:.75},{range_mod:.5,cost:.75,range:1.5},{range_mod:.75,cost:.88,range:2.25},{range_mod:1,cost:1,range:3},{range_mod:1.25,cost:1.12,range:3.75},{range_mod:1.5,cost:1.25,range:4.5},{range_mod:1.75,cost:1.38,range:5.25},{range_mod:2,cost:1.5,range:6},{range_mod:2.5,cost:1.75,range:7.5},{range_mod:3,cost:2,range:9}]};return e},methods:{select_range_mod:function(e){this.$emit("update-range-mod",this.range_mod_table[e])}},computed:{selected_range_mod_index:function(){var e=this,t=0;return this.rangeMod,this.range_mod_table.some(function(n,a){if(n.range_mod==e.rangeMod.range_mod)return t=a,!0},this),this.rangeMod.cost!=this.range_mod_table[t].cost&&this.select_range_mod(t),[t]}},watch:{baseRange:function(e){var t=this.range_mod_table.map(function(t){return{range_mod:t.range_mod,cost:t.cost,range:e*t.range_mod}});this.$set(this,"range_mod_table",t)}}},d=c,o=n("2877"),u=Object(o["a"])(d,a,s,!1,null,null,null);t["default"]=u.exports},"97ea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return n("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return n("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return n("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return n("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return n("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,s){return n("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][a])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(a),e.showDropdown=!1}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e()])])])},s=[],i=n("a4bb"),r=n.n(i),l=(n("6762"),n("2fdb"),n("28a5"),n("072f")),c={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[l["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),a=e;if(n.includes("percent")&&(a=100*e+"%"),n.includes("multiplier")&&(a="x"+a),n.includes("wide-angle"))switch(e){case 0:a="Ø";break;case 1:a="Hex";break;default:a=e+"°"}return n.includes("nullzero")&&0===e&&(a="Ø"),a}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,n){var a={};for(var s in n)r()(e).includes(s)&&(a[s]=n[s]);return t.push(a),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var a=""+t[n];e[n].length<=a.length&&(e[n]="xx"+a+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},d=c,o=(n("bc12"),n("2877")),u=Object(o["a"])(d,a,s,!1,null,"1103ef03",null);t["default"]=u.exports},bc12:function(e,t,n){"use strict";var a=n("3321"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-c1346ef2-legacy.f1a5122c.js.map