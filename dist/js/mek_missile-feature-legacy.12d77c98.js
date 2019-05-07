(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-feature"],{"706d":function(e,t,r){"use strict";r.d(t,"d",function(){return c}),r.d(t,"c",function(){return o}),r.d(t,"b",function(){return l}),r.d(t,"a",function(){return f});var s=r("f499"),u=r.n(s),a=r("a745"),n=r.n(a),i=void 0,c=function(e,t){return function(r){if("undefined"===typeof r||!n()(t)||0==t.length)return!1;var s=e.some(function(e){return t.every(function(t){return r[t]==e[t]})});return s}},o=function(e){return function(t,r){return e.some(function(e){return void 0!==e[t]&&e[t]==r})}},l=function(e,t){return function(r,s){var u=null;return t(r,s)&&e.some(function(e){if(e[r]==s)return u=e,!0},i),u}},f=function(e,t,r,s,a){return function(n,i){var c=void 0,o=[],l=!1,f=[],d=u()(i);return void 0!==i&&t(n,i[n])?e(i)?(c=JSON.parse(u()(i)),o=[c[n]],l=!1):(c=JSON.parse(u()(r(n,i[n]))),o=[c[n]],l=!0,f.push(a+": "+d),f.push("**** Invalid data. Reseting. ****")):(c=s,o=[c[n]],l=!0,f.push(a+": "+d),f.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:o,update:l,alerts:f}}}},c257:function(e,t,r){"use strict";r.r(t),r.d(t,"feature_data_table",function(){return l}),r.d(t,"feature_validate",function(){return p}),r.d(t,"has_feature",function(){return _}),r.d(t,"get_feature",function(){return m}),r.d(t,"cleaned_feature",function(){return k}),r.d(t,"filter_data_table",function(){return d});var s=r("f499"),u=r.n(s),a=(r("6762"),r("2fdb"),r("706d")),n=[{feature:"Long Range",cost:1.33},{feature:"Hypervelocity",cost:1.25},{feature:"Tunneling",cost:1.3},{feature:"Home On Jam",cost:2},{feature:"Fuse",cost:1.1},{feature:"Foam",cost:1.33},{feature:"Flare",cost:.5},{feature:"Smoke",cost:.5,exclusive_smoke_scatter:!0},{feature:"Scatter",cost:.5,exclusive_smoke_scatter:!0},{feature:"Countermissile",cost:1,exclusive_counter:!0},{feature:"Variable Countermissile",cost:1.8,exclusive_counter:!0},{feature:"Smoke-Scatter",cost:1,exclusive_smoke_scatter:!0},{feature:"Nuclear",cost:1e3}],i=n.filter(function(e){return"undefined"!==typeof e.exclusive_smoke_scatter}),c=n.filter(function(e){return"undefined"!==typeof e.exclusive_counter}),o=["feature","cost","exclusive_smoke_scatter","exclusive_counter"],l=n,f=!1,d=function(e,t){f=!1,l="__NIL__"!=e&&t?n:n.filter(function(r){return("__NIL__"!=e||!["nuclear","scatter","smoke","smoke-scatter"].includes(r.feature.toLowerCase()))&&!(!t&&"home on jam"==r.feature.toLowerCase())})},h=Object(a["d"])(n,o),p=function(e){return f?h(e):(f=!0,h=Object(a["d"])(l,o),h(e))},_=function(e,t){return Object(a["c"])(l)(e,t)},m=function(e,t){return Object(a["b"])(l,_)(e,t)},v=function(e,t,r){var s=null;switch(e.toLowerCase()){case"exclusive_smoke_scatter":s=i;break;case"exclusive_counter":s=c;break}return null!==s&&s.some(function(e){return e[t]==r})},k=function(e,t){var r=!1,s=!1,a=!1,n=[],i=[];if(0===e.length)return{cleaned_array:[],update:!1,key_list:[],alerts:i};if(void 0===e||void 0===t){i.push("Mek_Missile-Feature: ");var c=void 0===e?"**** Missing feature array. Returning default. ****":"**** No primary key provided. Returning default. ****";return i.push(c),{cleaned_array:[],update:!0,key_list:[],alerts:i}}var o=e.reduceRight(function(e,c){if(void 0===c[t])return i.push("Mek_Missile-Feature: "+u()(c)),i.push("**** Missing primary key. Ignoring. ****"),e;var o=c;if(p(c)||(i.push("Mek_Missile-Feature: "+u()(c)),i.push("**** Invalid data, attempting to reset. ****"),o=m(t,c[t]),a=!0),null===o)return i.push("**** Unable to reset. No matching data. ****"),a=!0,e;var l=v("exclusive_smoke_scatter",t,c[t]),f=v("exclusive_counter",t,c[t]);return l&&!r?(e.push(c),r=!0,n.push(c[t]),e):l&&r?(i.push("Mek_Missile-Feature: "+c),i.push("**** Duplicate Exclusive SmokeScatter data. Ignoring. ****"),a=!0,e):f&&!s?(e.push(c),s=!0,n.push(c[t]),e):f&&s?(i.push("Mek_Missile-Feature: "+c),i.push("**** Duplicate Exclusive Counter data. Ignoring. ****"),a=!0,e):(n.includes(c[t])||(e.push(c),n.push(c[t])),e)},[]);return o=o.reverse(),0==o.length&&(o=[],a=!0,n=[],i.push("Mek_Missile-Feature: "),i.push("**** Reseting to default ****")),{cleaned_array:o,update:a,key_list:n,alerts:i}}},d866:function(e,t,r){"use strict";r("cadf"),r("551c"),r("f751"),r("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},deb2:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.filteredFeatureTable,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},name:"Features",flow:"pkey-col"},on:{"update-selected-data":e.select_feature}})},u=[],a=r("f499"),n=r.n(a),i=(r("ac6a"),r("d866")),c=r("c257"),o={name:"mek_beam_feature",props:["featureArray","blastRadius","smartMissile"],mixins:[i["a"]],components:{"mek-sub-component-table":function(){return r.e("chunk-6c105c2e").then(r.bind(null,"09c0"))}},data:function(){var e={pkey:"feature",alerts:[],suppressAlerts:!1,selected_feature_array:[]};return e},methods:{select_feature:function(e){var t=this;this.suppressAlerts=!0;var r=this.toggleFeature(this.selected_feature_array,e),s=Object(c["cleaned_feature"])(r,this.pkey);r=s.cleaned_array,s.alerts.length>0&&!this.suppressAlerts&&(s.alerts.forEach(function(e){t.addAlert(e)}),this.publishAlerts()),this.$set(this,"selected_feature_array",r),this.$emit("update-feature",r),this.suppressAlerts=!1},toggleFeature:function(e,t){var r=this,s=JSON.parse(n()(e)),u=s.some(function(e){return e[r.pkey]==t[r.pkey]},this);return u?s.filter(function(e){return e[r.pkey]!=t[r.pkey]},this):(s.push(t),s)}},computed:{filteredFeatureTable:function(){return Object(c["filter_data_table"])(this.blastRadius,this.smartMissile),c["feature_data_table"]},selected_keys:function(){var e=this;this.blastRadius,this.smartMissile;var t=Object(c["cleaned_feature"])(this.featureArray,this.pkey);return t.alerts.length>0&&!this.suppressAlerts&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.$emit("alert-generated",!0),this.$emit("update-feature",t.cleaned_array)),this.$set(this,"selected_feature_array",t.cleaned_array),t.key_list}},watch:{blastRadius:function(e,t){e!=t&&(this.suppressAlerts=!0)},smartMissile:function(e,t){e!=t&&(this.suppressAlerts=!0)}}},l=o,f=r("2877"),d=Object(f["a"])(l,s,u,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=mek_missile-feature-legacy.12d77c98.js.map