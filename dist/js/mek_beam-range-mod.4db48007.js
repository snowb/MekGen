(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-range-mod","chunk-0a2ef8c8"],{"28a5":function(e,t,n){"use strict";var a=n("aae3"),s=n("cb7c"),i=n("ebd6"),r=n("0390"),l=n("9def"),d=n("5f1b"),c=n("520a"),o=n("79e5"),u=Math.min,m=[].push,_="split",h="length",p="lastIndex",f=4294967295,g=!o(function(){RegExp(f,"y")});n("214f")("split",2,function(e,t,n,o){var y;return y="c"=="abbc"[_](/(b)*/)[1]||4!="test"[_](/(?:)/,-1)[h]||2!="ab"[_](/(?:ab)*/)[h]||4!="."[_](/(.?)(.?)/)[h]||"."[_](/()()/)[h]>1||""[_](/.?/)[h]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(s,e,t);var i,r,l,d=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,_=void 0===t?f:t>>>0,g=new RegExp(e.source,o+"g");while(i=c.call(g,s)){if(r=g[p],r>u&&(d.push(s.slice(u,i.index)),i[h]>1&&i.index<s[h]&&m.apply(d,i.slice(1)),l=i[0][h],u=r,d[h]>=_))break;g[p]===i.index&&g[p]++}return u===s[h]?!l&&g.test("")||d.push(""):d.push(s.slice(u)),d[h]>_?d.slice(0,_):d}:"0"[_](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,a){var s=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,s,a):y.call(String(s),n,a)},function(e,t){var a=o(y,e,this,t,y!==n);if(a.done)return a.value;var c=s(e),m=String(this),_=i(c,RegExp),h=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),v=new _(g?c:"^(?:"+c.source+")",p),b=void 0===t?f:t>>>0;if(0===b)return[];if(0===m.length)return null===d(v,m)?[m]:[];var w=0,k=0,x=[];while(k<m.length){v.lastIndex=g?k:0;var C,D=d(v,g?m:m.slice(k));if(null===D||(C=u(l(v.lastIndex+(g?0:k)),m.length))===w)k=r(m,k,h);else{if(x.push(m.slice(w,k)),x.length===b)return x;for(var S=1;S<=D.length-1;S++)if(x.push(D[S]),x.length===b)return x;k=w=C}}return x.push(m.slice(w)),x}]})},3321:function(e,t,n){},"97ea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return n("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return n("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return n("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return n("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return n("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,s){return n("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][a])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(a),e.showDropdown=!1}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e()])])])},s=[],i=(n("ac6a"),n("28a5"),n("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let n=this.format[t].split(",").map(e=>e.toLowerCase()),a=e;if(n.includes("percent")&&(a=100*e+"%"),n.includes("multiplier")&&(a="x"+a),n.includes("wide-angle"))switch(e){case 0:a="Ø";break;case 1:a="Hex";break;default:a=e+"°"}return n.includes("nullzero")&&0===e&&(a="Ø"),a}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,n)=>{let a={};for(let s in n)Object.keys(e).includes(s)&&(a[s]=n[s]);return t.push(a),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let n in t){"undefined"===typeof e[n]&&(e[n]="");let a=""+t[n];e[n].length<=a.length&&(e[n]="xx"+a+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},l=r,d=(n("bc12"),n("2877")),c=Object(d["a"])(l,a,s,!1,null,"1103ef03",null);t["default"]=c.exports},aae3:function(e,t,n){var a=n("d3f4"),s=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==s(e))}},bc12:function(e,t,n){"use strict";var a=n("3321"),s=n.n(a);s.a},c43c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.range_mod_table,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost"},name:"Range Mod",flow:"col",showHeaders:!0,format:{range_mod:"percent",cost:"multiplier"},selectedIndices:e.selected_range_mod_index},on:{"update-selected-indices":e.select_range_mod}})},s=[],i=n("072f"),r=n("8fcf"),l=n("97ea"),d={name:"mek_beam_range_mod",props:["rangeMod","baseRange","antiMissile"],mixins:[i["a"],r["a"]],components:{"mek-sub-component-table":l["default"]},data:function(){let e={range_mod_table:[{range_mod:.25,cost:.62,range:1},{range_mod:.5,cost:.75,range:2},{range_mod:.75,cost:.88,range:3},{range_mod:1,cost:1,range:4},{range_mod:1.25,cost:1.12,range:5},{range_mod:1.5,cost:1.25,range:6},{range_mod:1.75,cost:1.38,range:7},{range_mod:2,cost:1.5,range:8},{range_mod:2.5,cost:1.75,range:10},{range_mod:3,cost:2,range:12}]};return e},methods:{select_range_mod:function(e){this.$emit("update-range-mod",this.range_mod_table[e])}},computed:{selected_range_mod_index:function(){let e=0;return this.rangeMod,this.range_mod_table.some((t,n)=>{return this.antiMissile?1==t.cost&&(e=n,!0):t.range_mod==this.rangeMod.range_mod?(e=n,!0):void 0},this),this.rangeMod.cost!=this.range_mod_table[e].cost&&this.select_range_mod(e),[e]}},watch:{baseRange(e){let t=this.range_mod_table.map(t=>{return{range_mod:t.range_mod,cost:t.cost,range:e*t.range_mod}});this.$set(this,"range_mod_table",t)}}},c=d,o=n("2877"),u=Object(o["a"])(c,a,s,!1,null,null,null);t["default"]=u.exports},ebd6:function(e,t,n){var a=n("cb7c"),s=n("d8e8"),i=n("2b4c")("species");e.exports=function(e,t){var n,r=a(e).constructor;return void 0===r||void 0==(n=a(r)[i])?t:s(n)}}}]);
//# sourceMappingURL=mek_beam-range-mod.4db48007.js.map