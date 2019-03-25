(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy_pool-main"],{fcc7:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[o("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.energy_pool_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),o("div",{staticClass:"mek-inline-flex-row"},[o("mek-energy-pool-pool",{staticStyle:{"align-self":"flex-start"},attrs:{"energy-pool":e.selected_energy_pool},on:{"update-energy-pool":e.updateEnergyPool}}),o("div",{staticClass:"mek-inline-flex-col"},[o("mek-energy-pool-size",{attrs:{"portfolio-size":e.selected_portfolio_size},on:{"update-portfolio-size":e.updatePortfolioSize}}),o("mek-energy-pool-feature",{staticStyle:{"align-self":"flex-start"},attrs:{"feature-array":e.feature_array},on:{"update-feature":e.updateFeature}})],1),o("mek-space-efficiency",{staticStyle:{"align-self":"flex-start"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1),o("div",{staticClass:"mek-inline-flex-row"},[o("mek-component-stats",{attrs:{cols:4,rows:5}},[o("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Portfolio Size: "+e._s(e.infinite_size?"Infinite":e.selected_portfolio_size.size))]),o("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),o("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),o("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),o("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),o("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),o("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),o("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_energy_pool.cost))]),o("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),o("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),o("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},s=[],n=o("f499"),a=o.n(n),c=(o("cadf"),o("551c"),o("f751"),o("097d"),o("8fcf")),l=o("7b4b"),r=o("f52e"),p={name:"mek_energy_pool",props:[],mixins:[c["a"],l["a"],r["a"]],components:{"mek-energy-pool-pool":function(){return o.e("mek-energy-pool-pool").then(o.bind(null,"696c"))},"mek-energy-pool-size":function(){return o.e("mek-energy-pool-size").then(o.bind(null,"a027"))},"mek-energy-pool-feature":function(){return o.e("mek-energy-pool-feature").then(o.bind(null,"048f"))},"mek-space-efficiency":function(){return o.e("mek-space-efficiency").then(o.bind(null,"cd4a"))},"mek-component-name":function(){return o.e("mek-component-name").then(o.bind(null,"192f"))},"mek-save-reset-component":function(){return o.e("mek-save-reset-component").then(o.bind(null,"c849"))},"mek-component-stats":function(){return o.e("mek-component-stats").then(o.bind(null,"d854"))}},data:function(){var e={uuid:null,component_name:null,component_category:"equipment",component_type:"energy-pool",original_component:null,component_changed:!0,damage_capacity:5,selected_energy_pool:{cost:10,power_available:0,max_power:50,damage_capacity:5},selected_portfolio_size:{size:3,cost:1},selected_morphable:!1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.portfolio_size=1,e.cost_multipliers.feature=1,e},methods:{updateComponentName:function(e){this.component_name=e,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateEnergyPool:function(e){this.selected_energy_pool.cost=e.cost,this.selected_energy_pool.power_available=e.power_available,this.selected_energy_pool.max_power=e.max_power,this.selected_energy_pool.damage_capacity=e.damage_capacity,this.component_changed=!0,this.damage_capacity=e.damage_capacity},updatePortfolioSize:function(e){this.selected_portfolio_size.cost=e.cost,this.selected_portfolio_size.size=e.size,this.cost_multipliers.portfolio_size=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.energy_pool_name,this.damage_capacity=this.fragile?1:this.selected_energy_pool.damage_capacity},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"selected_energy_pool",{cost:10,power_available:0,max_power:50,damage_capacity:5}),this.$set(this,"feature_array",[]),this.$set(this,"selected_portfolio_size",{size:3,cost:1}),this.selected_morphable=!1,this.cost_multipliers.portfolio_size=1,this.cost_multipliers.feature=1,this.$store.commit("saveComponent",null);break}},output_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="energy-pool",t.component_name=null===this.component_name?this.energy_pool_name:this.component_name,t.cost_multipliers=JSON.parse(a()(this.cost_multipliers)),t.efficiencies=JSON.parse(a()(this.efficiencies)),t.selected_energy_pool=JSON.parse(a()(this.selected_energy_pool)),t.selected_portfolio_size=JSON.parse(a()(this.selected_portfolio_size)),t.selected_portfolio_size.size=this.selected_portfolio_size.size===1/0?"Infinity":this.selected_portfolio_size.size,t.feature_array=JSON.parse(a()(this.feature_array)),t.selected_morphable=this.selected_morphable,t.cost=this.total_cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.damage_capacity=this.damage_capacity,this.$nextTick(function(){e.component_changed=!1}),this.original_component=a()(t),t},ingest_data:function(e){var t=this,o="Energy Pool is not valid, resetting.";this.universal_ingest_data(e,o),this.component_name==this.energy_pool_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1}),this.selected_portfolio_size.size="Infinity"==this.selected_portfolio_size.size?1/0:this.selected_portfolio_size.size}},computed:{raw_space:function(){return this.round(this.selected_energy_pool.cost*this.cost_multiplier,2)},cost:function(){var e=this.selected_energy_pool.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},energy_pool_name:function(){var e="";return e=this.feature_array.reduce(function(e,t){return e+t.feature+" "},e),e+=this.infinite_size?"Infinite-Portfolio ":"Portfolio-"+this.selected_portfolio_size.size+" ",e+" Energy Pool"},fragile:function(){return this.feature_array.some(function(e){if("fragile"==e.feature.toLowerCase())return!0})},infinite_size:function(){return this.selected_portfolio_size.size===1/0}}},_=p,u=o("2877"),m=Object(u["a"])(_,i,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=mek_energy_pool-main-legacy.18d23f91.js.map