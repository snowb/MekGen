(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_melee-entangle-range"],{"16c4":function(e,a,t){},"7f4f":function(e,a,t){"use strict";var i=t("16c4"),n=t.n(i);n.a},aa2b:function(e,a,t){"use strict";var i=t("0874");i["a"].register({"plus-square":{width:448,height:512,paths:[{d:"M400 32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352zM368 284v-56c0-6.6-5.4-12-12-12h-92v-92c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12v92h-92c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h92v92c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-92h92c6.6 0 12-5.4 12-12z"}]}})},c433:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"mek-flex-col"},[t("div",{staticClass:"metallic_background_mer"},[t("div",{staticClass:"subsection_container_mer",on:{mousedown:function(e){return e.preventDefault()}}},[t("div",{staticClass:"subsection_header_mer"},[e._v("Entangle Range")]),t("div",[t("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(a){return e.incrementProperty("damage")}}},[t("v-icon",{attrs:{name:"plus-square"}})],1),e._v("\n                Damage: "+e._s(e.new_damage)+" | Range: "+e._s(e.checked_modifier.range)+"\n                "),t("span",{staticStyle:{"vertical-align":"middle"},on:{click:function(a){return e.incrementProperty("range")}}},[t("v-icon",{attrs:{name:"plus-square"}})],1)])])])])},n=[],s=(t("ac6a"),t("d866")),r=t("f499"),d=t.n(r),c=function(e,a,t){var i=!1,n=0,s=0,r=[],c=d()({base_damage:e,range_mod:a,damage_mod:t});switch(!0){case a-t!==0:case a<0:case t<0:case e-t<0:r.push("Mek_Melee-Entangle-Range: "+c),alert.push("**** Invalid data. Reseting. ****"),i=!0;break;default:n=a,s=t}var m=e-s;return{update:i,range_mod:n,damage_mod:s,alerts:r,damage:m}},m=(t("aa2b"),t("0874")),o={name:"mek_melee_entangle_range",mixins:[s["a"]],props:["base_damage","range_modifier","damage_modifier"],components:{"v-icon":m["a"]},data:function(){var e={selected_modifier:{}};return e.selected_modifier.range=0,e.selected_modifier.damage=0,e.suppressAlerts=!1,e.alerts=[],e.new_damage=0,e},methods:{selectDamageAndRange:function(){this.$emit("update-damage-and-range",this.selected_modifier)},incrementProperty:function(e){var a="range"==e?this.selected_modifier.range+1:this.selected_modifier.range-1,t="damage"==e?this.selected_modifier.damage-1:this.selected_modifier.damage+1,i=c(this.base_damage,a,t);this.selected_modifier.range=i.range_mod,this.selected_modifier.damage=i.damage_mod,this.new_damage=i.damage,this.selectDamageAndRange()}},computed:{checked_modifier:function(){var e=this,a=c(this.base_damage,this.range_modifier,this.damage_modifier);return this.selected_modifier.range=a.range_mod,this.selected_modifier.damage=a.damage_mod,a.alerts.length>0&&!this.suppressAlerts&&(a.alerts.forEach(function(a){e.addAlert(a)}),this.publishAlerts()),a.update&&(this.$emit("alert-generated",!0),this.selectDamageAndRange()),this.new_damage=a.damage,{range:this.selected_modifier.range,damage:this.selected_modifier.damage}}}},g=o,l=(t("7f4f"),t("2877")),_=Object(l["a"])(g,i,n,!1,null,"7078092f",null);a["default"]=_.exports}}]);
//# sourceMappingURL=mek_melee-entangle-range-legacy.4b63750b.js.map