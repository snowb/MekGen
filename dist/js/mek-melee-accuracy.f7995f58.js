(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-melee-accuracy"],{ce32:function(e,t,c){"use strict";c.r(t);var a=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("mek-sub-component-table",{attrs:{items:e.accuracy_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{accuracy:"WA",cost:"Cost"},name:"Accuracy",flow:"pkey-row","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_accuracy}})},s=[],r=(c("ac6a"),c("d866")),u=c("daf4");let n=[{accuracy:-2,cost:.6},{accuracy:-1,cost:.8},{accuracy:0,cost:1},{accuracy:1,cost:1.5},{accuracy:2,cost:2}],i=["accuracy","cost"],l={accuracy:0,cost:1},o=Object(u["d"])(n,i),d=Object(u["c"])(n),y=Object(u["b"])(n,d),p=Object(u["a"])(o,d,y,l,"Mek_Melee-Accuracy");var h={name:"mek_melee_accuracy",props:["accuracy"],mixins:[r["a"]],components:{"mek-sub-component-table":()=>c.e("chunk-46482d78").then(c.bind(null,"97ea"))},data:function(){let e={alerts:[],pkey:"accuracy",suppressAlerts:!1};return e},methods:{select_accuracy:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-accuracy",t)}},computed:{accuracy_table(){return n},selected_keys(){let e=p(this.pkey,this.accuracy);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_accuracy(e.data),e.key_list}}},f=h,m=c("2877"),b=Object(m["a"])(f,a,s,!1,null,"7b77eb33",null);t["default"]=b.exports},d866:function(e,t,c){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,c){"use strict";c.d(t,"d",function(){return a}),c.d(t,"c",function(){return s}),c.d(t,"b",function(){return r}),c.d(t,"a",function(){return u});let a=(e,t)=>c=>{if("undefined"===typeof c||!Array.isArray(t)||0==t.length)return!1;let a=e.some(e=>{return!t.some(t=>{return c[t]!=e[t]})});return a},s=e=>(t,c)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==c})},r=(e,t)=>(c,a)=>{let s=null;return t(c,a)&&e.some(e=>{if(e[c]==a)return s=e,!0},void 0),s},u=(e,t,c,a,s)=>(r,u)=>{let n=void 0,i=[],l=!1,o=[],d=JSON.stringify(u);return void 0!==u&&t(r,u[r])?e(u)?(n=JSON.parse(JSON.stringify(u)),i=[n[r]],l=!1):(n=JSON.parse(JSON.stringify(c(r,u[r]))),i=[n[r]],l=!0,o.push(s+": "+d),o.push("**** Invalid data. Reseting. ****")):(n=a,i=[n[r]],l=!0,o.push(s+": "+d),o.push("**** Invalid data. Reseting to default. ****")),{data:n,key_list:i,update:l,alerts:o}}}}]);
//# sourceMappingURL=mek-melee-accuracy.f7995f58.js.map