(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23d155e5","chunk-5a8f0fc3"],{"048f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,selectedKeys:e.selected_keys,headers:{feature:"Feature",cost:"Cost"},showHeaders:!0,format:{cost:"multiplier"},name:"Features",flow:"pkey-col"},on:{"update-selected-data":e.select_feature}})},n=[],r=(a("6762"),a("f499")),i=a.n(r),l=a("072f"),u=a("8fcf"),d=a("d866"),c=a("97ea"),o={name:"mek_energy_pool_feature",props:["featureArray"],mixins:[l["a"],u["a"],d["a"]],components:{"mek-sub-component-table":c["default"]},data:function(){var e={feature_table:[{feature:"Morphable",cost:1.25},{feature:"Fragile",cost:1}],selected_feature_array:[],pkey:"feature",alerts:[]};return e},methods:{select_feature:function(e){var t=this.toggleFeature(this.selected_feature_array,e);t=this.cleanFeatureArray(t).cleaned_array,this.publishAlerts(),this.$set(this,"selected_feature_array",t),this.$emit("update-feature",t)},feature_validate:function(e){if("undefined"===typeof e)return!1;var t=this.feature_table.some(function(t){return t.feature==e.feature&&t.cost==e.cost});return t},has_feature:function(e,t){return this.feature_table.some(function(a){return void 0!==a[e]&&a[e]==t})},get_feature:function(e,t){if(this.has_feature(e,t)){var a=null;return this.feature_table.some(function(s){if(s[e]==t)return a=s,!0},this),a}},cleanFeatureArray:function(e){var t=this,a=this,s=!1,n=[];if(0==e.length)return{cleaned_array:[],update:s,key_list:n};var r=e.reduceRight(function(e,r){if(void 0===r[a.pkey])return a.addAlert("Mek_Energy_Pool-Feature: "+i()(r)),a.addAlert("**** Missing primary key. Ignoring. ****"),e;var l=r;return t.feature_validate(r)||(a.addAlert("Mek_Energy_Pool-Feature: "+i()(r)),a.addAlert("**** Invalid data, attempting to reset. ****"),l=t.get_feature(a.pkey,r[a.pkey]),s=!0),null===l?(a.addAlert("**** Unable to reset. No matching data. ****"),s=!0,e):(n.includes(r[a.pkey])||(e.push(r),n.push(r[a.pkey])),e)},[]);return r=r.reverse(),{cleaned_array:r,update:s,key_list:n}},toggleFeature:function(e,t){var a=this,s=JSON.parse(i()(e)),n=s.some(function(e){return e[a.pkey]==t[a.pkey]},this);return n?s.filter(function(e){return e[a.pkey]!=t[a.pkey]},this):(s.push(t),s)}},computed:{selected_keys:function(){if(0==this.featureArray.length)return[];if(1==this.featureArray.length){var e=this.featureArray[0][this.pkey];if(void 0===e||!this.has_feature(this.pkey,e)){var t=i()(this.featureArray[0]);return this.addAlert("Mek_Energy_Pool-Feature: "+t),this.addAlert("**** Invalid data. Reseting to default. ****"),this.publishAlerts(),this.select_ammo([]),[]}if(this.has_feature(this.pkey,e)&&!this.feature_validate(this.featureArray[0])){var a=i()(this.get_feature(this.pkey,e)),s=JSON.parse(a);this.addAlert("Mek_Energy_Pool-Feature: "+a),this.addAlert("**** Invalid data. Reseting. ****"),this.publishAlerts(),this.select_ammo(s)}return[e]}var n=this.cleanFeatureArray(this.featureArray);return n.update&&(this.$set(this,"feature_table",n.cleaned_array),this.$emit("update-feature",n.cleaned_array)),n.key_list}}},f=o,h=a("2877"),p=Object(h["a"])(f,s,n,!1,null,null,null);t["default"]=p.exports},"28a5":function(e,t,a){"use strict";var s=a("aae3"),n=a("cb7c"),r=a("ebd6"),i=a("0390"),l=a("9def"),u=a("5f1b"),d=a("520a"),c=a("79e5"),o=Math.min,f=[].push,h="split",p="length",_="lastIndex",m=4294967295,y=!c(function(){RegExp(m,"y")});a("214f")("split",2,function(e,t,a,c){var v;return v="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[p]||2!="ab"[h](/(?:ab)*/)[p]||4!="."[h](/(.?)(.?)/)[p]||"."[h](/()()/)[p]>1||""[h](/.?/)[p]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!s(e))return a.call(n,e,t);var r,i,l,u=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),o=0,h=void 0===t?m:t>>>0,y=new RegExp(e.source,c+"g");while(r=d.call(y,n)){if(i=y[_],i>o&&(u.push(n.slice(o,r.index)),r[p]>1&&r.index<n[p]&&f.apply(u,r.slice(1)),l=r[0][p],o=i,u[p]>=h))break;y[_]===r.index&&y[_]++}return o===n[p]?!l&&y.test("")||u.push(""):u.push(n.slice(o)),u[p]>h?u.slice(0,h):u}:"0"[h](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,s){var n=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,n,s):v.call(String(n),a,s)},function(e,t){var s=c(v,e,this,t,v!==a);if(s.done)return s.value;var d=n(e),f=String(this),h=r(d,RegExp),p=d.unicode,_=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(y?"y":"g"),k=new h(y?d:"^(?:"+d.source+")",_),g=void 0===t?m:t>>>0;if(0===g)return[];if(0===f.length)return null===u(k,f)?[f]:[];var b=0,w=0,C=[];while(w<f.length){k.lastIndex=y?w:0;var A,x=u(k,y?f:f.slice(w));if(null===x||(A=o(l(k.lastIndex+(y?0:w)),f.length))===b)w=i(f,w,p);else{if(C.push(f.slice(b,w)),C.length===g)return C;for(var I=1;I<=x.length-1;I++)if(C.push(x[I]),C.length===g)return C;w=b=A}}return C.push(f.slice(b)),C}]})},3321:function(e,t,a){},"97ea":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[a("div",{staticClass:"metallic_background_small1"},[a("div",{staticClass:"subsection_container1"},[a("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),a("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return a("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return a("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,n){return a("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):"col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[e.showHeaders?a("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return a("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),a("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return a("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,n){return a("div",{key:"item-"+n+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[n],n))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?a("table",{staticStyle:{margin:"auto"}},[e.showHeaders?a("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return a("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),a("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return a("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?a("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return a("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,n){return a("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[n],n))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return a("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},n=[],r=a("a4bb"),i=a.n(r),l=(a("6762"),a("2fdb"),a("28a5"),a("072f")),u={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[l["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var a=this.format[t].split(",").map(function(e){return e.toLowerCase()}),s=e;if(a.includes("percent")&&(s=100*e+"%"),a.includes("multiplier")&&(s="x"+s),a.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return a.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,a){var s={};for(var n in a)i()(e).includes(n)&&(s[n]=a[n]);return t.push(s),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var a in t){"undefined"===typeof e[a]&&(e[a]="");var s=""+t[a];e[a].length<=s.length&&(e[a]="xx"+s+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},d=u,c=(a("bc12"),a("2877")),o=Object(c["a"])(d,s,n,!1,null,"1103ef03",null);t["default"]=o.exports},bc12:function(e,t,a){"use strict";var s=a("3321"),n=a.n(s);n.a},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=chunk-23d155e5-legacy.c433fd78.js.map