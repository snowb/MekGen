(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_build-config"],{"02f4":function(e,t,n){var i=n("4588"),o=n("be13");e.exports=function(e){return function(t,n){var r,s,a=String(o(t)),c=i(n),u=a.length;return c<0||c>=u?e?"":void 0:(r=a.charCodeAt(c),r<55296||r>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?e?a.charAt(c):r:e?a.slice(c,c+2):s-56320+(r-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var i=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?i(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var i=n("cb7c");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,n){"use strict";n("b0c5");var i=n("2aba"),o=n("32e9"),r=n("79e5"),s=n("be13"),a=n("2b4c"),c=n("520a"),u=a("species"),l=!r(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),g=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var f=a(e),h=!r(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),d=h?!r(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!t}):void 0;if(!h||!d||"replace"===e&&!l||"split"===e&&!g){var p=/./[f],m=n(s,f,""[e],function(e,t,n,i,o){return t.exec===c?h&&!o?{done:!0,value:p.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),_=m[0],b=m[1];i(String.prototype,e,_),o(RegExp.prototype,f,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"224f":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mek-inline-flex-row"},[n("mek-side-menu",{attrs:{title:"Configs",format:"full",list:!0,sections:e.configuration_list,collapsible:!0,clickable:!0,"selected-item":e.working_uuid},on:{"side-menu-clicked":e.load_config}}),n("div",{staticClass:"mek-inline-flex-col"},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.computedComponentName,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("mek-sub-component-table",{key:"msc-"+e.configurationForms.length,attrs:{name:"Configuration",flow:"dropdown-pkey",pkey:"config",items:e.configurationForms,"show-headers":!0,headers:e.headers,"selected-keys":e.selectedConfigPkey},on:{"update-selected-data":e.select_config}}),n("mek-save-reset-component",{attrs:{activeButtons:e.activeButtons},on:{"save-reset-component":e.saveResetComponent}})],1)],1)},o=[],r=(n("ac6a"),n("ade3")),s=n("8fcf");function a(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u={name:"mek-build-config",components:{"mek-sub-component-table":()=>n.e("mek_sub-component-table").then(n.bind(null,"a949")),"mek-save-reset-component":()=>n.e("mek-save-reset-component").then(n.bind(null,"972e")),"mek-component-name":()=>n.e("mek-component-name").then(n.bind(null,"4a3f")),"mek-side-menu":()=>n.e("mek_side-menu").then(n.bind(null,"95aa"))},props:["selectedData"],mixins:[s["a"]],data:()=>{let e={configurationFormsList:[{config:"Humanoid",cost:.375,hardpoints:["all"],propulsion:["all"],flight_without_propulsion:!1,no_hands:!1,modifiers:{}},{config:"Tank",cost:.3,propulsion:["wheels","treads","ges","gravitics"],hardpoints:["torso","head","pod","binder"],no_hands:!0,flight_without_propulsion:!1,modifiers:{maneuver_value:-1,armor_stopping_power:2}},{config:"Avian",cost:.35,propulsion:["legs","ges","thrusters","gravitics"],hardpoints:["all"],no_hands:!0,flight_without_propulsion:!0,modifiers:{maneuver_value:-1,melee_damage:2,flight_movement_allowance:6,land_movement_alloance:0}},{config:"Fighter/Corvette",cost:.3,propulsion:["ges","thrusters","gravitics"],hardpoints:["torso","pod","head","wings","binder"],no_hands:!0,flight_without_propulsion:!1,modifiers:{maneuver_value:-2,flight_movement_allowance:"x2",minimum_flight_movement_alloance:4,land_movement_alloance:0}}],headers:{config:"Form",cost:"Cost"},selected_configuration:null,working_configurations:{},component_name:null,working_uuid:null,component_changed:!0,newComponent:!0};return e},methods:{updateComponentName(e){this.component_name=e,this.component_changed=!0},select_config(e){let t=this.selected_configuration?this.selected_configuration.name:null,n=!!this.selected_configuration&&this.selected_configuration.base_config;this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(e))),this.selected_configuration.name=t,n&&(this.selected_configuration.base_config=!0),this.component_changed=!0},saveResetComponent(e){let t=this.working_uuid?this.working_uuid:this.create_short_uuid(),n=c({uuid:t},this.selected_configuration);switch(0==Object.keys(this.working_configurations).length&&(n.base_config=!0),n.name=this.component_name,e){case"save":this.working_configurations[t]=n,this.working_uuid=t,this.$emit("saveSelectedData","config",this.working_configurations),this.newComponent=!1,this.component_changed=!1;break;case"reset":if(this.working_uuid){this.$set(this,"selected_configuration",n);break}case"delete":this.working_uuid&&(delete this.working_configurations[t],this.$emit("saveSelectedData","config",this.working_configurations));case"new":this.working_uuid=null,this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.configurationForms[0]))),this.newComponent=!0,this.component_changed=!0;break}},load_config(e){switch(!0){case""==e&&null===this.working_uuid:this.$set(this,"selected_configuration",null);break;case""==e:this.$set(this,"selected_configuration",this.selectedData[this.working_uuid]);break;default:this.$set(this,"selected_configuration",this.selectedData[e]),this.working_uuid=e,this.newComponent=!1,this.component_changed=!1}},configCompare(e,t){let n=e.config,i=t.config;switch(!0){case n==i:return 0;case"Humanoid"==n:return 1;case"Humanoid"==i:return-1}let o=e.hardpoints,r=t.hardpoints;switch(!0){case"all"==o[0]&&"all"==r[0]:return 0;case"all"==o[0]:case o.length>r.length:return 1;case"all"==r[0]:case o.length<r.length:return-1}return this.hardpointCompare(o,r)},hardpointCompare(e,t){let n=e.filter(e=>{return!t.includes(e)});return n.length>0?1:0},adjustBaseConfig(e){let t=null;for(let n in this.working_configurations)if(-1==this.configCompare(e,this.working_configurations[n])){t=this.working_configurations[n].uuid;break}null!==t&&(delete e.base_config,this.working_configurations[t].base_config=!0)}},computed:{selectedConfigPkey(){let e=void 0===this.selectedData?["Humanoid"]:null!==this.selected_configuration?[this.selected_configuration.config]:this.configurationForms.length>0?[this.configurationForms[0].config]:["Humanoid"];return e},configuration_list(){if(void 0===this.selectedData||0==Object.keys(this.selectedData).length)return{};let e=Object.keys(this.working_configurations).reduce((e,t)=>{return e[t]=this.working_configurations[t].name?this.working_configurations[t].name:this.working_configurations[t].config,e[t]+=this.working_configurations[t].base_config?" (Base)":"",e},{});return null===this.working_uuid&&0==Object.keys(this.working_configurations).length&&(this.working_uuid=Object.keys(this.working_configurations)[0],this.$set(this,"selected_configuration",this.working_configurations[this.working_uuid]),this.component_changed=!1,this.newComponent=!1),e},configurationForms(){let e=void 0===this.selectedData||0==Object.keys(this.selectedData).length?"Humanoid":this.selectedData[this.base_config_key].config,t=void 0===this.selectedData||0==Object.keys(this.selectedData).length?["all"]:this.working_configurations[this.base_config_key].hardpoints,n=!(!this.selected_configuration||!this.selected_configuration.base_config);if("Humanoid"==e||n)return this.configurationFormsList;if("all"==t[0])return this.configurationFormsList.slice(1);let i=this.configurationFormsList.reduce((e,n)=>{return[-1,0].includes(this.hardpointCompare(t,n.hardpoints))&&e.push(n),e},[]);return i},base_config_key(){if(void 0===this.selectedData||0==Object.keys(this.selectedData).length)return null;let e=Object.keys(this.working_configurations)[0],t=null;for(let n in this.working_configurations)this.working_configurations[n].base_config&&(t=n);return null===t?e:t},activeButtons(){return"save,reset,new"+(null!==this.working_uuid?",delete":"")},computedComponentName(){let e=null!==this.component_name?this.component_name:null!==this.selected_configuration?this.selected_configuration.config:this.configurationForms.length>0?this.configurationForms[0].config:"dunno";return e}},watch:{selectedData:{immediate:!0,handler:function(e){let t=JSON.parse(JSON.stringify(this.selectedData||{}));if(this.$set(this,"working_configurations",t),void 0===e||0==Object.keys(e).length)this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.configurationFormsList[0]))),this.working_uuid=null,this.component_changed=!0,this.newComponent=!0,this.$set(this.selected_configuration,"base_config",!0);else if(Object.keys(e).length>1){let e=Object.keys(this.working_configurations)[0];for(let t in this.working_configurations)if(this.working_configurations[t].base_config){e=this.working_configurations[t].uuid;break}this.adjustBaseConfig(this.working_configurations[e])}}}}},l=u,g=n("2877"),f=Object(g["a"])(l,i,o,!1,null,"b2d465aa",null);t["default"]=f.exports},"23c6":function(e,t,n){var i=n("2d95"),o=n("2b4c")("toStringTag"),r="Arguments"==i(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(n){}};e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=s(t=Object(e),o))?n:r?i(t):"Object"==(a=i(t))&&"function"==typeof t.callee?"Arguments":a}},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"520a":function(e,t,n){"use strict";var i=n("0bfb"),o=RegExp.prototype.exec,r=String.prototype.replace,s=o,a="lastIndex",c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[a]||0!==t[a]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(s=function(e){var t,n,s,l,g=this;return u&&(n=new RegExp("^"+g.source+"$(?!\\s)",i.call(g))),c&&(t=g[a]),s=o.call(g,e),c&&s&&(g[a]=g.global?s.index+s[0].length:t),u&&s&&s.length>1&&r.call(s[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,n){"use strict";var i=n("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var r=n.call(e,t);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"6b54":function(e,t,n){"use strict";n("3846");var i=n("cb7c"),o=n("0bfb"),r=n("9e1e"),s="toString",a=/./[s],c=function(e){n("2aba")(RegExp.prototype,s,e,!0)};n("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?c(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?o.call(e):void 0)}):a.name!=s&&c(function(){return a.call(this)})},"8fcf":function(e,t,n){"use strict";n("ac6a"),n("6b54"),n("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let n=10**+t;return Math.round(+e*n)/n},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},a481:function(e,t,n){"use strict";var i=n("cb7c"),o=n("4bf8"),r=n("9def"),s=n("4588"),a=n("0390"),c=n("5f1b"),u=Math.max,l=Math.min,g=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,d=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,function(e,t,n,p){return[function(i,o){var r=e(this),s=void 0==i?void 0:i[t];return void 0!==s?s.call(i,r,o):n.call(String(r),i,o)},function(e,t){var o=p(n,e,this,t);if(o.done)return o.value;var g=i(e),f=String(this),h="function"===typeof t;h||(t=String(t));var _=g.global;if(_){var b=g.unicode;g.lastIndex=0}var v=[];while(1){var k=c(g,f);if(null===k)break;if(v.push(k),!_)break;var w=String(k[0]);""===w&&(g.lastIndex=a(f,r(g.lastIndex),b))}for(var y="",x=0,O=0;O<v.length;O++){k=v[O];for(var C=String(k[0]),j=u(l(s(k.index),f.length),0),S=[],D=1;D<k.length;D++)S.push(d(k[D]));var $=k.groups;if(h){var E=[C].concat(S,j,f);void 0!==$&&E.push($);var F=String(t.apply(void 0,E))}else F=m(C,f,j,S,$,t);j>=x&&(y+=f.slice(x,j)+F,x=j+C.length)}return y+f.slice(x)}];function m(e,t,i,r,s,a){var c=i+e.length,u=r.length,l=h;return void 0!==s&&(s=o(s),l=f),n.call(a,l,function(n,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(c);case"<":a=s[o.slice(1,-1)];break;default:var l=+o;if(0===l)return n;if(l>u){var f=g(l/10);return 0===f?n:f<=u?void 0===r[f-1]?o.charAt(1):r[f-1]+o.charAt(1):n}a=r[l-1]}return void 0===a?"":a})}})},b0c5:function(e,t,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})}}]);
//# sourceMappingURL=mek_build-config.778e48f1.js.map