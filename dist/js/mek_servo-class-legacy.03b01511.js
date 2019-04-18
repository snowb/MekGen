(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-class"],{"063b":function(e,s,t){"use strict";t.r(s),t.d(s,"create_class_data_table",function(){return o}),t.d(s,"class_data_table",function(){return c}),t.d(s,"servo_class_validate",function(){return l}),t.d(s,"has_feature",function(){return d}),t.d(s,"get_feature",function(){return i}),t.d(s,"cleaned_feature",function(){return _});t("7f7f");var a=t("a58a"),r=t("706d"),c=[],n=["code","id","name","cost","kills","damage_bonus","throw_range"],o=function(e){var s=1,t=1,r=1,n=0,o=0,l=0,d=!1,i=!1,u=void 0!==e?e.toLowerCase():"torso";switch(u){case"torso":s=2,t=2,r=2;break;case"arm":d=!0;break;case"leg":i=!0;break;case"pod":t=2,r=0;break}var _=a["a"].map(function(e){var a={};return a.code=e.code,a.id=e.id,a.name=e.name,a.cost=e.code*s+n,a.space=e.code*t+o,a.kills=e.code*r+l,(d||i)&&(a.damage_bonus=i?Math.ceil(a.code/2)-1:Math.ceil(a.code/3)-1,d&&(a.throw_range=Math.floor(a.code/2)+1)),a});c=_};o();var l=Object(r["d"])(c,n),d=Object(r["c"])(c),i=Object(r["b"])(c,d),u=i("code",1),_=Object(r["a"])(l,d,i,u,"Mek_Servo-Class")},9509:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("mek-sub-component-table",{attrs:{items:e.class_table,headers:e.class_table_headers,"selected-keys":e.selected_keys,pkey:e.pkey,name:"Servo Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},r=[],c=(t("ac6a"),t("f499")),n=t.n(c),o=t("d866"),l=t("063b"),d={name:"mek_servo_class",props:["servoClass","servoType"],mixins:[o["a"]],components:{"mek-sub-component-table":function(){return t.e("mek_sub-component-table").then(t.bind(null,"09c0"))}},data:function(){var e={pkey:"name",alerts:[],selected_class:null,suppressAlerts:!1};return e},methods:{select_class:function(e){var s=JSON.parse(n()(e));this.$set(this,"selected_class",s),this.$emit("update-servo-class",s)}},computed:{selected_keys:function(){var e=this,s=Object(l["cleaned_feature"])(this.pkey,this.servoClass);return s.alerts.length>0&&!this.suppressAlerts&&(s.alerts.forEach(function(s){e.addAlert(s)}),this.publishAlerts()),s.update&&(this.$emit("alert-generated",!0),this.select_class(s.data)),s.key_list},class_table_headers:function(){var e="arm"==this.servoType.toLowerCase(),s="leg"==this.servoType.toLowerCase(),t={name:"Name",cost:"Cost",space:"Space",kills:"Kills"};return(e||s)&&(t.damage_bonus="DMG+",e&&(t.throw_range="Throw")),t},class_table:function(){return Object(l["create_class_data_table"])(this.servoType),l["class_data_table"]}},watch:{servoType:function(e,s){e!=s&&(this.suppressAlerts=!0)}}},i=d,u=t("2877"),_=Object(u["a"])(i,a,r,!1,null,"2cb82607",null);s["default"]=_.exports}}]);
//# sourceMappingURL=mek_servo-class-legacy.03b01511.js.map