(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_alert~c83c8d87"],{"6c78":function(e,t,s){},"86d8":function(e,t,s){"use strict";var r=s("6c78"),a=s.n(r);a.a},"8ab9":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{nothing:e.alertMessage,name:"alert"},on:{enter:function(t){e.showAlert=!!e.persist},"after-leave":e.resetAlert}},[e.showAlert?s("span",{staticClass:"mek-flex-col",class:{alert_float:e.floating,alert_nonfloat:!e.floating},staticStyle:{position:"absolute"}},[s("div",{staticClass:"metallic_background"},[s("div",{staticClass:"subsection_container"},[s("div",{staticClass:"subsection_header"},[e._v("Alert")]),Array.isArray(e.alertMessage)?s("div",e._l(e.alertMessage,function(t,r){return s("span",{key:"msg"+r,staticClass:"alert_element"},[e._v("\n                        "+e._s(e.alertMessage[r])+"\n                    ")])}),0):s("div",[e._v("\n                    "+e._s(e.alertMessage)+"\n                ")])])])]):e._e()])},a=[],l={name:"mek_alert",props:["floating","storeAlertProperty","persist"],components:{},data:function(){let e={showAlert:!1};return e},methods:{resetAlert(){switch(this.storeAlertProperty){case"alertMessages":this.$store.commit("resetAlertMessages");break;case"importAlertMessages":this.$store.commit("resetImportAlertMessages");break}}},computed:{alertMessage(){let e=this.$store.getters[this.storeAlertProperty];return this.$set(this,"showAlert",!!e&&e.length>0),e}}},n=l,o=(s("86d8"),s("2877")),i=Object(o["a"])(n,r,a,!1,null,"41e48cea",null);t["default"]=i.exports}}]);