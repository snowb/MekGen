(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-shield-defense-ability"],{"072f":function(e,t,s){"use strict";t["a"]={methods:{selectedItem:function(e,t,s,n){let i="undefined"===typeof n?"":n;return"undefined"===typeof s?this[e]==t?"selected_item":i:this[e]==t?s:i},selectedItemMultiple:function(e,t,s,n){let i="undefined"===typeof n?"":n;return Array.isArray(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":i:this[e].includes(t)?s:i:""}}}},"110f":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.da_table,headers:{da:"DA",cost:"Cost"},name:"Defense Ability",flow:"row","show-headers":!0,format:{cost:"multiplier"},"selected-indices":e.selected_da_index},on:{"update-selected-indices":e.select_da}})},i=[],d=s("072f"),a={name:"mek_shield_defense_ability",props:["defense_ability","cost"],mixins:[d["a"]],components:{"mek-sub-component-table":()=>s.e("chunk-0a2ef8c8").then(s.bind(null,"97ea"))},data:function(){let e={da_table:[{da:-4,cost:.6},{da:-3,cost:.8},{da:-2,cost:1},{da:-1,cost:1.25},{da:0,cost:1.5}]};return e},methods:{select_da:function(e){this.$emit("update-defense-ability",this.da_table[e])}},computed:{selected_da_index:function(){let e=2;return this.da_table.some(function(t,s){return t.da==this.defense_ability&&(e=s,!0)},this),this.da_table[e].cost!==this.cost&&this.select_da(e),[e]}}},l=a,c=s("2877"),o=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=mek-shield-defense-ability.6d294ef9.js.map