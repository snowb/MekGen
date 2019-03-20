(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-class"],{d866:function(e,s,t){"use strict";s["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},de38:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("mek-sub-component-table",{attrs:{items:e.class_table,headers:e.class_table_headers,selectedKeys:e.selected_keys,pkey:e.pkey,name:"Servo Class",flow:"pkey-col",showHeaders:!0},on:{"update-selected-data":e.select_class}})},l=[],r=t("3ffa"),i=t("072f"),o=t("8fcf"),c=t("d866"),h={name:"mek_servo_class",props:["servoClass","servoType","suppressAlerts"],mixins:[r["a"],i["a"],o["a"],c["a"]],components:{"mek-sub-component-table":()=>t.e("chunk-0a2ef8c8").then(t.bind(null,"97ea"))},data:()=>{let e={pkey:"name",alerts:[],selected_class:null};return e},methods:{select_class:function(e){let s=JSON.parse(JSON.stringify(e));this.$set(this,"selected_class",s),this.$emit("update-servo-class",s)},get_feature(e){if(this.has_feature(e)){let s=null;return this.class_table.some(t=>{if(t[this.pkey]==e)return s=t,!0},this),s}},has_feature(e){return this.class_table.some(s=>{return s[this.pkey]==e},this)},class_validate(e){if("undefined"===typeof e)return!1;let s=this.class_table.some(s=>{return s.name==e.name&&s.id==e.id&&s.code==e.code&&s.cost==e.cost&&s.space==e.space&&s.damage_bonus==e.damage_bonus&&s.throw_range==e.throw_range});return s}},computed:{selected_keys(){let e=this.get_feature("Superlight");void 0===this.servoClass&&this.select_class(e);let s=JSON.stringify(this.servoClass);return this.has_feature(this.servoClass[this.pkey])?(this.class_validate(this.servoClass)||(this.suppressAlerts||(this.addAlert("Mek_Servo-Class: "+s),this.addAlert("**** Invalid data. Reseting. ****"),this.publishAlerts()),this.select_class(this.get_feature(this.servoClass[this.pkey]))),[this.servoClass[this.pkey]]):(this.suppressAlerts||(this.addAlert("Mek_Servo-Class: "+s),this.addAlert("**** Invalid data. Reseting to default. ****"),this.publishAlerts()),this.select_class(e),[e[this.pkey]])},class_table_headers(){let e="arm"==this.servoType.toLowerCase(),s="leg"==this.servoType.toLowerCase(),t={name:"Name",cost:"Cost",space:"Space",kills:"Kills"};return(e||s)&&(t.damage_bonus="DMG+",e&&(t.throw_range="Throw")),t},class_table(){let e=1,s=1,t=1,a=0,l=0,r=0,i=!1,o=!1;switch(this.servoType.toLowerCase()){case"torso":e=2,s=2,t=2;break;case"arm":i=!0;break;case"leg":o=!0;break;case"pod":s=2,t=0;break}let c=this.servo_classes.map(c=>{let h={};return h.code=c.code,h.id=c.id,h.name=c.name,h.cost=c.code*e+a,h.space=c.code*s+l,h.kills=c.code*t+r,(i||o)&&(h.damage_bonus=o?Math.ceil(h.code/2)-1:Math.ceil(h.code/3)-1,i&&(h.throw_range=Math.floor(h.code/2)+1)),h});return c}}},n=h,d=t("2877"),u=Object(d["a"])(n,a,l,!1,null,"cfcc19be",null);s["default"]=u.exports}}]);
//# sourceMappingURL=mek_servo-class.160e4481.js.map