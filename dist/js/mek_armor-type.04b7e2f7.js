(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor-type","chunk-96bd1ca6","chunk-6d4b127e"],{"0549":function(e,t,n){},"072f":function(e,t,n){"use strict";t["a"]={methods:{selectedItem:function(e,t,n,s){let a="undefined"===typeof s?"":s;return"undefined"===typeof n?this[e]==t?"selected_item":a:this[e]==t?n:a},selectedItemMultiple:function(e,t,n,s){let a="undefined"===typeof s?"":s;return Array.isArray(this[e])?"undefined"===typeof n?this[e].includes(t)?"selected_item":a:this[e].includes(t)?n:a:""}}}},"09c0":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,a){return n("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=(n("28a5"),n("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0||"__INFINITY__"==e)return"∞";if("__NIL__"==e)return"Ø";if("__HEX__"==e)return"Hex";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let n=this.format[t].split(",").map(e=>e.toLowerCase()),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys(){return this.items},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let n in t){"undefined"===typeof e[n]&&(e[n]="");let s=""+t[n];e[n].length-4<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},l=r,c=(n("5283"),n("2877")),d=Object(c["a"])(l,s,a,!1,null,"2df83d92",null);t["default"]=d.exports},"28a5":function(e,t,n){"use strict";var s=n("aae3"),a=n("cb7c"),i=n("ebd6"),r=n("0390"),l=n("9def"),c=n("5f1b"),d=n("520a"),o=n("79e5"),u=Math.min,p=[].push,f="split",m="length",h="lastIndex",_=4294967295,y=!o(function(){RegExp(_,"y")});n("214f")("split",2,function(e,t,n,o){var v;return v="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[m]||2!="ab"[f](/(?:ab)*/)[m]||4!="."[f](/(.?)(.?)/)[m]||"."[f](/()()/)[m]>1||""[f](/.?/)[m]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(a,e,t);var i,r,l,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,f=void 0===t?_:t>>>0,y=new RegExp(e.source,o+"g");while(i=d.call(y,a)){if(r=y[h],r>u&&(c.push(a.slice(u,i.index)),i[m]>1&&i.index<a[m]&&p.apply(c,i.slice(1)),l=i[0][m],u=r,c[m]>=f))break;y[h]===i.index&&y[h]++}return u===a[m]?!l&&y.test("")||c.push(""):c.push(a.slice(u)),c[m]>f?c.slice(0,f):c}:"0"[f](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,s):v.call(String(a),n,s)},function(e,t){var s=o(v,e,this,t,v!==n);if(s.done)return s.value;var d=a(e),p=String(this),f=i(d,RegExp),m=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(y?"y":"g"),b=new f(y?d:"^(?:"+d.source+")",h),g=void 0===t?_:t>>>0;if(0===g)return[];if(0===p.length)return null===c(b,p)?[p]:[];var k=0,w=0,x=[];while(w<p.length){b.lastIndex=y?w:0;var S,C=c(b,y?p:p.slice(w));if(null===C||(S=u(l(b.lastIndex+(y?0:w)),p.length))===k)w=r(p,w,m);else{if(x.push(p.slice(k,w)),x.length===g)return x;for(var D=1;D<=C.length-1;D++)if(x.push(C[D]),x.length===g)return x;w=k=S}}return x.push(p.slice(k)),x}]})},5283:function(e,t,n){"use strict";var s=n("0549"),a=n.n(s);a.a},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return s}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r});let s=(e,t)=>n=>{if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;let s=e.some(e=>{return!t.some(t=>{return n[t]!=e[t]})});return s},a=e=>(t,n)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==n})},i=(e,t)=>(n,s)=>{let a=null;return t(n,s)&&e.some(e=>{if(e[n]==s)return a=e,!0},void 0),a},r=(e,t,n,s,a)=>(i,r)=>{let l=void 0,c=[],d=!1,o=[],u=JSON.stringify(r);return void 0!==r&&t(i,r[i])?e(r)?(l=JSON.parse(JSON.stringify(r)),c=[l[i]],d=!1):(l=JSON.parse(JSON.stringify(n(i,r[i]))),c=[l[i]],d=!0,o.push(a+": "+u),o.push("**** Invalid data. Reseting. ****")):(l=s,c=[l[i]],d=!0,o.push(a+": "+u),o.push("**** Invalid data. Reseting to default. ****")),{data:l,key_list:c,update:d,alerts:o}}},aae3:function(e,t,n){var s=n("d3f4"),a=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},e4ac:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.armor_type_table,selectedKeys:e.selected_keys,pkey:e.pkey,headers:{type:"Type",damage_coefficient:"DC",cost:"Cost"},name:"Armor Type",flow:"pkey-col",showHeaders:!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_armor_type}})},a=[],i=(n("ac6a"),n("072f")),r=n("8fcf"),l=n("d866"),c=n("706d");let d=[{type:"Ablative",damage_coefficient:0,cost:.5},{type:"Standard",damage_coefficient:1,cost:1},{type:"Alpha",damage_coefficient:2,cost:1.25},{type:"Beta",damage_coefficient:4,cost:1.5},{type:"Gamma",damage_coefficient:8,cost:2}],o={type:"Standard",damage_coefficient:1,cost:1},u=["type","damage_coefficient","cost"],p=Object(c["d"])(d,u),f=Object(c["c"])(d),m=Object(c["b"])(d,f),h=Object(c["a"])(p,f,m,o,"Mek_Armor-Type");var _=n("09c0"),y={name:"mek_armor_type",props:["armorType"],mixins:[i["a"],r["a"],l["a"]],components:{"mek-sub-component-table":_["default"]},data:function(){let e={pkey:"damage_coefficient",alert:[]};return e},methods:{select_armor_type:function(e){this.$emit("update-armor-type",JSON.parse(JSON.stringify(e)))}},computed:{armor_type_table(){return d},selected_keys(){let e=h(this.pkey,this.armorType);return e.alerts.length>0&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_armor_type(e.data),e.key_list}}},v=y,b=n("2877"),g=Object(b["a"])(v,s,a,!1,null,null,null);t["default"]=g.exports},ebd6:function(e,t,n){var s=n("cb7c"),a=n("d8e8"),i=n("2b4c")("species");e.exports=function(e,t){var n,r=s(e).constructor;return void 0===r||void 0==(n=s(r)[i])?t:a(n)}}}]);
//# sourceMappingURL=mek_armor-type.04b7e2f7.js.map