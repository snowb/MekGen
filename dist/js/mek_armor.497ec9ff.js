(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor","chunk-46482d78","chunk-f60adeec"],{"072f":function(e,t,n){"use strict";t["a"]={methods:{selectedItem:function(e,t,n,a){let s="undefined"===typeof a?"":a;return"undefined"===typeof n?this[e]==t?"selected_item":s:this[e]==t?n:s},selectedItemMultiple:function(e,t,n,a){let s="undefined"===typeof a?"":a;return Array.isArray(this[e])?"undefined"===typeof n?this[e].includes(t)?"selected_item":s:this[e].includes(t)?n:s:""}}}},"10e5":function(e,t,n){},"1f8e":function(e,t,n){"use strict";var a=n("10e5"),s=n.n(a);s.a},"28a5":function(e,t,n){"use strict";var a=n("aae3"),s=n("cb7c"),i=n("ebd6"),r=n("0390"),d=n("9def"),l=n("5f1b"),c=n("520a"),o=n("79e5"),u=Math.min,m=[].push,p="split",h="length",f="lastIndex",_=4294967295,y=!o(function(){RegExp(_,"y")});n("214f")("split",2,function(e,t,n,o){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(s,e,t);var i,r,d,l=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,p=void 0===t?_:t>>>0,y=new RegExp(e.source,o+"g");while(i=c.call(y,s)){if(r=y[f],r>u&&(l.push(s.slice(u,i.index)),i[h]>1&&i.index<s[h]&&m.apply(l,i.slice(1)),d=i[0][h],u=r,l[h]>=p))break;y[f]===i.index&&y[f]++}return u===s[h]?!d&&y.test("")||l.push(""):l.push(s.slice(u)),l[h]>p?l.slice(0,p):l}:"0"[p](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,a){var s=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,s,a):v.call(String(s),n,a)},function(e,t){var a=o(v,e,this,t,v!==n);if(a.done)return a.value;var c=s(e),m=String(this),p=i(c,RegExp),h=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(y?"y":"g"),g=new p(y?c:"^(?:"+c.source+")",f),k=void 0===t?_:t>>>0;if(0===k)return[];if(0===m.length)return null===l(g,m)?[m]:[];var w=0,b=0,S=[];while(b<m.length){g.lastIndex=y?b:0;var H,x=l(g,y?m:m.slice(b));if(null===x||(H=u(d(g.lastIndex+(y?0:b)),m.length))===w)b=r(m,b,h);else{if(S.push(m.slice(w,b)),S.length===k)return S;for(var C=1;C<=x.length-1;C++)if(S.push(x[C]),S.length===k)return S;b=w=H}}return S.push(m.slice(w)),S}]})},"3ffa":function(e,t,n){"use strict";t["a"]={data:()=>{return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},4877:function(e,t,n){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},"97ea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return n("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return n("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return n("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return n("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return n("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,s){return n("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][a])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(a),e.showDropdown=!1}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e()])])])},s=[],i=(n("28a5"),n("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0||"__INFINITY__"==e)return"∞";if("__NIL__"==e)return"Ø";if("__HEX__"==e)return"Hex";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let n=this.format[t].split(",").map(e=>e.toLowerCase()),a=e;if(n.includes("percent")&&(a=100*e+"%"),n.includes("multiplier")&&(a="x"+a),n.includes("wide-angle"))switch(e){case 0:a="Ø";break;case 1:a="Hex";break;default:a=e+"°"}return n.includes("nullzero")&&0===e&&(a="Ø"),a}},computed:{itemDisplayedKeys(){return this.items},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let n in t){"undefined"===typeof e[n]&&(e[n]="");let a=""+t[n];e[n].length-4<=a.length&&(e[n]="xx"+a+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},d=r,l=(n("1f8e"),n("2877")),c=Object(l["a"])(d,a,s,!1,null,"2c5a9dab",null);t["default"]=c.exports},aae3:function(e,t,n){var a=n("d3f4"),s=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==s(e))}},b02b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.armor_table,selectedKeys:e.selected_keys,pkey:e.pkey,headers:{name:"Name",stopping_power:"SP",cost:"Cost"},name:"Armor",flow:"pkey-col",showHeaders:!0},on:{"update-selected-data":e.select_armor}})},s=[],i=(n("ac6a"),n("d866")),r=n("3ffa"),d=n("072f"),l=n("8fcf"),c=n("4877"),o=n("daf4");let u={name:"None",cost:0,stopping_power:0,code:0},m=[u],p=c["a"].map(e=>{return{name:e.name,cost:e.code,stopping_power:e.code,code:e.code}}),h=m.concat(p),f=["name","cost","stopping_power","code"],_=Object(o["d"])(h,f),y=Object(o["c"])(h),v=Object(o["b"])(h,y),g=function(e,t,n){let a=void 0,s=[],i=!1,r=[],d=JSON.stringify(t),l=void 0===n?h:n,c=l.some(n=>{return n[e]==t[e]});return void 0!==t&&y(e,t[e])&&c?_(t)?(a=JSON.parse(JSON.stringify(t)),s=[a[e]],i=!1):(a=JSON.parse(JSON.stringify(v(e,t[e]))),s=[a[e]],i=!0,r.push("Mek_Armor: "+d),r.push("**** Invalid data. Reseting. ****")):(a=u,s=[a[e]],i=!0,r.push("Mek_Armor: "+d),r.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:s,update:i,alerts:r}};var k=n("97ea"),w={name:"mek_armor",props:["armor","maxArmor"],mixins:[r["a"],d["a"],l["a"],i["a"]],components:{"mek-sub-component-table":k["default"]},data:function(){let e={pkey:"stopping_power",alerts:[]};return e},methods:{select_armor:function(e){this.$emit("update-armor",JSON.parse(JSON.stringify(e)))}},computed:{armor_table(){let e=h.filter(e=>{return e.code<=this.maxArmor},this);return e},selected_keys(){let e=g(this.pkey,this.armor,this.armor_table);return e.alerts.length>0&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_armor(e.data),e.key_list}}},b=w,S=n("2877"),H=Object(S["a"])(b,a,s,!1,null,null,null);t["default"]=H.exports},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r});let a=(e,t)=>n=>{if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;let a=e.some(e=>{return!t.some(t=>{return n[t]!=e[t]})});return a},s=e=>(t,n)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==n})},i=(e,t)=>(n,a)=>{if(t(n,a)){let t=null;return e.some(e=>{if(e[n]==a)return t=e,!0},void 0),t}},r=(e,t,n,a,s)=>(i,r)=>{let d=void 0,l=[],c=!1,o=[],u=JSON.stringify(r);return void 0!==r&&t(i,r[i])?e(r)?(d=JSON.parse(JSON.stringify(r)),l=[d[i]],c=!1):(d=JSON.parse(JSON.stringify(n(i,r[i]))),l=[d[i]],c=!0,o.push(s+": "+u),o.push("**** Invalid data. Reseting. ****")):(d=a,l=[d[i]],c=!0,o.push(s+": "+u),o.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:l,update:c,alerts:o}}},ebd6:function(e,t,n){var a=n("cb7c"),s=n("d8e8"),i=n("2b4c")("species");e.exports=function(e,t){var n,r=a(e).constructor;return void 0===r||void 0==(n=a(r)[i])?t:s(n)}}}]);
//# sourceMappingURL=mek_armor.497ec9ff.js.map