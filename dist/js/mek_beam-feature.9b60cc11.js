(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-feature","chunk-cd006314"],{"28a5":function(e,t,s){"use strict";var r=s("aae3"),n=s("cb7c"),a=s("ebd6"),i=s("0390"),u=s("9def"),l=s("5f1b"),c=s("520a"),o=s("79e5"),f=Math.min,d=[].push,_="split",h="length",p="lastIndex",m=4294967295,v=!o(function(){RegExp(m,"y")});s("214f")("split",2,function(e,t,s,o){var y;return y="c"=="abbc"[_](/(b)*/)[1]||4!="test"[_](/(?:)/,-1)[h]||2!="ab"[_](/(?:ab)*/)[h]||4!="."[_](/(.?)(.?)/)[h]||"."[_](/()()/)[h]>1||""[_](/.?/)[h]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!r(e))return s.call(n,e,t);var a,i,u,l=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,_=void 0===t?m:t>>>0,v=new RegExp(e.source,o+"g");while(a=c.call(v,n)){if(i=v[p],i>f&&(l.push(n.slice(f,a.index)),a[h]>1&&a.index<n[h]&&d.apply(l,a.slice(1)),u=a[0][h],f=i,l[h]>=_))break;v[p]===a.index&&v[p]++}return f===n[h]?!u&&v.test("")||l.push(""):l.push(n.slice(f)),l[h]>_?l.slice(0,_):l}:"0"[_](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,r){var n=e(this),a=void 0==s?void 0:s[t];return void 0!==a?a.call(s,n,r):y.call(String(n),s,r)},function(e,t){var r=o(y,e,this,t,y!==s);if(r.done)return r.value;var c=n(e),d=String(this),_=a(c,RegExp),h=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),b=new _(v?c:"^(?:"+c.source+")",p),w=void 0===t?m:t>>>0;if(0===w)return[];if(0===d.length)return null===l(b,d)?[d]:[];var x=0,g=0,k=[];while(g<d.length){b.lastIndex=v?g:0;var C,D=l(b,v?d:d.slice(g));if(null===D||(C=f(u(b.lastIndex+(v?0:g)),d.length))===x)g=i(d,g,h);else{if(k.push(d.slice(x,g)),k.length===w)return k;for(var I=1;I<=D.length-1;I++)if(k.push(D[I]),k.length===w)return k;g=x=C}}return k.push(d.slice(x)),k}]})},5176:function(e,t,s){e.exports=s("51b6")},"51b6":function(e,t,s){s("a3c3"),e.exports=s("584a").Object.assign},"6c16":function(e,t,s){"use strict";var r=s("d9d1"),n=s.n(r);n.a},9306:function(e,t,s){"use strict";var r=s("c3a1"),n=s("9aa9"),a=s("355d"),i=s("241e"),u=s("335c"),l=Object.assign;e.exports=!l||s("294c")(function(){var e={},t={},s=Symbol(),r="abcdefghijklmnopqrst";return e[s]=7,r.split("").forEach(function(e){t[e]=e}),7!=l({},e)[s]||Object.keys(l({},t)).join("")!=r})?function(e,t){var s=i(e),l=arguments.length,c=1,o=n.f,f=a.f;while(l>c){var d,_=u(arguments[c++]),h=o?r(_).concat(o(_)):r(_),p=h.length,m=0;while(p>m)f.call(_,d=h[m++])&&(s[d]=_[d])}return s}:l},"97ea":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1"},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,r){return s("div",{key:r+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,r){return s("td",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",r,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(r)}}},e._l(e.headers,function(r,n){return s("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):"col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,r){return s("th",{key:r+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,r){return s("tr",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",r,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(r)}}},e._l(e.headers,function(r,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,r){return s("td",{key:r+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[r])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,r){return s("th",{key:r+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),s("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,r){return s("td",{key:"item-"+r+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][r])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,r){return s("td",{key:r+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[r])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,r){return s("tr",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",r,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(r),e.showDropdown=!1}}},e._l(e.headers,function(r,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,r){return s("td",{key:r+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[r])+"\n                    ")])}),0)],2):e._e()])])])},n=[],a=s("a4bb"),i=s.n(a),u=(s("6762"),s("2fdb"),s("28a5"),s("072f")),l={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[u["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var s=this.format[t].split(",").map(function(e){return e.toLowerCase()}),r=e;if(s.includes("percent")&&(r=100*e+"%"),s.includes("multiplier")&&(r="x"+r),s.includes("wide-angle"))switch(e){case 0:r="Ø";break;case 1:r="Hex";break;default:r=e+"°"}return s.includes("nullzero")&&0===e&&(r="Ø"),r}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,s){var r={};for(var n in s)i()(e).includes(n)&&(r[n]=s[n]);return t.push(r),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var s in t){"undefined"===typeof e[s]&&(e[s]="");var r=""+t[s];e[s].length<=r.length&&(e[s]="xx"+r+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},c=l,o=(s("6c16"),s("2877")),f=Object(o["a"])(c,r,n,!1,null,"3a1dbf41",null);t["default"]=f.exports},a3c3:function(e,t,s){var r=s("63b6");r(r.S+r.F,"Object",{assign:s("9306")})},bc65:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.feature_table,headers:{feature:"Feature",cost:"Cost"},showHeaders:!0,format:{cost:"multiplier"},"selected-indices":e.selected_feature_index_array,name:"Features",flow:"col"},on:{"update-selected-indices":e.select_feature}})},n=[],a=(s("6762"),s("5176")),i=s.n(a),u=s("072f"),l=s("8fcf"),c=s("97ea"),o={name:"mek_beam_feature",props:["featureArray","burstValue"],mixins:[u["a"],l["a"]],components:{"mek-sub-component-table":c["default"]},data:function(){var e={feature_table:[{feature:"Mag-Fed",cost:.9},{feature:"Anti-Missile",cost:1,exclusive_anti_missile:!0},{feature:"Variable Anti-Missile",cost:1.8,exclusive_anti_missile:!0},{feature:"Anti-Personnel",cost:1,exclusive_personnel:!0},{feature:"Variable Anti-Personnel",cost:1.8,exclusive_personnel:!0},{feature:"Anti-Missile & Personnel",cost:1.6,exclusive_personnel:!0,exclusive_anti_missile:!0},{feature:"All Purpose",cost:2.6,exclusive_personnel:!0,exclusive_anti_missile:!0},{feature:"Fragile",cost:1},{feature:"Long Range",cost:1.33},{feature:"Hydro",cost:.2},{feature:"Mega-Beam",cost:10},{feature:"Disruptor",cost:2}]};return e.exclusive_anti_missile=e.feature_table.filter(function(e){return"undefined"!==typeof e.exclusive_anti_missile}),e.exclusive_personnel=e.feature_table.filter(function(e){return"undefined"!==typeof e.exclusive_personnel}),e.selected_feature_array=[],e},methods:{select_feature:function(e){this.burstValue;var t=this.feature_table[e].feature,s=this.is_exclusive_feature("exclusive_anti_missile",t),r=this.is_exclusive_feature("exclusive_personnel",t),n=i()({},this.feature_table[e]),a=this.selected_feature_array.filter(function(e){return e.feature.toLowerCase()!=t.toLowerCase()}),u=this.selected_feature_array.some(function(e){return e.feature.toLowerCase()==t.toLowerCase()},this);s&&r&&(a=a.filter(function(e){return!e.exclusive_anti_missile&&!e.exclusive_personnel})),s&&(a=a.filter(function(e){return!e.exclusive_anti_missile})),r&&(a=a.filter(function(e){return!e.exclusive_personnel})),u||a.push(n),this.$set(this,"selected_feature_array",a),0==a.length&&this.$set(this,"selected_feature_array",[]),this.$emit("update-feature",this.selected_feature_array)},find_feature_index:function(e){var t;return this.feature_table.some(function(s,r){return s.feature.toLowerCase()==e.toLowerCase()&&(t=r,!0)}),t},is_exclusive_feature:function(e,t){return this[e].some(function(e){return e.feature.toLowerCase()==t.toLowerCase()})},exclusive_indices:function(){var e=this.selected_feature_array.reduce(function(e,t,s){return t.exclusive&&e.push(s),e},[]);return e}},computed:{selected_feature_index_array:function(){var e=[];if(0==this.featureArray.length&&(this.selected_feature_array=[]),1==this.featureArray.length)return this.selected_feature_array=[this.feature_table[this.find_feature_index(this.featureArray[0].feature)]],[this.find_feature_index(this.featureArray[0].feature)];var t=!1,s=!1,r=this,n=[];return this.selected_feature_array=this.featureArray.reduceRight(function(e,a){var i=r.is_exclusive_feature("exclusive_anti_missile",a.feature),u=r.is_exclusive_feature("exclusive_personnel",a.feature);return i&&!t&&u&&!s&&(e.push(a),t=!0,s=!0,n.push(a.feature.toLowerCase())),i&&!t&&(e.push(a),t=!0,n.push(a.feature.toLowerCase())),u&&!s&&(e.push(a),s=!0,n.push(a.feature.toLowerCase())),n.includes(a.feature.toLowerCase())||(e.push(a),n.push(a.feature.toLowerCase())),e},[]),e=this.selected_feature_array.reduce(function(e,t){return e.push(r.find_feature_index(t.feature)),e},[]),this.featureArray.length!=this.selected_feature_array.length&&this.$emit("update-feature",this.selected_feature_array),this.burstValue,e},flat_feature_array:function(){return this.feature_table.reduce(function(e,t){return e.push(t.feature),e},[])}}},f=o,d=s("2877"),_=Object(d["a"])(f,r,n,!1,null,null,null);t["default"]=_.exports},d9d1:function(e,t,s){}}]);
//# sourceMappingURL=mek_beam-feature.9b60cc11.js.map