(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-energy-pool-size"],{"6f0f":function(e,t,s){"use strict";var i=s("841d"),o=s.n(i);o.a},"841d":function(e,t,s){},a027:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.portfolio_size_table,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{size:"Portfolio Size",cost:"Cost"},format:{cost:"multiplier"},name:"Portfolio Size",flow:"pkey-row","show-headers":!0},on:{"update-selected-data":e.select_portfolio_size}})},o=[],n=(s("ac6a"),s("f499")),r=s.n(n),a=s("072f"),l=s("8fcf"),u=s("d866"),c=void 0,f=[{size:1,cost:.6},{size:2,cost:.75},{size:3,cost:1},{size:4,cost:1.2},{size:5,cost:1.3},{size:7,cost:1.4},{size:10,cost:1.5},{size:1/0,cost:2}],p={size:3,cost:1},d=function(e){if("undefined"===typeof e)return!1;var t=f.some(function(t){return t.size==e.size&&t.cost==e.cost});return t},z=function(e,t){return f.some(function(s){return void 0!==s[e]&&s[e]==t})},h=function(e,t){if(z(e,t)){var s=null;return f.some(function(i){if(i[e]==t)return s=i,!0},c),s}},m=function(e,t){var s=void 0,i=[],o=!1,n=[],a=r()(t);return void 0!==t&&z(e,t[e])?d(t)?(s=JSON.parse(r()(t)),s.size=null===s.size?1/0:s.size,i=[s[e]],o=!1):(s=JSON.parse(r()(h(e,t[e]))),s.size=null===s.size?1/0:s.size,i=[s[e]],o=!0,n.push("Mek_Energy_Pool-Size: "+a),n.push("**** Invalid data. Reseting. ****")):(s=p,i=[s[e]],o=!0,n.push("Mek_Energy_Pool-Size: "+a),n.push("**** Invalid data. Reseting to default. ****")),{data:s,key_list:i,update:o,alerts:n}},_={name:"mek_portfolio_size",props:["portfolioSize"],mixins:[a["a"],l["a"],u["a"]],components:{"mek-sub-component-table":function(){return s.e("chunk-5a8f0fc3").then(s.bind(null,"97ea"))}},data:function(){var e={alerts:[],pkey:"cost",suppressAlerts:!1};return e},methods:{select_portfolio_size:function(e){var t=JSON.parse(r()(e));t.size=e.size===1/0?1/0:e.size,this.$emit("update-portfolio-size",t)}},computed:{portfolio_size_table:function(){return f},selected_keys:function(){var e=this,t=m(this.pkey,this.portfolioSize);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&this.select_portfolio_size(t.data),t.key_list}}},k=_,v=(s("6f0f"),s("2877")),y=Object(v["a"])(k,i,o,!1,null,"ffd45350",null);t["default"]=y.exports},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek-energy-pool-size-legacy.69e4d033.js.map