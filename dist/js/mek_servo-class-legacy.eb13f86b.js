(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-class"],{d866:function(e,s,t){"use strict";s["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},de38:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("mek-sub-component-table",{attrs:{items:e.class_table,headers:e.class_table_headers,"selected-keys":e.selected_keys,pkey:e.pkey,name:"Servo Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},r=[],l=(t("7f7f"),t("f499")),i=t.n(l),o=t("3ffa"),n=t("072f"),c=t("8fcf"),h=t("d866"),u={name:"mek_servo_class",props:["servoClass","servoType","suppressAlerts"],mixins:[o["a"],n["a"],c["a"],h["a"]],components:{"mek-sub-component-table":function(){return t.e("chunk-5a8f0fc3").then(t.bind(null,"97ea"))}},data:function(){var e={pkey:"name",alerts:[],selected_class:null};return e},methods:{select_class:function(e){var s=JSON.parse(i()(e));this.$set(this,"selected_class",s),this.$emit("update-servo-class",s)},get_feature:function(e){var s=this;if(this.has_feature(e)){var t=null;return this.class_table.some(function(a){if(a[s.pkey]==e)return t=a,!0},this),t}},has_feature:function(e){var s=this;return this.class_table.some(function(t){return t[s.pkey]==e},this)},class_validate:function(e){if("undefined"===typeof e)return!1;var s=this.class_table.some(function(s){return s.name==e.name&&s.id==e.id&&s.code==e.code&&s.cost==e.cost&&s.space==e.space&&s.damage_bonus==e.damage_bonus&&s.throw_range==e.throw_range});return s}},computed:{selected_keys:function(){var e=this.get_feature("Superlight");void 0===this.servoClass&&this.select_class(e);var s=i()(this.servoClass);return this.has_feature(this.servoClass[this.pkey])?(this.class_validate(this.servoClass)||(this.suppressAlerts||(this.addAlert("Mek_Servo-Class: "+s),this.addAlert("**** Invalid data. Reseting. ****"),this.publishAlerts()),this.select_class(this.get_feature(this.servoClass[this.pkey]))),[this.servoClass[this.pkey]]):(this.suppressAlerts||(this.addAlert("Mek_Servo-Class: "+s),this.addAlert("**** Invalid data. Reseting to default. ****"),this.publishAlerts()),this.select_class(e),[e[this.pkey]])},class_table_headers:function(){var e="arm"==this.servoType.toLowerCase(),s="leg"==this.servoType.toLowerCase(),t={name:"Name",cost:"Cost",space:"Space",kills:"Kills"};return(e||s)&&(t.damage_bonus="DMG+",e&&(t.throw_range="Throw")),t},class_table:function(){var e=1,s=1,t=1,a=0,r=0,l=0,i=!1,o=!1;switch(this.servoType.toLowerCase()){case"torso":e=2,s=2,t=2;break;case"arm":i=!0;break;case"leg":o=!0;break;case"pod":s=2,t=0;break}var n=this.servo_classes.map(function(n){var c={};return c.code=n.code,c.id=n.id,c.name=n.name,c.cost=n.code*e+a,c.space=n.code*s+r,c.kills=n.code*t+l,(i||o)&&(c.damage_bonus=o?Math.ceil(c.code/2)-1:Math.ceil(c.code/3)-1,i&&(c.throw_range=Math.floor(c.code/2)+1)),c});return n}}},d=u,p=t("2877"),f=Object(p["a"])(d,a,r,!1,null,"26e6d9e2",null);s["default"]=f.exports}}]);
//# sourceMappingURL=mek_servo-class-legacy.eb13f86b.js.map