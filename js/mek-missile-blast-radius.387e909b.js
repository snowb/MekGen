(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-missile-blast-radius"],{"8f5d":function(s,t,a){"use strict";a.r(t);var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("mek-sub-component-table",{attrs:{items:s.blast_radius_table,headers:{blast_radius:"Radius (hex)",cost:"Cost"},"show-headers":!0,name:"Blast Radius",flow:"col",format:{cost:"multiplier",blast_radius:"nullzero"},"selected-indices":s.blast_radius_index},on:{"update-selected-indices":s.select_blast_radius}})},e=[],l=a("072f"),u=a("8fcf"),r={name:"mek_missile_blast_radius",props:["blast_radius"],mixins:[l["a"],u["a"]],components:{"mek-sub-component-table":()=>a.e("chunk-0a2ef8c8").then(a.bind(null,"97ea"))},data:function(){let s={blast_radius_table:[{blast_radius:0,cost:1},{blast_radius:1,cost:3},{blast_radius:2,cost:4},{blast_radius:3,cost:5},{blast_radius:4,cost:6},{blast_radius:5,cost:7},{blast_radius:6,cost:7.5},{blast_radius:7,cost:8},{blast_radius:8,cost:8.5},{blast_radius:9,cost:9},{blast_radius:10,cost:10},{blast_radius:20,cost:20}]};return s},methods:{select_blast_radius:function(s){this.$emit("update-blast-radius",this.blast_radius_table[s])}},computed:{blast_radius_index:function(){let s=0;return this.blast_radius,this.blast_radius_table.some(function(t,a){return t.blast_radius==this.blast_radius.blast_radius&&(s=a,!0)},this),this.blast_radius_table[s].cost!==this.blast_radius.cost&&this.select_blast_radius(s),[s]}}},d=r,b=a("2877"),_=Object(b["a"])(d,i,e,!1,null,"2151f507",null);t["default"]=_.exports}}]);
//# sourceMappingURL=mek-missile-blast-radius.387e909b.js.map