(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-magazine-select-gun"],{"9df6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.gun_table,headers:{name:"Name",cost:"Cost"},"show-headers":!0,name:"Gun Table",flow:"dropdown","selected-indices":e.gun_index},on:{"update-selected-indices":e.select_gun}})},u=[],i=n("a4bb"),a=n.n(i),c=(n("7f7f"),n("072f")),o=n("8fcf"),r={name:"mek_magazine_select_gun",props:["selectedGun"],mixins:[c["a"],o["a"]],components:{"mek-sub-component-table":function(){return n.e("chunk-5a8f0fc3").then(n.bind(null,"97ea"))}},data:function(){var e={pkey:"uuid"};return e},methods:{select_gun:function(e,t){this.$emit("update-gun",this.gun_table[e],t)}},computed:{gun_index:function(){var e=0;switch(this.gun_table.some(function(t,n){return t.uuid==this.selectedGun.uuid&&(e=n,!0)},this),!0){case this.selectedGun.name!=this.gun_table[e].name:this.select_gun(e,!0);break;case this.selectedGun.cost!=this.gun_table[e].cost:this.select_gun(e,!1);break}return[e]},gun_table:function(){var e=this,t=this.$store.getters.getComponentByType("equipment","projectile");return"undefined"===typeof t?[]:(t=a()(t),t=t.map(function(t){var n=e.$store.getters.getComponent(t),s=n.component_name,u=n.cost,i=n.uuid;return{name:s,cost:u,uuid:i}},this),t.splice(0,0,{name:"(none)",cost:1,uuid:null}),t)}}},l=r,d=n("2877"),m=Object(d["a"])(l,s,u,!1,null,"f3424082",null);t["default"]=m.exports}}]);
//# sourceMappingURL=mek-magazine-select-gun-legacy.28744aa8.js.map