(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-631e4896","chunk-5a8f0fc3"],{"28a5":function(e,t,n){"use strict";var s=n("aae3"),i=n("cb7c"),a=n("ebd6"),r=n("0390"),l=n("9def"),c=n("5f1b"),u=n("520a"),d=n("79e5"),o=Math.min,m=[].push,_="split",h="length",f="lastIndex",p=4294967295,v=!d(function(){RegExp(p,"y")});n("214f")("split",2,function(e,t,n,d){var y;return y="c"=="abbc"[_](/(b)*/)[1]||4!="test"[_](/(?:)/,-1)[h]||2!="ab"[_](/(?:ab)*/)[h]||4!="."[_](/(.?)(.?)/)[h]||"."[_](/()()/)[h]>1||""[_](/.?/)[h]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(i,e,t);var a,r,l,c=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,_=void 0===t?p:t>>>0,v=new RegExp(e.source,d+"g");while(a=u.call(v,i)){if(r=v[f],r>o&&(c.push(i.slice(o,a.index)),a[h]>1&&a.index<i[h]&&m.apply(c,a.slice(1)),l=a[0][h],o=r,c[h]>=_))break;v[f]===a.index&&v[f]++}return o===i[h]?!l&&v.test("")||c.push(""):c.push(i.slice(o)),c[h]>_?c.slice(0,_):c}:"0"[_](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,s):y.call(String(i),n,s)},function(e,t){var s=d(y,e,this,t,y!==n);if(s.done)return s.value;var u=i(e),m=String(this),_=a(u,RegExp),h=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),b=new _(v?u:"^(?:"+u.source+")",f),w=void 0===t?p:t>>>0;if(0===w)return[];if(0===m.length)return null===c(b,m)?[m]:[];var k=0,g=0,C=[];while(g<m.length){b.lastIndex=v?g:0;var x,I=c(b,v?m:m.slice(g));if(null===I||(x=o(l(b.lastIndex+(v?0:g)),m.length))===k)g=r(m,g,h);else{if(C.push(m.slice(k,g)),C.length===w)return C;for(var D=1;D<=I.length-1;D++)if(C.push(I[D]),C.length===w)return C;g=k=x}}return C.push(m.slice(k)),C}]})},3321:function(e,t,n){},"69f3":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.turns_table,headers:{time:"Turns",cost:"Cost"},name:"Turns in Use",flow:"row",showHeaders:!0,format:{cost:"multiplier"},selectedIndices:e.selected_turns_index},on:{"update-selected-indices":e.select_turns}})},i=[],a=n("072f"),r=n("97ea"),l={name:"mek_shield_turns_in_use",props:["turnsInUse"],mixins:[a["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){var e={turns_table:[{time:1,cost:.3},{time:2,cost:.4},{time:3,cost:.5},{time:4,cost:.6},{time:5,cost:.7},{time:7,cost:.8},{time:10,cost:.9},{time:"X",cost:1}]};return e},methods:{select_turns:function(e){this.$emit("update-turns-in-use",this.turns_table[e])}},computed:{selected_turns_index:function(){var e=7;return this.turns_table.some(function(t,n){return t.time==this.turnsInUse.time&&(e=n,!0)},this),this.turns_table[e].cost!==this.turnsInUse.cost&&this.select_turns(e),[e]}}},c=l,u=n("2877"),d=Object(u["a"])(c,s,i,!1,null,null,null);t["default"]=d.exports},"97ea":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=n("a4bb"),r=n.n(a),l=(n("6762"),n("2fdb"),n("28a5"),n("072f")),c={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[l["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,n){var s={};for(var i in n)r()(e).includes(i)&&(s[i]=n[i]);return t.push(s),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var s=""+t[n];e[n].length<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},u=c,d=(n("bc12"),n("2877")),o=Object(d["a"])(u,s,i,!1,null,"1103ef03",null);t["default"]=o.exports},bc12:function(e,t,n){"use strict";var s=n("3321"),i=n.n(s);i.a}}]);
//# sourceMappingURL=chunk-631e4896-legacy.8dc82754.js.map