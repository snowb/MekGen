(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor-type","chunk-5a8f0fc3"],{"28a5":function(e,t,n){"use strict";var a=n("aae3"),s=n("cb7c"),i=n("ebd6"),r=n("0390"),l=n("9def"),c=n("5f1b"),d=n("520a"),o=n("79e5"),u=Math.min,p=[].push,f="split",m="length",_="lastIndex",h=4294967295,y=!o(function(){RegExp(h,"y")});n("214f")("split",2,function(e,t,n,o){var v;return v="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[m]||2!="ab"[f](/(?:ab)*/)[m]||4!="."[f](/(.?)(.?)/)[m]||"."[f](/()()/)[m]>1||""[f](/.?/)[m]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(s,e,t);var i,r,l,c=[],o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,f=void 0===t?h:t>>>0,y=new RegExp(e.source,o+"g");while(i=d.call(y,s)){if(r=y[_],r>u&&(c.push(s.slice(u,i.index)),i[m]>1&&i.index<s[m]&&p.apply(c,i.slice(1)),l=i[0][m],u=r,c[m]>=f))break;y[_]===i.index&&y[_]++}return u===s[m]?!l&&y.test("")||c.push(""):c.push(s.slice(u)),c[m]>f?c.slice(0,f):c}:"0"[f](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,a){var s=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,s,a):v.call(String(s),n,a)},function(e,t){var a=o(v,e,this,t,v!==n);if(a.done)return a.value;var d=s(e),p=String(this),f=i(d,RegExp),m=d.unicode,_=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(y?"y":"g"),k=new f(y?d:"^(?:"+d.source+")",_),b=void 0===t?h:t>>>0;if(0===b)return[];if(0===p.length)return null===c(k,p)?[p]:[];var g=0,w=0,C=[];while(w<p.length){k.lastIndex=y?w:0;var S,x=c(k,y?p:p.slice(w));if(null===x||(S=u(l(k.lastIndex+(y?0:w)),p.length))===g)w=r(p,w,m);else{if(C.push(p.slice(g,w)),C.length===b)return C;for(var D=1;D<=x.length-1;D++)if(C.push(x[D]),C.length===b)return C;w=g=S}}return C.push(p.slice(g)),C}]})},3321:function(e,t,n){},"5bb4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.armor_type_table,selectedKeys:e.selected_keys,pkey:e.pkey,headers:{type:"Type",damage_coefficient:"DC",cost:"Cost"},name:"Armor Type",flow:"pkey-col",showHeaders:!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_armor_type}})},s=[],i=(n("ac6a"),n("f499")),r=n.n(i),l=n("072f"),c=n("8fcf"),d=n("d866"),o=void 0,u=[{type:"Ablative",damage_coefficient:0,cost:.5},{type:"Standard",damage_coefficient:1,cost:1},{type:"Alpha",damage_coefficient:2,cost:1.25},{type:"Beta",damage_coefficient:4,cost:1.5},{type:"Gamma",damage_coefficient:8,cost:2}],p={type:"Standard",damage_coefficient:1,cost:1},f=function(e){if("undefined"===typeof e)return!1;var t=u.some(function(t){return t.type==e.type&&t.cost==e.cost&&t.damage_coefficient==e.damage_coefficient});return t},m=function(e,t){return u.some(function(n){return void 0!==n[e]&&n[e]==t})},_=function(e,t){if(m(e,t)){var n=null;return u.some(function(a){if(a[e]==t)return n=a,!0},o),n}},h=function(e,t){var n=void 0,a=[],s=!1,i=[],l=r()(t);return void 0!==t&&m(e,t[e])?f(t)?(n=JSON.parse(r()(t)),a=[n[e]],s=!1):(n=JSON.parse(r()(_(e,t[e]))),a=[n[e]],s=!0,i.push("Mek_Armor-Type: "+l),i.push("**** Invalid data. Reseting. ****")):(n=p,a=[n[e]],s=!0,i.push("Mek_Armor-Type: "+l),i.push("**** Invalid data. Reseting to default. ****")),{data:n,key_list:a,update:s,alerts:i}},y=n("97ea"),v={name:"mek_armor_type",props:["armorType"],mixins:[l["a"],c["a"],d["a"]],components:{"mek-sub-component-table":y["default"]},data:function(){var e={pkey:"damage_coefficient",alert:[]};return e},methods:{select_armor_type:function(e){this.$emit("update-armor-type",JSON.parse(r()(e)))}},computed:{armor_type_table:function(){return u},selected_keys:function(){var e=this,t=h(this.pkey,this.armorType);return t.alerts.length>0&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_armor_type(t.data),t.key_list}}},k=v,b=n("2877"),g=Object(b["a"])(k,a,s,!1,null,null,null);t["default"]=g.exports},"97ea":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return n("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return n("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return n("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return n("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return n("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[a])}}},e._l(e.headers,function(a,s){return n("div",{key:"item-"+s+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[s],s))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return n("th",{key:a+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,a){return n("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][a])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,a){return n("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(a),e.showDropdown=!1}}},e._l(e.headers,function(a,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[s],s))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return n("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e()])])])},s=[],i=n("a4bb"),r=n.n(i),l=(n("6762"),n("2fdb"),n("28a5"),n("072f")),c={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[l["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),a=e;if(n.includes("percent")&&(a=100*e+"%"),n.includes("multiplier")&&(a="x"+a),n.includes("wide-angle"))switch(e){case 0:a="Ø";break;case 1:a="Hex";break;default:a=e+"°"}return n.includes("nullzero")&&0===e&&(a="Ø"),a}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,n){var a={};for(var s in n)r()(e).includes(s)&&(a[s]=n[s]);return t.push(a),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var a=""+t[n];e[n].length<=a.length&&(e[n]="xx"+a+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},d=c,o=(n("bc12"),n("2877")),u=Object(o["a"])(d,a,s,!1,null,"1103ef03",null);t["default"]=u.exports},bc12:function(e,t,n){"use strict";var a=n("3321"),s=n.n(a);s.a},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_armor-type-legacy.b283751a.js.map