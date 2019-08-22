(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-class~a97bfcba","mek_servo-class-data-module~5af327fd"],{"063b":function(e,t,s){"use strict";s.r(t),s.d(t,"create_class_data_table",function(){return o}),s.d(t,"class_data_table",function(){return r}),s.d(t,"servo_class_validate",function(){return d}),s.d(t,"has_feature",function(){return l}),s.d(t,"get_feature",function(){return f}),s.d(t,"cleaned_feature",function(){return m});s("7f7f");var a=s("a58a"),n=s("706d"),r=[],c=["code","id","name","cost","kills","damage_bonus","throw_range"],i=!1,o=function(e){var t=1,s=1,n=1,c=0,o=0,u=0,d=!1,l=!1,f=void 0!==e?e.toLowerCase():"torso";switch(f){case"torso":t=2,s=2,n=2;break;case"arm":d=!0;break;case"leg":l=!0;break;case"pod":s=2,n=0;break}var h=a["a"].map(function(e){var a={};return a.code=e.code,a.id=e.id,a.name=e.name,a.cost=e.code*t+c,a.space=e.code*s+o,a.kills=e.code*n+u,(d||l)&&(a.damage_bonus=l?Math.ceil(a.code/2)-1:Math.ceil(a.code/3)-1,d&&(a.throw_range=Math.floor(a.code/2)+1)),a});i=!1,r=h};o();var u=Object(n["d"])(r,c),d=function(e){return i?u(e):(i=!0,u=Object(n["d"])(r,c),u(e))},l=function(e,t){return Object(n["c"])(r)(e,t)},f=function(e,t){return Object(n["b"])(r,l)(e,t)},h=f("code",1),m=Object(n["a"])(d,l,f,h,"Mek_Servo-Class")},"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return n}),s.d(t,"c",function(){return r}),s.d(t,"b",function(){return c}),s.d(t,"a",function(){return i});var a=void 0,n=function(e,t){return function(s){if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;var a=e.some(function(e){return t.every(function(t){return s[t]==e[t]})});return a}},r=function(e){return function(t,s){return e.some(function(e){return void 0!==e[t]&&e[t]==s})}},c=function(e,t){return function(s,n){var r=null;return t(s,n)&&e.some(function(e){if(e[s]==n)return r=e,!0},a),r}},i=function(e,t,s,a,n){return function(r,c){var i=void 0,o=[],u=!1,d=[],l=JSON.stringify(c);return void 0!==c&&t(r,c[r])?e(c)?(i=JSON.parse(JSON.stringify(c)),o=[i[r]],u=!1):(i=JSON.parse(JSON.stringify(s(r,c[r]))),o=[i[r]],u=!0,d.push(n+": "+l),d.push("**** Invalid data. Reseting. ****")):(i=a,o=[i[r]],u=!0,d.push(n+": "+l),d.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:o,update:u,alerts:d}}}},9509:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.class_table,headers:e.class_table_headers,"selected-keys":e.selected_keys,pkey:e.pkey,name:"Servo Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},n=[],r=(s("ac6a"),s("d866")),c=s("063b"),i={name:"mek_servo_class",props:["servoClass","servoType"],mixins:[r["a"]],components:{"mek-sub-component-table":function(){return s.e("mek_sub-component-table~31ecd969").then(s.bind(null,"a949"))}},data:function(){var e={pkey:"name",alerts:[],selected_class:null,suppressAlerts:!1};return e},methods:{select_class:function(e){var t=JSON.parse(JSON.stringify(e));this.$set(this,"selected_class",t),this.$emit("update-servo-class",t)}},computed:{selected_keys:function(){var e=this,t=Object(c["cleaned_feature"])(this.pkey,this.servoClass);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_class(t.data)),t.key_list},class_table_headers:function(){var e="arm"==this.servoType.toLowerCase(),t="leg"==this.servoType.toLowerCase(),s={name:"Name",cost:"Cost",space:"Space",kills:"Kills"};return(e||t)&&(s.damage_bonus="DMG+",e&&(s.throw_range="Throw")),s},class_table:function(){return this.servoType,c["class_data_table"]}},watch:{servoType:{immediate:!0,handler:function(e,t){Object(c["create_class_data_table"])(this.servoType),e!=t&&(this.suppressAlerts=!0)}}}},o=i,u=s("2877"),d=Object(u["a"])(o,a,n,!1,null,"47783838",null);t["default"]=d.exports},a58a:function(e,t,s){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);