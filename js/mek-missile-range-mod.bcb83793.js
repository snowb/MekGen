(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-missile-range-mod"],{a06a:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.range_mod_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost",type:"Type"},name:"Range Mod",flow:"pkey-col","show-headers":!0,format:{range_mod:"percent",cost:"multiplier"}},on:{"update-selected-data":e.select_range_mod}})},a=[],s=(n("ac6a"),n("d866")),d=n("daf4");let o=[],i=[{range_mod:0,cost:.5,range:0,type:"Mine",id:1},{range_mod:0,cost:.5,range:0,type:"Bomb",id:2},{range_mod:.25,cost:.62,range:1,id:3},{range_mod:.5,cost:.75,range:2,id:4},{range_mod:.75,cost:.88,range:3,id:5},{range_mod:1,cost:1,range:4,id:6},{range_mod:1.25,cost:1.12,range:5,id:7},{range_mod:1.5,cost:1.25,range:6,id:8},{range_mod:1.75,cost:1.38,range:7,id:9},{range_mod:2,cost:1.5,range:8,id:10},{range_mod:5,cost:3,range:20,id:11},{range_mod:10,cost:5.5,range:40,id:12},{range_mod:30,cost:15.5,range:120,id:13},{range_mod:50,cost:25.5,range:200,id:14}],g=function(e){let t=void 0===e?4:e;o=i.map(e=>{return e.range=e.range_mod*t,e})};g(4);let l=["range_modifier","cost","range","type","id"],c={range_mod:1,cost:1,range:4,id:6},u=()=>{return Object(d["d"])(o,l)},m=Object(d["c"])(o),p=Object(d["b"])(o,m),_=Object(d["a"])(u,m,p,c,"Mek_Shield-Range-Mod");var h={name:"mek_missile_range_mod",props:["rangeMod","baseRange","antiMissile"],mixins:[s["a"]],components:{"mek-sub-component-table":()=>n.e("chunk-f60adeec").then(n.bind(null,"97ea"))},data:function(){let e={alerts:[],suppressAlerts:!1,pkey:"id"};return e},methods:{select_range_mod:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-range-mod",t)}},computed:{range_mod_table(){return g(this.baseRange),o},selected_keys(){let e=this.antiMissile&&1!=this.rangeMod.range_mod?{range_mod:1,cost:1,range:1*this.baseRange}:this.rangeMod,t=_(this.pkey,e);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),t.update&&this.select_range_mod(t.data),t.key_list}}},f=h,b=n("2877"),y=Object(b["a"])(f,r,a,!1,null,null,null);t["default"]=y.exports},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return d});let r=(e,t)=>n=>{if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;let r=e.some(e=>{return!t.some(t=>{return n[t]!=e[t]})});return r},a=e=>(t,n)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==n})},s=(e,t)=>(n,r)=>{if(t(n,r)){let t=null;return e.some(e=>{if(e[n]==r)return t=e,!0},void 0),t}},d=(e,t,n,r,a)=>(s,d)=>{let o=void 0,i=[],g=!1,l=[],c=JSON.stringify(d);return void 0!==d&&t(s,d[s])?e(d)?(o=JSON.parse(JSON.stringify(d)),i=[o[s]],g=!1):(o=JSON.parse(JSON.stringify(n(s,d[s]))),i=[o[s]],g=!0,l.push(a+": "+c),l.push("**** Invalid data. Reseting. ****")):(o=r,i=[o[s]],g=!0,l.push(a+": "+c),l.push("**** Invalid data. Reseting to default. ****")),{data:o,key_list:i,update:g,alerts:l}}}}]);
//# sourceMappingURL=mek-missile-range-mod.bcb83793.js.map