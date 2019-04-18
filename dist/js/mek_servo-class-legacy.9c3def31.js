(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-class"],{"063b":function(e,a,t){"use strict";t.r(a),t.d(a,"create_class_data_table",function(){return o}),t.d(a,"class_data_table",function(){return c}),t.d(a,"servo_class_validate",function(){return d}),t.d(a,"has_feature",function(){return l}),t.d(a,"get_feature",function(){return i}),t.d(a,"cleaned_feature",function(){return m});t("7f7f");var s=t("a58a"),r=t("706d"),c=[],n=["code","id","name","cost","kills","damage_bonus","throw_range"],o=function(e){var a=1,t=1,r=1,n=0,o=0,d=0,l=!1,i=!1,u=void 0!==e?e.toLowerCase():"torso";switch(u){case"torso":a=2,t=2,r=2;break;case"arm":l=!0;break;case"leg":i=!0;break;case"pod":t=2,r=0;break}var m=s["a"].map(function(e){var s={};return s.code=e.code,s.id=e.id,s.name=e.name,s.cost=e.code*a+n,s.space=e.code*t+o,s.kills=e.code*r+d,(l||i)&&(s.damage_bonus=i?Math.ceil(s.code/2)-1:Math.ceil(s.code/3)-1,l&&(s.throw_range=Math.floor(s.code/2)+1)),s});c=m};o();var d=Object(r["d"])(c,n),l=Object(r["c"])(c),i=Object(r["b"])(c,l),u=i("code",1),m=Object(r["a"])(d,l,i,u,"Mek_Servo-Class")},9509:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("mek-sub-component-table",{attrs:{items:e.class_table,headers:e.class_table_headers,"selected-keys":e.selected_keys,pkey:e.pkey,name:"Servo Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},r=[],c=(t("ac6a"),t("f499")),n=t.n(c),o=t("d866"),d=t("063b"),l={name:"mek_servo_class",props:["servoClass","servoType"],mixins:[o["a"]],components:{"mek-sub-component-table":function(){return t.e("mek_sub-component-table").then(t.bind(null,"09c0"))}},data:function(){var e={pkey:"name",alerts:[],selected_class:null,suppressAlerts:!1};return e},methods:{select_class:function(e){var a=JSON.parse(n()(e));this.$set(this,"selected_class",a),this.$emit("update-servo-class",a)}},computed:{selected_keys:function(){var e=this,a=Object(d["cleaned_feature"])(this.pkey,this.servoClass);return a.alerts.length>0&&!this.suppressAlerts&&(a.alerts.forEach(function(a){e.addAlert(a)}),this.publishAlerts()),a.update&&(this.$emit("alert-generated",!0),this.select_class(a.data)),a.key_list},class_table_headers:function(){var e="arm"==this.servoType.toLowerCase(),a="leg"==this.servoType.toLowerCase(),t={name:"Name",cost:"Cost",space:"Space",kills:"Kills"};return(e||a)&&(t.damage_bonus="DMG+",e&&(t.throw_range="Throw")),t},class_table:function(){return Object(d["create_class_data_table"])(this.servoType),d["class_data_table"]}},watch:{servoType:function(e,a){e!=a&&(this.suppressAlerts=!0)}}},i=l,u=t("2877"),m=Object(u["a"])(i,s,r,!1,null,"2cb82607",null);a["default"]=m.exports},a58a:function(e,a,t){"use strict";a["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}]);
//# sourceMappingURL=mek_servo-class-legacy.9c3def31.js.map