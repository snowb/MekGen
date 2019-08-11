(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_energy_pool-main~a97bfcba"],{"7b4b":function(e,t,o){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)if("object"===typeof this.cost_multipliers[t])for(let o in this.cost_multipliers[t])e*=this.cost_multipliers[t][o];else e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,o){return e+=o>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,o){"use strict";o("ac6a"),o("6b54"),o("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let o=10**+t;return Math.round(+e*o)/o},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},"9dcf":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[o("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.energy_pool_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),o("div",{staticClass:"mek-inline-flex-row"},[o("mek-energy-pool-pool",{staticStyle:{"align-self":"flex-start"},attrs:{"energy-pool":e.selected_energy_pool},on:{"update-energy-pool":e.updateEnergyPool,"alert-generated":e.handleAlert}}),o("div",{staticClass:"mek-inline-flex-col"},[o("mek-energy-pool-size",{attrs:{"portfolio-size":e.selected_portfolio_size},on:{"update-portfolio-size":e.updatePortfolioSize,"alert-generated":e.handleAlert}}),o("mek-energy-pool-feature",{staticStyle:{"align-self":"flex-start"},attrs:{"feature-array":e.feature_array},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}})],1),o("mek-space-efficiency",{staticStyle:{"align-self":"flex-start"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-Energy_Pool"},on:{"update-efficiencies":e.updateEfficiencies}})],1),o("div",{staticClass:"mek-inline-flex-row"},[o("mek-component-stats",{attrs:{cols:4,rows:5}},[o("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Portfolio Size: "+e._s(e.infinite_size?"Infinite":e.selected_portfolio_size.size))]),o("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),o("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),o("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),o("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),o("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),o("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),o("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_energy_pool.cost))]),o("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),o("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),o("mek-save-reset-component",{attrs:{"active-buttons":e.activeButtons},on:{"save-reset-component":e.componentSaveReset}})],1)],1)},s=[],n=o("8fcf"),a=o("7b4b"),r=o("f52e"),l={name:"mek_energy_pool",props:[],mixins:[n["a"],a["a"],r["a"]],components:{"mek-energy-pool-pool":()=>o.e("mek_energy_pool-pool~a97bfcba").then(o.bind(null,"ed4f")),"mek-energy-pool-size":()=>o.e("mek_energy_pool-size~a97bfcba").then(o.bind(null,"c177")),"mek-energy-pool-feature":()=>o.e("mek_energy_pool-feature~a97bfcba").then(o.bind(null,"0af0")),"mek-space-efficiency":()=>o.e("mek-space-efficiency~a97bfcba").then(o.bind(null,"57c1")),"mek-component-name":()=>o.e("mek-component-name~31ecd969").then(o.bind(null,"4a3f")),"mek-save-reset-component":()=>o.e("mek-save-reset-component~31ecd969").then(o.bind(null,"972e")),"mek-component-stats":()=>o.e("mek_component-stats~d62c8532").then(o.bind(null,"67b1"))},data:function(){let e={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"energy-pool",original_component:null,component_changed:!0,damage_capacity:5,selected_energy_pool:{cost:10,power_available:0,max_power:50,damage_capacity:5},selected_portfolio_size:{size:3,cost:1},selected_morphable:!1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.selected_portfolio_size=1,e.cost_multipliers.feature_array=1,e.hasAlert=!1,e},methods:{updateComponentName(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateEnergyPool(e){this.selected_energy_pool.cost=e.cost,this.selected_energy_pool.power_available=e.power_available,this.selected_energy_pool.max_power=e.max_power,this.selected_energy_pool.damage_capacity=e.damage_capacity,this.component_changed=!0,this.damage_capacity=e.damage_capacity},updatePortfolioSize(e){this.selected_portfolio_size.cost=e.cost,this.selected_portfolio_size.size=e.size,this.cost_multipliers.selected_portfolio_size=e.cost,this.component_changed=!0},updateFeature(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature_array=this.feature_array.reduce((e,t)=>{return e*t.cost},1),this.energy_pool_name,this.damage_capacity=this.fragile?1:this.selected_energy_pool.damage_capacity,this.selected_morphable=this.feature_array.some(e=>{return"Morphable"==e.feature})},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"new":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"delete":this.uuid&&(this.$store.commit("deleteComponent",{category:this.component_category,type:this.component_type,uuid:this.uuid}),this.uuid=null,this.$emit("updateMSMKey"));case"new":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"selected_energy_pool",{cost:10,power_available:0,max_power:50,damage_capacity:5}),this.$set(this,"feature_array",[]),this.$set(this,"selected_portfolio_size",{size:3,cost:1}),this.selected_morphable=!1,this.cost_multipliers.portfolio_size=1,this.cost_multipliers.feature=1,this.$store.commit("saveComponent",null);break}},output_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="energy-pool",e.component_name=null===this.component_name?this.energy_pool_name:this.component_name,e.custom_component_name=this.custom_component_name,e.cost_multipliers=this.cost_multipliers,e.efficiencies=this.efficiencies,e.selected_energy_pool=this.selected_energy_pool,e.selected_portfolio_size=this.selected_portfolio_size,e.selected_portfolio_size.size=this.selected_portfolio_size.size===1/0?"Infinity":this.selected_portfolio_size.size,e.feature_array=this.feature_array,e.selected_morphable=this.selected_morphable,e.cost=this.cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.selected_energy_pool.damage_capacity/2,e.damage_capacity=this.damage_capacity,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),JSON.parse(this.original_component)},ingest_data(e){let t="Energy Pool is not valid, resetting.";this.universal_ingest_data(e,t),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=this.hasAlert}),this.selected_portfolio_size.size="Infinity"==this.selected_portfolio_size.size?1/0:this.selected_portfolio_size.size},handleAlert(e){this.hasAlert=e}},computed:{raw_space(){return this.round(this.selected_energy_pool.cost*this.cost_multiplier,2)},cost(){let e=this.selected_energy_pool.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},energy_pool_name(){let e="";return e=this.feature_array.reduce((e,t)=>{return e+t.feature+" "},e),e+=this.infinite_size?"Infinite-Portfolio ":"Portfolio-"+this.selected_portfolio_size.size+" ",e+" Energy Pool"},fragile(){return this.feature_array.some(function(e){if("fragile"==e.feature.toLowerCase())return!0})},infinite_size(){return this.selected_portfolio_size.size===1/0||"__INFINITY__"===this.selected_portfolio_size.size},activeButtons(){return"save,reset,new"+(null!==this.uuid?",delete":"")}}},c=l,p=o("2877"),_=Object(p["a"])(c,i,s,!1,null,null,null);t["default"]=_.exports},f52e:function(e,t,o){"use strict";o("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e);let o=JSON.parse(this.original_component);null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let i in o)if(!Object.keys(this._computedWatchers).includes(i))if("object"!==typeof o[i]||Array.isArray(o[i]))Array.isArray(o[i]),this.$set(this,i,o[i]);else{"object"===typeof this[i]&&null!==this[i]||this.$set(this,i,{});for(let e in o[i])this.$set(this[i],[e],o[i][e])}this.$forceUpdate()},updateComponentName(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);