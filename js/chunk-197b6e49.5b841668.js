(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-197b6e49","chunk-3671740f"],{"28a5":function(e,t,s){"use strict";var n=s("aae3"),i=s("cb7c"),a=s("ebd6"),l=s("0390"),r=s("9def"),d=s("5f1b"),c=s("520a"),u=s("79e5"),o=Math.min,f=[].push,m="split",h="length",_="lastIndex",p=4294967295,v=!u(function(){RegExp(p,"y")});s("214f")("split",2,function(e,t,s,u){var b;return b="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[h]||2!="ab"[m](/(?:ab)*/)[h]||4!="."[m](/(.?)(.?)/)[h]||"."[m](/()()/)[h]>1||""[m](/.?/)[h]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(i,e,t);var a,l,r,d=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,m=void 0===t?p:t>>>0,v=new RegExp(e.source,u+"g");while(a=c.call(v,i)){if(l=v[_],l>o&&(d.push(i.slice(o,a.index)),a[h]>1&&a.index<i[h]&&f.apply(d,a.slice(1)),r=a[0][h],o=l,d[h]>=m))break;v[_]===a.index&&v[_]++}return o===i[h]?!r&&v.test("")||d.push(""):d.push(i.slice(o)),d[h]>m?d.slice(0,m):d}:"0"[m](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var i=e(this),a=void 0==s?void 0:s[t];return void 0!==a?a.call(s,i,n):b.call(String(i),s,n)},function(e,t){var n=u(b,e,this,t,b!==s);if(n.done)return n.value;var c=i(e),f=String(this),m=a(c,RegExp),h=c.unicode,_=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),w=new m(v?c:"^(?:"+c.source+")",_),y=void 0===t?p:t>>>0;if(0===y)return[];if(0===f.length)return null===d(w,f)?[f]:[];var k=0,g=0,x=[];while(g<f.length){w.lastIndex=v?g:0;var C,I=d(w,v?f:f.slice(g));if(null===I||(C=o(r(w.lastIndex+(v?0:g)),f.length))===k)g=l(f,g,h);else{if(x.push(f.slice(k,g)),x.length===y)return x;for(var D=1;D<=I.length-1;D++)if(x.push(I[D]),x.length===y)return x;g=k=C}}return x.push(f.slice(k)),x}]})},"6c16":function(e,t,s){"use strict";var n=s("d9d1"),i=s.n(n);i.a},"97ea":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1"},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,i){return s("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):"col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),s("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][n])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=(s("ac6a"),s("28a5"),s("072f")),l={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[a["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),n=e;if(s.includes("percent")&&(n=100*e+"%"),s.includes("multiplier")&&(n="x"+n),s.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return s.includes("nullzero")&&0===e&&(n="Ø"),n}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,s)=>{let n={};for(let i in s)Object.keys(e).includes(i)&&(n[i]=s[i]);return t.push(n),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let n=""+t[s];e[s].length<=n.length&&(e[s]="xx"+n+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},r=l,d=(s("6c16"),s("2877")),c=Object(d["a"])(r,n,i,!1,null,"3a1dbf41",null);t["default"]=c.exports},aae3:function(e,t,s){var n=s("d3f4"),i=s("2d95"),a=s("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},d9d1:function(e,t,s){},e556:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.multi_feed_table,headers:{feeds:"Feeds",cost:"Cost"},showHeaders:!0,name:"Multi-Feed",flow:"row",format:{cost:"multiplier"},selectedIndices:e.multi_feed_index},on:{"update-selected-indices":e.select_multi_feed}})},i=[],a=s("072f"),l=s("8fcf"),r=s("97ea"),d={name:"mek_projectile_multi_feed",props:["multiFeed"],mixins:[a["a"],l["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){let e={multi_feed_table:[{feeds:1,cost:1},{feeds:2,cost:1.2},{feeds:3,cost:1.4},{feeds:4,cost:1.6}]};return e},methods:{select_multi_feed:function(e){this.$emit("update-multi-feed",this.multi_feed_table[e])}},computed:{multi_feed_index:function(){let e=0;return this.multiFeed,this.multi_feed_table.some(function(t,s){return t.feeds==this.multiFeed.feeds&&(e=s,!0)},this),this.multi_feed_table[e].cost!==this.multiFeed.cost&&this.select_multi_feed(e),[e]}}},c=d,u=s("2877"),o=Object(u["a"])(c,n,i,!1,null,"0f052126",null);t["default"]=o.exports},ebd6:function(e,t,s){var n=s("cb7c"),i=s("d8e8"),a=s("2b4c")("species");e.exports=function(e,t){var s,l=n(e).constructor;return void 0===l||void 0==(s=n(l)[a])?t:i(s)}}}]);
//# sourceMappingURL=chunk-197b6e49.5b841668.js.map