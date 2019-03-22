(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-class"],{4877:function(e,s,t){"use strict";s["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},d866:function(e,s,t){"use strict";s["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},de38:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("mek-sub-component-table",{attrs:{items:e.class_table,headers:e.class_table_headers,"selected-keys":e.selected_keys,pkey:e.pkey,name:"Servo Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},r=[],o=(t("ac6a"),t("3ffa")),l=t("072f"),i=t("8fcf"),d=t("d866"),n=t("4877");let c=[],u=function(e){let s=1,t=1,a=1,r=0,o=0,l=0,i=!1,d=!1,u=void 0!==e?e.toLowerCase():"torso";switch(u){case"torso":s=2,t=2,a=2;break;case"arm":i=!0;break;case"leg":d=!0;break;case"pod":t=2,a=0;break}let h=n["a"].map(e=>{let n={};return n.code=e.code,n.id=e.id,n.name=e.name,n.cost=e.code*s+r,n.space=e.code*t+o,n.kills=e.code*a+l,(i||d)&&(n.damage_bonus=d?Math.ceil(n.code/2)-1:Math.ceil(n.code/3)-1,i&&(n.throw_range=Math.floor(n.code/2)+1)),n});c=h};u();let h=e=>{if("undefined"===typeof e)return!1;let s=c.some(s=>{return s.code==e.code&&s.id==e.id&&s.name==e.name&&s.cost==e.cost&&s.space==e.space&&s.kills==e.kills&&s.damage_bonus==e.damage_bonus&&s.throw_range==e.throw_range});return s},m=(e,s)=>{return c.some(t=>{return void 0!==t[e]&&t[e]==s})},p=(e,s)=>{if(m(e,s)){let t=null;return c.some(a=>{if(a[e]==s)return t=a,!0},void 0),t}},k=p("code",1),_=function(e,s){let t=void 0,a=[],r=!1,o=[],l=JSON.stringify(s);return void 0!==s&&m(e,s[e])?h(s)?(t=JSON.parse(JSON.stringify(s)),a=[t[e]],r=!1):(t=JSON.parse(JSON.stringify(p(e,s[e]))),a=[t[e]],r=!0,o.push("Mek_Servo-Class: "+l),o.push("**** Invalid data. Reseting. ****")):(t=k,a=[t[e]],r=!0,o.push("Mek_Servo-Class: "+l),o.push("**** Invalid data. Reseting to default. ****")),{data:t,key_list:a,update:r,alerts:o}};var f={name:"mek_servo_class",props:["servoClass","servoType","suppressAlerts"],mixins:[o["a"],l["a"],i["a"],d["a"]],components:{"mek-sub-component-table":()=>t.e("chunk-0a2ef8c8").then(t.bind(null,"97ea"))},data:()=>{let e={pkey:"name",alerts:[],selected_class:null};return e},methods:{select_class:function(e){let s=JSON.parse(JSON.stringify(e));this.$set(this,"selected_class",s),this.$emit("update-servo-class",s)}},computed:{selected_keys(){let e=_(this.pkey,this.servoClass);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_class(e.data),e.key_list},class_table_headers(){let e="arm"==this.servoType.toLowerCase(),s="leg"==this.servoType.toLowerCase(),t={name:"Name",cost:"Cost",space:"Space",kills:"Kills"};return(e||s)&&(t.damage_bonus="DMG+",e&&(t.throw_range="Throw")),t},class_table(){return u(this.servoType),c}}},v=f,g=t("2877"),y=Object(g["a"])(v,a,r,!1,null,"6f0905a0",null);s["default"]=y.exports}}]);
//# sourceMappingURL=mek_servo-class.fca6775f.js.map