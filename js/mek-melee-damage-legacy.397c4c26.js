(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-melee-damage"],{"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return l});var a=n("f499"),r=n.n(a),s=n("a745"),u=n.n(s),i=void 0,c=function(e,t){return function(n){if("undefined"===typeof n||!u()(t)||0==t.length)return!1;var a=e.some(function(e){return!t.some(function(t){return n[t]!=e[t]})});return a}},o=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},d=function(e,t){return function(n,a){var r=null;return t(n,a)&&e.some(function(e){if(e[n]==a)return r=e,!0},i),r}},l=function(e,t,n,a,s){return function(u,i){var c=void 0,o=[],d=!1,l=[],f=r()(i);return void 0!==i&&t(u,i[u])?e(i)?(c=JSON.parse(r()(i)),o=[c[u]],d=!1):(c=JSON.parse(r()(n(u,i[u]))),o=[c[u]],d=!0,l.push(s+": "+f),l.push("**** Invalid data. Reseting. ****")):(c=a,o=[c[u]],d=!0,l.push(s+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:o,update:d,alerts:l}}}},bafe:function(e,t,n){},bbc2:function(e,t,n){"use strict";var a=n("bafe"),r=n.n(a);r.a},d866:function(e,t,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},d928:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.damage_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{damage:"Damage",cost:"Cost"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],s=(n("ac6a"),n("f499")),u=n.n(s),i=n("d866"),c=n("706d"),o=Array.apply({},Array(20)).map(function(e,t){var n=t+1,a=n/2;return{damage:n,cost:a}}),d=["damage","cost"],l={damage:1,cost:.5},f=Object(c["d"])(o,d),m=Object(c["c"])(o),p=Object(c["b"])(o,m),h=Object(c["a"])(f,m,p,l,"Mek_Melee-Damage"),b={name:"mek_melee_damage",props:["damage"],mixins:[i["a"]],components:{"mek-sub-component-table":function(){return n.e("mel_sub-component-table").then(n.bind(null,"09c0"))}},data:function(){var e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){this.$emit("alert-generated",!0);var t=JSON.parse(u()(e));this.$emit("update-damage",t)}},computed:{damage_table:function(){return o},selected_keys:function(){var e=this,t=h(this.pkey,this.damage);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_damage(t.data),t.key_list}}},g=b,k=(n("bbc2"),n("2877")),v=Object(k["a"])(g,a,r,!1,null,"7095922e",null);t["default"]=v.exports}}]);
//# sourceMappingURL=mek-melee-damage-legacy.397c4c26.js.map