(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector-main","mek_reflector-data-module"],{2429:function(e,t,n){"use strict";n.r(t),n.d(t,"reflector_data_table",function(){return o}),n.d(t,"reflector_validate",function(){return s}),n.d(t,"has_feature",function(){return a}),n.d(t,"get_feature",function(){return u}),n.d(t,"cleaned_feature",function(){return l});var i=n("706d"),o=Array.apply({},Array(10));o=o.map(function(e,t){var n=t+1,i=n*n;return{quality_value:n,cost:i}});var r=["quality_value","cost"],c=JSON.parse(JSON.stringify(o[0])),s=Object(i["d"])(o,r),a=Object(i["c"])(o),u=Object(i["b"])(o,a),l=Object(i["a"])(s,a,u,c,"Mek_Reflector")},"2fdb":function(e,t,n){"use strict";var i=n("5ca1"),o=n("d2c8"),r="includes";i(i.P+i.F*n("5147")(r),"String",{includes:function(e){return!!~o(this,e,r).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,n){var i=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(o){}}return!0}},"5ded":function(e,t,n){},6762:function(e,t,n){"use strict";var i=n("5ca1"),o=n("c366")(!0);i(i.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var i=void 0,o=function(e,t){return function(n){if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;var i=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return i}},r=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},c=function(e,t){return function(n,o){var r=null;return t(n,o)&&e.some(function(e){if(e[n]==o)return r=e,!0},i),r}},s=function(e,t,n,i,o){return function(r,c){var s=void 0,a=[],u=!1,l=[],f=JSON.stringify(c);return void 0!==c&&t(r,c[r])?e(c)?(s=JSON.parse(JSON.stringify(c)),a=[s[r]],u=!1):(s=JSON.parse(JSON.stringify(n(r,c[r]))),a=[s[r]],u=!0,l.push(o+": "+f),l.push("**** Invalid data. Reseting. ****")):(s=i,a=[s[r]],u=!0,l.push(o+": "+f),l.push("**** Invalid data. Reseting to default. ****")),{data:s,key_list:a,update:u,alerts:l}}}},"7b4b":function(e,t,n){"use strict";var i=n("7618");t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)if("object"===Object(i["a"])(this.cost_multipliers[t]))for(var n in this.cost_multipliers[t])e*=this.cost_multipliers[t][n];else e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,n){return e+=n>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,n){"use strict";n("ac6a"),n("34ef"),n("6b54"),n("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);var n=Math.pow(10,+t);return Math.round(+e*n)/n},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad:function(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},invisible_pad:function(e){var t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},aae3:function(e,t,n){var i=n("d3f4"),o=n("2d95"),r=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==o(e))}},b117:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col"},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.reflector_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-sub-component-table",{attrs:{items:e.reflector_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{quality_value:"QV",cost:"Cost"},name:"Quality",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_reflector}}),n("span",{staticClass:"mek-flex-col no-margin"},[n("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-Reflector"},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-component-stats",{attrs:{cols:3,rows:3}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Quality Value: "+e._s(e.selected_reflector.quality_value))]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),n("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Space: "+e._s(e.space_cost))]),n("div",{attrs:{slot:"col2-row3"},slot:"col2-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Cost: "+e._s(e.selected_reflector.cost))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Total Cost: "+e._s(e.cost))])]),n("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},o=[],r=(n("ac6a"),n("8fcf")),c=n("f52e"),s=n("7b4b"),a=n("d866"),u=n("2429"),l={name:"mek_reflector",props:[],mixins:[r["a"],c["a"],s["a"],a["a"]],components:{"mek-space-efficiency":function(){return n.e("mek-space-efficiency").then(n.bind(null,"57c1"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"dba3"))},"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"c342"))},"mek-component-stats":function(){return n.e("mek_component-stats").then(n.bind(null,"67b1"))},"mek-sub-component-table":function(){return n.e("mek_sub-component-table").then(n.bind(null,"09c0"))}},data:function(){var e={pkey:"quality_value",uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"reflector",original_component:null,component_changed:!0,selected_reflector:{quality_value:1,cost:1},efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.alerts=[],e.hasAlert=!1,e},methods:{updateComponentName:function(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},select_reflector:function(e){this.$set(this,"selected_reflector",e),this.component_changed=!0},output_reflector_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="reflector",t.component_name=null===this.component_name?this.reflector_name:this.component_name,t.custom_component_name=this.custom_component_name,t.efficiencies=this.efficiencies,t.selected_reflector=this.selected_reflector,t.damage_capacity=this.damage_capacity,t.cost=this.cost,t.weight=this.weight,this.$nextTick(function(){e.component_changed=!1}),this.original_component=JSON.stringify(t),JSON.parse(this.original_component)},ingest_data:function(e){var t=this,n="Reflector is not valid, resetting.";this.universal_ingest_data(e,n),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=t.hasAlert})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_reflector_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"selected_reflector",{quality_value:1,cost:1}),this.$store.commit("saveComponent",null);break}},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0}},computed:{raw_space:function(){return this.selected_reflector.cost},weight:function(){return this.round(this.selected_reflector.quality_value/2,2)},damage_capacity:function(){return this.selected_reflector.quality_value},cost:function(){return this.round(this.selected_reflector.cost+this.efficiencies.space.cost,2)},reflector_name:function(){return"QV-"+this.selected_reflector.quality_value+" Reflector"},reflector_table:function(){return u["reflector_data_table"]},selected_keys:function(){var e=this,t=Object(u["cleaned_feature"])(this.pkey,this.selected_reflector);return t.alerts.length>0&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.hasAlert=!0,this.select_armor_type(t.data)),t.key_list}}},f=l,d=(n("b1a2"),n("2877")),p=Object(d["a"])(f,i,o,!1,null,"482d8b05",null);t["default"]=p.exports},b1a2:function(e,t,n){"use strict";var i=n("5ded"),o=n.n(i);o.a},d2c8:function(e,t,n){var i=n("aae3"),o=n("be13");e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},d866:function(e,t,n){"use strict";t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},f52e:function(e,t,n){"use strict";var i=n("7618");n("ac6a"),n("456d"),n("6762"),n("2fdb");t["a"]={methods:{universal_ingest_data:function(e,t){this.original_component=JSON.stringify(e);var n=JSON.parse(this.original_component);for(var o in null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),n)if(!Object.keys(this._computedWatchers).includes(o))if("object"!==Object(i["a"])(n[o])||Array.isArray(n[o]))Array.isArray(n[o]),this.$set(this,o,n[o]);else for(var r in"object"===Object(i["a"])(this[o])&&null!==this[o]||(this[o]={}),n[o])this.$set(this[o],[r],n[o][r]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_reflector-main-legacy.2a4d2a4b.js.map