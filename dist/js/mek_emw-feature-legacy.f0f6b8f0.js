(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_emw-feature"],{"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return c}),r.d(t,"c",function(){return l}),r.d(t,"b",function(){return o}),r.d(t,"a",function(){return f});var n=r("f499"),s=r.n(n),u=r("a745"),a=r.n(u),i=(r("cadf"),r("551c"),r("f751"),r("097d"),void 0),c=function(e,t){return function(r){if("undefined"===typeof r||!a()(t)||0==t.length)return!1;var n=e.some(function(e){return t.every(function(t){return r[t]==e[t]})});return n}},l=function(e){return function(t,r){return e.some(function(e){return void 0!==e[t]&&e[t]==r})}},o=function(e,t){return function(r,n){var s=null;return t(r,n)&&e.some(function(e){if(e[r]==n)return s=e,!0},i),s}},f=function(e,t,r,n,u){return function(a,i){var c=void 0,l=[],o=!1,f=[],d=s()(i);return void 0!==i&&t(a,i[a])?e(i)?(c=JSON.parse(s()(i)),l=[c[a]],o=!1):(c=JSON.parse(s()(r(a,i[a]))),l=[c[a]],o=!0,f.push(u+": "+d),f.push("**** Invalid data. Reseting. ****")):(c=n,l=[c[a]],o=!0,f.push(u+": "+d),f.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:l,update:o,alerts:f}}}},c48b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},name:"Features",flow:"pkey-col","show-headers":!0,format:{cost:"multiplier"}},on:{"update-selected-data":e.select_feature}})},s=[],u=r("f499"),a=r.n(u),i=(r("ac6a"),r("d866")),c=(r("6762"),r("706d")),l=[{feature:"Rechargeable",cost:1.1},{feature:"Thrown",cost:1.2},{feature:"Quick",cost:2},{feature:"Hyper",cost:7.5},{feature:"Beam Shield",cost:1.5,exclusive_beam_shield:!0},{feature:"Variable Beam Shield",cost:2,exclusive_beam_shield:!0}],o=l.filter(function(e){return"undefined"!==typeof e.exclusive_beam_shield}),f=["feature","cost","exclusive_beam_shield"],d=l,h=!1,p=function(e){h=!1,d=e?l.filter(function(e){return"Rechargeable"!=e.feature}):l},m=Object(c["d"])(l,f),_=function(e){return h?m(e):(h=!0,m=Object(c["d"])(d,f),m(e))},v=function(e,t){return Object(c["c"])(d)(e,t)},y=function(e,t){return Object(c["b"])(d,v)(e,t)},b=function(e,t,r){var n=null;switch(e.toLowerCase()){case"exclusive_beam":n=o;break}return null!==n&&n.some(function(e){return e[t]==r})},k=function(e,t){var r=!1,n=!1,s=[],u=[];if(void 0===e||void 0===t){u.push("Mek_EMW-Feature: ");var i=void 0===e?"**** Missing feature array. Returning blank. ****":"**** No primary key provided. Returning blank. ****";return u.push(i),{cleaned_array:[],update:!0,key_list:[],alerts:u}}var c=e.reduceRight(function(e,i){if(void 0===i[t])return u.push("Mek_EMW-Feature: "+a()(i)),u.push("**** Missing primary key. Ignoring. ****"),e;var c=i;if(_(i)||(u.push("Mek_EMW-Feature: "+a()(i)),u.push("**** Invalid data, attempting to reset. ****"),c=y(t,i[t]),n=!0),null===c)return u.push("**** Unable to reset. No matching data. ****"),n=!0,e;var l=b("exclusive_beam",t,i[t]);return l&&!r?(e.push(i),r=!0,s.push(i[t]),e):l&&r?(u.push("Mek_EMW-Feature: "+i),u.push("**** Duplicate exclusive EMW data. Ignoring. ****"),n=!0,e):(s.includes(i[t])||(e.push(i),s.push(i[t])),e)},[]);return c.reverse(),{cleaned_array:c,update:n,key_list:s,alerts:u}},g={name:"mek_melee_feature",props:["featureArray","infiniteUse"],mixins:[i["a"]],components:{"mek-sub-component-table":function(){return r.e("mek_sub-component-table").then(r.bind(null,"09c0"))}},data:function(){var e={alerts:[],pkey:"feature",suppressAlerts:!1,selected_feature_array:[]};return e},methods:{select_feature:function(e){var t=this;this.suppressAlerts=!0;var r=this.toggleFeature(this.selected_feature_array,e),n=k(r,this.pkey);r=n.cleaned_array,n.alerts.length>0&&!this.suppressAlerts&&(n.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),this.publishAlerts(),this.$set(this,"selected_feature_array",r),this.$emit("update-feature",r),this.suppressAlerts=!1},toggleFeature:function(e,t){var r=this,n=JSON.parse(a()(e)),s=n.some(function(e){return e[r.pkey]==t[r.pkey]},this);if(s){var u=n.filter(function(e){return e[r.pkey]!=t[r.pkey]},this);return u}return n.push(t),n}},computed:{feature_table:function(){return p(this.infiniteUse),d},selected_keys:function(){var e=this;this.infiniteUse;var t=k(this.featureArray,this.pkey);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.$emit("update-feature",t.cleaned_array)),this.$set(this,"selected_feature_array",t.cleaned_array),t.key_list}},watch:{infiniteUse:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},A=g,w=r("2877"),M=Object(w["a"])(A,n,s,!1,null,null,null);t["default"]=M.exports},d866:function(e,t,r){"use strict";r("cadf"),r("551c"),r("f751"),r("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_emw-feature-legacy.f0f6b8f0.js.map