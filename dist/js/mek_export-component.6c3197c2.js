(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_export-component"],{"02f4":function(e,t,a){var n=a("4588"),r=a("be13");e.exports=function(e){return function(t,a){var s,o,c=String(r(t)),i=n(a),p=c.length;return i<0||i>=p?e?"":void 0:(s=c.charCodeAt(i),s<55296||s>56319||i+1===p||(o=c.charCodeAt(i+1))<56320||o>57343?e?c.charAt(i):s:e?c.slice(i,i+2):o-56320+(s-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var n=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?n(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var n=a("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,a){"use strict";a("b0c5");var n=a("2aba"),r=a("32e9"),s=a("79e5"),o=a("be13"),c=a("2b4c"),i=a("520a"),p=c("species"),l=!s(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),m=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var u=c(e),_=!s(function(){var t={};return t[u]=function(){return 7},7!=""[e](t)}),d=_?!s(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[p]=function(){return a}),a[u](""),!t}):void 0;if(!_||!d||"replace"===e&&!l||"split"===e&&!m){var f=/./[u],h=a(o,u,""[e],function(e,t,a,n,r){return t.exec===i?_&&!r?{done:!0,value:f.call(t,a,n)}:{done:!0,value:e.call(a,t,n)}:{done:!1}}),y=h[0],g=h[1];n(String.prototype,e,y),r(RegExp.prototype,u,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"23c6":function(e,t,a){var n=a("2d95"),r=a("2b4c")("toStringTag"),s="Arguments"==n(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(a){}};e.exports=function(e){var t,a,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=o(t=Object(e),r))?a:s?n(t):"Object"==(c=n(t))&&"function"==typeof t.callee?"Arguments":c}},"24b8":function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("be94");a("ac6a");let r={},s=e=>{return Object.entries(e).reduce((e,t)=>{let a={long_name:t[0]};return void 0!==t[1].pkey&&(a.pkey=t[1].pkey),void 0!==t[1].short_pkey&&(a.short_pkey=t[1].short_pkey),e[t[1].short_name]=a,e},{})},o=e=>{return Object(n["a"])({},e,s(e))};r.universal_map={uuid:{short_name:"uuid"},component_name:{short_name:"cn"},custom_component_name:{short_name:"ccn"},component_category:{short_name:"cc"},component_type:{short_name:"ct"},efficiencies:{short_name:"ef"}},r.universal_map=o(r.universal_map),r.beam_map={feature_array:{short_name:"fa",pkey:"feature"},selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_warm_up_time:{short_name:"swut",pkey:"time"},selected_wide_angle:{short_name:"swa",pkey:"angle"},selected_shots:{short_name:"ss",pkey:"shots"},selected_burst_value:{short_name:"sbv",pkey:"burst_value"},selected_range_mod:{short_name:"srm",pkey:"range_mod"}},r.beam_map=o(r.beam_map),r.emw_map={feature_array:{short_name:"fa",pkey:"feature"},selected_damage:{short_name:"sd",pkey:"damage"},selected_attack_factor:{short_name:"saf",pkey:"attack_factor"},selected_turns_in_use:{short_name:"stiu",pkey:"turns"}},r.emw_map=o(r.emw_map),r.energy_pool_map={feature_array:{short_name:"fa",pkey:"feature"},selected_energy_pool:{short_name:"sep",pkey:"power_available"},selected_portfolio_size:{short_name:"sps",pkey:"size"}},r.energy_pool_map=o(r.energy_pool_map),r.locomotion_map={selected_locomotion_type:{short_name:"slt",pkey:"type"},selected_locomotion_class:{short_name:"slc",pkey:"name"},slt:{short_name:"selected_locomotion_type",pkey:"type"},slc:{short_name:"selected_locomotion_class",pkey:"name"}},r.magazine_map={selected_gun:{short_name:"sg",pkey:"uuid"},feature_array:{short_name:"fa",pkey:"type"},selected_shots:{short_name:"ss"}},r.magazine_map=o(r.magazine_map),r.melee_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},feature_array:{short_name:"fa",pkey:"feature"},entangle:{short_name:"ent"}},r.melee_map=o(r.melee_map),r.missile_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_pack_size:{short_name:"sps",pkey:"size"},selected_range_mod:{short_name:"srm",pkey:"id"},selected_smart:{short_name:"sm",pkey:"smart"},selected_skill:{short_name:"ss",pkey:"skill"},selected_blast_radius:{short_name:"sbr",pkey:"blast_radius"},smoke_scatter_duration:{short_name:"ssd"},feature_array:{short_name:"fa",pkey:"feature"}},r.missile_map=o(r.missile_map),r.projectile_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_range_mod:{short_name:"srm",pkey:"range_mod"},selected_burst_value:{short_name:"sbv",pkey:"burst_value"},feature_array:{short_name:"fa",pkey:"feature"},selected_multi_feed:{short_name:"smf",pkey:"feeds"}},r.projectile_map=o(r.projectile_map),r.reflector_map={selected_reflector:{short_name:"sr",pkey:"quality_value"},sr:{long_name:"selected_reflector",pkey:"quality_value"}},r.servo_map={selected_servo_type:{short_name:"sst",pkey:"type"},selected_servo_class:{short_name:"ssc",pkey:"code"},selected_armor:{short_name:"sar",pkey:"code"},selected_armor_type:{short_name:"sat",pkey:"damage_coefficient"},selected_absorption:{short_name:"sab",pkey:"absorption"},kills_space_trade:{short_name:"kst"}},r.servo_map=o(r.servo_map),r.shield_map={shield_class:{short_name:"sc",pkey:"stopping_power"},defense_ability:{short_name:"da",pkey:"da"},binder:{short_name:"bnd",pkey:"stopping_power_modifier"},reset_time:{short_name:"rt",pkey:"time"},turns_in_use:{short_name:"tiu",pkey:"time"},weakness_array:{short_name:"wa",pkey:"weakness"},armor_type:{short_name:"at",pkey:"damage_coefficient"},absorption:{short_name:"ab",pkey:"absorption"}},r.shield_map=o(r.shield_map)},2913:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline-flex-col"},attrs:{id:"app"}},[a("mek-top-menu",{attrs:{section:e.targetExportTab,"section-list":e.exportSectionList},on:{"focus-section":e.focusExportSection}}),a("div",{staticStyle:{display:"inline-flex-col"},attrs:{id:"app"}},[a("mek-top-menu",{attrs:{section:e.targetTypeTab,"section-list":e.typeSectionList,size:"sm",color:"d","color-offset":"rgb"},on:{"focus-section":e.focusTypeSection}}),""!=e.targetTypeTab?a("span",{staticClass:"mek-flex-row"},[a("span",{staticClass:"menu_container"},[e._l(e.componentList,function(t,n){return a("span",{key:n,staticClass:"component clickable_ecm",class:e.selected(n),on:{click:function(t){return e.selectComponent(n)}}},[e._v("\n            "+e._s(t)+"\n          ")])}),a("span",{staticClass:"invisible_pad_ecm"},[e._v(e._s(e.invisiblePad()))])],2),a("div",{staticClass:"json_parent_container"},[a("span",{staticClass:"json_header"},[e._v("MekJSON")]),a("div",{staticClass:"json_container"},[e._v("\n            "+e._s(e.displayedComponent)+"\n          ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:""!==e.displayedCompressedComponent,expression:"displayedCompressedComponent!==''"}],staticClass:"json_header"},[e._v("Condensed MekJSON")]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.displayedCompressedComponent,expression:"displayedCompressedComponent!==''"}],staticClass:"json_container"},[e._v("\n            "+e._s(e.displayedCompressedComponent)+"\n          ")])])]):e._e()],1)],1)},r=[],s=a("be94"),o=(a("ac6a"),a("8fcf")),c=a("2f62"),i=a("24b8");let p=e=>{return void 0!==i["a"].universal_map[e]&&void 0!==i["a"].universal_map[e].short_name},l=(e,t)=>{return void 0!==i["a"][t+"_map"][e]&&void 0!==i["a"][t+"_map"][e].short_name},m=(e,t)=>{return i["a"][t+"_map"][e].short_name},u=(e,t)=>{return i["a"][t+"_map"][e].pkey},_=(e,t)=>{return e.reduce((e,a)=>{return e.push(a[t]),e},[])},d=e=>{let t={condense:!0},a=e.component_type;for(let n in e)switch(!0){case p(n)&&"efficiencies"==n:t[i["a"].universal_map[n].short_name]={sp:{ct:e[n].space.cost,md:e[n].space.modifier}};break;case p(n):t[i["a"].universal_map[n].short_name]=e[n];break;case l(n,a)&&"entangle"==n:t[i["a"].melee_map[n].short_name]={rm:e[n].range_modifier,dm:e[n].damage_modifier};break;case l(n,a)&&"kills_space_trade"==n:t[i["a"].servo_map[n].short_name]={km:e[n].kills_modifier,sm:e[n].space_modifier,ct:e[n].cost};break;case l(n,a)&&["feature_array","weakness_array"].includes(n):t[m(n,a)]=_(e[n],u(n,a));break;case l(n,a):t[m(n,a)]=e[n][u(n,a)];break}return t};var f={name:"export-component",mixins:[o["a"]],components:{"mek-top-menu":()=>a.e("mek_top-menu").then(a.bind(null,"4d27"))},data:function(){let e={selectedKey:null};return e},methods:{focusExportSection:function(e){this.$store.commit("showTab",{prop:"currentExportTab",tab:e})},focusTypeSection:function(e){this.$store.commit("showTab",{prop:"currentTypeTab",tab:e})},selectComponent(e){this.selectedKey=e,this.$store.commit("selectComponent",e)},selected(e){return this.selectedKey==e?"selected_ecm":""},invisiblePad(){return this.invisible_pad(Object.values(this.componentList))}},computed:Object(s["a"])({exportSectionList(){return this.categoryList.map(e=>{let t=e.charAt(0).toUpperCase()+e.slice(1);return{id:e,name:t}})},typeSectionList(){return this.typeList(this.targetExportTab).map(e=>{let t=e.charAt(0).toUpperCase()+e.slice(1);return{id:e,name:t}})},componentList(){return this.getComponentByType(this.targetExportTab,this.targetTypeTab)},displayedComponent(){return""==this.selectedComponent||null===this.selectedComponent||void 0===this.selectedComponent?"Select an item to view":JSON.stringify(this.selectedComponent)},displayedCompressedComponent(){return""==this.selectedComponent||null===this.selectedComponent||void 0===this.selectedComponent?"":JSON.stringify(d(this.selectedComponent))}},Object(c["b"])({targetExportTab:"targetExportTab",categoryList:"categoryList",typeList:"typeList",targetTypeTab:"targetTypeTab",getComponentByType:"getComponentByType",selectedComponent:"selectedComponent"}))},h=f,y=(a("ea8f"),a("2877")),g=Object(y["a"])(h,n,r,!1,null,"6f707b22",null);t["default"]=g.exports},3846:function(e,t,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"520a":function(e,t,a){"use strict";var n=a("0bfb"),r=RegExp.prototype.exec,s=String.prototype.replace,o=r,c="lastIndex",i=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[c]||0!==t[c]}(),p=void 0!==/()??/.exec("")[1],l=i||p;l&&(o=function(e){var t,a,o,l,m=this;return p&&(a=new RegExp("^"+m.source+"$(?!\\s)",n.call(m))),i&&(t=m[c]),o=r.call(m,e),i&&o&&(m[c]=m.global?o.index+o[0].length:t),p&&o&&o.length>1&&s.call(o[0],a,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)}),o}),e.exports=o},5253:function(e,t,a){},"5f1b":function(e,t,a){"use strict";var n=a("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var s=a.call(e,t);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"6b54":function(e,t,a){"use strict";a("3846");var n=a("cb7c"),r=a("0bfb"),s=a("9e1e"),o="toString",c=/./[o],i=function(e){a("2aba")(RegExp.prototype,o,e,!0)};a("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?i(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!s&&e instanceof RegExp?r.call(e):void 0)}):c.name!=o&&i(function(){return c.call(this)})},"8fcf":function(e,t,a){"use strict";a("ac6a"),a("6b54"),a("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let a=10**+t;return Math.round(+e*a)/a},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},a481:function(e,t,a){"use strict";var n=a("cb7c"),r=a("4bf8"),s=a("9def"),o=a("4588"),c=a("0390"),i=a("5f1b"),p=Math.max,l=Math.min,m=Math.floor,u=/\$([$&`']|\d\d?|<[^>]*>)/g,_=/\$([$&`']|\d\d?)/g,d=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,function(e,t,a,f){return[function(n,r){var s=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,s,r):a.call(String(s),n,r)},function(e,t){var r=f(a,e,this,t);if(r.done)return r.value;var m=n(e),u=String(this),_="function"===typeof t;_||(t=String(t));var y=m.global;if(y){var g=m.unicode;m.lastIndex=0}var v=[];while(1){var b=i(m,u);if(null===b)break;if(v.push(b),!y)break;var k=String(b[0]);""===k&&(m.lastIndex=c(u,s(m.lastIndex),g))}for(var x="",C=0,w=0;w<v.length;w++){b=v[w];for(var S=String(b[0]),T=p(l(o(b.index),u.length),0),E=[],j=1;j<b.length;j++)E.push(d(b[j]));var L=b.groups;if(_){var O=[S].concat(E,T,u);void 0!==L&&O.push(L);var R=String(t.apply(void 0,O))}else R=h(S,u,T,E,L,t);T>=C&&(x+=u.slice(C,T)+R,C=T+S.length)}return x+u.slice(C)}];function h(e,t,n,s,o,c){var i=n+e.length,p=s.length,l=_;return void 0!==o&&(o=r(o),l=u),a.call(c,l,function(a,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(i);case"<":c=o[r.slice(1,-1)];break;default:var l=+r;if(0===l)return a;if(l>p){var u=m(l/10);return 0===u?a:u<=p?void 0===s[u-1]?r.charAt(1):s[u-1]+r.charAt(1):a}c=s[l-1]}return void 0===c?"":c})}})},b0c5:function(e,t,a){"use strict";var n=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},ea8f:function(e,t,a){"use strict";var n=a("5253"),r=a.n(n);r.a}}]);
//# sourceMappingURL=mek_export-component.6c3197c2.js.map