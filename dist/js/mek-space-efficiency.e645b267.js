(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-space-efficiency"],{cd4a:function(e,s,c){"use strict";c.r(s);var t=function(){var e=this,s=e.$createElement,c=e._self._c||s;return c("span",{staticClass:"mek-flex-col"},[c("div",{staticClass:"metallic_background_small"},[c("div",{staticClass:"subsection_container"},[c("div",{staticClass:"subsection_header_small"},[e._v("Efficiency")]),c("div",[c("span",{staticClass:"clickable",class:e.selectedItem("selected_method","to_space","selected_item","non_selected_item"),staticStyle:{padding:"3px 10px 3px 10px"},on:{click:function(s){return e.selectMethod("to_space")}}},[e._v("\n                    To Spaces\n                ")]),c("span",{staticClass:"clickable",class:e.selectedItem("selected_method","by_space","selected_item","non_selected_item"),staticStyle:{padding:"3px 10px 3px 10px"},on:{click:function(s){return e.selectMethod("by_space")}}},[e._v("\n                    By Spaces\n                ")])]),c("div",{staticStyle:{"margin-top":"5px"}},[c("span",{staticStyle:{"font-weight":"bold"}},[e._v("\n                    "+e._s("to_space"==e.selected_method?"To Spaces: ":"By Spaces: ")+"\n                ")]),c("span",[c("input",{directives:[{name:"model",rawName:"v-model",value:e.display_space_efficiency,expression:"display_space_efficiency"}],attrs:{type:"text",size:"1"},domProps:{value:e.display_space_efficiency},on:{blur:function(s){return e.clean_space_efficiency(s.target.value)},input:function(s){s.target.composing||(e.display_space_efficiency=s.target.value)}}}),e._v(" "+e._s(1==e.display_space_efficiency?"space":"spaces")+"\n                ")])])])])])},i=[],a=(c("a481"),c("072f")),n=c("8fcf"),l={name:"mek_space_efficiency",props:["space_efficiency","raw_space"],mixins:[a["a"],n["a"]],data:function(){var e={selected_modifier:0,selected_cost:0,selected_method:"to_space"};return e.selected_value=this.raw_space,e},methods:{selectMethod:function(e){this.selected_method=e,"by_space"==e?this.selected_value=this.selected_modifier:"to_space"==e&&(this.selected_value=this.raw_space-this.selected_modifier)},select_efficiency:function(e){this.selected_modifier=e>=this.raw_space?0:e,this.selected_cost=this.selected_modifier/2,this.selectMethod(this.selected_method),this.$emit("update-efficiencies",{modifier:this.selected_modifier,cost:this.selected_cost})},clean_space_efficiency:function(e){this.display_space_efficiency=+e}},computed:{display_space_efficiency:{get:function(){return this.space_efficiency.modifier>=this.raw_space?(this.select_efficiency(0),0):"to_space"==this.selected_method?this.raw_space-this.space_efficiency.modifier:this.space_efficiency.modifier},set:function(e){this.space_efficiency,this.raw_space;var s=this.isNumeric(e)?+e:+e.replace(/[^0-9.]/g,""),c=!1,t=/[0-9]+\.$/g.test(e);switch(!0){case t:break;case s<0:s=0,c=!0;break;case"to_space"==this.selected_method:s=this.raw_space-s,c=!0;break;case"by_space"==this.selected_method:c=!0;break}c&&this.select_efficiency(s)}}}},_=l,p=c("2877"),d=Object(p["a"])(_,t,i,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=mek-space-efficiency.e645b267.js.map