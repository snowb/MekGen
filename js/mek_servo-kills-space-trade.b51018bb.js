(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-kills-space-trade"],{"0874":function(e,i,t){"use strict";t("6b54"),t("a481"),t("ac6a");function s(e){for(var i=arguments.length,t=new Array(i>1?i-1:0),s=1;s<i;s++)t[s-1]=arguments[s];return t.forEach(i=>{for(let t in i)i.hasOwnProperty(t)&&(e[t]=i[t])}),e}let l={};var a={name:"fa-icon",render(e){if(null===this.name)return e();let i={class:this.klass,style:this.style,attrs:{role:this.label?"img":"presentation","aria-label":this.label||null,tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}};return this.raw&&(i.domProps={innerHTML:this.raw}),e("svg",i,this.raw&&this.icon?null:this.$slots.default||[...this.icon.paths.map((i,t)=>e("path",{attrs:i,key:`path-${t}`})),...this.icon.polygons.map((i,t)=>e("polygon",{attrs:i,key:`polygon-${t}`}))])},props:{name:{type:String,validator(e){return!e||e in l||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${e}".`+"\nPlease make sure you have imported this icon before using it."),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator(e){return"horizontal"===e||"vertical"===e}},label:String,tabindex:[Number,String]},data(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale(){let e=this.scale;return e="undefined"===typeof e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse,[this.$options.name]:!0}},icon(){return this.name?l[this.name]:null},box(){return this.icon?`0 0 ${this.icon.width} ${this.icon.height}`:`0 0 ${this.width} ${this.height}`},ratio(){if(!this.icon)return 1;let e=this.icon,i=e.width,t=e.height;return Math.max(i,t)/16},width(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw(){if(!this.icon||!this.icon.raw)return null;let e=this.icon.raw,i={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(e,t,s)=>{let l=n();return i[s]=l,` id="${l}"`}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(e,t,s,l)=>{let a=t||l;return a&&i[a]?`#${i[a]}`:e}),e},focusable(){let e=this.tabindex;if(null==e)return"false";let i="string"===typeof e?parseInt(e,10):e;return i>=0?null:"false"}},mounted(){if(!this.name&&null!==this.name&&0===this.$children.length)return void console.warn('Invalid prop: prop "name" is required.');if(this.icon)return;let e=0,i=0;this.$children.forEach(t=>{t.outerScale=this.normalizedScale,e=Math.max(e,t.width),i=Math.max(i,t.height)}),this.childrenWidth=e,this.childrenHeight=i,this.$children.forEach(t=>{t.x=(e-t.width)/2,t.y=(i-t.height)/2})},register(e){for(let i in e){let t=e[i],a=t.paths,r=void 0===a?[]:a,n=t.d,o=t.polygons,c=void 0===o?[]:o,h=t.points;n&&r.push({d:n}),h&&c.push({points:h}),l[i]=s({},t,{paths:r,polygons:c})}},icons:l};let r=870711;function n(){return`fa-${(r++).toString(16)}`}var o,c,h=a,d=(t("df9a"),t("2877")),p=Object(d["a"])(h,o,c,!1,null,null,null);i["a"]=p.exports},"1a2e":function(e,i,t){},"1d40":function(e,i,t){"use strict";var s=t("1a2e"),l=t.n(s);l.a},"8c50":function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("span",{staticClass:"mek-flex-col"},[t("div",{staticClass:"metallic_background_small1"},[t("div",{staticClass:"subsection_container1",on:{mousedown:function(e){return e.preventDefault()}}},[t("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.title))]),t("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.title))]),t("div",[t("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(i){return e.incrementProperty("kills")}}},[t("v-icon",{attrs:{name:"plus-square"}})],1),e._v("\n                Kills: "+e._s(e.checked_modifiers.kills)+" | Space"+e._s(e.checked_modifiers.space>1?"s":"")+": "+e._s(e.checked_modifiers.space)+"\n                "),t("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(i){return e.incrementProperty("space")}}},[t("v-icon",{attrs:{name:"plus-square"}})],1)])])])])},l=[],a=t("8fcf"),r=t("d866");let n=function(e,i,t){let s={kills_modifier:0,space_modifier:0,cost:0};s.kills=void 0!==i?i:2,s.space=void 0!==t?t:2;let l=[],a=!0;if(void 0===i&&(l.push("Mek_Servo-Kills-Space-Trade:"),l.push("**** Missing Base Kills, reseting to 2."),a=!0),void 0===t&&(l.push("Mek_Servo-Kills-Space-Trade:"),l.push("**** Missing Base Space, reseting to 2."),a=!0),void 0===e.kills||void 0===e.space||void 0===e.cost)return l.push("Mek_Servo-Kills-Space-Trade:"),l.push("**** Missing values, reseting to 0."),a=!0,{data:s,update:a,alerts:l};s.kills_modifier=e.kills,s.space_modifier=e.space,s.cost=e;let r=i+s.kills_modifier,n=t+s.space_modifier;switch(!0){case r<=0:case n<0:case 2*s.kills_modifier+s.space_modifier!==0:l.push("Mek_Servo-Kills-Space-Trade:"),l.push("**** Invalid values, reseting to 0."),s.kills_modifier=0,s.space_modifier=0,s.cost=0,a=!0;break}return s.cost=s.kills_modifier>0?2*s.kills_modifier:0,s.kills=s.kills+s.kills_modifier,s.space=s.space+s.space_modifier,{data:s,update:a,alerts:l}};t("aa2b");var o=t("0874"),c={name:"mek_servo_kills_space_trade",mixins:[a["a"],r["a"]],props:["base_kills","space_modifier","kills_modifier","base_space"],components:{"v-icon":o["a"]},data:function(){let e={selected_modifier:{}};return e.selected_modifier.kills=0,e.selected_modifier.space=0,e.selected_modifier.cost=0,e.alerts=[],e},methods:{selectExtraSpace(){this.$emit("update-extra-space",this.selected_modifier)},incrementProperty(e){this.selected_modifier.kills="kills"==e?this.selected_modifier.kills+1:this.selected_modifier.kills-1,this.selected_modifier.space="space"==e?this.selected_modifier.space+2:this.selected_modifier.space-2;let i=n(this.selected_modifier,this.base_kills,this.base_space);this.selected_modifier.kills=i.data.kills_modifier,this.selected_modifier.space=i.data.space_modifier,this.selected_modifier.cost=i.data.cost,this.publishAlerts(),this.selectExtraSpace()}},computed:{checked_modifiers(){this.selected_modifier.kills=this.kills_modifier,this.selected_modifier.space=this.space_modifier;let e=n(this.selected_modifier,this.base_kills,this.base_space);return e.update&&(this.selected_modifier.kills=e.data.kills_modifier,this.selected_modifier.space=e.data.space_modifier,this.selected_modifier.cost=e.data.cost,this.publishAlerts()),{kills:e.data.kills,space:e.data.space}},title(){switch(!0){case this.selected_modifier.kills<0:return"Extra Space";case this.selected_modifier.kills>0:return"Reinforced Servo"}return"Kill/Space Trade"}}},h=c,d=(t("1d40"),t("2877")),p=Object(d["a"])(h,s,l,!1,null,"5755772a",null);i["default"]=p.exports},aa2b:function(e,i,t){"use strict";var s=t("0874");s["a"].register({"plus-square":{width:448,height:512,paths:[{d:"M400 32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352zM368 284v-56c0-6.6-5.4-12-12-12h-92v-92c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12v92h-92c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h92v92c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-92h92c6.6 0 12-5.4 12-12z"}]}})},d866:function(e,i,t){"use strict";i["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},dbf1:function(e,i,t){},df9a:function(e,i,t){"use strict";var s=t("dbf1"),l=t.n(s);l.a}}]);
//# sourceMappingURL=mek_servo-kills-space-trade.b51018bb.js.map