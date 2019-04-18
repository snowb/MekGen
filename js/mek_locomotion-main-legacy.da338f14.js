(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_locomotion-main"],{"08df":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[o("mek-component-name",{attrs:{"new-component":t.newComponent,"component-name":t.component_name||t.locomotion_name,"component-changed":t.component_changed},on:{"update-component-name":t.updateComponentName}}),o("span",{staticClass:"mek-inline-flex-row"},[o("mek-locomotion-type",{staticStyle:{"align-self":"flex-start"},attrs:{"locomotion-type":t.selected_locomotion_type},on:{"update-locomotion-type":t.updateLocomotionType,"alert-generated":t.handleAlert}}),o("mek-locomotion-class",{attrs:{"locomotion-type":t.selected_locomotion_type.type,"locomotion-class":t.selected_locomotion_class},on:{"update-locomotion-class":t.updateLocomotionClass,"alert-generated":t.handleAlert}}),o("span",{staticClass:"mek-inline-flex-col"},[o("mek-component-stats",{attrs:{cols:4,rows:6}},[o("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Total Damage Capacity: "+t._s(t.damage_capacity))]),o("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[t._v("Total Weight: "+t._s(t.weight)+" tons")]),o("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[t._v("Total Cost: "+t._s(t.cost)+" tons")])]),o("mek-save-reset-component",{on:{"save-reset-component":t.componentSaveReset}})],1)],1)],1)},s=[],i=o("f499"),c=o.n(i),a=o("8fcf"),l=o("f52e"),m=o("7b4b"),r={name:"mek_locomotion",props:[],mixins:[a["a"],l["a"],m["a"]],components:{"mek-locomotion-type":function(){return o.e("mek_locomotion-type").then(o.bind(null,"9947"))},"mek-locomotion-class":function(){return o.e("mek_locomotion-class").then(o.bind(null,"f41a"))},"mek-component-name":function(){return Promise.resolve().then(o.bind(null,"dba3"))},"mek-save-reset-component":function(){return Promise.resolve().then(o.bind(null,"c342"))},"mek-component-stats":function(){return Promise.resolve().then(o.bind(null,"67b1"))}},data:function(){var t={uuid:null,component_name:null,component_category:"equipment",component_type:"locomotion",original_component:null,component_changed:!0,selected_locomotion_type:{type:"Wheels"},selected_locomotion_class:{name:"Superlight",cost:1,kills:1},hasAlert:!1};return t},methods:{updateLocomotionType:function(t){this.component_type=t.type,this.$set(this,"selected_locomotion_type",t),this.component_changed=!0},updateLocomotionClass:function(t){this.$set(this,"selected_locomotion_class",t),this.component_changed=!0},ingest_data:function(t){var e=this,o="Bad data, resetting to 1K Wheels.";this.universal_ingest_data(t,o),this.component_name==this.locomotion_name&&this.$set(this,"component_name",null),this.$nextTick(function(){e.component_changed=e.hasAlert})},output_data:function(){var t=this,e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="locomotion",e.component_name=null===this.component_name?this.locomotion_name:this.component_name,e.selected_locomotion_type=JSON.parse(c()(this.selected_locomotion_type)),e.selected_locomotion_class=JSON.parse(c()(this.selected_locomotion_class)),e.damage_capacity=e.selected_locomotion_class.kills,e.cost=this.cost,e.weight=this.weight,this.$nextTick(function(){t.component_changed=t.hasAlert}),this.original_component=c()(e),e},componentSaveReset:function(t){var e="reset"==t&&null==this.original_component?"clear":t;switch(e){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.selected_locomotion_type.type="Wheels",this.$set(this,"selected_locomotion_class",{name:"Superlight",cost:1,kills:1}),this.component_name=null,this.$store.commit("saveComponent",null);break}},handleAlert:function(t){this.hasAlert=t}},computed:{locomotion_name:function(){return this.selected_locomotion_class.kills+"K "+this.selected_locomotion_type.type},cost:function(){return this.selected_locomotion_class.cost},damage_capacity:function(){return this.selected_locomotion_class.kills},weight:function(){return this.round(this.damage_capacity/2,2)}}},u=r,p=o("2877"),h=Object(p["a"])(u,n,s,!1,null,null,null);e["default"]=h.exports},"7b4b":function(t,e,o){"use strict";var n=o("f499"),s=o.n(n);e["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var t=1;for(var e in this.cost_multipliers)t*=this.cost_multipliers[e];return this.round(t,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(t,e,o){return t+=o>0?", ":"",t+=e.feature,t},"")},newComponent:function(){var t=JSON.parse(s()(this.$store.getters.selectedComponent));return"undefined"===typeof t||null===t||(t.uuid!==this.uuid&&t.component_category==this.component_category&&t.component_type==this.component_type&&this.ingest_data(t),!1)}}}},f52e:function(t,e,o){"use strict";var n=o("a745"),s=o.n(n),i=o("7618"),c=o("a4bb"),a=o.n(c),l=(o("6762"),o("2fdb"),o("f499")),m=o.n(l);e["a"]={methods:{universal_ingest_data:function(t,e){for(var o in this.original_component=m()(t),null===t&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",e)),t)if(!a()(this._computedWatchers).includes(o))if("object"!==Object(i["a"])(t[o])||s()(t[o]))s()(t[o]),this.$set(this,o,t[o]);else for(var n in"object"===Object(i["a"])(this[o])&&null!==this[o]||(this[o]={}),t[o])this.$set(this[o],[n],t[o][n]);this.$forceUpdate()},updateComponentName:function(t){this.component_name=t,this.component_changed=!0},addAlert:function(t){this.alerts.push(t)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_locomotion-main-legacy.da338f14.js.map