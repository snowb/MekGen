(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-class"],{"0edc":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.class_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:e.headers,name:"Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},i=[],n=(s("ac6a"),s("f499")),c=s.n(n),r=s("3ffa"),d=s("d866"),o=(s("7f7f"),s("a58a")),l=s("706d"),u=[],p=!1,m=function(e){var t=void 0===e?"standard":e,s=1;switch(t.toLowerCase()){case"active":s=1.5;break;case"reactive":s=3;break}u=o["a"].map(function(e){var t={stopping_power:e.code+4,code:e.code,id:e.id,name:e.name,kills:5*(e.code+4),cost:(e.code+4)*s};return t},this),p=!1};m("standard");var h=["stopping_power","code","id","name","kills","cost"],f=Object(l["d"])(u,h),b=function(e){return p?f(e):(p=!0,f=Object(l["d"])(u,h),f(e))},k=Object(l["c"])(u),_=Object(l["b"])(u,k),v=JSON.parse(c()(_("code",1))),y=Object(l["a"])(b,k,_,v,"Mek_Shield-Class"),w={name:"mek_shield_class",props:["type","shield_class","is_ablative"],mixins:[r["a"],d["a"]],components:{"mek-sub-component-table":function(){return Promise.resolve().then(s.bind(null,"09c0"))}},data:function(){var e={alerts:[],suppressAlerts:!1};return e},methods:{select_class:function(e){var t=JSON.parse(c()(e));this.$emit("update-class-code",t)}},computed:{class_table:function(){return m(this.type),u},headers:function(){return this.is_ablative?{name:"Name",kills:"Kills",cost:"Cost"}:{name:"Name",stopping_power:"SP",cost:"Cost"}},pkey:function(){return this.is_ablative?"kills":"stopping_power"},selected_keys:function(){var e=this,t=y(this.pkey,this.shield_class);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_class(t.data)),t.key_list}},watch:{type:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},S=w,g=(s("beb3"),s("2877")),H=Object(g["a"])(S,a,i,!1,null,"2c66b584",null);t["default"]=H.exports},"3ffa":function(e,t,s){"use strict";t["a"]={data:function(){return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},"4d60":function(e,t,s){},beb3:function(e,t,s){"use strict";var a=s("4d60"),i=s.n(a);i.a}}]);
//# sourceMappingURL=mek_shield-class-legacy.77c211e6.js.map