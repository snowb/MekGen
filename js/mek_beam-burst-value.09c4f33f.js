(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-burst-value","chunk-0a2ef8c8"],{"1d74":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.burst_value_table,headers:{burst_value:"BV",cost:"Cost"},showHeaders:!0,name:"Burst Value",flow:"row",format:{cost:"multiplier"},selectedIndices:e.burst_value_index},on:{"update-selected-indices":e.select_burst_value}})},n=[],l=s("072f"),i=s("8fcf"),r=s("97ea"),u={name:"mek_beam_burst_value",props:["burstValue"],mixins:[l["a"],i["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){let e={burst_value_table:[{burst_value:1,cost:1},{burst_value:2,cost:1.5},{burst_value:3,cost:2},{burst_value:4,cost:2.5},{burst_value:5,cost:3},{burst_value:6,cost:3.5},{burst_value:7,cost:4},{burst_value:8,cost:4.5},{burst_value:1/0,cost:5}]};return e},methods:{select_burst_value:function(e){this.$emit("update-burst-value",this.burst_value_table[e])}},computed:{burst_value_index:function(){let e=0;return this.burstValue,this.burst_value_table.some(function(t,s){return t.burst_value==this.burstValue.burst_value&&(e=s,!0)},this),this.burst_value_table[e].cost!==this.burstValue.cost&&this.select_burst_value(e),[e]}}},c=u,d=s("2877"),o=Object(d["a"])(c,a,n,!1,null,"a9120e4c",null);t["default"]=o.exports},"28a5":function(e,t,s){"use strict";var a=s("aae3"),n=s("cb7c"),l=s("ebd6"),i=s("0390"),r=s("9def"),u=s("5f1b"),c=s("520a"),d=s("79e5"),o=Math.min,_=[].push,m="split",p="length",h="lastIndex",f=4294967295,v=!d(function(){RegExp(f,"y")});s("214f")("split",2,function(e,t,s,d){var b;return b="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!a(e))return s.call(n,e,t);var l,i,r,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,m=void 0===t?f:t>>>0,v=new RegExp(e.source,d+"g");while(l=c.call(v,n)){if(i=v[h],i>o&&(u.push(n.slice(o,l.index)),l[p]>1&&l.index<n[p]&&_.apply(u,l.slice(1)),r=l[0][p],o=i,u[p]>=m))break;v[h]===l.index&&v[h]++}return o===n[p]?!r&&v.test("")||u.push(""):u.push(n.slice(o)),u[p]>m?u.slice(0,m):u}:"0"[m](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,a){var n=e(this),l=void 0==s?void 0:s[t];return void 0!==l?l.call(s,n,a):b.call(String(n),s,a)},function(e,t){var a=d(b,e,this,t,b!==s);if(a.done)return a.value;var c=n(e),_=String(this),m=l(c,RegExp),p=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),y=new m(v?c:"^(?:"+c.source+")",h),w=void 0===t?f:t>>>0;if(0===w)return[];if(0===_.length)return null===u(y,_)?[_]:[];var k=0,g=0,x=[];while(g<_.length){y.lastIndex=v?g:0;var C,D=u(y,v?_:_.slice(g));if(null===D||(C=o(r(y.lastIndex+(v?0:g)),_.length))===k)g=i(_,g,p);else{if(x.push(_.slice(k,g)),x.length===w)return x;for(var S=1;S<=D.length-1;S++)if(x.push(D[S]),x.length===w)return x;g=k=C}}return x.push(_.slice(k)),x}]})},3321:function(e,t,s){},"97ea":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1"},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return s("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return s("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,n){return s("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):"col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return s("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return s("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return s("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return s("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return s("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return s("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,n){return s("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return s("th",{key:a+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),s("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][a])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,a){return s("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(a),e.showDropdown=!1}}},e._l(e.headers,function(a,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e()])])])},n=[],l=(s("ac6a"),s("28a5"),s("072f")),i={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[l["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),a=e;if(s.includes("percent")&&(a=100*e+"%"),s.includes("multiplier")&&(a="x"+a),s.includes("wide-angle"))switch(e){case 0:a="Ø";break;case 1:a="Hex";break;default:a=e+"°"}return s.includes("nullzero")&&0===e&&(a="Ø"),a}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,s)=>{let a={};for(let n in s)Object.keys(e).includes(n)&&(a[n]=s[n]);return t.push(a),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let a=""+t[s];e[s].length<=a.length&&(e[s]="xx"+a+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},r=i,u=(s("bc12"),s("2877")),c=Object(u["a"])(r,a,n,!1,null,"1103ef03",null);t["default"]=c.exports},aae3:function(e,t,s){var a=s("d3f4"),n=s("2d95"),l=s("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==n(e))}},bc12:function(e,t,s){"use strict";var a=s("3321"),n=s.n(a);n.a},ebd6:function(e,t,s){var a=s("cb7c"),n=s("d8e8"),l=s("2b4c")("species");e.exports=function(e,t){var s,i=a(e).constructor;return void 0===i||void 0==(s=a(i)[l])?t:n(s)}}}]);
//# sourceMappingURL=mek_beam-burst-value.09c4f33f.js.map