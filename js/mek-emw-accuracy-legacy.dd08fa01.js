(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-accuracy"],{"2edc":function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.accuracy_table,headers:e.headers,name:"Accuracy",flow:"pkey-row","show-headers":!0,format:{cost:"multiplier"},pkey:e.pkey,"selected-keys":e.selected_keys},on:{"update-selected-data":e.select_accuracy}})},s=[],i=(a("ac6a"),a("f499")),r=a.n(i),n=a("072f"),u=a("8fcf"),l=a("d866"),o=void 0,d=[{accuracy:-2,cost:.6,defense_ability:-4},{accuracy:-1,cost:.8,defense_ability:-3},{accuracy:0,cost:.9,defense_ability:-2},{accuracy:1,cost:1,defense_ability:-1},{accuracy:2,cost:1.5,defense_ability:0},{accuracy:3,cost:2,defense_ability:1}],f={accuracy:1,cost:1,defense_ability:-1},y=function(e){if("undefined"===typeof e)return!1;var t=d.some(function(t){return t.accuracy==e.accuracy&&t.cost==e.cost&&t.defense_ability==e.defense_ability});return t},h=function(e,t){return d.some(function(a){return void 0!==a[e]&&a[e]==t})},p=function(e,t){if(h(e,t)){var a=null;return d.some(function(c){if(c[e]==t)return a=c,!0},o),a}},m=function(e,t){var a=void 0,c=[],s=!1,i=[],n=r()(t);return void 0!==t&&h(e,t[e])?y(t)?(a=JSON.parse(r()(t)),c=[a[e]],s=!1):(a=JSON.parse(r()(p(e,t[e]))),c=[a[e]],s=!0,i.push("Mek_EMW-Accuracy: "+n),i.push("**** Invalid data. Reseting. ****")):(a=f,c=[a[e]],s=!0,i.push("Mek_EMW-Accuracy: "+n),i.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:c,update:s,alerts:i}},b={name:"mek_emw_accuracy",props:["accuracy","isBeamShield","isVariableBeamShield"],mixins:[n["a"],u["a"],l["a"]],components:{"mek-sub-component-table":function(){return a.e("chunk-5a8f0fc3").then(a.bind(null,"97ea"))}},data:function(){var e={alerts:[],suppressAlerts:!1};return e},methods:{select_accuracy:function(e){var t=JSON.parse(r()(e));this.$emit("update-accuracy",t)}},computed:{headers:function(){return this.isVariableBeamShield?{accuracy:"WA",defense_ability:"DA",cost:"Cost"}:this.isBeamShield?{defense_ability:"DA",cost:"Cost"}:{accuracy:"WA",cost:"Cost"}},pkey:function(){return this.isBeamShield&&!this.isVariableBeamShield?"defense_ability":"accuracy"},accuracy_table:function(){return d},selected_keys:function(){var e=this,t=m(this.pkey,this.accuracy);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_accuracy(t.data),t.key_list}}},_=b,k=a("2877"),v=Object(k["a"])(_,c,s,!1,null,"70e1041a",null);t["default"]=v.exports},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-emw-accuracy-legacy.dd08fa01.js.map