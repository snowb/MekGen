(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61b5cdb4","chunk-0a2ef8c8"],{1787:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.damage_table,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"row",showHeaders:!0,selectedIndices:e.damage_index},on:{"update-selected-indices":e.select_damage}})},n=[],i=(a("ac6a"),a("072f")),l=a("8fcf"),r=a("97ea"),d={name:"mek_beam_damage",props:["damage"],mixins:[i["a"],l["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){let e={};return e.damage_table=Array.apply({},Array(20)),e.damage_table.forEach((t,a)=>{let s=a+1,n=s,i=Math.round(3*Math.sqrt(s));e.damage_table[a]={damage:s,cost:n,range:i}},this),e.selected_damage={damage:1,cost:1,range:3},e},methods:{select_damage:function(e){this.$emit("update-damage",this.damage_table[e])}},computed:{damage_index(){let e=0;this.damage_table.some((t,a)=>{if(this.damage.damage==t.damage)return e=a,!0});let t=!1;switch(!0){case this.damage.damage!=this.damage_table[e].damage:case this.damage.cost!=this.damage_table[e].cost:case this.damage.range!=this.damage_table[e].range:t=!0}return t&&this.select_damage(e),[e]}}},c=d,u=(a("2291"),a("2877")),o=Object(u["a"])(c,s,n,!1,null,"deff8f40",null);t["default"]=o.exports},2291:function(e,t,a){"use strict";var s=a("b1bb"),n=a.n(s);n.a},"28a5":function(e,t,a){"use strict";var s=a("aae3"),n=a("cb7c"),i=a("ebd6"),l=a("0390"),r=a("9def"),d=a("5f1b"),c=a("520a"),u=a("79e5"),o=Math.min,m=[].push,h="split",_="length",p="lastIndex",f=4294967295,g=!u(function(){RegExp(f,"y")});a("214f")("split",2,function(e,t,a,u){var y;return y="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[_]||2!="ab"[h](/(?:ab)*/)[_]||4!="."[h](/(.?)(.?)/)[_]||"."[h](/()()/)[_]>1||""[h](/.?/)[_]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!s(e))return a.call(n,e,t);var i,l,r,d=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,h=void 0===t?f:t>>>0,g=new RegExp(e.source,u+"g");while(i=c.call(g,n)){if(l=g[p],l>o&&(d.push(n.slice(o,i.index)),i[_]>1&&i.index<n[_]&&m.apply(d,i.slice(1)),r=i[0][_],o=l,d[_]>=h))break;g[p]===i.index&&g[p]++}return o===n[_]?!r&&g.test("")||d.push(""):d.push(n.slice(o)),d[_]>h?d.slice(0,h):d}:"0"[h](void 0,0)[_]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,s){var n=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n,s):y.call(String(n),a,s)},function(e,t){var s=u(y,e,this,t,y!==a);if(s.done)return s.value;var c=n(e),m=String(this),h=i(c,RegExp),_=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),b=new h(g?c:"^(?:"+c.source+")",p),v=void 0===t?f:t>>>0;if(0===v)return[];if(0===m.length)return null===d(b,m)?[m]:[];var w=0,k=0,x=[];while(k<m.length){b.lastIndex=g?k:0;var C,D=d(b,g?m:m.slice(k));if(null===D||(C=o(r(b.lastIndex+(g?0:k)),m.length))===w)k=l(m,k,_);else{if(x.push(m.slice(w,k)),x.length===v)return x;for(var S=1;S<=D.length-1;S++)if(x.push(D[S]),x.length===v)return x;k=w=C}}return x.push(m.slice(w)),x}]})},3321:function(e,t,a){},"97ea":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[a("div",{staticClass:"metallic_background_small1"},[a("div",{staticClass:"subsection_container1"},[a("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),a("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return a("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return a("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,n){return a("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):"col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return a("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return a("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,n){return a("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),a("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return a("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?a("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},n=[],i=(a("ac6a"),a("28a5"),a("072f")),l={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let a=this.format[t].split(",").map(e=>e.toLowerCase()),s=e;if(a.includes("percent")&&(s=100*e+"%"),a.includes("multiplier")&&(s="x"+s),a.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return a.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,a)=>{let s={};for(let n in a)Object.keys(e).includes(n)&&(s[n]=a[n]);return t.push(s),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let a in t){"undefined"===typeof e[a]&&(e[a]="");let s=""+t[a];e[a].length<=s.length&&(e[a]="xx"+s+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},r=l,d=(a("bc12"),a("2877")),c=Object(d["a"])(r,s,n,!1,null,"1103ef03",null);t["default"]=c.exports},aae3:function(e,t,a){var s=a("d3f4"),n=a("2d95"),i=a("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}},b1bb:function(e,t,a){},bc12:function(e,t,a){"use strict";var s=a("3321"),n=a.n(s);n.a},ebd6:function(e,t,a){var s=a("cb7c"),n=a("d8e8"),i=a("2b4c")("species");e.exports=function(e,t){var a,l=s(e).constructor;return void 0===l||void 0==(a=s(l)[i])?t:n(a)}}}]);
//# sourceMappingURL=chunk-61b5cdb4.5509e509.js.map