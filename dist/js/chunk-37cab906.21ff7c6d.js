(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37cab906","chunk-0a2ef8c8"],{"28a5":function(e,t,s){"use strict";var n=s("aae3"),a=s("cb7c"),i=s("ebd6"),l=s("0390"),r=s("9def"),u=s("5f1b"),c=s("520a"),d=s("79e5"),o=Math.min,_=[].push,m="split",p="length",h="lastIndex",f=4294967295,v=!d(function(){RegExp(f,"y")});s("214f")("split",2,function(e,t,s,d){var b;return b="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(a,e,t);var i,l,r,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,m=void 0===t?f:t>>>0,v=new RegExp(e.source,d+"g");while(i=c.call(v,a)){if(l=v[h],l>o&&(u.push(a.slice(o,i.index)),i[p]>1&&i.index<a[p]&&_.apply(u,i.slice(1)),r=i[0][p],o=l,u[p]>=m))break;v[h]===i.index&&v[h]++}return o===a[p]?!r&&v.test("")||u.push(""):u.push(a.slice(o)),u[p]>m?u.slice(0,m):u}:"0"[m](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var a=e(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,a,n):b.call(String(a),s,n)},function(e,t){var n=d(b,e,this,t,b!==s);if(n.done)return n.value;var c=a(e),_=String(this),m=i(c,RegExp),p=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),y=new m(v?c:"^(?:"+c.source+")",h),w=void 0===t?f:t>>>0;if(0===w)return[];if(0===_.length)return null===u(y,_)?[_]:[];var k=0,g=0,x=[];while(g<_.length){y.lastIndex=v?g:0;var C,D=u(y,v?_:_.slice(g));if(null===D||(C=o(r(y.lastIndex+(v?0:g)),_.length))===k)g=l(_,g,p);else{if(x.push(_.slice(k,g)),x.length===w)return x;for(var S=1;S<=D.length-1;S++)if(x.push(D[S]),x.length===w)return x;g=k=C}}return x.push(_.slice(k)),x}]})},3321:function(e,t,s){},"97ea":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1"},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,a){return s("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):"col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,a){return s("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),s("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][n])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=(s("ac6a"),s("28a5"),s("072f")),l={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),n=e;if(s.includes("percent")&&(n=100*e+"%"),s.includes("multiplier")&&(n="x"+n),s.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return s.includes("nullzero")&&0===e&&(n="Ø"),n}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,s)=>{let n={};for(let a in s)Object.keys(e).includes(a)&&(n[a]=s[a]);return t.push(n),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let n=""+t[s];e[s].length<=n.length&&(e[s]="xx"+n+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},r=l,u=(s("bc12"),s("2877")),c=Object(u["a"])(r,n,a,!1,null,"1103ef03",null);t["default"]=c.exports},aae3:function(e,t,s){var n=s("d3f4"),a=s("2d95"),i=s("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},bc12:function(e,t,s){"use strict";var n=s("3321"),a=s.n(n);a.a},ebd6:function(e,t,s){var n=s("cb7c"),a=s("d8e8"),i=s("2b4c")("species");e.exports=function(e,t){var s,l=n(e).constructor;return void 0===l||void 0==(s=n(l)[i])?t:a(s)}},f594:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.burst_value_table,headers:{burst_value:"BV",cost:"Cost"},showHeaders:!0,name:"Burst Value",flow:"row",format:{cost:"multiplier"},selectedIndices:e.burst_value_index},on:{"update-selected-indices":e.select_burst_value}})},a=[],i=s("072f"),l=s("8fcf"),r=s("97ea"),u={name:"mek_projectile_burst_value",props:["burstValue"],mixins:[i["a"],l["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){let e={burst_value_table:[{burst_value:1,cost:1},{burst_value:2,cost:1.5},{burst_value:3,cost:2},{burst_value:4,cost:2.5},{burst_value:5,cost:3},{burst_value:6,cost:3.5},{burst_value:7,cost:4},{burst_value:8,cost:4.5}]};return e},methods:{select_burst_value:function(e){this.$emit("update-burst-value",this.burst_value_table[e])}},computed:{burst_value_index:function(){let e=0;return this.burstValue,this.burst_value_table.some(function(t,s){return t.burst_value==this.burstValue.burst_value&&(e=s,!0)},this),this.burst_value_table[e].cost!==this.burstValue.cost&&this.select_burst_value(e),[e]}}},c=u,d=s("2877"),o=Object(d["a"])(c,n,a,!1,null,"ccb22a6a",null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-37cab906.21ff7c6d.js.map