(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a520e92","chunk-0a2ef8c8"],{"14f3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.attack_factor_table,headers:{attack_factor:"AF",cost:"Cost"},name:"Attack Factor",flow:"row",showHeaders:!0,format:{cost:"multiplier",attack_factor:"nullzero"},selectedIndices:e.attack_factor_index},on:{"update-selected-indices":e.select_attack_factor}})},n=[],i=a("072f"),c=a("8fcf"),r=a("97ea"),l={name:"mek_emw_attack_factor",props:["attackFactor"],mixins:[i["a"],c["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){let e={attack_factor_table:[{attack_factor:0,cost:1},{attack_factor:1,cost:1.5},{attack_factor:2,cost:2},{attack_factor:3,cost:2.5},{attack_factor:4,cost:3},{attack_factor:5,cost:3.5}]};return e},methods:{select_attack_factor:function(e){this.$emit("update-attack-factor",this.attack_factor_table[e])}},computed:{attack_factor_index:function(){let e=0;return this.attackFactor,this.attack_factor_table.some(function(t,a){return t.attack_factor==this.attackFactor.attack_factor&&(e=a,!0)},this),this.attack_factor_table[e].cost!==this.attackFactor.cost&&this.select_attack_factor(e),[e]}}},o=l,d=a("2877"),u=Object(d["a"])(o,s,n,!1,null,"5e856896",null);t["default"]=u.exports},"28a5":function(e,t,a){"use strict";var s=a("aae3"),n=a("cb7c"),i=a("ebd6"),c=a("0390"),r=a("9def"),l=a("5f1b"),o=a("520a"),d=a("79e5"),u=Math.min,_=[].push,f="split",m="length",p="lastIndex",h=4294967295,k=!d(function(){RegExp(h,"y")});a("214f")("split",2,function(e,t,a,d){var y;return y="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[m]||2!="ab"[f](/(?:ab)*/)[m]||4!="."[f](/(.?)(.?)/)[m]||"."[f](/()()/)[m]>1||""[f](/.?/)[m]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!s(e))return a.call(n,e,t);var i,c,r,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,f=void 0===t?h:t>>>0,k=new RegExp(e.source,d+"g");while(i=o.call(k,n)){if(c=k[p],c>u&&(l.push(n.slice(u,i.index)),i[m]>1&&i.index<n[m]&&_.apply(l,i.slice(1)),r=i[0][m],u=c,l[m]>=f))break;k[p]===i.index&&k[p]++}return u===n[m]?!r&&k.test("")||l.push(""):l.push(n.slice(u)),l[m]>f?l.slice(0,f):l}:"0"[f](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,s){var n=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n,s):y.call(String(n),a,s)},function(e,t){var s=d(y,e,this,t,y!==a);if(s.done)return s.value;var o=n(e),_=String(this),f=i(o,RegExp),m=o.unicode,p=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(k?"y":"g"),v=new f(k?o:"^(?:"+o.source+")",p),b=void 0===t?h:t>>>0;if(0===b)return[];if(0===_.length)return null===l(v,_)?[_]:[];var w=0,g=0,x=[];while(g<_.length){v.lastIndex=k?g:0;var C,D=l(v,k?_:_.slice(g));if(null===D||(C=u(r(v.lastIndex+(k?0:g)),_.length))===w)g=c(_,g,m);else{if(x.push(_.slice(w,g)),x.length===b)return x;for(var S=1;S<=D.length-1;S++)if(x.push(D[S]),x.length===b)return x;g=w=C}}return x.push(_.slice(w)),x}]})},3321:function(e,t,a){},"97ea":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[a("div",{staticClass:"metallic_background_small1"},[a("div",{staticClass:"subsection_container1"},[a("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),a("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return a("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return a("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,n){return a("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):"col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return a("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return a("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,n){return a("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),a("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return a("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?a("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},n=[],i=(a("ac6a"),a("28a5"),a("072f")),c={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let a=this.format[t].split(",").map(e=>e.toLowerCase()),s=e;if(a.includes("percent")&&(s=100*e+"%"),a.includes("multiplier")&&(s="x"+s),a.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return a.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,a)=>{let s={};for(let n in a)Object.keys(e).includes(n)&&(s[n]=a[n]);return t.push(s),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let a in t){"undefined"===typeof e[a]&&(e[a]="");let s=""+t[a];e[a].length<=s.length&&(e[a]="xx"+s+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},r=c,l=(a("bc12"),a("2877")),o=Object(l["a"])(r,s,n,!1,null,"1103ef03",null);t["default"]=o.exports},aae3:function(e,t,a){var s=a("d3f4"),n=a("2d95"),i=a("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}},bc12:function(e,t,a){"use strict";var s=a("3321"),n=a.n(s);n.a},ebd6:function(e,t,a){var s=a("cb7c"),n=a("d8e8"),i=a("2b4c")("species");e.exports=function(e,t){var a,c=s(e).constructor;return void 0===c||void 0==(a=s(c)[i])?t:n(a)}}}]);
//# sourceMappingURL=chunk-1a520e92.284a7d30.js.map