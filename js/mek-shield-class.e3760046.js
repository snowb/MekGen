(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-shield-class"],{"0edc":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.class_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:e.headers,name:"Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},i=[],r=(s("ac6a"),s("3ffa")),n=s("d866"),d=s("a58a"),c=s("706d");let o=[],l=!1,u=function(e){let t=void 0===e?"standard":e,s=1;switch(t.toLowerCase()){case"active":s=1.5;break;case"reactive":s=3;break}o=d["a"].map(function(e){let t={stopping_power:e.code+4,code:e.code,id:e.id,name:e.name,kills:5*(e.code+4),cost:(e.code+4)*s};return t},this),l=!1};u("standard");let m=["stopping_power","code","id","name","kills","cost"],p=Object(c["d"])(o,m),h=e=>{return l?p(e):(l=!0,p=Object(c["d"])(o,m),p(e))},f=Object(c["c"])(o),y=Object(c["b"])(o,f),b=JSON.parse(JSON.stringify(y("code",1))),S=Object(c["a"])(h,f,y,b,"Mek_Shield-Class");var g={name:"mek_shield_class",props:["type","shield_class","is_ablative"],mixins:[r["a"],n["a"]],components:{"mek-sub-component-table":()=>s.e("mel_sub-component-table").then(s.bind(null,"09c0"))},data:function(){let e={alerts:[],suppressAlerts:!1};return e},methods:{select_class:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-class-code",t)}},computed:{class_table(){return u(this.type),o},headers(){return this.is_ablative?{name:"Name",kills:"Kills",cost:"Cost"}:{name:"Name",stopping_power:"SP",cost:"Cost"}},pkey(){return this.is_ablative?"kills":"stopping_power"},selected_keys(){let e=S(this.pkey,this.shield_class);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_class(e.data)),e.key_list}},watch:{type:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},v=g,k=(s("beb3"),s("2877")),_=Object(k["a"])(v,a,i,!1,null,"2c66b584",null);t["default"]=_.exports},"3ffa":function(e,t,s){"use strict";t["a"]={data:()=>{return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},"4d60":function(e,t,s){},"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return a}),s.d(t,"c",function(){return i}),s.d(t,"b",function(){return r}),s.d(t,"a",function(){return n});let a=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let a=e.some(e=>{return t.every(t=>{return s[t]==e[t]})});return a},i=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},r=(e,t)=>(s,a)=>{let i=null;return t(s,a)&&e.some(e=>{if(e[s]==a)return i=e,!0},void 0),i},n=(e,t,s,a,i)=>(r,n)=>{let d=void 0,c=[],o=!1,l=[],u=JSON.stringify(n);return void 0!==n&&t(r,n[r])?e(n)?(d=JSON.parse(JSON.stringify(n)),c=[d[r]],o=!1):(d=JSON.parse(JSON.stringify(s(r,n[r]))),c=[d[r]],o=!0,l.push(i+": "+u),l.push("**** Invalid data. Reseting. ****")):(d=a,c=[d[r]],o=!0,l.push(i+": "+u),l.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:c,update:o,alerts:l}}},a58a:function(e,t,s){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},beb3:function(e,t,s){"use strict";var a=s("4d60"),i=s.n(a);i.a},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-shield-class.e3760046.js.map