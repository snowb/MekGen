(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-magazine-select-gun"],{"9df6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.gun_table,headers:{name:"Name",cost:"Cost"},showHeaders:!0,name:"Gun Table",flow:"dropdown",selectedIndices:e.gun_index},on:{"update-selected-indices":e.select_gun}})},u=[],a=(n("ac6a"),n("072f")),c=n("8fcf"),i={name:"mek_magazine_select_gun",props:["selectedGun"],mixins:[a["a"],c["a"]],components:{"mek-sub-component-table":()=>n.e("chunk-0a2ef8c8").then(n.bind(null,"97ea"))},data:function(){let e={pkey:"uuid"};return e},methods:{select_gun:function(e,t){this.$emit("update-gun",this.gun_table[e],t)}},computed:{gun_index:function(){let e=0;switch(this.gun_table.some(function(t,n){return t.uuid==this.selectedGun.uuid&&(e=n,!0)},this),!0){case this.selectedGun.name!=this.gun_table[e].name:this.select_gun(e,!0);break;case this.selectedGun.cost!=this.gun_table[e].cost:this.select_gun(e,!1);break}return[e]},gun_table(){let e=this.$store.getters.getComponentByType("equipment","projectile");return"undefined"===typeof e?[]:(e=Object.keys(e),e=e.map(e=>{let t=this.$store.getters.getComponent(e),n=t.component_name,s=t.cost,u=t.uuid;return{name:n,cost:s,uuid:u}},this),e.splice(0,0,{name:"(none)",cost:1,uuid:null}),e)}}},o=i,l=n("2877"),d=Object(l["a"])(o,s,u,!1,null,"42619af6",null);t["default"]=d.exports}}]);
//# sourceMappingURL=mek-magazine-select-gun.51edb039.js.map