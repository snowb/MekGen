(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-missile-range-mod"],{"492e":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.range_mod_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost",type:"Type"},name:"Range Mod",flow:"pkey-col","show-headers":!0,format:{range_mod:"percent",cost:"multiplier"}},on:{"update-selected-data":e.select_range_mod}})},n=[],a=(s("ac6a"),s("d866")),d=s("706d");let i=[],o=[{range_mod:0,cost:.5,range:0,type:"Mine",id:1},{range_mod:0,cost:.5,range:0,type:"Bomb",id:2},{range_mod:.25,cost:.62,range:1,id:3},{range_mod:.5,cost:.75,range:2,id:4},{range_mod:.75,cost:.88,range:3,id:5},{range_mod:1,cost:1,range:4,id:6},{range_mod:1.25,cost:1.12,range:5,id:7},{range_mod:1.5,cost:1.25,range:6,id:8},{range_mod:1.75,cost:1.38,range:7,id:9},{range_mod:2,cost:1.5,range:8,id:10},{range_mod:5,cost:3,range:20,id:11},{range_mod:10,cost:5.5,range:40,id:12},{range_mod:30,cost:15.5,range:120,id:13},{range_mod:50,cost:25.5,range:200,id:14}],l=!1,g=e=>{let t=void 0===e?4:e;i=o.map(e=>{return e.range=e.range_mod*t,e}),l=!1};g(4);let c=["range_modifier","cost","type","id"],u={range_mod:1,cost:1,range:4,id:6},m=Object(d["d"])(i,c),p=e=>{return l?m(e):(l=!0,m=Object(d["d"])(i,c),m(e))},h=Object(d["c"])(i),_=Object(d["b"])(i,h),f=Object(d["a"])(p,h,_,u,"Mek_Shield-Range-Mod");var b={name:"mek_missile_range_mod",props:["rangeMod","baseRange","antiMissile"],mixins:[a["a"]],components:{"mek-sub-component-table":()=>s.e("chunk-3bc3f484").then(s.bind(null,"09c0"))},data:function(){let e={alerts:[],suppressAlerts:!1,pkey:"id"};return e},methods:{select_range_mod:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-range-mod",t)}},computed:{range_mod_table(){return this.suppressAlerts=!0,g(this.baseRange),i},selected_keys(){let e=this.antiMissile&&1!=this.rangeMod.range_mod?{range_mod:1,cost:1,range:1*this.baseRange}:this.rangeMod,t=f(this.pkey,e);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),t.update&&this.select_range_mod(t.data),this.suppressAlerts=!1,t.key_list}},watch:{baseRange:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},y=b,k=s("2877"),O=Object(k["a"])(y,r,n,!1,null,null,null);t["default"]=O.exports},"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return r}),s.d(t,"c",function(){return n}),s.d(t,"b",function(){return a}),s.d(t,"a",function(){return d});let r=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let r=e.some(e=>{return!t.some(t=>{return s[t]!=e[t]})});return r},n=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},a=(e,t)=>(s,r)=>{let n=null;return t(s,r)&&e.some(e=>{if(e[s]==r)return n=e,!0},void 0),n},d=(e,t,s,r,n)=>(a,d)=>{let i=void 0,o=[],l=!1,g=[],c=JSON.stringify(d);return void 0!==d&&t(a,d[a])?e(d)?(i=JSON.parse(JSON.stringify(d)),o=[i[a]],l=!1):(i=JSON.parse(JSON.stringify(s(a,d[a]))),o=[i[a]],l=!0,g.push(n+": "+c),g.push("**** Invalid data. Reseting. ****")):(i=r,o=[i[a]],l=!0,g.push(n+": "+c),g.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:o,update:l,alerts:g}}},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-missile-range-mod.6b7ab1f3.js.map