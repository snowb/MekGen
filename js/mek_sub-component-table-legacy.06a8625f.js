(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_sub-component-table"],{"09c0":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small_sct"},[n("div",{staticClass:"subsection_container_sct"},[n("div",{staticClass:"subsection_header_small_sct"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header_sct"},[e._v(e._s(e.name))]),"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),e.showHeaders?n("tr",[n("td",{staticStyle:{"line-height":"2px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]):e._e(),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column_sct pad_sct"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]),n("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table_sct"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedIndices",s,"selected_item_sct"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=n("a4bb"),l=n.n(a),r=(n("6762"),n("2fdb"),n("28a5"),n("072f")),c={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[r["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0||"__INFINITY__"==e)return"∞";if("__NIL__"==e)return"Ø";if("__HEX__"==e)return"Hex";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys:function(){return this.items},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var s=""+t[n];e[n].length-4<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""},colspan:function(){return l()(this.headers).length}}},d=c,o=(n("2c8f"),n("2877")),u=Object(o["a"])(d,s,i,!1,null,"0f67b4d3",null);t["default"]=u.exports},"28a5":function(e,t,n){"use strict";var s=n("aae3"),i=n("cb7c"),a=n("ebd6"),l=n("0390"),r=n("9def"),c=n("5f1b"),d=n("520a"),o=n("79e5"),u=Math.min,_=[].push,p="split",f="length",m="lastIndex",h=4294967295,y=!o(function(){RegExp(h,"y")});n("214f")("split",2,function(e,t,n,o){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(i,e,t);var a,l,r,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,p=void 0===t?h:t>>>0,y=new RegExp(e.source,o+"g");while(a=d.call(y,i)){if(l=y[m],l>u&&(c.push(i.slice(u,a.index)),a[f]>1&&a.index<i[f]&&_.apply(c,a.slice(1)),r=a[0][f],u=l,c[f]>=p))break;y[m]===a.index&&y[m]++}return u===i[f]?!r&&y.test("")||c.push(""):c.push(i.slice(u)),c[f]>p?c.slice(0,p):c}:"0"[p](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,s):v.call(String(i),n,s)},function(e,t){var s=o(v,e,this,t,v!==n);if(s.done)return s.value;var d=i(e),_=String(this),p=a(d,RegExp),f=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(y?"y":"g"),w=new p(y?d:"^(?:"+d.source+")",m),b=void 0===t?h:t>>>0;if(0===b)return[];if(0===_.length)return null===c(w,_)?[_]:[];var k=0,g=0,x=[];while(g<_.length){w.lastIndex=y?g:0;var C,D=c(w,y?_:_.slice(g));if(null===D||(C=u(r(w.lastIndex+(y?0:g)),_.length))===k)g=l(_,g,f);else{if(x.push(_.slice(k,g)),x.length===b)return x;for(var I=1;I<=D.length-1;I++)if(x.push(D[I]),x.length===b)return x;g=k=C}}return x.push(_.slice(k)),x}]})},"2c8f":function(e,t,n){"use strict";var s=n("602f"),i=n.n(s);i.a},"602f":function(e,t,n){}}]);
//# sourceMappingURL=mek_sub-component-table-legacy.06a8625f.js.map