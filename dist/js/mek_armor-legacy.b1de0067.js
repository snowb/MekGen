(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor","chunk-1feb8d1e","chunk-ae1029fa"],{"072f":function(e,t,n){"use strict";n("6762"),n("2fdb");var s=n("a745"),i=n.n(s);n("cadf"),n("551c"),n("f751"),n("097d");t["a"]={methods:{selectedItem:function(e,t,n,s){var i="undefined"===typeof s?"":s;return"undefined"===typeof n?this[e]==t?"selected_item":i:this[e]==t?n:i},selectedItemMultiple:function(e,t,n,s){var a="undefined"===typeof s?"":s;return i()(this[e])?"undefined"===typeof n?this[e].includes(t)?"selected_item":a:this[e].includes(t)?n:a:""}}}},"09c0":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small_sct"},[n("div",{staticClass:"subsection_container_sct"},[n("div",{staticClass:"subsection_header_small_sct"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header_sct"},[e._v(e._s(e.name))]),"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),e.showHeaders?n("tr",[n("td",{staticStyle:{"line-height":"2px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]):e._e(),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column_sct pad_sct"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]),n("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table_sct"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedIndices",s,"selected_item_sct"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=n("a4bb"),r=n.n(a),c=(n("6762"),n("2fdb"),n("28a5"),n("072f")),d={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[c["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0||"__INFINITY__"==e)return"∞";if("__NIL__"==e)return"Ø";if("__HEX__"==e)return"Hex";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys:function(){return this.items},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var s=""+t[n];e[n].length-4<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""},colspan:function(){return r()(this.headers).length}}},o=d,u=(n("8f57"),n("2877")),l=Object(u["a"])(o,s,i,!1,null,"7403b6fc",null);t["default"]=l.exports},"0a40":function(e,t,n){},"28a5":function(e,t,n){"use strict";var s=n("aae3"),i=n("cb7c"),a=n("ebd6"),r=n("0390"),c=n("9def"),d=n("5f1b"),o=n("520a"),u=n("79e5"),l=Math.min,f=[].push,m="split",p="length",h="lastIndex",_=4294967295,v=!u(function(){RegExp(_,"y")});n("214f")("split",2,function(e,t,n,u){var y;return y="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(i,e,t);var a,r,c,d=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,m=void 0===t?_:t>>>0,v=new RegExp(e.source,u+"g");while(a=o.call(v,i)){if(r=v[h],r>l&&(d.push(i.slice(l,a.index)),a[p]>1&&a.index<i[p]&&f.apply(d,a.slice(1)),c=a[0][p],l=r,d[p]>=m))break;v[h]===a.index&&v[h]++}return l===i[p]?!c&&v.test("")||d.push(""):d.push(i.slice(l)),d[p]>m?d.slice(0,m):d}:"0"[m](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,s):y.call(String(i),n,s)},function(e,t){var s=u(y,e,this,t,y!==n);if(s.done)return s.value;var o=i(e),f=String(this),m=a(o,RegExp),p=o.unicode,h=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(v?"y":"g"),k=new m(v?o:"^(?:"+o.source+")",h),b=void 0===t?_:t>>>0;if(0===b)return[];if(0===f.length)return null===d(k,f)?[f]:[];var g=0,w=0,S=[];while(w<f.length){k.lastIndex=v?w:0;var H,x=d(k,v?f:f.slice(w));if(null===x||(H=l(c(k.lastIndex+(v?0:w)),f.length))===g)w=r(f,w,p);else{if(S.push(f.slice(g,w)),S.length===b)return S;for(var M=1;M<=x.length-1;M++)if(S.push(x[M]),S.length===b)return S;w=g=H}}return S.push(f.slice(g)),S}]})},"3ffa":function(e,t,n){"use strict";t["a"]={data:function(){return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},"68cb":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.armor_table,selectedKeys:e.selected_keys,pkey:e.pkey,headers:{name:"Name",stopping_power:"SP",cost:"Cost"},name:"Armor",flow:"pkey-col",showHeaders:!0},on:{"update-selected-data":e.select_armor}})},i=[],a=(n("ac6a"),n("f499")),r=n.n(a),c=n("d866"),d=n("3ffa"),o=n("072f"),u=n("8fcf"),l=(n("7f7f"),n("a58a")),f=n("706d"),m={name:"None",cost:0,stopping_power:0,code:0},p=[m],h=l["a"].map(function(e){return{name:e.name,cost:e.code,stopping_power:e.code,code:e.code}}),_=p.concat(h),v=["name","cost","stopping_power","code"],y=Object(f["d"])(_,v),k=Object(f["c"])(_),b=Object(f["b"])(_,k),g=function(e,t,n){var s=void 0,i=[],a=!1,c=[],d=r()(t),o=void 0===n?_:n,u=o.some(function(n){return n[e]==t[e]});return void 0!==t&&k(e,t[e])&&u?y(t)?(s=JSON.parse(r()(t)),i=[s[e]],a=!1):(s=JSON.parse(r()(b(e,t[e]))),i=[s[e]],a=!0,c.push("Mek_Armor: "+d),c.push("**** Invalid data. Reseting. ****")):(s=m,i=[s[e]],a=!0,c.push("Mek_Armor: "+d),c.push("**** Invalid data. Reseting to default. ****")),{data:s,key_list:i,update:a,alerts:c}},w=n("09c0"),S={name:"mek_armor",props:["armor","maxArmor"],mixins:[d["a"],o["a"],u["a"],c["a"]],components:{"mek-sub-component-table":w["default"]},data:function(){var e={pkey:"stopping_power",alerts:[]};return e},methods:{select_armor:function(e){this.$emit("update-armor",JSON.parse(r()(e)))}},computed:{armor_table:function(){var e=this,t=_.filter(function(t){return t.code<=e.maxArmor},this);return t},selected_keys:function(){var e=this,t=g(this.pkey,this.armor,this.armor_table);return t.alerts.length>0&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_armor(t.data),t.key_list}}},H=S,x=n("2877"),M=Object(x["a"])(H,s,i,!1,null,null,null);t["default"]=M.exports},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return d}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return l});var s=n("f499"),i=n.n(s),a=n("a745"),r=n.n(a),c=void 0,d=function(e,t){return function(n){if("undefined"===typeof n||!r()(t)||0==t.length)return!1;var s=e.some(function(e){return!t.some(function(t){return n[t]!=e[t]})});return s}},o=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},u=function(e,t){return function(n,s){var i=null;return t(n,s)&&e.some(function(e){if(e[n]==s)return i=e,!0},c),i}},l=function(e,t,n,s,a){return function(r,c){var d=void 0,o=[],u=!1,l=[],f=i()(c);return void 0!==c&&t(r,c[r])?e(c)?(d=JSON.parse(i()(c)),o=[d[r]],u=!1):(d=JSON.parse(i()(n(r,c[r]))),o=[d[r]],u=!0,l.push(a+": "+f),l.push("**** Invalid data. Reseting. ****")):(d=s,o=[d[r]],u=!0,l.push(a+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:o,update:u,alerts:l}}}},"8f57":function(e,t,n){"use strict";var s=n("0a40"),i=n.n(s);i.a},a58a:function(e,t,n){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_armor-legacy.b1de0067.js.map