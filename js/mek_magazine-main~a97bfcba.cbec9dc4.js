(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_magazine-main~a97bfcba"],{"2f6a":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":t.newComponent,"component-name":t.component_name||t.magazine_name,"component-changed":t.component_changed},on:{"update-component-name":t.updateComponentName}}),s("mek-magazine-select-gun",{attrs:{"selected-gun":t.selected_gun},on:{"update-gun":t.updateGun,"alert-generated":t.handleAlert}}),s("span",{staticClass:"mek-flex-row"},[s("mek-magazine-ammo-list",{attrs:{"ammo-array":t.feature_array,"has-blast":t.hasBlast},on:{"update-ammo":t.updateAmmo,"alert-generated":t.handleAlert}}),s("span",{staticClass:"mek-flex-col no-margin"},[s("mek-magazine-shots",{staticStyle:{"align-self":"baseline"},attrs:{shots:t.selected_shots},on:{"update-shots":t.updateShots}}),s("mek-component-stats",{attrs:{cols:3,rows:3}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Shots: "+t._s(t.selected_shots))]),s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Ammo Type(s):"),s("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[t._v(t._s(t.ammo_list))])]),s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[t._v("Space: "+t._s(t.space_cost))]),s("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[t._v("Weight: "+t._s(t.round(t.weight,2))+" tons")]),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[t._v("Base Cost: "+t._s(t.cost))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[t._v("Multiplier: x"+t._s(t.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row3"},slot:"col3-row3"},[t._v("Total Cost: "+t._s(t.cost))])]),s("mek-save-reset-component",{staticStyle:{"align-self":"baseline"},attrs:{"active-buttons":t.activeButtons},on:{"save-reset-component":t.componentSaveReset}})],1)],1)],1)},i=[],o=(s("a481"),s("8fcf")),a=s("7b4b"),r=s("f52e"),c={name:"mek_magazine",props:[],mixins:[o["a"],a["a"],r["a"]],components:{"mek-magazine-select-gun":()=>s.e("mek_magazine-select-gun~b9481fce").then(s.bind(null,"cfeb")),"mek-magazine-ammo-list":()=>Promise.all([s.e("mek_ammo-list-data-module~5af327fd"),s.e("mek_magazine-ammo-list~a97bfcba")]).then(s.bind(null,"6724")),"mek-magazine-shots":()=>s.e("mek_magazine-shots~e827e6eb").then(s.bind(null,"8b6a")),"mek-component-name":()=>s.e("mek-component-name~31ecd969").then(s.bind(null,"4a3f")),"mek-save-reset-component":()=>s.e("mek-save-reset-component~31ecd969").then(s.bind(null,"972e")),"mek-component-stats":()=>s.e("mek_component-stats~d62c8532").then(s.bind(null,"67b1"))},data:function(){let t={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"magazine",original_component:null,component_changed:!0,selected_gun:{name:"",cost:1,uuid:null},feature_array:[{type:"High-Ex",cost:1,effect:"Standard"}],cost_multipliers:{}};return t.cost_multipliers.feature_array=1,t.efficiencies={},t.efficiencies.space={},t.efficiencies.space.modifier=0,t.selected_shots=1,t.hasAlert=!1,t},methods:{updateComponentName(t){this.component_name=t,this.custom_component_name=!0,this.component_changed=!0},updateGun(t,e){this.$set(this,"selected_gun",t),this.magazine_name,this.component_changed=!0,this.gun_name_change=e},updateAmmo(t){this.$set(this,"feature_array",t);let e=t.reduce((t,e)=>{return t*e.cost},1);this.cost_multipliers.feature_array=e,this.component_changed=!0},updateShots(t){this.selected_shots=+t,this.component_changed=!0},componentSaveReset:function(t){let e="reset"==t&&null==this.original_component?"new":t;switch(e){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"delete":this.uuid&&(this.$store.commit("deleteComponent",{category:this.component_category,type:this.component_type,uuid:this.uuid}),this.uuid=null,this.$emit("updateMSMKey"));case"new":this.uuid=null,this.component_name=null,this.$set(this,"selected_gun",{name:"",cost:1,uuid:null}),this.$set(this,"feature_array",[{type:"High-Ex",cost:1,effect:"Standard"}]),this.$set(this,"selected_shots",1),this.cost_multipliers.feature_array=1,this.$store.commit("saveComponent",null);break}},output_data(){let t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="magazine",t.component_name=null===this.component_name?this.magazine_name:this.component_name,t.custom_component_name=this.custom_component_name,t.selected_gun=this.selected_gun,t.feature_array=this.feature_array,t.selected_shots=this.selected_shots,t.cost_multipliers=this.cost_multipliers,t.hasBlast=this.hasBlast,t.cost=this.cost,t.base_cost=this.base_cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.damage_capacity=this.damage_capacity,this.$nextTick(()=>{this.component_changed=!1}),this.original_component=JSON.stringify(t),JSON.parse(this.original_component)},ingest_data(t){let e="Magazine is not valid, resetting.";this.universal_ingest_data(t,e),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(()=>{this.gun_name_change?this.component_changed=!0:this.component_changed=this.hasAlert})},handleAlert(t){this.hasAlert=t}},computed:{component_list(){return this.$store.getters.getComponentByType("equipment","projectile")},base_cost(){return this.round(.01*this.selected_gun.cost*this.selected_shots,2)},raw_space(){return this.base_cost},cost:function(){let t=this.base_cost*this.cost_multiplier;return this.round(t,2)},damage_capacity(){return this.space_cost},magazine_name(){this.selected_gun;let t=this.feature_array.reduce((t,e)=>{return t+e.type+" "},"");t=t.trim();let e=""==this.selected_gun.name?"":this.selected_gun.name+" - ";return t=e+" "+t+" Ammo ("+this.selected_shots+")",t.replace(/\s+/," ")},hasBlast(){return this.feature_array.some(t=>{return/blast/gi.test(t.type)})},ammo_list(){return this.feature_array.reduce(function(t,e,s){return t+=s>0?", ":"",t+=e.type,t},"")},activeButtons(){return"save,reset,new"+(null!==this.uuid?",delete":"")}}},l=c,m=s("2877"),u=Object(m["a"])(l,n,i,!1,null,null,null);e["default"]=u.exports},"7b4b":function(t,e,s){"use strict";e["a"]={computed:{space_cost(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier(){let t=1;for(let e in this.cost_multipliers)if("object"===typeof this.cost_multipliers[e])for(let s in this.cost_multipliers[e])t*=this.cost_multipliers[e][s];else t*=this.cost_multipliers[e];return this.round(t,2)},weight(){return this.round(this.damage_capacity/2,2)},feature_list(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(t,e,s){return t+=s>0?", ":"",t+=e.feature,t},"")},newComponent(){let t=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));return"undefined"===typeof t||null===t||(t.uuid!==this.uuid&&t.component_category==this.component_category&&t.component_type==this.component_type&&this.ingest_data(t),!1)}}}},"8fcf":function(t,e,s){"use strict";s("ac6a"),s("6b54"),s("a481");e["a"]={methods:{round:function(t,e){if("undefined"===typeof e||0==+e)return Math.round(+t);let s=10**+e;return Math.round(+t*s)/s},floor:function(t){return Math.floor(+t)},ceiling:function(t){return Math.ceiling(+t)},decimalPad(t){return+t%1===0?t.toPrecision(2):t},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16))},create_short_uuid:function(){return([1e7]+-1e3).replace(/[018]/g,t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16))},invisible_pad:function(t){let e="";return t.forEach(function(t){t.length>e.length&&(e=t)},0),e+"XX"},isNumeric:function(t){return"undefined"!==typeof t&&!isNaN(parseFloat(t))&&isFinite(t)}}}},f52e:function(t,e,s){"use strict";s("ac6a");e["a"]={methods:{universal_ingest_data(t,e){this.original_component=JSON.stringify(t);let s=JSON.parse(this.original_component);null===t&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",e));for(let n in s)if(!Object.keys(this._computedWatchers).includes(n))if("object"!==typeof s[n]||Array.isArray(s[n]))Array.isArray(s[n]),this.$set(this,n,s[n]);else{"object"===typeof this[n]&&null!==this[n]||this.$set(this,n,{});for(let t in s[n])this.$set(this[n],[t],s[n][t])}this.$forceUpdate()},updateComponentName(t){this.component_name=t,this.component_changed=!0},addAlert(t){this.alerts.push(t)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);