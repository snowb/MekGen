(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy-absorbing-armor","chunk-0a2ef8c8"],{"178d":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.absorption_table,headers:{absorption:"Absorption",armor_penalty:"SP Reduction",cost:"Cost"},name:"Energy Absorption",flow:"col",showHeaders:!0,format:{absorption:"percent",armor_penalty:"percent",cost:"multiplier"},selectedIndices:e.selected_absorption_index},on:{"update-selected-indices":e.select_absorption_type}})},a=[],i=n("072f"),r=n("8fcf"),l=n("97ea"),o={name:"mek_energy_absorbing_armor",props:["absorption"],mixins:[i["a"],r["a"]],components:{"mek-sub-component-table":l["default"]},data:function(){let e={absorption_table:[{absorption:0,cost:1,armor_penalty:0},{absorption:.2,cost:1.5,armor_penalty:0},{absorption:.25,cost:1.8,armor_penalty:.2},{absorption:.33,cost:2.2,armor_penalty:.25},{absorption:.5,cost:2.5,armor_penalty:.33}]};return e},methods:{select_absorption_type:function(e){this.$emit("update-absorption",this.absorption_table[e])}},computed:{selected_absorption_index:function(){let e=0;this.absorption_table.some((t,n)=>{if(t.absorption==this.absorption.absorption)return e=n,!0},this);let t=!1;switch(!0){case this.absorption.cost!=this.absorption_table[e].cost:case this.absorption.armor_penalty!=this.absorption_table[e].armor_penalty:t=!0}return t&&this.select_absorption_type(e),[e]}}},c=o,d=n("2877"),u=Object(d["a"])(c,s,a,!1,null,null,null);t["default"]=u.exports},"28a5":function(e,t,n){"use strict";var s=n("aae3"),a=n("cb7c"),i=n("ebd6"),r=n("0390"),l=n("9def"),o=n("5f1b"),c=n("520a"),d=n("79e5"),u=Math.min,p=[].push,m="split",_="length",h="lastIndex",f=4294967295,b=!d(function(){RegExp(f,"y")});n("214f")("split",2,function(e,t,n,d){var y;return y="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[_]||2!="ab"[m](/(?:ab)*/)[_]||4!="."[m](/(.?)(.?)/)[_]||"."[m](/()()/)[_]>1||""[m](/.?/)[_]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(a,e,t);var i,r,l,o=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,m=void 0===t?f:t>>>0,b=new RegExp(e.source,d+"g");while(i=c.call(b,a)){if(r=b[h],r>u&&(o.push(a.slice(u,i.index)),i[_]>1&&i.index<a[_]&&p.apply(o,i.slice(1)),l=i[0][_],u=r,o[_]>=m))break;b[h]===i.index&&b[h]++}return u===a[_]?!l&&b.test("")||o.push(""):o.push(a.slice(u)),o[_]>m?o.slice(0,m):o}:"0"[m](void 0,0)[_]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,s):y.call(String(a),n,s)},function(e,t){var s=d(y,e,this,t,y!==n);if(s.done)return s.value;var c=a(e),p=String(this),m=i(c,RegExp),_=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),v=new m(b?c:"^(?:"+c.source+")",h),w=void 0===t?f:t>>>0;if(0===w)return[];if(0===p.length)return null===o(v,p)?[p]:[];var k=0,g=0,x=[];while(g<p.length){v.lastIndex=b?g:0;var C,D=o(v,b?p:p.slice(g));if(null===D||(C=u(l(v.lastIndex+(b?0:g)),p.length))===k)g=r(p,g,_);else{if(x.push(p.slice(k,g)),x.length===w)return x;for(var S=1;S<=D.length-1;S++)if(x.push(D[S]),x.length===w)return x;g=k=C}}return x.push(p.slice(k)),x}]})},3321:function(e,t,n){},"97ea":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,a){return n("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,a){return n("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=(n("ac6a"),n("28a5"),n("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let n=this.format[t].split(",").map(e=>e.toLowerCase()),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,n)=>{let s={};for(let a in n)Object.keys(e).includes(a)&&(s[a]=n[a]);return t.push(s),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let n in t){"undefined"===typeof e[n]&&(e[n]="");let s=""+t[n];e[n].length<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},l=r,o=(n("bc12"),n("2877")),c=Object(o["a"])(l,s,a,!1,null,"1103ef03",null);t["default"]=c.exports},aae3:function(e,t,n){var s=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},bc12:function(e,t,n){"use strict";var s=n("3321"),a=n.n(s);a.a},ebd6:function(e,t,n){var s=n("cb7c"),a=n("d8e8"),i=n("2b4c")("species");e.exports=function(e,t){var n,r=s(e).constructor;return void 0===r||void 0==(n=s(r)[i])?t:a(n)}}}]);
//# sourceMappingURL=mek_energy-absorbing-armor.603a1c86.js.map