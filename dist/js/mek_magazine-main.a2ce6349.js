(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_magazine-main"],{"02f4":function(t,e,n){var s=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var o,a,r=String(i(e)),c=s(n),l=r.length;return c<0||c>=l?t?"":void 0:(o=r.charCodeAt(c),o<55296||o>56319||c+1===l||(a=r.charCodeAt(c+1))<56320||a>57343?t?r.charAt(c):o:t?r.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var s=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?s(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var s=n("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var s=n("2aba"),i=n("32e9"),o=n("79e5"),a=n("be13"),r=n("2b4c"),c=n("520a"),l=r("species"),u=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var m=r(t),p=!o(function(){var e={};return e[m]=function(){return 7},7!=""[t](e)}),f=p?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[m](""),!e}):void 0;if(!p||!f||"replace"===t&&!u||"split"===t&&!h){var d=/./[m],g=n(a,m,""[t],function(t,e,n,s,i){return e.exec===c?p&&!i?{done:!0,value:d.call(e,n,s)}:{done:!0,value:t.call(n,e,s)}:{done:!1}}),_=g[0],v=g[1];s(String.prototype,t,_),i(RegExp.prototype,m,2==e?function(t,e){return v.call(t,this,e)}:function(t){return v.call(t,this)})}}},"23c6":function(t,e,n){var s=n("2d95"),i=n("2b4c")("toStringTag"),o="Arguments"==s(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),i))?n:o?s(e):"Object"==(r=s(e))&&"function"==typeof e.callee?"Arguments":r}},"2f6a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":t.newComponent,"component-name":t.component_name||t.magazine_name,"component-changed":t.component_changed},on:{"update-component-name":t.updateComponentName}}),n("mek-magazine-select-gun",{attrs:{"selected-gun":t.selected_gun},on:{"update-gun":t.updateGun,"alert-generated":t.handleAlert}}),n("span",{staticClass:"mek-flex-row"},[n("mek-magazine-ammo-list",{attrs:{"ammo-array":t.feature_array,"has-blast":t.hasBlast},on:{"update-ammo":t.updateAmmo,"alert-generated":t.handleAlert}}),n("span",{staticClass:"mek-flex-col no-margin"},[n("mek-magazine-shots",{staticStyle:{"align-self":"baseline"},attrs:{shots:t.selected_shots},on:{"update-shots":t.updateShots}}),n("mek-component-stats",{attrs:{cols:3,rows:3}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Shots: "+t._s(t.selected_shots))]),n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Ammo Type(s):"),n("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[t._v(t._s(t.ammo_list))])]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[t._v("Space: "+t._s(t.space_cost))]),n("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[t._v("Weight: "+t._s(t.round(t.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[t._v("Base Cost: "+t._s(t.cost))]),n("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[t._v("Multiplier: x"+t._s(t.cost_multiplier))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row3"},slot:"col3-row3"},[t._v("Total Cost: "+t._s(t.cost))])]),n("mek-save-reset-component",{staticStyle:{"align-self":"baseline"},on:{"save-reset-component":t.componentSaveReset}})],1)],1)],1)},i=[],o=(n("a481"),n("8fcf")),a=n("7b4b"),r=n("f52e"),c={name:"mek_magazine",props:[],mixins:[o["a"],a["a"],r["a"]],components:{"mek-magazine-select-gun":()=>n.e("mek_magazine-select-gun").then(n.bind(null,"cfeb")),"mek-magazine-ammo-list":()=>n.e("mek_magazine-ammo-list").then(n.bind(null,"6724")),"mek-magazine-shots":()=>n.e("mek_magazine-shots").then(n.bind(null,"8b6a")),"mek-component-name":()=>n.e("mek-component-name").then(n.bind(null,"dba3")),"mek-save-reset-component":()=>n.e("mek-save-reset-component").then(n.bind(null,"972e")),"mek-component-stats":()=>n.e("mek_component-stats").then(n.bind(null,"67b1"))},data:function(){let t={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"magazine",original_component:null,component_changed:!0,selected_gun:{name:"",cost:1,uuid:null},feature_array:[{type:"High-Ex",cost:1,effect:"Standard"}],cost_multipliers:{}};return t.cost_multipliers.feature_array=1,t.efficiencies={},t.efficiencies.space={},t.efficiencies.space.modifier=0,t.selected_shots=1,t.hasAlert=!1,t},methods:{updateComponentName(t){this.component_name=t,this.custom_component_name=!0,this.component_changed=!0},updateGun(t,e){this.$set(this,"selected_gun",t),this.magazine_name,this.component_changed=!0,this.gun_name_change=e},updateAmmo(t){this.$set(this,"feature_array",t);let e=t.reduce((t,e)=>{return t*e.cost},1);this.cost_multipliers.feature_array=e,this.component_changed=!0},updateShots(t){this.selected_shots=+t,this.component_changed=!0},componentSaveReset:function(t){let e="reset"==t&&null==this.original_component?"new":t;switch(e){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"new":this.uuid=null,this.component_name=null,this.$set(this,"selected_gun",{name:"",cost:1,uuid:null}),this.$set(this,"feature_array",[{type:"High-Ex",cost:1,effect:"Standard"}]),this.$set(this,"selected_shots",1),this.cost_multipliers.feature_array=1,this.$store.commit("saveComponent",null);break}},output_data(){let t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="magazine",t.component_name=null===this.component_name?this.magazine_name:this.component_name,t.custom_component_name=this.custom_component_name,t.selected_gun=this.selected_gun,t.feature_array=this.feature_array,t.selected_shots=this.selected_shots,t.cost_multipliers=this.cost_multipliers,t.hasBlast=this.hasBlast,t.cost=this.cost,t.base_cost=this.base_cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.damage_capacity=this.damage_capacity,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(t),JSON.parse(this.original_component)},ingest_data(t){let e="Magazine is not valid, resetting.";this.universal_ingest_data(t,e),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.gun_name_change?this.component_changed=!0:this.component_changed=this.hasAlert})},handleAlert(t){this.hasAlert=t}},computed:{component_list(){return this.$store.getters.getComponentByType("equipment","projectile")},base_cost(){return this.round(.01*this.selected_gun.cost*this.selected_shots,2)},raw_space(){return this.base_cost},cost:function(){let t=this.base_cost*this.cost_multiplier;return this.round(t,2)},damage_capacity(){return this.space_cost},magazine_name(){this.selected_gun;let t=this.feature_array.reduce((t,e)=>{return t+e.type+" "},"");t=t.trim();let e=""==this.selected_gun.name?"":this.selected_gun.name+" - ";return t=e+" "+t+" Ammo ("+this.selected_shots+")",t.replace(/\s+/," ")},hasBlast(){return this.feature_array.some(t=>{return/blast/gi.test(t.type)})},ammo_list(){return this.feature_array.reduce(function(t,e,n){return t+=n>0?", ":"",t+=e.type,t},"")}}},l=c,u=n("2877"),h=Object(u["a"])(l,s,i,!1,null,null,null);e["default"]=h.exports},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"520a":function(t,e,n){"use strict";var s=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,r="lastIndex",c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[r]||0!==e[r]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(a=function(t){var e,n,a,u,h=this;return l&&(n=new RegExp("^"+h.source+"$(?!\\s)",s.call(h))),c&&(e=h[r]),a=i.call(h,t),c&&a&&(h[r]=h.global?a.index+a[0].length:e),l&&a&&a.length>1&&o.call(a[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)}),a}),t.exports=a},"5f1b":function(t,e,n){"use strict";var s=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"6b54":function(t,e,n){"use strict";n("3846");var s=n("cb7c"),i=n("0bfb"),o=n("9e1e"),a="toString",r=/./[a],c=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?c(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):r.name!=a&&c(function(){return r.call(this)})},"7b4b":function(t,e,n){"use strict";e["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let t=1;for(let e in this.cost_multipliers)if("object"===typeof this.cost_multipliers[e])for(let n in this.cost_multipliers[e])t*=this.cost_multipliers[e][n];else t*=this.cost_multipliers[e];return this.round(t,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(t,e,n){return t+=n>0?", ":"",t+=e.feature,t},"")},newComponent(){let t=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof t||null===t||(t.uuid!==this.uuid&&t.component_category==this.component_category&&t.component_type==this.component_type&&this.ingest_data(t),!1)}}}},"8fcf":function(t,e,n){"use strict";n("ac6a"),n("6b54"),n("a481");e["a"]={methods:{round:function(t,e){if("undefined"===typeof e||0==+e)return Math.round(+t);let n=10**+e;return Math.round(+t*n)/n},floor:function(t){return Math.floor(+t)},ceiling:function(t){return Math.ceiling(+t)},decimalPad(t){return+t%1===0?t.toPrecision(2):t},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16))},invisible_pad:function(t){let e="";return t.forEach(function(t){t.length>e.length&&(e=t)},0),e+"XX"},isNumeric:function(t){return"undefined"!==typeof t&&!isNaN(parseFloat(t))&&isFinite(t)}}}},a481:function(t,e,n){"use strict";var s=n("cb7c"),i=n("4bf8"),o=n("9def"),a=n("4588"),r=n("0390"),c=n("5f1b"),l=Math.max,u=Math.min,h=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,d){return[function(s,i){var o=t(this),a=void 0==s?void 0:s[e];return void 0!==a?a.call(s,o,i):n.call(String(o),s,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var h=s(t),m=String(this),p="function"===typeof e;p||(e=String(e));var _=h.global;if(_){var v=h.unicode;h.lastIndex=0}var b=[];while(1){var y=c(h,m);if(null===y)break;if(b.push(y),!_)break;var x=String(y[0]);""===x&&(h.lastIndex=r(m,o(h.lastIndex),v))}for(var w="",k=0,S=0;S<b.length;S++){y=b[S];for(var $=String(y[0]),A=l(u(a(y.index),m.length),0),z=[],C=1;C<y.length;C++)z.push(f(y[C]));var E=y.groups;if(p){var R=[$].concat(z,A,m);void 0!==E&&R.push(E);var N=String(e.apply(void 0,R))}else N=g($,m,A,z,E,e);A>=k&&(w+=m.slice(k,A)+N,k=A+$.length)}return w+m.slice(k)}];function g(t,e,s,o,a,r){var c=s+t.length,l=o.length,u=p;return void 0!==a&&(a=i(a),u=m),n.call(r,u,function(n,i){var r;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,s);case"'":return e.slice(c);case"<":r=a[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var m=h(u/10);return 0===m?n:m<=l?void 0===o[m-1]?i.charAt(1):o[m-1]+i.charAt(1):n}r=o[u-1]}return void 0===r?"":r})}})},b0c5:function(t,e,n){"use strict";var s=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},f52e:function(t,e,n){"use strict";n("ac6a");e["a"]={methods:{universal_ingest_data(t,e){this.original_component=JSON.stringify(t);let n=JSON.parse(this.original_component);null===t&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",e));for(let s in n)if(!Object.keys(this._computedWatchers).includes(s))if("object"!==typeof n[s]||Array.isArray(n[s]))Array.isArray(n[s]),this.$set(this,s,n[s]);else{"object"===typeof this[s]&&null!==this[s]||(this[s]={});for(let t in n[s])this.$set(this[s],[t],n[s][t])}this.$forceUpdate()},updateComponentName(t){this.component_name=t,this.component_changed=!0},addAlert(t){this.alerts.push(t)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_magazine-main.a2ce6349.js.map