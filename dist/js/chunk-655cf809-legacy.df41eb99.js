(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-655cf809","chunk-cd006314"],{"14f3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mek-sub-component-table",{attrs:{items:t.attack_factor_table,headers:{attack_factor:"AF",cost:"Cost"},name:"Attack Factor",flow:"row",showHeaders:!0,format:{cost:"multiplier",attack_factor:"nullzero"},selectedIndices:t.attack_factor_index},on:{"update-selected-indices":t.select_attack_factor}})},s=[],i=a("072f"),c=a("8fcf"),r=a("97ea"),l={name:"mek_emw_attack_factor",props:["attackFactor"],mixins:[i["a"],c["a"]],components:{"mek-sub-component-table":r["default"]},data:function(){var t={attack_factor_table:[{attack_factor:0,cost:1},{attack_factor:1,cost:1.5},{attack_factor:2,cost:2},{attack_factor:3,cost:2.5},{attack_factor:4,cost:3},{attack_factor:5,cost:3.5}]};return t},methods:{select_attack_factor:function(t){this.$emit("update-attack-factor",this.attack_factor_table[t])}},computed:{attack_factor_index:function(){var t=0;return this.attackFactor,this.attack_factor_table.some(function(e,a){return e.attack_factor==this.attackFactor.attack_factor&&(t=a,!0)},this),this.attack_factor_table[t].cost!==this.attackFactor.cost&&this.select_attack_factor(t),[t]}}},o=l,d=a("2877"),u=Object(d["a"])(o,n,s,!1,null,"5e856896",null);e["default"]=u.exports},"28a5":function(t,e,a){"use strict";var n=a("aae3"),s=a("cb7c"),i=a("ebd6"),c=a("0390"),r=a("9def"),l=a("5f1b"),o=a("520a"),d=a("79e5"),u=Math.min,f=[].push,_="split",h="length",m="lastIndex",p=4294967295,k=!d(function(){RegExp(p,"y")});a("214f")("split",2,function(t,e,a,d){var v;return v="c"=="abbc"[_](/(b)*/)[1]||4!="test"[_](/(?:)/,-1)[h]||2!="ab"[_](/(?:ab)*/)[h]||4!="."[_](/(.?)(.?)/)[h]||"."[_](/()()/)[h]>1||""[_](/.?/)[h]?function(t,e){var s=String(this);if(void 0===t&&0===e)return[];if(!n(t))return a.call(s,t,e);var i,c,r,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,_=void 0===e?p:e>>>0,k=new RegExp(t.source,d+"g");while(i=o.call(k,s)){if(c=k[m],c>u&&(l.push(s.slice(u,i.index)),i[h]>1&&i.index<s[h]&&f.apply(l,i.slice(1)),r=i[0][h],u=c,l[h]>=_))break;k[m]===i.index&&k[m]++}return u===s[h]?!r&&k.test("")||l.push(""):l.push(s.slice(u)),l[h]>_?l.slice(0,_):l}:"0"[_](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,n){var s=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,s,n):v.call(String(s),a,n)},function(t,e){var n=d(v,t,this,e,v!==a);if(n.done)return n.value;var o=s(t),f=String(this),_=i(o,RegExp),h=o.unicode,m=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(k?"y":"g"),b=new _(k?o:"^(?:"+o.source+")",m),w=void 0===e?p:e>>>0;if(0===w)return[];if(0===f.length)return null===l(b,f)?[f]:[];var y=0,g=0,x=[];while(g<f.length){b.lastIndex=k?g:0;var C,I=l(b,k?f:f.slice(g));if(null===I||(C=u(r(b.lastIndex+(k?0:g)),f.length))===y)g=c(f,g,h);else{if(x.push(f.slice(y,g)),x.length===w)return x;for(var D=1;D<=I.length-1;D++)if(x.push(I[D]),x.length===w)return x;g=y=C}}return x.push(f.slice(y)),x}]})},"6c16":function(t,e,a){"use strict";var n=a("d9d1"),s=a.n(n);s.a},"97ea":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[a("div",{staticClass:"metallic_background_small1"},[a("div",{staticClass:"subsection_container1"},[a("div",{staticClass:"subsection_header_small1"},[t._v(t._s(t.name))]),a("div",{staticClass:"subsection_hidden_header"},[t._v(t._s(t.name))]),"row"==t.flow?a("table",{staticStyle:{margin:"auto"}},[a("tr",[t.showHeaders?a("td",{staticClass:"head_column1 pad"},t._l(t.headers,function(e,n){return a("div",{key:n+"-header-"+t.name},[t._v("\n                            "+t._s(e)+"\n                        ")])}),0):t._e(),a("td",[t._v(" ")]),t._l(t.itemDisplayedKeys,function(e,n){return a("td",{key:n+"-item-"+t.name,staticClass:"clickable1 pad",class:t.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(e){return t.updateSelectedIndices(n)}}},t._l(t.headers,function(n,s){return a("div",{key:"item-"+s+"-element-"+t.name},[t._v("\n                            "+t._s(t.formatOutput(e[s],s))+"\n                        ")])}),0)})],2)]):"col"==t.flow?a("table",{staticStyle:{margin:"auto"}},[t.showHeaders?a("tr",{staticClass:"head_row"},t._l(t.headers,function(e,n){return a("th",{key:n+"-header-"+t.name,staticClass:"pad"},[t._v("\n                        "+t._s(e)+"\n                    ")])}),0):t._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:t.headers.length}},[t._v(" ")])]),t._l(t.itemDisplayedKeys,function(e,n){return a("tr",{key:n+"-item-"+t.name,staticClass:"clickable1 pad",class:t.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(e){return t.updateSelectedIndices(n)}}},t._l(t.headers,function(n,s){return a("td",{key:"item-"+s+"-element-"+t.name},[t._v("\n                        "+t._s(t.formatOutput(e[s],s))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},t._l(t.headers,function(e,n){return a("td",{key:n+"-pad-"+t.name},[t._v("\n                        "+t._s(t.largestKeyValues[n])+"\n                    ")])}),0)],2):t._e(),"dropdown"==t.flow?a("table",{staticStyle:{margin:"auto"}},[t.showHeaders?a("tr",{staticClass:"head_row"},t._l(t.headers,function(e,n){return a("th",{key:n+"-header-"+t.name},[t._v("\n                        "+t._s(e)+"\n                    ")])}),0):t._e(),a("tr",[a("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:t.headers.length}},[t._v(" ")])]),a("tr",{staticClass:"pad selected_item1",style:t.hiddenDropDown,on:{click:function(e){t.showDropdown=!0}}},t._l(t.headers,function(e,n){return a("td",{key:"item-"+n+"-element-"+t.name},[t._v("\n                        "+t._s(t.itemDisplayedKeys[t.selectedIndices[0]][n])+"\n                    ")])}),0),a("tr",{staticClass:"invisible_pad_row"},t._l(t.headers,function(e,n){return a("td",{key:n+"-pad-"+t.name},[t._v("\n                        "+t._s(t.largestKeyValues[n])+"\n                    ")])}),0)]):t._e(),"dropdown"==t.flow&&t.showDropdown?a("table",{staticClass:"dropdown-table"},[t._l(t.itemDisplayedKeys,function(e,n){return a("tr",{key:n+"-item-"+t.name,staticClass:"clickable1 pad",class:t.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(e){t.updateSelectedIndices(n),t.showDropdown=!1}}},t._l(t.headers,function(n,s){return a("td",{key:"item-"+s+"-element-"+t.name},[t._v("\n                        "+t._s(t.formatOutput(e[s],s))+"\n                    ")])}),0)}),a("tr",{staticClass:"invisible_pad_row"},t._l(t.headers,function(e,n){return a("td",{key:n+"-pad-"+t.name},[t._v("\n                        "+t._s(t.largestKeyValues[n])+"\n                    ")])}),0)],2):t._e()])])])},s=[],i=a("a4bb"),c=a.n(i),r=(a("6762"),a("2fdb"),a("28a5"),a("072f")),l={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[r["a"]],components:{},data:function(){var t={showDropdown:!1};return t},methods:{updateSelectedIndices:function(t){this.$emit("update-selected-indices",t)},formatOutput:function(t,e){if(t===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[e])return t;var a=this.format[e].split(",").map(function(t){return t.toLowerCase()}),n=t;if(a.includes("percent")&&(n=100*t+"%"),a.includes("multiplier")&&(n="x"+n),a.includes("wide-angle"))switch(t){case 0:n="Ø";break;case 1:n="Hex";break;default:n=t+"°"}return a.includes("nullzero")&&0===t&&(n="Ø"),n}},computed:{itemDisplayedKeys:function(){var t=this.headers;return this.items.reduce(function(e,a){var n={};for(var s in a)c()(t).includes(s)&&(n[s]=a[s]);return e.push(n),e},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(t,e){for(var a in e){"undefined"===typeof t[a]&&(t[a]="");var n=""+e[a];t[a].length<=n.length&&(t[a]="xx"+n+"xx")}return t},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},o=l,d=(a("6c16"),a("2877")),u=Object(d["a"])(o,n,s,!1,null,"3a1dbf41",null);e["default"]=u.exports},d9d1:function(t,e,a){}}]);
//# sourceMappingURL=chunk-655cf809-legacy.df41eb99.js.map