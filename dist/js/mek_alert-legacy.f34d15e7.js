(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_alert"],{"24db":function(e,t,s){"use strict";var a=s("8a06"),r=s.n(a);r.a},"8a06":function(e,t,s){},da8a:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{nothing:e.alertMessage,name:"alert"},on:{enter:function(t){e.showAlert=!1},"after-leave":e.resetAlert}},[e.showAlert?s("span",{staticClass:"alert mek-flex-col"},[s("div",{staticClass:"metallic_background"},[s("div",{staticClass:"subsection_container"},[s("div",{staticClass:"subsection_header"},[e._v("Alert")]),s("div",[e._v("\n                    "+e._s(e.alertMessage)+"\n                ")])])])]):e._e()])},r=[],n={name:"mek_alert",props:[],components:{},data:function(){var e={showAlert:!1};return e},methods:{resetAlert:function(){this.$store.commit("alertMessage","")}},computed:{alertMessage:function(){this.$store.getters.alertMessage;var e=this.$store.getters.alertMessage;return this.$set(this,"showAlert",!!e),e}}},i=n,o=(s("24db"),s("2877")),l=Object(o["a"])(i,a,r,!1,null,"7fc1ccf4",null);t["default"]=l.exports}}]);
//# sourceMappingURL=mek_alert-legacy.f34d15e7.js.map