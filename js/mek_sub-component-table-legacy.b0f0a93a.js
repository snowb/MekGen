(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_sub-component-table"],{"072f":function(e,t,n){"use strict";n("6762"),n("2fdb");t["a"]={methods:{selectedItem:function(e,t,n,s){var i="undefined"===typeof s?"":s;return"undefined"===typeof n?this[e]==t?"selected_item":i:this[e]==t?n:i},selectedItemMultiple:function(e,t,n,s){var i="undefined"===typeof s?"":s;return Array.isArray(this[e])?"undefined"===typeof n?this[e].includes(t)?"selected_item":i:this[e].includes(t)?n:i:""}}}},"28a5":function(e,t,n){"use strict";var s=n("aae3"),i=n("cb7c"),a=n("ebd6"),r=n("0390"),c=n("9def"),l=n("5f1b"),d=n("520a"),o=n("79e5"),u=Math.min,_=[].push,f="split",p="length",h="lastIndex",m=4294967295,v=!o(function(){RegExp(m,"y")});n("214f")("split",2,function(e,t,n,o){var y;return y="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(i,e,t);var a,r,c,l=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,f=void 0===t?m:t>>>0,v=new RegExp(e.source,o+"g");while(a=d.call(v,i)){if(r=v[h],r>u&&(l.push(i.slice(u,a.index)),a[p]>1&&a.index<i[p]&&_.apply(l,a.slice(1)),c=a[0][p],u=r,l[p]>=f))break;v[h]===a.index&&v[h]++}return u===i[p]?!c&&v.test("")||l.push(""):l.push(i.slice(u)),l[p]>f?l.slice(0,f):l}:"0"[f](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,s):y.call(String(i),n,s)},function(e,t){var s=o(y,e,this,t,y!==n);if(s.done)return s.value;var d=i(e),_=String(this),f=a(d,RegExp),p=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),w=new f(v?d:"^(?:"+d.source+")",h),b=void 0===t?m:t>>>0;if(0===b)return[];if(0===_.length)return null===l(w,_)?[_]:[];var k=0,g=0,x=[];while(g<_.length){w.lastIndex=v?g:0;var C,D=l(w,v?_:_.slice(g));if(null===D||(C=u(c(w.lastIndex+(v?0:g)),_.length))===k)g=r(_,g,p);else{if(x.push(_.slice(k,g)),x.length===b)return x;for(var S=1;S<=D.length-1;S++)if(x.push(D[S]),x.length===b)return x;g=k=C}}return x.push(_.slice(k)),x}]})},"2fdb":function(e,t,n){"use strict";var s=n("5ca1"),i=n("d2c8"),a="includes";s(s.P+s.F*n("5147")(a),"String",{includes:function(e){return!!~i(this,e,a).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"511e":function(e,t,n){},5147:function(e,t,n){var s=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[s]=!1,!"/./"[e](t)}catch(i){}}return!0}},6762:function(e,t,n){"use strict";var s=n("5ca1"),i=n("c366")(!0);s(s.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},a949:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small_sct"},[n("div",{staticClass:"subsection_container_sct"},[n("div",{staticClass:"subsection_header_small_sct"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header_sct"},[e._v(e._s(e.name))]),"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),e.showHeaders?n("tr",[n("td",{staticStyle:{"line-height":"2px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]):e._e(),e._l(e.items,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column_sct pad_sct"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.items,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]),n("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.items[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table_sct"},[e._l(e.items,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedIndices",s,"selected_item_sct"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e(),"dropdown-pkey"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]),n("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(e.selectedDropdownPkey[s],s))+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown-pkey"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table_sct"},[e._l(e.items,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){e.updateSelectedData(e.items[s]),e.showDropdown=!1}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=(n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("28a5"),n("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[a["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0||"__INFINITY__"==e)return"∞";if("__NIL__"==e)return"Ø";if("__HEX__"==e)return"Hex";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{largestKeyValues:function(){return this.items.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var s=""+t[n];e[n].length-4<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""},colspan:function(){return Object.keys(this.headers).length},selectedDropdownPkey:function(){var e,t=this;return this.items.some(function(n){return n[t.pkey]==t.selectedKeys[0]&&(e=n,!0)},this),e}}},c=r,l=(n("c3c8"),n("2877")),d=Object(l["a"])(c,s,i,!1,null,"4f7f55f5",null);t["default"]=d.exports},aae3:function(e,t,n){var s=n("d3f4"),i=n("2d95"),a=n("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},c3c8:function(e,t,n){"use strict";var s=n("511e"),i=n.n(s);i.a},d2c8:function(e,t,n){var s=n("aae3"),i=n("be13");e.exports=function(e,t,n){if(s(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}}}]);
//# sourceMappingURL=mek_sub-component-table-legacy.b0f0a93a.js.map