(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d72a35","chunk-0a2ef8c8"],{"048f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.feature_table,headers:{feature:"Feature",cost:"Cost"},showHeaders:!0,format:{cost:"multiplier"},"selected-indices":e.selected_feature_index_array,name:"Features",flow:"col"},on:{"update-selected-indices":e.select_feature}})},n=[],r=a("072f"),i=a("8fcf"),l=a("97ea"),u={name:"mek_energy_pool_feature",props:["featureArray"],mixins:[r["a"],i["a"]],components:{"mek-sub-component-table":l["default"]},data:function(){let e={feature_table:[{feature:"Morphable",cost:1.25},{feature:"Fragile",cost:1}],selected_feature_array:[]};return e},methods:{select_feature:function(e){let t=this.feature_table[e].feature,a=Object.assign({},this.feature_table[e]),s=this.selected_feature_array.filter(e=>{return e.feature.toLowerCase()!=t.toLowerCase()}),n=this.selected_feature_array.some(e=>{return e.feature.toLowerCase()==t.toLowerCase()},this);n||s.push(a),this.$set(this,"selected_feature_array",s),0==s.length&&this.$set(this,"selected_feature_array",[]),this.$emit("update-feature",this.selected_feature_array)},find_feature_index:function(e){let t;return this.feature_table.some(function(a,s){return a.feature.toLowerCase()==e.toLowerCase()&&(t=s,!0)}),t}},computed:{selected_feature_index_array:function(){let e=[];if(0==this.featureArray.length&&(this.selected_feature_array=[]),1==this.featureArray.length)return this.selected_feature_array=[this.feature_table[this.find_feature_index(this.featureArray[0].feature)]],[this.find_feature_index(this.featureArray[0].feature)];let t=this,a=[];return this.selected_feature_array=this.featureArray.reduceRight(function(e,t){return a.includes(t.feature.toLowerCase())||(e.push(t),a.push(t.feature.toLowerCase())),e},[]),e=this.selected_feature_array.reduce(function(e,a){return e.push(t.find_feature_index(a.feature)),e},[]),this.featureArray.length!=this.selected_feature_array.length&&this.$emit("update-feature",this.selected_feature_array),e}}},c=u,d=a("2877"),o=Object(d["a"])(c,s,n,!1,null,null,null);t["default"]=o.exports},"28a5":function(e,t,a){"use strict";var s=a("aae3"),n=a("cb7c"),r=a("ebd6"),i=a("0390"),l=a("9def"),u=a("5f1b"),c=a("520a"),d=a("79e5"),o=Math.min,f=[].push,_="split",h="length",p="lastIndex",m=4294967295,y=!d(function(){RegExp(m,"y")});a("214f")("split",2,function(e,t,a,d){var v;return v="c"=="abbc"[_](/(b)*/)[1]||4!="test"[_](/(?:)/,-1)[h]||2!="ab"[_](/(?:ab)*/)[h]||4!="."[_](/(.?)(.?)/)[h]||"."[_](/()()/)[h]>1||""[_](/.?/)[h]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!s(e))return a.call(n,e,t);var r,i,l,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,_=void 0===t?m:t>>>0,y=new RegExp(e.source,d+"g");while(r=c.call(y,n)){if(i=y[p],i>o&&(u.push(n.slice(o,r.index)),r[h]>1&&r.index<n[h]&&f.apply(u,r.slice(1)),l=r[0][h],o=i,u[h]>=_))break;y[p]===r.index&&y[p]++}return o===n[h]?!l&&y.test("")||u.push(""):u.push(n.slice(o)),u[h]>_?u.slice(0,_):u}:"0"[_](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,s){var n=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,n,s):v.call(String(n),a,s)},function(e,t){var s=d(v,e,this,t,v!==a);if(s.done)return s.value;var c=n(e),f=String(this),_=r(c,RegExp),h=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(y?"y":"g"),w=new _(y?c:"^(?:"+c.source+")",p),b=void 0===t?m:t>>>0;if(0===b)return[];if(0===f.length)return null===u(w,f)?[f]:[];var k=0,g=0,C=[];while(g<f.length){w.lastIndex=y?g:0;var x,D=u(w,y?f:f.slice(g));if(null===D||(x=o(l(w.lastIndex+(y?0:g)),f.length))===k)g=i(f,g,h);else{if(C.push(f.slice(k,g)),C.length===b)return C;for(var S=1;S<=D.length-1;S++)if(C.push(D[S]),C.length===b)return C;g=k=x}}return C.push(f.slice(k)),C}]})},3321:function(e,t,a){},"97ea":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[a("div",{staticClass:"metallic_background_small1"},[a("div",{staticClass:"subsection_container1"},[a("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),a("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return a("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return a("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,n){return a("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):"col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return a("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return a("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,n){return a("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),a("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return a("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?a("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},n=[],r=(a("ac6a"),a("28a5"),a("072f")),i={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[r["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let a=this.format[t].split(",").map(e=>e.toLowerCase()),s=e;if(a.includes("percent")&&(s=100*e+"%"),a.includes("multiplier")&&(s="x"+s),a.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return a.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,a)=>{let s={};for(let n in a)Object.keys(e).includes(n)&&(s[n]=a[n]);return t.push(s),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let a in t){"undefined"===typeof e[a]&&(e[a]="");let s=""+t[a];e[a].length<=s.length&&(e[a]="xx"+s+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},l=i,u=(a("bc12"),a("2877")),c=Object(u["a"])(l,s,n,!1,null,"1103ef03",null);t["default"]=c.exports},aae3:function(e,t,a){var s=a("d3f4"),n=a("2d95"),r=a("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==n(e))}},bc12:function(e,t,a){"use strict";var s=a("3321"),n=a.n(s);n.a},ebd6:function(e,t,a){var s=a("cb7c"),n=a("d8e8"),r=a("2b4c")("species");e.exports=function(e,t){var a,i=s(e).constructor;return void 0===i||void 0==(a=s(i)[r])?t:n(a)}}}]);
//# sourceMappingURL=chunk-10d72a35.d14304bb.js.map