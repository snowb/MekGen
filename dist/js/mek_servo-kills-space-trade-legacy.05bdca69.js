(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-kills-space-trade","mek_servo-kills-space-trade-data-module"],{"8c50":function(e,i,s){"use strict";s.r(i);var t=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("span",{staticClass:"mek-flex-col"},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1",on:{mousedown:function(e){return e.preventDefault()}}},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.title))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.title))]),s("div",[s("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(i){return e.incrementProperty("kills")}}},[s("v-icon",{attrs:{name:"plus-square"}})],1),e._v("\n                Kills: "+e._s(e.checked_modifiers.kills)+" | Space"+e._s(e.checked_modifiers.space>1?"s":"")+": "+e._s(e.checked_modifiers.space)+"\n                "),s("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(i){return e.incrementProperty("space")}}},[s("v-icon",{attrs:{name:"plus-square"}})],1)])])])])},a=[],c=s("d866"),l=s("f1d4"),r=(s("aa2b"),s("0874")),d={name:"mek_servo_kills_space_trade",mixins:[c["a"]],props:["base_kills","space_modifier","kills_modifier","base_space"],components:{"v-icon":r["a"]},data:function(){var e={selected_modifier:{}};return e.selected_modifier.kills=0,e.selected_modifier.space=0,e.selected_modifier.cost=0,e.alerts=[],e},methods:{selectExtraSpace:function(){this.$emit("update-extra-space",this.selected_modifier)},incrementProperty:function(e){this.selected_modifier.kills="kills"==e?this.selected_modifier.kills+1:this.selected_modifier.kills-1,this.selected_modifier.space="space"==e?this.selected_modifier.space+2:this.selected_modifier.space-2;var i=Object(l["cleaned_feature"])(this.selected_modifier,this.base_kills,this.base_space);this.selected_modifier.kills=i.data.kills_modifier,this.selected_modifier.space=i.data.space_modifier,this.selected_modifier.cost=i.data.cost,this.publishAlerts(),this.selectExtraSpace()}},computed:{checked_modifiers:function(){this.selected_modifier.kills=this.kills_modifier,this.selected_modifier.space=this.space_modifier;var e=Object(l["cleaned_feature"])(this.selected_modifier,this.base_kills,this.base_space);return e.update&&(this.selected_modifier.kills=e.data.kills_modifier,this.selected_modifier.space=e.data.space_modifier,this.selected_modifier.cost=e.data.cost,this.publishAlerts(),this.$emit("alert-generated",!0)),{kills:e.data.kills,space:e.data.space}},title:function(){switch(!0){case this.selected_modifier.kills<0:return"Extra Space";case this.selected_modifier.kills>0:return"Reinforced Servo"}return"Kill/Space Trade"}}},o=d,n=(s("fb6c"),s("2877")),_=Object(n["a"])(o,t,a,!1,null,"289be8fe",null);i["default"]=_.exports},aa2b:function(e,i,s){"use strict";var t=s("0874");t["a"].register({"plus-square":{width:448,height:512,paths:[{d:"M400 32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352zM368 284v-56c0-6.6-5.4-12-12-12h-92v-92c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12v92h-92c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h92v92c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-92h92c6.6 0 12-5.4 12-12z"}]}})},b7b1:function(e,i,s){},f1d4:function(e,i,s){"use strict";s.r(i),s.d(i,"cleaned_feature",function(){return t});var t=function(e,i,s){var t={kills_modifier:0,space_modifier:0,cost:0};t.kills=void 0!==i?i:2,t.space=void 0!==s?s:2;var a=[],c=!0;if(void 0===i&&(a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Missing Base Kills, reseting to 2."),c=!0),void 0===s&&(a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Missing Base Space, reseting to 2."),c=!0),void 0===e.kills||void 0===e.space||void 0===e.cost)return a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Missing values, reseting to 0."),c=!0,{data:t,update:c,alerts:a};t.kills_modifier=e.kills,t.space_modifier=e.space,t.cost=e;var l=i+t.kills_modifier,r=s+t.space_modifier;switch(!0){case l<=0:case r<0:case 2*t.kills_modifier+t.space_modifier!==0:a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Invalid values, reseting to 0."),t.kills_modifier=0,t.space_modifier=0,t.cost=0,c=!0;break}return t.cost=t.kills_modifier>0?2*t.kills_modifier:0,t.kills=t.kills+t.kills_modifier,t.space=t.space+t.space_modifier,{data:t,update:c,alerts:a}}},fb6c:function(e,i,s){"use strict";var t=s("b7b1"),a=s.n(t);a.a}}]);
//# sourceMappingURL=mek_servo-kills-space-trade-legacy.05bdca69.js.map