(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-kills-space-trade~f6abbe09","mek_servo-kills-space-trade-data-module~0fc2c5c3"],{"74f5":function(e,i,s){},"7e4c":function(e,i,s){"use strict";var t=s("74f5"),l=s.n(t);l.a},"8c50":function(e,i,s){"use strict";s.r(i);var t=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("span",{staticClass:"mek-flex-col"},[s("div",{staticClass:"metallic_background_small1"},[s("div",{staticClass:"subsection_container1",on:{mousedown:function(e){return e.preventDefault()}}},[s("div",{staticClass:"subsection_header_small1"},[e._v(e._s(e.title))]),s("div",{staticClass:"subsection_hidden_header"},[e._v(e._s(e.title))]),s("div",[s("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(i){return e.incrementProperty("kills")}}},[s("v-icon",{attrs:{name:"plus-square"}})],1),e._v("\n                Kills: "+e._s(e.checked_modifiers.kills)+" | Space"+e._s(e.checked_modifiers.space>1?"s":"")+": "+e._s(e.checked_modifiers.space)+"\n                "),s("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(i){return e.incrementProperty("space")}}},[s("v-icon",{attrs:{name:"plus-square"}})],1)])])])])},l=[],d=(s("ac6a"),s("d866")),r=s("f1d4"),a=(s("aa2b"),s("0874")),c={name:"mek_servo_kills_space_trade",mixins:[d["a"]],props:["base_kills","space_modifier","kills_modifier","base_space"],components:{"v-icon":a["a"]},data:function(){let e={selected_modifier:{}};return e.selected_modifier.kills_modifier=0,e.selected_modifier.space_modifier=0,e.selected_modifier.cost=0,e.selected_modifier.kills=0,e.selected_modifier.space=0,e.alerts=[],e.suppressAlerts=!1,e},methods:{selectExtraSpace(){this.$emit("update-extra-space",this.selected_modifier)},incrementProperty(e){this.selected_modifier.kills_modifier="kills"==e?this.selected_modifier.kills_modifier+1:this.selected_modifier.kills_modifier-1,this.selected_modifier.space_modifier="space"==e?this.selected_modifier.space_modifier+2:this.selected_modifier.space_modifier-2,this.selected_modifier.kills=this.base_kills+this.selected_modifier.kills_modifier,this.selected_modifier.space=this.base_space+this.selected_modifier.space_modifier,this.selected_modifier.cost=this.selected_modifier.kills_modifier>0?2*this.selected_modifier.kills_modifier:0;let i=Object(r["cleaned_feature"])(this.selected_modifier,this.base_kills,this.base_space);this.selected_modifier.kills_modifier=i.data.kills_modifier,this.selected_modifier.space_modifier=i.data.space_modifier,this.selected_modifier.cost=i.data.cost,this.selected_modifier.kills=i.data.kills,this.selected_modifier.space=i.data.space,i.alerts.length>0&&!this.suppressAlerts&&(i.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),this.selectExtraSpace()}},computed:{checked_modifiers(){this.selected_modifier.kills_modifier=this.kills_modifier,this.selected_modifier.space_modifier=this.space_modifier,this.selected_modifier.kills=this.base_kills+this.kills_modifier,this.selected_modifier.space=this.base_space+this.space_modifier,this.selected_modifier.cost=this.selected_modifier.kills_modifier>0?2*this.selected_modifier.kills_modifier:0;let e=Object(r["cleaned_feature"])(this.selected_modifier,this.base_kills,this.base_space);return e.update&&(this.selected_modifier.kills=e.data.kills_modifier,this.selected_modifier.space=e.data.space_modifier,this.selected_modifier.cost=e.data.cost,this.publishAlerts(),this.$emit("alert-generated",!0)),{kills:e.data.kills,space:e.data.space}},title(){switch(!0){case this.selected_modifier.kills<0:return"Extra Space";case this.selected_modifier.kills>0:return"Reinforced Servo"}return"Kill/Space Trade"}}},o=c,_=(s("7e4c"),s("2877")),f=Object(_["a"])(o,t,l,!1,null,"61fdb14a",null);i["default"]=f.exports},f1d4:function(e,i,s){"use strict";s.r(i),s.d(i,"cleaned_feature",function(){return t});let t=function(e,i,s){let t={kills_modifier:0,space_modifier:0,cost:0};t.kills=void 0!==i?i:2,t.space=void 0!==s?s:2;let l=[],d=!1;if(void 0===i&&(l.push("Mek_Servo-Kills-Space-Trade:"),l.push("**** Missing Base Kills, reseting to 2."),d=!0),void 0===s&&(l.push("Mek_Servo-Kills-Space-Trade:"),l.push("**** Missing Base Space, reseting to 2."),d=!0),void 0===e.kills||void 0===e.space||void 0===e.cost)return l.push("Mek_Servo-Kills-Space-Trade:"),l.push("**** Missing values, reseting to 0."),d=!0,{data:t,update:d,alerts:l};t.kills_modifier=e.kills_modifier,t.space_modifier=e.space_modifier,t.cost=e;let r=i+t.kills_modifier,a=s+t.space_modifier;switch(!0){case r<=0:case a<0:case 2*t.kills_modifier+t.space_modifier!==0:l.push("Mek_Servo-Kills-Space-Trade:"),l.push("**** Invalid values, reseting to 0."),t.kills_modifier=0,t.space_modifier=0,t.cost=0,d=!0;break}return t.cost=t.kills_modifier>0?2*t.kills_modifier:0,t.kills=t.kills+t.kills_modifier,t.space=t.space+t.space_modifier,{data:t,update:d,alerts:l}}}}]);