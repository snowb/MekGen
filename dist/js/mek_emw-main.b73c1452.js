(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-main"],{"02f4":function(e,t,a){var s=a("4588"),n=a("be13");e.exports=function(e){return function(t,a){var i,c,r=String(n(t)),o=s(a),l=r.length;return o<0||o>=l?e?"":void 0:(i=r.charCodeAt(o),i<55296||i>56319||o+1===l||(c=r.charCodeAt(o+1))<56320||c>57343?e?r.charAt(o):i:e?r.slice(o,o+2):c-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var s=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?s(e,t).length:1)}},"0966":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[a("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.emw_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-emw-damage",{attrs:{damage:e.selected_damage,"nv-beam-shield":e.is_nonvariable_beam_shield},on:{"update-damage":e.updateDamage,"alert-generated":e.handleAlert}}),a("mek-emw-accuracy",{attrs:{accuracy:e.selected_accuracy,"is-beam-shield":e.is_beam_shield,"is-variable-beam-shield":e.is_variable_beam_shield},on:{"update-accuracy":e.updateAccuracy,"alert-generated":e.handleAlert}}),a("mek-emw-attack-factor",{attrs:{"attack-factor":e.selected_attack_factor},on:{"update-attack-factor":e.updateAttackFactor,"alert-generated":e.handleAlert}})],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-emw-turns-in-use",{attrs:{"turns-in-use":e.selected_turns_in_use},on:{"update-turns-in-use":e.updateTurnsInUse,"alert-generated":e.handleAlert}}),a("mek-emw-feature",{staticStyle:{"align-self":"start"},attrs:{"feature-array":e.feature_array,"infinite-use":"__INFINITY__"==e.selected_turns_in_use.turns},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}}),a("span",{staticClass:"mek-flex-col no-margin"},[a("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-EMW"},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),a("div",{staticClass:"mek-inline-flex-row"},[a("mek-component-stats",{attrs:{cols:4,rows:3}},[a("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v(e._s(e.is_beam_shield&&!e.is_variable_beam_shield?"Base":"")+" Kills: "+e._s(e.selected_damage.damage)+" K")]),e.is_beam_shield?a("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[a("div",[e._v("Beam Shield Kills: "+e._s(e.beam_shield.damage)+" K")]),a("div",[e._v("Stopping Power: "+e._s(e.beam_shield.stopping_power)+" K")]),a("div",[e._v("Defense Accuracy: "+e._s(e.beam_shield.defense_accuracy))])]):e._e(),a("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),a("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),a("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),a("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),a("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),a("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),a("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),a("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),a("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),a("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},n=[],i=(a("a481"),a("8fcf")),c=a("7b4b"),r=a("f52e"),o={name:"mek_emw",props:[],mixins:[i["a"],c["a"],r["a"]],components:{"mek-emw-damage":()=>a.e("mek_emw-damage").then(a.bind(null,"77d9")),"mek-emw-accuracy":()=>a.e("mek_emw-accuracy").then(a.bind(null,"f278")),"mek-emw-attack-factor":()=>a.e("mek_emw-attack-factor").then(a.bind(null,"b84a")),"mek-emw-turns-in-use":()=>a.e("mek_emw-turns-in-use").then(a.bind(null,"4fd5")),"mek-emw-feature":()=>a.e("mek_emw-feature").then(a.bind(null,"c48b")),"mek-space-efficiency":()=>a.e("mek-space-efficiency").then(a.bind(null,"57c1")),"mek-component-name":()=>a.e("mek-component-name").then(a.bind(null,"dba3")),"mek-save-reset-component":()=>a.e("mek-save-reset-component").then(a.bind(null,"972e")),"mek-component-stats":()=>a.e("mek_component-stats").then(a.bind(null,"67b1"))},data:function(){let e={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"emw",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:1},selected_accuracy:{accuracy:1,cost:1,defense_ability:-1},selected_attack_factor:{attack_factor:"__NIL__",cost:1},selected_turns_in_use:{turns:"__INFINITY__",cost:1},damage_capacity:.25,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.selected_accuracy=1,e.cost_multipliers.feature_array=1,e.cost_multipliers.selected_attack_factor=1,e.cost_multipliers.selected_turns_in_use=1,e.hasAlert=!1,e},methods:{updateComponentName(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=this.round(e.cost/4,2)},updateAccuracy(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.selected_accuracy=e.cost,this.component_changed=!0},updateAttackFactor(e){this.$set(this,"selected_attack_factor",e),this.cost_multipliers.selected_attack_factor=e.cost,this.component_changed=!0},updateTurnsInUse(e){this.$set(this,"selected_turns_in_use",e),this.cost_multipliers.selected_turns_in_use=e.cost,this.component_changed=!0},updateFeature(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature_array=this.feature_array.reduce((e,t)=>{return e*t.cost},1),this.emw_name},output_emw_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="emw",e.component_name=null===this.component_name?this.emw_name:this.component_name,e.custom_component_name=this.custom_component_name,e.cost_multipliers=this.cost_multipliers,e.efficiencies=this.efficiencies,e.selected_damage=this.selected_damage,e.selected_accuracy=this.selected_accuracy,e.selected_turns_in_use=this.selected_turns_in_use,e.selected_attack_factor=this.selected_attack_factor,e.feature_array=this.feature_array,e.cost=this.cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.final_damage=this.final_damage,e.damage_capacity=this.damage_capacity,this.is_beam_shield&&(e.beam_shield=this.beam_shield),this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),JSON.parse(this.original_component)},ingest_data(e){let t="EMW is not valid, resetting.";this.universal_ingest_data(e,t),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=this.hasAlert})},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"new":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_emw_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"new":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"feature_array",[]),this.$set(this,"selected_damage",{damage:1,cost:1}),this.$set(this,"selected_turns_in_use",{turns:"__INFINITY__",cost:1}),this.$set(this,"selected_attack_factor",{attack_factor:"__NIL__",cost:1}),this.$set(this,"selected_accuracy",{accuracy:1,cost:1,defense_ability:-1}),this.cost_multipliers.selected_accuracy=1,this.cost_multipliers.feature_array=1,this.cost_multipliers.selected_attack_factor=1,this.cost_multipliers.selected_turns_in_use=1,this.$store.commit("saveComponent",null);break}},handleAlert(e){this.hasAlert=e}},computed:{raw_space(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){let e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},is_beam_shield(){return this.feature_array.some(e=>{return/beam/gi.test(e.feature)})},is_variable_beam_shield(){return this.feature_array.some(e=>{return/variable beam/gi.test(e.feature)})},is_nonvariable_beam_shield(){return this.is_beam_shield&&!this.is_variable_beam_shield},beam_shield(){if(this.is_beam_shield){let e={};return e.stopping_power=this.selected_damage.cost,e.defense_accuracy=this.selected_accuracy.accuracy-2,e.damage=this.selected_damage.damage,e}return null},emw_name(){let e="__NIL__"!=this.selected_attack_factor.attack_factor?"Automated ":"";return e+=this.selected_damage.damage+"K ",e=this.feature_array.reduce((e,t)=>{return e+t.feature+" "},e),e=this.is_beam_shield?e.replace(/ $/,""):e+"EMW",e}}},l=o,u=a("2877"),_=Object(u["a"])(l,s,n,!1,null,null,null);t["default"]=_.exports},"0bfb":function(e,t,a){"use strict";var s=a("cb7c");e.exports=function(){var e=s(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,a){"use strict";a("b0c5");var s=a("2aba"),n=a("32e9"),i=a("79e5"),c=a("be13"),r=a("2b4c"),o=a("520a"),l=r("species"),u=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),_=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var m=r(e),d=!i(function(){var t={};return t[m]=function(){return 7},7!=""[e](t)}),h=d?!i(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[l]=function(){return a}),a[m](""),!t}):void 0;if(!d||!h||"replace"===e&&!u||"split"===e&&!_){var p=/./[m],f=a(c,m,""[e],function(e,t,a,s,n){return t.exec===o?d&&!n?{done:!0,value:p.call(t,a,s)}:{done:!0,value:e.call(a,t,s)}:{done:!1}}),g=f[0],v=f[1];s(String.prototype,e,g),n(RegExp.prototype,m,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"23c6":function(e,t,a){var s=a("2d95"),n=a("2b4c")("toStringTag"),i="Arguments"==s(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(a){}};e.exports=function(e){var t,a,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=c(t=Object(e),n))?a:i?s(t):"Object"==(r=s(t))&&"function"==typeof t.callee?"Arguments":r}},3846:function(e,t,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"520a":function(e,t,a){"use strict";var s=a("0bfb"),n=RegExp.prototype.exec,i=String.prototype.replace,c=n,r="lastIndex",o=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[r]||0!==t[r]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(c=function(e){var t,a,c,u,_=this;return l&&(a=new RegExp("^"+_.source+"$(?!\\s)",s.call(_))),o&&(t=_[r]),c=n.call(_,e),o&&c&&(_[r]=_.global?c.index+c[0].length:t),l&&c&&c.length>1&&i.call(c[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)}),c}),e.exports=c},"5f1b":function(e,t,a){"use strict";var s=a("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==s(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"6b54":function(e,t,a){"use strict";a("3846");var s=a("cb7c"),n=a("0bfb"),i=a("9e1e"),c="toString",r=/./[c],o=function(e){a("2aba")(RegExp.prototype,c,e,!0)};a("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?o(function(){var e=s(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?n.call(e):void 0)}):r.name!=c&&o(function(){return r.call(this)})},"7b4b":function(e,t,a){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)if("object"===typeof this.cost_multipliers[t])for(let a in this.cost_multipliers[t])e*=this.cost_multipliers[t][a];else e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,a){return e+=a>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,a){"use strict";a("ac6a"),a("6b54"),a("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let a=10**+t;return Math.round(+e*a)/a},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},a481:function(e,t,a){"use strict";var s=a("cb7c"),n=a("4bf8"),i=a("9def"),c=a("4588"),r=a("0390"),o=a("5f1b"),l=Math.max,u=Math.min,_=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,function(e,t,a,p){return[function(s,n){var i=e(this),c=void 0==s?void 0:s[t];return void 0!==c?c.call(s,i,n):a.call(String(i),s,n)},function(e,t){var n=p(a,e,this,t);if(n.done)return n.value;var _=s(e),m=String(this),d="function"===typeof t;d||(t=String(t));var g=_.global;if(g){var v=_.unicode;_.lastIndex=0}var b=[];while(1){var y=o(_,m);if(null===y)break;if(b.push(y),!g)break;var w=String(y[0]);""===w&&(_.lastIndex=r(m,i(_.lastIndex),v))}for(var k="",x=0,$=0;$<b.length;$++){y=b[$];for(var S=String(y[0]),A=l(u(c(y.index),m.length),0),N=[],E=1;E<y.length;E++)N.push(h(y[E]));var C=y.groups;if(d){var I=[S].concat(N,A,m);void 0!==C&&I.push(C);var R=String(t.apply(void 0,I))}else R=f(S,m,A,N,C,t);A>=x&&(k+=m.slice(x,A)+R,x=A+S.length)}return k+m.slice(x)}];function f(e,t,s,i,c,r){var o=s+e.length,l=i.length,u=d;return void 0!==c&&(c=n(c),u=m),a.call(r,u,function(a,n){var r;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,s);case"'":return t.slice(o);case"<":r=c[n.slice(1,-1)];break;default:var u=+n;if(0===u)return a;if(u>l){var m=_(u/10);return 0===m?a:m<=l?void 0===i[m-1]?n.charAt(1):i[m-1]+n.charAt(1):a}r=i[u-1]}return void 0===r?"":r})}})},b0c5:function(e,t,a){"use strict";var s=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},f52e:function(e,t,a){"use strict";a("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e);let a=JSON.parse(this.original_component);null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let s in a)if(!Object.keys(this._computedWatchers).includes(s))if("object"!==typeof a[s]||Array.isArray(a[s]))Array.isArray(a[s]),this.$set(this,s,a[s]);else{"object"===typeof this[s]&&null!==this[s]||(this[s]={});for(let e in a[s])this.$set(this[s],[e],a[s][e])}this.$forceUpdate()},updateComponentName(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_emw-main.b73c1452.js.map