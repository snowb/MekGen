(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68de0424","chunk-3671740f"],{"28a5":function(e,t,s){"use strict";var a=s("aae3"),i=s("cb7c"),r=s("ebd6"),n=s("0390"),l=s("9def"),c=s("5f1b"),o=s("520a"),u=s("79e5"),d=Math.min,f=[].push,m="split",h="length",_="lastIndex",p=4294967295,y=!u(function(){RegExp(p,"y")});s("214f")("split",2,function(e,t,s,u){var v;return v="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[h]||2!="ab"[m](/(?:ab)*/)[h]||4!="."[m](/(.?)(.?)/)[h]||"."[m](/()()/)[h]>1||""[m](/.?/)[h]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!a(e))return s.call(i,e,t);var r,n,l,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=void 0===t?p:t>>>0,y=new RegExp(e.source,u+"g");while(r=o.call(y,i)){if(n=y[_],n>d&&(c.push(i.slice(d,r.index)),r[h]>1&&r.index<i[h]&&f.apply(c,r.slice(1)),l=r[0][h],d=n,c[h]>=m))break;y[_]===r.index&&y[_]++}return d===i[h]?!l&&y.test("")||c.push(""):c.push(i.slice(d)),c[h]>m?c.slice(0,m):c}:"0"[m](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,a){var i=e(this),r=void 0==s?void 0:s[t];return void 0!==r?r.call(s,i,a):v.call(String(i),s,a)},function(e,t){var a=u(v,e,this,t,v!==s);if(a.done)return a.value;var o=i(e),f=String(this),m=r(o,RegExp),h=o.unicode,_=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(y?"y":"g"),x=new m(y?o:"^(?:"+o.source+")",_),b=void 0===t?p:t>>>0;if(0===b)return[];if(0===f.length)return null===c(x,f)?[f]:[];var w=0,g=0,k=[];while(g<f.length){x.lastIndex=y?g:0;var C,A=c(x,y?f:f.slice(g));if(null===A||(C=d(l(x.lastIndex+(y?0:g)),f.length))===w)g=n(f,g,h);else{if(k.push(f.slice(w,g)),k.length===b)return k;for(var I=1;I<=A.length-1;I++)if(k.push(A[I]),k.length===b)return k;g=w=C}}return k.push(f.slice(w)),k}]})},"6c16":function(e,t,s){"use strict";var a=s("d9d1"),i=s.n(a);i.a},"97ea":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1"},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.name))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.name))]),"row"==e.flow?s("table",{staticStyle:{margin:"auto"}},[s("tr",[e.showHeaders?s("td",{staticClass:"head_column1 pad"},e._l(e.headers,function(t,a){return s("div",{key:a+"-header-"+e.name},[e._v("\n                            "+e._s(t)+"\n                        ")])}),0):e._e(),s("td",[e._v(" ")]),e._l(e.itemDisplayedKeys,function(t,a){return s("td",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,i){return s("div",{key:"item-"+i+"-element-"+e.name},[e._v("\n                            "+e._s(e.formatOutput(t[i],i))+"\n                        ")])}),0)})],2)]):"col"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return s("th",{key:a+"-header-"+e.name,staticClass:"pad"},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),e._l(e.itemDisplayedKeys,function(t,a){return s("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){return e.updateSelectedIndices(a)}}},e._l(e.headers,function(a,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e(),"dropdown"==e.flow?s("table",{staticStyle:{margin:"auto"}},[e.showHeaders?s("tr",{staticClass:"head_row"},e._l(e.headers,function(t,a){return s("th",{key:a+"-header-"+e.name},[e._v("\n                        "+e._s(t)+"\n                    ")])}),0):e._e(),s("tr",[s("td",{staticStyle:{"line-height":"4px"},attrs:{colspan:e.headers.length}},[e._v(" ")])]),s("tr",{staticClass:"pad selected_item1",style:e.hiddenDropDown,on:{click:function(t){e.showDropdown=!0}}},e._l(e.headers,function(t,a){return s("td",{key:"item-"+a+"-element-"+e.name},[e._v("\n                        "+e._s(e.itemDisplayedKeys[e.selectedIndices[0]][a])+"\n                    ")])}),0),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)]):e._e(),"dropdown"==e.flow&&e.showDropdown?s("table",{staticClass:"dropdown-table"},[e._l(e.itemDisplayedKeys,function(t,a){return s("tr",{key:a+"-item-"+e.name,staticClass:"clickable1 pad",class:e.selectedItemMultiple("selectedIndices",a,"selected_item1"),on:{click:function(t){e.updateSelectedIndices(a),e.showDropdown=!1}}},e._l(e.headers,function(a,i){return s("td",{key:"item-"+i+"-element-"+e.name},[e._v("\n                        "+e._s(e.formatOutput(t[i],i))+"\n                    ")])}),0)}),s("tr",{staticClass:"invisible_pad_row"},e._l(e.headers,function(t,a){return s("td",{key:a+"-pad-"+e.name},[e._v("\n                        "+e._s(e.largestKeyValues[a])+"\n                    ")])}),0)],2):e._e()])])])},i=[],r=(s("ac6a"),s("28a5"),s("072f")),n={name:"mek_sub_component_table",props:["name","items","headers","flow","selectedIndices","showHeaders","format"],mixins:[r["a"]],components:{},data:()=>{let e={showDropdown:!1};return e},methods:{updateSelectedIndices(e){this.$emit("update-selected-indices",e)},formatOutput(e,t){if(e===1/0)return"∞";if("undefined"===typeof this.format||"undefined"===typeof this.format[t])return e;let s=this.format[t].split(",").map(e=>e.toLowerCase()),a=e;if(s.includes("percent")&&(a=100*e+"%"),s.includes("multiplier")&&(a="x"+a),s.includes("wide-angle"))switch(e){case 0:a="Ø";break;case 1:a="Hex";break;default:a=e+"°"}return s.includes("nullzero")&&0===e&&(a="Ø"),a}},computed:{itemDisplayedKeys(){let e=this.headers;return this.items.reduce((t,s)=>{let a={};for(let i in s)Object.keys(e).includes(i)&&(a[i]=s[i]);return t.push(a),t},[])},largestKeyValues(){return this.itemDisplayedKeys.reduce((e,t)=>{for(let s in t){"undefined"===typeof e[s]&&(e[s]="");let a=""+t[s];e[s].length<=a.length&&(e[s]="xx"+a+"xx")}return e},{})},hiddenDropDown(){return this.showDropdown?"visibility:hidden;":""}}},l=n,c=(s("6c16"),s("2877")),o=Object(c["a"])(l,a,i,!1,null,"3a1dbf41",null);t["default"]=o.exports},aae3:function(e,t,s){var a=s("d3f4"),i=s("2d95"),r=s("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==i(e))}},d09c:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.filteredAmmoArray,headers:{type:"Type",cost:"Cost",effect:"Effect"},showHeaders:!0,format:{cost:"multiplier"},name:"Ammo Table",flow:"col",selectedIndices:e.selected_ammo_index_array},on:{"update-selected-indices":e.select_ammo}})},i=[],r=s("072f"),n=s("8fcf");let l=[{type:"Paintball",cost:.5,effect:"Practice Rounds"},{type:"Foam",cost:.5,effect:"Firefighting"},{type:"High-Ex",cost:1,effect:"Standard"},{type:"Tracer",cost:3,effect:"+1 to WA"},{type:"Kinetic",cost:3,effect:"More Knockback"},{type:"Tangler",cost:3,effect:"Grappling Attack"},{type:"Armor Piercing",cost:4,effect:"1/2 SP vs Armor"},{type:"Disruptor",cost:4,effect:"1/2 SP vs Energy"},{type:"Incendiary",cost:4,effect:"Flamethrower"},{type:"Shock (only)",cost:4,effect:"Stun Effect",shock_exclusive:!0},{type:"Shock (add)",cost:6,effect:"Stun & Damage",shock_exclusive:!0},{type:"Scattershot",cost:5,effect:"Shotgun Effect"},{type:"Blast I",cost:6,effect:"1-Hex Radius",blast_exclusive:!0},{type:"Blast II",cost:8,effect:"2-Hex Radius",blast_exclusive:!0},{type:"Blast III",cost:10,effect:"3-Hex Radius",blast_exclusive:!0},{type:"Blast IV",cost:12,effect:"4-Hex Radius",blast_exclusive:!0},{type:"Blast V",cost:14,effect:"5-Hex Radius",blast_exclusive:!0},{type:"Nuclear",cost:1e3,effect:"Atomic Ammo"}],c=l.filter(e=>{return"undefined"!==typeof e.shock_exclusive}),o=l.filter(e=>{return"undefined"!==typeof e.blast_exclusive}),u=e=>{if("undefined"===typeof e)return!1;let t=l.some(t=>{return t.type==e.type&&t.cost==e.cost});return t};var d=s("97ea"),f={name:"mek_magazine_ammo_list",props:["ammoArray","hasBlast"],mixins:[r["a"],n["a"]],components:{"mek-sub-component-table":d["default"]},data:function(){let e={selected_ammo_array:[]};return e},methods:{select_ammo:function(e){let t=this.filteredAmmoArray[e].type,s=this.is_exclusive_feature("shock_exclusive",t),a=this.is_exclusive_feature("blast_exclusive",t),i=Object.assign({},this.filteredAmmoArray[e]),r=this.selected_ammo_array.filter(e=>{return e.type.toLowerCase()!=t.toLowerCase()}),n=this.selected_ammo_array.some(e=>{return e.type.toLowerCase()==t.toLowerCase()},this);s&&(r=r.filter(e=>{return!e.shock_exclusive})),a&&(r=r.filter(e=>{return!e.blast_exclusive})),n||r.push(i),this.$set(this,"selected_ammo_array",r),0==r.length&&this.$set(this,"selected_ammo_array",[]),this.$emit("update-ammo",this.selected_ammo_array)},find_feature_index:function(e){let t;return l.some(function(s,a){return s.type.toLowerCase()==e.toLowerCase()&&(t=a,!0)}),t},is_exclusive_feature:function(e,t){return this[e].some(function(e){return e.type.toLowerCase()==t.toLowerCase()})}},computed:{selected_ammo_index_array:function(){let e=[];if(this.ammoArray,0==this.ammoArray.length){let e=this.find_feature_index("High-Ex");return this.selected_ammo_array=[this.filteredAmmoArray[e]],[e]}if(1==this.ammoArray.length)return this.selected_ammo_array=[this.filteredAmmoArray[this.find_feature_index(this.ammoArray[0].type)]],[this.find_feature_index(this.ammoArray[0].type)];let t=!1,s=!1,a=this,i=[],r=null;return this.selected_ammo_array=this.ammoArray.reduceRight(function(e,n,l){let c=a.is_exclusive_feature("shock_exclusive",n.type),o=a.is_exclusive_feature("blast_exclusive",n.type);return c&&!t&&(e.push(n),t=!0,i.push(n.type.toLowerCase())),o&&!s&&(e.push(n),s=!0,i.push(n.type.toLowerCase())),i.includes(n.type.toLowerCase())||(e.push(n),i.push(n.type.toLowerCase())),r=u(n)||null!==r?r:l,e},[]),r?(this.select_ammo(r),r):(e=this.selected_ammo_array.reduce(function(e,t){return e.push(a.find_feature_index(t.type)),e},[]),this.ammoArray.length!=this.selected_ammo_array.length&&this.$emit("update-ammo",this.selected_ammo_array),e)},filteredAmmoArray(){return this.hasBlast?l:l.filter(e=>{return"nuclear"!=e.type.toLowerCase()})},shock_exclusive(){return c},blast_exclusive(){return o}}},m=f,h=s("2877"),_=Object(h["a"])(m,a,i,!1,null,"063ecd1b",null);t["default"]=_.exports},d9d1:function(e,t,s){},ebd6:function(e,t,s){var a=s("cb7c"),i=s("d8e8"),r=s("2b4c")("species");e.exports=function(e,t){var s,n=a(e).constructor;return void 0===n||void 0==(s=a(n)[r])?t:i(s)}}}]);
//# sourceMappingURL=chunk-68de0424.fda265e7.js.map