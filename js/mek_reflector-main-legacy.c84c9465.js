(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector-main"],{"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return f});var s=n("f499"),o=n.n(s),i=n("a745"),c=n.n(i),a=(n("cadf"),n("551c"),n("f751"),n("097d"),void 0),r=function(e,t){return function(n){if("undefined"===typeof n||!c()(t)||0==t.length)return!1;var s=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return s}},l=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},u=function(e,t){return function(n,s){var o=null;return t(n,s)&&e.some(function(e){if(e[n]==s)return o=e,!0},a),o}},f=function(e,t,n,s,i){return function(c,a){var r=void 0,l=[],u=!1,f=[],p=o()(a);return void 0!==a&&t(c,a[c])?e(a)?(r=JSON.parse(o()(a)),l=[r[c]],u=!1):(r=JSON.parse(o()(n(c,a[c]))),l=[r[c]],u=!0,f.push(i+": "+p),f.push("**** Invalid data. Reseting. ****")):(r=s,l=[r[c]],u=!0,f.push(i+": "+p),f.push("**** Invalid data. Reseting to default. ****")),{data:r,key_list:l,update:u,alerts:f}}}},"7b4b":function(e,t,n){"use strict";var s=n("f499"),o=n.n(s);t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,n){return e+=n>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(o()(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},b117:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col"},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.reflector_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-sub-component-table",{attrs:{items:e.reflector_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{quality_value:"QV",cost:"Cost"},name:"Quality",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_reflector}}),n("span",{staticClass:"mek-flex-col no-margin"},[n("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-component-stats",{attrs:{cols:3,rows:3}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Quality Value: "+e._s(e.selected_reflector.quality_value))]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),n("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Space: "+e._s(e.space_cost))]),n("div",{attrs:{slot:"col2-row3"},slot:"col2-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Cost: "+e._s(e.selected_reflector.cost))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Total Cost: "+e._s(e.cost))])]),n("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},o=[],i=(n("ac6a"),n("f499")),c=n.n(i),a=n("8fcf"),r=n("f52e"),l=n("7b4b"),u=n("d866"),f=n("706d"),p=Array.apply({},Array(10));p=p.map(function(e,t){var n=t+1,s=n*n;return{quality_value:n,cost:s}});var h=["quality_value","cost"],m=JSON.parse(c()(p[0])),d=Object(f["d"])(p,h),_=Object(f["c"])(p),v=Object(f["b"])(p,_),b=Object(f["a"])(d,_,v,m,"Mek_Reflector"),y={name:"mek_reflector",props:[],mixins:[a["a"],r["a"],l["a"],u["a"]],components:{"mek-space-efficiency":function(){return n.e("mek-space-efficiency").then(n.bind(null,"57c1"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"dba3"))},"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"c342"))},"mek-component-stats":function(){return n.e("mek_component-stats").then(n.bind(null,"67b1"))},"mek-sub-component-table":function(){return n.e("mek_sub-component-table").then(n.bind(null,"09c0"))}},data:function(){var e={pkey:"quality_value",uuid:null,component_name:null,component_category:"equipment",component_type:"reflector",original_component:null,component_changed:!0,selected_reflector:{quality_value:1,cost:1},efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.alerts=[],e.hasAlert=!1,e},methods:{select_reflector:function(e){this.$set(this,"selected_reflector",JSON.parse(c()(e))),this.component_changed=!0},output_reflector_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="reflector",t.component_name=null===this.component_name?this.reflector_name:this.component_name,t.efficiencies=JSON.parse(c()(this.efficiencies)),t.selected_reflector=JSON.parse(c()(this.selected_reflector)),t.damage_capacity=JSON.parse(c()(this.damage_capacity)),t.cost=this.cost,t.weight=this.weight,this.$nextTick(function(){e.component_changed=!1}),this.original_component=c()(t),t},ingest_data:function(e){var t=this,n="Reflector is not valid, resetting.";this.universal_ingest_data(e,n),this.component_name==this.reflector_name&&this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=t.hasAlert})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_reflector_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$store.commit("saveComponent",null);break}},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0}},computed:{raw_space:function(){return this.selected_reflector.cost},weight:function(){return this.round(this.selected_reflector.cost/2,2)},damage_capacity:function(){return this.selected_reflector.quality_value},cost:function(){return this.selected_reflector.cost+this.efficiencies.space.cost},reflector_name:function(){return"QV-"+this.selected_reflector.quality_value+" Reflector"},reflector_table:function(){return p},selected_keys:function(){var e=this,t=b(this.pkey,this.selected_reflector);return t.alerts.length>0&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.hasAlert=!0,this.select_armor_type(t.data)),t.key_list}}},g=y,k=(n("bb35"),n("2877")),w=Object(k["a"])(g,s,o,!1,null,"9fa7eaba",null);t["default"]=w.exports},b38a:function(e,t,n){},bb35:function(e,t,n){"use strict";var s=n("b38a"),o=n.n(s);o.a},d866:function(e,t,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},f52e:function(e,t,n){"use strict";var s=n("a745"),o=n.n(s),i=n("7618"),c=n("a4bb"),a=n.n(c),r=(n("6762"),n("2fdb"),n("f499")),l=n.n(r);t["a"]={methods:{universal_ingest_data:function(e,t){for(var n in this.original_component=l()(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),e)if(!a()(this._computedWatchers).includes(n))if("object"!==Object(i["a"])(e[n])||o()(e[n]))o()(e[n]),this.$set(this,n,e[n]);else for(var s in"object"===Object(i["a"])(this[n])&&null!==this[n]||(this[n]={}),e[n])this.$set(this[n],[s],e[n][s]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_reflector-main-legacy.c84c9465.js.map