(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-energy-pool-pool"],{"5a76":function(e,a,t){},6554:function(e,a,t){"use strict";var r=t("5a76"),o=t.n(r);o.a},"706d":function(e,a,t){"use strict";t.d(a,"d",function(){return r}),t.d(a,"c",function(){return o}),t.d(a,"b",function(){return s}),t.d(a,"a",function(){return l});let r=(e,a)=>t=>{if("undefined"===typeof t||!Array.isArray(a)||0==a.length)return!1;let r=e.some(e=>{return!a.some(a=>{return t[a]!=e[a]})});return r},o=e=>(a,t)=>{return e.some(e=>{return void 0!==e[a]&&e[a]==t})},s=(e,a)=>(t,r)=>{let o=null;return a(t,r)&&e.some(e=>{if(e[t]==r)return o=e,!0},void 0),o},l=(e,a,t,r,o)=>(s,l)=>{let n=void 0,i=[],c=!1,p=[],d=JSON.stringify(l);return void 0!==l&&a(s,l[s])?e(l)?(n=JSON.parse(JSON.stringify(l)),i=[n[s]],c=!1):(n=JSON.parse(JSON.stringify(t(s,l[s]))),i=[n[s]],c=!0,p.push(o+": "+d),p.push("**** Invalid data. Reseting. ****")):(n=r,i=[n[s]],c=!0,p.push(o+": "+d),p.push("**** Invalid data. Reseting to default. ****")),{data:n,key_list:i,update:c,alerts:p}}},d866:function(e,a,t){"use strict";a["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},ed4f:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("mek-sub-component-table",{attrs:{items:e.energy_pool_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{cost:"Cost",power_available:"Power Available",max_power:"Maximum Power",damage_capacity:"DC"},name:"Energy Pool",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_energy_pool}})},o=[],s=(t("ac6a"),t("8fcf")),l=t("d866"),n=t("706d");let i=[{cost:10,power_available:0,max_power:50,damage_capacity:5},{cost:10,power_available:5,max_power:25,damage_capacity:4},{cost:20,power_available:10,max_power:40,damage_capacity:7},{cost:30,power_available:15,max_power:45,damage_capacity:8},{cost:40,power_available:20,max_power:50,damage_capacity:10},{cost:50,power_available:25,max_power:55,damage_capacity:11},{cost:60,power_available:30,max_power:60,damage_capacity:13}],c=["power_available","cost","max_power","damage_capacity"],p={cost:10,power_available:0,max_power:50,damage_capacity:5},d=Object(n["d"])(i,c),u=Object(n["c"])(i),_=Object(n["b"])(i,u),m=Object(n["a"])(d,u,_,p,"Mek_Energy_Pool-Pool");var y={name:"mek_energy_pool_pool",props:["energyPool"],mixins:[s["a"],l["a"]],components:{"mek-sub-component-table":()=>t.e("chunk-05dcdd1c").then(t.bind(null,"09c0"))},data:function(){let e={pkey:"power_available",alerts:[],suppressAlerts:!1};return e},methods:{select_energy_pool:function(e){this.$emit("update-energy-pool",JSON.parse(JSON.stringify(e)))}},computed:{energy_pool_table(){return i},selected_keys(){let e=m(this.pkey,this.energyPool);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_portfolio_size(e.data),e.key_list}}},h=y,g=(t("6554"),t("2877")),w=Object(g["a"])(h,r,o,!1,null,"3d77eaa7",null);a["default"]=w.exports}}]);
//# sourceMappingURL=mek-energy-pool-pool.91b8384d.js.map