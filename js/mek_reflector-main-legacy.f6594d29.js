(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_reflector-main"],{"0a90":function(e,t,n){var i=n("63b6"),o=n("10ff");i(i.G+i.F*(parseFloat!=o),{parseFloat:o})},"10ff":function(e,t,n){var i=n("e53d").parseFloat,o=n("a1ce").trim;e.exports=1/i(n("e692")+"-0")!==-1/0?function(e){var t=o(String(e),3),n=i(t);return 0===n&&"-"==t.charAt(0)?-0:n}:i},"2fdb":function(e,t,n){"use strict";var i=n("5ca1"),o=n("d2c8"),c="includes";i(i.P+i.F*n("5147")(c),"String",{includes:function(e){return!!~o(this,e,c).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"468a":function(e,t,n){},5018:function(e,t,n){"use strict";var i=n("468a"),o=n.n(i);o.a},5147:function(e,t,n){var i=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(o){}}return!0}},"59ad":function(e,t,n){e.exports=n("7be7")},6762:function(e,t,n){"use strict";var i=n("5ca1"),o=n("c366")(!0);i(i.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f});var i=n("f499"),o=n.n(i),c=n("a745"),r=n.n(c),s=void 0,a=function(e,t){return function(n){if("undefined"===typeof n||!r()(t)||0==t.length)return!1;var i=e.some(function(e){return t.every(function(t){return n[t]==e[t]})});return i}},u=function(e){return function(t,n){return e.some(function(e){return void 0!==e[t]&&e[t]==n})}},l=function(e,t){return function(n,i){var o=null;return t(n,i)&&e.some(function(e){if(e[n]==i)return o=e,!0},s),o}},f=function(e,t,n,i,c){return function(r,s){var a=void 0,u=[],l=!1,f=[],p=o()(s);return void 0!==s&&t(r,s[r])?e(s)?(a=JSON.parse(o()(s)),u=[a[r]],l=!1):(a=JSON.parse(o()(n(r,s[r]))),u=[a[r]],l=!0,f.push(c+": "+p),f.push("**** Invalid data. Reseting. ****")):(a=i,u=[a[r]],l=!0,f.push(c+": "+p),f.push("**** Invalid data. Reseting to default. ****")),{data:a,key_list:u,update:l,alerts:f}}}},"7b4b":function(e,t,n){"use strict";var i=n("f499"),o=n.n(i);t["a"]={computed:{space_cost:function(){return this.round(this.raw_space-this.efficiencies.space.modifier,2)},cost_multiplier:function(){var e=1;for(var t in this.cost_multipliers)e*=this.cost_multipliers[t];return this.round(e,2)},weight:function(){return this.round(this.damage_capacity/2,2)},feature_list:function(){return"undefined"===typeof this.feature_array?"":this.feature_array.reduce(function(e,t,n){return e+=n>0?", ":"",e+=t.feature,e},"")},newComponent:function(){var e=JSON.parse(o()(this.$store.getters.selectedComponent));return"undefined"===typeof e||null===e||(e.uuid!==this.uuid&&e.component_category==this.component_category&&e.component_type==this.component_type&&this.ingest_data(e),!1)}}}},"7be7":function(e,t,n){n("0a90"),e.exports=n("584a").parseFloat},"8fcf":function(e,t,n){"use strict";var i=n("59ad"),o=n.n(i);n("ac6a"),n("34ef"),n("6b54"),n("a481");t["a"]={methods:{round:function(e,t){if("undefined"===typeof t||0==+t)return Math.round(+e);var n=Math.pow(10,+t);return Math.round(+e*n)/n},floor:function(e){return Math.floor(+e)},ceiling:function(e){return Math.ceiling(+e)},decimalPad:function(e){return+e%1===0?e.toPrecision(2):e},create_uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},invisible_pad:function(e){var t="";return e.forEach(function(e){e.length>t.length&&(t=e)},0),t+"XX"},isNumeric:function(e){return"undefined"!==typeof e&&!isNaN(o()(e))&&isFinite(e)}}}},a1ce:function(e,t,n){var i=n("63b6"),o=n("25eb"),c=n("294c"),r=n("e692"),s="["+r+"]",a="​",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),f=function(e,t,n){var o={},s=c(function(){return!!r[e]()||a[e]()!=a}),u=o[e]=s?t(p):r[e];n&&(o[n]=u),i(i.P+i.F*s,"String",o)},p=f.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=f},a21f:function(e,t,n){var i=n("584a"),o=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},aae3:function(e,t,n){var i=n("d3f4"),o=n("2d95"),c=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==o(e))}},ac6a:function(e,t,n){for(var i=n("cadf"),o=n("0d58"),c=n("2aba"),r=n("7726"),s=n("32e9"),a=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),p=a.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(m),h=0;h<d.length;h++){var _,v=d[h],g=m[v],y=r[v],b=y&&y.prototype;if(b&&(b[l]||s(b,l,p),b[f]||s(b,f,v),a[v]=p,g))for(_ in i)b[_]||c(b,_,i[_],!0)}},b117:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"mek-inline-flex-col"},[n("mek-component-name",{attrs:{"new-component":e.newComponent,"component-name":e.component_name||e.reflector_name,"component-changed":e.component_changed},on:{"update-component-name":e.updateComponentName}}),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-sub-component-table",{attrs:{items:e.reflector_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{quality_value:"QV",cost:"Cost"},name:"Quality",flow:"pkey-col","show-headers":!0},on:{"update-selected-data":e.select_reflector}}),n("span",{staticClass:"mek-flex-col no-margin"},[n("mek-space-efficiency",{attrs:{space_efficiency:e.efficiencies.space,raw_space:e.raw_space,component_name:"Mek-Reflector"},on:{"update-efficiencies":e.updateEfficiencies}})],1)],1),n("div",{staticClass:"mek-inline-flex-row"},[n("mek-component-stats",{attrs:{cols:3,rows:3}},[n("div",{attrs:{slot:"col1-row1"},slot:"col1-row1"},[e._v("Quality Value: "+e._s(e.selected_reflector.quality_value))]),n("div",{attrs:{slot:"col2-row1"},slot:"col2-row1"},[e._v("Base Space: "+e._s(e.raw_space))]),n("div",{attrs:{slot:"col2-row2"},slot:"col2-row2"},[e._v("Space: "+e._s(e.space_cost))]),n("div",{attrs:{slot:"col2-row3"},slot:"col2-row3"},[e._v("Weight: "+e._s(e.round(e.weight,2))+" tons")]),n("div",{attrs:{slot:"col3-row1"},slot:"col3-row1"},[e._v("Base Cost: "+e._s(e.selected_reflector.cost))]),n("div",{staticStyle:{"font-weight":"bold"},attrs:{slot:"col3-row2"},slot:"col3-row2"},[e._v("Total Cost: "+e._s(e.cost))])]),n("mek-save-reset-component",{on:{"save-reset-component":e.componentSaveReset}})],1)],1)},o=[],c=(n("ac6a"),n("f499")),r=n.n(c),s=n("8fcf"),a=n("f52e"),u=n("7b4b"),l=n("d866"),f=n("706d"),p=Array.apply({},Array(10));p=p.map(function(e,t){var n=t+1,i=n*n;return{quality_value:n,cost:i}});var m=["quality_value","cost"],d=JSON.parse(r()(p[0])),h=Object(f["d"])(p,m),_=Object(f["c"])(p),v=Object(f["b"])(p,_),g=Object(f["a"])(h,_,v,d,"Mek_Reflector"),y={name:"mek_reflector",props:[],mixins:[s["a"],a["a"],u["a"],l["a"]],components:{"mek-space-efficiency":function(){return n.e("mek-space-efficiency").then(n.bind(null,"57c1"))},"mek-component-name":function(){return n.e("mek-component-name").then(n.bind(null,"dba3"))},"mek-save-reset-component":function(){return n.e("mek-save-reset-component").then(n.bind(null,"c342"))},"mek-component-stats":function(){return n.e("mek_component-stats").then(n.bind(null,"67b1"))},"mek-sub-component-table":function(){return n.e("mek_sub-component-table").then(n.bind(null,"09c0"))}},data:function(){var e={pkey:"quality_value",uuid:null,component_name:null,custom_component_name:!1,component_category:"equipment",component_type:"reflector",original_component:null,component_changed:!0,selected_reflector:{quality_value:1,cost:1},efficiencies:{}};return e.efficiencies.space={},e.efficiencies.space.cost=0,e.efficiencies.space.modifier=0,e.alerts=[],e.hasAlert=!1,e},methods:{updateComponentName:function(e){this.component_name=e,this.custom_component_name=!0,this.component_changed=!0},select_reflector:function(e){this.$set(this,"selected_reflector",JSON.parse(r()(e))),this.component_changed=!0},output_reflector_data:function(){var e=this,t={};return this.uuid=null===this.uuid?this.create_uuid():this.uuid,t.uuid=this.uuid,t.component_category="equipment",t.component_type="reflector",t.component_name=null===this.component_name?this.reflector_name:this.component_name,t.custom_component_name=this.custom_component_name,t.efficiencies=JSON.parse(r()(this.efficiencies)),t.selected_reflector=JSON.parse(r()(this.selected_reflector)),t.damage_capacity=JSON.parse(r()(this.damage_capacity)),t.cost=this.cost,t.weight=this.weight,this.$nextTick(function(){e.component_changed=!1}),this.original_component=r()(t),t},ingest_data:function(e){var t=this,n="Reflector is not valid, resetting.";this.universal_ingest_data(e,n),this.custom_component_name||this.$set(this,"component_name",null),this.$nextTick(function(){t.component_changed=t.hasAlert})},componentSaveReset:function(e){var t="reset"==e&&null==this.original_component?"clear":e;switch(t){case"save":this.$store.commit("saveComponent",this.output_reflector_data());break;case"reset":if(null!==this.original_component){this.ingest_data(JSON.parse(this.original_component));break}case"clear":this.uuid=null,this.efficiencies.space.modifier=0,this.component_name=null,this.$set(this,"selected_reflector",{quality_value:1,cost:1}),this.$store.commit("saveComponent",null);break}},updateEfficiencies:function(e){this.$set(this.efficiencies,"space",e),this.component_changed=!0}},computed:{raw_space:function(){return this.selected_reflector.cost},weight:function(){return this.round(this.selected_reflector.cost/2,2)},damage_capacity:function(){return this.selected_reflector.quality_value},cost:function(){return this.selected_reflector.cost+this.efficiencies.space.cost},reflector_name:function(){return"QV-"+this.selected_reflector.quality_value+" Reflector"},reflector_table:function(){return p},selected_keys:function(){var e=this,t=g(this.pkey,this.selected_reflector);return t.alerts.length>0&&(t.alerts.forEach(function(t){e.addAlert(t)}),this.publishAlerts()),t.update&&(this.hasAlert=!0,this.select_armor_type(t.data)),t.key_list}}},b=y,S=(n("5018"),n("2877")),k=Object(S["a"])(b,i,o,!1,null,"e041cdfc",null);t["default"]=k.exports},d2c8:function(e,t,n){var i=n("aae3"),o=n("be13");e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},d866:function(e,t,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");t["a"]={methods:{addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},e692:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},f499:function(e,t,n){e.exports=n("a21f")},f52e:function(e,t,n){"use strict";var i=n("a745"),o=n.n(i),c=n("7618"),r=n("a4bb"),s=n.n(r),a=(n("6762"),n("2fdb"),n("f499")),u=n.n(a);t["a"]={methods:{universal_ingest_data:function(e,t){for(var n in this.original_component=u()(e),null===e&&(this.componentSaveReset("clear"),this.$store.commit("alertMessage",t)),e)if(!s()(this._computedWatchers).includes(n))if("object"!==Object(c["a"])(e[n])||o()(e[n]))o()(e[n]),this.$set(this,n,e[n]);else for(var i in"object"===Object(c["a"])(this[n])&&null!==this[n]||(this[n]={}),e[n])this.$set(this[n],[i],e[n][i]);this.$forceUpdate()},updateComponentName:function(e){this.component_name=e,this.component_changed=!0},addAlert:function(e){this.alerts.push(e)},publishAlerts:function(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}}}]);
//# sourceMappingURL=mek_reflector-main-legacy.f6594d29.js.map