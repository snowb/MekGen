(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_export-component"],{"02f4":function(e,t,r){var n=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var o,s,c=String(a(t)),i=n(r),p=c.length;return i<0||i>=p?e?"":void 0:(o=c.charCodeAt(i),o<55296||o>56319||i+1===p||(s=c.charCodeAt(i+1))<56320||s>57343?e?c.charAt(i):o:e?c.slice(i,i+2):s-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"1bfd":function(e,t,r){"use strict";var n=r("f1ea"),a=r.n(n);a.a},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),o=r("79e5"),s=r("be13"),c=r("2b4c"),i=r("520a"),p=c("species"),l=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),u=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var m=c(e),_=!o(function(){var t={};return t[m]=function(){return 7},7!=""[e](t)}),d=_?!o(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[p]=function(){return r}),r[m](""),!t}):void 0;if(!_||!d||"replace"===e&&!l||"split"===e&&!u){var f=/./[m],y=r(s,m,""[e],function(e,t,r,n,a){return t.exec===i?_&&!a?{done:!0,value:f.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),h=y[0],g=y[1];n(String.prototype,e,h),a(RegExp.prototype,m,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"23c6":function(e,t,r){var n=r("2d95"),a=r("2b4c")("toStringTag"),o="Arguments"==n(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};e.exports=function(e){var t,r,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),a))?r:o?n(t):"Object"==(c=n(t))&&"function"==typeof t.callee?"Arguments":c}},"24b8":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("ade3");r("ac6a");function a(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach(function(t){Object(n["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let s={},c=e=>{return Object.entries(e).reduce((e,t)=>{let r={long_name:t[0]};return void 0!==t[1].pkey&&(r.pkey=t[1].pkey),void 0!==t[1].short_pkey&&(r.short_pkey=t[1].short_pkey),e[t[1].short_name]=r,e},{})},i=e=>{return o({},e,{},c(e))};s.universal_map={uuid:{short_name:"uuid"},component_name:{short_name:"cn"},custom_component_name:{short_name:"ccn"},component_category:{short_name:"cc"},component_type:{short_name:"ct"},efficiencies:{short_name:"ef"}},s.universal_map=i(s.universal_map),s.beam_map={feature_array:{short_name:"fa",pkey:"feature"},selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_warm_up_time:{short_name:"swut",pkey:"time"},selected_wide_angle:{short_name:"swa",pkey:"angle"},selected_shots:{short_name:"ss",pkey:"shots"},selected_burst_value:{short_name:"sbv",pkey:"burst_value"},selected_range_mod:{short_name:"srm",pkey:"range_mod"}},s.beam_map=i(s.beam_map),s.emw_map={feature_array:{short_name:"fa",pkey:"feature"},selected_damage:{short_name:"sd",pkey:"damage"},selected_attack_factor:{short_name:"saf",pkey:"attack_factor"},selected_turns_in_use:{short_name:"stiu",pkey:"turns"}},s.emw_map=i(s.emw_map),s.energy_pool_map={feature_array:{short_name:"fa",pkey:"feature"},selected_energy_pool:{short_name:"sep",pkey:"power_available"},selected_portfolio_size:{short_name:"sps",pkey:"size"}},s.energy_pool_map=i(s.energy_pool_map),s.locomotion_map={selected_locomotion_type:{short_name:"slt",pkey:"type"},selected_locomotion_class:{short_name:"slc",pkey:"name"},slt:{short_name:"selected_locomotion_type",pkey:"type"},slc:{short_name:"selected_locomotion_class",pkey:"name"}},s.magazine_map={selected_gun:{short_name:"sg",pkey:"uuid"},feature_array:{short_name:"fa",pkey:"type"},selected_shots:{short_name:"ss"}},s.magazine_map=i(s.magazine_map),s.melee_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},feature_array:{short_name:"fa",pkey:"feature"},entangle:{short_name:"ent"}},s.melee_map=i(s.melee_map),s.missile_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_pack_size:{short_name:"sps",pkey:"size"},selected_range_mod:{short_name:"srm",pkey:"id"},selected_smart:{short_name:"sm",pkey:"smart"},selected_skill:{short_name:"ss",pkey:"skill"},selected_blast_radius:{short_name:"sbr",pkey:"blast_radius"},smoke_scatter_duration:{short_name:"ssd"},feature_array:{short_name:"fa",pkey:"feature"}},s.missile_map=i(s.missile_map),s.projectile_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_range_mod:{short_name:"srm",pkey:"range_mod"},selected_burst_value:{short_name:"sbv",pkey:"burst_value"},feature_array:{short_name:"fa",pkey:"feature"},selected_multi_feed:{short_name:"smf",pkey:"feeds"}},s.projectile_map=i(s.projectile_map),s.reflector_map={selected_reflector:{short_name:"sr",pkey:"quality_value"},sr:{long_name:"selected_reflector",pkey:"quality_value"}},s.servo_map={selected_servo_type:{short_name:"sst",pkey:"type"},selected_servo_class:{short_name:"ssc",pkey:"code"},selected_armor:{short_name:"sar",pkey:"code"},selected_armor_type:{short_name:"sat",pkey:"damage_coefficient"},selected_absorption:{short_name:"sab",pkey:"absorption"},kills_space_trade:{short_name:"kst"}},s.servo_map=i(s.servo_map),s.shield_map={shield_class:{short_name:"sc",pkey:"stopping_power"},defense_ability:{short_name:"da",pkey:"da"},binder:{short_name:"bnd",pkey:"stopping_power_modifier"},reset_time:{short_name:"rt",pkey:"time"},turns_in_use:{short_name:"tiu",pkey:"time"},weakness_array:{short_name:"wa",pkey:"weakness"},armor_type:{short_name:"at",pkey:"damage_coefficient"},absorption:{short_name:"ab",pkey:"absorption"}},s.shield_map=i(s.shield_map)},2913:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{display:"inline-flex-col"},attrs:{id:"app"}},[r("mek-top-menu",{attrs:{section:e.targetExportTab,"section-list":e.exportSectionList},on:{"focus-section":e.focusExportSection}}),r("div",{staticStyle:{display:"inline-flex-col"},attrs:{id:"app"}},[r("mek-top-menu",{attrs:{section:e.targetTypeTab,"section-list":e.typeSectionList,size:"sm",color:"d","color-offset":"rgb"},on:{"focus-section":e.focusTypeSection}}),""!=e.targetTypeTab?r("span",{staticClass:"mek-flex-row"},[r("mek-side-menu",{attrs:{sections:e.componentList,format:"full",list:"true",clickable:"true"},on:{"side-menu-clicked":e.selectComponent}}),r("div",{staticClass:"json_parent_container"},[r("span",{staticClass:"json_header"},[e._v("MekJSON")]),r("div",{staticClass:"json_container"},[e._v("\n            "+e._s(e.displayedComponent)+"\n          ")]),r("span",{directives:[{name:"show",rawName:"v-show",value:""!==e.displayedCompressedComponent,expression:"displayedCompressedComponent!==''"}],staticClass:"json_header"},[e._v("Condensed MekJSON")]),r("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.displayedCompressedComponent,expression:"displayedCompressedComponent!==''"}],staticClass:"json_container"},[e._v("\n            "+e._s(e.displayedCompressedComponent)+"\n          ")])])],1):e._e()],1)],1)},a=[],o=r("ade3"),s=(r("ac6a"),r("8fcf")),c=r("2f62"),i=r("24b8");let p=e=>{return void 0!==i["a"].universal_map[e]&&void 0!==i["a"].universal_map[e].short_name},l=(e,t)=>{return void 0!==i["a"][t+"_map"][e]&&void 0!==i["a"][t+"_map"][e].short_name},u=(e,t)=>{return i["a"][t+"_map"][e].short_name},m=(e,t)=>{return i["a"][t+"_map"][e].pkey},_=(e,t)=>{return e.reduce((e,r)=>{return e.push(r[t]),e},[])},d=e=>{let t={condense:!0},r=e.component_type;for(let n in e)switch(!0){case p(n)&&"efficiencies"==n:t[i["a"].universal_map[n].short_name]={sp:{ct:e[n].space.cost,md:e[n].space.modifier}};break;case p(n):t[i["a"].universal_map[n].short_name]=e[n];break;case l(n,r)&&"entangle"==n:t[i["a"].melee_map[n].short_name]={rm:e[n].range_modifier,dm:e[n].damage_modifier};break;case l(n,r)&&"kills_space_trade"==n:t[i["a"].servo_map[n].short_name]={km:e[n].kills_modifier,sm:e[n].space_modifier,ct:e[n].cost};break;case l(n,r)&&["feature_array","weakness_array"].includes(n):t[u(n,r)]=_(e[n],m(n,r));break;case l(n,r):t[u(n,r)]=e[n][m(n,r)];break}return t};function f(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={name:"export-component",mixins:[s["a"]],components:{"mek-top-menu":()=>r.e("mek-top-menu").then(r.bind(null,"4d27")),"mek-side-menu":()=>r.e("mek_side-menu").then(r.bind(null,"95aa"))},data:function(){let e={selectedKey:null,focusedExportSection:null};return e},methods:{focusExportSection:function(e){e!=this.focusedExportSection&&this.focusTypeSection(""),this.focusedExportSection=e,this.$store.commit("showTab",{prop:"currentExportTab",tab:e})},focusTypeSection:function(e){this.$store.commit("showTab",{prop:"currentTypeTab",tab:e})},selectComponent(e){this.selectedKey=e,this.$store.commit("selectComponent",e)},selected(e){return this.selectedKey==e?"selected_ecm":""},invisiblePad(){return this.invisible_pad(Object.values(this.componentList))}},computed:y({exportSectionList(){return this.categoryList.map(e=>{let t=e.charAt(0).toUpperCase()+e.slice(1);return{id:e,name:t}})},typeSectionList(){return this.typeList(this.targetExportTab).map(e=>{let t=e.charAt(0).toUpperCase()+e.slice(1);return{id:e,name:t}})},componentList(){return this.getComponentByType(this.targetExportTab,this.targetTypeTab)},displayedComponent(){return""==this.selectedComponent||null===this.selectedComponent||void 0===this.selectedComponent?"Select an item to view":JSON.stringify(this.selectedComponent)},displayedCompressedComponent(){return""==this.selectedComponent||null===this.selectedComponent||void 0===this.selectedComponent?"":JSON.stringify(d(this.selectedComponent))}},Object(c["b"])({targetExportTab:"targetExportTab",categoryList:"categoryList",typeList:"typeList",targetTypeTab:"targetTypeTab",getComponentByType:"getComponentByType",selectedComponent:"selectedComponent"}))},g=h,b=(r("1bfd"),r("2877")),v=Object(b["a"])(g,n,a,!1,null,"0979b2b2",null);t["default"]=v.exports},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"520a":function(e,t,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,s=a,c="lastIndex",i=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[c]||0!==t[c]}(),p=void 0!==/()??/.exec("")[1],l=i||p;l&&(s=function(e){var t,r,s,l,u=this;return p&&(r=new RegExp("^"+u.source+"$(?!\\s)",n.call(u))),i&&(t=u[c]),s=a.call(u,e),i&&s&&(u[c]=u.global?s.index+s[0].length:t),p&&s&&s.length>1&&o.call(s[0],r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"6b54":function(e,t,r){"use strict";r("3846");var n=r("cb7c"),a=r("0bfb"),o=r("9e1e"),s="toString",c=/./[s],i=function(e){r("2aba")(RegExp.prototype,s,e,!0)};r("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?i(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?a.call(e):void 0)}):c.name!=s&&i(function(){return c.call(this)})},"8fcf":function(e,t,r){"use strict";r("ac6a"),r("6b54"),r("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let r=10**+t;return Math.round(+e*r)/r},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},a481:function(e,t,r){"use strict";var n=r("cb7c"),a=r("4bf8"),o=r("9def"),s=r("4588"),c=r("0390"),i=r("5f1b"),p=Math.max,l=Math.min,u=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,_=/\$([$&`']|\d\d?)/g,d=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,function(e,t,r,f){return[function(n,a){var o=e(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,o,a):r.call(String(o),n,a)},function(e,t){var a=f(r,e,this,t);if(a.done)return a.value;var u=n(e),m=String(this),_="function"===typeof t;_||(t=String(t));var h=u.global;if(h){var g=u.unicode;u.lastIndex=0}var b=[];while(1){var v=i(u,m);if(null===v)break;if(b.push(v),!h)break;var k=String(v[0]);""===k&&(u.lastIndex=c(m,o(u.lastIndex),g))}for(var x="",w=0,O=0;O<b.length;O++){v=b[O];for(var C=String(v[0]),S=p(l(s(v.index),m.length),0),j=[],E=1;E<v.length;E++)j.push(d(v[E]));var T=v.groups;if(_){var P=[C].concat(j,S,m);void 0!==T&&P.push(T);var L=String(t.apply(void 0,P))}else L=y(C,m,S,j,T,t);S>=w&&(x+=m.slice(w,S)+L,w=S+C.length)}return x+m.slice(w)}];function y(e,t,n,o,s,c){var i=n+e.length,p=o.length,l=_;return void 0!==s&&(s=a(s),l=m),r.call(c,l,function(r,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(i);case"<":c=s[a.slice(1,-1)];break;default:var l=+a;if(0===l)return r;if(l>p){var m=u(l/10);return 0===m?r:m<=p?void 0===o[m-1]?a.charAt(1):o[m-1]+a.charAt(1):r}c=o[l-1]}return void 0===c?"":c})}})},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},f1ea:function(e,t,r){}}]);
//# sourceMappingURL=mek_export-component.15efc0e2.js.map