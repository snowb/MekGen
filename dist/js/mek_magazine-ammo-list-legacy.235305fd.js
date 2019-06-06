(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_magazine-ammo-list"],{6724:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.filteredAmmoArray,"selected-keys":e.selected_keys,pkey:e.pkey,headers:{type:"Type",cost:"Cost",effect:"Effect"},"show-headers":!0,format:{cost:"multiplier"},name:"Ammo Table",flow:"pkey-col"},on:{"update-selected-data":e.select_ammo}})},n=[],a=(s("ac6a"),s("d866")),i=s("f155"),u={name:"mek_magazine_ammo_list",props:["ammoArray","hasBlast"],mixins:[a["a"]],components:{"mek-sub-component-table":function(){return s.e("mek_sub-component-table").then(s.bind(null,"09c0"))}},data:function(){var e={selected_ammo_array:[],pkey:"type",alerts:[],suppressAlerts:!1};return e},methods:{select_ammo:function(e){var t=this;this.suppressAlerts=!0;var s=this.toggleFeature(this.selected_ammo_array,e),r=Object(i["cleaned_feature"])(s,this.pkey);s=r.cleaned_array,r.alerts.length>0&&!this.suppressAlerts&&(r.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),this.$set(this,"selected_ammo_array",s),this.$emit("update-ammo",s),this.suppressAlerts=!1},toggleFeature:function(e,t){var s=this,r=JSON.parse(JSON.stringify(e)),n=r.some(function(e){return e[s.pkey]==t[s.pkey]},this);return n?r.filter(function(e){return e[s.pkey]!=t[s.pkey]},this):(r.push(t),r)}},computed:{filteredAmmoArray:function(){return Object(i["filter_data_table"])(this.hasBlast),i["feature_data_table"]},selected_keys:function(){var e=this,t=Object(i["cleaned_feature"])(this.ammoArray,this.pkey);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.$emit("update-ammo",t.cleaned_array)),this.$set(this,"selected_ammo_array",t.cleaned_array),t.key_list}},watch:{hasBlast:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},c=u,o=s("2877"),l=Object(o["a"])(c,r,n,!1,null,"cdd70458",null);t["default"]=l.exports},"706d":function(e,t,s){"use strict";s.d(t,"d",function(){return n}),s.d(t,"c",function(){return a}),s.d(t,"b",function(){return i}),s.d(t,"a",function(){return u});var r=void 0,n=function(e,t){return function(s){if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;var r=e.some(function(e){return t.every(function(t){return s[t]==e[t]})});return r}},a=function(e){return function(t,s){return e.some(function(e){return void 0!==e[t]&&e[t]==s})}},i=function(e,t){return function(s,n){var a=null;return t(s,n)&&e.some(function(e){if(e[s]==n)return a=e,!0},r),a}},u=function(e,t,s,r,n){return function(a,i){var u=void 0,c=[],o=!1,l=[],f=JSON.stringify(i);return void 0!==i&&t(a,i[a])?e(i)?(u=JSON.parse(JSON.stringify(i)),c=[u[a]],o=!1):(u=JSON.parse(JSON.stringify(s(a,i[a]))),c=[u[a]],o=!0,l.push(n+": "+f),l.push("**** Invalid data. Reseting. ****")):(u=r,c=[u[a]],o=!0,l.push(n+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:u,key_list:c,update:o,alerts:l}}}},d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},f155:function(e,t,s){"use strict";s.r(t),s.d(t,"feature_data_table",function(){return o}),s.d(t,"feature_validate",function(){return p}),s.d(t,"has_feature",function(){return h}),s.d(t,"get_feature",function(){return m}),s.d(t,"shock_exclusive",function(){return a}),s.d(t,"blast_exclusive",function(){return i}),s.d(t,"cleaned_feature",function(){return _}),s.d(t,"filter_data_table",function(){return f});s("6762"),s("2fdb");var r=s("706d"),n=[{type:"Paintball",cost:.5,effect:"Practice Rounds"},{type:"Foam",cost:.5,effect:"Firefighting"},{type:"High-Ex",cost:1,effect:"Standard"},{type:"Tracer",cost:3,effect:"+1 to WA"},{type:"Kinetic",cost:3,effect:"More Knockback"},{type:"Tangler",cost:3,effect:"Grappling Attack"},{type:"Armor Piercing",cost:4,effect:"1/2 SP vs Armor"},{type:"Disruptor",cost:4,effect:"1/2 SP vs Energy"},{type:"Incendiary",cost:4,effect:"Flamethrower"},{type:"Shock (only)",cost:4,effect:"Stun Effect",shock_exclusive:!0},{type:"Shock (add)",cost:6,effect:"Stun & Damage",shock_exclusive:!0},{type:"Scattershot",cost:5,effect:"Shotgun Effect"},{type:"Blast I",cost:6,effect:"1-Hex Radius",blast_exclusive:!0},{type:"Blast II",cost:8,effect:"2-Hex Radius",blast_exclusive:!0},{type:"Blast III",cost:10,effect:"3-Hex Radius",blast_exclusive:!0},{type:"Blast IV",cost:12,effect:"4-Hex Radius",blast_exclusive:!0},{type:"Blast V",cost:14,effect:"5-Hex Radius",blast_exclusive:!0},{type:"Nuclear",cost:1e3,effect:"Atomic Ammo"}],a=n.filter(function(e){return"undefined"!==typeof e.shock_exclusive}),i=n.filter(function(e){return"undefined"!==typeof e.blast_exclusive}),u=["type","cost","effect","shock_exclusive","blast_exclusive"],c={type:"High-Ex",cost:1,effect:"Standard"},o=n,l=!1,f=function(e){l=!1,o=e?n:n.filter(function(e){return"Nuclear"!=e.type})},d=Object(r["d"])(n,u),p=function(e){return l?d(e):(l=!0,d=Object(r["d"])(o,u),d(e))},h=function(e,t){return Object(r["c"])(o)(e,t)},m=function(e,t){return Object(r["b"])(o,h)(e,t)},y=function(e,t,s){var r=null;switch(e.toLowerCase()){case"shock_exclusive":r=a;break;case"blast_exclusive":r=i;break}return null!==r&&r.some(function(e){return e[t]==s})},_=function(e,t){var s=!1,r=!1,n=!1,a=[],i=[];if(void 0===e||void 0===t){i.push("Mek_Magazine-Ammo-List: ");var u=void 0===e?"**** Missing feature array. Returning default. ****":"**** No primary key provided. Returning default. ****";return i.push(u),{cleaned_array:[c],update:!0,key_list:["High-Ex"],alerts:i}}var o=e.reduceRight(function(e,u){if(void 0===u[t])return i.push("Mek_Magazine-Ammo-List: "+JSON.stringify(u)),i.push("**** Missing primary key. Ignoring. ****"),e;var c=u;if(p(u)||(i.push("Mek_Magazine-Ammo-List: "+JSON.stringify(u)),i.push("**** Invalid data, attempting to reset. ****"),c=m(t,u[t]),u=c,n=!0),null===c)return i.push("**** Unable to reset. No matching data. ****"),n=!0,e;var o=y("shock_exclusive",t,u[t]),l=y("blast_exclusive",t,u[t]);return o&&!s?(e.push(u),s=!0,a.push(u[t]),e):o&&s?(i.push("Mek_Magazine-Ammo-List: "+u),i.push("**** Duplicate exclusive shock data. Ignoring. ****"),n=!0,e):l&&!r?(e.push(u),r=!0,a.push(u[t]),e):l&&r?(i.push("Mek_Magazine-Ammo-List: "+u),i.push("**** Duplicate exclusive blast radius data. Ignoring. ****"),n=!0,e):(a.includes(u[t])||(e.push(u),a.push(u[t])),e)},[]);return o=o.filter(function(e){return"nuclear"!=e[t].toLowerCase()||r&&"nuclear"==e[t].toLowerCase()}).reverse(),0==o.length&&(o=[JSON.parse(JSON.stringify(c))],n=!0,a=["High-Ex"],i.push("Mek_Magazine-Ammo-List: "),i.push("**** Reseting to default ****")),{cleaned_array:o,update:n,key_list:a,alerts:i}}}}]);
//# sourceMappingURL=mek_magazine-ammo-list-legacy.235305fd.js.map