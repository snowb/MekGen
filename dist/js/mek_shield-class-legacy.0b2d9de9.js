(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-class","mek_shield-class-data-module"],{"033f":function(e,t,a){},"0edc":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("mek-sub-component-table",{attrs:{items:e.class_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:e.headers,name:"Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},s=[],i=(a("ac6a"),a("3ffa")),r=a("d866"),c=a("1dc1"),d={name:"mek_shield_class",props:["type","shield_class","is_ablative"],mixins:[i["a"],r["a"]],components:{"mek-sub-component-table":function(){return a.e("mek_sub-component-table").then(a.bind(null,"a949"))}},data:function(){var e={alerts:[],suppressAlerts:!1};return e},methods:{select_class:function(e){var t=JSON.parse(JSON.stringify(e));this.$emit("update-class-code",t)}},computed:{class_table:function(){return Object(c["create_class_data_table"])(this.type),c["class_data_table"]},headers:function(){return this.is_ablative?{name:"Name",kills:"Kills",cost:"Cost"}:{name:"Name",stopping_power:"SP",cost:"Cost"}},pkey:function(){return this.is_ablative?"kills":"stopping_power"},selected_keys:function(){var e=this,t=Object(c["cleaned_feature"])(this.pkey,this.shield_class);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_class(t.data)),t.key_list}},watch:{type:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},o=d,u=(a("fa72"),a("2877")),l=Object(u["a"])(o,n,s,!1,null,"9bd817b2",null);t["default"]=l.exports},"1dc1":function(e,t,a){"use strict";a.r(t),a.d(t,"class_data_table",function(){return i}),a.d(t,"class_validate",function(){return u}),a.d(t,"has_feature",function(){return l}),a.d(t,"get_feature",function(){return f}),a.d(t,"cleaned_feature",function(){return p}),a.d(t,"create_class_data_table",function(){return c});a("7f7f");var n=a("a58a"),s=a("706d"),i=[],r=!1,c=function(e){var t=void 0===e?"standard":e,a=1;switch(t.toLowerCase()){case"active":a=1.5;break;case"reactive":a=3;break}i=n["a"].map(function(e){var t={stopping_power:e.code+4,code:e.code,id:e.id,name:e.name,kills:5*(e.code+4),cost:(e.code+4)*a};return t},this),r=!1};c("standard");var d=["stopping_power","code","id","name","kills","cost"],o=Object(s["d"])(i,d),u=function(e){return r?o(e):(r=!0,o=Object(s["d"])(i,d),o(e))},l=Object(s["c"])(i),f=Object(s["b"])(i,l),m=JSON.parse(JSON.stringify(f("code",1))),p=Object(s["a"])(u,l,f,m,"Mek_Shield-Class")},"3ffa":function(e,t,a){"use strict";t["a"]={data:function(){return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},"706d":function(e,t,a){"use strict";a.d(t,"d",function(){return s}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return r}),a.d(t,"a",function(){return c});var n=void 0,s=function(e,t){return function(a){if("undefined"===typeof a||!Array.isArray(t)||0==t.length)return!1;var n=e.some(function(e){return t.every(function(t){return a[t]==e[t]})});return n}},i=function(e){return function(t,a){return e.some(function(e){return void 0!==e[t]&&e[t]==a})}},r=function(e,t){return function(a,s){var i=null;return t(a,s)&&e.some(function(e){if(e[a]==s)return i=e,!0},n),i}},c=function(e,t,a,n,s){return function(i,r){var c=void 0,d=[],o=!1,u=[],l=JSON.stringify(r);return void 0!==r&&t(i,r[i])?e(r)?(c=JSON.parse(JSON.stringify(r)),d=[c[i]],o=!1):(c=JSON.parse(JSON.stringify(a(i,r[i]))),d=[c[i]],o=!0,u.push(s+": "+l),u.push("**** Invalid data. Reseting. ****")):(c=n,d=[c[i]],o=!0,u.push(s+": "+l),u.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:d,update:o,alerts:u}}}},a58a:function(e,t,a){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},d866:function(e,t,a){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},fa72:function(e,t,a){"use strict";var n=a("033f"),s=a.n(n);s.a}}]);
//# sourceMappingURL=mek_shield-class-legacy.0b2d9de9.js.map