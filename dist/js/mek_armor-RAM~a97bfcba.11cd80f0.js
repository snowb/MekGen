(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_armor-RAM~a97bfcba","mek_armor-RAM-data-module~5af327fd"],{4277:function(t,e,r){"use strict";r.r(e),r.d(e,"ram_data_table",function(){return n}),r.d(e,"ram_validate",function(){return i}),r.d(e,"has_feature",function(){return l}),r.d(e,"get_feature",function(){return u}),r.d(e,"cleaned_feature",function(){return p});var a=r("706d");let n=[{absorption:0,cost:1,armor_penalty:0},{absorption:.2,cost:1.5,armor_penalty:0},{absorption:.25,cost:1.8,armor_penalty:.2},{absorption:.33,cost:2.2,armor_penalty:.25},{absorption:.5,cost:2.5,armor_penalty:.33}],s={absorption:0,cost:1,armor_penalty:0},o=["absorption","cost","armor_penalty"],i=Object(a["d"])(n,o),l=Object(a["c"])(n),u=Object(a["b"])(n,l),p=Object(a["a"])(i,l,u,s,"Mek_RAM-Type")},"592e":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("mek-sub-component-table",{attrs:{items:t.absorption_table,selectedKeys:t.selected_keys,pkey:t.pkey,headers:{absorption:"Absorption",armor_penalty:"SP Reduction",cost:"Cost"},name:"Energy Absorption",flow:"pkey-col",showHeaders:!0,format:{absorption:"percent",armor_penalty:"percent",cost:"multiplier"}},on:{"update-selected-data":t.select_absorption_type}})},n=[],s=(r("ac6a"),r("072f")),o=r("8fcf"),i=r("d866"),l=r("4277"),u=r("a949"),p={name:"mek_armor_ram",props:["absorption","hasArmor"],mixins:[s["a"],o["a"],i["a"]],components:{"mek-sub-component-table":u["default"]},data:function(){let t={pkey:"absorption",alerts:[]};return t},methods:{select_absorption_type:function(t){this.$emit("update-absorption",JSON.parse(JSON.stringify(t)))}},computed:{absorption_table(){return l["ram_data_table"]},selected_keys(){let t=Object(l["cleaned_feature"])(this.pkey,this.absorption);return t.alerts.length>0&&(t.alerts.forEach(t=>{this.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.select_absorption_type(t.data)),t.key_list}}},c=p,d=r("2877"),m=Object(d["a"])(c,a,n,!1,null,null,null);e["default"]=m.exports},"706d":function(t,e,r){"use strict";r.d(e,"d",function(){return a}),r.d(e,"c",function(){return n}),r.d(e,"b",function(){return s}),r.d(e,"a",function(){return o});let a=(t,e)=>r=>{if("undefined"===typeof r||!Array.isArray(e)||0==e.length)return!1;let a=t.some(t=>{return e.every(e=>{return r[e]==t[e]})});return a},n=t=>(e,r)=>{return t.some(t=>{return void 0!==t[e]&&t[e]==r})},s=(t,e)=>(r,a)=>{let n=null;return e(r,a)&&t.some(t=>{if(t[r]==a)return n=t,!0},void 0),n},o=(t,e,r,a,n)=>(s,o)=>{let i=void 0,l=[],u=!1,p=[],c=JSON.stringify(o);return void 0!==o&&e(s,o[s])?t(o)?(i=JSON.parse(JSON.stringify(o)),l=[i[s]],u=!1):(i=JSON.parse(JSON.stringify(r(s,o[s]))),l=[i[s]],u=!0,p.push(n+": "+c),p.push("**** Invalid data. Reseting. ****")):(i=a,l=[i[s]],u=!0,p.push(n+": "+c),p.push("**** Invalid data. Reseting to default. ****")),{data:i,key_list:l,update:u,alerts:p}}},d866:function(t,e,r){"use strict";e["a"]={methods:{addAlert(t){this.alerts.push(t)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);