(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-damage","mek_missile-damage-data-module"],{"662e":function(e,t,a){"use strict";var s=a("8234"),r=a.n(s);r.a},"706d":function(e,t,a){"use strict";a.d(t,"d",function(){return s}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return d});let s=(e,t)=>a=>{if("undefined"===typeof a||!Array.isArray(t)||0==t.length)return!1;let s=e.some(e=>{return t.every(t=>{return a[t]==e[t]})});return s},r=e=>(t,a)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==a})},n=(e,t)=>(a,s)=>{let r=null;return t(a,s)&&e.some(e=>{if(e[a]==s)return r=e,!0},void 0),r},d=(e,t,a,s,r)=>(n,d)=>{let i=void 0,u=[],l=!1,o=[],c=JSON.stringify(d);return void 0!==d&&t(n,d[n])?e(d)?(i=JSON.parse(JSON.stringify(d)),u=[i[n]],l=!1):(i=JSON.parse(JSON.stringify(a(n,d[n]))),u=[i[n]],l=!0,o.push(r+": "+c),o.push("**** Invalid data. Reseting. ****")):(i=s,u=[i[n]],l=!0,o.push(r+": "+c),o.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:u,update:l,alerts:o}}},"7f35":function(e,t,a){"use strict";a.r(t),a.d(t,"damage_data_table",function(){return r}),a.d(t,"damage_validate",function(){return i}),a.d(t,"has_feature",function(){return u}),a.d(t,"get_feature",function(){return l}),a.d(t,"cleaned_feature",function(){return o});var s=a("706d");let r=Array.apply({},Array(20)).map((e,t)=>{let a=t+1,s=a/10,r=Math.round(3.5*Math.sqrt(a));return{damage:a,cost:s,range:r}}),n=["damage","cost","range"],d={damage:1,cost:.1,range:4},i=Object(s["d"])(r,n),u=Object(s["c"])(r),l=Object(s["b"])(r,u),o=Object(s["a"])(i,u,l,d,"Mek_Missile-Damage")},8234:function(e,t,a){},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},d899:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],n=(a("ac6a"),a("d866")),d=a("7f35"),i={name:"mek_missile_damage",props:["damage"],mixins:[n["a"]],components:{"mek-sub-component-table":()=>a.e("mek_sub-component-table").then(a.bind(null,"a949"))},data:function(){let e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-damage",t)}},computed:{damage_table(){return d["damage_data_table"]},selected_keys(){let e=Object(d["cleaned_feature"])(this.pkey,this.damage);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_damage(e.data)),e.key_list}}},u=i,l=(a("662e"),a("2877")),o=Object(l["a"])(u,s,r,!1,null,"f3d7da76",null);t["default"]=o.exports}}]);
//# sourceMappingURL=mek_missile-damage.8eb8c718.js.map