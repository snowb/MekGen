(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-projectile-range-mod"],{9613:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("mek-sub-component-table",{attrs:{items:e.range_mod_table,headers:{range_mod:"Range Mod",range:"Range",cost:"Cost"},name:"Range Mod",flow:"col","show-headers":!0,format:{range_mod:"percent",cost:"multiplier"},"selected-indices":e.selected_range_mod_index},on:{"update-selected-indices":e.select_range_mod}})},o=[],r=a("072f"),s=a("8fcf"),d={name:"mek_range_mod",props:["rangeMod","baseRange"],mixins:[r["a"],s["a"]],components:{"mek-sub-component-table":()=>a.e("chunk-0a2ef8c8").then(a.bind(null,"97ea"))},data:function(){let e={range_mod_table:[{range_mod:0,cost:.5,range:0},{range_mod:.25,cost:.62,range:.75},{range_mod:.5,cost:.75,range:1.5},{range_mod:.75,cost:.88,range:2.25},{range_mod:1,cost:1,range:3},{range_mod:1.25,cost:1.12,range:3.75},{range_mod:1.5,cost:1.25,range:4.5},{range_mod:1.75,cost:1.38,range:5.25},{range_mod:2,cost:1.5,range:6},{range_mod:2.5,cost:1.75,range:7.5},{range_mod:3,cost:2,range:9}]};return e},methods:{select_range_mod:function(e){this.$emit("update-range-mod",this.range_mod_table[e])}},computed:{selected_range_mod_index:function(){let e=0;return this.rangeMod,this.range_mod_table.some((n,a)=>{if(n.range_mod==this.rangeMod.range_mod)return e=a,!0},this),this.rangeMod.cost!=this.range_mod_table[e].cost&&this.select_range_mod(e),[e]}},watch:{baseRange(e){let n=this.range_mod_table.map(n=>{return{range_mod:n.range_mod,cost:n.cost,range:e*n.range_mod}});this.$set(this,"range_mod_table",n)}}},g=d,m=a("2877"),c=Object(m["a"])(g,t,o,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=mek-projectile-range-mod.2ea36833.js.map