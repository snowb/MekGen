(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b130a84","chunk-3671740f"],{"28a5":function(e,t,n){"use strict";var s=n("aae3"),a=n("cb7c"),i=n("ebd6"),l=n("0390"),r=n("9def"),c=n("5f1b"),d=n("520a"),o=n("79e5"),u=Math.min,p=[].push,m="split",h="length",f="lastIndex",_=4294967295,y=!o(function(){RegExp(_,"y")});n("214f")("split",2,function(e,t,n,o){var v;return v="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[h]||2!="ab"[m](/(?:ab)*/)[h]||4!="."[m](/(.?)(.?)/)[h]||"."[m](/()()/)[h]>1||""[m](/.?/)[h]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(a,e,t);var i,l,r,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,m=void 0===t?_:t>>>0,y=new RegExp(e.source,o+"g");while(i=d.call(y,a)){if(l=y[f],l>u&&(c.push(a.slice(u,i.index)),i[h]>1&&i.index<a[h]&&p.apply(c,i.slice(1)),r=i[0][h],u=l,c[h]>=m))break;y[f]===i.index&&y[f]++}return u===a[h]?!r&&y.test("")||c.push(""):c.push(a.slice(u)),c[h]>m?c.slice(0,m):c}:"0"[m](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,s):v.call(String(a),n,s)},function(e,t){var s=o(v,e,this,t,v!==n);if(s.done)return s.value;var d=a(e),p=String(this),m=i(d,RegExp),h=d.unicode,f=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(y?"y":"g"),b=new m(y?d:"^(?:"+d.source+")",f),w=void 0===t?_:t>>>0;if(0===w)return[];if(0===p.length)return null===c(b,p)?[p]:[];var k=0,g=0,x=[];while(g<p.length){b.lastIndex=y?g:0;var C,I=c(b,y?p:p.slice(g));if(null===I||(C=u(r(b.lastIndex+(y?0:g)),p.length))===k)g=l(p,g,h);else{if(x.push(p.slice(k,g)),x.length===w)return x;for(var D=1;D<=I.length-1;D++)if(x.push(I[D]),x.length===w)return x;g=k=C}}return x.push(p.slice(k)),x}]})},"45a6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.type_table,headers:{name:""},name:"Type",flow:"col",showHeaders:!1,selectedIndices:e.type_index},on:{"update-selected-indices":e.select_type}})},a=[],i=n("072f"),l=n("8fcf"),r=n("97ea"),c={name:"mek_shield_type",props:["type"],mixins:[i["a"],l["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){let e={type_table:[{name:"Standard"},{name:"Active"},{name:"Reactive"}]};return e},methods:{select_type:function(e){this.$emit("update-type",this.type_table[e].name.toLowerCase())}},computed:{type_index(){let e=0;return this.type_table.some((t,n)=>{if(t.name.toLowerCase()==this.type.toLowerCase())return e=n,!0},this),[e]}}},d=c,o=n("2877"),u=Object(o["a"])(d,s,a,!1,null,null,null);t["default"]=u.exports},"6c16":function(e,t,n){"use strict";var s=n("d9d1"),a=n.n(s);a.a},"97ea":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,a){return n("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=(n("ac6a"),n("28a5"),n("072f")),l={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let n=this.format[t].split(",").map(e=>e.toLowerCase()),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,n)=>{let s={};for(let a in n)Object.keys(e).includes(a)&&(s[a]=n[a]);return t.push(s),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let n in t){"undefined"===typeof e[n]&&(e[n]="");let s=""+t[n];e[n].length<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},r=l,c=(n("6c16"),n("2877")),d=Object(c["a"])(r,s,a,!1,null,"3a1dbf41",null);t["default"]=d.exports},aae3:function(e,t,n){var s=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},d9d1:function(e,t,n){},ebd6:function(e,t,n){var s=n("cb7c"),a=n("d8e8"),i=n("2b4c")("species");e.exports=function(e,t){var n,l=s(e).constructor;return void 0===l||void 0==(n=s(l)[i])?t:a(n)}}}]);
//# sourceMappingURL=chunk-0b130a84.61cce500.js.map