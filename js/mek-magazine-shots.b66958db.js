(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-magazine-shots"],{"03a8":function(s,t,e){"use strict";var o=e("5e65"),a=e.n(o);a.a},"5e65":function(s,t,e){},"8b6a":function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"mek-flex-col",staticStyle:{"align-self":"baseline"}},[e("div",{staticClass:"metallic_background_small1"},[e("div",{staticClass:"subsection_container1"},[e("div",{staticClass:"subsection_header_small1"},[s._v("Shots")]),e("label",[e("span",{staticStyle:{"font-weight":"bold"}},[s._v("Shots: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.display_shots,expression:"display_shots"}],attrs:{type:"text",size:"1"},domProps:{value:s.display_shots},on:{keydown:function(t){return s.catchKeyDown(t)},input:function(t){t.target.composing||(s.display_shots=t.target.value)}}})])])])])},a=[],i=(e("a481"),e("8fcf")),n={name:"mek_magazine_shots",props:["shots"],mixins:[i["a"]],data:function(){let s={selected_shots:1};return s},methods:{select_shots:function(s){this.selected_shots=s,this.$emit("update-shots",this.selected_shots)},catchKeyDown(s){["ArrowUp","ArrowDown"].includes(s.key)&&(s.preventDefault(),s.stopPropagation(),"ArrowUp"==s.key?(this.selected_shots+=1,this.select_shots(this.selected_shots)):this.selected_shots>1&&(this.selected_shots-=1,this.select_shots(this.selected_shots)))}},computed:{display_shots:{get(){return this.shots<=0?1:this.shots},set(s){this.shots;let t=+s.replace(/[^0-9]/g,"");t=t<=0?1:t,this.select_shots(t)}}}},l=n,c=(e("03a8"),e("2877")),h=Object(c["a"])(l,o,a,!1,null,"15a41003",null);t["default"]=h.exports}}]);
//# sourceMappingURL=mek-magazine-shots.b66958db.js.map