(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-class"],{de38:function(s,e,a){"use strict";a.r(e);var t=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("mek-sub-component-table",{attrs:{items:s.class_table,headers:s.class_table_headers,name:"Servo Class",flow:"col",showHeaders:!0,selectedIndices:s.class_index},on:{"update-selected-indices":s.select_class}})},o=[],c=(a("7f7f"),a("f499")),l=a.n(c),r=a("3ffa"),n=a("072f"),i=a("8fcf"),h={name:"mek_servo_class",props:["servoClass","servoType"],mixins:[r["a"],n["a"],i["a"]],components:{"mek-sub-component-table":function(){return a.e("chunk-5a8f0fc3").then(a.bind(null,"97ea"))}},data:function(){var s={count:0};return s},methods:{select_class:function(s){this.$emit("update-servo-class",JSON.parse(l()(this.class_table[s])))}},computed:{class_index:function(){var s=this,e=0;this.class_table.some(function(a,t){if(a.code==s.servoClass.code)return e=t,!0},this);var a=void 0===this.class_table[e].damage_bonus&&void 0===this.servoClass.damage_bonus||this.class_table[e].damage_bonus==this.servoClass.damage_bonus,t=void 0===this.class_table[e].throw_range&&void 0===this.servoClass.throw_range||this.class_table[e].throw_range==this.servoClass.throw_range;switch(!0){case this.servoClass.name!=this.class_table[e].name:case this.servoClass.cost!=this.class_table[e].cost:case this.servoClass.space!=this.class_table[e].space:case this.servoClass.kills!=this.class_table[e].kills:case!a:case!t:this.select_class(e)}return[e]},class_table_headers:function(){var s="arm"==this.servoType.toLowerCase(),e="leg"==this.servoType.toLowerCase(),a={name:"Name",cost:"Cost",space:"Space",kills:"Kills"};return(s||e)&&(a.damage_bonus="DMG+",s&&(a.throw_range="Throw")),a},class_table:function(){var s=1,e=1,a=1,t=0,o=0,c=0,l=!1,r=!1;switch(this.servoType.toLowerCase()){case"torso":s=2,e=2,a=2;break;case"arm":t=1,o=1,c=1,l=!0;break;case"leg":t=1,o=1,c=1,r=!0;break;case"pod":e=2,a=0;break}var n=this.servo_classes.map(function(n){var i={};return i.code=n.code,i.id=n.id,i.name=n.name,i.cost=n.code*s+t,i.space=n.code*e+o,i.kills=n.code*a+c,(l||r)&&(i.damage_bonus=r?Math.ceil(i.code/2)-1:Math.ceil(i.code/3)-1,l&&(i.throw_range=Math.floor(i.code/2)+1)),i});return n}}},d=h,_=a("2877"),u=Object(_["a"])(d,t,o,!1,null,"06d11c47",null);e["default"]=u.exports}}]);
//# sourceMappingURL=mek_servo-class-legacy.3924c170.js.map