(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b584628a"],{"6f2d":function(s,t,e){"use strict";var o=e("cbc9"),a=e.n(o);a.a},cbc9:function(s,t,e){},eebc:function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[e("div",{staticClass:"metallic_background_small1"},[e("div",{staticClass:"subsection_container1"},[e("div",{staticClass:"subsection_header_small1"},[s._v("Shots")]),e("label",[e("span",{staticStyle:{"font-weight":"bold"}},[s._v("Shots: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.display_shots,expression:"display_shots"}],attrs:{type:"text",size:"1"},domProps:{value:s.display_shots},on:{keydown:function(t){return s.catchKeyDown(t)},input:function(t){t.target.composing||(s.display_shots=t.target.value)}}})])])])])},a=[],i=(e("a481"),e("6762"),e("2fdb"),e("072f")),n=e("8fcf"),c={name:"mek_magazine_shots",props:["shots"],mixins:[i["a"],n["a"]],data:function(){var s={selected_shots:1};return s},methods:{select_shots:function(s){this.selected_shots=s,this.$emit("update-shots",this.selected_shots)},catchKeyDown:function(s){["ArrowUp","ArrowDown"].includes(s.key)&&(s.preventDefault(),s.stopPropagation(),"ArrowUp"==s.key?(this.selected_shots+=1,this.select_shots(this.selected_shots)):this.selected_shots>1&&(this.selected_shots-=1,this.select_shots(this.selected_shots)))}},computed:{display_shots:{get:function(){return this.shots},set:function(s){this.shots;var t=+s.replace(/[^0-9]/g,"");this.select_shots(t)}}}},l=c,h=(e("6f2d"),e("2877")),r=Object(h["a"])(l,o,a,!1,null,"d915a10a",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-b584628a-legacy.da12a1cc.js.map