(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-main"],{"02f4":function(e,t,s){var o=s("4588"),r=s("be13");e.exports=function(e){return function(t,s){var n,i,a=String(r(t)),l=o(s),c=a.length;return l<0||l>=c?e?"":void 0:(n=a.charCodeAt(l),n<55296||n>56319||l+1===c||(i=a.charCodeAt(l+1))<56320||i>57343?e?a.charAt(l):n:e?a.slice(l,l+2):i-56320+(n-55296<<10)+65536)}}},"0390":function(e,t,s){"use strict";var o=s("02f4")(!0);e.exports=function(e,t,s){return t+(s?o(e,t).length:1)}},"0bfb":function(e,t,s){"use strict";var o=s("cb7c");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,s){"use strict";s("b0c5");var o=s("2aba"),r=s("32e9"),n=s("79e5"),i=s("be13"),a=s("2b4c"),l=s("520a"),c=a("species"),p=!n(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),_=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var s="ab".split(e);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();e.exports=function(e,t,s){var d=a(e),u=!n(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),m=u?!n(function(){var t=!1,s=/a/;return s.exec=function(){return t=!0,null},"split"===e&&(s.constructor={},s.constructor[c]=function(){return s}),s[d](""),!t}):void 0;if(!u||!m||"replace"===e&&!p||"split"===e&&!_){var h=/./[d],f=s(i,d,""[e],function(e,t,s,o,r){return t.exec===l?u&&!r?{done:!0,value:h.call(t,s,o)}:{done:!0,value:e.call(s,t,o)}:{done:!1}}),v=f[0],g=f[1];o(String.prototype,e,v),r(RegExp.prototype,d,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"23c6":function(e,t,s){var o=s("2d95"),r=s("2b4c")("toStringTag"),n="Arguments"==o(function(){return arguments}()),i=function(e,t){try{return e[t]}catch(s){}};e.exports=function(e){var t,s,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(s=i(t=Object(e),r))?s:n?o(t):"Object"==(a=o(t))&&"function"==typeof t.callee?"Arguments":a}},3846:function(e,t,s){s("9e1e")&&"g"!=/./g.flags&&s("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:s("0bfb")})},"520a":function(e,t,s){"use strict";var o=s("0bfb"),r=RegExp.prototype.exec,n=String.prototype.replace,i=r,a="lastIndex",l=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[a]||0!==t[a]}(),c=void 0!==/()??/.exec("")[1],p=l||c;p&&(i=function(e){var t,s,i,p,_=this;return c&&(s=new RegExp("^"+_.source+"$(?!\\s)",o.call(_))),l&&(t=_[a]),i=r.call(_,e),l&&i&&(_[a]=_.global?i.index+i[0].length:t),c&&i&&i.length>1&&n.call(i[0],s,function(){for(p=1;p<arguments.length-2;p++)void 0===arguments[p]&&(i[p]=void 0)}),i}),e.exports=i},"5f1b":function(e,t,s){"use strict";var o=s("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var s=e.exec;if("function"===typeof s){var n=s.call(e,t);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==o(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"6b54":function(e,t,s){"use strict";s("3846");var o=s("cb7c"),r=s("0bfb"),n=s("9e1e"),i="toString",a=/./[i],l=function(e){s("2aba")(RegExp.prototype,i,e,!0)};s("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?l(function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!n&&e instanceof RegExp?r.call(e):void 0)}):a.name!=i&&l(function(){return a.call(this)})},"7b4b":function(e,t,s){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,s){return e+=s>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,s){"use strict";s("ac6a"),s("6b54"),s("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let s=10**+t;return Math.round(+e*s)/s},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},"93db":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.servo_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("span",{staticClass:"mek-inline-flex-row"},[s("span",{staticClass:"mek-inline-flex-col"},[s("mek-servo-type",{staticStyle:{"align-self":"flex-start"},attrs:{"servo-type":e.selected_servo_type},on:{"update-servo-type":e.updateServoType,"alert-generated":e.handleAlert}}),s("mek-servo-kills-space-trade",{staticStyle:{"align-self":"baseline"},attrs:{base_kills:e.selected_servo_class.kills,kills_modifier:e.kills_space_trade.kills_modifier,space_modifier:e.kills_space_trade.space_modifier,base_space:e.selected_servo_class.space},on:{"update-extra-space":e.updateExtraSpace,"alert-generated":e.handleAlert}})],1),s("mek-servo-class",{attrs:{"servo-type":e.selected_servo_type.type,"servo-class":e.selected_servo_class},on:{"update-servo-class":e.updateServoClass,"alert-generated":e.handleAlert}}),s("mek-armor",{attrs:{armor:e.selected_armor,"max-armor":e.selected_servo_class.code+2},on:{"update-armor":e.updateArmor,"alert-generated":e.handleAlert}}),s("span",{staticClass:"mek-inline-flex-col"},[0!=e.selected_armor.cost?s("mek-armor-type",{attrs:{"armor-type":e.selected_armor_type},on:{"update-armor-type":e.updateArmorType,"alert-generated":e.handleAlert}}):e._e(),0!=e.selected_armor.cost?s("mek-armor-ram",{attrs:{absorption:e.selected_absorption},on:{"update-absorption":e.updateAbsorption,"alert-generated":e.handleAlert}}):e._e()],1)],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:6}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Base Kills: "+e._s(e.selected_servo_class.kills))]),s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Total Kills: "+e._s(e.total_kills))]),0!=e.selected_armor.cost?s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Base Armor Stopping Power: "+e._s(e.round(e.selected_armor.stopping_power,2))+"\n                "),s("br"),e._v("Final Stopping Power: "+e._s(e.round(e.final_stopping_power,2))+"\n            ")]):e._e(),0!=e.selected_armor.cost?s("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Armor Type: "+e._s(e.selected_armor_type.type))]):e._e(),0!=e.selected_armor.cost?s("div",{staticStyle:{"padding-left":"10px"},attrs:{slot:"col1-row5"},slot:"col1-row5"},[e._v("Damage Coefficient: "+e._s(e.selected_armor_type.damage_coefficient))]):e._e(),1!=e.selected_absorption.cost?s("div",{attrs:{slot:"col1-row6"},slot:"col1-row6"},[e._v("Absorption: "+e._s(100*e.selected_absorption.absorption)+"%")]):e._e(),e.is_arm|e.is_leg?s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Damage Bonus: "+e._s(e.selected_servo_class.damage_bonus))]):e._e(),e.is_arm?s("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Throw Range: "+e._s(e.selected_servo_class.throw_range))]):e._e(),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.selected_servo_class.space))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Available Space: "+e._s(e.available_space))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.weight)+" tons")]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.base_cost))]),s("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},r=[],n=(s("a481"),s("8fcf")),i=s("f52e"),a=s("7b4b"),l={name:"mek_servo",props:[],mixins:[n["a"],i["a"],a["a"]],components:{"mek-servo-type":()=>s.e("mek_servo-type").then(s.bind(null,"1d91")),"mek-servo-class":()=>s.e("mek_servo-class").then(s.bind(null,"9509")),"mek-servo-kills-space-trade":()=>s.e("mek_servo-kills-space-trade").then(s.bind(null,"8c50")),"mek-component-name":()=>s.e("mek-component-name").then(s.bind(null,"dba3")),"mek-save-reset-component":()=>s.e("mek-save-reset-component").then(s.bind(null,"c342")),"mek-component-stats":()=>s.e("mek_component-stats").then(s.bind(null,"67b1")),"mek-armor":()=>s.e("mek_armor").then(s.bind(null,"68cb")),"mek-armor-type":()=>s.e("mek_armor-type").then(s.bind(null,"e4ac")),"mek-armor-ram":()=>s.e("mek_armor-RAM").then(s.bind(null,"592e"))},data:function(){let e={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"servo",original_component:null,component_changed:!0,selected_servo_type:{type:"Torso"},selected_servo_class:{code:1,name:"Superlight",space:2,cost:2,kills:2,id:"SL"},cost_multipliers:{},selected_armor:{name:"None",cost:0,stopping_power:0,code:0},selected_armor_type:{type:"Standard",damage_coefficient:1,cost:1}};return e.cost_multipliers.armor_type=1,e.selected_absorption={absorption:0,cost:1,armor_penalty:0},e.cost_multipliers.absorption=1,e.kills_space_trade={},e.kills_space_trade.space_modifier=0,e.kills_space_trade.kills_modifier=0,e.kills_space_trade.cost=0,e.hasAlert=!1,e},methods:{updateComponentName(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},updateServoType(e){this.component_type=e.type,this.$set(this,"selected_servo_type",e),this.component_changed=!0},updateServoClass(e){this.$set(this,"selected_servo_class",e),this.component_changed=!0},updateArmor(e){this.$set(this,"selected_armor",e),this.component_changed=!0,0==e.stopping_power&&(this.updateAbsorption({absorption:0,cost:1,armor_penalty:0}),this.updateArmorType({type:"Standard",damage_coefficient:1,cost:1}))},updateArmorType(e){this.$set(this,"selected_armor_type",JSON.parse(JSON.stringify(e))),this.cost_multipliers.armor_type=this.selected_armor_type.cost,this.component_changed=!0},updateAbsorption(e){this.$set(this,"selected_absorption",JSON.parse(JSON.stringify(e))),this.cost_multipliers.absorption=this.selected_absorption.cost,this.component_changed=!0},updateExtraSpace(e){this.kills_space_trade.space_modifier=e.space,this.kills_space_trade.kills_modifier=e.kills,this.kills_space_trade.cost=e.cost,this.component_changed=!0},ingest_data(e){let t="Torso bad, resetting to 'standard' shield.";this.universal_ingest_data(e,t),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=this.hasAlert})},output_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="servo",e.component_name=null===this.component_name?this.servo_name:this.component_name,e.custom_component_name=this.custom_component_name,e.selected_servo_type=JSON.parse(JSON.stringify(this.selected_servo_type)),e.selected_servo_class=JSON.parse(JSON.stringify(this.selected_servo_class)),e.selected_armor=JSON.parse(JSON.stringify(this.selected_armor)),e.selected_armor_type=JSON.parse(JSON.stringify(this.selected_armor_type)),e.selected_absorption=JSON.parse(JSON.stringify(this.selected_absorption)),e.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers)),e.kills_space_trade=JSON.parse(JSON.stringify(this.kills_space_trade)),e.cost=this.cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.total_kills=this.total_kills,e.available_space=this.available_space,this.$nextTick(()=>{this.component_changed=this.hasAlert}),this.original_component=JSON.stringify(e),e},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.selected_servo_type.type="Torso",this.$set(this,"selected_servo_class",{code:1,name:"Superlight",space:2,cost:2,kills:2}),this.$set(this,"selected_armor",{name:"None",cost:0,stopping_power:0,code:0}),this.$set(this,"selected_armor_type",{type:"Standard",damage_coefficient:1,cost:1}),this.cost_multipliers.armor_type=1,this.$set(this,"selected_absorption",{absorption:0,cost:1,armor_penalty:0}),this.cost_multipliers.absorption=1,this.$set(this,"kills_space_trade",{space_modifier:0,kills_modifier:0,cost:0}),this.component_name=null,this.$store.commit("saveComponent",null);break}},handleAlert(e){this.hasAlert=e}},computed:{servo_name(){let e=this.selected_servo_type.type,t=this.selected_servo_class.name,s=this.kills_space_trade.kills_modifier>0?" Reinforced ":"",o=this.selected_armor_type.type,r=this.selected_armor.cost>0&&1==this.selected_armor_type.cost?" Armored ":this.selected_armor.cost>0&&1!=this.selected_armor_type.cost?" "+o+"-Armored ":"",n=this.selected_absorption.cost>1?" Absorbing ":"",i=""!=s||this.selected_armor.cost>0?" - ":"",a=e+" "+t+" Servo"+i+s+n+r;return a=a.trim(),a=a.replace(/\s+/gi," "),a},base_cost(){return this.selected_servo_class.cost+this.selected_armor.cost+this.kills_space_trade.cost},cost(){return this.selected_servo_class.cost+this.selected_armor.cost*this.cost_multiplier+this.kills_space_trade.cost},available_space(){return this.selected_servo_class.space+this.kills_space_trade.space_modifier},damage_capacity(){let e=this.selected_servo_class.kills,t=this.kills_space_trade.kills_modifier;return e+this.final_stopping_power+t},total_kills(){return this.selected_servo_class.kills+this.kills_space_trade.kills_modifier},weight(){return this.round(this.damage_capacity/2,2)},final_stopping_power(){return this.selected_armor.stopping_power-this.selected_armor.stopping_power*this.selected_absorption.armor_penalty},is_arm(){return"arm"==this.selected_servo_type.type.toLowerCase()},is_leg(){return"leg"==this.selected_servo_type.type.toLowerCase()}}},c=l,p=s("2877"),_=Object(p["a"])(c,o,r,!1,null,null,null);t["default"]=_.exports},a481:function(e,t,s){"use strict";var o=s("cb7c"),r=s("4bf8"),n=s("9def"),i=s("4588"),a=s("0390"),l=s("5f1b"),c=Math.max,p=Math.min,_=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,u=/\$([$&`']|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};s("214f")("replace",2,function(e,t,s,h){return[function(o,r){var n=e(this),i=void 0==o?void 0:o[t];return void 0!==i?i.call(o,n,r):s.call(String(n),o,r)},function(e,t){var r=h(s,e,this,t);if(r.done)return r.value;var _=o(e),d=String(this),u="function"===typeof t;u||(t=String(t));var v=_.global;if(v){var g=_.unicode;_.lastIndex=0}var y=[];while(1){var b=l(_,d);if(null===b)break;if(y.push(b),!v)break;var k=String(b[0]);""===k&&(_.lastIndex=a(d,n(_.lastIndex),g))}for(var w="",S=0,x=0;x<y.length;x++){b=y[x];for(var A=String(b[0]),N=c(p(i(b.index),d.length),0),$=[],O=1;O<b.length;O++)$.push(m(b[O]));var J=b.groups;if(u){var C=[A].concat($,N,d);void 0!==J&&C.push(J);var R=String(t.apply(void 0,C))}else R=f(A,d,N,$,J,t);N>=S&&(w+=d.slice(S,N)+R,S=N+A.length)}return w+d.slice(S)}];function f(e,t,o,n,i,a){var l=o+e.length,c=n.length,p=u;return void 0!==i&&(i=r(i),p=d),s.call(a,p,function(s,r){var a;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,o);case"'":return t.slice(l);case"<":a=i[r.slice(1,-1)];break;default:var p=+r;if(0===p)return s;if(p>c){var d=_(p/10);return 0===d?s:d<=c?void 0===n[d-1]?r.charAt(1):n[d-1]+r.charAt(1):s}a=n[p-1]}return void 0===a?"":a})}})},b0c5:function(e,t,s){"use strict";var o=s("520a");s("5ca1")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},f52e:function(e,t,s){"use strict";s("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let s in e)if(!Object.keys(this._computedWatchers).includes(s))if("object"!==typeof e[s]||Array.isArray(e[s]))Array.isArray(e[s]),this.$set(this,s,e[s]);else{"object"===typeof this[s]&&null!==this[s]||(this[s]={});for(let t in e[s])this.$set(this[s],[t],e[s][t])}this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_servo-main.b9601730.js.map