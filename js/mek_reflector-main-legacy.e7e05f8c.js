(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector-main","chunk-5a8f0fc3"],{1439:function(e,t,n){},"28a5":function(e,t,n){"use strict";var s=n("aae3"),i=n("cb7c"),a=n("ebd6"),c=n("0390"),r=n("9def"),l=n("5f1b"),o=n("520a"),u=n("79e5"),d=Math.min,f=[].push,m="split",p="length",_="lastIndex",h=4294967295,v=!u(function(){RegExp(h,"y")});n("214f")("split",2,function(e,t,n,u){var y;return y="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(i,e,t);var a,c,r,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=void 0===t?h:t>>>0,v=new RegExp(e.source,u+"g");while(a=o.call(v,i)){if(c=v[_],c>d&&(l.push(i.slice(d,a.index)),a[p]>1&&a.index<i[p]&&f.apply(l,a.slice(1)),r=a[0][p],d=c,l[p]>=m))break;v[_]===a.index&&v[_]++}return d===i[p]?!r&&v.test("")||l.push(""):l.push(i.slice(d)),l[p]>m?l.slice(0,m):l}:"0"[m](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var i=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,s):y.call(String(i),n,s)},function(e,t){var s=u(y,e,this,t,y!==n);if(s.done)return s.value;var o=i(e),f=String(this),m=a(o,RegExp),p=o.unicode,_=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(v?"y":"g"),k=new m(v?o:"^(?:"+o.source+")",_),w=void 0===t?h:t>>>0;if(0===w)return[];if(0===f.length)return null===l(k,f)?[f]:[];var g=0,b=0,C=[];while(b<f.length){k.lastIndex=v?b:0;var x,S=l(k,v?f:f.slice(b));if(null===S||(x=d(r(k.lastIndex+(v?0:b)),f.length))===g)b=c(f,b,p);else{if(C.push(f.slice(g,b)),C.length===w)return C;for(var D=1;D<=S.length-1;D++)if(C.push(S[D]),C.length===w)return C;b=g=x}}return C.push(f.slice(g)),C}]})},3235:function(e,t,n){"use strict";var s=n("1439"),i=n.n(s);i.a},3321:function(e,t,n){},"97ea":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):"pkey-row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedKeys",t[e.pkey],"selected_item1"),on:{click:function(t){return e.updateSelectedData(e.items[s])}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},i=[],a=n("a4bb"),c=n.n(a),r=(n("6762"),n("2fdb"),n("28a5"),n("072f")),l={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],mixins:[r["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},updateSelectedData:function(e){this.$emit("update-selected-data",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,n){var s={};for(var i in n)c()(e).includes(i)&&(s[i]=n[i]);return t.push(s),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var s=""+t[n];e[n].length<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},o=l,u=(n("bc12"),n("2877")),d=Object(u["a"])(o,s,i,!1,null,"1103ef03",null);t["default"]=d.exports},a346:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col"},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.reflector_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-sub-component-table",{attrs:{items:e.reflector_table,pkey:e.pkey,selectedKeys:e.selected_keys,headers:{quality_value:"QV",cost:"Cost"},name:"Quality",flow:"pkey-col",showHeaders:!0},on:{"update-selected-data":e.select_reflector}}),n("span",{staticClass:"mek-flex-col no-margin"},[n("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-component-stats",{attrs:{cols:3,rows:3}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Quality Value: "+e._s(e.selected_reflector.quality_value))]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),n("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Space: "+e._s(e.space_cost))]),n("div",{attrs:{slot:"col2-row3"},slot:"col2-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Cost: "+e._s(e.selected_reflector.cost))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Total Cost: "+e._s(e.cost))])]),n("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],a=n("f499"),c=n.n(a),r=n("072f"),l=n("8fcf"),o=n("f52e"),u=n("7b4b"),d=void 0,f=Array.apply({},Array(10));f=f.map(function(e,t){var n=t+1,s=n*n;return{quality_value:n,cost:s}});var m=function(e){if("undefined"===typeof e)return!1;var t=f.some(function(t){return t.quality_value==e.quality_value&&t.cost==e.cost});return t},p=function(e,t){return f.some(function(n){return void 0!==n[e]&&n[e]==t})},_=function(e,t){if(p(e,t)){var n=null;return f.some(function(s){if(s[e]==t)return n=s,!0},d),n}},h=n("97ea"),v={name:"mek_reflector",props:[],mixins:[r["a"],l["a"],o["a"],u["a"]],components:{"mek-space-efficiency":function(){return n.e("mek-space-efficiency").then(n.bind(null,"cd4a"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"192f"))},"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"c849"))},"mek-component-stats":function(){return n.e("mek-component-stats").then(n.bind(null,"d854"))},"mek-sub-component-table":h["default"]},data:function(){var e={pkey:"quality_value",uuid:null,component_name:null,component_category:"equipment",component_type:"reflector",original_component:null,component_changed:!0,selected_reflector:{quality_value:1,cost:1},efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.alerts=[],e},methods:{select_reflector:function(e){this.$set(this,"selected_reflector",JSON.parse(c()(e))),this.component_changed=!0},output_reflector_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="reflector",t.component_name=null===this.component_name?this.reflector_name:this.component_name,t.efficiencies=JSON.parse(c()(this.efficiencies)),t.selected_reflector=JSON.parse(c()(this.selected_reflector)),t.damage_capacity=JSON.parse(c()(this.damage_capacity)),t.cost=this.cost,t.weight=this.weight,this.$nextTick(function(){e.component_changed=!1}),this.original_component=c()(t),t},ingest_data:function(e){var t=this,n="Reflector is not valid, resetting.";this.universal_ingest_data(e,n),this.component_name==this.reflector_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_reflector_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$store.commit("saveComponent",null);break}},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0}},computed:{raw_space:function(){return this.selected_reflector.cost},weight:function(){return this.round(this.selected_reflector.cost/2,2)},damage_capacity:function(){return this.selected_reflector.quality_value},cost:function(){return this.selected_reflector.cost+this.efficiencies.space.cost},reflector_name:function(){return"QV-"+this.selected_reflector.quality_value+" Reflector"},reflector_table:function(){return f},selected_keys:function(){var e=_(this.pkey,1);void 0===this.selected_reflector&&this.select_reflector(e);var t=p(this.pkey,this.selected_reflector[this.pkey]),n=c()(this.selected_reflector);return t?(m(this.selected_reflector)||(this.addAlert("Mek_Reflector: "+n),this.addAlert("**** Invalid data. Reseting. ****"),this.publishAlerts(),this.select_reflector(_(this.selected_reflector[this.pkey]))),[this.selected_reflector[this.pkey]]):(this.addAlert("Mek_Reflector: "+n),this.addAlert("**** Invalid data. Reseting to default. ****"),this.publishAlerts(),this.select_reflector(e),[e[this.pkey]])}}},y=v,k=(n("3235"),n("2877")),w=Object(k["a"])(y,s,i,!1,null,"750c86b2",null);t["default"]=w.exports},bc12:function(e,t,n){"use strict";var s=n("3321"),i=n.n(s);i.a}}]);
//# sourceMappingURL=mek_reflector-main-legacy.e7e05f8c.js.map