(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-pack-size~173dd313"],{"0558":function(s,e,i){"use strict";var t=i("61e5"),l=i.n(t);l.a},5886:function(s,e,i){"use strict";i.r(e);var t=function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[i("div",{staticClass:"metallic_background_small1"},[i("div",{staticClass:"subsection_container1"},[i("div",{staticClass:"subsection_header_small1"},[s._v("Pack Size")]),i("label",[i("span",{staticStyle:{"font-weight":"bold"}},[s._v("Missiles: ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:s.display_missiles,expression:"display_missiles"}],attrs:{type:"text",size:"1"},domProps:{value:s.display_missiles},on:{keydown:function(e){return s.catchKeyDown(e)},input:function(e){e.target.composing||(s.display_missiles=e.target.value)}}})])])])])},l=[],a=(i("a481"),i("6762"),i("2fdb"),i("072f")),n={name:"mek_pack_size",props:["pack"],mixins:[a["a"]],data:function(){var s={selected_missiles:1};return s},methods:{select_missiles:function(s){this.selected_missiles=s,this.$emit("update-pack-size",this.selected_missiles)},catchKeyDown:function(s){["ArrowUp","ArrowDown"].includes(s.key)&&(s.preventDefault(),s.stopPropagation(),"ArrowUp"==s.key?(this.selected_missiles+=1,this.select_missiles(this.selected_missiles)):this.selected_missiles>1&&(this.selected_missiles-=1,this.select_missiles(this.selected_missiles)))}},computed:{display_missiles:{get:function(){return this.pack},set:function(s){this.pack;var e=+s.replace(/[^0-9]/g,"");this.select_missiles(e)}}}},c=n,o=(i("0558"),i("2877")),r=Object(o["a"])(c,t,l,!1,null,"56a04112",null);e["default"]=r.exports},"61e5":function(s,e,i){}}]);