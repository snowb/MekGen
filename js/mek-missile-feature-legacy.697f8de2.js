(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-missile-feature"],{5176:function(e,t,r){e.exports=r("51b6")},"51b6":function(e,t,r){r("a3c3"),e.exports=r("584a").Object.assign},"8d56":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.filteredFeatureTable,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},"selected-indices":e.selected_feature_index_array,name:"Features",flow:"col"},on:{"update-selected-indices":e.select_feature}})},u=[],s=(r("2fdb"),r("6762"),r("5176")),i=r.n(s),n=r("072f"),c=r("8fcf"),f={name:"mek_beam_feature",props:["featureArray","blastRadius","smartMissile"],mixins:[n["a"],c["a"]],components:{"mek-sub-component-table":function(){return r.e("chunk-5a8f0fc3").then(r.bind(null,"97ea"))}},data:function(){var e={feature_table:[{feature:"Long Range",cost:1.33},{feature:"Hypervelocity",cost:1.25},{feature:"Tunneling",cost:1.3},{feature:"Home On Jam",cost:2},{feature:"Fuse",cost:1.1},{feature:"Foam",cost:1.33},{feature:"Flare",cost:.5},{feature:"Smoke",cost:.5,exclusive_smoke_scatter:!0},{feature:"Scatter",cost:.5,exclusive_smoke_scatter:!0},{feature:"Countermissile",cost:1,exclusive_counter:!0},{feature:"Variable Countermissile",cost:1.8,exclusive_counter:!0},{feature:"Smoke-Scatter",cost:1,exclusive_smoke:!0,exclusive_smoke_scatter:!0},{feature:"Nuclear",cost:1e3}]};return e.exclusive_counter=e.feature_table.filter(function(e){return"undefined"!==typeof e.exclusive_counter}),e.exclusive_smoke_scatter=e.feature_table.filter(function(e){return"undefined"!==typeof e.exclusive_smoke_scatter}),e.selected_feature_array=[],e},methods:{select_feature:function(e){this.blastRadius;var t=this.filteredFeatureTable[e].feature,r=this.is_exclusive_feature("exclusive_counter",t),a=this.is_exclusive_feature("exclusive_smoke_scatter",t),u=i()({},this.filteredFeatureTable[e]),s=this.selected_feature_array.filter(function(e){return e.feature.toLowerCase()!=t.toLowerCase()}),n=this.selected_feature_array.some(function(e){return e.feature.toLowerCase()==t.toLowerCase()},this);r&&(s=s.filter(function(e){return!e.exclusive_counter})),a&&(s=s.filter(function(e){return!e.exclusive_smoke_scatter})),n||s.push(u),this.$set(this,"selected_feature_array",s),0==s.length&&this.$set(this,"selected_feature_array",[]),this.$emit("update-feature",this.selected_feature_array)},find_feature_index:function(e){var t;return this.filteredFeatureTable.some(function(r,a){return r.feature.toLowerCase()==e.toLowerCase()&&(t=a,!0)}),t},is_exclusive_feature:function(e,t){return this[e].some(function(e){return e.feature.toLowerCase()==t.toLowerCase()})}},computed:{selected_feature_index_array:function(){var e=[];if(0==this.featureArray.length&&(this.selected_feature_array=[]),1==this.featureArray.length)return this.selected_feature_array=[this.filteredFeatureTable[this.find_feature_index(this.featureArray[0].feature)]],[this.find_feature_index(this.featureArray[0].feature)];var t=!1,r=this,a=[];return this.selected_feature_array=this.featureArray.reduceRight(function(e,u){var s=r.is_exclusive_feature("exclusive_counter",u.feature);return s&&!t&&(e.push(u),t=!0,a.push(u.feature.toLowerCase())),a.includes(u.feature.toLowerCase())||(e.push(u),a.push(u.feature.toLowerCase())),e},[]),e=this.selected_feature_array.reduce(function(e,t){return e.push(r.find_feature_index(t.feature)),e},[]),this.featureArray.length!=this.selected_feature_array.length&&this.$emit("update-feature",this.selected_feature_array),this.blastRadius,e},flat_feature_array:function(){return this.feature_table.reduce(function(e,t){return e.push(t.feature),e},[])},filteredFeatureTable:function(){var e=this;return this.feature_table.filter(function(t){return(0!=e.blastRadius||!["nuclear","scatter","smoke","smoke-scatter"].includes(t.feature.toLowerCase()))&&!(!e.smartMissile&&"home on jam"==t.feature.toLowerCase())},this)}},watch:{blastRadius:function(e,t){if(e<=0&&t>0){var r=this.selected_feature_array.filter(function(e){return"nuclear"!=e.feature.toLowerCase()});this.$emit("update-feature",r)}}}},o=f,l=r("2877"),_=Object(l["a"])(o,a,u,!1,null,null,null);t["default"]=_.exports},9306:function(e,t,r){"use strict";var a=r("c3a1"),u=r("9aa9"),s=r("355d"),i=r("241e"),n=r("335c"),c=Object.assign;e.exports=!c||r("294c")(function(){var e={},t={},r=Symbol(),a="abcdefghijklmnopqrst";return e[r]=7,a.split("").forEach(function(e){t[e]=e}),7!=c({},e)[r]||Object.keys(c({},t)).join("")!=a})?function(e,t){var r=i(e),c=arguments.length,f=1,o=u.f,l=s.f;while(c>f){var _,h=n(arguments[f++]),d=o?a(h).concat(o(h)):a(h),m=d.length,b=0;while(m>b)l.call(h,_=d[b++])&&(r[_]=h[_])}return r}:c},a3c3:function(e,t,r){var a=r("63b6");a(a.S+a.F,"Object",{assign:r("9306")})}}]);
//# sourceMappingURL=mek-missile-feature-legacy.697f8de2.js.map