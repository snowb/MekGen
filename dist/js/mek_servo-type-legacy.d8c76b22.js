(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-type"],{"601d":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.type_table,headers:{type:""},pkey:e.pkey,"selected-keys":e.selected_keys,name:"Type",flow:"pkey-col","show-headers":!1},on:{"update-selected-data":e.select_type}})},r=[],a=(s("ac6a"),s("f499")),o=s.n(a),i=(s("cadf"),s("551c"),s("f751"),s("097d"),s("072f")),p=s("8fcf"),u=s("d866"),l=void 0,c=[{type:"Torso"},{type:"Head"},{type:"Arm"},{type:"Leg"},{type:"Wing"},{type:"Tail"},{type:"Pod"}],d={type:"Torso"},f=function(e){if("undefined"===typeof e)return!1;var t=c.some(function(t){return t.type==e.type});return t},y=function(e,t){return c.some(function(s){return void 0!==s[e]&&s[e]==t})},h=function(e,t){if(y(e,t)){var s=null;return c.some(function(n){if(n[e]==t)return s=n,!0},l),s}},m=function(e,t){var s=void 0,n=[],r=!1,a=[],i=o()(t);return void 0!==t&&y(e,t[e])?f(t)?(s=JSON.parse(o()(t)),n=[s[e]],r=!1):(s=JSON.parse(o()(h(e,t[e]))),n=[s[e]],r=!0,a.push("Mek_Servo-Class: "+i),a.push("**** Invalid data. Reseting. ****")):(s=d,n=[s[e]],r=!0,a.push("Mek_Servo-Class: "+i),a.push("**** Invalid data. Reseting to default. ****")),{data:s,key_list:n,update:r,alerts:a}},v={name:"mek_servo_type",props:["servoType"],mixins:[i["a"],p["a"],u["a"]],components:{"mek-sub-component-table":function(){return s.e("chunk-5a8f0fc3").then(s.bind(null,"97ea"))}},data:function(){var e={pkey:"type",alerts:[],suppressAlerts:!1};return e},methods:{select_type:function(e){this.$emit("update-servo-type",JSON.parse(o()(e)))}},computed:{selected_keys:function(){var e=this,t=m(this.pkey,this.servoType);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_type(t.data),t.key_list},type_table:function(){return c}}},k=v,_=s("2877"),b=Object(_["a"])(k,n,r,!1,null,"d75f5bf2",null);t["default"]=b.exports},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_servo-type-legacy.d8c76b22.js.map