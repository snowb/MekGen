(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_build-components"],{"550a":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex","margin-top":"5px"}},[n("mek-side-menu",{attrs:{sections:e.servoList,format:"full",title:"Servos",draggable:"true"}}),n("span",[n("mek-top-menu",{attrs:{section:e.targetBuildTab,"section-list":e.sectionList},on:{"focus-section":e.focusSection}}),n("div",{attrs:{id:"build-main"}},[n(e.targetBuildTab,{tag:"component"})],1)],1)],1)},o=[],s=(n("ac6a"),n("be94")),a=n("2f62"),u={name:"build",components:{"mek-top-menu":()=>n.e("mek-top-menu").then(n.bind(null,"4d27")),"mek-frame-side-menu":()=>n.e("mek_frame-side-menu").then(n.bind(null,"4080")),"mek-side-menu":()=>n.e("mek_side-menu").then(n.bind(null,"95aa")),"mek-build-frame":()=>n.e("mek_build-frame").then(n.bind(null,"c41d"))},data:function(){let e={sectionList:[{id:"mek-build-frame",name:"Frame"}]};return e},methods:{focusSection:function(e){this.$store.commit("showTab",{prop:"currentBuildTab",tab:e})}},computed:Object(s["a"])({},Object(a["b"])({targetBuildTab:"targetBuildTab",listByCategoryAndType:"listByCategoryAndType",getComponent:"getComponent"}),{servoList(){let e=this.listByCategoryAndType("equipment","servo"),t=Object.keys(e).map(e=>{return this.getComponent(e)},this),n={};return t.forEach(e=>{void 0===n[e.selected_servo_type.type]&&(n[e.selected_servo_type.type]={}),n[e.selected_servo_type.type][e.uuid]=e.component_name}),n}})},m=u,r=n("2877"),l=Object(r["a"])(m,i,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=mek_build-components.5e615850.js.map