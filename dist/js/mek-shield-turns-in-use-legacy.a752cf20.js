(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-shield-turns-in-use"],{"072f":function(e,t,s){"use strict";s("6762"),s("2fdb");var n=s("a745"),i=s.n(n);s("cadf"),s("551c"),s("f751"),s("097d");t["a"]={methods:{selectedItem:function(e,t,s,n){var i="undefined"===typeof n?"":n;return"undefined"===typeof s?this[e]==t?"selected_item":i:this[e]==t?s:i},selectedItemMultiple:function(e,t,s,n){var u="undefined"===typeof n?"":n;return i()(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":u:this[e].includes(t)?s:u:""}}}},"69f3":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.turns_table,headers:{time:"Turns",cost:"Cost"},name:"Turns in Use",flow:"row","show-headers":!0,format:{cost:"multiplier"},"selected-indices":e.selected_turns_index},on:{"update-selected-indices":e.select_turns}})},i=[],u=s("072f"),c={name:"mek_shield_turns_in_use",props:["turnsInUse"],mixins:[u["a"]],components:{"mek-sub-component-table":function(){return s.e("chunk-5a8f0fc3").then(s.bind(null,"97ea"))}},data:function(){var e={turns_table:[{time:1,cost:.3},{time:2,cost:.4},{time:3,cost:.5},{time:4,cost:.6},{time:5,cost:.7},{time:7,cost:.8},{time:10,cost:.9},{time:"X",cost:1}]};return e},methods:{select_turns:function(e){this.$emit("update-turns-in-use",this.turns_table[e])}},computed:{selected_turns_index:function(){var e=7;return this.turns_table.some(function(t,s){return t.time==this.turnsInUse.time&&(e=s,!0)},this),this.turns_table[e].cost!==this.turnsInUse.cost&&this.select_turns(e),[e]}}},r=c,o=s("2877"),d=Object(o["a"])(r,n,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=mek-shield-turns-in-use-legacy.a752cf20.js.map