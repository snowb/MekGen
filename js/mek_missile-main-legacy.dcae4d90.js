(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-main"],{"072f":function(e,t,s){"use strict";s("6762"),s("2fdb");var i=s("a745"),a=s.n(i);s("cadf"),s("551c"),s("f751"),s("097d");t["a"]={methods:{selectedItem:function(e,t,s,i){var a="undefined"===typeof i?"":i;return"undefined"===typeof s?this[e]==t?"selected_item":a:this[e]==t?s:a},selectedItemMultiple:function(e,t,s,i){var n="undefined"===typeof i?"":i;return a()(this[e])?"undefined"===typeof s?this[e].includes(t)?"selected_item":n:this[e].includes(t)?s:n:""}}}},"0a90":function(e,t,s){var i=s("63b6"),a=s("10ff");i(i.G+i.F*(parseFloat!=a),{parseFloat:a})},"10ff":function(e,t,s){var i=s("e53d").parseFloat,a=s("a1ce").trim;e.exports=1/i(s("e692")+"-0")!==-1/0?function(e){var t=a(String(e),3),s=i(t);return 0===s&&"-"==t.charAt(0)?-0:s}:i},"2fdb":function(e,t,s){"use strict";var i=s("5ca1"),a=s("d2c8"),n="includes";i(i.P+i.F*s("5147")(n),"String",{includes:function(e){return!!~a(this,e,n).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,s){var i=s("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[i]=!1,!"/./"[e](t)}catch(a){}}return!0}},"59ad":function(e,t,s){e.exports=s("7be7")},6762:function(e,t,s){"use strict";var i=s("5ca1"),a=s("c366")(!0);i(i.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"7b4b":function(e,t,s){"use strict";var i=s("f499"),a=s.n(i),n=s("7618");s("cadf"),s("551c"),s("f751"),s("097d");t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)if("object"===Object(n["a"])(this.cost_multipliers[t]))for(var s in this.cost_multipliers[t])e*=this.cost_multipliers[t][s];else e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,s){return e+=s>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(a()(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"7be7":function(e,t,s){s("0a90"),e.exports=s("584a").parseFloat},"8fcf":function(e,t,s){"use strict";var i=s("59ad"),a=s.n(i);s("ac6a"),s("34ef"),s("6b54"),s("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);var s=Math.pow(10,+t);return Math.round(+e*s)/s},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad:function(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},invisible_pad:function(e){var t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(a()(e))&&isFinite(e)}}}},a1ce:function(e,t,s){var i=s("63b6"),a=s("25eb"),n=s("294c"),c=s("e692"),r="["+c+"]",o="​",l=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),d=function(e,t,s){var a={},r=n(function(){return!!c[e]()||o[e]()!=o}),l=a[e]=r?t(m):c[e];s&&(a[s]=l),i(i.P+i.F*r,"String",a)},m=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},a21f:function(e,t,s){var i=s("584a"),a=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},aae3:function(e,t,s){var i=s("d3f4"),a=s("2d95"),n=s("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},ac6a:function(e,t,s){for(var i=s("cadf"),a=s("0d58"),n=s("2aba"),c=s("7726"),r=s("32e9"),o=s("84f2"),l=s("2b4c"),u=l("iterator"),d=l("toStringTag"),m=o.Array,_={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(_),p=0;p<h.length;p++){var f,g=h[p],k=_[g],y=c[g],b=y&&y.prototype;if(b&&(b[u]||r(b,u,m),b[d]||r(b,d,g),o[g]=m,k))for(f in i)b[f]||n(b,f,i[f],!0)}},b954:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"mek-inline-flex-col",staticStyle:{width:"100%"}},[s("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.missile_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-missile-damage",{attrs:{damage:e.selected_damage},on:{"update-damage":e.updateDamage,"alert-generated":e.handleAlert}}),s("mek-missile-pack-size",{staticStyle:{"align-self":"flex-end"},attrs:{pack:e.selected_pack_size},on:{"update-pack-size":e.updatePackSize,"alert-generated":e.handleAlert}}),e.is_mine?e._e():s("mek-missile-accuracy",{attrs:{accuracy:e.selected_accuracy},on:{"update-accuracy":e.updateAccuracy,"alert-generated":e.handleAlert}}),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-missile-range-mod",{staticStyle:{"align-self":"baseline"},attrs:{"range-mod":e.selected_range_mod,"anti-missile":e.has_feature("countermissile"),"base-range":e.selected_damage.range},on:{"update-range-mod":e.updateRangeMod,"alert-generated":e.handleAlert}}),s("div",{staticClass:"mek-inline-flex-col"},[e.is_mine||e.is_bomb?e._e():s("mek-missile-smart",{attrs:{smart:e.selected_smart},on:{"update-smart":e.updateSmart,"alert-generated":e.handleAlert}}),e.selected_smart.smart>0&&!e.is_mine&&!e.is_bomb?s("mek-missile-skill",{attrs:{skill:e.selected_skill},on:{"update-skill":e.updateSkill,"alert-generated":e.handleAlert}}):e._e(),s("mek-space-efficiency",{staticStyle:{"align-self":"baseline"},attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-Missile"},on:{"update-efficiencies":e.updateEfficiencies}})],1),s("mek-missile-blast-radius",{attrs:{blast_radius:e.selected_blast_radius},on:{"update-blast-radius":e.updateBlastRadius,"alert-generated":e.handleAlert}}),s("mek-missile-feature",{staticStyle:{"align-self":"baseline"},attrs:{"feature-array":e.feature_array,"smart-missile":e.selected_smart.smart>0,"blast-radius":e.selected_blast_radius.blast_radius},on:{"update-feature":e.updateFeature,"alert-generated":e.handleAlert}})],1)],1),s("div",{staticClass:"mek-inline-flex-row"},[s("mek-component-stats",{attrs:{cols:4,rows:5}},[s("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Kills: "+e._s(e.selected_damage.damage)+" K")]),s("div",{attrs:{slot:"col1-row2"},slot:"col1-row2"},[e._v("Damage Capacity: "+e._s(e.damage_capacity)+" K")]),s("div",{attrs:{slot:"col1-row3"},slot:"col1-row3"},[e._v("Final Range: "+e._s(e.selected_damage.range*e.selected_range_mod.range_mod))]),e.has_duration?s("div",{attrs:{slot:"col1-row4"},slot:"col1-row4"},[e._v("Duration: "+e._s(e.smoke_scatter_duration)+" rounds")]):e._e(),s("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Feature(s):"),s("div",{staticStyle:{"max-width":"150px","margin-left":"10px"}},[e._v(e._s(e.feature_list))])]),s("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),s("div",{attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Space: "+e._s(e.space_cost))]),s("div",{attrs:{slot:"col3-row3"},slot:"col3-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),s("div",{attrs:{slot:"col4-row1"},slot:"col4-row1"},[e._v("Base Cost: "+e._s(e.selected_damage.cost))]),s("div",{attrs:{slot:"col4-row2"},slot:"col4-row2"},[e._v("Multiplier: x"+e._s(e.cost_multiplier))]),s("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col4-row3"},slot:"col4-row3"},[e._v("Total Cost: "+e._s(e.cost))])]),s("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},a=[],n=s("f499"),c=s.n(n),r=s("072f"),o=s("8fcf"),l=s("7b4b"),u=s("f52e"),d={name:"mek_missile",props:[],mixins:[r["a"],o["a"],l["a"],u["a"]],components:{"mek-missile-damage":function(){return s.e("mek_missile-damage").then(s.bind(null,"d899"))},"mek-missile-pack-size":function(){return s.e("mek_missile-pack-size").then(s.bind(null,"5886"))},"mek-missile-accuracy":function(){return s.e("mek_missile-accuracy").then(s.bind(null,"6d75"))},"mek-missile-range-mod":function(){return s.e("mek_missile-range-mod").then(s.bind(null,"492e"))},"mek-missile-smart":function(){return s.e("mek_missile-smart").then(s.bind(null,"fa2a"))},"mek-missile-skill":function(){return s.e("mek_missile-skill").then(s.bind(null,"7473"))},"mek-missile-blast-radius":function(){return s.e("mek_missile-blast-radius").then(s.bind(null,"6ed7"))},"mek-missile-feature":function(){return s.e("mek_missile-feature").then(s.bind(null,"deb2"))},"mek-space-efficiency":function(){return s.e("mek-space-efficiency").then(s.bind(null,"57c1"))},"mek-component-name":function(){return s.e("mek-component-name").then(s.bind(null,"dba3"))},"mek-save-reset-component":function(){return s.e("mek-save-reset-component").then(s.bind(null,"c342"))},"mek-component-stats":function(){return s.e("mek_component-stats").then(s.bind(null,"67b1"))}},data:function(){var e={uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"missile",original_component:null,component_changed:!0,selected_damage:{damage:1,cost:.1,range:4},selected_pack_size:1,selected_accuracy:{accuracy:0,cost:1},selected_range_mod:{range_mod:1,cost:1,id:6},selected_smart:{smart:"__NIL__",cost:1},selected_skill:{skill:6,cost:1},selected_blast_radius:{blast_radius:"__NIL__",cost:1},smoke_scatter_duration:null};return e.damage_capacity=this.round(1/15,2),e.feature_array=[],e.efficiencies={},e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.cost_multipliers={},e.cost_multipliers.selected_accuracy=1,e.cost_multipliers.feature_array=1,e.cost_multipliers.selected_smart=1,e.cost_multipliers.selected_skill=1,e.cost_multipliers.selected_range_mod=1,e.cost_multipliers.selected_blast_radius=1,e.hasAlert=!1,e},methods:{updateComponentName:function(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0},updateDamage:function(e){this.$set(this,"selected_damage",e),this.component_changed=!0,this.damage_capacity=this.round(this.selected_pack_size*e.damage/15,2),this.has_duration&&this.$set(this,"smoke_scatter_duration",this.round(this.selected_damage.damage/2,0))},updatePackSize:function(e){var t=e>0?e:1;this.$set(this,"selected_pack_size",t),this.component_changed=!0,this.damage_capacity=this.round(this.selected_damage.damage*e/15,1)},updateAccuracy:function(e){this.$set(this,"selected_accuracy",e),this.cost_multipliers.selected_accuracy=e.cost,this.component_changed=!0},updateRangeMod:function(e){this.$set(this,"selected_range_mod",e),this.cost_multipliers.selected_range_mod=e.cost,this.selected_range_mod.type="undefined"!==typeof e.type?e.type:null,(this.is_mine||this.is_bomb)&&(this.updateSmart({smart:"__NIL__",cost:1}),this.updateSkill({skill:6,cost:1})),this.is_mine&&this.updateAccuracy({accuracy:0,cost:1}),this.component_changed=!0},updateSmart:function(e){this.$set(this,"selected_smart",e),this.cost_multipliers.selected_smart=e.cost,this.component_changed=!0},updateSkill:function(e){this.$set(this,"selected_skill",e),this.cost_multipliers.selected_skill=e.cost,this.component_changed=!0},updateBlastRadius:function(e){this.$set(this,"selected_blast_radius",e),this.cost_multipliers.selected_blast_radius=e.cost,this.component_changed=!0},updateFeature:function(e){this.$set(this,"feature_array",e),this.cost_multipliers.feature_array=this.feature_array.reduce(function(e,t){return e*t.cost},1),this.missile_name,this.has_duration&&this.$set(this,"smoke_scatter_duration",this.round(this.selected_damage.damage/2,0))},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.smoke_scatter_duration=null,this.selected_pack_size=1,this.$set(this,"feature_array",[]),this.$set(this,"selected_damage",{damage:1,cost:.1,range:4}),this.$set(this,"selected_damage",{damage:1,cost:.1,range:4}),this.$set(this,"selected_accuracy",{accuracy:0,cost:1}),this.$set(this,"selected_range_mod",{range_mod:1,cost:1,id:6}),this.$set(this,"selected_smart",{smart:"__NIL__",cost:1}),this.$set(this,"selected_skill",{skill:6,cost:1}),this.$set(this,"selected_blast_radius",{blast_radius:"__NIL__",cost:1}),this.cost_multipliers.selected_accuracy=1,this.cost_multipliers.feature_array=1,this.cost_multipliers.selected_smart=1,this.cost_multipliers.selected_skill=1,this.cost_multipliers.selected_range_mod=1,this.cost_multipliers.selected_blast_radius=1,this.$store.commit("saveComponent",null);break}},output_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="missile",t.component_name=null===this.component_name?this.missile_name:this.component_name,t.custom_component_name=this.custom_component_name,t.cost_multipliers=this.cost_multipliers,t.efficiencies=this.efficiencies,t.selected_damage=this.selected_damage,t.selected_pack_size=this.selected_pack_size,t.selected_accuracy=this.selected_accuracy,t.selected_range_mod=this.selected_range_mod,t.selected_smart=this.selected_smart,t.selected_skill=this.selected_skill,t.selected_blast_radius=this.selected_blast_radius,t.cost=this.total_cost,t.cost_multiplier=this.cost_multiplier,t.weight=this.weight,t.final_damage=this.final_damage,t.damage_capacity=this.damage_capacity,this.$nextTick(function(){e.component_changed=!1}),this.original_component=c()(t),JSON.parse(this.original_component)},ingest_data:function(e){var t=this,s="Missile is not valid, resetting.";this.universal_ingest_data(e,s),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=t.hasAlert})},has_feature:function(e){return this.feature_array.some(function(t){return t.feature.toLowerCase()==e.toLowerCase()})},handleAlert:function(e){this.hasAlert=e}},computed:{raw_space:function(){var e=this.has_feature("nuclear")?this.cost_multiplier/1e3:this.cost_multiplier;return this.round(this.selected_damage.cost*e*this.selected_pack_size,2)},cost:function(){var e=this.selected_damage.cost*this.cost_multiplier;return e+=this.efficiencies.space.cost,this.round(e*this.selected_pack_size,2)},missile_name:function(){var e=this.has_feature("nuclear")?"Nuclear ":"";e+="__NIL__"!=this.selected_smart.smart?"Smart-"+this.selected_skill.skill+" ":"",e=this.feature_array.reduce(function(e,t){return"nuclear"==t.feature.toLowerCase()?e:e+t.feature+" "},e);var t=this.is_mine?" Mine":this.is_bomb?" Bomb":" Missile";return e+=this.selected_damage.damage+"K",e=e+t+" Pack",e+" ("+this.selected_pack_size+")"},is_bomb:function(){return"undefined"!==typeof this.selected_range_mod.type&&null!==this.selected_range_mod.type&&"bomb"==this.selected_range_mod.type.toLowerCase()},is_mine:function(){return"undefined"!==typeof this.selected_range_mod.type&&null!==this.selected_range_mod.type&&"mine"==this.selected_range_mod.type.toLowerCase()},has_duration:function(){var e=this.has_feature("smoke")||this.has_feature("scatter")||this.has_feature("smoke-scatter");return e}}},m=d,_=s("2877"),h=Object(_["a"])(m,i,a,!1,null,null,null);t["default"]=h.exports},d2c8:function(e,t,s){var i=s("aae3"),a=s("be13");e.exports=function(e,t,s){if(i(t))throw TypeError("String#"+s+" doesn't accept regex!");return String(a(e))}},e692:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},f499:function(e,t,s){e.exports=s("a21f")},f52e:function(e,t,s){"use strict";var i=s("a745"),a=s.n(i),n=s("7618"),c=s("a4bb"),r=s.n(c),o=(s("6762"),s("2fdb"),s("f499")),l=s.n(o);t["a"]={methods:{universal_ingest_data:function(e,t){for(var s in this.original_component=l()(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),e)if(!r()(this._computedWatchers).includes(s))if("object"!==Object(n["a"])(e[s])||a()(e[s]))a()(e[s]),this.$set(this,s,e[s]);else for(var i in"object"===Object(n["a"])(this[s])&&null!==this[s]||(this[s]={}),e[s])this.$set(this[s],[i],e[s][i]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_missile-main-legacy.dcae4d90.js.map