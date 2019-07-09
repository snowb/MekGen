(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_build-config"],{"224f":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"mek-inline-flex-row"},[t("mek-side-menu",{attrs:{title:"Configs",format:"full",list:!0,sections:e.configuration_list,collapsible:!0,clickable:!0,"selected-item":e.working_uuid},on:{"side-menu-clicked":e.load_config}}),t("div",{staticClass:"mek-inline-flex-col"},[t("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.selected_configuration.config,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),t("mek-sub-component-table",{attrs:{name:"Configuration",flow:"dropdown-pkey",pkey:"config",items:e.configurationForms,"show-headers":!0,headers:e.headers,"selected-keys":e.selectedConfigPkey},on:{"update-selected-data":e.select_config}}),t("mek-save-reset-component",{attrs:{activeButtons:e.activeButtons},on:{"save-reset-component":e.saveResetComponent}})],1)],1)},o=[],s=(t("ac6a"),t("456d"),t("cebc")),a=(t("7f7f"),t("8fcf")),c={name:"mek-build-config",components:{"mek-sub-component-table":function(){return t.e("mek_sub-component-table").then(t.bind(null,"a949"))},"mek-save-reset-component":function(){return t.e("mek-save-reset-component").then(t.bind(null,"972e"))},"mek-component-name":function(){return t.e("mek-component-name").then(t.bind(null,"4a3f"))},"mek-side-menu":function(){return t.e("mek_side-menu").then(t.bind(null,"95aa"))}},props:["selectedData"],mixins:[a["a"]],data:function(){var e={configurationForms:[{config:"Humanoid",cost:0,modifiers:{hardpoints:["all"],propulsion:["all"],flight_without_propulsion:!1,no_hands:!1}},{config:"Tank",cost:0,modifiers:{maneuver_value:-1,armor_stopping_power:2,propulsion:["wheels","treads","ges","gravitics"],hardpoints:["torso","head","pod","binder"],no_hands:!0,flight_without_propulsion:!1}},{config:"Avian",cost:0,modifiers:{maneuver_value:-1,melee_damage:2,flight_movement_allowance:6,land_movement_alloance:0,propulsion:["legs","ges","thrusters","gravitics"],hardpoints:["all"],no_hands:!0,flight_without_propulsion:!0}}],headers:{config:"Form",cost:"Cost"}};return e.selected_configuration=e.configurationForms[0],e.working_configurations={},e.component_name=null,e.working_uuid=null,e.component_changed=!0,e.newComponent=!0,e},methods:{updateComponentName:function(e){this.component_name=e,this.component_changed=!0},select_config:function(e){var n=this.selected_configuration.name;this.selected_configuration=JSON.parse(JSON.stringify(e)),this.selected_configuration.name=n,this.component_changed=!0},saveResetComponent:function(e){var n=this.working_uuid?this.working_uuid:this.create_short_uuid(),t=Object(s["a"])({uuid:n},this.selected_configuration);switch(t.name=this.component_name,e){case"save":this.working_configurations[n]=t,this.working_uuid=n,this.$emit("saveSelectedData","config",this.working_configurations),this.newComponent=!1,this.component_changed=!1;break;case"reset":if(this.working_uuid){this.selected_configuration=t;break}case"delete":this.working_uuid&&(delete this.working_configurations[n],this.$emit("saveSelectedData","config",this.working_configurations));case"new":this.working_uuid=null,this.selected_configuration=this.configurationForms[0],this.newComponent=!0,this.component_changed=!0;break}},load_config:function(e){switch(!0){case""==e&&null===this.working_uuid:this.selected_configuration=this.configurationForms[0];break;case""==e:this.selected_configuration=this.selectedData[this.working_uuid];break;default:this.selected_configuration=this.selectedData[e],this.working_uuid=e,this.newComponent=!1,this.component_changed=!1}}},computed:{selectedConfigPkey:function(){return void 0===this.selected_configuration.config?["Humanoid"]:[this.selected_configuration.config]},configuration_list:function(){var e=this;if(this.working_uuid=null,this.selected_configuration=this.configurationForms[0],this.component_changed=!0,this.newComponent=!0,this.working_configurations=JSON.parse(JSON.stringify(this.selectedData||{})),void 0===this.selectedData)return{};var n=Object.keys(this.selectedData).reduce(function(n,t){return n[t]=e.selectedData[t].name?e.selectedData[t].name:e.selectedData[t].config,n},{});return null===this.working_uuid&&(this.working_uuid=Object.keys(this.selectedData)[0],this.selected_configuration=this.selectedData[this.working_uuid],this.component_changed=!1,this.newComponent=!1),n},activeButtons:function(){return"save,reset,new"+(null!==this.working_uuid?",delete":"")}}},r=c,u=t("2877"),l=Object(u["a"])(r,i,o,!1,null,"16980c94",null);n["default"]=l.exports},"8fcf":function(e,n,t){"use strict";t("ac6a"),t("34ef"),t("6b54"),t("a481");n["a"]={methods:{round:function(e,n){if("undefined"===typeof n||0==+n)return Math.round(+e);var t=Math.pow(10,+n);return Math.round(+e*t)/t},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad:function(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},invisible_pad:function(e){var n="";return e.forEach(function(e){e.length>n.length&&(n=e)},0),n+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}}}]);
//# sourceMappingURL=mek_build-config-legacy.ba9d4b73.js.map