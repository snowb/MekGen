(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor","chunk-05dcdd1c","chunk-3bc3f484"],{"072f":function(e,t,s){"use strict";t["a"]={methods:{selectedItem:function(e,t,s,n){let i="undefined"===typeof n?"":n;return"undefined"===typeof s?this[e]==t?"selected_item":i:this[e]==t?s:i},selectedItemMultiple:function(e,t,s,n){let i="undefined"===typeof n?"":n;return Array.isArray(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":i:this[e].includes(t)?s:i:""}}}},"09c0":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small_sct"},[s("div",{staticClass:"subsection_container_sct"},[s("div",{staticClass:"subsection_header_small_sct"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header_sct"},[e._v(e._s(e.name))]),"pkey-col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),e.showHeaders?s("tr",[s("td",{staticStyle:{"line-height":"2px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]):e._e(),e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column_sct pad_sct"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,i){return s("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]),s("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][n])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table_sct"},[e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedIndices",n,"selected_item_sct"),on:{click:function(t){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=(s("ac6a"),s("28a5"),s("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[a["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0||"__INFINITY__"==e)return"∞";if("__NIL__"==e)return"Ø";if("__HEX__"==e)return"Hex";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),n=e;if(s.includes("percent")&&(n=100*e+"%"),s.includes("multiplier")&&(n="x"+n),s.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return s.includes("nullzero")&&0===e&&(n="Ø"),n}},computed:{itemDisplayedKeys(){return this.items},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let n=""+t[s];e[s].length-4<=n.length&&(e[s]="xx"+n+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""},colspan(){return Object.keys(this.headers).length}}},d=r,c=(s("8f57"),s("2877")),l=Object(c["a"])(d,n,i,!1,null,"7403b6fc",null);t["default"]=l.exports},"0a40":function(e,t,s){},"28a5":function(e,t,s){"use strict";var n=s("aae3"),i=s("cb7c"),a=s("ebd6"),r=s("0390"),d=s("9def"),c=s("5f1b"),l=s("520a"),o=s("79e5"),u=Math.min,m=[].push,p="split",f="length",h="lastIndex",_=4294967295,y=!o(function(){RegExp(_,"y")});s("214f")("split",2,function(e,t,s,o){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(i,e,t);var a,r,d,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,p=void 0===t?_:t>>>0,y=new RegExp(e.source,o+"g");while(a=l.call(y,i)){if(r=y[h],r>u&&(c.push(i.slice(u,a.index)),a[f]>1&&a.index<i[f]&&m.apply(c,a.slice(1)),d=a[0][f],u=r,c[f]>=p))break;y[h]===a.index&&y[h]++}return u===i[f]?!d&&y.test("")||c.push(""):c.push(i.slice(u)),c[f]>p?c.slice(0,p):c}:"0"[p](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var i=e(this),a=void 0==s?void 0:s[t];return void 0!==a?a.call(s,i,n):v.call(String(i),s,n)},function(e,t){var n=o(v,e,this,t,v!==s);if(n.done)return n.value;var l=i(e),m=String(this),p=a(l,RegExp),f=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(y?"y":"g"),g=new p(y?l:"^(?:"+l.source+")",h),k=void 0===t?_:t>>>0;if(0===k)return[];if(0===m.length)return null===c(g,m)?[m]:[];var b=0,w=0,S=[];while(w<m.length){g.lastIndex=y?w:0;var H,x=c(g,y?m:m.slice(w));if(null===x||(H=u(d(g.lastIndex+(y?0:w)),m.length))===b)w=r(m,w,f);else{if(S.push(m.slice(b,w)),S.length===k)return S;for(var M=1;M<=x.length-1;M++)if(S.push(x[M]),S.length===k)return S;w=b=H}}return S.push(m.slice(b)),S}]})},"3ffa":function(e,t,s){"use strict";t["a"]={data:()=>{return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},"68cb":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.armor_table,selectedKeys:e.selected_keys,pkey:e.pkey,headers:{name:"Name",stopping_power:"SP",cost:"Cost"},name:"Armor",flow:"pkey-col",showHeaders:!0},on:{"update-selected-data":e.select_armor}})},i=[],a=(s("ac6a"),s("d866")),r=s("3ffa"),d=s("072f"),c=s("8fcf"),l=s("a58a"),o=s("706d");let u={name:"None",cost:0,stopping_power:0,code:0},m=[u],p=l["a"].map(e=>{return{name:e.name,cost:e.code,stopping_power:e.code,code:e.code}}),f=m.concat(p),h=["name","cost","stopping_power","code"],_=Object(o["d"])(f,h),y=Object(o["c"])(f),v=Object(o["b"])(f,y),g=function(e,t,s){let n=void 0,i=[],a=!1,r=[],d=JSON.stringify(t),c=void 0===s?f:s,l=c.some(s=>{return s[e]==t[e]});return void 0!==t&&y(e,t[e])&&l?_(t)?(n=JSON.parse(JSON.stringify(t)),i=[n[e]],a=!1):(n=JSON.parse(JSON.stringify(v(e,t[e]))),i=[n[e]],a=!0,r.push("Mek_Armor: "+d),r.push("**** Invalid data. Reseting. ****")):(n=u,i=[n[e]],a=!0,r.push("Mek_Armor: "+d),r.push("**** Invalid data. Reseting to default. ****")),{data:n,key_list:i,update:a,alerts:r}};var k=s("09c0"),b={name:"mek_armor",props:["armor","maxArmor"],mixins:[r["a"],d["a"],c["a"],a["a"]],components:{"mek-sub-component-table":k["default"]},data:function(){let e={pkey:"stopping_power",alerts:[]};return e},methods:{select_armor:function(e){this.$emit("update-armor",JSON.parse(JSON.stringify(e)))}},computed:{armor_table(){let e=f.filter(e=>{return e.code<=this.maxArmor},this);return e},selected_keys(){let e=g(this.pkey,this.armor,this.armor_table);return e.alerts.length>0&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_armor(e.data),e.key_list}}},w=b,S=s("2877"),H=Object(S["a"])(w,n,i,!1,null,null,null);t["default"]=H.exports},"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return n}),s.d(t,"c",function(){return i}),s.d(t,"b",function(){return a}),s.d(t,"a",function(){return r});let n=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let n=e.some(e=>{return!t.some(t=>{return s[t]!=e[t]})});return n},i=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},a=(e,t)=>(s,n)=>{let i=null;return t(s,n)&&e.some(e=>{if(e[s]==n)return i=e,!0},void 0),i},r=(e,t,s,n,i)=>(a,r)=>{let d=void 0,c=[],l=!1,o=[],u=JSON.stringify(r);return void 0!==r&&t(a,r[a])?e(r)?(d=JSON.parse(JSON.stringify(r)),c=[d[a]],l=!1):(d=JSON.parse(JSON.stringify(s(a,r[a]))),c=[d[a]],l=!0,o.push(i+": "+u),o.push("**** Invalid data. Reseting. ****")):(d=n,c=[d[a]],l=!0,o.push(i+": "+u),o.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:c,update:l,alerts:o}}},"8f57":function(e,t,s){"use strict";var n=s("0a40"),i=s.n(n);i.a},a58a:function(e,t,s){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},aae3:function(e,t,s){var n=s("d3f4"),i=s("2d95"),a=s("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},ebd6:function(e,t,s){var n=s("cb7c"),i=s("d8e8"),a=s("2b4c")("species");e.exports=function(e,t){var s,r=n(e).constructor;return void 0===r||void 0==(s=n(r)[a])?t:i(s)}}}]);
//# sourceMappingURL=mek_armor.fb350d35.js.map