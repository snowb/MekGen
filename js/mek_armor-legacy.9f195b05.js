(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor","mel_sub-component-table","chunk-6c105c2e"],{"072f":function(e,t,n){"use strict";n("6762"),n("2fdb");var a=n("a745"),i=n.n(a);n("cadf"),n("551c"),n("f751"),n("097d");t["a"]={methods:{selectedItem:function(e,t,n,a){var i="undefined"===typeof a?"":a;return"undefined"===typeof n?this[e]==t?"selected_item":i:this[e]==t?n:i},selectedItemMultiple:function(e,t,n,a){var s="undefined"===typeof a?"":a;return i()(this[e])?"undefined"===typeof n?this[e].includes(t)?"selected_item":s:this[e].includes(t)?n:s:""}}}},"09c0":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small_sct"},[n("div",{staticClass:"subsection_container_sct"},[n("div",{staticClass:"subsection_header_small_sct"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header_sct"},[e._v(e._s(e.name))]),"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),e.showHeaders?n("tr",[n("td",{staticStyle:{"line-height":"2px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]):e._e(),e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column_sct pad_sct"},e._l(e.headers,function(t,a){return n("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return n("td",{key:a+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]),n("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][a])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table_sct"},[e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedIndices",a,"selected_item_sct"),on:{click:function(t){e.updateSelectedIndices(a),e.showDropdown=!1}}},e._l(e.headers,function(a,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e()])])])},i=[],s=n("a4bb"),r=n.n(s),c=(n("6762"),n("2fdb"),n("28a5"),n("072f")),d={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[c["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0||"__INFINITY__"==e)return"∞";if("__NIL__"==e)return"Ø";if("__HEX__"==e)return"Hex";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),a=e;if(n.includes("percent")&&(a=100*e+"%"),n.includes("multiplier")&&(a="x"+a),n.includes("wide-angle"))switch(e){case 0:a="Ø";break;case 1:a="Hex";break;default:a=e+"°"}return n.includes("nullzero")&&0===e&&(a="Ø"),a}},computed:{itemDisplayedKeys:function(){return this.items},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var a=""+t[n];e[n].length-4<=a.length&&(e[n]="xx"+a+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""},colspan:function(){return r()(this.headers).length}}},o=d,u=(n("2c8f"),n("2877")),l=Object(u["a"])(o,a,i,!1,null,"0f67b4d3",null);t["default"]=l.exports},"28a5":function(e,t,n){"use strict";var a=n("aae3"),i=n("cb7c"),s=n("ebd6"),r=n("0390"),c=n("9def"),d=n("5f1b"),o=n("520a"),u=n("79e5"),l=Math.min,f=[].push,m="split",p="length",_="lastIndex",h=4294967295,v=!u(function(){RegExp(h,"y")});n("214f")("split",2,function(e,t,n,u){var y;return y="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(i,e,t);var s,r,c,d=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,m=void 0===t?h:t>>>0,v=new RegExp(e.source,u+"g");while(s=o.call(v,i)){if(r=v[_],r>l&&(d.push(i.slice(l,s.index)),s[p]>1&&s.index<i[p]&&f.apply(d,s.slice(1)),c=s[0][p],l=r,d[p]>=m))break;v[_]===s.index&&v[_]++}return l===i[p]?!c&&v.test("")||d.push(""):d.push(i.slice(l)),d[p]>m?d.slice(0,m):d}:"0"[m](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,a){var i=e(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,i,a):y.call(String(i),n,a)},function(e,t){var a=u(y,e,this,t,y!==n);if(a.done)return a.value;var o=i(e),f=String(this),m=s(o,RegExp),p=o.unicode,_=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(v?"y":"g"),b=new m(v?o:"^(?:"+o.source+")",_),g=void 0===t?h:t>>>0;if(0===g)return[];if(0===f.length)return null===d(b,f)?[f]:[];var k=0,w=0,S=[];while(w<f.length){b.lastIndex=v?w:0;var H,x=d(b,v?f:f.slice(w));if(null===x||(H=l(c(b.lastIndex+(v?0:w)),f.length))===k)w=r(f,w,p);else{if(S.push(f.slice(k,w)),S.length===g)return S;for(var M=1;M<=x.length-1;M++)if(S.push(x[M]),S.length===g)return S;w=k=H}}return S.push(f.slice(k)),S}]})},"2c8f":function(e,t,n){"use strict";var a=n("602f"),i=n.n(a);i.a},"3ffa":function(e,t,n){"use strict";t["a"]={data:function(){return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},4753:function(e,t,n){"use strict";n.r(t),n.d(t,"armor_data_table",function(){return u}),n.d(t,"armor_validate",function(){return m}),n.d(t,"has_feature",function(){return p}),n.d(t,"get_feature",function(){return _}),n.d(t,"cleaned_feature",function(){return h}),n.d(t,"filter_data_table",function(){return l});n("7f7f");var a=n("a58a"),i=n("706d"),s={name:"None",cost:0,stopping_power:0,code:0},r=[s],c=a["a"].map(function(e){return{name:e.name,cost:e.code,stopping_power:e.code,code:e.code}});r=r.concat(c);var d=["name","cost","stopping_power","code"],o=!1,u=null,l=function(e){o=!1,u=r.filter(function(t){return t.code<=e})},f=Object(i["d"])(r,d),m=function(e){return o?f(e):(o=!0,f=Object(i["d"])(u,d),f(e))},p=function(e,t){return Object(i["c"])(u)(e,t)},_=function(e,t){return Object(i["b"])(u,p)(e,t)},h=Object(i["a"])(m,p,_,s,"Mek_Armor")},"602f":function(e,t,n){},"68cb":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.armor_table,selectedKeys:e.selected_keys,pkey:e.pkey,headers:{name:"Name",stopping_power:"SP",cost:"Cost"},name:"Armor",flow:"pkey-col",showHeaders:!0},on:{"update-selected-data":e.select_armor}})},i=[],s=(n("ac6a"),n("f499")),r=n.n(s),c=n("d866"),d=n("3ffa"),o=n("072f"),u=n("8fcf"),l=n("4753"),f=n("09c0"),m={name:"mek_armor",props:["armor","maxArmor"],mixins:[d["a"],o["a"],u["a"],c["a"]],components:{"mek-sub-component-table":f["default"]},data:function(){var e={pkey:"stopping_power",alerts:[],suppressAlerts:!1};return e},methods:{select_armor:function(e){this.$emit("update-armor",JSON.parse(r()(e)))}},computed:{armor_table:function(){return Object(l["filter_data_table"])(this.maxArmor),l["armor_data_table"]},selected_keys:function(){var e=this,t=Object(l["cleaned_feature"])(this.pkey,this.armor,this.armor_table);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_armor(t.data)),t.key_list}}},p=m,_=n("2877"),h=Object(_["a"])(p,a,i,!1,null,null,null);t["default"]=h.exports},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return d}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return l});var a=n("f499"),i=n.n(a),s=n("a745"),r=n.n(s),c=(n("cadf"),n("551c"),n("f751"),n("097d"),void 0),d=function(e,t){return function(n){if("undefined"===typeof n||!r()(t)||0==t.length)return!1;var a=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return a}},o=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},u=function(e,t){return function(n,a){var i=null;return t(n,a)&&e.some(function(e){if(e[n]==a)return i=e,!0},c),i}},l=function(e,t,n,a,s){return function(r,c){var d=void 0,o=[],u=!1,l=[],f=i()(c);return void 0!==c&&t(r,c[r])?e(c)?(d=JSON.parse(i()(c)),o=[d[r]],u=!1):(d=JSON.parse(i()(n(r,c[r]))),o=[d[r]],u=!0,l.push(s+": "+f),l.push("**** Invalid data. Reseting. ****")):(d=a,o=[d[r]],u=!0,l.push(s+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:o,update:u,alerts:l}}}},a58a:function(e,t,n){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},d866:function(e,t,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_armor-legacy.9f195b05.js.map