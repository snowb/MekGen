(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_design-components"],{de23:function(e,n,t){"use strict";t.r(n);var m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{display:"inline-flex"},attrs:{id:"app"}},[t("mek-side-menu",{key:e.random_key,attrs:{sections:e.equipmentList,title:"Equipment",format:"cut",clickable:"true"},on:{"side-menu-clicked":e.loadData}}),t("span",[t("mek-top-menu",{attrs:{section:e.targetDesignTab,"section-list":e.sectionList},on:{"focus-section":e.focusSection}}),t("span",{attrs:{id:"design-main"}},[t(e.targetDesignTab,{tag:"component",on:{updateMSMKey:e.updateKey}})],1)],1)],1)},i=[],o=t("be94"),a=t("2f62"),s={name:"design",components:{"mek-top-menu":()=>t.e("mek-top-menu").then(t.bind(null,"4d27")),"mek-side-menu":()=>t.e("mek_side-menu").then(t.bind(null,"95aa")),"mek-servo":()=>t.e("mek_servo-main").then(t.bind(null,"93db")),"mek-melee":()=>t.e("mek_melee-main").then(t.bind(null,"52ee")),"mek-projectile":()=>t.e("mek_projectile-main").then(t.bind(null,"7352")),"mek-magazine":()=>t.e("mek_magazine-main").then(t.bind(null,"2f6a")),"mek-missile":()=>t.e("mek_missile-main").then(t.bind(null,"b954")),"mek-emw":()=>t.e("mek_emw-main").then(t.bind(null,"0966")),"mek-beam":()=>t.e("mek_beam-main").then(t.bind(null,"1a6f")),"mek-energy-pool":()=>t.e("mek_energy_pool-main").then(t.bind(null,"9dcf")),"mek-shield":()=>t.e("mek_shield-main").then(t.bind(null,"6863")),"mek-reflector":()=>t.e("mek_reflector-main").then(t.bind(null,"b117")),"mek-locomotion":()=>t.e("mek_locomotion-main").then(t.bind(null,"08df"))},data:function(){let e={sectionList:[{id:"mek-servo",name:"Servos"},{id:"mek-beam",name:"Beam Weapons"},{id:"mek-emw",name:"Energy Melee Weapons"},{id:"mek-melee",name:"Melee Weapons"},{id:"mek-missile",name:"Missiles"},{id:"mek-projectile",name:"Projectile Weapons"},{id:"mek-magazine",name:"Projectile Magazine"},{id:"mek-energy-pool",name:"Energy Pools"},{id:"mek-shield",name:"Shields"},{id:"mek-reflector",name:"Reflectors"},{id:"mek-locomotion",name:"Wheels/Treads"}]};return e.random_key="mdc-msm-"+Math.random()+"-key",e},methods:{focusSection:function(e){this.$store.commit("showTab",{prop:"currentDesignTab",tab:e})},loadData(e){""!=e&&(this.$store.commit("showTab",{prop:"currentDesignTab",tab:"mek-"+this.getComponent(e).component_type}),this.$store.commit("selectComponent",e))},updateKey(){this.random_key="mdc-msm-"+Math.random()+"-key"}},computed:Object(o["a"])({},Object(a["b"])({targetDesignTab:"targetDesignTab",categoryObject:"categoryObject",getComponent:"getComponent"}),{equipmentList(){return this.random_key,this.categoryObject("equipment")}})},l=s,d=t("2877"),r=Object(d["a"])(l,m,i,!1,null,"f3634842",null);n["default"]=r.exports}}]);
//# sourceMappingURL=mek_design-components.abf9f549.js.map