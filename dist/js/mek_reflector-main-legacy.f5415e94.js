(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector-main"],{"86f4":function(e,t,n){"use strict";var s=n("dd9b"),o=n.n(s);o.a},a346:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col"},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.reflector_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-sub-component-table",{attrs:{items:e.reflector_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{quality_value:"QV",cost:"Cost"},name:"Quality",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_reflector}}),n("span",{staticClass:"mek-flex-col no-margin"},[n("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-component-stats",{attrs:{cols:3,rows:3}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Quality Value: "+e._s(e.selected_reflector.quality_value))]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),n("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Space: "+e._s(e.space_cost))]),n("div",{attrs:{slot:"col2-row3"},slot:"col2-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Cost: "+e._s(e.selected_reflector.cost))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Total Cost: "+e._s(e.cost))])]),n("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},o=[],c=n("f499"),i=n.n(c),a=n("072f"),r=n("8fcf"),l=n("f52e"),u=n("7b4b"),f=n("d866"),p=void 0,m=Array.apply({},Array(10));m=m.map(function(e,t){var n=t+1,s=n*n;return{quality_value:n,cost:s}});var d=function(e){if("undefined"===typeof e)return!1;var t=m.some(function(t){return t.quality_value==e.quality_value&&t.cost==e.cost});return t},h=function(e,t){return m.some(function(n){return void 0!==n[e]&&n[e]==t})},_=function(e,t){if(h(e,t)){var n=null;return m.some(function(s){if(s[e]==t)return n=s,!0},p),n}},v={name:"mek_reflector",props:[],mixins:[a["a"],r["a"],l["a"],u["a"],f["a"]],components:{"mek-space-efficiency":function(){return n.e("mek-space-efficiency").then(n.bind(null,"cd4a"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"192f"))},"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"c849"))},"mek-component-stats":function(){return n.e("mek-component-stats").then(n.bind(null,"d854"))},"mek-sub-component-table":function(){return n.e("chunk-5a8f0fc3").then(n.bind(null,"97ea"))}},data:function(){var e={pkey:"quality_value",uuid:null,component_name:null,component_category:"equipment",component_type:"reflector",original_component:null,component_changed:!0,selected_reflector:{quality_value:1,cost:1},efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.alerts=[],e},methods:{select_reflector:function(e){this.$set(this,"selected_reflector",JSON.parse(i()(e))),this.component_changed=!0},output_reflector_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="reflector",t.component_name=null===this.component_name?this.reflector_name:this.component_name,t.efficiencies=JSON.parse(i()(this.efficiencies)),t.selected_reflector=JSON.parse(i()(this.selected_reflector)),t.damage_capacity=JSON.parse(i()(this.damage_capacity)),t.cost=this.cost,t.weight=this.weight,this.$nextTick(function(){e.component_changed=!1}),this.original_component=i()(t),t},ingest_data:function(e){var t=this,n="Reflector is not valid, resetting.";this.universal_ingest_data(e,n),this.component_name==this.reflector_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=!1})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_reflector_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$store.commit("saveComponent",null);break}},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0}},computed:{raw_space:function(){return this.selected_reflector.cost},weight:function(){return this.round(this.selected_reflector.cost/2,2)},damage_capacity:function(){return this.selected_reflector.quality_value},cost:function(){return this.selected_reflector.cost+this.efficiencies.space.cost},reflector_name:function(){return"QV-"+this.selected_reflector.quality_value+" Reflector"},reflector_table:function(){return m},selected_keys:function(){var e=_(this.pkey,1);void 0===this.selected_reflector&&this.select_reflector(e);var t=h(this.pkey,this.selected_reflector[this.pkey]),n=i()(this.selected_reflector);return t?(d(this.selected_reflector)||(this.addAlert("Mek_Reflector: "+n),this.addAlert("**** Invalid data. Reseting. ****"),this.publishAlerts(),this.select_reflector(_(this.selected_reflector[this.pkey]))),[this.selected_reflector[this.pkey]]):(this.addAlert("Mek_Reflector: "+n),this.addAlert("**** Invalid data. Reseting to default. ****"),this.publishAlerts(),this.select_reflector(e),[e[this.pkey]])}}},k=v,y=(n("86f4"),n("2877")),w=Object(y["a"])(k,s,o,!1,null,"42cd6542",null);t["default"]=w.exports},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},dd9b:function(e,t,n){}}]);
//# sourceMappingURL=mek_reflector-main-legacy.f5415e94.js.map