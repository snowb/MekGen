(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-shield-class"],{"0461":function(s,e,t){},"4fe9":function(s,e,t){"use strict";t.r(e);var c=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("mek-sub-component-table",{attrs:{items:s.class_list,headers:s.headers,name:"Class",flow:"col",showHeaders:!0,selectedIndices:s.shield_class_index},on:{"update-selected-indices":s.select_class}})},i=[],a=t("3ffa"),l=t("072f"),n=t("8fcf"),o={name:"mek_shield_class",props:["type","shield_class","is_ablative"],mixins:[a["a"],l["a"],n["a"]],components:{"mek-sub-component-table":()=>t.e("chunk-0a2ef8c8").then(t.bind(null,"97ea"))},data:function(){let s={};return s},methods:{select_class:function(s){this.$emit("update-class-code",this.class_list[s])},find_class_code_index:function(s){let e=null;return this.servo_classes.some(function(t,c){if(t.code==s)return e=c,!0},this),e},calculate_cost:function(s){let e=1;switch(this.type.toLowerCase()){case"active":e=1.5;break;case"reactive":e=3;break}return this.calculate_stopping_power(s)*e},calculate_stopping_power:function(s){return s+4}},computed:{shield_class_index:function(){let s=0;this.class_list.some((e,t)=>{if(this.shield_class.code==e.code)return s=t,!0});let e=!1;switch(!0){case this.shield_class.id!=this.class_list[s].id:case this.shield_class.name!=this.class_list[s].name:case this.shield_class.stopping_power!=this.class_list[s].stopping_power:case this.shield_class.cost!=this.class_list[s].cost:e=!0}return e&&this.select_class(s),[s]},flat_name_array:function(){return this.servo_classes.reduce(function(s,e){return s.push(e.name),s},[])},class_list(){return this.type,this.servo_classes.map(function(s){let e={stopping_power:s.code+4,code:s.code,id:s.id,name:s.name,kills:5*(s.code+4),cost:this.calculate_cost(s.code)};return e},this)},headers(){return this.is_ablative?{name:"Name",kills:"Kills",cost:"Cost"}:{name:"Name",stopping_power:"SP",cost:"Cost"}}}},r=o,d=(t("61fd"),t("2877")),u=Object(d["a"])(r,c,i,!1,null,"85b757fe",null);e["default"]=u.exports},"61fd":function(s,e,t){"use strict";var c=t("0461"),i=t.n(c);i.a}}]);
//# sourceMappingURL=mek-shield-class.a1993d39.js.map