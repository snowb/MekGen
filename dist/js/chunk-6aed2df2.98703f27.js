(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6aed2df2","chunk-21801d46"],{"28a5":function(e,t,a){"use strict";var n=a("aae3"),s=a("cb7c"),i=a("ebd6"),c=a("0390"),r=a("9def"),l=a("5f1b"),u=a("520a"),d=a("79e5"),o=Math.min,f=[].push,h="split",m="length",_="lastIndex",p=4294967295,y=!d(function(){RegExp(p,"y")});a("214f")("split",2,function(e,t,a,d){var b;return b="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[m]||2!="ab"[h](/(?:ab)*/)[m]||4!="."[h](/(.?)(.?)/)[m]||"."[h](/()()/)[m]>1||""[h](/.?/)[m]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!n(e))return a.call(s,e,t);var i,c,r,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,h=void 0===t?p:t>>>0,y=new RegExp(e.source,d+"g");while(i=u.call(y,s)){if(c=y[_],c>o&&(l.push(s.slice(o,i.index)),i[m]>1&&i.index<s[m]&&f.apply(l,i.slice(1)),r=i[0][m],o=c,l[m]>=h))break;y[_]===i.index&&y[_]++}return o===s[m]?!r&&y.test("")||l.push(""):l.push(s.slice(o)),l[m]>h?l.slice(0,h):l}:"0"[h](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,n){var s=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,s,n):b.call(String(s),a,n)},function(e,t){var n=d(b,e,this,t,b!==a);if(n.done)return n.value;var u=s(e),f=String(this),h=i(u,RegExp),m=u.unicode,_=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(y?"y":"g"),v=new h(y?u:"^(?:"+u.source+")",_),w=void 0===t?p:t>>>0;if(0===w)return[];if(0===f.length)return null===l(v,f)?[f]:[];var k=0,g=0,x=[];while(g<f.length){v.lastIndex=y?g:0;var C,D=l(v,y?f:f.slice(g));if(null===D||(C=o(r(v.lastIndex+(y?0:g)),f.length))===k)g=c(f,g,m);else{if(x.push(f.slice(k,g)),x.length===w)return x;for(var S=1;S<=D.length-1;S++)if(x.push(D[S]),x.length===w)return x;g=k=C}}return x.push(f.slice(k)),x}]})},"2edc":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.accuracy_table,headers:e.headers,name:"Accuracy",flow:"row",showHeaders:!0,format:{cost:"multiplier"},selectedIndices:e.accuracy_index},on:{"update-selected-indices":e.select_accuracy}})},s=[],i=a("072f"),c=a("8fcf"),r=a("97ea"),l={name:"mek_emw_accuracy",props:["accuracy","isBeamShield","isVariableBeamShield"],mixins:[i["a"],c["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){var e={accuracy_table:[{accuracy:-2,cost:.6,defense_ability:-4},{accuracy:-1,cost:.8,defense_ability:-3},{accuracy:0,cost:.9,defense_ability:-2},{accuracy:1,cost:1,defense_ability:-1},{accuracy:2,cost:1.5,defense_ability:0},{accuracy:3,cost:2,defense_ability:1}]};return e},methods:{select_accuracy:function(e){this.$emit("update-accuracy",this.accuracy_table[e])}},computed:{accuracy_index:function(){var e=2;return this.accuracy,this.accuracy_table.some(function(t,a){return t.accuracy==this.accuracy.accuracy&&(e=a,!0)},this),this.accuracy_table[e].cost!==this.cost&&this.select_accuracy(e),[e]},headers:function(){return this.isVariableBeamShield?{accuracy:"WA",defense_ability:"DA",cost:"Cost"}:this.isBeamShield?{defense_ability:"DA",cost:"Cost"}:{accuracy:"WA",cost:"Cost"}}}},u=l,d=a("2877"),o=Object(d["a"])(u,n,s,!1,null,"350f16b3",null);t["default"]=o.exports},"6c16":function(e,t,a){"use strict";var n=a("d9d1"),s=a.n(n);s.a},"97ea":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[a("div",{staticClass:"metallic_background_small1"},[a("div",{staticClass:"subsection_container1"},[a("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),a("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,n){return a("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return a("td",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,s){return a("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):"col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return a("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,n){return a("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,s){return a("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return a("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return a("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),a("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][n])+"\n                    ")])}),0),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return a("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?a("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,n){return a("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,s){return a("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return a("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e()])])])},s=[],i=a("a4bb"),c=a.n(i),r=(a("6762"),a("2fdb"),a("28a5"),a("072f")),l={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[r["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var a=this.format[t].split(",").map(function(e){return e.toLowerCase()}),n=e;if(a.includes("percent")&&(n=100*e+"%"),a.includes("multiplier")&&(n="x"+n),a.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return a.includes("nullzero")&&0===e&&(n="Ø"),n}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,a){var n={};for(var s in a)c()(e).includes(s)&&(n[s]=a[s]);return t.push(n),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var a in t){"undefined"===typeof e[a]&&(e[a]="");var n=""+t[a];e[a].length<=n.length&&(e[a]="xx"+n+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},u=l,d=(a("6c16"),a("2877")),o=Object(d["a"])(u,n,s,!1,null,"3a1dbf41",null);t["default"]=o.exports},d9d1:function(e,t,a){}}]);
//# sourceMappingURL=chunk-6aed2df2.98703f27.js.map