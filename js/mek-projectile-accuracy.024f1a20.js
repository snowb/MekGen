(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-projectile-accuracy"],{"706d":function(e,t,c){"use strict";c.d(t,"d",function(){return r}),c.d(t,"c",function(){return a}),c.d(t,"b",function(){return s}),c.d(t,"a",function(){return u});let r=(e,t)=>c=>{if("undefined"===typeof c||!Array.isArray(t)||0==t.length)return!1;let r=e.some(e=>{return!t.some(t=>{return c[t]!=e[t]})});return r},a=e=>(t,c)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==c})},s=(e,t)=>(c,r)=>{let a=null;return t(c,r)&&e.some(e=>{if(e[c]==r)return a=e,!0},void 0),a},u=(e,t,c,r,a)=>(s,u)=>{let n=void 0,i=[],l=!1,o=[],d=JSON.stringify(u);return void 0!==u&&t(s,u[s])?e(u)?(n=JSON.parse(JSON.stringify(u)),i=[n[s]],l=!1):(n=JSON.parse(JSON.stringify(c(s,u[s]))),i=[n[s]],l=!0,o.push(a+": "+d),o.push("**** Invalid data. Reseting. ****")):(n=r,i=[n[s]],l=!0,o.push(a+": "+d),o.push("**** Invalid data. Reseting to default. ****")),{data:n,key_list:i,update:l,alerts:o}}},d666:function(e,t,c){"use strict";c.r(t);var r=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("mek-sub-component-table",{attrs:{items:e.accuracy_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{accuracy:"WA",cost:"Cost"},"show-headers":!0,name:"Accuracy",flow:"pkey-row",format:{cost:"multiplier"}},on:{"update-selected-data":e.select_accuracy}})},a=[],s=(c("ac6a"),c("d866")),u=c("706d");let n=[{accuracy:-2,cost:.6},{accuracy:-1,cost:.8},{accuracy:0,cost:1},{accuracy:1,cost:1.5},{accuracy:2,cost:2}],i=["accuracy","cost"],l={accuracy:0,cost:1},o=Object(u["d"])(n,i),d=Object(u["c"])(n),p=Object(u["b"])(n,d),y=Object(u["a"])(o,d,p,l,"Mek_Projectile-Accuracy");var h={name:"mek_projectile_accuracy",props:["accuracy"],mixins:[s["a"]],components:{"mek-sub-component-table":()=>c.e("chunk-6d4b127e").then(c.bind(null,"09c0"))},data:function(){let e={alerts:[],pkey:"accuracy",suppressAlerts:!1};return e},methods:{select_accuracy:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-accuracy",t)}},computed:{accuracy_table(){return n},selected_keys(){let e=y(this.pkey,this.accuracy);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_accuracy(e.data),e.key_list}}},f=h,m=c("2877"),b=Object(m["a"])(f,r,a,!1,null,"57cf0f6a",null);t["default"]=b.exports},d866:function(e,t,c){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-projectile-accuracy.024f1a20.js.map