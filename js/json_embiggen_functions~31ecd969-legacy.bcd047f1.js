(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["json_embiggen_functions~31ecd969","mek_ammo-list-data-module~5c956a7a","mek_beam-feature-data-module~5c956a7a","mek_missile-feature-data-module~5c956a7a","mek_projectile-feature-data-module~5c956a7a"],{"0c1d":function(e,a,t){"use strict";t.r(a),t.d(a,"embiggen",function(){return m});t("6762"),t("2fdb");var r=t("24b8"),s=function(e){return void 0!==r["a"].universal_map[e]&&void 0!==r["a"].universal_map[e].long_name},n=function(e,a){return void 0!==r["a"][a+"_map"][e]&&void 0!==r["a"][a+"_map"][e].long_name},o=function(e,a){return r["a"][a+"_map"][e].long_name},_=function(e,a){return r["a"][a+"_map"][e].pkey},c=function(e,a){return e.map(function(e){var t={};return t[a]=e,t})},m=function(e){var a={},t=e.ct,m=0,p=0;for(var i in e){var l={};switch(!0){case s(i)&&"ef"==i:a[r["a"].universal_map[i].long_name]={space:{cost:e[i].sp.ct,modifier:e[i].sp.md}};break;case s(i):a[r["a"].universal_map[i].long_name]=e[i];break;case n(i,t)&&"ent"==i:a[r["a"].melee_map[i].long_name]={range_modifier:e[i].rm,damage_modifier:e[i].dm};break;case n(i,t)&&"kst"==i:m="Torso"==e.sst?2*e.ssc:"Pod"==e.sst?0:1*e.ssc,p="Torso"==e.sst?2*e.ssc:"Pod"==e.sst?2*e.ssc:1*e.ssc,a[r["a"].servo_map[i].long_name]={kills_modifier:e[i].km,space_modifier:e[i].sm,cost:e[i].ct,kills:m,space:p};break;case n(i,t)&&["fa","wa"].includes(i):a[o(i,t)]=c(e[i],_(i,t));break;case n(i,t):l[_(i,t)]=e[i],a[o(i,t)]=l;break}}return a}},"24b8":function(e,a,t){"use strict";t.d(a,"a",function(){return o});t("8e6e"),t("456d");var r=t("bd86");t("ac6a"),t("ffc1");function s(e,a){var t=Object.keys(e);return Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(e)),a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(t,!0).forEach(function(a){Object(r["a"])(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var o={},_=function(e){return Object.entries(e).reduce(function(e,a){var t={long_name:a[0]};return void 0!==a[1].pkey&&(t.pkey=a[1].pkey),void 0!==a[1].short_pkey&&(t.short_pkey=a[1].short_pkey),e[a[1].short_name]=t,e},{})},c=function(e){return n({},e,{},_(e))};o.universal_map={uuid:{short_name:"uuid"},component_name:{short_name:"cn"},custom_component_name:{short_name:"ccn"},component_category:{short_name:"cc"},component_type:{short_name:"ct"},efficiencies:{short_name:"ef"}},o.universal_map=c(o.universal_map),o.beam_map={feature_array:{short_name:"fa",pkey:"feature"},selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_warm_up_time:{short_name:"swut",pkey:"time"},selected_wide_angle:{short_name:"swa",pkey:"angle"},selected_shots:{short_name:"ss",pkey:"shots"},selected_burst_value:{short_name:"sbv",pkey:"burst_value"},selected_range_mod:{short_name:"srm",pkey:"range_mod"}},o.beam_map=c(o.beam_map),o.emw_map={feature_array:{short_name:"fa",pkey:"feature"},selected_damage:{short_name:"sd",pkey:"damage"},selected_attack_factor:{short_name:"saf",pkey:"attack_factor"},selected_turns_in_use:{short_name:"stiu",pkey:"turns"}},o.emw_map=c(o.emw_map),o.energy_pool_map={feature_array:{short_name:"fa",pkey:"feature"},selected_energy_pool:{short_name:"sep",pkey:"power_available"},selected_portfolio_size:{short_name:"sps",pkey:"size"}},o.energy_pool_map=c(o.energy_pool_map),o.locomotion_map={selected_locomotion_type:{short_name:"slt",pkey:"type"},selected_locomotion_class:{short_name:"slc",pkey:"name"},slt:{short_name:"selected_locomotion_type",pkey:"type"},slc:{short_name:"selected_locomotion_class",pkey:"name"}},o.magazine_map={selected_gun:{short_name:"sg",pkey:"uuid"},feature_array:{short_name:"fa",pkey:"type"},selected_shots:{short_name:"ss"}},o.magazine_map=c(o.magazine_map),o.melee_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},feature_array:{short_name:"fa",pkey:"feature"},entangle:{short_name:"ent"}},o.melee_map=c(o.melee_map),o.missile_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_pack_size:{short_name:"sps",pkey:"size"},selected_range_mod:{short_name:"srm",pkey:"id"},selected_smart:{short_name:"sm",pkey:"smart"},selected_skill:{short_name:"ss",pkey:"skill"},selected_blast_radius:{short_name:"sbr",pkey:"blast_radius"},smoke_scatter_duration:{short_name:"ssd"},feature_array:{short_name:"fa",pkey:"feature"}},o.missile_map=c(o.missile_map),o.projectile_map={selected_damage:{short_name:"sd",pkey:"damage"},selected_accuracy:{short_name:"sa",pkey:"accuracy"},selected_range_mod:{short_name:"srm",pkey:"range_mod"},selected_burst_value:{short_name:"sbv",pkey:"burst_value"},feature_array:{short_name:"fa",pkey:"feature"},selected_multi_feed:{short_name:"smf",pkey:"feeds"}},o.projectile_map=c(o.projectile_map),o.reflector_map={selected_reflector:{short_name:"sr",pkey:"quality_value"},sr:{long_name:"selected_reflector",pkey:"quality_value"}},o.servo_map={selected_servo_type:{short_name:"sst",pkey:"type"},selected_servo_class:{short_name:"ssc",pkey:"code"},selected_armor:{short_name:"sar",pkey:"code"},selected_armor_type:{short_name:"sat",pkey:"damage_coefficient"},selected_absorption:{short_name:"sab",pkey:"absorption"},kills_space_trade:{short_name:"kst"}},o.servo_map=c(o.servo_map),o.shield_map={shield_class:{short_name:"sc",pkey:"stopping_power"},defense_ability:{short_name:"da",pkey:"da"},binder:{short_name:"bnd",pkey:"stopping_power_modifier"},reset_time:{short_name:"rt",pkey:"time"},turns_in_use:{short_name:"tiu",pkey:"time"},weakness_array:{short_name:"wa",pkey:"weakness"},armor_type:{short_name:"at",pkey:"damage_coefficient"},absorption:{short_name:"ab",pkey:"absorption"}},o.shield_map=c(o.shield_map)},"2fdb":function(e,a,t){"use strict";var r=t("5ca1"),s=t("d2c8"),n="includes";r(r.P+r.F*t("5147")(n),"String",{includes:function(e){return!!~s(this,e,n).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"504c":function(e,a,t){var r=t("9e1e"),s=t("0d58"),n=t("6821"),o=t("52a7").f;e.exports=function(e){return function(a){var t,_=n(a),c=s(_),m=c.length,p=0,i=[];while(m>p)t=c[p++],r&&!o.call(_,t)||i.push(e?[t,_[t]]:_[t]);return i}}},5147:function(e,a,t){var r=t("2b4c")("match");e.exports=function(e){var a=/./;try{"/./"[e](a)}catch(t){try{return a[r]=!1,!"/./"[e](a)}catch(s){}}return!0}},6762:function(e,a,t){"use strict";var r=t("5ca1"),s=t("c366")(!0);r(r.P,"Array",{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),t("9c6c")("includes")},aae3:function(e,a,t){var r=t("d3f4"),s=t("2d95"),n=t("2b4c")("match");e.exports=function(e){var a;return r(e)&&(void 0!==(a=e[n])?!!a:"RegExp"==s(e))}},d2c8:function(e,a,t){var r=t("aae3"),s=t("be13");e.exports=function(e,a,t){if(r(a))throw TypeError("String#"+t+" doesn't accept regex!");return String(s(e))}},ffc1:function(e,a,t){var r=t("5ca1"),s=t("504c")(!0);r(r.S,"Object",{entries:function(e){return s(e)}})}}]);