(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_design-components~f2dbd32d"],{de23:function(e,m,n){"use strict";n.r(m);var i=function(){var e=this,m=e.$createElement,n=e._self._c||m;return n("div",{staticStyle:{display:"inline-flex"},attrs:{id:"app"}},[n("mek-side-menu",{key:e.random_key,attrs:{sections:e.equipmentList,title:"Equipment",format:"cut",clickable:"true"},on:{"side-menu-clicked":e.loadData}}),n("span",[n("mek-top-menu",{attrs:{section:e.targetDesignTab,"section-list":e.sectionList},on:{"focus-section":e.focusSection}}),n("span",{attrs:{id:"design-main"}},[n(e.targetDesignTab,{tag:"component",on:{updateMSMKey:e.updateKey}})],1)],1)],1)},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),t=n("2f62");function r(e,m){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),m&&(n=n.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),n}function _(e){for(var m=1;m<arguments.length;m++){var n=null!=arguments[m]?arguments[m]:{};m%2?r(n,!0).forEach(function(m){Object(a["a"])(e,m,n[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(m){Object.defineProperty(e,m,Object.getOwnPropertyDescriptor(n,m))})}return e}var d={name:"design",components:{"mek-top-menu":function(){return Promise.all([n.e("mek-top-menu~31ecd969"),n.e("mek_top-menu~5b2dadbc")]).then(n.bind(null,"4d27"))},"mek-side-menu":function(){return n.e("mek_side-menu~a1b242b3").then(n.bind(null,"95aa"))},"mek-servo":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_servo-main~31ecd969")]).then(n.bind(null,"93db"))},"mek-melee":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_melee-main~31ecd969")]).then(n.bind(null,"52ee"))},"mek-projectile":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_projectile-main~31ecd969")]).then(n.bind(null,"7352"))},"mek-magazine":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_magazine-main~31ecd969")]).then(n.bind(null,"2f6a"))},"mek-missile":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_missile-main~31ecd969")]).then(n.bind(null,"b954"))},"mek-emw":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_emw-main~31ecd969")]).then(n.bind(null,"0966"))},"mek-beam":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_beam-main~31ecd969")]).then(n.bind(null,"1a6f"))},"mek-energy-pool":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_energy_pool-main~31ecd969")]).then(n.bind(null,"9dcf"))},"mek-shield":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_shield-main~31ecd969")]).then(n.bind(null,"6863"))},"mek-reflector":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_reflector-main~31ecd969")]).then(n.bind(null,"b117"))},"mek-locomotion":function(){return Promise.all([n.e("create_uuid_module~mek_beam-main~mek_build-config~mek_build-general~mek_emw-main~mek_energy_pool-mai~d528d339"),n.e("create_uuid_module~mek_beam-main~mek_build-components~mek_emw-main~mek_energy_pool-main~mek_export-c~dbf381a9"),n.e("mek_locomotion-main~31ecd969")]).then(n.bind(null,"08df"))}},data:function(){var e={sectionList:[{id:"mek-servo",name:"Servos"},{id:"mek-beam",name:"Beam Weapons"},{id:"mek-emw",name:"Energy Melee Weapons"},{id:"mek-melee",name:"Melee Weapons"},{id:"mek-missile",name:"Missiles"},{id:"mek-projectile",name:"Projectile Weapons"},{id:"mek-magazine",name:"Projectile Magazine"},{id:"mek-energy-pool",name:"Energy Pools"},{id:"mek-shield",name:"Shields"},{id:"mek-reflector",name:"Reflectors"},{id:"mek-locomotion",name:"Wheels/Treads"}]};return e.random_key="mdc-msm-"+Math.random()+"-key",e},methods:{focusSection:function(e){this.$store.commit("showTab",{prop:"currentDesignTab",tab:e})},loadData:function(e){""!=e&&(this.$store.commit("showTab",{prop:"currentDesignTab",tab:"mek-"+this.getComponent(e).component_type}),this.$store.commit("selectComponent",e))},updateKey:function(){this.random_key="mdc-msm-"+Math.random()+"-key"}},computed:_({},Object(t["b"])({targetDesignTab:"targetDesignTab",categoryObject:"categoryObject",getComponent:"getComponent"}),{equipmentList:function(){return this.random_key,this.categoryObject("equipment")}})},l=d,u=n("2877"),c=Object(u["a"])(l,i,o,!1,null,"f3634842",null);m["default"]=c.exports}}]);