(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-melee-entangle-range"],{"0874":function(e,t,i){"use strict";i("6b54"),i("a481"),i("ac6a");function a(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];return i.forEach(t=>{for(let i in t)t.hasOwnProperty(i)&&(e[i]=t[i])}),e}let s={};var n={name:"fa-icon",render(e){if(null===this.name)return e();let t={class:this.klass,style:this.style,attrs:{role:this.label?"img":"presentation","aria-label":this.label||null,tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}};return this.raw&&(t.domProps={innerHTML:this.raw}),e("svg",t,this.raw&&this.icon?null:this.$slots.default||[...this.icon.paths.map((t,i)=>e("path",{attrs:t,key:`path-${i}`})),...this.icon.polygons.map((t,i)=>e("polygon",{attrs:t,key:`polygon-${i}`}))])},props:{name:{type:String,validator(e){return!e||e in s||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${e}".`+"\nPlease make sure you have imported this icon before using it."),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator(e){return"horizontal"===e||"vertical"===e}},label:String,tabindex:[Number,String]},data(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale(){let e=this.scale;return e="undefined"===typeof e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse,[this.$options.name]:!0}},icon(){return this.name?s[this.name]:null},box(){return this.icon?`0 0 ${this.icon.width} ${this.icon.height}`:`0 0 ${this.width} ${this.height}`},ratio(){if(!this.icon)return 1;let e=this.icon,t=e.width,i=e.height;return Math.max(t,i)/16},width(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw(){if(!this.icon||!this.icon.raw)return null;let e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(e,i,a)=>{let s=l();return t[a]=s,` id="${s}"`}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(e,i,a,s)=>{let n=i||s;return n&&t[n]?`#${t[n]}`:e}),e},focusable(){let e=this.tabindex;if(null==e)return"false";let t="string"===typeof e?parseInt(e,10):e;return t>=0?null:"false"}},mounted(){if(!this.name&&null!==this.name&&0===this.$children.length)return void console.warn('Invalid prop: prop "name" is required.');if(this.icon)return;let e=0,t=0;this.$children.forEach(i=>{i.outerScale=this.normalizedScale,e=Math.max(e,i.width),t=Math.max(t,i.height)}),this.childrenWidth=e,this.childrenHeight=t,this.$children.forEach(i=>{i.x=(e-i.width)/2,i.y=(t-i.height)/2})},register(e){for(let t in e){let i=e[t],n=i.paths,r=void 0===n?[]:n,l=i.d,h=i.polygons,o=void 0===h?[]:h,d=i.points;l&&r.push({d:l}),d&&o.push({points:d}),s[t]=a({},i,{paths:r,polygons:o})}},icons:s};let r=870711;function l(){return`fa-${(r++).toString(16)}`}var h,o,d=n,c=(i("df9a"),i("2877")),m=Object(c["a"])(d,h,o,!1,null,null,null);t["a"]=m.exports},"08d1":function(e,t,i){"use strict";var a=i("200a"),s=i.n(a);s.a},"200a":function(e,t,i){},aa2b:function(e,t,i){"use strict";var a=i("0874");a["a"].register({"plus-square":{width:448,height:512,paths:[{d:"M400 32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352zM368 284v-56c0-6.6-5.4-12-12-12h-92v-92c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12v92h-92c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h92v92c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-92h92c6.6 0 12-5.4 12-12z"}]}})},c433:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"mek-flex-col"},[i("div",{staticClass:"metallic_background_small"},[i("div",{staticClass:"subsection_container",on:{mousedown:function(e){return e.preventDefault()}}},[i("div",{staticClass:"subsection_header_small"},[e._v("Entangle Range")]),i("div",[i("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(t){return e.incrementProperty("damage")}}},[i("v-icon",{attrs:{name:"plus-square"}})],1),e._v("\n                Damage: "+e._s(e.new_damage)+" | Range: "+e._s(e.checked_modifier.range)+"\n                "),i("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(t){return e.incrementProperty("range")}}},[i("v-icon",{attrs:{name:"plus-square"}})],1)])])])])},s=[],n=(i("ac6a"),i("8fcf")),r=i("d866");let l=(e,t,i)=>{let a=!1,s=0,n=0,r=[],l=JSON.stringify({base_damage:e,range_mod:t,damage_mod:i});switch(!0){case t-i!==0:case t<0:case i<0:case e-i<0:r.push("Mek_Melee-Entangle-Range: "+l),alert.push("**** Invalid data. Reseting. ****"),a=!0;break;default:s=t,n=i}let h=e-n;return{update:a,range_mod:s,damage_mod:n,alerts:r,damage:h}};i("aa2b");var h=i("0874"),o={name:"mek_melee_entangle_range",mixins:[n["a"],r["a"]],props:["base_damage","range_modifier","damage_modifier"],components:{"v-icon":h["a"]},data:function(){let e={selected_modifier:{}};return e.selected_modifier.range=0,e.selected_modifier.damage=0,e.suppressAlerts=!1,e.alerts=[],e.new_damage=0,e},methods:{selectDamageAndRange(){this.$emit("update-damage-and-range",this.selected_modifier)},incrementProperty(e){let t="range"==e?this.selected_modifier.range+1:this.selected_modifier.range-1,i="damage"==e?this.selected_modifier.damage-1:this.selected_modifier.damage+1,a=l(this.base_damage,t,i);this.selected_modifier.range=a.range_mod,this.selected_modifier.damage=a.damage_mod,this.new_damage=a.damage,this.selectDamageAndRange()}},computed:{checked_modifier(){let e=l(this.base_damage,this.range_modifier,this.damage_modifier);return this.selected_modifier.range=e.range_mod,this.selected_modifier.damage=e.damage_mod,e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.selectDamageAndRange()),this.new_damage=e.damage,{range:this.selected_modifier.range,damage:this.selected_modifier.damage}}}},d=o,c=(i("08d1"),i("2877")),m=Object(c["a"])(d,a,s,!1,null,"35eb0fc1",null);t["default"]=m.exports},d866:function(e,t,i){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},dbf1:function(e,t,i){},df9a:function(e,t,i){"use strict";var a=i("dbf1"),s=i.n(a);s.a}}]);
//# sourceMappingURL=mek-melee-entangle-range.c1440b1c.js.map