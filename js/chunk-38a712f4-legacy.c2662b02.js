(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38a712f4","chunk-5a8f0fc3"],{"28a5":function(e,t,a){"use strict";var r=a("aae3"),n=a("cb7c"),s=a("ebd6"),i=a("0390"),u=a("9def"),l=a("5f1b"),c=a("520a"),d=a("79e5"),o=Math.min,f=[].push,h="split",_="length",m="lastIndex",p=4294967295,y=!d(function(){RegExp(p,"y")});a("214f")("split",2,function(e,t,a,d){var v;return v="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[_]||2!="ab"[h](/(?:ab)*/)[_]||4!="."[h](/(.?)(.?)/)[_]||"."[h](/()()/)[_]>1||""[h](/.?/)[_]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!r(e))return a.call(n,e,t);var s,i,u,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,h=void 0===t?p:t>>>0,y=new RegExp(e.source,d+"g");while(s=c.call(y,n)){if(i=y[m],i>o&&(l.push(n.slice(o,s.index)),s[_]>1&&s.index<n[_]&&f.apply(l,s.slice(1)),u=s[0][_],o=i,l[_]>=h))break;y[m]===s.index&&y[m]++}return o===n[_]?!u&&y.test("")||l.push(""):l.push(n.slice(o)),l[_]>h?l.slice(0,h):l}:"0"[h](void 0,0)[_]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,r){var n=e(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,n,r):v.call(String(n),a,r)},function(e,t){var r=d(v,e,this,t,v!==a);if(r.done)return r.value;var c=n(e),f=String(this),h=s(c,RegExp),_=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(y?"y":"g"),b=new h(y?c:"^(?:"+c.source+")",m),w=void 0===t?p:t>>>0;if(0===w)return[];if(0===f.length)return null===l(b,f)?[f]:[];var g=0,k=0,x=[];while(k<f.length){b.lastIndex=y?k:0;var C,S=l(b,y?f:f.slice(k));if(null===S||(C=o(u(b.lastIndex+(y?0:k)),f.length))===g)k=i(f,k,_);else{if(x.push(f.slice(g,k)),x.length===w)return x;for(var I=1;I<=S.length-1;I++)if(x.push(S[I]),x.length===w)return x;k=g=C}}return x.push(f.slice(g)),x}]})},3321:function(e,t,a){},5176:function(e,t,a){e.exports=a("51b6")},"51b6":function(e,t,a){a("a3c3"),e.exports=a("584a").Object.assign},6168:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.filteredFeatureTable,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"col",showHeaders:!0,format:{cost:"multiplier"},selectedIndices:e.selected_feature_index_array},on:{"update-selected-indices":e.select_feature}})},n=[],s=(a("6762"),a("5176")),i=a.n(s),u=a("072f"),l=a("8fcf"),c=a("97ea"),d={name:"mek_melee_feature",props:["featureArray","turnsInUse"],mixins:[u["a"],l["a"]],components:{"mek-sub-component-table":c["default"]},data:function(){var e={feature_table:[{feature:"Rechargeable",cost:1.1},{feature:"Thrown",cost:1.2},{feature:"Quick",cost:2},{feature:"Hyper",cost:7.5},{feature:"Beam Shield",cost:1.5,exclusive_beam_shield:!0},{feature:"Variable Beam Shield",cost:2,exclusive_beam_shield:!0}]};return e.exclusive_beam=e.feature_table.filter(function(e){return"undefined"!==typeof e.exclusive_beam_shield}),e.selected_feature_array=[],e},methods:{select_feature:function(e){var t=this.filteredFeatureTable[e].feature,a=this.is_exclusive_feature("exclusive_beam",t),r=i()({},this.filteredFeatureTable[e]),n=this.selected_feature_array.filter(function(e){return e.feature.toLowerCase()!=t.toLowerCase()}),s=this.selected_feature_array.some(function(e){return e.feature.toLowerCase()==t.toLowerCase()},this);a&&(n=n.filter(function(e){return!e.exclusive_beam_shield})),this.$set(this,"selected_feature_array",n),s||this.selected_feature_array.push(r),0==n.length&&this.$set(this,"selected_feature_array",[]),this.$emit("update-feature",this.selected_feature_array)},find_feature_index:function(e){var t;return this.filteredFeatureTable.some(function(a,r){return a.feature.toLowerCase()==e.toLowerCase()&&(t=r,!0)}),t},is_exclusive_feature:function(e,t){return this[e].some(function(e){return e.feature.toLowerCase()==t.toLowerCase()})}},computed:{selected_feature_index_array:function(){var e=[];if(0==this.featureArray.length&&(this.selected_feature_array=[]),1==this.featureArray.length)return this.selected_feature_array=[this.filteredFeatureTable[this.find_feature_index(this.featureArray[0].feature)]],[this.find_feature_index(this.featureArray[0].feature)];var t=!1,a=this,r=[];return this.selected_feature_array=this.featureArray.reduceRight(function(e,n){return a.is_exclusive_feature("exclusive_beam",n.feature)?t||(e.push(n),t=!0,r.push(n.feature.toLowerCase())):r.includes(n.feature.toLowerCase())||(e.push(n),r.push(n.feature.toLowerCase())),e},[]),e=this.selected_feature_array.reduce(function(e,t){return e.push(a.find_feature_index(t.feature)),e},[]),this.featureArray.length!=this.selected_feature_array.length&&this.$emit("update-feature",this.selected_feature_array),e},flat_feature_array:function(){return this.feature_table.reduce(function(e,t){return e.push(t.feature),e},[])},filteredFeatureTable:function(){return this.turnsInUse?this.feature_table:this.feature_table.filter(function(e){return"Rechargeable"!=e.feature})}},watch:{turnsInUse:function(e,t){if(e&&!t){var a=this.selected_feature_array.filter(function(e){return"undefined"!==typeof e&&"rechargeable"!=e.feature.toLowerCase()});this.$emit("update-feature",a)}}}},o=d,f=a("2877"),h=Object(f["a"])(o,r,n,!1,null,null,null);t["default"]=h.exports},9306:function(e,t,a){"use strict";var r=a("c3a1"),n=a("9aa9"),s=a("355d"),i=a("241e"),u=a("335c"),l=Object.assign;e.exports=!l||a("294c")(function(){var e={},t={},a=Symbol(),r="abcdefghijklmnopqrst";return e[a]=7,r.split("").forEach(function(e){t[e]=e}),7!=l({},e)[a]||Object.keys(l({},t)).join("")!=r})?function(e,t){var a=i(e),l=arguments.length,c=1,d=n.f,o=s.f;while(l>c){var f,h=u(arguments[c++]),_=d?r(h).concat(d(h)):r(h),m=_.length,p=0;while(m>p)o.call(h,f=_[p++])&&(a[f]=h[f])}return a}:l},"97ea":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[a("div",{staticClass:"metallic_background_small1"},[a("div",{staticClass:"subsection_container1"},[a("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),a("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,r){return a("div",{key:r+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,r){return a("td",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",r,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(r)}}},e._l(e.headers,function(r,n){return a("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):"col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,r){return a("th",{key:r+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,r){return a("tr",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",r,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(r)}}},e._l(e.headers,function(r,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,r){return a("td",{key:r+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[r])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,r){return a("th",{key:r+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,r){return a("tr",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[r])}}},e._l(e.headers,function(r,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,r){return a("td",{key:r+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[r])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,r){return a("div",{key:r+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,r){return a("td",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[r])}}},e._l(e.headers,function(r,n){return a("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,r){return a("th",{key:r+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),a("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,r){return a("td",{key:"item-"+r+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][r])+"\n                    ")])}),0),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,r){return a("td",{key:r+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[r])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?a("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,r){return a("tr",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",r,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(r),e.showDropdown=!1}}},e._l(e.headers,function(r,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,r){return a("td",{key:r+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[r])+"\n                    ")])}),0)],2):e._e()])])])},n=[],s=a("a4bb"),i=a.n(s),u=(a("6762"),a("2fdb"),a("28a5"),a("072f")),l={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[u["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var a=this.format[t].split(",").map(function(e){return e.toLowerCase()}),r=e;if(a.includes("percent")&&(r=100*e+"%"),a.includes("multiplier")&&(r="x"+r),a.includes("wide-angle"))switch(e){case 0:r="Ø";break;case 1:r="Hex";break;default:r=e+"°"}return a.includes("nullzero")&&0===e&&(r="Ø"),r}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,a){var r={};for(var n in a)i()(e).includes(n)&&(r[n]=a[n]);return t.push(r),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var a in t){"undefined"===typeof e[a]&&(e[a]="");var r=""+t[a];e[a].length<=r.length&&(e[a]="xx"+r+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},c=l,d=(a("bc12"),a("2877")),o=Object(d["a"])(c,r,n,!1,null,"1103ef03",null);t["default"]=o.exports},a3c3:function(e,t,a){var r=a("63b6");r(r.S+r.F,"Object",{assign:a("9306")})},bc12:function(e,t,a){"use strict";var r=a("3321"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-38a712f4-legacy.c2662b02.js.map