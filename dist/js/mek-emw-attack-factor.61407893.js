(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-attack-factor"],{"14f3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mek-sub-component-table",{attrs:{items:t.attack_factor_table,pkey:t.pkey,"selected-keys":t.selected_keys,headers:{attack_factor:"AF",cost:"Cost"},name:"Attack Factor",flow:"pkey-row","show-headers":!0,format:{cost:"multiplier",attack_factor:"nullzero"}},on:{"update-selected-data":t.select_attack_factor}})},s=[],c=(a("ac6a"),a("8fcf")),o=a("d866"),n=a("daf4");let i=[{attack_factor:0,cost:1},{attack_factor:1,cost:1.5},{attack_factor:2,cost:2},{attack_factor:3,cost:2.5},{attack_factor:4,cost:3},{attack_factor:5,cost:3.5}],l=["attack_factor","cost"],u={attack_factor:0,cost:1},f=Object(n["d"])(i,l),d=Object(n["c"])(i),k=Object(n["b"])(i,d),p=Object(n["a"])(f,d,k,u,"Mek_EMW-Attack-Factor");var h={name:"mek_emw_attack_factor",props:["attackFactor"],mixins:[c["a"],o["a"]],components:{"mek-sub-component-table":()=>a.e("chunk-8793beec").then(a.bind(null,"97ea"))},data:function(){let t={alerts:[],pkey:"attack_factor",suppresAlerts:!1};return t},methods:{select_attack_factor:function(t){let e=JSON.parse(JSON.stringify(t));this.$emit("update-attack-factor",e)}},computed:{attack_factor_table(){return i},selected_keys(){let t=p(this.pkey,this.attackFactor);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(t=>{this.addAlert(t)}),this.publishAlerts()),t.update&&this.select_attack_factor(t.data),t.key_list}}},_=h,m=a("2877"),b=Object(m["a"])(_,r,s,!1,null,"2531ad1c",null);e["default"]=b.exports},d866:function(t,e,a){"use strict";e["a"]={methods:{addAlert(t){this.alerts.push(t)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(t,e,a){"use strict";a.d(e,"d",function(){return r}),a.d(e,"c",function(){return s}),a.d(e,"b",function(){return c}),a.d(e,"a",function(){return o});let r=(t,e)=>a=>{if("undefined"===typeof a||!Array.isArray(e)||0==e.length)return!1;let r=t.some(t=>{return!e.some(e=>{return a[e]!=t[e]})});return r},s=t=>(e,a)=>{return t.some(t=>{return void 0!==t[e]&&t[e]==a})},c=(t,e)=>(a,r)=>{if(e(a,r)){let e=null;return t.some(t=>{if(t[a]==r)return e=t,!0},void 0),e}},o=(t,e,a,r,s)=>(c,o)=>{let n=void 0,i=[],l=!1,u=[],f=JSON.stringify(o);return void 0!==o&&e(c,o[c])?t(o)?(n=JSON.parse(JSON.stringify(o)),i=[n[c]],l=!1):(n=JSON.parse(JSON.stringify(a(c,o[c]))),i=[n[c]],l=!0,u.push(s+": "+f),u.push("**** Invalid data. Reseting. ****")):(n=r,i=[n[c]],l=!0,u.push(s+": "+f),u.push("**** Invalid data. Reseting to default. ****")),{data:n,key_list:i,update:l,alerts:u}}}}]);
//# sourceMappingURL=mek-emw-attack-factor.61407893.js.map