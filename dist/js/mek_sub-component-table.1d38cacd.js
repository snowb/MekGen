(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_sub-component-table"],{"072f":function(e,t,s){"use strict";t["a"]={methods:{selectedItem:function(e,t,s,n){let i="undefined"===typeof n?"":n;return"undefined"===typeof s?this[e]==t?"selected_item":i:this[e]==t?s:i},selectedItemMultiple:function(e,t,s,n){let i="undefined"===typeof n?"":n;return Array.isArray(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":i:this[e].includes(t)?s:i:""}}}},"28a5":function(e,t,s){"use strict";var n=s("aae3"),i=s("cb7c"),a=s("ebd6"),r=s("0390"),l=s("9def"),c=s("5f1b"),d=s("520a"),o=s("79e5"),u=Math.min,_=[].push,p="split",f="length",m="lastIndex",h=4294967295,y=!o(function(){RegExp(h,"y")});s("214f")("split",2,function(e,t,s,o){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(i,e,t);var a,r,l,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,p=void 0===t?h:t>>>0,y=new RegExp(e.source,o+"g");while(a=d.call(y,i)){if(r=y[m],r>u&&(c.push(i.slice(u,a.index)),a[f]>1&&a.index<i[f]&&_.apply(c,a.slice(1)),l=a[0][f],u=r,c[f]>=p))break;y[m]===a.index&&y[m]++}return u===i[f]?!l&&y.test("")||c.push(""):c.push(i.slice(u)),c[f]>p?c.slice(0,p):c}:"0"[p](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var i=e(this),a=void 0==s?void 0:s[t];return void 0!==a?a.call(s,i,n):v.call(String(i),s,n)},function(e,t){var n=o(v,e,this,t,v!==s);if(n.done)return n.value;var d=i(e),_=String(this),p=a(d,RegExp),f=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(y?"y":"g"),w=new p(y?d:"^(?:"+d.source+")",m),k=void 0===t?h:t>>>0;if(0===k)return[];if(0===_.length)return null===c(w,_)?[_]:[];var b=0,g=0,x=[];while(g<_.length){w.lastIndex=y?g:0;var C,D=c(w,y?_:_.slice(g));if(null===D||(C=u(l(w.lastIndex+(y?0:g)),_.length))===b)g=r(_,g,f);else{if(x.push(_.slice(b,g)),x.length===k)return x;for(var I=1;I<=D.length-1;I++)if(x.push(D[I]),x.length===k)return x;g=b=C}}return x.push(_.slice(b)),x}]})},"511e":function(e,t,s){},a949:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small_sct"},[s("div",{staticClass:"subsection_container_sct"},[s("div",{staticClass:"subsection_header_small_sct"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header_sct"},[e._v(e._s(e.name))]),"pkey-col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),e.showHeaders?s("tr",[s("td",{staticStyle:{"line-height":"2px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]):e._e(),e._l(e.items,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column_sct pad_sct"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.items,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,i){return s("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]),s("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.items[e.selectedIndices[0]][n])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table_sct"},[e._l(e.items,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedIndices",n,"selected_item_sct"),on:{click:function(t){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e(),"dropdown-pkey"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]),s("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(e.selectedDropdownPkey[n],n))+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown-pkey"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table_sct"},[e._l(e.items,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){e.updateSelectedData(e.items[n]),e.showDropdown=!1}}},e._l(e.headers,function(n,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=(s("ac6a"),s("28a5"),s("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[a["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0||"__INFINITY__"==e)return"∞";if("__NIL__"==e)return"Ø";if("__HEX__"==e)return"Hex";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),n=e;if(s.includes("percent")&&(n=100*e+"%"),s.includes("multiplier")&&(n="x"+n),s.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return s.includes("nullzero")&&0===e&&(n="Ø"),n}},computed:{largestKeyValues(){return this.items.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let n=""+t[s];e[s].length-4<=n.length&&(e[s]="xx"+n+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""},colspan(){return Object.keys(this.headers).length},selectedDropdownPkey(){let e;return this.items.some(t=>{return t[this.pkey]==this.selectedKeys[0]&&(e=t,!0)},this),e}}},l=r,c=(s("c3c8"),s("2877")),d=Object(c["a"])(l,n,i,!1,null,"4f7f55f5",null);t["default"]=d.exports},aae3:function(e,t,s){var n=s("d3f4"),i=s("2d95"),a=s("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},c3c8:function(e,t,s){"use strict";var n=s("511e"),i=s.n(n);i.a},ebd6:function(e,t,s){var n=s("cb7c"),i=s("d8e8"),a=s("2b4c")("species");e.exports=function(e,t){var s,r=n(e).constructor;return void 0===r||void 0==(s=n(r)[a])?t:i(s)}}}]);
//# sourceMappingURL=mek_sub-component-table.1d38cacd.js.map