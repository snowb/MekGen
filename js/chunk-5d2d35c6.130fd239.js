(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d2d35c6","chunk-3671740f"],{"28a5":function(e,t,r){"use strict";var a=r("aae3"),s=r("cb7c"),n=r("ebd6"),i=r("0390"),u=r("9def"),l=r("5f1b"),c=r("520a"),d=r("79e5"),o=Math.min,f=[].push,h="split",_="length",m="lastIndex",p=4294967295,y=!d(function(){RegExp(p,"y")});r("214f")("split",2,function(e,t,r,d){var b;return b="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[_]||2!="ab"[h](/(?:ab)*/)[_]||4!="."[h](/(.?)(.?)/)[_]||"."[h](/()()/)[_]>1||""[h](/.?/)[_]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!a(e))return r.call(s,e,t);var n,i,u,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,h=void 0===t?p:t>>>0,y=new RegExp(e.source,d+"g");while(n=c.call(y,s)){if(i=y[m],i>o&&(l.push(s.slice(o,n.index)),n[_]>1&&n.index<s[_]&&f.apply(l,n.slice(1)),u=n[0][_],o=i,l[_]>=h))break;y[m]===n.index&&y[m]++}return o===s[_]?!u&&y.test("")||l.push(""):l.push(s.slice(o)),l[_]>h?l.slice(0,h):l}:"0"[h](void 0,0)[_]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,a){var s=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,s,a):b.call(String(s),r,a)},function(e,t){var a=d(b,e,this,t,b!==r);if(a.done)return a.value;var c=s(e),f=String(this),h=n(c,RegExp),_=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(y?"y":"g"),v=new h(y?c:"^(?:"+c.source+")",m),w=void 0===t?p:t>>>0;if(0===w)return[];if(0===f.length)return null===l(v,f)?[f]:[];var g=0,x=0,k=[];while(x<f.length){v.lastIndex=y?x:0;var C,I=l(v,y?f:f.slice(x));if(null===I||(C=o(u(v.lastIndex+(y?0:x)),f.length))===g)x=i(f,x,_);else{if(k.push(f.slice(g,x)),k.length===w)return k;for(var D=1;D<=I.length-1;D++)if(k.push(I[D]),k.length===w)return k;x=g=C}}return k.push(f.slice(g)),k}]})},6168:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.filteredFeatureTable,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"col",showHeaders:!0,format:{cost:"multiplier"},selectedIndices:e.selected_feature_index_array},on:{"update-selected-indices":e.select_feature}})},s=[],n=r("072f"),i=r("8fcf"),u=r("97ea"),l={name:"mek_melee_feature",props:["featureArray","turnsInUse"],mixins:[n["a"],i["a"]],components:{"mek-sub-component-table":u["default"]},data:function(){let e={feature_table:[{feature:"Rechargeable",cost:1.1},{feature:"Thrown",cost:1.2},{feature:"Quick",cost:2},{feature:"Hyper",cost:7.5},{feature:"Beam Shield",cost:1.5,exclusive_beam_shield:!0},{feature:"Variable Beam Shield",cost:2,exclusive_beam_shield:!0}]};return e.exclusive_beam=e.feature_table.filter(e=>{return"undefined"!==typeof e.exclusive_beam_shield}),e.selected_feature_array=[],e},methods:{select_feature:function(e){let t=this.filteredFeatureTable[e].feature,r=this.is_exclusive_feature("exclusive_beam",t),a=Object.assign({},this.filteredFeatureTable[e]),s=this.selected_feature_array.filter(e=>{return e.feature.toLowerCase()!=t.toLowerCase()}),n=this.selected_feature_array.some(e=>{return e.feature.toLowerCase()==t.toLowerCase()},this);r&&(s=s.filter(e=>{return!e.exclusive_beam_shield})),this.$set(this,"selected_feature_array",s),n||this.selected_feature_array.push(a),0==s.length&&this.$set(this,"selected_feature_array",[]),this.$emit("update-feature",this.selected_feature_array)},find_feature_index:function(e){let t;return this.filteredFeatureTable.some(function(r,a){return r.feature.toLowerCase()==e.toLowerCase()&&(t=a,!0)}),t},is_exclusive_feature:function(e,t){return this[e].some(function(e){return e.feature.toLowerCase()==t.toLowerCase()})}},computed:{selected_feature_index_array:function(){let e=[];if(0==this.featureArray.length&&(this.selected_feature_array=[]),1==this.featureArray.length)return this.selected_feature_array=[this.filteredFeatureTable[this.find_feature_index(this.featureArray[0].feature)]],[this.find_feature_index(this.featureArray[0].feature)];let t=!1,r=this,a=[];return this.selected_feature_array=this.featureArray.reduceRight(function(e,s){return r.is_exclusive_feature("exclusive_beam",s.feature)?t||(e.push(s),t=!0,a.push(s.feature.toLowerCase())):a.includes(s.feature.toLowerCase())||(e.push(s),a.push(s.feature.toLowerCase())),e},[]),e=this.selected_feature_array.reduce(function(e,t){return e.push(r.find_feature_index(t.feature)),e},[]),this.featureArray.length!=this.selected_feature_array.length&&this.$emit("update-feature",this.selected_feature_array),e},flat_feature_array:function(){return this.feature_table.reduce(function(e,t){return e.push(t.feature),e},[])},filteredFeatureTable(){return this.turnsInUse?this.feature_table:this.feature_table.filter(e=>{return"Rechargeable"!=e.feature})}},watch:{turnsInUse:function(e,t){if(e&&!t){let e=this.selected_feature_array.filter(e=>{return"undefined"!==typeof e&&"rechargeable"!=e.feature.toLowerCase()});this.$emit("update-feature",e)}}}},c=l,d=r("2877"),o=Object(d["a"])(c,a,s,!1,null,null,null);t["default"]=o.exports},"6c16":function(e,t,r){"use strict";var a=r("d9d1"),s=r.n(a);s.a},"97ea":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[r("div",{staticClass:"metallic_background_small1"},[r("div",{staticClass:"subsection_container1"},[r("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),r("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?r("table",{staticStyle:{margin:"auto"}},[r("tr",[e.showHeaders?r("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return r("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),r("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return r("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return r("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):"col"==e.flow?r("table",{staticStyle:{margin:"auto"}},[e.showHeaders?r("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return r("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),r("tr",[r("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return r("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return r("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),r("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return r("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?r("table",{staticStyle:{margin:"auto"}},[e.showHeaders?r("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return r("th",{key:a+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),r("tr",[r("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),r("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,a){return r("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][a])+"\n                    ")])}),0),r("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return r("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?r("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,a){return r("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(a),e.showDropdown=!1}}},e._l(e.headers,function(a,s){return r("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),r("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return r("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e()])])])},s=[],n=(r("ac6a"),r("28a5"),r("072f")),i={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[n["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let r=this.format[t].split(",").map(e=>e.toLowerCase()),a=e;if(r.includes("percent")&&(a=100*e+"%"),r.includes("multiplier")&&(a="x"+a),r.includes("wide-angle"))switch(e){case 0:a="Ø";break;case 1:a="Hex";break;default:a=e+"°"}return r.includes("nullzero")&&0===e&&(a="Ø"),a}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,r)=>{let a={};for(let s in r)Object.keys(e).includes(s)&&(a[s]=r[s]);return t.push(a),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let r in t){"undefined"===typeof e[r]&&(e[r]="");let a=""+t[r];e[r].length<=a.length&&(e[r]="xx"+a+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},u=i,l=(r("6c16"),r("2877")),c=Object(l["a"])(u,a,s,!1,null,"3a1dbf41",null);t["default"]=c.exports},aae3:function(e,t,r){var a=r("d3f4"),s=r("2d95"),n=r("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==s(e))}},d9d1:function(e,t,r){},ebd6:function(e,t,r){var a=r("cb7c"),s=r("d8e8"),n=r("2b4c")("species");e.exports=function(e,t){var r,i=a(e).constructor;return void 0===i||void 0==(r=a(i)[n])?t:s(r)}}}]);
//# sourceMappingURL=chunk-5d2d35c6.130fd239.js.map