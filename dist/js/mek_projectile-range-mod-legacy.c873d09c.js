(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-range-mod"],{"42bc":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.range_mod_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost"},name:"Range Mod",flow:"pkey-col","show-headers":!0,format:{range_mod:"percent",cost:"multiplier"}},on:{"update-selected-data":e.select_range_mod}})},a=[],o=(n("ac6a"),n("f499")),s=n.n(o),c=n("d866"),u=n("b801"),d={name:"mek_projectile_range_mod",props:["rangeMod","baseRange"],mixins:[c["a"]],components:{"mek-sub-component-table":function(){return n.e("chunk-6c105c2e").then(n.bind(null,"09c0"))}},data:function(){var e={alerts:[],suppressAlerts:!1,pkey:"range_mod"};return e},methods:{select_range_mod:function(e){var t=JSON.parse(s()(e));this.$emit("update-range-mod",t)}},computed:{range_mod_table:function(){return Object(u["create_range_mod_data_table"])(this.baseRange),u["range_mod_data_table"]},selected_keys:function(){var e=this,t=Object(u["cleaned_feature"])(this.pkey,this.rangeMod);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_range_mod(t.data)),t.key_list}},watch:{baseRange:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},i=d,l=n("2877"),g=Object(l["a"])(i,r,a,!1,null,null,null);t["default"]=g.exports},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return u}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return l});var r=n("f499"),a=n.n(r),o=n("a745"),s=n.n(o),c=(n("cadf"),n("551c"),n("f751"),n("097d"),void 0),u=function(e,t){return function(n){if("undefined"===typeof n||!s()(t)||0==t.length)return!1;var r=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return r}},d=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},i=function(e,t){return function(n,r){var a=null;return t(n,r)&&e.some(function(e){if(e[n]==r)return a=e,!0},c),a}},l=function(e,t,n,r,o){return function(s,c){var u=void 0,d=[],i=!1,l=[],g=a()(c);return void 0!==c&&t(s,c[s])?e(c)?(u=JSON.parse(a()(c)),d=[u[s]],i=!1):(u=JSON.parse(a()(n(s,c[s]))),d=[u[s]],i=!0,l.push(o+": "+g),l.push("**** Invalid data. Reseting. ****")):(u=r,d=[u[s]],i=!0,l.push(o+": "+g),l.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:d,update:i,alerts:l}}}},b801:function(e,t,n){"use strict";n.r(t),n.d(t,"range_mod_data_table",function(){return a}),n.d(t,"range_mod_validate",function(){return l}),n.d(t,"has_feature",function(){return g}),n.d(t,"get_feature",function(){return f}),n.d(t,"cleaned_feature",function(){return _}),n.d(t,"create_range_mod_data_table",function(){return c});var r=n("706d"),a=[],o=[{range_mod:0,cost:.5,range:0},{range_mod:.25,cost:.62,range:.75},{range_mod:.5,cost:.75,range:1.5},{range_mod:.75,cost:.88,range:2.25},{range_mod:1,cost:1,range:3},{range_mod:1.25,cost:1.12,range:3.75},{range_mod:1.5,cost:1.25,range:4.5},{range_mod:1.75,cost:1.38,range:5.25},{range_mod:2,cost:1.5,range:6},{range_mod:2.5,cost:1.75,range:7.5},{range_mod:3,cost:2,range:9}],s=!1,c=function(e){var t=void 0===e?3:e;a=o.map(function(e){return e.range=e.range_mod*t,e}),s=!1};c(3);var u=["range_modifier","cost","range"],d={range_mod:1,cost:1,range:3},i=Object(r["d"])(a,u),l=function(e){return s?i(e):(s=!0,i=Object(r["d"])(a,u),i(e))},g=Object(r["c"])(a),f=Object(r["b"])(a,g),_=Object(r["a"])(l,g,f,d,"Mek_Projectile-Range-Mod")},d866:function(e,t,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_projectile-range-mod-legacy.c873d09c.js.map