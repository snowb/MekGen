(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-feature"],{5176:function(e,t,r){e.exports=r("51b6")},"51b6":function(e,t,r){r("a3c3"),e.exports=r("584a").Object.assign},9306:function(e,t,r){"use strict";var s=r("c3a1"),a=r("9aa9"),u=r("355d"),i=r("241e"),n=r("335c"),f=Object.assign;e.exports=!f||r("294c")(function(){var e={},t={},r=Symbol(),s="abcdefghijklmnopqrst";return e[r]=7,s.split("").forEach(function(e){t[e]=e}),7!=f({},e)[r]||Object.keys(f({},t)).join("")!=s})?function(e,t){var r=i(e),f=arguments.length,c=1,l=a.f,o=u.f;while(f>c){var _,h=n(arguments[c++]),d=l?s(h).concat(l(h)):s(h),p=d.length,v=0;while(p>v)o.call(h,_=d[v++])&&(r[_]=h[_])}return r}:f},a3c3:function(e,t,r){var s=r("63b6");s(s.S+s.F,"Object",{assign:r("9306")})},bc65:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("mek-sub-component-table",{attrs:{items:e.feature_table,headers:{feature:"Feature",cost:"Cost"},"show-headers":!0,format:{cost:"multiplier"},"selected-indices":e.selected_feature_index_array,name:"Features",flow:"col"},on:{"update-selected-indices":e.select_feature}})},a=[],u=(r("6762"),r("5176")),i=r.n(u),n=r("072f"),f=r("8fcf"),c={name:"mek_beam_feature",props:["featureArray","burstValue"],mixins:[n["a"],f["a"]],components:{"mek-sub-component-table":function(){return r.e("chunk-5a8f0fc3").then(r.bind(null,"97ea"))}},data:function(){var e={feature_table:[{feature:"Mag-Fed",cost:.9},{feature:"Anti-Missile",cost:1,exclusive_anti_missile:!0},{feature:"Variable Anti-Missile",cost:1.8,exclusive_anti_missile:!0},{feature:"Anti-Personnel",cost:1,exclusive_personnel:!0},{feature:"Variable Anti-Personnel",cost:1.8,exclusive_personnel:!0},{feature:"Anti-Missile & Personnel",cost:1.6,exclusive_personnel:!0,exclusive_anti_missile:!0},{feature:"All Purpose",cost:2.6,exclusive_personnel:!0,exclusive_anti_missile:!0},{feature:"Fragile",cost:1},{feature:"Long Range",cost:1.33},{feature:"Hydro",cost:.2},{feature:"Mega-Beam",cost:10},{feature:"Disruptor",cost:2}]};return e.exclusive_anti_missile=e.feature_table.filter(function(e){return"undefined"!==typeof e.exclusive_anti_missile}),e.exclusive_personnel=e.feature_table.filter(function(e){return"undefined"!==typeof e.exclusive_personnel}),e.selected_feature_array=[],e},methods:{select_feature:function(e){this.burstValue;var t=this.feature_table[e].feature,r=this.is_exclusive_feature("exclusive_anti_missile",t),s=this.is_exclusive_feature("exclusive_personnel",t),a=i()({},this.feature_table[e]),u=this.selected_feature_array.filter(function(e){return e.feature.toLowerCase()!=t.toLowerCase()}),n=this.selected_feature_array.some(function(e){return e.feature.toLowerCase()==t.toLowerCase()},this);r&&s&&(u=u.filter(function(e){return!e.exclusive_anti_missile&&!e.exclusive_personnel})),r&&(u=u.filter(function(e){return!e.exclusive_anti_missile})),s&&(u=u.filter(function(e){return!e.exclusive_personnel})),n||u.push(a),this.$set(this,"selected_feature_array",u),0==u.length&&this.$set(this,"selected_feature_array",[]),this.$emit("update-feature",this.selected_feature_array)},find_feature_index:function(e){var t;return this.feature_table.some(function(r,s){return r.feature.toLowerCase()==e.toLowerCase()&&(t=s,!0)}),t},is_exclusive_feature:function(e,t){return this[e].some(function(e){return e.feature.toLowerCase()==t.toLowerCase()})},exclusive_indices:function(){var e=this.selected_feature_array.reduce(function(e,t,r){return t.exclusive&&e.push(r),e},[]);return e}},computed:{selected_feature_index_array:function(){var e=[];if(0==this.featureArray.length&&(this.selected_feature_array=[]),1==this.featureArray.length)return this.selected_feature_array=[this.feature_table[this.find_feature_index(this.featureArray[0].feature)]],[this.find_feature_index(this.featureArray[0].feature)];var t=!1,r=!1,s=this,a=[];return this.selected_feature_array=this.featureArray.reduceRight(function(e,u){var i=s.is_exclusive_feature("exclusive_anti_missile",u.feature),n=s.is_exclusive_feature("exclusive_personnel",u.feature);return i&&!t&&n&&!r&&(e.push(u),t=!0,r=!0,a.push(u.feature.toLowerCase())),i&&!t&&(e.push(u),t=!0,a.push(u.feature.toLowerCase())),n&&!r&&(e.push(u),r=!0,a.push(u.feature.toLowerCase())),a.includes(u.feature.toLowerCase())||(e.push(u),a.push(u.feature.toLowerCase())),e},[]),e=this.selected_feature_array.reduce(function(e,t){return e.push(s.find_feature_index(t.feature)),e},[]),this.featureArray.length!=this.selected_feature_array.length&&this.$emit("update-feature",this.selected_feature_array),this.burstValue,e},flat_feature_array:function(){return this.feature_table.reduce(function(e,t){return e.push(t.feature),e},[])}}},l=c,o=r("2877"),_=Object(o["a"])(l,s,a,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=mek_beam-feature-legacy.a4b2b08e.js.map