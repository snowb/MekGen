(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63807656"],{"0f9d":function(s,e,i){"use strict";var t=i("5fca"),l=i.n(t);l.a},"5fca":function(s,e,i){},6513:function(s,e,i){"use strict";i.r(e);var t=function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[i("div",{staticClass:"metallic_background_small1"},[i("div",{staticClass:"subsection_container1"},[i("div",{staticClass:"subsection_header_small1"},[s._v("Pack Size")]),i("label",[i("span",{staticStyle:{"font-weight":"bold"}},[s._v("Missiles: ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:s.display_missiles,expression:"display_missiles"}],attrs:{type:"text",size:"1"},domProps:{value:s.display_missiles},on:{keydown:function(e){return s.catchKeyDown(e)},input:function(e){e.target.composing||(s.display_missiles=e.target.value)}}})])])])])},l=[],a=(i("a481"),i("072f")),c=i("8fcf"),n={name:"mek_pack_size",props:["pack"],mixins:[a["a"],c["a"]],data:function(){let s={selected_missiles:1};return s},methods:{select_missiles:function(s){this.selected_missiles=s,this.$emit("update-pack-size",this.selected_missiles)},catchKeyDown(s){["ArrowUp","ArrowDown"].includes(s.key)&&(s.preventDefault(),s.stopPropagation(),"ArrowUp"==s.key?(this.selected_missiles+=1,this.select_missiles(this.selected_missiles)):this.selected_missiles>1&&(this.selected_missiles-=1,this.select_missiles(this.selected_missiles)))}},computed:{display_missiles:{get(){return this.pack},set(s){this.pack;let e=+s.replace(/[^0-9]/g,"");this.select_missiles(e)}}}},o=n,r=(i("0f9d"),i("2877")),d=Object(r["a"])(o,t,l,!1,null,"04a5c0a2",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-63807656.7af72853.js.map