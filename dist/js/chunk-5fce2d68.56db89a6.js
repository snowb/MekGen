(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fce2d68","chunk-3671740f"],{"28a5":function(e,s,t){"use strict";var n=t("aae3"),a=t("cb7c"),i=t("ebd6"),r=t("0390"),l=t("9def"),c=t("5f1b"),o=t("520a"),d=t("79e5"),u=Math.min,_=[].push,h="split",w="length",k="lastIndex",f=4294967295,m=!d(function(){RegExp(f,"y")});t("214f")("split",2,function(e,s,t,d){var p;return p="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[w]||2!="ab"[h](/(?:ab)*/)[w]||4!="."[h](/(.?)(.?)/)[w]||"."[h](/()()/)[w]>1||""[h](/.?/)[w]?function(e,s){var a=String(this);if(void 0===e&&0===s)return[];if(!n(e))return t.call(a,e,s);var i,r,l,c=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,h=void 0===s?f:s>>>0,m=new RegExp(e.source,d+"g");while(i=o.call(m,a)){if(r=m[k],r>u&&(c.push(a.slice(u,i.index)),i[w]>1&&i.index<a[w]&&_.apply(c,i.slice(1)),l=i[0][w],u=r,c[w]>=h))break;m[k]===i.index&&m[k]++}return u===a[w]?!l&&m.test("")||c.push(""):c.push(a.slice(u)),c[w]>h?c.slice(0,h):c}:"0"[h](void 0,0)[w]?function(e,s){return void 0===e&&0===s?[]:t.call(this,e,s)}:t,[function(t,n){var a=e(this),i=void 0==t?void 0:t[s];return void 0!==i?i.call(t,a,n):p.call(String(a),t,n)},function(e,s){var n=d(p,e,this,s,p!==t);if(n.done)return n.value;var o=a(e),_=String(this),h=i(o,RegExp),w=o.unicode,k=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(m?"y":"g"),y=new h(m?o:"^(?:"+o.source+")",k),v=void 0===s?f:s>>>0;if(0===v)return[];if(0===_.length)return null===c(y,_)?[_]:[];var b=0,g=0,x=[];while(g<_.length){y.lastIndex=m?g:0;var C,S=c(y,m?_:_.slice(g));if(null===S||(C=u(l(y.lastIndex+(m?0:g)),_.length))===b)g=r(_,g,w);else{if(x.push(_.slice(b,g)),x.length===v)return x;for(var I=1;I<=S.length-1;I++)if(x.push(S[I]),x.length===v)return x;g=b=C}}return x.push(_.slice(b)),x}]})},"6c16":function(e,s,t){"use strict";var n=t("d9d1"),a=t.n(n);a.a},"97ea":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[t("div",{staticClass:"metallic_background_small1"},[t("div",{staticClass:"subsection_container1"},[t("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),t("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?t("table",{staticStyle:{margin:"auto"}},[t("tr",[e.showHeaders?t("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(s,n){return t("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(s)+"\n                        ")])}),0):e._e(),t("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(s,n){return t("td",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(s){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,a){return t("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(s[a],a))+"\n                        ")])}),0)})],2)]):"col"==e.flow?t("table",{staticStyle:{margin:"auto"}},[e.showHeaders?t("tr",{staticClass:"head_row"},e._l(e.headers,function(s,n){return t("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(s)+"\n                    ")])}),0):e._e(),t("tr",[t("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(s,n){return t("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(s){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,a){return t("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(s[a],a))+"\n                    ")])}),0)}),t("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(s,n){return t("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?t("table",{staticStyle:{margin:"auto"}},[e.showHeaders?t("tr",{staticClass:"head_row"},e._l(e.headers,function(s,n){return t("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(s)+"\n                    ")])}),0):e._e(),t("tr",[t("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),t("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(s){e.showDropdown=!0}}},e._l(e.headers,function(s,n){return t("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][n])+"\n                    ")])}),0),t("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(s,n){return t("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?t("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(s,n){return t("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(s){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,a){return t("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(s[a],a))+"\n                    ")])}),0)}),t("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(s,n){return t("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=(t("ac6a"),t("28a5"),t("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},formatOutput(e,s){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[s])return e;let t=this.format[s].split(",").map(e=>e.toLowerCase()),n=e;if(t.includes("percent")&&(n=100*e+"%"),t.includes("multiplier")&&(n="x"+n),t.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return t.includes("nullzero")&&0===e&&(n="Ø"),n}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((s,t)=>{let n={};for(let a in t)Object.keys(e).includes(a)&&(n[a]=t[a]);return s.push(n),s},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,s)=>{for(let t in s){"undefined"===typeof e[t]&&(e[t]="");let n=""+s[t];e[t].length<=n.length&&(e[t]="xx"+n+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},l=r,c=(t("6c16"),t("2877")),o=Object(c["a"])(l,n,a,!1,null,"3a1dbf41",null);s["default"]=o.exports},aae3:function(e,s,t){var n=t("d3f4"),a=t("2d95"),i=t("2b4c")("match");e.exports=function(e){var s;return n(e)&&(void 0!==(s=e[i])?!!s:"RegExp"==a(e))}},d9d1:function(e,s,t){},ebd6:function(e,s,t){var n=t("cb7c"),a=t("d8e8"),i=t("2b4c")("species");e.exports=function(e,s){var t,r=n(e).constructor;return void 0===r||void 0==(t=n(r)[i])?s:a(t)}},f228:function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("mek-sub-component-table",{attrs:{items:e.weakness_table,headers:{weakness:"Weakness",monicker:"Monicker",cost:"Cost"},name:"Weakness",flow:"col",showHeaders:!0,format:{cost:"multiplier"},selectedIndices:e.selected_weakness_index_array},on:{"update-selected-indices":e.select_weakness}})},a=[],i=t("072f"),r=t("8fcf"),l=t("97ea"),c={name:"mek_shield_weakness",props:["weaknessArray"],mixins:[i["a"],r["a"]],components:{"mek-sub-component-table":l["default"]},data:function(){let e={weakness_table:[{weakness:"All",monicker:"Shield",cost:1},{weakness:"Ablative",monicker:"Screen",cost:1},{weakness:"Energy Only",monicker:"Interference",cost:.75,exclusive:!0},{weakness:"Matter Only",monicker:"Kinetic",cost:.75,exclusive:!0},{weakness:"Ranged Only",monicker:"Swashbuckling",cost:.75,exclusive:!0},{weakness:"Enclosing",monicker:"Mirror",cost:.5},{weakness:"Surge",monicker:"Surge",cost:2.5}]};return e.exclusive_weaknesses=e.weakness_table.filter(e=>{return"undefined"!==typeof e.exclusive}),e.selected_weakness_array=[{weakness:"All",monicker:"Shield",cost:1}],e},methods:{select_weakness:function(e){let s=this.weakness_table[e].weakness,t="all"==s.toLowerCase(),n="all"==this.selected_weakness_array[0].weakness.toLowerCase(),a=this.find_weakness_index(s),i=Object.assign({},this.weakness_table[a]);if(t||n)this.$set(this,"selected_weakness_array",[i]);else{let e=this.is_exclusive_weakness(s),t=this.selected_weakness_array.filter(e=>{return e.weakness.toLowerCase()!=s.toLowerCase()}),n=this.selected_weakness_array.some(e=>{return e.weakness.toLowerCase()==s.toLowerCase()},this);if(t=e?t.filter(e=>{return"undefined"===typeof e.exclusive}):t,this.$set(this,"selected_weakness_array",t),n||this.selected_weakness_array.push(i),0==t.length){let e=this.find_weakness_index("All");i=Object.assign({},this.weakness_table[e]),this.$set(this,"selected_weakness_array",[i])}}this.$emit("update-weakness",this.selected_weakness_array)},find_weakness_index:function(e){let s;return this.weakness_table.some(function(t,n){return t.weakness.toLowerCase()==e.toLowerCase()&&(s=n,!0)}),s},is_exclusive_weakness:function(e){return this.exclusive_weaknesses.some(function(s){return s.weakness.toLowerCase()==e.toLowerCase()})},exclusive_indices:function(){let e=this.selected_weakness_array.reduce(function(e,s,t){return s.exclusive&&e.push(t),e},[]);return e},is_all_weakness_index:function(e){return"all"==this.weakness_table[e].weakness.toLowerCase()}},computed:{selected_weakness_index_array:function(){let e=[];if(1==this.weaknessArray.length)return this.selected_weakness_array=[this.weakness_table[this.find_weakness_index(this.weaknessArray[0].weakness)]],[this.find_weakness_index(this.weaknessArray[0].weakness)];let s=!1,t=this,n=[];return this.selected_weakness_array=this.weaknessArray.reduceRight(function(e,a){return"all"==a.weakness.toLowerCase()?[a]:(t.is_exclusive_weakness(a.weakness)?s||(e.push(a),s=!0,n.push(a.weakness.toLowerCase())):n.includes(a.weakness.toLowerCase())||(e.push(a),n.push(a.weakness.toLowerCase())),e)},[]),e=this.selected_weakness_array.reduce(function(e,s){return e.push(t.find_weakness_index(s.weakness)),e},[]),this.weaknessArray.length!=this.selected_weakness_array.length&&this.$emit("update-weakness",this.selected_weakness_array),e},flat_weakness_array:function(){return this.weakness_table.reduce(function(e,s){return e.push(s.weakness),e},[])},flat_monicker_array:function(){return this.weakness_table.reduce(function(e,s){return e.push(s.monicker),e},[])}}},o=c,d=t("2877"),u=Object(d["a"])(o,n,a,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5fce2d68.56db89a6.js.map