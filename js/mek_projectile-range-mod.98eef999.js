(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-range-mod","mek_projectile-range-mod-data-module"],{"42bc":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.range_mod_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost"},name:"Range Mod",flow:"pkey-col","show-headers":!0,format:{range_mod:"percent",cost:"multiplier"}},on:{"update-selected-data":e.select_range_mod}})},a=[],s=(r("ac6a"),r("d866")),o=r("b801"),d={name:"mek_projectile_range_mod",props:["rangeMod","baseRange"],mixins:[s["a"]],components:{"mek-sub-component-table":()=>r.e("mek_sub-component-table").then(r.bind(null,"a949"))},data:function(){let e={alerts:[],suppressAlerts:!1,pkey:"range_mod"};return e},methods:{select_range_mod:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-range-mod",t)}},computed:{range_mod_table(){return Object(o["create_range_mod_data_table"])(this.baseRange),o["range_mod_data_table"]},selected_keys(){let e=Object(o["cleaned_feature"])(this.pkey,this.rangeMod);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&(this.$emit("alert-generated",!0),this.select_range_mod(e.data)),e.key_list}},watch:{baseRange:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},i=d,u=r("2877"),c=Object(u["a"])(i,n,a,!1,null,null,null);t["default"]=c.exports},"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"c",function(){return a}),r.d(t,"b",function(){return s}),r.d(t,"a",function(){return o});let n=(e,t)=>r=>{if("undefined"===typeof r||!Array.isArray(t)||0==t.length)return!1;let n=e.some(e=>{return t.every(t=>{return r[t]==e[t]})});return n},a=e=>(t,r)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==r})},s=(e,t)=>(r,n)=>{let a=null;return t(r,n)&&e.some(e=>{if(e[r]==n)return a=e,!0},void 0),a},o=(e,t,r,n,a)=>(s,o)=>{let d=void 0,i=[],u=!1,c=[],l=JSON.stringify(o);return void 0!==o&&t(s,o[s])?e(o)?(d=JSON.parse(JSON.stringify(o)),i=[d[s]],u=!1):(d=JSON.parse(JSON.stringify(r(s,o[s]))),i=[d[s]],u=!0,c.push(a+": "+l),c.push("**** Invalid data. Reseting. ****")):(d=n,i=[d[s]],u=!0,c.push(a+": "+l),c.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:i,update:u,alerts:c}}},b801:function(e,t,r){"use strict";r.r(t),r.d(t,"range_mod_data_table",function(){return a}),r.d(t,"range_mod_validate",function(){return l}),r.d(t,"has_feature",function(){return g}),r.d(t,"get_feature",function(){return m}),r.d(t,"cleaned_feature",function(){return _}),r.d(t,"create_range_mod_data_table",function(){return d});var n=r("706d");let a=[],s=[{range_mod:0,cost:.5,range:0},{range_mod:.25,cost:.62,range:.75},{range_mod:.5,cost:.75,range:1.5},{range_mod:.75,cost:.88,range:2.25},{range_mod:1,cost:1,range:3},{range_mod:1.25,cost:1.12,range:3.75},{range_mod:1.5,cost:1.25,range:4.5},{range_mod:1.75,cost:1.38,range:5.25},{range_mod:2,cost:1.5,range:6},{range_mod:2.5,cost:1.75,range:7.5},{range_mod:3,cost:2,range:9}],o=!1,d=e=>{let t=void 0===e?3:e;a=s.map(e=>{return e.range=e.range_mod*t,e}),o=!1};d(3);let i=["range_modifier","cost","range"],u={range_mod:1,cost:1,range:3},c=Object(n["d"])(a,i),l=e=>{return o?c(e):(o=!0,c=Object(n["d"])(a,i),c(e))},g=Object(n["c"])(a),m=Object(n["b"])(a,g),_=Object(n["a"])(l,g,m,u,"Mek_Projectile-Range-Mod")},d866:function(e,t,r){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_projectile-range-mod.98eef999.js.map