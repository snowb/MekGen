(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-class"],{4877:function(e,t,s){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,s){"use strict";s.d(t,"d",function(){return i}),s.d(t,"c",function(){return d}),s.d(t,"b",function(){return u}),s.d(t,"a",function(){return l});var a=s("f499"),n=s.n(a),r=s("a745"),o=s.n(r),c=void 0,i=function(e,t){return function(s){if("undefined"===typeof s||!o()(t)||0==t.length)return!1;var a=e.some(function(e){return!t.some(function(t){return s[t]!=e[t]})});return a}},d=function(e){return function(t,s){return e.some(function(e){return void 0!==e[t]&&e[t]==s})}},u=function(e,t){return function(s,a){if(t(s,a)){var n=null;return e.some(function(e){if(e[s]==a)return n=e,!0},c),n}}},l=function(e,t,s,a,r){return function(o,c){var i=void 0,d=[],u=!1,l=[],h=n()(c);return void 0!==c&&t(o,c[o])?e(c)?(i=JSON.parse(n()(c)),d=[i[o]],u=!1):(i=JSON.parse(n()(s(o,c[o]))),d=[i[o]],u=!0,l.push(r+": "+h),l.push("**** Invalid data. Reseting. ****")):(i=a,d=[i[o]],u=!0,l.push(r+": "+h),l.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:d,update:u,alerts:l}}}},de38:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.class_table,headers:e.class_table_headers,"selected-keys":e.selected_keys,pkey:e.pkey,name:"Servo Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},n=[],r=(s("ac6a"),s("f499")),o=s.n(r),c=s("8fcf"),i=s("d866"),d=(s("7f7f"),s("4877")),u=s("daf4"),l=[],h=["code","id","name","cost","kills","damage_bonus","throw_range"],f=function(e){var t=1,s=1,a=1,n=0,r=0,o=0,c=!1,i=!1,u=void 0!==e?e.toLowerCase():"torso";switch(u){case"torso":t=2,s=2,a=2;break;case"arm":c=!0;break;case"leg":i=!0;break;case"pod":s=2,a=0;break}var h=d["a"].map(function(e){var d={};return d.code=e.code,d.id=e.id,d.name=e.name,d.cost=e.code*t+n,d.space=e.code*s+r,d.kills=e.code*a+o,(c||i)&&(d.damage_bonus=i?Math.ceil(d.code/2)-1:Math.ceil(d.code/3)-1,c&&(d.throw_range=Math.floor(d.code/2)+1)),d});l=h};f();var m=Object(u["d"])(l,h),p=Object(u["c"])(l),v=Object(u["b"])(l,p),b=v("code",1),k=Object(u["a"])(m,p,v,b,"Mek_Servo-Class"),_={name:"mek_servo_class",props:["servoClass","servoType","suppressAlerts"],mixins:[c["a"],i["a"]],components:{"mek-sub-component-table":function(){return s.e("chunk-bcbd439e").then(s.bind(null,"97ea"))}},data:function(){var e={pkey:"name",alerts:[],selected_class:null};return e},methods:{select_class:function(e){var t=JSON.parse(o()(e));this.$set(this,"selected_class",t),this.$emit("update-servo-class",t)}},computed:{selected_keys:function(){var e=this,t=k(this.pkey,this.servoClass);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_class(t.data),t.key_list},class_table_headers:function(){var e="arm"==this.servoType.toLowerCase(),t="leg"==this.servoType.toLowerCase(),s={name:"Name",cost:"Cost",space:"Space",kills:"Kills"};return(e||t)&&(s.damage_bonus="DMG+",e&&(s.throw_range="Throw")),s},class_table:function(){return f(this.servoType),l}}},g=_,y=s("2877"),w=Object(y["a"])(g,a,n,!1,null,"3b82bc5e",null);t["default"]=w.exports}}]);
//# sourceMappingURL=mek_servo-class-legacy.7b0775a2.js.map