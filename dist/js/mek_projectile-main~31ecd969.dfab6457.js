(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_projectile-main~31ecd969"],{"072f":function(e,t,s){"use strict";t["a"]={methods:{selectedItem:function(e,t,s,a){let i="undefined"===typeof a?"":a;return"undefined"===typeof s?this[e]==t?"selected_item":i:this[e]==t?s:i},selectedItemMultiple:function(e,t,s,a){let i="undefined"===typeof a?"":a;return Array.isArray(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":i:this[e].includes(t)?s:i:""}}}},3846:function(e,t,s){s("9e1e")&&"g"!=/./g.flags&&s("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:s("0bfb")})},"6b54":function(e,t,s){"use strict";s("3846");var a=s("cb7c"),i=s("0bfb"),c=s("9e1e"),n="toString",o=/./[n],r=function(e){s("2aba")(RegExp.prototype,n,e,!0)};s("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?r(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!c&&e instanceof RegExp?i.call(e):void 0)}):o.name!=n&&r(function(){return o.call(this)})},7352:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.projectile_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-projectile-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage,"alert-generated":e.handleAlert}}),s("mek-projectile-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy,"alert-generated":e.handleAlert}}),s("mek-projectile-burst-value",{attrs:{"burst-value":e.selected_burst_value},on:{"update-burst-value":e.updateBurstValue,"alert-generated":e.handleAlert}}),s("div",{staticClass:"mek-inline-flex-row"},[s("div",{staticClass:"mek-inline-flex-col"},[s("mek-projectile-multi-feed",{attrs:{"multi-feed":e.selected_multi_feed},on:{"update-multi-feed":e.updateMultiFeed,"alert-generated":e.handleAlert}})],1),s("mek-projectile-range-mod",{staticStyle:{"align-self":"baseline"},attrs:{"range-mod":e.selected_range_mod,"base-range":e.selected_damage.range},on:{"update-range-mod":e.updateRangeMod,"alert-generated":e.handleAlert}}),s("mek-projectile-feature",{staticStyle:{"align-self":"baseline"},attrs:{"feature-array":e.feature_array,"burst-value":e.selected_burst_value.burst_value},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}}),s("mek-space-efficiency",{staticStyle:{"align-self":"baseline"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-Projectile"},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:5}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.selected_damage.damage)+" K")]),s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Final Range: "+e._s(e.selected_damage.range*e.selected_range_mod.range_mod))]),s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),s("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),s("div",{attrs:{slot:"col3-row4"},slot:"col3-row4"},[e._v(" ")]),s("div",{attrs:{slot:"col3-row5"},slot:"col3-row5"},[e._v("Standard Ammo Cost: "+e._s(e.round(.01*e.cost,2))+"/shot")]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),s("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{attrs:{"active-buttons":e.activeButtons},on:{"save-reset-component":e.componentSaveReset}})],1)],1)},i=[],c=(s("a481"),s("072f")),n=s("8fcf"),o=s("7b4b"),r=s("f52e"),l={name:"mek_projectile",props:[],mixins:[c["a"],n["a"],o["a"],r["a"]],components:{"mek-projectile-damage":()=>s.e("mek_projectile-damage~a97bfcba").then(s.bind(null,"16ce")),"mek-projectile-accuracy":()=>s.e("mek_projectile-accuracy~a97bfcba").then(s.bind(null,"d666")),"mek-projectile-multi-feed":()=>s.e("mek_projectile-multi-feed~a97bfcba").then(s.bind(null,"454e")),"mek-projectile-range-mod":()=>s.e("mek_projectile-range-mod~a97bfcba").then(s.bind(null,"42bc")),"mek-projectile-burst-value":()=>s.e("mek_projectile-burst-value~a97bfcba").then(s.bind(null,"a75c")),"mek-projectile-feature":()=>Promise.all([s.e("mek_projectile-feature-data-module~5af327fd"),s.e("mek_projectile-feature~a97bfcba")]).then(s.bind(null,"5cc0")),"mek-space-efficiency":()=>s.e("mek-space-efficiency~a97bfcba").then(s.bind(null,"57c1")),"mek-component-name":()=>s.e("mek-component-name~31ecd969").then(s.bind(null,"4a3f")),"mek-save-reset-component":()=>s.e("mek-save-reset-component~31ecd969").then(s.bind(null,"972e")),"mek-component-stats":()=>s.e("mek_component-stats~d62c8532").then(s.bind(null,"67b1"))},data:function(){let e={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"projectile",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:1,range:3},selected_accuracy:{accuracy:0,cost:1},selected_range_mod:{range_mod:1,cost:1,range:3},selected_multi_feed:{feeds:1,cost:1},selected_burst_value:{burst_value:1,cost:1},damage_capacity:1,feature_array:[],efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.selected_accuracy=1,e.cost_multipliers.feature_array=1,e.cost_multipliers.selected_multi_feed=1,e.cost_multipliers.selected_burst_value=1,e.cost_multipliers.selected_range_mod=1,e.hasAlert=!1,e},methods:{updateComponentName(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},updateEfficiencies(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=e.damage},updateAccuracy(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.selected_accuracy=e.cost,this.component_changed=!0},updateMultiFeed(e){this.$set(this,"selected_multi_feed",e),this.cost_multipliers.selected_multi_feed=e.cost,this.component_changed=!0},updateBurstValue(e){this.$set(this,"selected_burst_value",e),this.cost_multipliers.selected_burst_value=e.cost,this.component_changed=!0},updateRangeMod(e){this.$set(this,"selected_range_mod",e),this.cost_multipliers.selected_range_mod=e.cost,this.component_changed=!0},updateFeature(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature_array=this.feature_array.reduce((e,t)=>{return e*t.cost},1),this.projectile_name},componentSaveReset:function(e){let t="reset"==e&&null==this.original_component?"new":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"delete":this.uuid&&(this.$store.commit("deleteComponent",{category:this.component_category,type:this.component_type,uuid:this.uuid}),this.uuid=null,this.$emit("updateMSMKey"));case"new":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"selected_damage",{damage:1,cost:1,range:3}),this.$set(this,"selected_accuracy",{accuracy:0,cost:1}),this.$set(this,"selected_range_mod",{range_mod:1,cost:1,range:3}),this.$set(this,"selected_multi_feed",{feeds:1,cost:1}),this.$set(this,"selected_burst_value",{burst_value:1,cost:1}),this.$set(this,"feature_array",[]),this.cost_multipliers.selected_accuracy=1,this.cost_multipliers.feature_array=1,this.cost_multipliers.selected_multi_feed=1,this.cost_multipliers.selected_burst_value=1,this.cost_multipliers.selected_range_mod=1,this.$store.commit("saveComponent",null);break}},output_data(){let e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="projectile",e.component_name=null===this.component_name?this.projectile_name:this.component_name,e.custom_component_name=this.custom_component_name,e.cost_multipliers=this.cost_multipliers,e.efficiencies=this.efficiencies,e.selected_damage=this.selected_damage,e.selected_accuracy=this.selected_accuracy,e.feature_array=this.feature_array,e.selected_range_mod=this.selected_range_mod,e.selected_multi_feed=this.selected_multi_feed,e.selected_burst_value=this.selected_burst_value,e.cost=this.cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.final_damage=this.final_damage,e.damage_capacity=this.damage_capacity,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(e),JSON.parse(this.original_component)},ingest_data(e){let t="Projectile is not valid, resetting.";this.universal_ingest_data(e,t),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.component_changed=this.hasAlert})},handleAlert(e){this.hasAlert=e}},computed:{raw_space(){return this.round(this.selected_damage.cost*this.cost_multiplier,2)},cost:function(){let e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e,2)},projectile_name(){let e=this.selected_burst_value.burst_value>1?"Burst-"+this.selected_burst_value.burst_value+" ":"";return e=this.feature_array.reduce((e,t)=>{return e+t.feature+" "},e),e+=this.selected_damage.damage+"K Gun",e.replace(/\s+/g," ")},activeButtons(){return"save,reset,new"+(null!==this.uuid?",delete":"")}}},u=l,d=s("2877"),m=Object(d["a"])(u,a,i,!1,null,null,null);t["default"]=m.exports},"7b4b":function(e,t,s){"use strict";t["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let e=1;for(let t in this.cost_multipliers)if("object"===typeof this.cost_multipliers[t])for(let s in this.cost_multipliers[t])e*=this.cost_multipliers[t][s];else e*=this.cost_multipliers[t];return this.round(e,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,s){return e+=s>0?", ":"",e+=t.feature,e},"")},newComponent(){let e=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"8fcf":function(e,t,s){"use strict";s("ac6a"),s("6b54"),s("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);let s=10**+t;return Math.round(+e*s)/s},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))},invisible_pad:function(e){let t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},f52e:function(e,t,s){"use strict";s("ac6a");t["a"]={methods:{universal_ingest_data(e,t){this.original_component=JSON.stringify(e);let s=JSON.parse(this.original_component);null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t));for(let a in s)if(!Object.keys(this._computedWatchers).includes(a))if("object"!==typeof s[a]||Array.isArray(s[a]))Array.isArray(s[a]),this.$set(this,a,s[a]);else{"object"===typeof this[a]&&null!==this[a]||this.$set(this,a,{});for(let e in s[a])this.$set(this[a],[e],s[a][e])}this.$forceUpdate()},updateComponentName(e){this.component_name=e,this.component_changed=!0},addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);