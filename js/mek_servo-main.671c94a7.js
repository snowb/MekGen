(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-main"],{"02f4":function(e,t,s){var r=s("4588"),o=s("be13");e.exports=function(e){return function(t,s){var i,n,a=String(o(t)),c=r(s),l=a.length;return c<0||c>=l?e?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===l||(n=a.charCodeAt(c+1))<56320||n>57343?e?a.charAt(c):i:e?a.slice(c,c+2):n-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,s){"use strict";var r=s("02f4")(!0);e.exports=function(e,t,s){return t+(s?r(e,t).length:1)}},"072f":function(e,t,s){"use strict";t["a"]={methods:{selectedItem:function(e,t,s,r){let o="undefined"===typeof r?"":r;return"undefined"===typeof s?this[e]==t?"selected_item":o:this[e]==t?s:o},selectedItemMultiple:function(e,t,s,r){let o="undefined"===typeof r?"":r;return Array.isArray(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":o:this[e].includes(t)?s:o:""}}}},"0bfb":function(e,t,s){"use strict";var r=s("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,s){"use strict";s("b0c5");var r=s("2aba"),o=s("32e9"),i=s("79e5"),n=s("be13"),a=s("2b4c"),c=s("520a"),l=a("species"),p=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var s="ab".split(e);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();e.exports=function(e,t,s){var _=a(e),u=!i(function(){var t={};return t[_]=function(){return 7},7!=""[e](t)}),m=u?!i(function(){var t=!1,s=/a/;return s.exec=function(){return t=!0,null},"split"===e&&(s.constructor={},s.constructor[l]=function(){return s}),s[_](""),!t}):void 0;if(!u||!m||"replace"===e&&!p||"split"===e&&!d){var h=/./[_],f=s(n,_,""[e],function(e,t,s,r,o){return t.exec===c?u&&!o?{done:!0,value:h.call(t,s,r)}:{done:!0,value:e.call(s,t,r)}:{done:!1}}),v=f[0],g=f[1];r(String.prototype,e,v),o(RegExp.prototype,_,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"23c6":function(e,t,s){var r=s("2d95"),o=s("2b4c")("toStringTag"),i="Arguments"==r(function(){return arguments}()),n=function(e,t){try{return e[t]}catch(s){}};e.exports=function(e){var t,s,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(s=n(t=Object(e),o))?s:i?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},3846:function(e,t,s){s("9e1e")&&"g"!=/./g.flags&&s("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:s("0bfb")})},"3ffa":function(e,t,s){"use strict";t["a"]={data:()=>{return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},"520a":function(e,t,s){"use strict";var r=s("0bfb"),o=RegExp.prototype.exec,i=String.prototype.replace,n=o,a="lastIndex",c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[a]||0!==t[a]}(),l=void 0!==/()??/.exec("")[1],p=c||l;p&&(n=function(e){var t,s,n,p,d=this;return l&&(s=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),c&&(t=d[a]),n=o.call(d,e),c&&n&&(d[a]=d.global?n.index+n[0].length:t),l&&n&&n.length>1&&i.call(n[0],s,function(){for(p=1;p<arguments.length-2;p++)void 0===arguments[p]&&(n[p]=void 0)}),n}),e.exports=n},"5f1b":function(e,t,s){"use strict";var r=s("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var s=e.exec;if("function"===typeof s){var i=s.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"6b54":function(e,t,s){"use strict";s("3846");var r=s("cb7c"),o=s("0bfb"),i=s("9e1e"),n="toString",a=/./[n],c=function(e){s("2aba")(RegExp.prototype,n,e,!0)};s("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?c(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?o.call(e):void 0)}):a.name!=n&&c(function(){return a.call(this)})},"7b4b":function(e,t,s){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,s){return e+=s>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,s){"use strict";s("ac6a"),s("6b54"),s("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let s=10**+t;return Math.round(+e*s)/s},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},a481:function(e,t,s){"use strict";var r=s("cb7c"),o=s("4bf8"),i=s("9def"),n=s("4588"),a=s("0390"),c=s("5f1b"),l=Math.max,p=Math.min,d=Math.floor,_=/\$([$&`']|\d\d?|<[^>]*>)/g,u=/\$([$&`']|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};s("214f")("replace",2,function(e,t,s,h){return[function(r,o){var i=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,i,o):s.call(String(i),r,o)},function(e,t){var o=h(s,e,this,t);if(o.done)return o.value;var d=r(e),_=String(this),u="function"===typeof t;u||(t=String(t));var v=d.global;if(v){var g=d.unicode;d.lastIndex=0}var y=[];while(1){var b=c(d,_);if(null===b)break;if(y.push(b),!v)break;var k=String(b[0]);""===k&&(d.lastIndex=a(_,i(d.lastIndex),g))}for(var w="",S=0,x=0;x<y.length;x++){b=y[x];for(var N=String(b[0]),A=l(p(n(b.index),_.length),0),O=[],$=1;$<b.length;$++)O.push(m(b[$]));var J=b.groups;if(u){var C=[N].concat(O,A,_);void 0!==J&&C.push(J);var M=String(t.apply(void 0,C))}else M=f(N,_,A,O,J,t);A>=S&&(w+=_.slice(S,A)+M,S=A+N.length)}return w+_.slice(S)}];function f(e,t,r,i,n,a){var c=r+e.length,l=i.length,p=u;return void 0!==n&&(n=o(n),p=_),s.call(a,p,function(s,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(c);case"<":a=n[o.slice(1,-1)];break;default:var p=+o;if(0===p)return s;if(p>l){var _=d(p/10);return 0===_?s:_<=l?void 0===i[_-1]?o.charAt(1):i[_-1]+o.charAt(1):s}a=i[p-1]}return void 0===a?"":a})}})},b0c5:function(e,t,s){"use strict";var r=s("520a");s("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},dda4:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.servo_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("span",{staticClass:"mek-inline-flex-row"},[s("span",{staticClass:"mek-inline-flex-col"},[s("mek-servo-type",{staticStyle:{"align-self":"flex-start"},attrs:{"servo-type":e.selected_servo_type},on:{"update-servo-type":e.updateServoType}}),s("mek-servo-kills-space-trade",{staticStyle:{"align-self":"baseline"},attrs:{base_kills:e.selected_servo_class.kills,kills_modifier:e.kills_space_trade.kills_modifier,space_modifier:e.kills_space_trade.space_modifier,base_space:e.selected_servo_class.space},on:{"update-extra-space":e.updateExtraSpace}})],1),s("mek-servo-class",{attrs:{"servo-type":e.selected_servo_type.type,"servo-class":e.selected_servo_class},on:{"update-servo-class":e.updateServoClass}}),s("mek-armor",{attrs:{armor:e.selected_armor,"max-armor":e.selected_servo_class.code+2},on:{"update-armor":e.updateArmor}}),s("span",{staticClass:"mek-inline-flex-col"},[0!=e.selected_armor.cost?s("mek-armor-type",{attrs:{"armor-type":e.selected_armor_type},on:{"update-armor-type":e.updateArmorType}}):e._e(),0!=e.selected_armor.cost?s("mek-energy-absorbing-armor",{attrs:{absorption:e.selected_absorption},on:{"update-absorption":e.updateAbsorption}}):e._e()],1)],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:6}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Base Kills: "+e._s(e.selected_servo_class.kills))]),s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Total Kills: "+e._s(e.total_kills))]),0!=e.selected_armor.cost?s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Base Armor Stopping Power: "+e._s(e.round(e.selected_armor.stopping_power,2))+"\n                "),s("br"),e._v("Final Stopping Power: "+e._s(e.round(e.final_stopping_power,2))+"\n            ")]):e._e(),0!=e.selected_armor.cost?s("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Armor Type: "+e._s(e.selected_armor_type.type))]):e._e(),0!=e.selected_armor.cost?s("div",{staticStyle:{"padding-left":"10px"},attrs:{slot:"col1-row5"},slot:"col1-row5"},[e._v("Damage Coefficient: "+e._s(e.selected_armor_type.damage_coefficient))]):e._e(),1!=e.selected_absorption.cost?s("div",{attrs:{slot:"col1-row6"},slot:"col1-row6"},[e._v("Absorption: "+e._s(100*e.selected_absorption.absorption)+"%")]):e._e(),e.is_arm|e.is_leg?s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Damage Bonus: "+e._s(e.selected_servo_class.damage_bonus))]):e._e(),e.is_arm?s("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Throw Range: "+e._s(e.selected_servo_class.throw_range))]):e._e(),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.selected_servo_class.space))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Available Space: "+e._s(e.available_space))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.weight)+" tons")]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.base_cost))]),s("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},o=[],i=(s("a481"),s("3ffa")),n=s("072f"),a=s("8fcf"),c=s("f52e"),l=s("7b4b"),p={name:"mek_servo",props:[],mixins:[i["a"],n["a"],a["a"],c["a"],l["a"]],components:{"mek-servo-type":()=>s.e("mek_servo-type").then(s.bind(null,"601d")),"mek-servo-class":()=>s.e("mek_servo-class").then(s.bind(null,"de38")),"mek-servo-kills-space-trade":()=>s.e("mek_servo-kills-space-trade").then(s.bind(null,"58ff")),"mek-component-name":()=>s.e("mek-component-name").then(s.bind(null,"192f")),"mek-save-reset-component":()=>s.e("mek-save-reset-component").then(s.bind(null,"c849")),"mek-component-stats":()=>s.e("mek-component-stats").then(s.bind(null,"d854")),"mek-armor":()=>s.e("mek_armor").then(s.bind(null,"b02b")),"mek-armor-type":()=>s.e("mek_armor-type").then(s.bind(null,"5bb4")),"mek-energy-absorbing-armor":()=>s.e("mek_energy-absorbing-armor").then(s.bind(null,"178d"))},data:function(){let e={uuid:null,component_name:null,component_category:"equipment",component_type:"servo",original_component:null,component_changed:!0,selected_servo_type:{type:"Torso"},selected_servo_class:{code:1,name:"Superlight",space:2,cost:2,kills:2},cost_multipliers:{},selected_armor:{name:"None",cost:0,stopping_power:0},selected_armor_type:{type:"Standard",damage_coefficient:1,cost:1}};return e.cost_multipliers.armor_type=1,e.selected_absorption={absorption:0,cost:1,armor_penalty:1},e.cost_multipliers.absorption=1,e.kills_space_trade={},e.kills_space_trade.space_modifier=0,e.kills_space_trade.kills_modifier=0,e.kills_space_trade.cost=0,e},methods:{updateServoType(e){this.component_type=e.type,this.$set(this,"selected_servo_type",e)},updateServoClass(e){this.$set(this,"selected_servo_class",e)},updateArmor(e){this.$set(this,"selected_armor",e)},updateArmorType(e){this.$set(this,"selected_armor_type",JSON.parse(JSON.stringify(e))),this.cost_multipliers.armor_type=this.selected_armor_type.cost},updateAbsorption(e){this.$set(this,"selected_absorption",JSON.parse(JSON.stringify(e))),this.cost_multipliers.absorption=this.selected_absorption.cost},updateExtraSpace(e){this.kills_space_trade.space_modifier=e.space,this.kills_space_trade.kills_modifier=e.kills,this.kills_space_trade.cost=e.cost},ingest_data(e){let t="Torso bad, resetting to 'standard' shield.";this.universal_ingest_data(e,t),this.component_name==this.servo_name&&this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=!1})},output_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="servo",e.component_name=null===this.component_name?this.servo_name:this.component_name,e.selected_servo_type=JSON.parse(JSON.stringify(this.selected_servo_type)),e.selected_servo_class=JSON.parse(JSON.stringify(this.selected_servo_class)),e.selected_armor=JSON.parse(JSON.stringify(this.selected_armor)),e.selected_armor_type=JSON.parse(JSON.stringify(this.selected_armor_type)),e.selected_absorption=JSON.parse(JSON.stringify(this.selected_absorption)),e.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers)),e.kills_space_trade=JSON.parse(JSON.stringify(this.kills_space_trade)),e.cost=this.cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.total_kills=this.total_kills,e.available_space=this.available_space,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),e},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.selected_servo_type.type="Torso",this.$set(this,"selected_servo_class",{code:1,name:"Superlight",space:2,cost:2,kills:2}),this.$set(this,"selected_armor",{name:"None",cost:0,stopping_power:0}),this.$set(this,"selected_armor_type",{type:"Standard",damage_coefficient:1,cost:1}),this.cost_multipliers.armor_type=1,this.$set(this,"selected_absorption",{absorption:0,cost:1,armor_penalty:1}),this.cost_multipliers.absorption=1,this.$store.commit("saveComponent",null);break}}},computed:{servo_name(){let e=this.selected_servo_type.type,t=this.kills_space_trade.kills_modifier>0?" Reinforced ":"",s=this.selected_armor_type.type,r=this.selected_armor.cost>0&&1==this.selected_armor_type.cost?" Armored ":this.selected_armor.cost>0&&1!=this.selected_armor_type.cost?" "+s+"-Armored ":"",o=this.selected_absorption.cost>1?" Absorbing ":"",i=""!=t||this.selected_armor.cost>0?" - ":"",n=e+" Servo"+i+t+o+r;return n=n.trim(),n=n.replace(/\s+/gi," "),n},base_cost(){return this.selected_servo_class.cost+this.selected_armor.cost+this.kills_space_trade.cost},cost(){return this.selected_servo_class.cost+this.selected_armor.cost*this.cost_multiplier+this.kills_space_trade.cost},available_space(){return this.selected_servo_class.space+this.kills_space_trade.space_modifier},damage_capacity(){let e=this.selected_servo_class.kills,t=this.kills_space_trade.kills_modifier;return e+this.final_stopping_power+t},total_kills(){return this.selected_servo_class.kills+this.kills_space_trade.kills_modifier},weight(){return this.round(this.damage_capacity/2,2)},final_stopping_power(){return this.selected_armor.stopping_power-this.selected_armor.stopping_power*this.selected_absorption.armor_penalty},is_arm(){return"arm"==this.selected_servo_type.type.toLowerCase()},is_leg(){return"leg"==this.selected_servo_type.type.toLowerCase()}}},d=p,_=s("2877"),u=Object(_["a"])(d,r,o,!1,null,null,null);t["default"]=u.exports},f52e:function(e,t,s){"use strict";s("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let s in e)if(!Object.keys(this._computedWatchers).includes(s))if("object"!==typeof e[s]||Array.isArray(e[s]))Array.isArray(e[s]),this.$set(this,s,e[s]);else{"object"===typeof this[s]&&null!==this[s]||(this[s]={});for(let t in e[s])this.$set(this[s],[t],e[s][t])}this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0}}}}}]);
//# sourceMappingURL=mek_servo-main.671c94a7.js.map