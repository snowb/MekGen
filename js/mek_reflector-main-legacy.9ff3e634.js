(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector-main","chunk-cd006314"],{"28a5":function(e,t,n){"use strict";var s=n("aae3"),i=n("cb7c"),c=n("ebd6"),a=n("0390"),o=n("9def"),r=n("5f1b"),l=n("520a"),u=n("79e5"),d=Math.min,f=[].push,m="split",p="length",_="lastIndex",h=4294967295,v=!u(function(){RegExp(h,"y")});n("214f")("split",2,function(e,t,n,u){var w;return w="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!s(e))return n.call(i,e,t);var c,a,o,r=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=void 0===t?h:t>>>0,v=new RegExp(e.source,u+"g");while(c=l.call(v,i)){if(a=v[_],a>d&&(r.push(i.slice(d,c.index)),c[p]>1&&c.index<i[p]&&f.apply(r,c.slice(1)),o=c[0][p],d=a,r[p]>=m))break;v[_]===c.index&&v[_]++}return d===i[p]?!o&&v.test("")||r.push(""):r.push(i.slice(d)),r[p]>m?r.slice(0,m):r}:"0"[m](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,s){var i=e(this),c=void 0==n?void 0:n[t];return void 0!==c?c.call(n,i,s):w.call(String(i),n,s)},function(e,t){var s=u(w,e,this,t,w!==n);if(s.done)return s.value;var l=i(e),f=String(this),m=c(l,RegExp),p=l.unicode,_=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"y":"g"),y=new m(v?l:"^(?:"+l.source+")",_),g=void 0===t?h:t>>>0;if(0===g)return[];if(0===f.length)return null===r(y,f)?[f]:[];var b=0,k=0,C=[];while(k<f.length){y.lastIndex=v?k:0;var x,S=r(y,v?f:f.slice(k));if(null===S||(x=d(o(y.lastIndex+(v?0:k)),f.length))===b)k=a(f,k,p);else{if(C.push(f.slice(b,k)),C.length===g)return C;for(var I=1;I<=S.length-1;I++)if(C.push(S[I]),C.length===g)return C;k=b=x}}return C.push(f.slice(b)),C}]})},"6c16":function(e,t,n){"use strict";var s=n("d9d1"),i=n.n(s);i.a},"97ea":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[n("div",{staticClass:"metallic_background_small1"},[n("div",{staticClass:"subsection_container1"},[n("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),n("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?n("table",{staticStyle:{margin:"auto"}},[n("tr",[e.showHeaders?n("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,s){return n("div",{key:s+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),n("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,s){return n("td",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):"col"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(s)}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?n("table",{staticStyle:{margin:"auto"}},[e.showHeaders?n("tr",{staticClass:"head_row"},e._l(e.headers,function(t,s){return n("th",{key:s+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),n("tr",[n("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),n("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,s){return n("td",{key:"item-"+s+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][s])+"\n                    ")])}),0),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?n("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,s){return n("tr",{key:s+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",s,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(s),e.showDropdown=!1}}},e._l(e.headers,function(s,i){return n("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),n("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,s){return n("td",{key:s+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[s])+"\n                    ")])}),0)],2):e._e()])])])},i=[],c=n("a4bb"),a=n.n(c),o=(n("6762"),n("2fdb"),n("28a5"),n("072f")),r={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[o["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var n=this.format[t].split(",").map(function(e){return e.toLowerCase()}),s=e;if(n.includes("percent")&&(s=100*e+"%"),n.includes("multiplier")&&(s="x"+s),n.includes("wide-angle"))switch(e){case 0:s="Ø";break;case 1:s="Hex";break;default:s=e+"°"}return n.includes("nullzero")&&0===e&&(s="Ø"),s}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,n){var s={};for(var i in n)a()(e).includes(i)&&(s[i]=n[i]);return t.push(s),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var n in t){"undefined"===typeof e[n]&&(e[n]="");var s=""+t[n];e[n].length<=s.length&&(e[n]="xx"+s+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},l=r,u=(n("6c16"),n("2877")),d=Object(u["a"])(l,s,i,!1,null,"3a1dbf41",null);t["default"]=d.exports},a346:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col"},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.reflector_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-sub-component-table",{attrs:{items:e.reflector_table,headers:{quality_value:"QV",cost:"Cost"},name:"Quality",flow:"col",showHeaders:!0,selectedIndices:e.reflector_index},on:{"update-selected-indices":e.select_reflector}}),n("span",{staticClass:"mek-flex-col no-margin"},[n("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-component-stats",{attrs:{cols:3,rows:3}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Quality Value: "+e._s(e.selected_reflector.quality_value))]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),n("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Space: "+e._s(e.space_cost))]),n("div",{attrs:{slot:"col2-row3"},slot:"col2-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Cost: "+e._s(e.selected_reflector.cost))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Total Cost: "+e._s(e.cost))])]),n("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],c=n("f499"),a=n.n(c),o=(n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d"),n("072f")),r=n("8fcf"),l=n("97ea"),u={name:"mek_reflector",props:[],mixins:[o["a"],r["a"]],components:{"mek-space-efficiency":function(){return n.e("mek-space-efficiency").then(n.bind(null,"cd4a"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"192f"))},"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"c849"))},"mek-component-stats":function(){return n.e("mek-component-stats").then(n.bind(null,"d854"))},"mek-sub-component-table":l["default"]},data:function(){var e={};return e.reflector_table=Array.apply({},Array(10)),e.reflector_table.forEach(function(t,n){var s=n+1,i=s*s;e.reflector_table[n]={quality_value:s,cost:i}},this),e.uuid=null,e.component_name=null,e.component_category="equipment",e.component_type="reflector",e.original_component=null,e.component_changed=!0,e.selected_reflector={quality_value:1,cost:1},e.efficiencies={},e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e},methods:{select_reflector:function(e){this.$set(this,"selected_reflector",this.reflector_table[e]),this.component_changed=!0},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},output_reflector_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="reflector",t.component_name=null===this.component_name?this.reflector_name:this.component_name,t.efficiencies=JSON.parse(a()(this.efficiencies)),t.selected_reflector=JSON.parse(a()(this.selected_reflector)),t.cost=this.cost,t.weight=this.weight,this.$nextTick(function(){e.component_changed=!1}),this.original_component=a()(t),t},ingest_data:function(e){var t=this,n="Reflector is not valid, resetting.";this.universal_ingest_data(e,n),this.component_name==this.reflector_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_reflector_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$store.commit("saveComponent",null);break}},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0}},computed:{reflector_index:function(){var e=this,t=0;this.reflector_table.some(function(n,s){if(e.selected_reflector.quality_value==n.quality_value)return t=s,!0});var n=!1;switch(!0){case this.selected_reflector.quality_value!=this.reflector_table[t].quality_value:case this.selected_reflector.cost!=this.reflector_table[t].cost:n=!0}return n&&this.select_reflector(t),[t]},newComponent:function(){var e=JSON.parse(a()(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)},raw_space:function(){return this.reflector_table[this.reflector_index].cost},weight:function(){return this.round(this.reflector_table[this.reflector_index].cost/2,2)},space_cost:function(){return this.selected_reflector.cost-this.efficiencies.space.modifier},cost:function(){return this.selected_reflector.cost+this.efficiencies.space.cost},reflector_name:function(){return"QV-"+this.selected_reflector.quality_value+" Reflector"}}},d=u,f=(n("aa97"),n("2877")),m=Object(f["a"])(d,s,i,!1,null,"ad1ff006",null);t["default"]=m.exports},aa97:function(e,t,n){"use strict";var s=n("df0f"),i=n.n(s);i.a},d9d1:function(e,t,n){},df0f:function(e,t,n){}}]);
//# sourceMappingURL=mek_reflector-main-legacy.9ff3e634.js.map