(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-emw-damage"],{c787:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],s=(n("ac6a"),n("f499")),u=n.n(s),c=n("8fcf"),i=n("d866"),d=n("daf4"),o=Array.apply({},Array(20)).map(function(e,t){var n=t+1,a=n;return{damage:n,cost:a}}),f=["damage","cost"],l={damage:1,cost:1},m=Object(d["d"])(o,f),p=Object(d["c"])(o),h=Object(d["b"])(o,p),g=Object(d["a"])(m,p,h,l,"Mek_EMW-Damage"),b={name:"mek_emw_damage",props:["damage"],mixins:[c["a"],i["a"]],components:{"mek-sub-component-table":function(){return n.e("chunk-5a4d04f7").then(n.bind(null,"97ea"))}},data:function(){var e={pkey:"damage",alerts:[],suppressAlerts:!1};return e},methods:{select_damage:function(e){var t=JSON.parse(u()(e));this.$emit("update-damage",t)}},computed:{damage_table:function(){return o},selected_keys:function(){var e=this,t=g(this.pkey,this.damage);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_damage(t.data),t.key_list}}},k=b,v=(n("cd81"),n("2877")),y=Object(v["a"])(k,a,r,!1,null,"4aca4456",null);t["default"]=y.exports},cd81:function(e,t,n){"use strict";var a=n("d613"),r=n.n(a);r.a},d613:function(e,t,n){},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return f});var a=n("f499"),r=n.n(a),s=n("a745"),u=n.n(s),c=(n("cadf"),n("551c"),n("f751"),n("097d"),void 0),i=function(e,t){return function(n){if("undefined"===typeof n||!u()(t)||0==t.length)return!1;var a=e.some(function(e){return!t.some(function(t){return n[t]!=e[t]})});return a}},d=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},o=function(e,t){return function(n,a){var r=null;return t(n,a)&&e.some(function(e){if(e[n]==a)return r=e,!0},c),r}},f=function(e,t,n,a,s){return function(u,c){var i=void 0,d=[],o=!1,f=[],l=r()(c);return void 0!==c&&t(u,c[u])?e(c)?(i=JSON.parse(r()(c)),d=[i[u]],o=!1):(i=JSON.parse(r()(n(u,c[u]))),d=[i[u]],o=!0,f.push(s+": "+l),f.push("**** Invalid data. Reseting. ****")):(i=a,d=[i[u]],o=!0,f.push(s+": "+l),f.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:d,update:o,alerts:f}}}}}]);
//# sourceMappingURL=mek-emw-damage-legacy.b89060d4.js.map