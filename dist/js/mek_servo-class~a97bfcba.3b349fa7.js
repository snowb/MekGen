(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-class~a97bfcba","mek_servo-class-data-module~5af327fd"],{"063b":function(e,t,s){"use strict";s.r(t),s.d(t,"create_class_data_table",function(){return c}),s.d(t,"class_data_table",function(){return n}),s.d(t,"servo_class_validate",function(){return o}),s.d(t,"has_feature",function(){return u}),s.d(t,"get_feature",function(){return h}),s.d(t,"cleaned_feature",function(){return p});var a=s("a58a"),r=s("706d");let n=[],l=["code","id","name","cost","kills","damage_bonus","throw_range"],d=!1,c=function(e){let t=1,s=1,r=1,l=0,c=0,i=0,o=!1,u=!1,h=void 0!==e?e.toLowerCase():"torso";switch(h){case"torso":t=2,s=2,r=2;break;case"arm":o=!0;break;case"leg":u=!0;break;case"pod":s=2,r=0;break}let m=a["a"].map(e=>{let a={};return a.code=e.code,a.id=e.id,a.name=e.name,a.cost=e.code*t+l,a.space=e.code*s+c,a.kills=e.code*r+i,(o||u)&&(a.damage_bonus=u?Math.ceil(a.code/2)-1:Math.ceil(a.code/3)-1,o&&(a.throw_range=Math.floor(a.code/2)+1)),a});d=!1,n=m};c();let i=Object(r["d"])(n,l),o=e=>{return d?i(e):(d=!0,i=Object(r["d"])(n,l),i(e))},u=(e,t)=>{return Object(r["c"])(n)(e,t)},h=(e,t)=>{return Object(r["b"])(n,u)(e,t)},m=h("code",1),p=Object(r["a"])(o,u,h,m,"Mek_Servo-Class")},"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return a}),s.d(t,"c",function(){return r}),s.d(t,"b",function(){return n}),s.d(t,"a",function(){return l});let a=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let a=e.some(e=>{return t.every(t=>{return s[t]==e[t]})});return a},r=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},n=(e,t)=>(s,a)=>{let r=null;return t(s,a)&&e.some(e=>{if(e[s]==a)return r=e,!0},void 0),r},l=(e,t,s,a,r)=>(n,l)=>{let d=void 0,c=[],i=!1,o=[],u=JSON.stringify(l);return void 0!==l&&t(n,l[n])?e(l)?(d=JSON.parse(JSON.stringify(l)),c=[d[n]],i=!1):(d=JSON.parse(JSON.stringify(s(n,l[n]))),c=[d[n]],i=!0,o.push(r+": "+u),o.push("**** Invalid data. Reseting. ****")):(d=a,c=[d[n]],i=!0,o.push(r+": "+u),o.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:c,update:i,alerts:o}}},9509:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.class_table,headers:e.class_table_headers,"selected-keys":e.selected_keys,pkey:e.pkey,name:"Servo Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},r=[],n=(s("ac6a"),s("d866")),l=s("063b"),d={name:"mek_servo_class",props:["servoClass","servoType"],mixins:[n["a"]],components:{"mek-sub-component-table":()=>s.e("mek_sub-component-table~31ecd969").then(s.bind(null,"a949"))},data:()=>{let e={pkey:"name",alerts:[],selected_class:null,suppressAlerts:!1};return e},methods:{select_class:function(e){let t=JSON.parse(JSON.stringify(e));this.$set(this,"selected_class",t),this.$emit("update-servo-class",t)}},computed:{selected_keys(){let e=Object(l["cleaned_feature"])(this.pkey,this.servoClass);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_class(e.data)),e.key_list},class_table_headers(){let e="arm"==this.servoType.toLowerCase(),t="leg"==this.servoType.toLowerCase(),s={name:"Name",cost:"Cost",space:"Space",kills:"Kills"};return(e||t)&&(s.damage_bonus="DMG+",e&&(s.throw_range="Throw")),s},class_table(){return this.servoType,l["class_data_table"]}},watch:{servoType:{immediate:!0,handler(e,t){Object(l["create_class_data_table"])(this.servoType),e!=t&&(this.suppressAlerts=!0)}}}},c=d,i=s("2877"),o=Object(i["a"])(c,a,r,!1,null,"47783838",null);t["default"]=o.exports},a58a:function(e,t,s){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);