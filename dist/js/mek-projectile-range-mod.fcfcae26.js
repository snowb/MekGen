(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-projectile-range-mod"],{9613:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.range_mod_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost"},name:"Range Mod",flow:"pkey-col","show-headers":!0,format:{range_mod:"percent",cost:"multiplier"}},on:{"update-selected-data":e.select_range_mod}})},a=[],s=(r("ac6a"),r("d866")),o=r("daf4");let d=[],i=[{range_mod:0,cost:.5,range:0},{range_mod:.25,cost:.62,range:.75},{range_mod:.5,cost:.75,range:1.5},{range_mod:.75,cost:.88,range:2.25},{range_mod:1,cost:1,range:3},{range_mod:1.25,cost:1.12,range:3.75},{range_mod:1.5,cost:1.25,range:4.5},{range_mod:1.75,cost:1.38,range:5.25},{range_mod:2,cost:1.5,range:6},{range_mod:2.5,cost:1.75,range:7.5},{range_mod:3,cost:2,range:9}],l=!1,c=e=>{let t=void 0===e?3:e;d=i.map(e=>{return e.range=e.range_mod*t,e}),l=!1};c(3);let u=["range_modifier","cost","range"],g={range_mod:1,cost:1,range:3},m=Object(o["d"])(d,u),p=e=>{return l?m(e):(l=!0,m=Object(o["d"])(d,u),m(e))},_=Object(o["c"])(d),h=Object(o["b"])(d,_),f=Object(o["a"])(p,_,h,g,"Mek_Projectile-Range-Mod");var b={name:"mek_projectile_range_mod",props:["rangeMod","baseRange"],mixins:[s["a"]],components:{"mek-sub-component-table":()=>r.e("chunk-f60adeec").then(r.bind(null,"97ea"))},data:function(){let e={alerts:[],suppressAlerts:!1,pkey:"range_mod"};return e},methods:{select_range_mod:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-range-mod",t)}},computed:{range_mod_table(){return c(this.baseRange),d},selected_keys(){let e=f(this.pkey,this.rangeMod);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_range_mod(e.data),e.key_list}}},k=b,y=r("2877"),O=Object(y["a"])(k,n,a,!1,null,null,null);t["default"]=O.exports},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"c",function(){return a}),r.d(t,"b",function(){return s}),r.d(t,"a",function(){return o});let n=(e,t)=>r=>{if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;let n=e.some(e=>{return!t.some(t=>{return r[t]!=e[t]})});return n},a=e=>(t,r)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==r})},s=(e,t)=>(r,n)=>{let a=null;return t(r,n)&&e.some(e=>{if(e[r]==n)return a=e,!0},void 0),a},o=(e,t,r,n,a)=>(s,o)=>{let d=void 0,i=[],l=!1,c=[],u=JSON.stringify(o);return void 0!==o&&t(s,o[s])?e(o)?(d=JSON.parse(JSON.stringify(o)),i=[d[s]],l=!1):(d=JSON.parse(JSON.stringify(r(s,o[s]))),i=[d[s]],l=!0,c.push(a+": "+u),c.push("**** Invalid data. Reseting. ****")):(d=n,i=[d[s]],l=!0,c.push(a+": "+u),c.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:i,update:l,alerts:c}}}}]);
//# sourceMappingURL=mek-projectile-range-mod.fcfcae26.js.map