(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-damage","mek_beam-damage-data-module"],{"706d":function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return d});let r=(e,t)=>a=>{if("undefined"===typeof a||!Array.isArray(t)||0==t.length)return!1;let r=e.some(e=>{return t.every(t=>{return a[t]==e[t]})});return r},s=e=>(t,a)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==a})},n=(e,t)=>(a,r)=>{let s=null;return t(a,r)&&e.some(e=>{if(e[a]==r)return s=e,!0},void 0),s},d=(e,t,a,r,s)=>(n,d)=>{let u=void 0,i=[],l=!1,o=[],c=JSON.stringify(d);return void 0!==d&&t(n,d[n])?e(d)?(u=JSON.parse(JSON.stringify(d)),i=[u[n]],l=!1):(u=JSON.parse(JSON.stringify(a(n,d[n]))),i=[u[n]],l=!0,o.push(s+": "+c),o.push("**** Invalid data. Reseting. ****")):(u=r,i=[u[n]],l=!0,o.push(s+": "+c),o.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:i,update:l,alerts:o}}},7701:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},s=[],n=(a("ac6a"),a("d866")),d=a("999d"),u={name:"mek_beam_damage",props:["damage"],mixins:[n["a"]],components:{"mek-sub-component-table":()=>a.e("mek_sub-component-table").then(a.bind(null,"09c0"))},data:function(){let e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-damage",t)}},computed:{damage_table(){return d["damage_data_table"]},selected_keys(){let e=Object(d["cleaned_feature"])(this.pkey,this.damage);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_damage(e.data)),e.key_list}}},i=u,l=a("2877"),o=Object(l["a"])(i,r,s,!1,null,null,null);t["default"]=o.exports},"999d":function(e,t,a){"use strict";a.r(t),a.d(t,"damage_data_table",function(){return s}),a.d(t,"damage_validate",function(){return u}),a.d(t,"has_feature",function(){return i}),a.d(t,"get_feature",function(){return l}),a.d(t,"cleaned_feature",function(){return o});var r=a("706d");let s=Array.apply({},Array(20)).map((e,t)=>{let a=t+1,r=1.5*a,s=Math.round(4*Math.sqrt(a));return{damage:a,cost:r,range:s}}),n=["damage","cost","range"],d={damage:1,cost:1,range:4},u=Object(r["d"])(s,n),i=Object(r["c"])(s),l=Object(r["b"])(s,i),o=Object(r["a"])(u,i,l,d,"Mek_Beam-Damage")},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_beam-damage.2b6483e2.js.map