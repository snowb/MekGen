(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor-type","mel_sub-component-table","chunk-afd6182c"],{"072f":function(e,t,s){"use strict";t["a"]={methods:{selectedItem:function(e,t,s,n){let a="undefined"===typeof n?"":n;return"undefined"===typeof s?this[e]==t?"selected_item":a:this[e]==t?s:a},selectedItemMultiple:function(e,t,s,n){let a="undefined"===typeof n?"":n;return Array.isArray(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":a:this[e].includes(t)?s:a:""}}}},"09c0":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small_sct"},[s("div",{staticClass:"subsection_container_sct"},[s("div",{staticClass:"subsection_header_small_sct"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header_sct"},[e._v(e._s(e.name))]),"pkey-col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),e.showHeaders?s("tr",[s("td",{staticStyle:{"line-height":"2px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]):e._e(),e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column_sct pad_sct"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item_sct"),on:{click:function(t){return e.updateSelectedData(e.items[n])}}},e._l(e.headers,function(n,a){return s("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row_sct"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px","border-top":"1px solid black"},attrs:{colspan:e.colspan}},[e._v("\n                         \n                    ")])]),s("tr",{staticClass:"pad selected_item_sct",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][n])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table_sct"},[e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable_sct pad_sct",class:e.selectedItemMultiple("selectedIndices",n,"selected_item_sct"),on:{click:function(t){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row_sct"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=(s("ac6a"),s("28a5"),s("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0||"__INFINITY__"==e)return"∞";if("__NIL__"==e)return"Ø";if("__HEX__"==e)return"Hex";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),n=e;if(s.includes("percent")&&(n=100*e+"%"),s.includes("multiplier")&&(n="x"+n),s.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return s.includes("nullzero")&&0===e&&(n="Ø"),n}},computed:{itemDisplayedKeys(){return this.items},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let n=""+t[s];e[s].length-4<=n.length&&(e[s]="xx"+n+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""},colspan(){return Object.keys(this.headers).length}}},l=r,c=(s("2c8f"),s("2877")),d=Object(c["a"])(l,n,a,!1,null,"0f67b4d3",null);t["default"]=d.exports},"28a5":function(e,t,s){"use strict";var n=s("aae3"),a=s("cb7c"),i=s("ebd6"),r=s("0390"),l=s("9def"),c=s("5f1b"),d=s("520a"),o=s("79e5"),u=Math.min,p=[].push,f="split",_="length",m="lastIndex",h=4294967295,y=!o(function(){RegExp(h,"y")});s("214f")("split",2,function(e,t,s,o){var v;return v="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[_]||2!="ab"[f](/(?:ab)*/)[_]||4!="."[f](/(.?)(.?)/)[_]||"."[f](/()()/)[_]>1||""[f](/.?/)[_]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(a,e,t);var i,r,l,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,f=void 0===t?h:t>>>0,y=new RegExp(e.source,o+"g");while(i=d.call(y,a)){if(r=y[m],r>u&&(c.push(a.slice(u,i.index)),i[_]>1&&i.index<a[_]&&p.apply(c,i.slice(1)),l=i[0][_],u=r,c[_]>=f))break;y[m]===i.index&&y[m]++}return u===a[_]?!l&&y.test("")||c.push(""):c.push(a.slice(u)),c[_]>f?c.slice(0,f):c}:"0"[f](void 0,0)[_]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var a=e(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,a,n):v.call(String(a),s,n)},function(e,t){var n=o(v,e,this,t,v!==s);if(n.done)return n.value;var d=a(e),p=String(this),f=i(d,RegExp),_=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(y?"y":"g"),b=new f(y?d:"^(?:"+d.source+")",m),g=void 0===t?h:t>>>0;if(0===g)return[];if(0===p.length)return null===c(b,p)?[p]:[];var k=0,w=0,x=[];while(w<p.length){b.lastIndex=y?w:0;var S,C=c(b,y?p:p.slice(w));if(null===C||(S=u(l(b.lastIndex+(y?0:w)),p.length))===k)w=r(p,w,_);else{if(x.push(p.slice(k,w)),x.length===g)return x;for(var D=1;D<=C.length-1;D++)if(x.push(C[D]),x.length===g)return x;w=k=S}}return x.push(p.slice(k)),x}]})},"2c8f":function(e,t,s){"use strict";var n=s("602f"),a=s.n(n);a.a},"602f":function(e,t,s){},"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return n}),s.d(t,"c",function(){return a}),s.d(t,"b",function(){return i}),s.d(t,"a",function(){return r});let n=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let n=e.some(e=>{return!t.some(t=>{return s[t]!=e[t]})});return n},a=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},i=(e,t)=>(s,n)=>{let a=null;return t(s,n)&&e.some(e=>{if(e[s]==n)return a=e,!0},void 0),a},r=(e,t,s,n,a)=>(i,r)=>{let l=void 0,c=[],d=!1,o=[],u=JSON.stringify(r);return void 0!==r&&t(i,r[i])?e(r)?(l=JSON.parse(JSON.stringify(r)),c=[l[i]],d=!1):(l=JSON.parse(JSON.stringify(s(i,r[i]))),c=[l[i]],d=!0,o.push(a+": "+u),o.push("**** Invalid data. Reseting. ****")):(l=n,c=[l[i]],d=!0,o.push(a+": "+u),o.push("**** Invalid data. Reseting to default. ****")),{data:l,key_list:c,update:d,alerts:o}}},aae3:function(e,t,s){var n=s("d3f4"),a=s("2d95"),i=s("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},e4ac:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.armor_type_table,selectedKeys:e.selected_keys,pkey:e.pkey,headers:{type:"Type",damage_coefficient:"DC",cost:"Cost"},name:"Armor Type",flow:"pkey-col",showHeaders:!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_armor_type}})},a=[],i=(s("ac6a"),s("072f")),r=s("8fcf"),l=s("d866"),c=s("706d");let d=[{type:"Ablative",damage_coefficient:0,cost:.5},{type:"Standard",damage_coefficient:1,cost:1},{type:"Alpha",damage_coefficient:2,cost:1.25},{type:"Beta",damage_coefficient:4,cost:1.5},{type:"Gamma",damage_coefficient:8,cost:2}],o={type:"Standard",damage_coefficient:1,cost:1},u=["type","damage_coefficient","cost"],p=Object(c["d"])(d,u),f=Object(c["c"])(d),_=Object(c["b"])(d,f),m=Object(c["a"])(p,f,_,o,"Mek_Armor-Type");var h=s("09c0"),y={name:"mek_armor_type",props:["armorType"],mixins:[i["a"],r["a"],l["a"]],components:{"mek-sub-component-table":h["default"]},data:function(){let e={pkey:"damage_coefficient",alert:[]};return e},methods:{select_armor_type:function(e){this.$emit("update-armor-type",JSON.parse(JSON.stringify(e)))}},computed:{armor_type_table(){return d},selected_keys(){let e=m(this.pkey,this.armorType);return e.alerts.length>0&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_armor_type(e.data)),e.key_list}}},v=y,b=s("2877"),g=Object(b["a"])(v,n,a,!1,null,null,null);t["default"]=g.exports},ebd6:function(e,t,s){var n=s("cb7c"),a=s("d8e8"),i=s("2b4c")("species");e.exports=function(e,t){var s,r=n(e).constructor;return void 0===r||void 0==(s=n(r)[i])?t:a(s)}}}]);
//# sourceMappingURL=mek_armor-type.a3e3c9c9.js.map