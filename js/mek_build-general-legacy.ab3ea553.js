(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_build-general"],{"2fdb":function(t,e,n){"use strict";var i=n("5ca1"),o=n("d2c8"),s="includes";i(i.P+i.F*n("5147")(s),"String",{includes:function(t){return!!~o(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,n){var i=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(o){}}return!0}},6762:function(t,e,n){"use strict";var i=n("5ca1"),o=n("c366")(!0);i(i.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"7b4b":function(t,e,n){"use strict";var i=n("7618");e["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var t=1;for(var e in this.cost_multipliers)if("object"===Object(i["a"])(this.cost_multipliers[e]))for(var n in this.cost_multipliers[e])t*=this.cost_multipliers[e][n];else t*=this.cost_multipliers[e];return this.round(t,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(t,e,n){return t+=n>0?", ":"",t+=e.feature,t},"")},newComponent:function(){var t=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof t||null===t||(t.uuid!==this.uuid&&t.component_category==this.component_category&&t.component_type==this.component_type&&this.ingest_data(t),!1)}}}},"8fcf":function(t,e,n){"use strict";n("ac6a"),n("34ef"),n("6b54"),n("a481");e["a"]={methods:{round:function(t,e){if("undefined"===typeof e||0==+e)return Math.round(+t);var n=Math.pow(10,+e);return Math.round(+t*n)/n},floor:function(t){return Math.floor(+t)},ceiling:function(t){return Math.ceiling(+t)},decimalPad:function(t){return+t%1===0?t.toPrecision(2):t},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})},invisible_pad:function(t){var e="";return t.forEach(function(t){t.length>e.length&&(e=t)},0),e+"XX"},isNumeric:function(t){return"undefined"!==typeof t&&!isNaN(parseFloat(t))&&isFinite(t)}}}},aae3:function(t,e,n){var i=n("d3f4"),o=n("2d95"),s=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},b41f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":t.ingest_mek,"component-name":t.component_name||t.mek_name,"component-changed":t.component_changed},on:{"update-component-name":t.updateComponentName}}),n("mek-save-reset-component",{staticStyle:{"align-self":"start"},attrs:{activeButtons:"save,reset,new"},on:{"save-reset-component":t.componentSaveReset}})],1)},o=[],s=n("8fcf"),a=n("7b4b"),c=n("f52e"),r={name:"mek_build-general",props:["selectedData"],mixins:[s["a"],a["a"],c["a"]],components:{"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"972e"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"4a3f"))}},data:function(){var t={uuid:null,component_name:null,custom_component_name:!1,component_category:"mek",component_type:"mek",original_component:null,component_changed:!0,alerts:[],hasAlert:!1};return t},methods:{updateComponentName:function(t){t!=this.component_name&&(this.component_name=t,this.custom_component_name=!0,this.component_changed=!0)},componentSaveReset:function(t){var e="reset"==t&&null==this.original_component?"new":t;switch(e){case"save":this.$emit("saveSelectedData","general",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"new":this.uuid=null,this.component_name=null,this.custom_component_name=!1,this.component_category="mek",this.component_type="mek",this.original_component=null,this.component_changed=!0,this.$emit("resetSelectedData");break}},output_data:function(){var t=this,e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="mek",e.component_type="mek",e.component_name=this.custom_component_name?this.component_name:this.mek_name,e.custom_component_name=this.custom_component_name,this.$nextTick(function(){t.component_changed=!1}),this.original_component=JSON.stringify(e),JSON.parse(this.original_component)},ingest_data:function(t){var e=this,n="Mek is not valid, resetting.";this.universal_ingest_data(t,n),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(function(){e.component_changed=e.hasAlert})},handleAlert:function(t){this.hasAlert=t}},computed:{mek_name:function(){return this.custom_component_name?this.component_name:"Unnamed Mek"},ingest_mek:function(){return null===this.selectedData||(this.selectedData.uuid!==this.uuid&&this.selectedData.component_category==this.component_category&&this.selectedData.component_type==this.component_type&&this.ingest_data(this.selectedData),!1)}}},u=r,m=n("2877"),h=Object(m["a"])(u,i,o,!1,null,"47afd6de",null);e["default"]=h.exports},d2c8:function(t,e,n){var i=n("aae3"),o=n("be13");t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},f52e:function(t,e,n){"use strict";var i=n("7618");n("ac6a"),n("456d"),n("6762"),n("2fdb");e["a"]={methods:{universal_ingest_data:function(t,e){this.original_component=JSON.stringify(t);var n=JSON.parse(this.original_component);for(var o in null===t&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",e)),n)if(!Object.keys(this._computedWatchers).includes(o))if("object"!==Object(i["a"])(n[o])||Array.isArray(n[o]))Array.isArray(n[o]),this.$set(this,o,n[o]);else for(var s in"object"===Object(i["a"])(this[o])&&null!==this[o]||this.$set(this,o,{}),n[o])this.$set(this[o],[s],n[o][s]);this.$forceUpdate()},updateComponentName:function(t){this.component_name=t,this.component_changed=!0},addAlert:function(t){this.alerts.push(t)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_build-general-legacy.ab3ea553.js.map