(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_export-component"],{"24b8":function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a("cebc"),s=(a("ac6a"),a("ffc1"),{}),r=function(e){return Object.entries(e).reduce(function(e,t){var a={long_name:t[0]};return void 0!==t[1].pkey&&(a.pkey=t[1].pkey),void 0!==t[1].short_pkey&&(a.short_pkey=t[1].short_pkey),e[t[1].short_name]=a,e},{})},o=function(e){return Object(n["a"])({},e,r(e))};s.universal_map={uuid:{short_name:"uuid"},component_name:{short_name:"cn"},custom_component_name:{short_name:"ccn"},component_category:{short_name:"cc"},component_type:{short_name:"ct"},efficiencies:{short_name:"ef"}},s.universal_map=o(s.universal_map),s.beam_map={feature_array:{short_name:"fa",pkey:"feature"},selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_warm_up_time:{short_name:"swut",pkey:"time"},selected_wide_angle:{short_name:"swa",pkey:"angle"},selected_shots:{short_name:"ss",pkey:"shots"},selected_burst_value:{short_name:"sbv",pkey:"burst_value"},selected_range_mod:{short_name:"srm",pkey:"range_mod"}},s.beam_map=o(s.beam_map),s.emw_map={feature_array:{short_name:"fa",pkey:"feature"},selected_damage:{short_name:"sd",pkey:"damage"},selected_attack_factor:{short_name:"saf",pkey:"attack_factor"},selected_turns_in_use:{short_name:"stiu",pkey:"turns"}},s.emw_map=o(s.emw_map),s.energy_pool_map={feature_array:{short_name:"fa",pkey:"feature"},selected_energy_pool:{short_name:"sep",pkey:"power_available"},selected_portfolio_size:{short_name:"sps",pkey:"size"}},s.energy_pool_map=o(s.energy_pool_map),s.locomotion_map={selected_locomotion_type:{short_name:"slt",pkey:"type"},selected_locomotion_class:{short_name:"slc",pkey:"name"},slt:{short_name:"selected_locomotion_type",pkey:"type"},slc:{short_name:"selected_locomotion_class",pkey:"name"}},s.magazine_map={selected_gun:{short_name:"sg",pkey:"uuid"},feature_array:{short_name:"fa",pkey:"type"},selected_shots:{short_name:"ss"}},s.magazine_map=o(s.magazine_map),s.melee_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},feature_array:{short_name:"fa",pkey:"feature"},entangle:{short_name:"ent"}},s.melee_map=o(s.melee_map),s.missile_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_pack_size:{short_name:"sps",pkey:"size"},selected_range_mod:{short_name:"srm",pkey:"id"},selected_smart:{short_name:"sm",pkey:"smart"},selected_skill:{short_name:"ss",pkey:"skill"},selected_blast_radius:{short_name:"sbr",pkey:"blast_radius"},smoke_scatter_duration:{short_name:"ssd"},feature_array:{short_name:"fa",pkey:"feature"}},s.missile_map=o(s.missile_map),s.projectile_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_range_mod:{short_name:"srm",pkey:"range_mod"},selected_burst_value:{short_name:"sbv",pkey:"burst_value"},feature_array:{short_name:"fa",pkey:"feature"},selected_multi_feed:{short_name:"smf",pkey:"feeds"}},s.projectile_map=o(s.projectile_map),s.reflector_map={selected_reflector:{short_name:"sr",pkey:"quality_value"},sr:{long_name:"selected_reflector",pkey:"quality_value"}},s.servo_map={selected_servo_type:{short_name:"sst",pkey:"type"},selected_servo_class:{short_name:"ssc",pkey:"code"},selected_armor:{short_name:"sar",pkey:"code"},selected_armor_type:{short_name:"sat",pkey:"damage_coefficient"},selected_absorption:{short_name:"sab",pkey:"absorption"},kills_space_trade:{short_name:"kst"}},s.servo_map=o(s.servo_map),s.shield_map={shield_class:{short_name:"sc",pkey:"stopping_power"},defense_ability:{short_name:"da",pkey:"da"},binder:{short_name:"bnd",pkey:"stopping_power_modifier"},reset_time:{short_name:"rt",pkey:"time"},turns_in_use:{short_name:"tiu",pkey:"time"},weakness_array:{short_name:"wa",pkey:"weakness"},armor_type:{short_name:"at",pkey:"damage_coefficient"},absorption:{short_name:"ab",pkey:"absorption"}},s.shield_map=o(s.shield_map)},2913:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline-flex-col"},attrs:{id:"app"}},[a("mek-top-menu",{attrs:{section:e.targetExportTab,"section-list":e.exportSectionList},on:{"focus-section":e.focusExportSection}}),a("div",{staticStyle:{display:"inline-flex-col"},attrs:{id:"app"}},[a("mek-top-menu",{attrs:{section:e.targetTypeTab,"section-list":e.typeSectionList,size:"sm",color:"d","color-offset":"rgb"},on:{"focus-section":e.focusTypeSection}}),""!=e.targetTypeTab?a("span",{staticClass:"mek-flex-row"},[a("span",{staticClass:"menu_container"},[e._l(e.componentList,function(t,n){return a("span",{key:n,staticClass:"component clickable_ecm",class:e.selected(n),on:{click:function(t){return e.selectComponent(n)}}},[e._v("\n            "+e._s(t)+"\n          ")])}),a("span",{staticClass:"invisible_pad_ecm"},[e._v(e._s(e.invisiblePad()))])],2),a("div",{staticClass:"json_parent_container"},[a("span",{staticClass:"json_header"},[e._v("MekJSON")]),a("div",{staticClass:"json_container"},[e._v("\n            "+e._s(e.displayedComponent)+"\n          ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:""!==e.displayedCompressedComponent,expression:"displayedCompressedComponent!==''"}],staticClass:"json_header"},[e._v("Condensed MekJSON")]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.displayedCompressedComponent,expression:"displayedCompressedComponent!==''"}],staticClass:"json_container"},[e._v("\n            "+e._s(e.displayedCompressedComponent)+"\n          ")])])]):e._e()],1)],1)},s=[],r=a("cebc"),o=(a("ac6a"),a("8615"),a("8fcf")),c=a("2f62"),i=(a("6762"),a("2fdb"),a("24b8")),p=function(e){return void 0!==i["a"].universal_map[e]&&void 0!==i["a"].universal_map[e].short_name},m=function(e,t){return void 0!==i["a"][t+"_map"][e]&&void 0!==i["a"][t+"_map"][e].short_name},_=function(e,t){return i["a"][t+"_map"][e].short_name},l=function(e,t){return i["a"][t+"_map"][e].pkey},u=function(e,t){return e.reduce(function(e,a){return e.push(a[t]),e},[])},d=function(e){var t={condense:!0},a=e.component_type;for(var n in e)switch(!0){case p(n)&&"efficiencies"==n:t[i["a"].universal_map[n].short_name]={sp:{ct:e[n].space.cost,md:e[n].space.modifier}};break;case p(n):t[i["a"].universal_map[n].short_name]=e[n];break;case m(n,a)&&"entangle"==n:t[i["a"].melee_map[n].short_name]={rm:e[n].range_modifier,dm:e[n].damage_modifier};break;case m(n,a)&&"kills_space_trade"==n:t[i["a"].servo_map[n].short_name]={km:e[n].kills_modifier,sm:e[n].space_modifier,ct:e[n].cost};break;case m(n,a)&&["feature_array","weakness_array"].includes(n):t[_(n,a)]=u(e[n],l(n,a));break;case m(n,a):t[_(n,a)]=e[n][l(n,a)];break}return t},f={name:"export-component",mixins:[o["a"]],components:{"mek-top-menu":function(){return a.e("mek_top-menu").then(a.bind(null,"4d27"))}},data:function(){var e={selectedKey:null};return e},methods:{focusExportSection:function(e){this.$store.commit("showTab",{prop:"currentExportTab",tab:e})},focusTypeSection:function(e){this.$store.commit("showTab",{prop:"currentTypeTab",tab:e})},selectComponent:function(e){this.selectedKey=e,this.$store.commit("selectComponent",e)},selected:function(e){return this.selectedKey==e?"selected_ecm":""},invisiblePad:function(){return this.invisible_pad(Object.values(this.componentList))}},computed:Object(r["a"])({exportSectionList:function(){return this.categoryList.map(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);return{id:e,name:t}})},typeSectionList:function(){return this.typeList(this.targetExportTab).map(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);return{id:e,name:t}})},componentList:function(){return this.getComponentByType(this.targetExportTab,this.targetTypeTab)},displayedComponent:function(){return""==this.selectedComponent||null===this.selectedComponent||void 0===this.selectedComponent?"Select an item to view":JSON.stringify(this.selectedComponent)},displayedCompressedComponent:function(){return""==this.selectedComponent||null===this.selectedComponent||void 0===this.selectedComponent?"":JSON.stringify(d(this.selectedComponent))}},Object(c["b"])({targetExportTab:"targetExportTab",categoryList:"categoryList",typeList:"typeList",targetTypeTab:"targetTypeTab",getComponentByType:"getComponentByType",selectedComponent:"selectedComponent"}))},y=f,h=(a("ea8f"),a("2877")),k=Object(h["a"])(y,n,s,!1,null,"6f707b22",null);t["default"]=k.exports},"2fdb":function(e,t,a){"use strict";var n=a("5ca1"),s=a("d2c8"),r="includes";n(n.P+n.F*a("5147")(r),"String",{includes:function(e){return!!~s(this,e,r).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"504c":function(e,t,a){var n=a("9e1e"),s=a("0d58"),r=a("6821"),o=a("52a7").f;e.exports=function(e){return function(t){var a,c=r(t),i=s(c),p=i.length,m=0,_=[];while(p>m)a=i[m++],n&&!o.call(c,a)||_.push(e?[a,c[a]]:c[a]);return _}}},5147:function(e,t,a){var n=a("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(s){}}return!0}},5253:function(e,t,a){},6762:function(e,t,a){"use strict";var n=a("5ca1"),s=a("c366")(!0);n(n.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},8615:function(e,t,a){var n=a("5ca1"),s=a("504c")(!1);n(n.S,"Object",{values:function(e){return s(e)}})},"8fcf":function(e,t,a){"use strict";a("ac6a"),a("34ef"),a("6b54"),a("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);var a=Math.pow(10,+t);return Math.round(+e*a)/a},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad:function(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},invisible_pad:function(e){var t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(parseFloat(e))&&isFinite(e)}}}},aae3:function(e,t,a){var n=a("d3f4"),s=a("2d95"),r=a("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==s(e))}},d2c8:function(e,t,a){var n=a("aae3"),s=a("be13");e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(s(e))}},ea8f:function(e,t,a){"use strict";var n=a("5253"),s=a.n(n);s.a},ffc1:function(e,t,a){var n=a("5ca1"),s=a("504c")(!0);n(n.S,"Object",{entries:function(e){return s(e)}})}}]);
//# sourceMappingURL=mek_export-component-legacy.48c63cb0.js.map