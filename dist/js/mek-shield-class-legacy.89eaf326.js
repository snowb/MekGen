(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-shield-class"],{"3ffa":function(e,t,n){"use strict";t["a"]={data:function(){return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},4877:function(e,t,n){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},"4fe9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.class_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:e.headers,name:"Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},i=[],s=(n("ac6a"),n("f499")),r=n.n(s),c=n("3ffa"),d=n("d866"),o=(n("7f7f"),n("4877")),u=n("daf4"),l=[],f=function(e){var t=void 0===e?"standard":e,n=1;switch(t.toLowerCase()){case"active":n=1.5;break;case"reactive":n=3;break}l=o["a"].map(function(e){var t={stopping_power:e.code+4,code:e.code,id:e.id,name:e.name,kills:5*(e.code+4),cost:(e.code+4)*n};return t},this)};f("standard");var m=["stopping_power","code","id","name","kills","cost"],p=function(){return Object(u["d"])(l,m)},h=Object(u["c"])(l),v=Object(u["b"])(l,h),k=JSON.parse(r()(v("code",1))),S=Object(u["a"])(p,h,v,k,"Mek_Shield-Class"),b={name:"mek_shield_class",props:["type","shield_class","is_ablative"],mixins:[c["a"],d["a"]],components:{"mek-sub-component-table":function(){return n.e("chunk-5a4d04f7").then(n.bind(null,"97ea"))}},data:function(){var e={alerts:[],suppressAlerts:!1};return e},methods:{select_class:function(e){var t=JSON.parse(r()(e));this.$emit("update-class-code",t)}},computed:{class_table:function(){return f(this.type),l},headers:function(){return this.is_ablative?{name:"Name",kills:"Kills",cost:"Cost"}:{name:"Name",stopping_power:"SP",cost:"Cost"}},pkey:function(){return this.is_ablative?"kills":"stopping_power"},selected_keys:function(){var e=this,t=S(this.pkey,this.shield_class);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_class(t.data),t.key_list}}},y=b,g=(n("f348"),n("2877")),H=Object(g["a"])(y,a,i,!1,null,"3a15b90b",null);t["default"]=H.exports},cf73:function(e,t,n){},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,n){"use strict";n.d(t,"d",function(){return d}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return l});var a=n("f499"),i=n.n(a),s=n("a745"),r=n.n(s),c=void 0,d=function(e,t){return function(n){if("undefined"===typeof n||!r()(t)||0==t.length)return!1;var a=e.some(function(e){return!t.some(function(t){return n[t]!=e[t]})});return a}},o=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},u=function(e,t){return function(n,a){if(t(n,a)){var i=null;return e.some(function(e){if(e[n]==a)return i=e,!0},c),i}}},l=function(e,t,n,a,s){return function(r,c){var d=void 0,o=[],u=!1,l=[],f=i()(c);return void 0!==c&&t(r,c[r])?e(c)?(d=JSON.parse(i()(c)),o=[d[r]],u=!1):(d=JSON.parse(i()(n(r,c[r]))),o=[d[r]],u=!0,l.push(s+": "+f),l.push("**** Invalid data. Reseting. ****")):(d=a,o=[d[r]],u=!0,l.push(s+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:o,update:u,alerts:l}}}},f348:function(e,t,n){"use strict";var a=n("cf73"),i=n.n(a);i.a}}]);
//# sourceMappingURL=mek-shield-class-legacy.89eaf326.js.map