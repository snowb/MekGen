(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_magazine-main"],{"02f4":function(t,e,n){var s=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var o,a,r=String(i(e)),c=s(n),u=r.length;return c<0||c>=u?t?"":void 0:(o=r.charCodeAt(c),o<55296||o>56319||c+1===u||(a=r.charCodeAt(c+1))<56320||a>57343?t?r.charAt(c):o:t?r.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var s=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?s(t,e).length:1)}},"072f":function(t,e,n){"use strict";e["a"]={methods:{selectedItem:function(t,e,n,s){let i="undefined"===typeof s?"":s;return"undefined"===typeof n?this[t]==e?"selected_item":i:this[t]==e?n:i},selectedItemMultiple:function(t,e,n,s){let i="undefined"===typeof s?"":s;return Array.isArray(this[t])?"undefined"===typeof n?this[t].includes(e)?"selected_item":i:this[t].includes(e)?n:i:""}}}},"0bfb":function(t,e,n){"use strict";var s=n("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var s=n("2aba"),i=n("32e9"),o=n("79e5"),a=n("be13"),r=n("2b4c"),c=n("520a"),u=r("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=r(t),m=!o(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=m?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e}):void 0;if(!m||!d||"replace"===t&&!l||"split"===t&&!h){var f=/./[p],g=n(a,p,""[t],function(t,e,n,s,i){return e.exec===c?m&&!i?{done:!0,value:f.call(e,n,s)}:{done:!0,value:t.call(n,e,s)}:{done:!1}}),_=g[0],v=g[1];s(String.prototype,t,_),i(RegExp.prototype,p,2==e?function(t,e){return v.call(t,this,e)}:function(t){return v.call(t,this)})}}},"23c6":function(t,e,n){var s=n("2d95"),i=n("2b4c")("toStringTag"),o="Arguments"==s(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),i))?n:o?s(e):"Object"==(r=s(e))&&"function"==typeof e.callee?"Arguments":r}},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"520a":function(t,e,n){"use strict";var s=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,r="lastIndex",c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[r]||0!==e[r]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(a=function(t){var e,n,a,l,h=this;return u&&(n=new RegExp("^"+h.source+"$(?!\\s)",s.call(h))),c&&(e=h[r]),a=i.call(h,t),c&&a&&(h[r]=h.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},"5f1b":function(t,e,n){"use strict";var s=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},6348:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":t.newComponent,"component-name":t.component_name||t.magazine_name,"component-changed":t.component_changed},on:{"update-component-name":t.updateComponentName}}),n("mek-magazine-select-gun",{attrs:{"selected-gun":t.selected_gun},on:{"update-gun":t.updateGun}}),n("span",{staticClass:"mek-flex-row"},[n("mek-magazine-ammo-list",{attrs:{"ammo-array":t.feature_array,"has-blast":t.hasBlast},on:{"update-ammo":t.updateAmmo}}),n("span",{staticClass:"mek-flex-col no-margin"},[n("mek-magazine-shots",{staticStyle:{"align-self":"baseline"},attrs:{shots:t.selected_shots},on:{"update-shots":t.updateShots}}),n("mek-component-stats",{attrs:{cols:3,rows:3}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Shots: "+t._s(t.selected_shots))]),n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Ammo Type(s):"),n("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[t._v(t._s(t.ammo_list))])]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[t._v("Space: "+t._s(t.space_cost))]),n("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[t._v("Weight: "+t._s(t.round(t.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[t._v("Base Cost: "+t._s(t.cost))]),n("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[t._v("Multiplier: x"+t._s(t.cost_multiplier))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row3"},slot:"col3-row3"},[t._v("Total Cost: "+t._s(t.cost))])]),n("mek-save-reset-component",{staticStyle:{"align-self":"baseline"},on:{"save-reset-component":t.componentSaveReset}})],1)],1)],1)},i=[],o=(n("a481"),n("072f")),a=n("8fcf"),r=n("7b4b"),c=n("f52e"),u={name:"mek_magazine",props:[],mixins:[o["a"],a["a"],r["a"],c["a"]],components:{"mek-magazine-select-gun":()=>n.e("chunk-38227c2c").then(n.bind(null,"9df6")),"mek-magazine-ammo-list":()=>n.e("chunk-27b7b50a").then(n.bind(null,"d09c")),"mek-magazine-shots":()=>n.e("chunk-b584628a").then(n.bind(null,"eebc")),"mek-component-name":()=>n.e("mek-component-name").then(n.bind(null,"192f")),"mek-save-reset-component":()=>n.e("mek-save-reset-component").then(n.bind(null,"c849")),"mek-component-stats":()=>n.e("mek-component-stats").then(n.bind(null,"d854"))},data:function(){let t={uuid:null,component_name:null,component_category:"equipment",component_type:"magazine",original_component:null,component_changed:!0,selected_gun:{name:"",cost:1,uuid:null},feature_array:[{type:"High-Ex",cost:1,effect:"Standard"}],cost_multipliers:{}};return t.cost_multipliers["High-Ex"]=1,t.efficiencies={},t.efficiencies.space={},t.efficiencies.space.modifier=0,t.selected_shots=1,t},methods:{updateComponentName(t){this.component_name=t,this.component_changed=!0},updateGun(t,e){this.$set(this,"selected_gun",t),this.magazine_name,this.component_changed=!0,this.gun_name_change=e},updateAmmo(t){this.$set(this,"feature_array",t);let e=t.reduce((t,e)=>{return t[e.type]=e.cost,t},{});this.$set(this,"cost_multipliers",e),this.component_changed=!0},updateShots(t){this.selected_shots=+t,this.component_changed=!0},componentSaveReset:function(t){let e="reset"==t&&null==this.original_component?"clear":t;switch(e){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.component_name=null,this.$set(this,"selected_gun",{name:"",cost:1,uuid:null}),this.$set(this,"feature_array",[{type:"High-Ex",cost:1}]),this.$set(this,"selected_shots",1),this.$store.commit("saveComponent",null);break}},output_data(){let t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="magazine",t.component_name=null===this.component_name?this.magazine_name:this.component_name,t.selected_gun=JSON.parse(JSON.stringify(this.selected_gun)),t.feature_array=JSON.parse(JSON.stringify(this.feature_array)),t.selected_shots=JSON.parse(JSON.stringify(this.selected_shots)),t.hasBlast=JSON.parse(JSON.stringify(this.hasBlast)),t.cost=this.cost,t.base_cost=this.base_cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.damage_capacity=this.damage_capacity,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(t),t},ingest_data(t){let e="Magazine is not valid, resetting.";this.universal_ingest_data(t,e),this.component_name==this.magazine_name&&this.$set(this,"component_name",null),this.$nextTick(()=>{this.gun_name_change?this.component_changed=!0:this.component_changed=!1})}},computed:{component_list(){return this.$store.getters.getComponentByType("equipment","projectile")},base_cost(){return this.round(.01*this.selected_gun.cost*this.selected_shots,2)},raw_space(){return this.base_cost},cost:function(){let t=this.base_cost*this.cost_multiplier;return this.round(t,2)},damage_capacity(){return this.space_cost},magazine_name(){this.selected_gun;let t=this.feature_array.reduce((t,e)=>{return t+e.type+" "},"");t=t.trim();let e=""==this.selected_gun.name?"":this.selected_gun.name+" - ";return t=e+" "+t+" Ammo ("+this.selected_shots+")",t.replace(/\s+/," ")},hasBlast(){return this.feature_array.some(t=>{return/blast/gi.test(t.type)})},ammo_list(){return this.feature_array.reduce(function(t,e,n){return t+=n>0?", ":"",t+=e.type,t},"")}}},l=u,h=n("2877"),p=Object(h["a"])(l,s,i,!1,null,null,null);e["default"]=p.exports},"6b54":function(t,e,n){"use strict";n("3846");var s=n("cb7c"),i=n("0bfb"),o=n("9e1e"),a="toString",r=/./[a],c=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?c(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):r.name!=a&&c(function(){return r.call(this)})},"7b4b":function(t,e,n){"use strict";e["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let t=1;for(let e in this.cost_multipliers)t*=this.cost_multipliers[e];return this.round(t,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(t,e,n){return t+=n>0?", ":"",t+=e.feature,t},"")},newComponent(){let t=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof t||null===t||(t.uuid!==this.uuid&&t.component_category==this.component_category&&t.component_type==this.component_type&&this.ingest_data(t),!1)}}}},"8fcf":function(t,e,n){"use strict";n("ac6a"),n("6b54"),n("a481");e["a"]={methods:{round:function(t,e){if("undefined"===typeof e||0==+e)return Math.round(+t);let n=10**+e;return Math.round(+t*n)/n},floor:function(t){return Math.floor(+t)},ceiling:function(t){return Math.ceiling(+t)},decimalPad(t){return+t%1===0?t.toPrecision(2):t},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16))},invisible_pad:function(t){let e="";return t.forEach(function(t){t.length>e.length&&(e=t)},0),e+"XX"},isNumeric:function(t){return"undefined"!==typeof t&&!isNaN(parseFloat(t))&&isFinite(t)}}}},a481:function(t,e,n){"use strict";var s=n("cb7c"),i=n("4bf8"),o=n("9def"),a=n("4588"),r=n("0390"),c=n("5f1b"),u=Math.max,l=Math.min,h=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,f){return[function(s,i){var o=t(this),a=void 0==s?void 0:s[e];return void 0!==a?a.call(s,o,i):n.call(String(o),s,i)},function(t,e){var i=f(n,t,this,e);if(i.done)return i.value;var h=s(t),p=String(this),m="function"===typeof e;m||(e=String(e));var _=h.global;if(_){var v=h.unicode;h.lastIndex=0}var y=[];while(1){var b=c(h,p);if(null===b)break;if(y.push(b),!_)break;var x=String(b[0]);""===x&&(h.lastIndex=r(p,o(h.lastIndex),v))}for(var w="",S=0,k=0;k<y.length;k++){b=y[k];for(var $=String(b[0]),A=u(l(a(b.index),p.length),0),N=[],E=1;E<b.length;E++)N.push(d(b[E]));var O=b.groups;if(m){var C=[$].concat(N,A,p);void 0!==O&&C.push(O);var z=String(e.apply(void 0,C))}else z=g($,p,A,N,O,e);A>=S&&(w+=p.slice(S,A)+z,S=A+$.length)}return w+p.slice(S)}];function g(t,e,s,o,a,r){var c=s+t.length,u=o.length,l=m;return void 0!==a&&(a=i(a),l=p),n.call(r,l,function(n,i){var r;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,s);case"'":return e.slice(c);case"<":r=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return n;if(l>u){var p=h(l/10);return 0===p?n:p<=u?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):n}r=o[l-1]}return void 0===r?"":r})}})},b0c5:function(t,e,n){"use strict";var s=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},f52e:function(t,e,n){"use strict";n("ac6a");e["a"]={methods:{universal_ingest_data(t,e){this.original_component=JSON.stringify(t),null===t&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",e));for(let n in t)if(!Object.keys(this._computedWatchers).includes(n))if("object"!==typeof t[n]||Array.isArray(t[n]))Array.isArray(t[n]),this.$set(this,n,t[n]);else{"object"===typeof this[n]&&null!==this[n]||(this[n]={});for(let e in t[n])this.$set(this[n],[e],t[n][e])}this.$forceUpdate()},updateComponentName:function(t){this.component_name=t,this.component_changed=!0},addAlert(t){this.alerts.push(t)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_magazine-main.9a22734d.js.map