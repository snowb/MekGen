(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-damage"],{6455:function(e,t,a){},"706d":function(e,t,a){"use strict";a.d(t,"d",function(){return s}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return d});let s=(e,t)=>a=>{if("undefined"===typeof a||!Array.isArray(t)||0==t.length)return!1;let s=e.some(e=>{return!t.some(t=>{return a[t]!=e[t]})});return s},r=e=>(t,a)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==a})},n=(e,t)=>(a,s)=>{let r=null;return t(a,s)&&e.some(e=>{if(e[a]==s)return r=e,!0},void 0),r},d=(e,t,a,s,r)=>(n,d)=>{let i=void 0,u=[],l=!1,c=[],o=JSON.stringify(d);return void 0!==d&&t(n,d[n])?e(d)?(i=JSON.parse(JSON.stringify(d)),u=[i[n]],l=!1):(i=JSON.parse(JSON.stringify(a(n,d[n]))),u=[i[n]],l=!0,c.push(r+": "+o),c.push("**** Invalid data. Reseting. ****")):(i=s,u=[i[n]],l=!0,c.push(r+": "+o),c.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:u,update:l,alerts:c}}},"77d9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],n=(a("ac6a"),a("8fcf")),d=a("d866"),i=a("706d");let u=Array.apply({},Array(20)).map((e,t)=>{let a=t+1,s=a;return{damage:a,cost:s}}),l=["damage","cost"],c={damage:1,cost:1},o=Object(i["d"])(u,l),m=Object(i["c"])(u),p=Object(i["b"])(u,m),h=Object(i["a"])(o,m,p,c,"Mek_EMW-Damage");var g={name:"mek_emw_damage",props:["damage"],mixins:[n["a"],d["a"]],components:{"mek-sub-component-table":()=>a.e("chunk-96bd1ca6").then(a.bind(null,"09c0"))},data:function(){let e={pkey:"damage",alerts:[],suppressAlerts:!1};return e},methods:{select_damage:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-damage",t)}},computed:{damage_table(){return u},selected_keys(){let e=h(this.pkey,this.damage);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_damage(e.data),e.key_list}}},f=g,b=(a("ebeb"),a("2877")),y=Object(b["a"])(f,s,r,!1,null,"4622a00d",null);t["default"]=y.exports},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},ebeb:function(e,t,a){"use strict";var s=a("6455"),r=a.n(s);r.a}}]);
//# sourceMappingURL=mek-emw-damage.423cc586.js.map