(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor-type","chunk-0a2ef8c8"],{"28a5":function(e,t,s){"use strict";var a=s("aae3"),n=s("cb7c"),i=s("ebd6"),r=s("0390"),l=s("9def"),c=s("5f1b"),d=s("520a"),o=s("79e5"),u=Math.min,p=[].push,m="split",f="length",_="lastIndex",h=4294967295,y=!o(function(){RegExp(h,"y")});s("214f")("split",2,function(e,t,s,o){var v;return v="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[f]||2!="ab"[m](/(?:ab)*/)[f]||4!="."[m](/(.?)(.?)/)[f]||"."[m](/()()/)[f]>1||""[m](/.?/)[f]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!a(e))return s.call(n,e,t);var i,r,l,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,m=void 0===t?h:t>>>0,y=new RegExp(e.source,o+"g");while(i=d.call(y,n)){if(r=y[_],r>u&&(c.push(n.slice(u,i.index)),i[f]>1&&i.index<n[f]&&p.apply(c,i.slice(1)),l=i[0][f],u=r,c[f]>=m))break;y[_]===i.index&&y[_]++}return u===n[f]?!l&&y.test("")||c.push(""):c.push(n.slice(u)),c[f]>m?c.slice(0,m):c}:"0"[m](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,a){var n=e(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,n,a):v.call(String(n),s,a)},function(e,t){var a=o(v,e,this,t,v!==s);if(a.done)return a.value;var d=n(e),p=String(this),m=i(d,RegExp),f=d.unicode,_=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(y?"y":"g"),k=new m(y?d:"^(?:"+d.source+")",_),g=void 0===t?h:t>>>0;if(0===g)return[];if(0===p.length)return null===c(k,p)?[p]:[];var b=0,w=0,C=[];while(w<p.length){k.lastIndex=y?w:0;var S,x=c(k,y?p:p.slice(w));if(null===x||(S=u(l(k.lastIndex+(y?0:w)),p.length))===b)w=r(p,w,f);else{if(C.push(p.slice(b,w)),C.length===g)return C;for(var D=1;D<=x.length-1;D++)if(C.push(x[D]),C.length===g)return C;w=b=S}}return C.push(p.slice(b)),C}]})},3321:function(e,t,s){},"5bb4":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.armor_type_table,selectedKeys:e.selected_keys,pkey:e.pkey,headers:{type:"Type",damage_coefficient:"DC",cost:"Cost"},name:"Armor Type",flow:"pkey-col",showHeaders:!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_armor_type}})},n=[],i=(s("ac6a"),s("072f")),r=s("8fcf"),l=s("d866");let c=[{type:"Ablative",damage_coefficient:0,cost:.5},{type:"Standard",damage_coefficient:1,cost:1},{type:"Alpha",damage_coefficient:2,cost:1.25},{type:"Beta",damage_coefficient:4,cost:1.5},{type:"Gamma",damage_coefficient:8,cost:2}],d={type:"Standard",damage_coefficient:1,cost:1},o=e=>{if("undefined"===typeof e)return!1;let t=c.some(t=>{return t.type==e.type&&t.cost==e.cost&&t.damage_coefficient==e.damage_coefficient});return t},u=(e,t)=>{return c.some(s=>{return void 0!==s[e]&&s[e]==t})},p=(e,t)=>{if(u(e,t)){let s=null;return c.some(a=>{if(a[e]==t)return s=a,!0},void 0),s}},m=function(e,t){let s=void 0,a=[],n=!1,i=[],r=JSON.stringify(t);return void 0!==t&&u(e,t[e])?o(t)?(s=JSON.parse(JSON.stringify(t)),a=[s[e]],n=!1):(s=JSON.parse(JSON.stringify(p(e,t[e]))),a=[s[e]],n=!0,i.push("Mek_Armor-Type: "+r),i.push("**** Invalid data. Reseting. ****")):(s=d,a=[s[e]],n=!0,i.push("Mek_Armor-Type: "+r),i.push("**** Invalid data. Reseting to default. ****")),{data:s,key_list:a,update:n,alerts:i}};var f=s("97ea"),_={name:"mek_armor_type",props:["armorType"],mixins:[i["a"],r["a"],l["a"]],components:{"mek-sub-component-table":f["default"]},data:function(){let e={pkey:"damage_coefficient",alert:[]};return e},methods:{select_armor_type:function(e){this.$emit("update-armor-type",JSON.parse(JSON.stringify(e)))}},computed:{armor_type_table(){return c},selected_keys(){let e=m(this.pkey,this.armorType);return e.alerts.length>0&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_armor_type(e.data),e.key_list}}},h=_,y=s("2877"),v=Object(y["a"])(h,a,n,!1,null,null,null);t["default"]=v.exports},"97ea":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1"},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return s("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return s("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,n){return s("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):"col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return s("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return s("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return s("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return s("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return s("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return s("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,n){return s("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return s("th",{key:a+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),s("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][a])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,a){return s("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(a),e.showDropdown=!1}}},e._l(e.headers,function(a,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e()])])])},n=[],i=(s("ac6a"),s("28a5"),s("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[i["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},updateSelectedData(e){this.$emit("update-selected-data",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),a=e;if(s.includes("percent")&&(a=100*e+"%"),s.includes("multiplier")&&(a="x"+a),s.includes("wide-angle"))switch(e){case 0:a="Ø";break;case 1:a="Hex";break;default:a=e+"°"}return s.includes("nullzero")&&0===e&&(a="Ø"),a}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,s)=>{let a={};for(let n in s)Object.keys(e).includes(n)&&(a[n]=s[n]);return t.push(a),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let a=""+t[s];e[s].length<=a.length&&(e[s]="xx"+a+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},l=r,c=(s("bc12"),s("2877")),d=Object(c["a"])(l,a,n,!1,null,"1103ef03",null);t["default"]=d.exports},aae3:function(e,t,s){var a=s("d3f4"),n=s("2d95"),i=s("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}},bc12:function(e,t,s){"use strict";var a=s("3321"),n=s.n(a);n.a},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},ebd6:function(e,t,s){var a=s("cb7c"),n=s("d8e8"),i=s("2b4c")("species");e.exports=function(e,t){var s,r=a(e).constructor;return void 0===r||void 0==(s=a(r)[i])?t:n(s)}}}]);
//# sourceMappingURL=mek_armor-type.8d5ef172.js.map