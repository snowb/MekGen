(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9325c29c","chunk-cd006314"],{"28a5":function(e,t,s){"use strict";var n=s("aae3"),a=s("cb7c"),i=s("ebd6"),r=s("0390"),c=s("9def"),o=s("5f1b"),l=s("520a"),u=s("79e5"),d=Math.min,f=[].push,m="split",h="length",_="lastIndex",p=4294967295,y=!u(function(){RegExp(p,"y")});s("214f")("split",2,function(e,t,s,u){var v;return v="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[h]||2!="ab"[m](/(?:ab)*/)[h]||4!="."[m](/(.?)(.?)/)[h]||"."[m](/()()/)[h]>1||""[m](/.?/)[h]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return s.call(a,e,t);var i,r,c,o=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=void 0===t?p:t>>>0,y=new RegExp(e.source,u+"g");while(i=l.call(y,a)){if(r=y[_],r>d&&(o.push(a.slice(d,i.index)),i[h]>1&&i.index<a[h]&&f.apply(o,i.slice(1)),c=i[0][h],d=r,o[h]>=m))break;y[_]===i.index&&y[_]++}return d===a[h]?!c&&y.test("")||o.push(""):o.push(a.slice(d)),o[h]>m?o.slice(0,m):o}:"0"[m](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,n){var a=e(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,a,n):v.call(String(a),s,n)},function(e,t){var n=u(v,e,this,t,v!==s);if(n.done)return n.value;var l=a(e),f=String(this),m=i(l,RegExp),h=l.unicode,_=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(y?"y":"g"),b=new m(y?l:"^(?:"+l.source+")",_),w=void 0===t?p:t>>>0;if(0===w)return[];if(0===f.length)return null===o(b,f)?[f]:[];var x=0,g=0,k=[];while(g<f.length){b.lastIndex=y?g:0;var C,A=o(b,y?f:f.slice(g));if(null===A||(C=d(c(b.lastIndex+(y?0:g)),f.length))===x)g=r(f,g,h);else{if(k.push(f.slice(x,g)),k.length===w)return k;for(var I=1;I<=A.length-1;I++)if(k.push(A[I]),k.length===w)return k;g=x=C}}return k.push(f.slice(x)),k}]})},5176:function(e,t,s){e.exports=s("51b6")},"51b6":function(e,t,s){s("a3c3"),e.exports=s("584a").Object.assign},"6c16":function(e,t,s){"use strict";var n=s("d9d1"),a=s.n(n);a.a},9306:function(e,t,s){"use strict";var n=s("c3a1"),a=s("9aa9"),i=s("355d"),r=s("241e"),c=s("335c"),o=Object.assign;e.exports=!o||s("294c")(function(){var e={},t={},s=Symbol(),n="abcdefghijklmnopqrst";return e[s]=7,n.split("").forEach(function(e){t[e]=e}),7!=o({},e)[s]||Object.keys(o({},t)).join("")!=n})?function(e,t){var s=r(e),o=arguments.length,l=1,u=a.f,d=i.f;while(o>l){var f,m=c(arguments[l++]),h=u?n(m).concat(u(m)):n(m),_=h.length,p=0;while(_>p)d.call(m,f=h[p++])&&(s[f]=m[f])}return s}:o},"97ea":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1"},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,n){return s("div",{key:n+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,n){return s("td",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,a){return s("div",{key:"item-"+a+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[a],a))+"\n                        ")])}),0)})],2)]):"col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(n)}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,n){return s("th",{key:n+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),s("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,n){return s("td",{key:"item-"+n+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][n])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,n){return s("tr",{key:n+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",n,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(n),e.showDropdown=!1}}},e._l(e.headers,function(n,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[a],a))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,n){return s("td",{key:n+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[n])+"\n                    ")])}),0)],2):e._e()])])])},a=[],i=s("a4bb"),r=s.n(i),c=(s("6762"),s("2fdb"),s("28a5"),s("072f")),o={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[c["a"]],components:{},data:function(){var e={showDropdown:!1};return e},methods:{updateSelectedIndices:function(e){this.$emit("update-selected-indices",e)},formatOutput:function(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;var s=this.format[t].split(",").map(function(e){return e.toLowerCase()}),n=e;if(s.includes("percent")&&(n=100*e+"%"),s.includes("multiplier")&&(n="x"+n),s.includes("wide-angle"))switch(e){case 0:n="Ø";break;case 1:n="Hex";break;default:n=e+"°"}return s.includes("nullzero")&&0===e&&(n="Ø"),n}},computed:{itemDisplayedKeys:function(){var e=this.headers;return this.items.reduce(function(t,s){var n={};for(var a in s)r()(e).includes(a)&&(n[a]=s[a]);return t.push(n),t},[])},largestKeyValues:function(){return this.itemDisplayedKeys.reduce(function(e,t){for(var s in t){"undefined"===typeof e[s]&&(e[s]="");var n=""+t[s];e[s].length<=n.length&&(e[s]="xx"+n+"xx")}return e},{})},hiddenDropDown:function(){return this.showDropdown?"visibility:hidden;":""}}},l=o,u=(s("6c16"),s("2877")),d=Object(u["a"])(l,n,a,!1,null,"3a1dbf41",null);t["default"]=d.exports},a3c3:function(e,t,s){var n=s("63b6");n(n.S+n.F,"Object",{assign:s("9306")})},d09c:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.filteredAmmoArray,headers:{type:"Type",cost:"Cost",effect:"Effect"},showHeaders:!0,format:{cost:"multiplier"},name:"Ammo Table",flow:"col",selectedIndices:e.selected_ammo_index_array},on:{"update-selected-indices":e.select_ammo}})},a=[],i=(s("6762"),s("5176")),r=s.n(i),c=(s("cadf"),s("551c"),s("f751"),s("097d"),s("072f")),o=s("8fcf"),l=[{type:"Paintball",cost:.5,effect:"Practice Rounds"},{type:"Foam",cost:.5,effect:"Firefighting"},{type:"High-Ex",cost:1,effect:"Standard"},{type:"Tracer",cost:3,effect:"+1 to WA"},{type:"Kinetic",cost:3,effect:"More Knockback"},{type:"Tangler",cost:3,effect:"Grappling Attack"},{type:"Armor Piercing",cost:4,effect:"1/2 SP vs Armor"},{type:"Disruptor",cost:4,effect:"1/2 SP vs Energy"},{type:"Incendiary",cost:4,effect:"Flamethrower"},{type:"Shock (only)",cost:4,effect:"Stun Effect",shock_exclusive:!0},{type:"Shock (add)",cost:6,effect:"Stun & Damage",shock_exclusive:!0},{type:"Scattershot",cost:5,effect:"Shotgun Effect"},{type:"Blast I",cost:6,effect:"1-Hex Radius",blast_exclusive:!0},{type:"Blast II",cost:8,effect:"2-Hex Radius",blast_exclusive:!0},{type:"Blast III",cost:10,effect:"3-Hex Radius",blast_exclusive:!0},{type:"Blast IV",cost:12,effect:"4-Hex Radius",blast_exclusive:!0},{type:"Blast V",cost:14,effect:"5-Hex Radius",blast_exclusive:!0},{type:"Nuclear",cost:1e3,effect:"Atomic Ammo"}],u=l.filter(function(e){return"undefined"!==typeof e.shock_exclusive}),d=l.filter(function(e){return"undefined"!==typeof e.blast_exclusive}),f=function(e){if("undefined"===typeof e)return!1;var t=l.some(function(t){return t.type==e.type&&t.cost==e.cost});return t},m=s("97ea"),h={name:"mek_magazine_ammo_list",props:["ammoArray","hasBlast"],mixins:[c["a"],o["a"]],components:{"mek-sub-component-table":m["default"]},data:function(){var e={selected_ammo_array:[]};return e},methods:{select_ammo:function(e){var t=this.filteredAmmoArray[e].type,s=this.is_exclusive_feature("shock_exclusive",t),n=this.is_exclusive_feature("blast_exclusive",t),a=r()({},this.filteredAmmoArray[e]),i=this.selected_ammo_array.filter(function(e){return e.type.toLowerCase()!=t.toLowerCase()}),c=this.selected_ammo_array.some(function(e){return e.type.toLowerCase()==t.toLowerCase()},this);s&&(i=i.filter(function(e){return!e.shock_exclusive})),n&&(i=i.filter(function(e){return!e.blast_exclusive})),c||i.push(a),this.$set(this,"selected_ammo_array",i),0==i.length&&this.$set(this,"selected_ammo_array",[]),this.$emit("update-ammo",this.selected_ammo_array)},find_feature_index:function(e){var t;return l.some(function(s,n){return s.type.toLowerCase()==e.toLowerCase()&&(t=n,!0)}),t},is_exclusive_feature:function(e,t){return this[e].some(function(e){return e.type.toLowerCase()==t.toLowerCase()})}},computed:{selected_ammo_index_array:function(){var e=[];if(this.ammoArray,0==this.ammoArray.length){var t=this.find_feature_index("High-Ex");return this.selected_ammo_array=[this.filteredAmmoArray[t]],[t]}if(1==this.ammoArray.length)return this.selected_ammo_array=[this.filteredAmmoArray[this.find_feature_index(this.ammoArray[0].type)]],[this.find_feature_index(this.ammoArray[0].type)];var s=!1,n=!1,a=this,i=[],r=null;return this.selected_ammo_array=this.ammoArray.reduceRight(function(e,t,c){var o=a.is_exclusive_feature("shock_exclusive",t.type),l=a.is_exclusive_feature("blast_exclusive",t.type);return o&&!s&&(e.push(t),s=!0,i.push(t.type.toLowerCase())),l&&!n&&(e.push(t),n=!0,i.push(t.type.toLowerCase())),i.includes(t.type.toLowerCase())||(e.push(t),i.push(t.type.toLowerCase())),r=f(t)||null!==r?r:c,e},[]),r?(this.select_ammo(r),r):(e=this.selected_ammo_array.reduce(function(e,t){return e.push(a.find_feature_index(t.type)),e},[]),this.ammoArray.length!=this.selected_ammo_array.length&&this.$emit("update-ammo",this.selected_ammo_array),e)},filteredAmmoArray:function(){return this.hasBlast?l:l.filter(function(e){return"nuclear"!=e.type.toLowerCase()})},shock_exclusive:function(){return u},blast_exclusive:function(){return d}}},_=h,p=s("2877"),y=Object(p["a"])(_,n,a,!1,null,"063ecd1b",null);t["default"]=y.exports},d9d1:function(e,t,s){}}]);
//# sourceMappingURL=chunk-9325c29c-legacy.5569fe48.js.map