(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-damage"],{"03c0":function(e,t,n){"use strict";var a=n("ede3"),r=n.n(a);r.a},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l});var a=n("f499"),r=n.n(a),s=n("a745"),u=n.n(s),i=void 0,c=function(e,t){return function(n){if("undefined"===typeof n||!u()(t)||0==t.length)return!1;var a=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return a}},d=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},o=function(e,t){return function(n,a){var r=null;return t(n,a)&&e.some(function(e){if(e[n]==a)return r=e,!0},i),r}},l=function(e,t,n,a,s){return function(u,i){var c=void 0,d=[],o=!1,l=[],f=r()(i);return void 0!==i&&t(u,i[u])?e(i)?(c=JSON.parse(r()(i)),d=[c[u]],o=!1):(c=JSON.parse(r()(n(u,i[u]))),d=[c[u]],o=!0,l.push(s+": "+f),l.push("**** Invalid data. Reseting. ****")):(c=a,d=[c[u]],o=!0,l.push(s+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:d,update:o,alerts:l}}}},d866:function(e,t,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},d899:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.damage_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{damage:"Damage",cost:"Cost",range:"Range"},name:"Damage",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_damage}})},r=[],s=(n("ac6a"),n("f499")),u=n.n(s),i=n("d866"),c=n("706d"),d=Array.apply({},Array(20)).map(function(e,t){var n=t+1,a=n/10,r=Math.round(3.5*Math.sqrt(n));return{damage:n,cost:a,range:r}}),o=["damage","cost","range"],l={damage:1,cost:.1,range:4},f=Object(c["d"])(d,o),m=Object(c["c"])(d),p=Object(c["b"])(d,m),h=Object(c["a"])(f,m,p,l,"Mek_Missile-Damage"),g={name:"mek_missile_damage",props:["damage"],mixins:[i["a"]],components:{"mek-sub-component-table":function(){return n.e("chunk-6c105c2e").then(n.bind(null,"09c0"))}},data:function(){var e={alerts:[],pkey:"damage",suppressAlerts:!1};return e},methods:{select_damage:function(e){var t=JSON.parse(u()(e));this.$emit("update-damage",t)}},computed:{damage_table:function(){return d},selected_keys:function(){var e=this,t=h(this.pkey,this.damage);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_damage(t.data)),t.key_list}}},b=g,k=(n("03c0"),n("2877")),v=Object(k["a"])(b,a,r,!1,null,"3200bbec",null);t["default"]=v.exports},ede3:function(e,t,n){}}]);
//# sourceMappingURL=mek_missile-damage-legacy.6a040fa6.js.map