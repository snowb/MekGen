(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_magazine-main"],{6348:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":t.newComponent,"component-name":t.component_name||t.magazine_name,"component-changed":t.component_changed},on:{"update-component-name":t.updateComponentName}}),n("mek-magazine-select-gun",{attrs:{"selected-gun":t.selected_gun},on:{"update-gun":t.updateGun}}),n("span",{staticClass:"mek-flex-row"},[n("mek-magazine-ammo-list",{attrs:{"ammo-array":t.feature_array,"has-blast":t.hasBlast},on:{"update-ammo":t.updateAmmo}}),n("span",{staticClass:"mek-flex-col no-margin"},[n("mek-magazine-shots",{staticStyle:{"align-self":"baseline"},attrs:{shots:t.selected_shots},on:{"update-shots":t.updateShots}}),n("mek-component-stats",{attrs:{cols:3,rows:3}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Shots: "+t._s(t.selected_shots))]),n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Ammo Type(s):"),n("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[t._v(t._s(t.ammo_list))])]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[t._v("Space: "+t._s(t.space_cost))]),n("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[t._v("Weight: "+t._s(t.round(t.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[t._v("Base Cost: "+t._s(t.cost))]),n("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[t._v("Multiplier: x"+t._s(t.cost_multiplier))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row3"},slot:"col3-row3"},[t._v("Total Cost: "+t._s(t.cost))])]),n("mek-save-reset-component",{staticStyle:{"align-self":"baseline"},on:{"save-reset-component":t.componentSaveReset}})],1)],1)],1)},o=[],a=(n("a481"),n("7f7f"),n("f499")),i=n.n(a),c=(n("cadf"),n("551c"),n("f751"),n("097d"),n("8fcf")),r=n("7b4b"),m=n("f52e"),u={name:"mek_magazine",props:[],mixins:[c["a"],r["a"],m["a"]],components:{"mek-magazine-select-gun":function(){return n.e("mek-magazine-select-gun").then(n.bind(null,"9df6"))},"mek-magazine-ammo-list":function(){return n.e("mek-magazine-ammo-list").then(n.bind(null,"d09c"))},"mek-magazine-shots":function(){return n.e("mek-magazine-shots").then(n.bind(null,"eebc"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"192f"))},"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"c849"))},"mek-component-stats":function(){return n.e("mek-component-stats").then(n.bind(null,"d854"))}},data:function(){var t={uuid:null,component_name:null,component_category:"equipment",component_type:"magazine",original_component:null,component_changed:!0,selected_gun:{name:"",cost:1,uuid:null},feature_array:[{type:"High-Ex",cost:1,effect:"Standard"}],cost_multipliers:{}};return t.cost_multipliers["High-Ex"]=1,t.efficiencies={},t.efficiencies.space={},t.efficiencies.space.modifier=0,t.selected_shots=1,t},methods:{updateComponentName:function(t){this.component_name=t,this.component_changed=!0},updateGun:function(t,e){this.$set(this,"selected_gun",t),this.magazine_name,this.component_changed=!0,this.gun_name_change=e},updateAmmo:function(t){this.$set(this,"feature_array",t);var e=t.reduce(function(t,e){return t[e.type]=e.cost,t},{});this.$set(this,"cost_multipliers",e),this.component_changed=!0},updateShots:function(t){this.selected_shots=+t,this.component_changed=!0},componentSaveReset:function(t){var e="reset"==t&&null==this.original_component?"clear":t;switch(e){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.component_name=null,this.$set(this,"selected_gun",{name:"",cost:1,uuid:null}),this.$set(this,"feature_array",[{type:"High-Ex",cost:1}]),this.$set(this,"selected_shots",1),this.$store.commit("saveComponent",null);break}},output_data:function(){var t=this,e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="magazine",e.component_name=null===this.component_name?this.magazine_name:this.component_name,e.selected_gun=JSON.parse(i()(this.selected_gun)),e.feature_array=JSON.parse(i()(this.feature_array)),e.selected_shots=JSON.parse(i()(this.selected_shots)),e.hasBlast=JSON.parse(i()(this.hasBlast)),e.cost=this.cost,e.base_cost=this.base_cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.damage_capacity=this.damage_capacity,this.$nextTick(function(){t.component_changed=!1}),this.original_component=i()(e),e},ingest_data:function(t){var e=this,n="Magazine is not valid, resetting.";this.universal_ingest_data(t,n),this.component_name==this.magazine_name&&this.$set(this,"component_name",null),this.$nextTick(function(){e.gun_name_change?e.component_changed=!0:e.component_changed=!1})}},computed:{component_list:function(){return this.$store.getters.getComponentByType("equipment","projectile")},base_cost:function(){return this.round(.01*this.selected_gun.cost*this.selected_shots,2)},raw_space:function(){return this.base_cost},cost:function(){var t=this.base_cost*this.cost_multiplier;return this.round(t,2)},damage_capacity:function(){return this.space_cost},magazine_name:function(){this.selected_gun;var t=this.feature_array.reduce(function(t,e){return t+e.type+" "},"");t=t.trim();var e=""==this.selected_gun.name?"":this.selected_gun.name+" - ";return t=e+" "+t+" Ammo ("+this.selected_shots+")",t.replace(/\s+/," ")},hasBlast:function(){return this.feature_array.some(function(t){return/blast/gi.test(t.type)})},ammo_list:function(){return this.feature_array.reduce(function(t,e,n){return t+=n>0?", ":"",t+=e.type,t},"")}}},l=u,h=n("2877"),p=Object(h["a"])(l,s,o,!1,null,null,null);e["default"]=p.exports},"7f7f":function(t,e,n){var s=n("86cc").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,i="name";i in o||n("9e1e")&&s(o,i,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=mek_magazine-main-legacy.3afb4942.js.map