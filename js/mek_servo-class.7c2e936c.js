(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-class"],{"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return a}),s.d(t,"c",function(){return r}),s.d(t,"b",function(){return o}),s.d(t,"a",function(){return i});let a=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let a=e.some(e=>{return t.every(t=>{return s[t]==e[t]})});return a},r=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},o=(e,t)=>(s,a)=>{let r=null;return t(s,a)&&e.some(e=>{if(e[s]==a)return r=e,!0},void 0),r},i=(e,t,s,a,r)=>(o,i)=>{let n=void 0,l=[],d=!1,c=[],u=JSON.stringify(i);return void 0!==i&&t(o,i[o])?e(i)?(n=JSON.parse(JSON.stringify(i)),l=[n[o]],d=!1):(n=JSON.parse(JSON.stringify(s(o,i[o]))),l=[n[o]],d=!0,c.push(r+": "+u),c.push("**** Invalid data. Reseting. ****")):(n=a,l=[n[o]],d=!0,c.push(r+": "+u),c.push("**** Invalid data. Reseting to default. ****")),{data:n,key_list:l,update:d,alerts:c}}},9509:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.class_table,headers:e.class_table_headers,"selected-keys":e.selected_keys,pkey:e.pkey,name:"Servo Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},r=[],o=(s("ac6a"),s("d866")),i=s("a58a"),n=s("706d");let l=[],d=["code","id","name","cost","kills","damage_bonus","throw_range"],c=function(e){let t=1,s=1,a=1,r=0,o=0,n=0,d=!1,c=!1,u=void 0!==e?e.toLowerCase():"torso";switch(u){case"torso":t=2,s=2,a=2;break;case"arm":d=!0;break;case"leg":c=!0;break;case"pod":s=2,a=0;break}let h=i["a"].map(e=>{let i={};return i.code=e.code,i.id=e.id,i.name=e.name,i.cost=e.code*t+r,i.space=e.code*s+o,i.kills=e.code*a+n,(d||c)&&(i.damage_bonus=c?Math.ceil(i.code/2)-1:Math.ceil(i.code/3)-1,d&&(i.throw_range=Math.floor(i.code/2)+1)),i});l=h};c();let u=Object(n["d"])(l,d),h=Object(n["c"])(l),m=Object(n["b"])(l,h),p=m("code",1),b=Object(n["a"])(u,h,m,p,"Mek_Servo-Class");var v={name:"mek_servo_class",props:["servoClass","servoType"],mixins:[o["a"]],components:{"mek-sub-component-table":()=>s.e("mel_sub-component-table").then(s.bind(null,"09c0"))},data:()=>{let e={pkey:"name",alerts:[],selected_class:null,suppressAlerts:!1};return e},methods:{select_class:function(e){let t=JSON.parse(JSON.stringify(e));this.$set(this,"selected_class",t),this.$emit("update-servo-class",t)}},computed:{selected_keys(){let e=b(this.pkey,this.servoClass);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_class(e.data)),e.key_list},class_table_headers(){let e="arm"==this.servoType.toLowerCase(),t="leg"==this.servoType.toLowerCase(),s={name:"Name",cost:"Cost",space:"Space",kills:"Kills"};return(e||t)&&(s.damage_bonus="DMG+",e&&(s.throw_range="Throw")),s},class_table(){return c(this.servoType),l}},watch:{servoType:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},y=v,_=s("2877"),k=Object(_["a"])(y,a,r,!1,null,"2cb82607",null);t["default"]=k.exports},a58a:function(e,t,s){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_servo-class.7c2e936c.js.map