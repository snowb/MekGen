(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-type"],{"601d":function(e,t,s){"use strict";s.r(t);var p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.type_table,headers:{type:""},pkey:e.pkey,selectedKeys:e.selected_keys,name:"Type",flow:"pkey-col",showHeaders:!1},on:{"update-selected-data":e.select_type}})},r=[],i=s("072f"),y=s("8fcf");let o=[{type:"Torso"},{type:"Head"},{type:"Arm"},{type:"Leg"},{type:"Wing"},{type:"Tail"},{type:"Pod"}],n=e=>{if("undefined"===typeof e)return!1;let t=o.some(t=>{return t.type==e.type});return t},l=(e,t)=>{return o.some(s=>{return void 0!==s[e]&&s[e]==t})},a=(e,t)=>{if(l(e,t)){let s=null;return o.some(p=>{if(p[e]==t)return s=p,!0},void 0),s}};var d={name:"mek_servo_type",props:["servoType"],mixins:[i["a"],y["a"]],components:{"mek-sub-component-table":()=>s.e("chunk-0a2ef8c8").then(s.bind(null,"97ea"))},data:()=>{let e={pkey:"type"};return e},methods:{select_type:function(e){this.$emit("update-servo-type",JSON.parse(JSON.stringify(e)))}},computed:{type_index(){let e=0;return this.type_table.some((t,s)=>{if(t.type.toLowerCase()==this.servoType.type.toLowerCase())return e=s,!0},this),[e]},selected_keys(){let e=a(this.pkey,"Torso");void 0===this.servoType&&this.select_type(e);let t=JSON.stringify(this.servoType);return l(this.pkey,this.servoType[this.pkey])?(n(this.servoType)||(this.addAlert("Mek_Servo-Type: "+t),this.addAlert("**** Invalid data. Reseting. ****"),this.publishAlerts(),this.select_type(a(this.pkey,this.servoType[this.pkey]))),[this.servoType[this.pkey]]):(this.addAlert("Mek_Servo-Type: "+t),this.addAlert("**** Invalid data. Reseting to default. ****"),this.publishAlerts(),this.select_type(e),[e[this.pkey]])},type_table(){return o}}},h=d,u=s("2877"),c=Object(u["a"])(h,p,r,!1,null,"13cec88c",null);t["default"]=c.exports}}]);
//# sourceMappingURL=mek_servo-type.c5f0719b.js.map