(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy-absorbing-armor","chunk-0a2ef8c8"],{"178d":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.absorption_table,selectedKeys:e.selected_keys,pkey:e.pkey,headers:{absorption:"Absorption",armor_penalty:"SP Reduction",cost:"Cost"},name:"Energy Absorption",flow:"pkey-col",showHeaders:!0,format:{absorption:"percent",armor_penalty:"percent",cost:"multiplier"}},on:{"update-selected-data":e.select_absorption_type}})},a=[],r=(s("ac6a"),s("072f")),i=s("8fcf"),l=s("d866");let o=[{absorption:0,cost:1,armor_penalty:0},{absorption:.2,cost:1.5,armor_penalty:0},{absorption:.25,cost:1.8,armor_penalty:.2},{absorption:.33,cost:2.2,armor_penalty:.25},{absorption:.5,cost:2.5,armor_penalty:.33}],c={absorption:0,cost:1,armor_penalty:0},d=e=>{if("undefined"===typeof e)return!1;let t=o.some(t=>{return t.absorption==e.absorption&&t.cost==e.cost&&t.armor_penalty==e.armor_penalty});return t},u=(e,t)=>{return o.some(s=>{return void 0!==s[e]&&s[e]==t})},p=(e,t)=>{if(u(e,t)){let s=null;return o.some(n=>{if(n[e]==t)return s=n,!0},void 0),s}},m=function(e,t){let s=void 0,n=[],a=!1,r=[],i=JSON.stringify(t);return void 0!==t&&u(e,t[e])?d(t)?(s=JSON.parse(JSON.stringify(t)),n=[s[e]],a=!1):(s=JSON.parse(JSON.stringify(p(e,t[e]))),n=[s[e]],a=!0,r.push("Mek_RAM-Armor: "+i),r.push("**** Invalid data. Reseting. ****")):(s=c,n=[s[e]],a=!0,r.push("Mek_RAM-Armor: "+i),r.push("**** Invalid data. Reseting to default. ****")),{data:s,key_list:n,update:a,alerts:r}};var _=s("97ea"),h={name:"mek_energy_absorbing_armor",props:["absorption","hasArmor"],mixins:[r["a"],i["a"],l["a"]],components:{"mek-sub-component-table":_["default"]},data:function(){let e={pkey:"absorption",alerts:[]};return e},methods:{select_absorption_type:function(e){this.$emit("update-absorption",JSON.parse(JSON.stringify(e)))}},computed:{absorption_table(){return o},selected_keys(){let e=m(this.pkey,this.absorption);return e.alerts.length>0&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_absorption_type(e.data),e.key_list}}},f=h,y=s("2877"),b=Object(y["a"])(f,n,a,!1,null,null,null);t["default"]=b.exports},"28a5":function(e,t,s){"use strict";var n=s("aae3"),a=s("cb7c"),r=s("ebd6"),i=s("0390"),l=s("9def"),o=s("5f1b"),c=s("520a"),d=s("79e5"),u=Math.min,p=[].push,m="split",_="length",h="lastIndex",f=4294967295,y=!d(function(){RegExp(f,"y")});s("214f")("split",2,function(e,t,s,d){var b;return b="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[_]||2!="ab"[m](/(?:ab)*/)[_]||4!="."[m](/(.?)(.?)/)[_]||"."[m](/()()/)[_]>1||""[m](/.?/)[_]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(a,e,t);var r,i,l,o=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,m=void 0===t?f:t>>>0,y=new RegExp(e.source,d+"g");while(r=c.call(y,a)){if(i=y[h],i>u&&(o.push(a.slice(u,r.index)),r[_]>1&&r.index<a[_]&&p.apply(o,r.slice(1)),l=r[0][_],u=i,o[_]>=m))break;y[h]===r.index&&y[h]++}return u===a[_]?!l&&y.test("")||o.push(""):o.push(a.slice(u)),o[_]>m?o.slice(0,m):o}:"0"[m](void 0,0)[_]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var a=e(this),r=void 0==s?void 0:s[t];return void 0!==r?r.call(s,a,n):b.call(String(a),s,n)},function(e,t){var n=d(b,e,this,t,b!==s);if(n.done)return n.value;var c=a(e),p=String(this),m=r(c,RegExp),_=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(y?"y":"g"),v=new m(y?c:"^(?:"+c.source+")",h),k=void 0===t?f:t>>>0;if(0===k)return[];if(0===p.length)return null===o(v,p)?[p]:[];var g=0,w=0,C=[];while(w<p.length){v.lastIndex=y?w:0;var S,x=o(v,y?p:p.slice(w));if(null===x||(S=u(l(v.lastIndex+(y?0:w)),p.length))===g)w=i(p,w,_);else{if(C.push(p.slice(g,w)),C.length===k)return C;for(var D=1;D<=x.length-1;D++)if(C.push(x[D]),C.length===k)return C;w=g=S}}return C.push(p.slice(g)),C}]})},3321:function(e,t,s){},"97ea":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1"},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,a){return s("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):"col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,a){return s("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),s("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][n])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e()])])])},a=[],r=(s("ac6a"),s("28a5"),s("072f")),i={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[r["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),n=e;if(s.includes("percent")&&(n=100*e+"%"),s.includes("multiplier")&&(n="x"+n),s.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return s.includes("nullzero")&&0===e&&(n="Ø"),n}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,s)=>{let n={};for(let a in s)Object.keys(e).includes(a)&&(n[a]=s[a]);return t.push(n),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let n=""+t[s];e[s].length<=n.length&&(e[s]="xx"+n+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},l=i,o=(s("bc12"),s("2877")),c=Object(o["a"])(l,n,a,!1,null,"1103ef03",null);t["default"]=c.exports},aae3:function(e,t,s){var n=s("d3f4"),a=s("2d95"),r=s("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==a(e))}},bc12:function(e,t,s){"use strict";var n=s("3321"),a=s.n(n);a.a},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},ebd6:function(e,t,s){var n=s("cb7c"),a=s("d8e8"),r=s("2b4c")("species");e.exports=function(e,t){var s,i=n(e).constructor;return void 0===i||void 0==(s=n(i)[r])?t:a(s)}}}]);
//# sourceMappingURL=mek_energy-absorbing-armor.f8470e65.js.map