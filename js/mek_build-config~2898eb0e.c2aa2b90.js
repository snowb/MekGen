(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_build-config~2898eb0e"],{"224f":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mek-inline-flex-row"},[n("mek-side-menu",{attrs:{title:"Configs",format:"full",list:!0,sections:e.configuration_list,collapsible:!0,clickable:!0,"selected-item":e.working_uuid},on:{"side-menu-clicked":e.load_config}}),n("div",{staticClass:"mek-inline-flex-col"},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.computedComponentName,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("mek-sub-component-table",{key:"msc-"+e.configurationForms.length,attrs:{name:"Configuration",flow:"dropdown-pkey",pkey:"config",items:e.configurationForms,"show-headers":!0,headers:e.headers,"selected-keys":e.selectedConfigPkey},on:{"update-selected-data":e.select_config}}),n("mek-save-reset-component",{staticStyle:{"align-self":"baseline"},attrs:{activeButtons:e.activeButtons},on:{"save-reset-component":e.saveResetComponent}})],1)],1)},o=[],s=(n("ac6a"),n("ade3")),r=n("8fcf");let a=[{config:"Humanoid",cost:.375,hardpoints:["all"],propulsion:["all"],flight_without_propulsion:!1,no_hands:!1,modifiers:{}},{config:"Tank",cost:.3,propulsion:["wheels","treads","ges","gravitics"],hardpoints:["torso","head","pod","binder"],no_hands:!0,flight_without_propulsion:!1,modifiers:{maneuver_value:-1,armor_stopping_power:2}},{config:"Avian",cost:.35,propulsion:["legs","ges","thrusters","gravitics"],hardpoints:["all"],no_hands:!0,flight_without_propulsion:!0,modifiers:{maneuver_value:-1,melee_damage:2,flight_movement_allowance:6,land_movement_alloance:0}},{config:"Fighter/Corvette",cost:.3,propulsion:["ges","thrusters","gravitics"],hardpoints:["torso","pod","head","wings","binder"],no_hands:!0,flight_without_propulsion:!1,modifiers:{maneuver_value:-2,flight_movement_allowance:"x2",minimum_flight_movement_alloance:4,land_movement_alloance:0}}],c=(e,t)=>{let n=e.filter(e=>{return!t.includes(e)});return n.length>0?1:0},u=(e,t)=>{let n=e.config,i=t.config;switch(!0){case n==i:return 0;case"Humanoid"==n:return 1;case"Humanoid"==i:return-1}let o=e.hardpoints,s=t.hardpoints;switch(!0){case"all"==o[0]&&"all"==s[0]:return 0;case"all"==o[0]:return 1;case"all"==s[0]:return-1;case o.length>s.length:return 1;case o.length<s.length:return-1}return c(o,s)},l=a,g=e=>{l=a.filter(t=>{return u(e,t)>=0})},h=e=>{let t=JSON.parse(JSON.stringify(e)),n=Object.keys(t)[0];if(1==Object.keys(t).length)t[n].base_config=!0;else for(let i in t)t[i].base_config&&delete t[i].base_config,1==u(t[i],t[n])&&(n=i);return t[n].base_config=!0,{configurations:t,base_config_uuid:n}};function f(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _={name:"mek-build-config",components:{"mek-sub-component-table":()=>n.e("mek_sub-component-table~31ecd969").then(n.bind(null,"a949")),"mek-save-reset-component":()=>n.e("mek-save-reset-component~31ecd969").then(n.bind(null,"972e")),"mek-component-name":()=>n.e("mek-component-name~31ecd969").then(n.bind(null,"4a3f")),"mek-side-menu":()=>n.e("mek_side-menu~a1b242b3").then(n.bind(null,"95aa"))},props:["selectedData"],mixins:[r["a"]],data:()=>{let e={};return e.configurationFormsList=a,e.headers={config:"Form",cost:"Cost"},e.selected_configuration=JSON.parse(JSON.stringify(l[0])),e.working_configurations={},e.component_name=null,e.working_uuid=null,e.component_changed=!1,e.newComponent=!1,e},methods:{updateComponentName(e){this.component_name=e,this.component_changed=!0},select_config(e){let t=this.selected_configuration?this.selected_configuration.name:null,n=!!this.selected_configuration&&this.selected_configuration.base_config;this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(e))),this.selected_configuration.name=t,n&&(this.selected_configuration.base_config=!0,e.config!=this.selected_configuration.config&&g(this.selected_configuration)),this.component_changed=!0},saveResetComponent(e){let t=this.working_uuid?this.working_uuid:this.create_short_uuid(),n=d({uuid:t},this.selected_configuration);switch(0==Object.keys(this.working_configurations).length&&(n.base_config=!0),n.name=this.component_name,e){case"save":this.working_configurations[t]=n,this.working_uuid=t,this.$emit("saveSelectedData","config",this.working_configurations),this.newComponent=!1,this.component_changed=!1;break;case"reset":if(this.working_uuid){this.$set(this,"selected_configuration",n);break}case"delete":this.working_uuid&&(delete this.working_configurations[t],this.$emit("saveSelectedData","config",this.working_configurations));case"new":this.working_uuid=null,this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.filtered_configuration_list[0]))),this.newComponent=!0,this.component_changed=!0;break}},load_config(e){switch(!0){case""==e&&null===this.working_uuid:this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.filtered_configuration_list[0])));break;case""==e:this.$set(this,"selected_configuration",this.working_configurations[this.working_uuid]);break;default:this.$set(this,"selected_configuration",this.working_configurations[e]),this.working_uuid=e,this.newComponent=!1,this.component_changed=!1}}},computed:{selectedConfigPkey(){let e=void 0===this.selectedData?["Humanoid"]:null!==this.selected_configuration?[this.selected_configuration.config]:this.configurationForms.length>0?[this.configurationForms[0].config]:["Humanoid"];return e},configuration_list(){if(void 0===this.selectedData||0==Object.keys(this.selectedData).length)return{};let e=Object.keys(this.working_configurations).reduce((e,t)=>{return e[t]=this.working_configurations[t].name?this.working_configurations[t].name:this.working_configurations[t].config,e[t]+=this.working_configurations[t].base_config?" (Base)":"",e},{});return null===this.working_uuid&&0==Object.keys(this.working_configurations).length&&(this.working_uuid=Object.keys(this.working_configurations)[0],this.$set(this,"selected_configuration",this.working_configurations[this.working_uuid]),this.component_changed=!1,this.newComponent=!1),e},configurationForms(){switch(!0){case void 0===this.selectedData:case 0==Object.keys(this.selectedData).length:case this.selected_configuration&&this.selected_configuration.base_config:return a}return l},base_config_key(){if(void 0===this.selectedData||0==Object.keys(this.selectedData).length)return null;let e=Object.keys(this.working_configurations)[0],t=null;for(let n in this.working_configurations)this.working_configurations[n].base_config&&(t=n);return null===t?e:t},base_configuration(){return null===this.base_config_key?null:this.working_configurations[this.base_config_key]},filtered_configuration_list(){return l},activeButtons(){return"save,reset,new"+(null!==this.working_uuid?",delete":"")},computedComponentName(){let e=null!==this.component_name?this.component_name:null!==this.selected_configuration&&void 0!==this.selected_configuration?this.selected_configuration.config:this.configurationForms.length>0?this.configurationForms[0].config:"dunno";return e}},watch:{selectedData:{immediate:!0,handler(e){let t=JSON.parse(JSON.stringify(this.selectedData||{}));this.$set(this,"working_configurations",t);let n=e?Object.keys(e).length:0;if(void 0===e||0==n||null===e)this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.configurationForms[0]))),this.working_uuid=null,this.component_changed=!0,this.newComponent=!0,this.$set(this.selected_configuration,"base_config",!0);else{let e=h(t);t=e.configurations,g(t[e.base_config_uuid]),this.working_uuid=e.base_config_uuid,this.load_config(e.base_config_uuid)}}}}},m=_,p=n("2877"),k=Object(p["a"])(m,i,o,!1,null,"72786038",null);t["default"]=k.exports},"8fcf":function(e,t,n){"use strict";n("ac6a"),n("6b54"),n("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let n=10**+t;return Math.round(+e*n)/n},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}}}]);