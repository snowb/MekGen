(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-missile-damage"],{"03c0":function(e,t,a){"use strict";var s=a("ede3"),r=a.n(s);r.a},"706d":function(e,t,a){"use strict";a.d(t,"d",function(){return s}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});let s=(e,t)=>a=>{if("undefined"===typeof a||!Array.isArray(t)||0==t.length)return!1;let s=e.some(e=>{return t.every(t=>{return a[t]==e[t]})});return s},r=e=>(t,a)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==a})},n=(e,t)=>(a,s)=>{let r=null;return t(a,s)&&e.some(e=>{if(e[a]==s)return r=e,!0},void 0),r},i=(e,t,a,s,r)=>(n,i)=>{let d=void 0,l=[],u=!1,c=[],o=JSON.stringify(i);return void 0!==i&&t(n,i[n])?e(i)?(d=JSON.parse(JSON.stringify(i)),l=[d[n]],u=!1):(d=JSON.parse(JSON.stringify(a(n,i[n]))),l=[d[n]],u=!0,c.push(r+": "+o),c.push("**** Invalid data. Reseting. ****")):(d=s,l=[d[n]],u=!0,c.push(r+": "+o),c.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:l,update:u,alerts:c}}},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},d899:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],n=(a("ac6a"),a("d866")),i=a("706d");let d=Array.apply({},Array(20)).map((e,t)=>{let a=t+1,s=a/10,r=Math.round(3.5*Math.sqrt(a));return{damage:a,cost:s,range:r}}),l=["damage","cost","range"],u={damage:1,cost:.1,range:4},c=Object(i["d"])(d,l),o=Object(i["c"])(d),m=Object(i["b"])(d,o),p=Object(i["a"])(c,o,m,u,"Mek_Missile-Damage");var h={name:"mek_missile_damage",props:["damage"],mixins:[n["a"]],components:{"mek-sub-component-table":()=>a.e("chunk-afd6182c").then(a.bind(null,"09c0"))},data:function(){let e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-damage",t)}},computed:{damage_table(){return d},selected_keys(){let e=p(this.pkey,this.damage);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_damage(e.data)),e.key_list}}},g=h,f=(a("03c0"),a("2877")),y=Object(f["a"])(g,s,r,!1,null,"3200bbec",null);t["default"]=y.exports},ede3:function(e,t,a){}}]);
//# sourceMappingURL=mek-missile-damage.dc5645af.js.map