(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-damage"],{"97c5":function(e,t,a){},"9be7":function(e,t,a){"use strict";var s=a("97c5"),r=a.n(s);r.a},c787:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],n=(a("ac6a"),a("072f")),i=a("8fcf"),d=a("d866");let l=Array.apply({},Array(20)).map((e,t)=>{let a=t+1,s=a;return{damage:a,cost:s}}),u={damage:1,cost:1},o=e=>{if("undefined"===typeof e)return!1;let t=l.some(t=>{return t.damage==e.damage&&t.cost==e.cost});return t},m=(e,t)=>{return l.some(a=>{return void 0!==a[e]&&a[e]==t})},c=(e,t)=>{if(m(e,t)){let a=null;return l.some(s=>{if(s[e]==t)return a=s,!0},void 0),a}},p=function(e,t){let a=void 0,s=[],r=!1,n=[],i=JSON.stringify(t);return void 0!==t&&m(e,t[e])?o(t)?(a=JSON.parse(JSON.stringify(t)),s=[a[e]],r=!1):(a=JSON.parse(JSON.stringify(c(e,t[e]))),s=[a[e]],r=!0,n.push("Mek_EMW-Damage: "+i),n.push("**** Invalid data. Reseting. ****")):(a=u,s=[a[e]],r=!0,n.push("Mek_EMW-Damage: "+i),n.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:s,update:r,alerts:n}};var h={name:"mek_emw_damage",props:["damage"],mixins:[n["a"],i["a"],d["a"]],components:{"mek-sub-component-table":()=>a.e("chunk-0a2ef8c8").then(a.bind(null,"97ea"))},data:function(){let e={pkey:"damage",alerts:[],suppressAlerts:!1};return e},methods:{select_damage:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-damage",t)}},computed:{damage_table(){return l},selected_keys(){let e=p(this.pkey,this.damage);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_damage(e.data),e.key_list}}},g=h,f=(a("9be7"),a("2877")),k=Object(f["a"])(g,s,r,!1,null,"badc57d6",null);t["default"]=k.exports},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-emw-damage.5c180e32.js.map