(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c63fc","chunk-5a8f0fc3"],{"28a5":function(e,t,s){"use strict";var n=s("aae3"),a=s("cb7c"),i=s("ebd6"),r=s("0390"),l=s("9def"),c=s("5f1b"),d=s("520a"),u=s("79e5"),o=Math.min,m=[].push,f="split",h="length",_="lastIndex",p=4294967295,v=!u(function(){RegExp(p,"y")});s("214f")("split",2,function(e,t,s,u){var y;return y="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[h]||2!="ab"[f](/(?:ab)*/)[h]||4!="."[f](/(.?)(.?)/)[h]||"."[f](/()()/)[h]>1||""[f](/.?/)[h]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(a,e,t);var i,r,l,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,f=void 0===t?p:t>>>0,v=new RegExp(e.source,u+"g");while(i=d.call(v,a)){if(r=v[_],r>o&&(c.push(a.slice(o,i.index)),i[h]>1&&i.index<a[h]&&m.apply(c,i.slice(1)),l=i[0][h],o=r,c[h]>=f))break;v[_]===i.index&&v[_]++}return o===a[h]?!l&&v.test("")||c.push(""):c.push(a.slice(o)),c[h]>f?c.slice(0,f):c}:"0"[f](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var a=e(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,a,n):y.call(String(a),s,n)},function(e,t){var n=u(y,e,this,t,y!==s);if(n.done)return n.value;var d=a(e),m=String(this),f=i(d,RegExp),h=d.unicode,_=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),b=new f(v?d:"^(?:"+d.source+")",_),w=void 0===t?p:t>>>0;if(0===w)return[];if(0===m.length)return null===c(b,m)?[m]:[];var k=0,g=0,C=[];while(g<m.length){b.lastIndex=v?g:0;var x,D=c(b,v?m:m.slice(g));if(null===D||(x=o(l(b.lastIndex+(v?0:g)),m.length))===k)g=r(m,g,h);else{if(C.push(m.slice(k,g)),C.length===w)return C;for(var S=1;S<=D.length-1;S++)if(C.push(D[S]),C.length===w)return C;g=k=x}}return C.push(m.slice(k)),C}]})},3321:function(e,t,s){},"97ea":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1"},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,a){return s("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):"col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,a){return s("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),s("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][n])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=s("a4bb"),r=s.n(i),l=(s("6762"),s("2fdb"),s("28a5"),s("072f")),c={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[l["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var s=this.format[t].split(",").map(function(e){return e.toLowerCase()}),n=e;if(s.includes("percent")&&(n=100*e+"%"),s.includes("multiplier")&&(n="x"+n),s.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return s.includes("nullzero")&&0===e&&(n="Ø"),n}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,s){var n={};for(var a in s)r()(e).includes(a)&&(n[a]=s[a]);return t.push(n),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var s in t){"undefined"===typeof e[s]&&(e[s]="");var n=""+t[s];e[s].length<=n.length&&(e[s]="xx"+n+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},d=c,u=(s("bc12"),s("2877")),o=Object(u["a"])(d,n,a,!1,null,"1103ef03",null);t["default"]=o.exports},bc12:function(e,t,s){"use strict";var n=s("3321"),a=s.n(n);a.a},d493:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.smart_table,headers:{smart:"Rounds",cost:"Cost"},showHeaders:!0,name:"Smart",flow:"row",format:{cost:"multiplier",smart:"nullzero"},selectedIndices:e.smart_index},on:{"update-selected-indices":e.select_smart}})},a=[],i=s("072f"),r=s("8fcf"),l=s("97ea"),c={name:"mek_missile_smart",props:["smart"],mixins:[i["a"],r["a"]],components:{"mek-sub-component-table":l["default"]},data:function(){var e={smart_table:[{smart:0,cost:1},{smart:1,cost:2.5},{smart:2,cost:3},{smart:3,cost:3.5},{smart:4,cost:4}]};return e},methods:{select_smart:function(e){this.$emit("update-smart",this.smart_table[e])}},computed:{smart_index:function(){var e=0;return this.smart,this.smart_table.some(function(t,s){return t.smart==this.smart.smart&&(e=s,!0)},this),this.smart_table[e].cost!==this.smart.cost&&this.select_smart(e),[e]}}},d=c,u=s("2877"),o=Object(u["a"])(d,n,a,!1,null,"12f6beb9",null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0c63fc-legacy.d1ff5ce7.js.map