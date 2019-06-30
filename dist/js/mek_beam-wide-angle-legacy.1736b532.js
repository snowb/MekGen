(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-wide-angle","mek_beam-wide-angle-data-module"],{4536:function(e,t,n){"use strict";n.r(t),n.d(t,"wide_angle_data_table",function(){return r}),n.d(t,"wide_angle_validate",function(){return u}),n.d(t,"has_feature",function(){return l}),n.d(t,"get_feature",function(){return o}),n.d(t,"cleaned_feature",function(){return c});var a=n("706d"),r=[{angle:"__NIL__",cost:1},{angle:"__HEX__",cost:2},{angle:60,cost:3},{angle:180,cost:5},{angle:300,cost:7},{angle:360,cost:9}],s=["angle","cost"],i={angle:"__NIL__",cost:1},u=Object(a["d"])(r,s),l=Object(a["c"])(r),o=Object(a["b"])(r,l),c=Object(a["a"])(u,l,o,i,"Mek_Beam-Wide-Angle-Time")},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return u});var a=void 0,r=function(e,t){return function(n){if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;var a=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return a}},s=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},i=function(e,t){return function(n,r){var s=null;return t(n,r)&&e.some(function(e){if(e[n]==r)return s=e,!0},a),s}},u=function(e,t,n,a,r){return function(s,i){var u=void 0,l=[],o=!1,c=[],d=JSON.stringify(i);return void 0!==i&&t(s,i[s])?e(i)?(u=JSON.parse(JSON.stringify(i)),l=[u[s]],o=!1):(u=JSON.parse(JSON.stringify(n(s,i[s]))),l=[u[s]],o=!0,c.push(r+": "+d),c.push("**** Invalid data. Reseting. ****")):(u=a,l=[u[s]],o=!0,c.push(r+": "+d),c.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:l,update:o,alerts:c}}}},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},ebc1:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mek-sub-component-table",{attrs:{items:e.wide_angle_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{angle:"Angle",cost:"Cost"},name:"Wide Angle",flow:"pkey-row","show-headers":!0,format:{angle:"wide-angle",cost:"multiplier"}},on:{"update-selected-data":e.select_angle}})},r=[],s=(n("ac6a"),n("d866")),i=n("4536"),u={name:"mek_beam_wide_angle",props:["wideAngle"],mixins:[s["a"]],components:{"mek-sub-component-table":function(){return n.e("mek_sub-component-table").then(n.bind(null,"a949"))}},data:function(){var e={alerts:[],pkey:"angle",suppressAlerts:!1};return e},methods:{select_angle:function(e){var t=JSON.parse(JSON.stringify(e));this.$emit("update-wide-angle",t)}},computed:{wide_angle_table:function(){return i["wide_angle_data_table"]},selected_keys:function(){var e=this,t=Object(i["cleaned_feature"])(this.pkey,this.wideAngle);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_angle(t.data)),t.key_list}}},l=u,o=n("2877"),c=Object(o["a"])(l,a,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=mek_beam-wide-angle-legacy.1736b532.js.map