(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-shield-class"],{"3ffa":function(e,t,n){"use strict";t["a"]={data:function(){return{servo_classes:[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}}},4877:function(e,t,n){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},"4fe9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.class_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:e.headers,name:"Class",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_class}})},s=[],i=(n("ac6a"),n("f499")),r=n.n(i),d=n("3ffa"),c=n("8fcf"),o=n("d866"),u=(n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d"),n("4877")),l=n("daf4"),f=[],m=function(e){var t=void 0===e?"standard":e,n=1;switch(t.toLowerCase()){case"active":n=1.5;break;case"reactive":n=3;break}f=u["a"].map(function(e){var t={stopping_power:e.code+4,code:e.code,id:e.id,name:e.name,kills:5*(e.code+4),cost:(e.code+4)*n};return t},this)};m("standard");var p=["stopping_power","code","id","name","kills","cost"],h=Object(l["d"])(f,p),v=Object(l["c"])(f),k=Object(l["b"])(f,v),b=JSON.parse(r()(k("code",1))),S=Object(l["a"])(h,v,k,b,"Mek_Shield-Class"),y={name:"mek_shield_class",props:["type","shield_class","is_ablative"],mixins:[d["a"],c["a"],o["a"]],components:{"mek-sub-component-table":function(){return n.e("chunk-bcbd439e").then(n.bind(null,"97ea"))}},data:function(){var e={alerts:[],pkey:"stopping_power",suppressAlerts:!1};return e},methods:{select_class:function(e){var t=JSON.parse(r()(e));this.$emit("update-class-code",t)}},computed:{class_table:function(){return m(this.type),f},headers:function(){return this.is_ablative?{name:"Name",kills:"Kills",cost:"Cost"}:{name:"Name",stopping_power:"SP",cost:"Cost"}},selected_keys:function(){var e=this,t=S(this.pkey,this.shield_class);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_class(t.data),t.key_list}}},g=y,H=(n("9b0d"),n("2877")),_=Object(H["a"])(g,a,s,!1,null,"58d9b420",null);t["default"]=_.exports},"8fae":function(e,t,n){},"9b0d":function(e,t,n){"use strict";var a=n("8fae"),s=n.n(a);s.a},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return l});var a=n("f499"),s=n.n(a),i=n("a745"),r=n.n(i),d=void 0,c=function(e,t){return function(n){if("undefined"===typeof n||!r()(t)||0==t.length)return!1;var a=e.some(function(e){return!t.some(function(t){return n[t]!=e[t]})});return a}},o=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},u=function(e,t){return function(n,a){if(t(n,a)){var s=null;return e.some(function(e){if(e[n]==a)return s=e,!0},d),s}}},l=function(e,t,n,a,i){return function(r,d){var c=void 0,o=[],u=!1,l=[],f=s()(d);return void 0!==d&&t(r,d[r])?e(d)?(c=JSON.parse(s()(d)),o=[c[r]],u=!1):(c=JSON.parse(s()(n(r,d[r]))),o=[c[r]],u=!0,l.push(i+": "+f),l.push("**** Invalid data. Reseting. ****")):(c=a,o=[c[r]],u=!0,l.push(i+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:o,update:u,alerts:l}}}}}]);
//# sourceMappingURL=mek-shield-class-legacy.cc291302.js.map