(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-type"],{5669:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.type_table,headers:{name:""},pkey:e.pkey,"selected-keys":e.selected_keys,name:"Type",flow:"pkey-col","show-headers":!1},on:{"update-selected-data":e.select_type}})},a=[],r=(s("ac6a"),s("f499")),l=s.n(r),p=s("d866"),c=s("706d"),i=[{name:"Standard"},{name:"Active"},{name:"Reactive"}],d=["name"],o={name:"Standard"},u=Object(c["d"])(i,d),m=Object(c["c"])(i),h=Object(c["b"])(i,m),y=Object(c["a"])(u,m,h,o,"Mek_Shield-Type"),b={name:"mek_shield_type",props:["type"],mixins:[p["a"]],components:{"mek-sub-component-table":function(){return Promise.resolve().then(s.bind(null,"09c0"))}},data:function(){var e={pkey:"name",alerts:[],suppressAlerts:!1};return e},methods:{select_type:function(e){var t=JSON.parse(l()(e));this.$emit("update-type",t)}},computed:{type_table:function(){return i},selected_keys:function(){var e=this,t=y(this.pkey,this.type);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_type(t.data)),t.key_list}}},k=b,_=s("2877"),f=Object(_["a"])(k,n,a,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=mek_shield-type-legacy.7a05fece.js.map