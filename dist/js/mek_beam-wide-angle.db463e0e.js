(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-wide-angle","chunk-3671740f"],{"28a5":function(e,t,n){"use strict";var s=n("aae3"),i=n("cb7c"),a=n("ebd6"),l=n("0390"),r=n("9def"),c=n("5f1b"),d=n("520a"),o=n("79e5"),u=Math.min,h=[].push,m="split",_="length",f="lastIndex",p=4294967295,g=!o(function(){RegExp(p,"y")});n("214f")("split",2,function(e,t,n,o){var w;return w="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[_]||2!="ab"[m](/(?:ab)*/)[_]||4!="."[m](/(.?)(.?)/)[_]||"."[m](/()()/)[_]>1||""[m](/.?/)[_]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(i,e,t);var a,l,r,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,m=void 0===t?p:t>>>0,g=new RegExp(e.source,o+"g");while(a=d.call(g,i)){if(l=g[f],l>u&&(c.push(i.slice(u,a.index)),a[_]>1&&a.index<i[_]&&h.apply(c,a.slice(1)),r=a[0][_],u=l,c[_]>=m))break;g[f]===a.index&&g[f]++}return u===i[_]?!r&&g.test("")||c.push(""):c.push(i.slice(u)),c[_]>m?c.slice(0,m):c}:"0"[m](void 0,0)[_]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,s):w.call(String(i),n,s)},function(e,t){var s=o(w,e,this,t,w!==n);if(s.done)return s.value;var d=i(e),h=String(this),m=a(d,RegExp),_=d.unicode,f=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),v=new m(g?d:"^(?:"+d.source+")",f),b=void 0===t?p:t>>>0;if(0===b)return[];if(0===h.length)return null===c(v,h)?[h]:[];var y=0,k=0,x=[];while(k<h.length){v.lastIndex=g?k:0;var C,I=c(v,g?h:h.slice(k));if(null===I||(C=u(r(v.lastIndex+(g?0:k)),h.length))===y)k=l(h,k,_);else{if(x.push(h.slice(y,k)),x.length===b)return x;for(var D=1;D<=I.length-1;D++)if(x.push(I[D]),x.length===b)return x;k=y=C}}return x.push(h.slice(y)),x}]})},"6c16":function(e,t,n){"use strict";var s=n("d9d1"),i=n.n(s);i.a},7795:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.wide_angle_table,headers:{angle:"Angle",cost:"Cost"},name:"Wide Angle",flow:"row",showHeaders:!0,format:{angle:"wide-angle",cost:"multiplier"},selectedIndices:e.selected_angle_index},on:{"update-selected-indices":e.select_angle}})},i=[],a=n("072f"),l=n("8fcf"),r=n("97ea"),c={name:"mek_beam_wide_angle",props:["wideAngle"],mixins:[a["a"],l["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){let e={wide_angle_table:[{angle:0,cost:1},{angle:1,cost:2},{angle:60,cost:3},{angle:180,cost:5},{angle:300,cost:7},{angle:360,cost:9}]};return e},methods:{select_angle:function(e){this.$emit("update-wide-angle",this.wide_angle_table[e])}},computed:{selected_angle_index:function(){let e=0;return this.angle,this.wide_angle_table.some((t,n)=>{if(t.angle==this.wideAngle.angle)return e=n,!0},this),this.wideAngle.cost!=this.wide_angle_table[e].cost&&this.select_angle(e),[e]}}},d=c,o=n("2877"),u=Object(o["a"])(d,s,i,!1,null,null,null);t["default"]=u.exports},"97ea":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=(n("ac6a"),n("28a5"),n("072f")),l={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[a["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let n=this.format[t].split(",").map(e=>e.toLowerCase()),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,n)=>{let s={};for(let i in n)Object.keys(e).includes(i)&&(s[i]=n[i]);return t.push(s),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let n in t){"undefined"===typeof e[n]&&(e[n]="");let s=""+t[n];e[n].length<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},r=l,c=(n("6c16"),n("2877")),d=Object(c["a"])(r,s,i,!1,null,"3a1dbf41",null);t["default"]=d.exports},aae3:function(e,t,n){var s=n("d3f4"),i=n("2d95"),a=n("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},d9d1:function(e,t,n){},ebd6:function(e,t,n){var s=n("cb7c"),i=n("d8e8"),a=n("2b4c")("species");e.exports=function(e,t){var n,l=s(e).constructor;return void 0===l||void 0==(n=s(l)[a])?t:i(n)}}}]);
//# sourceMappingURL=mek_beam-wide-angle.db463e0e.js.map