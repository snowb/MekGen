(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-range-mod","chunk-21801d46"],{"28a5":function(e,t,n){"use strict";var a=n("aae3"),s=n("cb7c"),i=n("ebd6"),r=n("0390"),l=n("9def"),o=n("5f1b"),d=n("520a"),c=n("79e5"),u=Math.min,m=[].push,_="split",f="length",h="lastIndex",p=4294967295,g=!c(function(){RegExp(p,"y")});n("214f")("split",2,function(e,t,n,c){var v;return v="c"=="abbc"[_](/(b)*/)[1]||4!="test"[_](/(?:)/,-1)[f]||2!="ab"[_](/(?:ab)*/)[f]||4!="."[_](/(.?)(.?)/)[f]||"."[_](/()()/)[f]>1||""[_](/.?/)[f]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(s,e,t);var i,r,l,o=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,_=void 0===t?p:t>>>0,g=new RegExp(e.source,c+"g");while(i=d.call(g,s)){if(r=g[h],r>u&&(o.push(s.slice(u,i.index)),i[f]>1&&i.index<s[f]&&m.apply(o,i.slice(1)),l=i[0][f],u=r,o[f]>=_))break;g[h]===i.index&&g[h]++}return u===s[f]?!l&&g.test("")||o.push(""):o.push(s.slice(u)),o[f]>_?o.slice(0,_):o}:"0"[_](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,a){var s=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,s,a):v.call(String(s),n,a)},function(e,t){var a=c(v,e,this,t,v!==n);if(a.done)return a.value;var d=s(e),m=String(this),_=i(d,RegExp),f=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),b=new _(g?d:"^(?:"+d.source+")",h),w=void 0===t?p:t>>>0;if(0===w)return[];if(0===m.length)return null===o(b,m)?[m]:[];var y=0,k=0,x=[];while(k<m.length){b.lastIndex=g?k:0;var C,I=o(b,g?m:m.slice(k));if(null===I||(C=u(l(b.lastIndex+(g?0:k)),m.length))===y)k=r(m,k,f);else{if(x.push(m.slice(y,k)),x.length===w)return x;for(var D=1;D<=I.length-1;D++)if(x.push(I[D]),x.length===w)return x;k=y=C}}return x.push(m.slice(y)),x}]})},"6c16":function(e,t,n){"use strict";var a=n("d9d1"),s=n.n(a);s.a},"97ea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return n("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return n("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return n("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][a])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(a),e.showDropdown=!1}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e()])])])},s=[],i=n("a4bb"),r=n.n(i),l=(n("6762"),n("2fdb"),n("28a5"),n("072f")),o={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[l["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),a=e;if(n.includes("percent")&&(a=100*e+"%"),n.includes("multiplier")&&(a="x"+a),n.includes("wide-angle"))switch(e){case 0:a="Ø";break;case 1:a="Hex";break;default:a=e+"°"}return n.includes("nullzero")&&0===e&&(a="Ø"),a}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,n){var a={};for(var s in n)r()(e).includes(s)&&(a[s]=n[s]);return t.push(a),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var a=""+t[n];e[n].length<=a.length&&(e[n]="xx"+a+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},d=o,c=(n("6c16"),n("2877")),u=Object(c["a"])(d,a,s,!1,null,"3a1dbf41",null);t["default"]=u.exports},c43c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.range_mod_table,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost"},name:"Range Mod",flow:"col",showHeaders:!0,format:{range_mod:"percent",cost:"multiplier"},selectedIndices:e.selected_range_mod_index},on:{"update-selected-indices":e.select_range_mod}})},s=[],i=n("072f"),r=n("8fcf"),l=n("97ea"),o={name:"mek_beam_range_mod",props:["rangeMod","baseRange","antiMissile"],mixins:[i["a"],r["a"]],components:{"mek-sub-component-table":l["default"]},data:function(){var e={range_mod_table:[{range_mod:.25,cost:.62,range:1},{range_mod:.5,cost:.75,range:2},{range_mod:.75,cost:.88,range:3},{range_mod:1,cost:1,range:4},{range_mod:1.25,cost:1.12,range:5},{range_mod:1.5,cost:1.25,range:6},{range_mod:1.75,cost:1.38,range:7},{range_mod:2,cost:1.5,range:8},{range_mod:2.5,cost:1.75,range:10},{range_mod:3,cost:2,range:12}]};return e},methods:{select_range_mod:function(e){this.$emit("update-range-mod",this.range_mod_table[e])}},computed:{selected_range_mod_index:function(){var e=this,t=0;return this.rangeMod,this.range_mod_table.some(function(n,a){return e.antiMissile?1==n.cost&&(t=a,!0):n.range_mod==e.rangeMod.range_mod?(t=a,!0):void 0},this),this.rangeMod.cost!=this.range_mod_table[t].cost&&this.select_range_mod(t),[t]}},watch:{baseRange:function(e){var t=this.range_mod_table.map(function(t){return{range_mod:t.range_mod,cost:t.cost,range:e*t.range_mod}});this.$set(this,"range_mod_table",t)}}},d=o,c=n("2877"),u=Object(c["a"])(d,a,s,!1,null,null,null);t["default"]=u.exports},d9d1:function(e,t,n){}}]);
//# sourceMappingURL=mek_beam-range-mod.363b6afd.js.map