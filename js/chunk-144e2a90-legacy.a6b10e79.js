(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-144e2a90","chunk-5a8f0fc3"],{"110f":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.da_table,headers:{da:"DA",cost:"Cost"},name:"Defense Ability",flow:"row",showHeaders:!0,format:{cost:"multiplier"},selectedIndices:e.selected_da_index},on:{"update-selected-indices":e.select_da}})},a=[],i=n("072f"),l=n("97ea"),r={name:"mek_shield_defense_ability",props:["defense_ability","cost"],mixins:[i["a"]],components:{"mek-sub-component-table":l["default"]},data:function(){var e={da_table:[{da:-4,cost:.6},{da:-3,cost:.8},{da:-2,cost:1},{da:-1,cost:1.25},{da:0,cost:1.5}]};return e},methods:{select_da:function(e){this.$emit("update-defense-ability",this.da_table[e])}},computed:{selected_da_index:function(){var e=2;return this.da_table.some(function(t,n){return t.da==this.defense_ability&&(e=n,!0)},this),this.da_table[e].cost!==this.cost&&this.select_da(e),[e]}}},c=r,d=n("2877"),u=Object(d["a"])(c,s,a,!1,null,null,null);t["default"]=u.exports},"28a5":function(e,t,n){"use strict";var s=n("aae3"),a=n("cb7c"),i=n("ebd6"),l=n("0390"),r=n("9def"),c=n("5f1b"),d=n("520a"),u=n("79e5"),o=Math.min,m=[].push,_="split",f="length",h="lastIndex",p=4294967295,y=!u(function(){RegExp(p,"y")});n("214f")("split",2,function(e,t,n,u){var v;return v="c"=="abbc"[_](/(b)*/)[1]||4!="test"[_](/(?:)/,-1)[f]||2!="ab"[_](/(?:ab)*/)[f]||4!="."[_](/(.?)(.?)/)[f]||"."[_](/()()/)[f]>1||""[_](/.?/)[f]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(a,e,t);var i,l,r,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,_=void 0===t?p:t>>>0,y=new RegExp(e.source,u+"g");while(i=d.call(y,a)){if(l=y[h],l>o&&(c.push(a.slice(o,i.index)),i[f]>1&&i.index<a[f]&&m.apply(c,i.slice(1)),r=i[0][f],o=l,c[f]>=_))break;y[h]===i.index&&y[h]++}return o===a[f]?!r&&y.test("")||c.push(""):c.push(a.slice(o)),c[f]>_?c.slice(0,_):c}:"0"[_](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,s):v.call(String(a),n,s)},function(e,t){var s=u(v,e,this,t,v!==n);if(s.done)return s.value;var d=a(e),m=String(this),_=i(d,RegExp),f=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(y?"y":"g"),b=new _(y?d:"^(?:"+d.source+")",h),w=void 0===t?p:t>>>0;if(0===w)return[];if(0===m.length)return null===c(b,m)?[m]:[];var k=0,g=0,C=[];while(g<m.length){b.lastIndex=y?g:0;var x,D=c(b,y?m:m.slice(g));if(null===D||(x=o(r(b.lastIndex+(y?0:g)),m.length))===k)g=l(m,g,f);else{if(C.push(m.slice(k,g)),C.length===w)return C;for(var S=1;S<=D.length-1;S++)if(C.push(D[S]),C.length===w)return C;g=k=x}}return C.push(m.slice(k)),C}]})},3321:function(e,t,n){},"97ea":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,a){return n("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,a){return n("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=n("a4bb"),l=n.n(i),r=(n("6762"),n("2fdb"),n("28a5"),n("072f")),c={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[r["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,n){var s={};for(var a in n)l()(e).includes(a)&&(s[a]=n[a]);return t.push(s),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var s=""+t[n];e[n].length<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},d=c,u=(n("bc12"),n("2877")),o=Object(u["a"])(d,s,a,!1,null,"1103ef03",null);t["default"]=o.exports},bc12:function(e,t,n){"use strict";var s=n("3321"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-144e2a90-legacy.a6b10e79.js.map