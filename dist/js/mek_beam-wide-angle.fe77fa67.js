(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-wide-angle","chunk-21801d46"],{"28a5":function(e,t,n){"use strict";var s=n("aae3"),i=n("cb7c"),a=n("ebd6"),l=n("0390"),r=n("9def"),c=n("5f1b"),d=n("520a"),o=n("79e5"),u=Math.min,f=[].push,h="split",m="length",_="lastIndex",p=4294967295,g=!o(function(){RegExp(p,"y")});n("214f")("split",2,function(e,t,n,o){var v;return v="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[m]||2!="ab"[h](/(?:ab)*/)[m]||4!="."[h](/(.?)(.?)/)[m]||"."[h](/()()/)[m]>1||""[h](/.?/)[m]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(i,e,t);var a,l,r,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,h=void 0===t?p:t>>>0,g=new RegExp(e.source,o+"g");while(a=d.call(g,i)){if(l=g[_],l>u&&(c.push(i.slice(u,a.index)),a[m]>1&&a.index<i[m]&&f.apply(c,a.slice(1)),r=a[0][m],u=l,c[m]>=h))break;g[_]===a.index&&g[_]++}return u===i[m]?!r&&g.test("")||c.push(""):c.push(i.slice(u)),c[m]>h?c.slice(0,h):c}:"0"[h](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,s):v.call(String(i),n,s)},function(e,t){var s=o(v,e,this,t,v!==n);if(s.done)return s.value;var d=i(e),f=String(this),h=a(d,RegExp),m=d.unicode,_=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),w=new h(g?d:"^(?:"+d.source+")",_),b=void 0===t?p:t>>>0;if(0===b)return[];if(0===f.length)return null===c(w,f)?[f]:[];var y=0,k=0,x=[];while(k<f.length){w.lastIndex=g?k:0;var C,I=c(w,g?f:f.slice(k));if(null===I||(C=u(r(w.lastIndex+(g?0:k)),f.length))===y)k=l(f,k,m);else{if(x.push(f.slice(y,k)),x.length===b)return x;for(var D=1;D<=I.length-1;D++)if(x.push(I[D]),x.length===b)return x;k=y=C}}return x.push(f.slice(y)),x}]})},"6c16":function(e,t,n){"use strict";var s=n("d9d1"),i=n.n(s);i.a},7795:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.wide_angle_table,headers:{angle:"Angle",cost:"Cost"},name:"Wide Angle",flow:"row",showHeaders:!0,format:{angle:"wide-angle",cost:"multiplier"},selectedIndices:e.selected_angle_index},on:{"update-selected-indices":e.select_angle}})},i=[],a=n("072f"),l=n("8fcf"),r=n("97ea"),c={name:"mek_beam_wide_angle",props:["wideAngle"],mixins:[a["a"],l["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){var e={wide_angle_table:[{angle:0,cost:1},{angle:1,cost:2},{angle:60,cost:3},{angle:180,cost:5},{angle:300,cost:7},{angle:360,cost:9}]};return e},methods:{select_angle:function(e){this.$emit("update-wide-angle",this.wide_angle_table[e])}},computed:{selected_angle_index:function(){var e=this,t=0;return this.angle,this.wide_angle_table.some(function(n,s){if(n.angle==e.wideAngle.angle)return t=s,!0},this),this.wideAngle.cost!=this.wide_angle_table[t].cost&&this.select_angle(t),[t]}}},d=c,o=n("2877"),u=Object(o["a"])(d,s,i,!1,null,null,null);t["default"]=u.exports},"97ea":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=n("a4bb"),l=n.n(a),r=(n("6762"),n("2fdb"),n("28a5"),n("072f")),c={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[r["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,n){var s={};for(var i in n)l()(e).includes(i)&&(s[i]=n[i]);return t.push(s),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var s=""+t[n];e[n].length<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},d=c,o=(n("6c16"),n("2877")),u=Object(o["a"])(d,s,i,!1,null,"3a1dbf41",null);t["default"]=u.exports},d9d1:function(e,t,n){}}]);
//# sourceMappingURL=mek_beam-wide-angle.fe77fa67.js.map