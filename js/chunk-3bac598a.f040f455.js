(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bac598a"],{"69ca":function(s,t,e){},b12b:function(s,t,e){"use strict";var o=e("69ca"),a=e.n(o);a.a},eebc:function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[e("div",{staticClass:"metallic_background_small1"},[e("div",{staticClass:"subsection_container1"},[e("div",{staticClass:"subsection_header_small1"},[s._v("Shots")]),e("label",[e("span",{staticStyle:{"font-weight":"bold"}},[s._v("Shots: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.display_shots,expression:"display_shots"}],attrs:{type:"text",size:"1"},domProps:{value:s.display_shots},on:{keydown:function(t){return s.catchKeyDown(t)},input:function(t){t.target.composing||(s.display_shots=t.target.value)}}})])])])])},a=[],i=(e("a481"),e("072f")),c=e("8fcf"),n={name:"mek_magazine_shots",props:["shots"],mixins:[i["a"],c["a"]],data:function(){let s={selected_shots:1};return s},methods:{select_shots:function(s){this.selected_shots=s,this.$emit("update-shots",this.selected_shots)},catchKeyDown(s){["ArrowUp","ArrowDown"].includes(s.key)&&(s.preventDefault(),s.stopPropagation(),"ArrowUp"==s.key?(this.selected_shots+=1,this.select_shots(this.selected_shots)):this.selected_shots>1&&(this.selected_shots-=1,this.select_shots(this.selected_shots)))}},computed:{display_shots:{get(){return this.shots},set(s){this.shots;let t=+s.replace(/[^0-9]/g,"");this.select_shots(t)}}}},l=n,h=(e("b12b"),e("2877")),r=Object(h["a"])(l,o,a,!1,null,"38643ec8",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-3bac598a.f040f455.js.map