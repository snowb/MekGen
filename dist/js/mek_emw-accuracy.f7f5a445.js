(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-accuracy"],{"706d":function(e,t,a){"use strict";a.d(t,"d",function(){return s}),a.d(t,"c",function(){return c}),a.d(t,"b",function(){return r}),a.d(t,"a",function(){return i});let s=(e,t)=>a=>{if("undefined"===typeof a||!Array.isArray(t)||0==t.length)return!1;let s=e.some(e=>{return t.every(t=>{return a[t]==e[t]})});return s},c=e=>(t,a)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==a})},r=(e,t)=>(a,s)=>{let c=null;return t(a,s)&&e.some(e=>{if(e[a]==s)return c=e,!0},void 0),c},i=(e,t,a,s,c)=>(r,i)=>{let n=void 0,u=[],l=!1,d=[],o=JSON.stringify(i);return void 0!==i&&t(r,i[r])?e(i)?(n=JSON.parse(JSON.stringify(i)),u=[n[r]],l=!1):(n=JSON.parse(JSON.stringify(a(r,i[r]))),u=[n[r]],l=!0,d.push(c+": "+o),d.push("**** Invalid data. Reseting. ****")):(n=s,u=[n[r]],l=!0,d.push(c+": "+o),d.push("**** Invalid data. Reseting to default. ****")),{data:n,key_list:u,update:l,alerts:d}}},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},f278:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.accuracy_table,headers:e.headers,name:"Accuracy",flow:"pkey-row","show-headers":!0,format:{cost:"multiplier"},pkey:e.pkey,"selected-keys":e.selected_keys},on:{"update-selected-data":e.select_accuracy}})},c=[],r=(a("ac6a"),a("d866")),i=a("706d");let n=[{accuracy:-2,cost:.6,defense_ability:-4},{accuracy:-1,cost:.8,defense_ability:-3},{accuracy:0,cost:.9,defense_ability:-2},{accuracy:1,cost:1,defense_ability:-1},{accuracy:2,cost:1.5,defense_ability:0},{accuracy:3,cost:2,defense_ability:1}],u=["accuracy","cost","defense_ability"],l={accuracy:1,cost:1,defense_ability:-1},d=Object(i["d"])(n,u),o=Object(i["c"])(n),y=Object(i["b"])(n,o),h=Object(i["a"])(d,o,y,l,"Mek_EMW-Accuracy");var p={name:"mek_emw_accuracy",props:["accuracy","isBeamShield","isVariableBeamShield"],mixins:[r["a"]],components:{"mek-sub-component-table":()=>a.e("mek_sub-component-table").then(a.bind(null,"09c0"))},data:function(){let e={alerts:[],suppressAlerts:!1};return e},methods:{select_accuracy:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-accuracy",t)}},computed:{headers(){return this.isVariableBeamShield?{accuracy:"WA",defense_ability:"DA",cost:"Cost"}:this.isBeamShield?{defense_ability:"DA",cost:"Cost"}:{accuracy:"WA",cost:"Cost"}},pkey(){return this.isBeamShield&&!this.isVariableBeamShield?"defense_ability":"accuracy"},accuracy_table(){return n},selected_keys(){let e=h(this.pkey,this.accuracy);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_accuracy(e.data)),e.key_list}}},f=p,b=a("2877"),m=Object(b["a"])(f,s,c,!1,null,"1b3195ea",null);t["default"]=m.exports}}]);
//# sourceMappingURL=mek_emw-accuracy.f7f5a445.js.map