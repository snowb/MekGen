(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-missile-damage"],{"058e":function(e,t,n){"use strict";var a=n("5119"),r=n.n(a);r.a},"4f72":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],s=(n("ac6a"),n("f499")),u=n.n(s),i=n("d866"),o=n("daf4"),c=Array.apply({},Array(20)).map(function(e,t){var n=t+1,a=n/10,r=Math.round(3.5*Math.sqrt(n));return{damage:n,cost:a,range:r}}),d=["damage","cost","range"],l={damage:1,cost:.1,range:4},f=Object(o["d"])(c,d),m=Object(o["c"])(c),p=Object(o["b"])(c,m),h=Object(o["a"])(f,m,p,l,"Mek_Missile-Damage"),g={name:"mek_missile_damage",props:["damage"],mixins:[i["a"]],components:{"mek-sub-component-table":function(){return n.e("chunk-133ab689").then(n.bind(null,"97ea"))}},data:function(){var e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){var t=JSON.parse(u()(e));this.$emit("update-damage",t)}},computed:{damage_table:function(){return c},selected_keys:function(){var e=this,t=h(this.pkey,this.damage);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_damage(t.data),t.key_list}}},b=g,k=(n("058e"),n("2877")),v=Object(k["a"])(b,a,r,!1,null,"bc74b08a",null);t["default"]=v.exports},5119:function(e,t,n){},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return l});var a=n("f499"),r=n.n(a),s=n("a745"),u=n.n(s),i=void 0,o=function(e,t){return function(n){if("undefined"===typeof n||!u()(t)||0==t.length)return!1;var a=e.some(function(e){return!t.some(function(t){return n[t]!=e[t]})});return a}},c=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},d=function(e,t){return function(n,a){if(t(n,a)){var r=null;return e.some(function(e){if(e[n]==a)return r=e,!0},i),r}}},l=function(e,t,n,a,s){return function(u,i){var o=void 0,c=[],d=!1,l=[],f=r()(i);return void 0!==i&&t(u,i[u])?e(i)?(o=JSON.parse(r()(i)),c=[o[u]],d=!1):(o=JSON.parse(r()(n(u,i[u]))),c=[o[u]],d=!0,l.push(s+": "+f),l.push("**** Invalid data. Reseting. ****")):(o=a,c=[o[u]],d=!0,l.push(s+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:o,key_list:c,update:d,alerts:l}}}}}]);
//# sourceMappingURL=mek-missile-damage-legacy.95fec542.js.map