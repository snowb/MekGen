(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-feature","chunk-3671740f"],{"28a5":function(e,t,s){"use strict";var r=s("aae3"),a=s("cb7c"),i=s("ebd6"),n=s("0390"),u=s("9def"),l=s("5f1b"),c=s("520a"),o=s("79e5"),d=Math.min,f=[].push,_="split",h="length",p="lastIndex",m=4294967295,v=!o(function(){RegExp(m,"y")});s("214f")("split",2,function(e,t,s,o){var y;return y="c"=="abbc"[_](/(b)*/)[1]||4!="test"[_](/(?:)/,-1)[h]||2!="ab"[_](/(?:ab)*/)[h]||4!="."[_](/(.?)(.?)/)[h]||"."[_](/()()/)[h]>1||""[_](/.?/)[h]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!r(e))return s.call(a,e,t);var i,n,u,l=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,_=void 0===t?m:t>>>0,v=new RegExp(e.source,o+"g");while(i=c.call(v,a)){if(n=v[p],n>d&&(l.push(a.slice(d,i.index)),i[h]>1&&i.index<a[h]&&f.apply(l,i.slice(1)),u=i[0][h],d=n,l[h]>=_))break;v[p]===i.index&&v[p]++}return d===a[h]?!u&&v.test("")||l.push(""):l.push(a.slice(d)),l[h]>_?l.slice(0,_):l}:"0"[_](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,r){var a=e(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,a,r):y.call(String(a),s,r)},function(e,t){var r=o(y,e,this,t,y!==s);if(r.done)return r.value;var c=a(e),f=String(this),_=i(c,RegExp),h=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),b=new _(v?c:"^(?:"+c.source+")",p),w=void 0===t?m:t>>>0;if(0===w)return[];if(0===f.length)return null===l(b,f)?[f]:[];var x=0,g=0,k=[];while(g<f.length){b.lastIndex=v?g:0;var C,D=l(b,v?f:f.slice(g));if(null===D||(C=d(u(b.lastIndex+(v?0:g)),f.length))===x)g=n(f,g,h);else{if(k.push(f.slice(x,g)),k.length===w)return k;for(var I=1;I<=D.length-1;I++)if(k.push(D[I]),k.length===w)return k;g=x=C}}return k.push(f.slice(x)),k}]})},"6c16":function(e,t,s){"use strict";var r=s("d9d1"),a=s.n(r);a.a},"97ea":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1"},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,r){return s("div",{key:r+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,r){return s("td",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",r,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(r)}}},e._l(e.headers,function(r,a){return s("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):"col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,r){return s("th",{key:r+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,r){return s("tr",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",r,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(r)}}},e._l(e.headers,function(r,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,r){return s("td",{key:r+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[r])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,r){return s("th",{key:r+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),s("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,r){return s("td",{key:"item-"+r+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][r])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,r){return s("td",{key:r+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[r])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,r){return s("tr",{key:r+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",r,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(r),e.showDropdown=!1}}},e._l(e.headers,function(r,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,r){return s("td",{key:r+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[r])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=(s("ac6a"),s("28a5"),s("072f")),n={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),r=e;if(s.includes("percent")&&(r=100*e+"%"),s.includes("multiplier")&&(r="x"+r),s.includes("wide-angle"))switch(e){case 0:r="Ø";break;case 1:r="Hex";break;default:r=e+"°"}return s.includes("nullzero")&&0===e&&(r="Ø"),r}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,s)=>{let r={};for(let a in s)Object.keys(e).includes(a)&&(r[a]=s[a]);return t.push(r),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let r=""+t[s];e[s].length<=r.length&&(e[s]="xx"+r+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},u=n,l=(s("6c16"),s("2877")),c=Object(l["a"])(u,r,a,!1,null,"3a1dbf41",null);t["default"]=c.exports},aae3:function(e,t,s){var r=s("d3f4"),a=s("2d95"),i=s("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},bc65:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.feature_table,headers:{feature:"Feature",cost:"Cost"},showHeaders:!0,format:{cost:"multiplier"},"selected-indices":e.selected_feature_index_array,name:"Features",flow:"col"},on:{"update-selected-indices":e.select_feature}})},a=[],i=s("072f"),n=s("8fcf"),u=s("97ea"),l={name:"mek_beam_feature",props:["featureArray","burstValue"],mixins:[i["a"],n["a"]],components:{"mek-sub-component-table":u["default"]},data:function(){let e={feature_table:[{feature:"Mag-Fed",cost:.9},{feature:"Anti-Missile",cost:1,exclusive_anti_missile:!0},{feature:"Variable Anti-Missile",cost:1.8,exclusive_anti_missile:!0},{feature:"Anti-Personnel",cost:1,exclusive_personnel:!0},{feature:"Variable Anti-Personnel",cost:1.8,exclusive_personnel:!0},{feature:"Anti-Missile & Personnel",cost:1.6,exclusive_personnel:!0,exclusive_anti_missile:!0},{feature:"All Purpose",cost:2.6,exclusive_personnel:!0,exclusive_anti_missile:!0},{feature:"Fragile",cost:1},{feature:"Long Range",cost:1.33},{feature:"Hydro",cost:.2},{feature:"Mega-Beam",cost:10},{feature:"Disruptor",cost:2}]};return e.exclusive_anti_missile=e.feature_table.filter(e=>{return"undefined"!==typeof e.exclusive_anti_missile}),e.exclusive_personnel=e.feature_table.filter(e=>{return"undefined"!==typeof e.exclusive_personnel}),e.selected_feature_array=[],e},methods:{select_feature:function(e){this.burstValue;let t=this.feature_table[e].feature,s=this.is_exclusive_feature("exclusive_anti_missile",t),r=this.is_exclusive_feature("exclusive_personnel",t),a=Object.assign({},this.feature_table[e]),i=this.selected_feature_array.filter(e=>{return e.feature.toLowerCase()!=t.toLowerCase()}),n=this.selected_feature_array.some(e=>{return e.feature.toLowerCase()==t.toLowerCase()},this);s&&r&&(i=i.filter(e=>{return!e.exclusive_anti_missile&&!e.exclusive_personnel})),s&&(i=i.filter(e=>{return!e.exclusive_anti_missile})),r&&(i=i.filter(e=>{return!e.exclusive_personnel})),n||i.push(a),this.$set(this,"selected_feature_array",i),0==i.length&&this.$set(this,"selected_feature_array",[]),this.$emit("update-feature",this.selected_feature_array)},find_feature_index:function(e){let t;return this.feature_table.some(function(s,r){return s.feature.toLowerCase()==e.toLowerCase()&&(t=r,!0)}),t},is_exclusive_feature:function(e,t){return this[e].some(function(e){return e.feature.toLowerCase()==t.toLowerCase()})},exclusive_indices:function(){let e=this.selected_feature_array.reduce(function(e,t,s){return t.exclusive&&e.push(s),e},[]);return e}},computed:{selected_feature_index_array:function(){let e=[];if(0==this.featureArray.length&&(this.selected_feature_array=[]),1==this.featureArray.length)return this.selected_feature_array=[this.feature_table[this.find_feature_index(this.featureArray[0].feature)]],[this.find_feature_index(this.featureArray[0].feature)];let t=!1,s=!1,r=this,a=[];return this.selected_feature_array=this.featureArray.reduceRight(function(e,i){let n=r.is_exclusive_feature("exclusive_anti_missile",i.feature),u=r.is_exclusive_feature("exclusive_personnel",i.feature);return n&&!t&&u&&!s&&(e.push(i),t=!0,s=!0,a.push(i.feature.toLowerCase())),n&&!t&&(e.push(i),t=!0,a.push(i.feature.toLowerCase())),u&&!s&&(e.push(i),s=!0,a.push(i.feature.toLowerCase())),a.includes(i.feature.toLowerCase())||(e.push(i),a.push(i.feature.toLowerCase())),e},[]),e=this.selected_feature_array.reduce(function(e,t){return e.push(r.find_feature_index(t.feature)),e},[]),this.featureArray.length!=this.selected_feature_array.length&&this.$emit("update-feature",this.selected_feature_array),this.burstValue,e},flat_feature_array:function(){return this.feature_table.reduce(function(e,t){return e.push(t.feature),e},[])}}},c=l,o=s("2877"),d=Object(o["a"])(c,r,a,!1,null,null,null);t["default"]=d.exports},d9d1:function(e,t,s){},ebd6:function(e,t,s){var r=s("cb7c"),a=s("d8e8"),i=s("2b4c")("species");e.exports=function(e,t){var s,n=r(e).constructor;return void 0===n||void 0==(s=r(n)[i])?t:a(s)}}}]);
//# sourceMappingURL=mek_beam-feature.f9f58567.js.map