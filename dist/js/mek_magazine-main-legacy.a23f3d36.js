(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_magazine-main"],{"0a90":function(t,e,n){var s=n("63b6"),i=n("10ff");s(s.G+s.F*(parseFloat!=i),{parseFloat:i})},"10ff":function(t,e,n){var s=n("e53d").parseFloat,i=n("a1ce").trim;t.exports=1/s(n("e692")+"-0")!==-1/0?function(t){var e=i(String(t),3),n=s(e);return 0===n&&"-"==e.charAt(0)?-0:n}:s},"2f6a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[n("mek-component-name",{attrs:{"new-component":t.newComponent,"component-name":t.component_name||t.magazine_name,"component-changed":t.component_changed},on:{"update-component-name":t.updateComponentName}}),n("mek-magazine-select-gun",{attrs:{"selected-gun":t.selected_gun},on:{"update-gun":t.updateGun,"alert-generated":t.handleAlert}}),n("span",{staticClass:"mek-flex-row"},[n("mek-magazine-ammo-list",{attrs:{"ammo-array":t.feature_array,"has-blast":t.hasBlast},on:{"update-ammo":t.updateAmmo,"alert-generated":t.handleAlert}}),n("span",{staticClass:"mek-flex-col no-margin"},[n("mek-magazine-shots",{staticStyle:{"align-self":"baseline"},attrs:{shots:t.selected_shots},on:{"update-shots":t.updateShots}}),n("mek-component-stats",{attrs:{cols:3,rows:3}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Shots: "+t._s(t.selected_shots))]),n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[t._v("Ammo Type(s):"),n("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[t._v(t._s(t.ammo_list))])]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[t._v("Space: "+t._s(t.space_cost))]),n("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[t._v("Weight: "+t._s(t.round(t.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[t._v("Base Cost: "+t._s(t.cost))]),n("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[t._v("Multiplier: x"+t._s(t.cost_multiplier))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row3"},slot:"col3-row3"},[t._v("Total Cost: "+t._s(t.cost))])]),n("mek-save-reset-component",{staticStyle:{"align-self":"baseline"},on:{"save-reset-component":t.componentSaveReset}})],1)],1)],1)},i=[],o=(n("a481"),n("7f7f"),n("f499")),a=n.n(o),r=n("8fcf"),c=n("7b4b"),u=n("f52e"),l={name:"mek_magazine",props:[],mixins:[r["a"],c["a"],u["a"]],components:{"mek-magazine-select-gun":function(){return n.e("mek-magazine-select-gun").then(n.bind(null,"cfeb"))},"mek-magazine-ammo-list":function(){return n.e("mek-magazine-ammo-list").then(n.bind(null,"6724"))},"mek-magazine-shots":function(){return n.e("mek-magazine-shots").then(n.bind(null,"8b6a"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"dba3"))},"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"c342"))},"mek-component-stats":function(){return n.e("mek-component-stats").then(n.bind(null,"67b1"))}},data:function(){var t={uuid:null,component_name:null,component_category:"equipment",component_type:"magazine",original_component:null,component_changed:!0,selected_gun:{name:"",cost:1,uuid:null},feature_array:[{type:"High-Ex",cost:1,effect:"Standard"}],cost_multipliers:{}};return t.cost_multipliers["High-Ex"]=1,t.efficiencies={},t.efficiencies.space={},t.efficiencies.space.modifier=0,t.selected_shots=1,t.hasAlert=!1,t},methods:{updateComponentName:function(t){this.component_name=t,this.component_changed=!0},updateGun:function(t,e){this.$set(this,"selected_gun",t),this.magazine_name,this.component_changed=!0,this.gun_name_change=e},updateAmmo:function(t){this.$set(this,"feature_array",t);var e=t.reduce(function(t,e){return t[e.type]=e.cost,t},{});this.$set(this,"cost_multipliers",e),this.component_changed=!0},updateShots:function(t){this.selected_shots=+t,this.component_changed=!0},componentSaveReset:function(t){var e="reset"==t&&null==this.original_component?"clear":t;switch(e){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":null!==this.original_component&&this.ingest_data(JSON.parse(this.original_component));break;case"clear":this.uuid=null,this.component_name=null,this.$set(this,"selected_gun",{name:"",cost:1,uuid:null}),this.$set(this,"feature_array",[{type:"High-Ex",cost:1}]),this.$set(this,"selected_shots",1),this.$store.commit("saveComponent",null);break}},output_data:function(){var t=this,e={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,e.uuid=this.uuid,e.component_category="equipment",e.component_type="magazine",e.component_name=null===this.component_name?this.magazine_name:this.component_name,e.selected_gun=JSON.parse(a()(this.selected_gun)),e.feature_array=JSON.parse(a()(this.feature_array)),e.selected_shots=JSON.parse(a()(this.selected_shots)),e.hasBlast=JSON.parse(a()(this.hasBlast)),e.cost=this.cost,e.base_cost=this.base_cost,e.cost_multiplier=this.cost_multiplier,e.weight=this.weight,e.damage_capacity=this.damage_capacity,this.$nextTick(function(){t.component_changed=!1}),this.original_component=a()(e),e},ingest_data:function(t){var e=this,n="Magazine is not valid, resetting.";this.universal_ingest_data(t,n),this.component_name==this.magazine_name&&this.$set(this,"component_name",null),this.$nextTick(function(){e.gun_name_change?e.component_changed=!0:e.component_changed=e.hasAlert})},handleAlert:function(t){this.hasAlert=t}},computed:{component_list:function(){return this.$store.getters.getComponentByType("equipment","projectile")},base_cost:function(){return this.round(.01*this.selected_gun.cost*this.selected_shots,2)},raw_space:function(){return this.base_cost},cost:function(){var t=this.base_cost*this.cost_multiplier;return this.round(t,2)},damage_capacity:function(){return this.space_cost},magazine_name:function(){this.selected_gun;var t=this.feature_array.reduce(function(t,e){return t+e.type+" "},"");t=t.trim();var e=""==this.selected_gun.name?"":this.selected_gun.name+" - ";return t=e+" "+t+" Ammo ("+this.selected_shots+")",t.replace(/\s+/," ")},hasBlast:function(){return this.feature_array.some(function(t){return/blast/gi.test(t.type)})},ammo_list:function(){return this.feature_array.reduce(function(t,e,n){return t+=n>0?", ":"",t+=e.type,t},"")}}},m=l,h=n("2877"),p=Object(h["a"])(m,s,i,!1,null,null,null);e["default"]=p.exports},"2fdb":function(t,e,n){"use strict";var s=n("5ca1"),i=n("d2c8"),o="includes";s(s.P+s.F*n("5147")(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,n){var s=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[s]=!1,!"/./"[t](e)}catch(i){}}return!0}},"59ad":function(t,e,n){t.exports=n("7be7")},6762:function(t,e,n){"use strict";var s=n("5ca1"),i=n("c366")(!0);s(s.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"7b4b":function(t,e,n){"use strict";var s=n("f499"),i=n.n(s);e["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var t=1;for(var e in this.cost_multipliers)t*=this.cost_multipliers[e];return this.round(t,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(t,e,n){return t+=n>0?", ":"",t+=e.feature,t},"")},newComponent:function(){var t=JSON.parse(i()(this.$store.getters.selectedComponent));return"undefined"===typeof t||null===t||(t.uuid!==this.uuid&&t.component_category==this.component_category&&t.component_type==this.component_type&&this.ingest_data(t),!1)}}}},"7be7":function(t,e,n){n("0a90"),t.exports=n("584a").parseFloat},"7f7f":function(t,e,n){var s=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in i||n("9e1e")&&s(i,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"8fcf":function(t,e,n){"use strict";var s=n("59ad"),i=n.n(s);n("ac6a"),n("34ef"),n("6b54"),n("a481");e["a"]={methods:{round:function(t,e){if("undefined"===typeof e||0==+e)return Math.round(+t);var n=Math.pow(10,+e);return Math.round(+t*n)/n},floor:function(t){return Math.floor(+t)},ceiling:function(t){return Math.ceiling(+t)},decimalPad:function(t){return+t%1===0?t.toPrecision(2):t},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})},invisible_pad:function(t){var e="";return t.forEach(function(t){t.length>e.length&&(e=t)},0),e+"XX"},isNumeric:function(t){return"undefined"!==typeof t&&!isNaN(i()(t))&&isFinite(t)}}}},a1ce:function(t,e,n){var s=n("63b6"),i=n("25eb"),o=n("294c"),a=n("e692"),r="["+a+"]",c="​",u=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),m=function(t,e,n){var i={},r=o(function(){return!!a[t]()||c[t]()!=c}),u=i[t]=r?e(h):a[t];n&&(i[n]=u),s(s.P+s.F*r,"String",i)},h=m.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=m},a21f:function(t,e,n){var s=n("584a"),i=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},aae3:function(t,e,n){var s=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},d2c8:function(t,e,n){var s=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(s(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},f499:function(t,e,n){t.exports=n("a21f")},f52e:function(t,e,n){"use strict";var s=n("a745"),i=n.n(s),o=n("7618"),a=n("a4bb"),r=n.n(a),c=(n("6762"),n("2fdb"),n("f499")),u=n.n(c);e["a"]={methods:{universal_ingest_data:function(t,e){for(var n in this.original_component=u()(t),null===t&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",e)),t)if(!r()(this._computedWatchers).includes(n))if("object"!==Object(o["a"])(t[n])||i()(t[n]))i()(t[n]),this.$set(this,n,t[n]);else for(var s in"object"===Object(o["a"])(this[n])&&null!==this[n]||(this[n]={}),t[n])this.$set(this[n],[s],t[n][s]);this.$forceUpdate()},updateComponentName:function(t){this.component_name=t,this.component_changed=!0},addAlert:function(t){this.alerts.push(t)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_magazine-main-legacy.a23f3d36.js.map