(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee-entangle-range~f6abbe09","mek_melee-entangle-range-data-module~78704949"],{"16c4":function(e,a,t){},"7f4f":function(e,a,t){"use strict";var n=t("16c4"),i=t.n(n);i.a},c433:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"mek-flex-col"},[t("div",{staticClass:"metallic_background_mer"},[t("div",{staticClass:"subsection_container_mer",on:{mousedown:function(e){return e.preventDefault()}}},[t("div",{staticClass:"subsection_header_mer"},[e._v("Entangle Range")]),t("div",[t("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(a){return e.incrementProperty("damage")}}},[t("v-icon",{attrs:{name:"plus-square"}})],1),e._v("\n                Damage: "+e._s(e.new_damage)+" | Range: "+e._s(e.checked_modifier.range)+"\n                "),t("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(a){return e.incrementProperty("range")}}},[t("v-icon",{attrs:{name:"plus-square"}})],1)])])])])},i=[],s=(t("ac6a"),t("d866")),d=t("da12"),r=(t("aa2b"),t("0874")),m={name:"mek_melee_entangle_range",mixins:[s["a"]],props:["base_damage","range_modifier","damage_modifier"],components:{"v-icon":r["a"]},data:function(){let e={selected_modifier:{}};return e.selected_modifier.range=0,e.selected_modifier.damage=0,e.suppressAlerts=!1,e.alerts=[],e.new_damage=0,e},methods:{selectDamageAndRange(){this.$emit("update-damage-and-range",this.selected_modifier)},incrementProperty(e){let a="range"==e?this.selected_modifier.range+1:this.selected_modifier.range-1,t="damage"==e?this.selected_modifier.damage-1:this.selected_modifier.damage+1,n=Object(d["cleaned_feature"])(this.base_damage,a,t);this.selected_modifier.range=n.range_mod,this.selected_modifier.damage=n.damage_mod,this.new_damage=n.damage,this.selectDamageAndRange()}},computed:{checked_modifier(){let e=Object(d["cleaned_feature"])(this.base_damage,this.range_modifier,this.damage_modifier);return this.selected_modifier.range=e.range_mod,this.selected_modifier.damage=e.damage_mod,e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.selectDamageAndRange()),this.new_damage=e.damage,{range:this.selected_modifier.range,damage:this.selected_modifier.damage}}}},c=m,l=(t("7f4f"),t("2877")),g=Object(l["a"])(c,n,i,!1,null,"7078092f",null);a["default"]=g.exports},da12:function(e,a,t){"use strict";t.r(a),t.d(a,"cleaned_feature",function(){return n});let n=(e,a,t)=>{let n=!1,i=0,s=0,d=[],r=JSON.stringify({base_damage:e,range_mod:a,damage_mod:t});switch(!0){case a-t!==0:case a<0:case t<0:case e-t<0:d.push("Mek_Melee-Entangle-Range: "+r),d.push("**** Invalid data. Reseting. ****"),n=!0;break;default:i=a,s=t}let m=e-s;return{update:n,range_mod:i,damage_mod:s,alerts:d,damage:m}}}}]);