(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-defense-ability","mek_shield-defense-ability-data-module"],{"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return a}),s.d(t,"c",function(){return n}),s.d(t,"b",function(){return r}),s.d(t,"a",function(){return i});let a=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let a=e.some(e=>{return t.every(t=>{return s[t]==e[t]})});return a},n=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},r=(e,t)=>(s,a)=>{let n=null;return t(s,a)&&e.some(e=>{if(e[s]==a)return n=e,!0},void 0),n},i=(e,t,s,a,n)=>(r,i)=>{let d=void 0,l=[],u=!1,o=[],c=JSON.stringify(i);return void 0!==i&&t(r,i[r])?e(i)?(d=JSON.parse(JSON.stringify(i)),l=[d[r]],u=!1):(d=JSON.parse(JSON.stringify(s(r,i[r]))),l=[d[r]],u=!0,o.push(n+": "+c),o.push("**** Invalid data. Reseting. ****")):(d=a,l=[d[r]],u=!0,o.push(n+": "+c),o.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:l,update:u,alerts:o}}},a7da:function(e,t,s){"use strict";s.r(t),s.d(t,"da_data_table",function(){return n}),s.d(t,"da_validate",function(){return d}),s.d(t,"has_feature",function(){return l}),s.d(t,"get_feature",function(){return u}),s.d(t,"cleaned_feature",function(){return o});var a=s("706d");let n=[{da:-4,cost:.6,name:"Micro"},{da:-3,cost:.8,name:"Small"},{da:-2,cost:1,name:"Medium"},{da:-1,cost:1.25,name:"Large"},{da:0,cost:1.5,name:"Huge"}],r=["da","cost"],i={da:-2,cost:1},d=Object(a["d"])(n,r),l=Object(a["c"])(n),u=Object(a["b"])(n,l),o=Object(a["a"])(d,l,u,i,"Mek_Shield-Defense-Ability")},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},e030:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.da_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{da:"DA",cost:"Cost"},name:"Defense Ability",flow:"pkey-row","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_da}})},n=[],r=(s("ac6a"),s("d866")),i=s("a7da"),d={name:"mek_shield_defense_ability",props:["defense_ability","cost"],mixins:[r["a"]],components:{"mek-sub-component-table":()=>s.e("mek_sub-component-table").then(s.bind(null,"a949"))},data:function(){let e={alerts:[],pkey:"da",suppressAlerts:!1};return e},methods:{select_da:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-defense-ability",t)}},computed:{da_table(){return i["da_data_table"]},selected_keys(){let e=Object(i["cleaned_feature"])(this.pkey,this.defense_ability);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_da(e.data)),e.key_list}}},l=d,u=s("2877"),o=Object(u["a"])(l,a,n,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=mek_shield-defense-ability.e555f39a.js.map