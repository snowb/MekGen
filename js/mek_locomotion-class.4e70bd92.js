(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_locomotion-class"],{"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return a}),s.d(t,"c",function(){return n}),s.d(t,"b",function(){return i}),s.d(t,"a",function(){return r});let a=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let a=e.some(e=>{return t.every(t=>{return s[t]==e[t]})});return a},n=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},i=(e,t)=>(s,a)=>{let n=null;return t(s,a)&&e.some(e=>{if(e[s]==a)return n=e,!0},void 0),n},r=(e,t,s,a,n)=>(i,r)=>{let o=void 0,l=[],c=!1,d=[],u=JSON.stringify(r);return void 0!==r&&t(i,r[i])?e(r)?(o=JSON.parse(JSON.stringify(r)),l=[o[i]],c=!1):(o=JSON.parse(JSON.stringify(s(i,r[i]))),l=[o[i]],c=!0,d.push(n+": "+u),d.push("**** Invalid data. Reseting. ****")):(o=a,l=[o[i]],c=!0,d.push(n+": "+u),d.push("**** Invalid data. Reseting to default. ****")),{data:o,key_list:l,update:c,alerts:d}}},a58a:function(e,t,s){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},f41a:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.class_table,headers:{name:"Nype",cost:"Cost",kills:"Kills"},"selected-keys":e.selected_keys,pkey:e.pkey,name:e.locomotionType+" Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},n=[],i=(s("ac6a"),s("d866")),r=s("a58a"),o=s("706d");let l={name:"Superlight",cost:1,kills:1},c=r["a"].map(e=>{return{name:e.name,cost:e.code,kills:e.code}}),d=c,u=["name","cost","kills"],m=!1,p=e=>{m=!1,d="Treads"!=e?JSON.parse(JSON.stringify(c)):r["a"].map(e=>{return{name:e.name,cost:2*e.code,kills:2*e.code}})},h=Object(o["d"])(c,u),y=e=>{return m?h(e):(m=!0,h=Object(o["d"])(d,u),h(e))},f=(e,t)=>{return Object(o["c"])(d)(e,t)},k=(e,t)=>{return Object(o["b"])(d,f)(e,t)},b=Object(o["a"])(y,f,k,l,"Mek_Locomotion");var g={name:"mek_locomotion_class",props:["locomotionClass","locomotionType"],mixins:[i["a"]],components:{"mek-sub-component-table":()=>s.e("mel_sub-component-table").then(s.bind(null,"09c0"))},data:()=>{let e={pkey:"name",alerts:[],selected_class:null,suppressAlerts:!1};return e},methods:{select_class:function(e){let t=JSON.parse(JSON.stringify(e));this.$set(this,"selected_class",t),this.$emit("update-locomotion-class",t)}},computed:{selected_keys(){let e=b(this.pkey,this.locomotionClass);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_class(e.data)),e.key_list},class_table(){return p(this.locomotionType),d}},watch:{locomotionType:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},S=g,_=s("2877"),v=Object(_["a"])(S,a,n,!1,null,"68f72268",null);t["default"]=v.exports}}]);
//# sourceMappingURL=mek_locomotion-class.4e70bd92.js.map