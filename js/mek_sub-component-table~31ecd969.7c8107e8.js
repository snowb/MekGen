(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_sub-component-table~31ecd969"],{"072f":function(e,t,s){"use strict";t["a"]={methods:{selectedItem:function(e,t,s,n){let i="undefined"===typeof n?"":n;return"undefined"===typeof s?this[e]==t?"selected_item":i:this[e]==t?s:i},selectedItemMultiple:function(e,t,s,n){let i="undefined"===typeof n?"":n;return Array.isArray(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":i:this[e].includes(t)?s:i:""}}}},"1e1f":function(e,t,s){"use strict";var n=s("4a48"),i=s.n(n);i.a},"28a5":function(e,t,s){"use strict";var n=s("aae3"),i=s("cb7c"),a=s("ebd6"),r=s("0390"),c=s("9def"),l=s("5f1b"),d=s("520a"),o=s("79e5"),u=Math.min,_=[].push,p="split",m="length",h="lastIndex",f=4294967295,w=!o(function(){RegExp(f,"y")});s("214f")("split",2,function(e,t,s,o){var y;return y="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[m]||2!="ab"[p](/(?:ab)*/)[m]||4!="."[p](/(.?)(.?)/)[m]||"."[p](/()()/)[m]>1||""[p](/.?/)[m]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(i,e,t);var a,r,c,l=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,p=void 0===t?f:t>>>0,w=new RegExp(e.source,o+"g");while(a=d.call(w,i)){if(r=w[h],r>u&&(l.push(i.slice(u,a.index)),a[m]>1&&a.index<i[m]&&_.apply(l,a.slice(1)),c=a[0][m],u=r,l[m]>=p))break;w[h]===a.index&&w[h]++}return u===i[m]?!c&&w.test("")||l.push(""):l.push(i.slice(u)),l[m]>p?l.slice(0,p):l}:"0"[p](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var i=e(this),a=void 0==s?void 0:s[t];return void 0!==a?a.call(s,i,n):y.call(String(i),s,n)},function(e,t){var n=o(y,e,this,t,y!==s);if(n.done)return n.value;var d=i(e),_=String(this),p=a(d,RegExp),m=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(w?"y":"g"),k=new p(w?d:"^(?:"+d.source+")",h),v=void 0===t?f:t>>>0;if(0===v)return[];if(0===_.length)return null===l(k,_)?[_]:[];var b=0,g=0,x=[];while(g<_.length){k.lastIndex=w?g:0;var C,D=l(k,w?_:_.slice(g));if(null===D||(C=u(c(k.lastIndex+(w?0:g)),_.length))===b)g=r(_,g,m);else{if(x.push(_.slice(b,g)),x.length===v)return x;for(var I=1;I<=D.length-1;I++)if(x.push(D[I]),x.length===v)return x;g=b=C}}return x.push(_.slice(b)),x}]})},"4a48":function(e,t,s){},a949:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("mek-window",{attrs:{type:"metallic",title:e.name}},["pkey-col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                    "+e._s(t)+"\n                ")])}),0):e._e(),e.showHeaders?s("tr",[s("td",{staticStyle:{"line-height":"2px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                     \n                ")])]):e._e(),e._l(e.items,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                    "+e._s(e.formatOutput(t[i],i))+"\n                ")])}),0)}),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                    "+e._s(e.largestKeyValues[n])+"\n                ")])}),0)],2):"pkey-row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column_sct pad_sct"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.items,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,i){return s("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                    "+e._s(t)+"\n                ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                     \n                ")])]),s("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                    "+e._s(e.items[e.selectedIndices[0]][n])+"\n                ")])}),0),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                    "+e._s(e.largestKeyValues[n])+"\n                ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table_sct"},[e._l(e.items,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedIndices",n,"selected_item_sct"),on:{click:function(t){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                    "+e._s(e.formatOutput(t[i],i))+"\n                ")])}),0)}),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                    "+e._s(e.largestKeyValues[n])+"\n                ")])}),0)],2):e._e(),"dropdown-pkey"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                    "+e._s(t)+"\n                ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                     \n                ")])]),s("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,attrs:{id:"msct-td-id"},on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name,attrs:{id:"msct-td-id"}},[e._v("\n                    "+e._s(e.formatOutput(e.selectedDropdownPkey[n],n))+"\n                ")])}),0),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                    "+e._s(e.largestKeyValues[n])+"\n                ")])}),0)]):e._e(),"dropdown-pkey"==e.flow&&e.showDropdown?s("table",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickOutside,expression:"clickOutside"}],staticClass:"dropdown-table_sct"},[e._l(e.items,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),attrs:{id:"msct-td-id"},on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,i){return s("td",{key:"item-"+i+"-element-"+e.name,attrs:{id:"msct-td-id"}},[e._v("\n                    "+e._s(e.formatOutput(t[i],i))+"\n                ")])}),0)}),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                    "+e._s(e.largestKeyValues[n])+"\n                ")])}),0)],2):e._e()])],1)},i=[],a=(s("ac6a"),s("28a5"),s("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[a["a"]],components:{"mek-window":()=>s.e("mek_window~9936071c").then(s.bind(null,"4342"))},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){e[this.pkey]!=this.selectedKeys[0]&&this.$emit("update-selected-data",e),this.showDropdown=!1},formatOutput(e,t){if(e===1/0||"__INFINITY__"==e)return"∞";if("__NIL__"==e)return"Ø";if("__HEX__"==e)return"Hex";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),n=e;if(s.includes("percent")&&(n=100*e+"%"),s.includes("multiplier")&&(n="x"+n),s.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return s.includes("nullzero")&&0===e&&(n="Ø"),n},clickOutside(e){"msct-td-id"!=e.target.id&&(this.showDropdown=!1)}},computed:{largestKeyValues(){return this.items.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let n=""+t[s];e[s].length-4<=n.length&&(e[s]="xx"+n+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""},colspan(){return Object.keys(this.headers).length},selectedDropdownPkey(){let e={};return e[this.pkey]=null,this.items.some(t=>{return t[this.pkey]==this.selectedKeys[0]&&(e=t,!0)},this),e}},directives:{"click-outside":{bind(e,t,s){s.context.showDropdowm=!0,document.addEventListener("click",s.context.clickOutside)},unbind(e,t,s){document.removeEventListener("click",s.context.clickOutside)}}}},c=r,l=(s("1e1f"),s("2877")),d=Object(l["a"])(c,n,i,!1,null,"665a9f06",null);t["default"]=d.exports},aae3:function(e,t,s){var n=s("d3f4"),i=s("2d95"),a=s("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},ebd6:function(e,t,s){var n=s("cb7c"),i=s("d8e8"),a=s("2b4c")("species");e.exports=function(e,t){var s,r=n(e).constructor;return void 0===r||void 0==(s=n(r)[a])?t:i(s)}}}]);