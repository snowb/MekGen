(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-range-mod","chunk-3671740f"],{"28a5":function(e,t,n){"use strict";var s=n("aae3"),a=n("cb7c"),i=n("ebd6"),r=n("0390"),l=n("9def"),d=n("5f1b"),o=n("520a"),c=n("79e5"),u=Math.min,m=[].push,_="split",h="length",p="lastIndex",f=4294967295,g=!c(function(){RegExp(f,"y")});n("214f")("split",2,function(e,t,n,c){var v;return v="c"=="abbc"[_](/(b)*/)[1]||4!="test"[_](/(?:)/,-1)[h]||2!="ab"[_](/(?:ab)*/)[h]||4!="."[_](/(.?)(.?)/)[h]||"."[_](/()()/)[h]>1||""[_](/.?/)[h]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(a,e,t);var i,r,l,d=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,_=void 0===t?f:t>>>0,g=new RegExp(e.source,c+"g");while(i=o.call(g,a)){if(r=g[p],r>u&&(d.push(a.slice(u,i.index)),i[h]>1&&i.index<a[h]&&m.apply(d,i.slice(1)),l=i[0][h],u=r,d[h]>=_))break;g[p]===i.index&&g[p]++}return u===a[h]?!l&&g.test("")||d.push(""):d.push(a.slice(u)),d[h]>_?d.slice(0,_):d}:"0"[_](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,s):v.call(String(a),n,s)},function(e,t){var s=c(v,e,this,t,v!==n);if(s.done)return s.value;var o=a(e),m=String(this),_=i(o,RegExp),h=o.unicode,p=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"y":"g"),b=new _(g?o:"^(?:"+o.source+")",p),w=void 0===t?f:t>>>0;if(0===w)return[];if(0===m.length)return null===d(b,m)?[m]:[];var y=0,k=0,x=[];while(k<m.length){b.lastIndex=g?k:0;var C,I=d(b,g?m:m.slice(k));if(null===I||(C=u(l(b.lastIndex+(g?0:k)),m.length))===y)k=r(m,k,h);else{if(x.push(m.slice(y,k)),x.length===w)return x;for(var D=1;D<=I.length-1;D++)if(x.push(I[D]),x.length===w)return x;k=y=C}}return x.push(m.slice(y)),x}]})},"6c16":function(e,t,n){"use strict";var s=n("d9d1"),a=n.n(s);a.a},"97ea":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,a){return n("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=(n("ac6a"),n("28a5"),n("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let n=this.format[t].split(",").map(e=>e.toLowerCase()),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,n)=>{let s={};for(let a in n)Object.keys(e).includes(a)&&(s[a]=n[a]);return t.push(s),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let n in t){"undefined"===typeof e[n]&&(e[n]="");let s=""+t[n];e[n].length<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},l=r,d=(n("6c16"),n("2877")),o=Object(d["a"])(l,s,a,!1,null,"3a1dbf41",null);t["default"]=o.exports},aae3:function(e,t,n){var s=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},c43c:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.range_mod_table,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost"},name:"Range Mod",flow:"col",showHeaders:!0,format:{range_mod:"percent",cost:"multiplier"},selectedIndices:e.selected_range_mod_index},on:{"update-selected-indices":e.select_range_mod}})},a=[],i=n("072f"),r=n("8fcf"),l=n("97ea"),d={name:"mek_beam_range_mod",props:["rangeMod","baseRange","antiMissile"],mixins:[i["a"],r["a"]],components:{"mek-sub-component-table":l["default"]},data:function(){let e={range_mod_table:[{range_mod:.25,cost:.62,range:1},{range_mod:.5,cost:.75,range:2},{range_mod:.75,cost:.88,range:3},{range_mod:1,cost:1,range:4},{range_mod:1.25,cost:1.12,range:5},{range_mod:1.5,cost:1.25,range:6},{range_mod:1.75,cost:1.38,range:7},{range_mod:2,cost:1.5,range:8},{range_mod:2.5,cost:1.75,range:10},{range_mod:3,cost:2,range:12}]};return e},methods:{select_range_mod:function(e){this.$emit("update-range-mod",this.range_mod_table[e])}},computed:{selected_range_mod_index:function(){let e=0;return this.rangeMod,this.range_mod_table.some((t,n)=>{return this.antiMissile?1==t.cost&&(e=n,!0):t.range_mod==this.rangeMod.range_mod?(e=n,!0):void 0},this),this.rangeMod.cost!=this.range_mod_table[e].cost&&this.select_range_mod(e),[e]}},watch:{baseRange(e){let t=this.range_mod_table.map(t=>{return{range_mod:t.range_mod,cost:t.cost,range:e*t.range_mod}});this.$set(this,"range_mod_table",t)}}},o=d,c=n("2877"),u=Object(c["a"])(o,s,a,!1,null,null,null);t["default"]=u.exports},d9d1:function(e,t,n){},ebd6:function(e,t,n){var s=n("cb7c"),a=n("d8e8"),i=n("2b4c")("species");e.exports=function(e,t){var n,r=s(e).constructor;return void 0===r||void 0==(n=s(r)[i])?t:a(n)}}}]);
//# sourceMappingURL=mek_beam-range-mod.b7b8a710.js.map