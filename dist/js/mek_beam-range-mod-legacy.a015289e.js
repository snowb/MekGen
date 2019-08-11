(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-range-mod","mek_beam-range-mod-data-module"],{"1d3a":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"47c91943-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/design_components/mek_beam/subcomponents/mek_beam-range-mod.vue?vue&type=template&id=4257d8d6&\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'mek-sub-component-table\',{attrs:{"items":_vm.range_mod_table,"pkey":_vm.pkey,"selected-keys":_vm.selected_keys,"headers":{range_mod:\'Range Mod\',range:\'Range\',cost:\'Cost\'},"name":"Range Mod","flow":"pkey-col","show-headers":true,"format":{range_mod:\'percent\',cost:\'multiplier\'}},on:{"update-selected-data":_vm.select_range_mod}})}\nvar staticRenderFns = []\n\n\n// CONCATENATED MODULE: ./src/design_components/mek_beam/subcomponents/mek_beam-range-mod.vue?vue&type=template&id=4257d8d6&\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js\nvar web_dom_iterable = __webpack_require__("ac6a");\n\n// EXTERNAL MODULE: ./src/mixins/alerts_mixin.js\nvar alerts_mixin = __webpack_require__("d866");\n\n// EXTERNAL MODULE: ./src/data_table_modules/mek_beam/mek_beam-range-mod-data-module.js\nvar mek_beam_range_mod_data_module = __webpack_require__("8e68");\n\n// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/design_components/mek_beam/subcomponents/mek_beam-range-mod.vue?vue&type=script&lang=js&\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ var mek_beam_range_modvue_type_script_lang_js_ = ({\n  name: "mek_beam_range_mod",\n  props: ["rangeMod", "baseRange"],\n  mixins: [alerts_mixin["a" /* default */]],\n  components: {\n    "mek-sub-component-table": function mekSubComponentTable() {\n      return __webpack_require__.e(/* import() | mek_sub-component-table */ "mek_sub-component-table").then(__webpack_require__.bind(null, "a949"));\n    }\n  },\n  data: function data() {\n    var obj = {};\n    obj.alerts = [];\n    obj.suppressAlerts = false;\n    obj.updatedBaseRange = false;\n    obj.pkey = "range_mod";\n    return obj;\n  },\n  methods: {\n    select_range_mod: function select_range_mod(_range_mod) {\n      var data = JSON.parse(JSON.stringify(_range_mod));\n      this.$emit("update-range-mod", data);\n    }\n  },\n  computed: {\n    range_mod_table: function range_mod_table() {\n      Object(mek_beam_range_mod_data_module["create_range_mod_data_table"])(this.baseRange);\n      return mek_beam_range_mod_data_module["range_mod_data_table"];\n    },\n    selected_keys: function selected_keys() {\n      var _this = this;\n\n      var cleaned_data = Object(mek_beam_range_mod_data_module["cleaned_feature"])(this.pkey, this.rangeMod);\n\n      if (cleaned_data.alerts.length > 0 && !this.suppressAlerts) {\n        cleaned_data.alerts.forEach(function (_alert) {\n          _this.addAlert(_alert);\n        });\n        this.publishAlerts();\n      }\n\n      if (cleaned_data.update || this.updatedBaseRange) {\n        this.$emit("alert-generated", true);\n        this.select_range_mod(cleaned_data.data);\n      }\n\n      this.updatedBaseRange = false;\n      return cleaned_data.key_list;\n    }\n  },\n  watch: {\n    "baseRange": function baseRange(_newval, _oldval) {\n      //must track changes in burstValue to disable alerts for removed features on cleaned_feat\n      if (_newval != _oldval) {\n        this.suppressAlerts = true;\n        this.updatedBaseRange = true;\n      }\n    }\n  }\n});\n// CONCATENATED MODULE: ./src/design_components/mek_beam/subcomponents/mek_beam-range-mod.vue?vue&type=script&lang=js&\n /* harmony default export */ var subcomponents_mek_beam_range_modvue_type_script_lang_js_ = (mek_beam_range_modvue_type_script_lang_js_); \n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("2877");\n\n// CONCATENATED MODULE: ./src/design_components/mek_beam/subcomponents/mek_beam-range-mod.vue\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["a" /* default */])(\n  subcomponents_mek_beam_range_modvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var mek_beam_range_mod = __webpack_exports__["default"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVzaWduX2NvbXBvbmVudHMvbWVrX2JlYW0vc3ViY29tcG9uZW50cy9tZWtfYmVhbS1yYW5nZS1tb2QudnVlPzgwNTYiLCJ3ZWJwYWNrOi8vL3NyYy9kZXNpZ25fY29tcG9uZW50cy9tZWtfYmVhbS9zdWJjb21wb25lbnRzL21la19iZWFtLXJhbmdlLW1vZC52dWU/ZGJkNiIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzaWduX2NvbXBvbmVudHMvbWVrX2JlYW0vc3ViY29tcG9uZW50cy9tZWtfYmVhbS1yYW5nZS1tb2QudnVlPzM4NWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbl9jb21wb25lbnRzL21la19iZWFtL3N1YmNvbXBvbmVudHMvbWVrX2JlYW0tcmFuZ2UtbW9kLnZ1ZT8zYThlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQixhQUFhLDBCQUEwQix3QkFBd0IscUNBQXFDLE9BQU8seUZBQXlGLGdEQUFnRCxvRUFBb0UsdUNBQXVDLEtBQUssNkNBQTZDO0FBQzNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VBO0FBQ0E7QUFJQTtBQUNBLDRCQURBO0FBRUEsa0NBRkE7QUFHQSwyQ0FIQTtBQUlBLGNBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQSxHQUxBO0FBUUEsd0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWhCQTtBQWlCQSxXQUNBO0FBQ0EsNERBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQSxHQWxCQTtBQXlCQSxZQUNBO0FBQ0EsbUJBREEsNkJBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLGlCQU5BLDJCQU9BO0FBQUE7O0FBQ0E7O0FBQ0Esa0VBQ0E7QUFDQSxzREFDQTtBQUNBO0FBQ0EsU0FIQTtBQUlBO0FBQ0E7O0FBQ0Esd0RBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBeEJBLEdBMUJBO0FBb0RBLFNBQ0E7QUFDQSxzREFDQTtBQUFBO0FBQ0EsOEJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBckRBLENBREEsRTs7QUNmMFcsQ0FBZ0IsdUlBQUcsRUFBQyxDOzs7OztBQ0E3UjtBQUMzQjtBQUNMOzs7QUFHakU7QUFDZ0c7QUFDaEcsZ0JBQWdCLDhDQUFVO0FBQzFCLEVBQUUsd0RBQU07QUFDUixFQUFFLE1BQU07QUFDUixFQUFFLGVBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUseUciLCJmaWxlIjoiMWQzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdtZWstc3ViLWNvbXBvbmVudC10YWJsZScse2F0dHJzOntcIml0ZW1zXCI6X3ZtLnJhbmdlX21vZF90YWJsZSxcInBrZXlcIjpfdm0ucGtleSxcInNlbGVjdGVkLWtleXNcIjpfdm0uc2VsZWN0ZWRfa2V5cyxcImhlYWRlcnNcIjp7cmFuZ2VfbW9kOidSYW5nZSBNb2QnLHJhbmdlOidSYW5nZScsY29zdDonQ29zdCd9LFwibmFtZVwiOlwiUmFuZ2UgTW9kXCIsXCJmbG93XCI6XCJwa2V5LWNvbFwiLFwic2hvdy1oZWFkZXJzXCI6dHJ1ZSxcImZvcm1hdFwiOntyYW5nZV9tb2Q6J3BlcmNlbnQnLGNvc3Q6J211bHRpcGxpZXInfX0sb246e1widXBkYXRlLXNlbGVjdGVkLWRhdGFcIjpfdm0uc2VsZWN0X3JhbmdlX21vZH19KX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPG1lay1zdWItY29tcG9uZW50LXRhYmxlXHJcbiAgICAgICAgOml0ZW1zPVwicmFuZ2VfbW9kX3RhYmxlXCIgOnBrZXk9XCJwa2V5XCIgOnNlbGVjdGVkLWtleXM9XCJzZWxlY3RlZF9rZXlzXCJcclxuICAgICAgICA6aGVhZGVycz1cIntyYW5nZV9tb2Q6J1JhbmdlIE1vZCcscmFuZ2U6J1JhbmdlJyxjb3N0OidDb3N0J31cIlxyXG4gICAgICAgIG5hbWU9XCJSYW5nZSBNb2RcIiBmbG93PVwicGtleS1jb2xcIiA6c2hvdy1oZWFkZXJzPVwidHJ1ZVwiXHJcbiAgICAgICAgOmZvcm1hdD1cIntyYW5nZV9tb2Q6J3BlcmNlbnQnLGNvc3Q6J211bHRpcGxpZXInfVwiXHJcbiAgICAgICAgQHVwZGF0ZS1zZWxlY3RlZC1kYXRhPVwic2VsZWN0X3JhbmdlX21vZFwiXHJcbiAgICA+PC9tZWstc3ViLWNvbXBvbmVudC10YWJsZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBhbGVydHNfbWl4aW4gZnJvbSBcIkAvbWl4aW5zL2FsZXJ0c19taXhpblwiO1xyXG5pbXBvcnQgeyByYW5nZV9tb2RfZGF0YV90YWJsZSwgY2xlYW5lZF9mZWF0dXJlLCBjcmVhdGVfcmFuZ2VfbW9kX2RhdGFfdGFibGUgfSBcclxuICAgIGZyb20gXCJAL2RhdGFfdGFibGVfbW9kdWxlcy9tZWtfYmVhbS9tZWtfYmVhbS1yYW5nZS1tb2QtZGF0YS1tb2R1bGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFxyXG57XHJcbiAgICBuYW1lOiBcIm1la19iZWFtX3JhbmdlX21vZFwiLFxyXG4gICAgcHJvcHM6W1wicmFuZ2VNb2RcIixcImJhc2VSYW5nZVwiXSxcclxuICAgIG1peGluczpbYWxlcnRzX21peGluXSxcclxuICAgIGNvbXBvbmVudHM6XHJcbiAgICB7XHJcbiAgICAgICAgXCJtZWstc3ViLWNvbXBvbmVudC10YWJsZVwiOigpPT5pbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZWtfc3ViLWNvbXBvbmVudC10YWJsZVwiICovXCJAL2FwcF9jb21wb25lbnRzL3VuaXZlcnNhbC9tZWtfc3ViLWNvbXBvbmVudC10YWJsZS52dWVcIiksXHJcbiAgICB9LFxyXG4gICAgZGF0YTpmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9iaj17fVxyXG4gICAgICAgIG9iai5hbGVydHM9W107XHJcbiAgICAgICAgb2JqLnN1cHByZXNzQWxlcnRzPWZhbHNlO1xyXG4gICAgICAgIG9iai51cGRhdGVkQmFzZVJhbmdlPWZhbHNlO1xyXG4gICAgICAgIG9iai5wa2V5PVwicmFuZ2VfbW9kXCI7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOlxyXG4gICAge1xyXG4gICAgICAgIHNlbGVjdF9yYW5nZV9tb2Q6ZnVuY3Rpb24oX3JhbmdlX21vZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoX3JhbmdlX21vZCkpXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJ1cGRhdGUtcmFuZ2UtbW9kXCIsZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOlxyXG4gICAge1xyXG4gICAgICAgIHJhbmdlX21vZF90YWJsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjcmVhdGVfcmFuZ2VfbW9kX2RhdGFfdGFibGUodGhpcy5iYXNlUmFuZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZ2VfbW9kX2RhdGFfdGFibGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RlZF9rZXlzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjbGVhbmVkX2RhdGE9Y2xlYW5lZF9mZWF0dXJlKHRoaXMucGtleSwgdGhpcy5yYW5nZU1vZCk7XHJcbiAgICAgICAgICAgIGlmKGNsZWFuZWRfZGF0YS5hbGVydHMubGVuZ3RoPjAgJiYgIXRoaXMuc3VwcHJlc3NBbGVydHMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNsZWFuZWRfZGF0YS5hbGVydHMuZm9yRWFjaCgoX2FsZXJ0KT0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRBbGVydChfYWxlcnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2hBbGVydHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjbGVhbmVkX2RhdGEudXBkYXRlIHx8IHRoaXMudXBkYXRlZEJhc2VSYW5nZSlcclxuICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImFsZXJ0LWdlbmVyYXRlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RfcmFuZ2VfbW9kKGNsZWFuZWRfZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRCYXNlUmFuZ2U9ZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBjbGVhbmVkX2RhdGEua2V5X2xpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOlxyXG4gICAge1xyXG4gICAgICAgIFwiYmFzZVJhbmdlXCI6ZnVuY3Rpb24oX25ld3ZhbCxfb2xkdmFsKVxyXG4gICAgICAgIHsvL211c3QgdHJhY2sgY2hhbmdlcyBpbiBidXJzdFZhbHVlIHRvIGRpc2FibGUgYWxlcnRzIGZvciByZW1vdmVkIGZlYXR1cmVzIG9uIGNsZWFuZWRfZmVhdFxyXG4gICAgICAgICAgICBpZihfbmV3dmFsIT1fb2xkdmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1cHByZXNzQWxlcnRzPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZWRCYXNlUmFuZ2U9dHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTItMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21la19iZWFtLXJhbmdlLW1vZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVrX2JlYW0tcmFuZ2UtbW9kLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWVrX2JlYW0tcmFuZ2UtbW9kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjU3ZDhkNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZWtfYmVhbS1yYW5nZS1tb2QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tZWtfYmVhbS1yYW5nZS1tb2QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1d3a\n')},"706d":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return partial_validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return partial_has_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return partial_get_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return partial_cleaned_feature; });\nvar _this = undefined;\n\n//data table module, raw data output for re-use in non-vue-component formats\n//ATTEMPT: make validators and has_feat and get_feat and cleaned_feat functions \n//          neutral and reusable across all data modules\n//partial data validator\n//called with data_table and validation_keys in data-module\nvar partial_validate = function partial_validate(_data_table, _validation_keys) {\n  return function (_data) {\n    //_data_table: Array, array of data to validate against\n    //_validation_keys: Array, keys to be compared between passed in data and data_table\n    //_data: Object, data to be compared to data table \n    if (typeof _data === "undefined" || !Array.isArray(_validation_keys) || _validation_keys.length == 0) {\n      return false;\n    }\n\n    var valid = _data_table.some(function (_val) {\n      return _validation_keys.every(function (_keys) {\n        //return true if all validation_keys in _data match an element in _data_table\n        return _data[_keys] == _val[_keys];\n      });\n    });\n\n    return valid;\n  };\n}; //partial_has_feature, determine if provided data table has matching element with provided key and val\n//called in data module to generate full function with local data\n\n\nvar partial_has_feature = function partial_has_feature(_data_table) {\n  return function (_key, _val) {\n    return _data_table.some(function (_data) {\n      return _data[_key] !== undefined && _data[_key] == _val;\n    });\n  };\n}; //partial get_feature, returns full function for data module\n//requires data_table (array) and module\'s has_feature function\n//returns full matching element in provided data table\n//has_feature must exist in data table module\n\n\nvar partial_get_feature = function partial_get_feature(_data_table, _has_feature) {\n  return function (_key, _val) {\n    var found_feature = null;\n\n    if (_has_feature(_key, _val)) {\n      _data_table.some(function (_table_val) {\n        if (_table_val[_key] == _val) {\n          found_feature = _table_val;\n          return true;\n        }\n      }, _this);\n    }\n\n    return found_feature;\n  };\n};\n\nvar partial_cleaned_feature = function partial_cleaned_feature(_validator, _has_feature, _get_feature, _default_data, _name) {\n  return function (_pkey, _feature) {\n    //input: primary key, selected feature, filtered data table\n    var data = undefined;\n    var key_list = [];\n    var update = false;\n    var alerts = [];\n    var json_data = JSON.stringify(_feature);\n\n    if (_feature === undefined || !_has_feature(_pkey, _feature[_pkey])) {\n      data = _default_data;\n      key_list = [data[_pkey]];\n      update = true;\n      alerts.push(_name + ": " + json_data);\n      alerts.push("**** Invalid data. Reseting to default. ****");\n    } else if (!_validator(_feature)) {\n      data = JSON.parse(JSON.stringify(_get_feature(_pkey, _feature[_pkey])));\n      key_list = [data[_pkey]];\n      update = true;\n      alerts.push(_name + ": " + json_data);\n      alerts.push("**** Invalid data. Reseting. ****");\n    } else {\n      data = JSON.parse(JSON.stringify(_feature));\n      key_list = [data[_pkey]];\n      update = false;\n    }\n\n    return {\n      data: data,\n      key_list: key_list,\n      update: update,\n      alerts: alerts\n    };\n  };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YV90YWJsZV9tb2R1bGVzL3VuaXZlcnNhbC9tZWtfcGFydGlhbC1mdW5jdGlvbi1kYXRhLW1vZHVsZS5qcz83MDZkIl0sIm5hbWVzIjpbInBhcnRpYWxfdmFsaWRhdGUiLCJfZGF0YV90YWJsZSIsIl92YWxpZGF0aW9uX2tleXMiLCJfZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInZhbGlkIiwic29tZSIsIl92YWwiLCJldmVyeSIsIl9rZXlzIiwicGFydGlhbF9oYXNfZmVhdHVyZSIsIl9rZXkiLCJ1bmRlZmluZWQiLCJwYXJ0aWFsX2dldF9mZWF0dXJlIiwiX2hhc19mZWF0dXJlIiwiZm91bmRfZmVhdHVyZSIsIl90YWJsZV92YWwiLCJwYXJ0aWFsX2NsZWFuZWRfZmVhdHVyZSIsIl92YWxpZGF0b3IiLCJfZ2V0X2ZlYXR1cmUiLCJfZGVmYXVsdF9kYXRhIiwiX25hbWUiLCJfcGtleSIsIl9mZWF0dXJlIiwiZGF0YSIsImtleV9saXN0IiwidXBkYXRlIiwiYWxlcnRzIiwianNvbl9kYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBLElBQUlBLGdCQUFnQixHQUFDLFNBQWpCQSxnQkFBaUIsQ0FBQ0MsV0FBRCxFQUFhQyxnQkFBYjtBQUFBLFNBQWdDLFVBQUNDLEtBQUQsRUFDckQ7QUFBQztBQUNHO0FBQ0E7QUFDQSxRQUFHLE9BQU9BLEtBQVAsS0FBZSxXQUFmLElBQThCLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxnQkFBZCxDQUEvQixJQUFrRUEsZ0JBQWdCLENBQUNJLE1BQWpCLElBQXlCLENBQTlGLEVBQ0E7QUFDSSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxRQUFJQyxLQUFLLEdBQUNOLFdBQVcsQ0FBQ08sSUFBWixDQUFpQixVQUFDQyxJQUFELEVBQzNCO0FBQ0ksYUFBT1AsZ0JBQWdC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V0gsSUFBSSxDQUFDQyxTQUFMLENBQWVQLFFBQWYsQ0FBWCxDQUFMO0FBQ0FFLGNBQVEsR0FBQyxDQUFDRCxJQUFJLENBQUNGLEtBQUQsQ0FBTCxDQUFUO0FBQ0FJLFlBQU0sR0FBQyxLQUFQO0FBQ0g7O0FBQ0QsV0FBTztBQUFDRixVQUFJLEVBQUNBLElBQU47QUFBWUMsY0FBUSxFQUFDQSxRQUFyQjtBQUErQkMsWUFBTSxFQUFDQSxNQUF0QztBQUE4Q0MsWUFBTSxFQUFDQTtBQUFyRCxLQUFQO0FBQ0gsR0EvQjJCO0FBQUEsQ0FBNUIiLCJmaWxlIjoiNzA2ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZGF0YSB0YWJsZSBtb2R1bGUsIHJhdyBkYXRhIG91dHB1dCBmb3IgcmUtdXNlIGluIG5vbi12dWUtY29tcG9uZW50IGZvcm1hdHNcclxuXHJcbi8vQVRURU1QVDogbWFrZSB2YWxpZGF0b3JzIGFuZCBoYXNfZmVhdCBhbmQgZ2V0X2ZlYXQgYW5kIGNsZWFuZWRfZmVhdCBmdW5jdGlvbnMgXHJcbi8vICAgICAgICAgIG5ldXRyYWwgYW5kIHJldXNhYmxlIGFjcm9zcyBhbGwgZGF0YSBtb2R1bGVzXHJcblxyXG4vL3BhcnRpYWwgZGF0YSB2YWxpZGF0b3JcclxuLy9jYWxsZWQgd2l0aCBkYXRhX3RhYmxlIGFuZCB2YWxpZGF0aW9uX2tleXMgaW4gZGF0YS1tb2R1bGVcclxubGV0IHBhcnRpYWxfdmFsaWRhdGU9KF9kYXRhX3RhYmxlLF92YWxpZGF0aW9uX2tleXMpPT4oX2RhdGEpPT5cclxuey8vX2RhdGFfdGFibGU6IEFycmF5LCBhcnJheSBvZiBkYXRhIHRvIHZhbGlkYXRlIGFnYWluc3RcclxuICAgIC8vX3ZhbGlkYXRpb25fa2V5czogQXJyYXksIGtleXMgdG8gYmUgY29tcGFyZWQgYmV0d2VlbiBwYXNzZWQgaW4gZGF0YSBhbmQgZGF0YV90YWJsZVxyXG4gICAgLy9fZGF0YTogT2JqZWN0LCBkYXRhIHRvIGJlIGNvbXBhcmVkIHRvIGRhdGEgdGFibGUgXHJcbiAgICBpZih0eXBlb2YgX2RhdGE9PT1cInVuZGVmaW5lZFwiIHx8ICFBcnJheS5pc0FycmF5KF92YWxpZGF0aW9uX2tleXMpIHx8IF92YWxpZGF0aW9uX2tleXMubGVuZ3RoPT0wKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB2YWxpZD1fZGF0YV90YWJsZS5zb21lKChfdmFsKT0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIF92YWxpZGF0aW9uX2tleXMuZXZlcnkoKF9rZXlzKT0+XHJcbiAgICAgICAgey8vcmV0dXJuIHRydWUgaWYgYWxsIHZhbGlkYXRpb25fa2V5cyBpbiBfZGF0YSBtYXRjaCBhbiBlbGVtZW50IGluIF9kYXRhX3RhYmxlXHJcbiAgICAgICAgICAgIHJldHVybiBfZGF0YVtfa2V5c109PV92YWxbX2tleXNdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn1cclxuXHJcbi8vcGFydGlhbF9oYXNfZmVhdHVyZSwgZGV0ZXJtaW5lIGlmIHByb3ZpZGVkIGRhdGEgdGFibGUgaGFzIG1hdGNoaW5nIGVsZW1lbnQgd2l0aCBwcm92aWRlZCBrZXkgYW5kIHZhbFxyXG4vL2NhbGxlZCBpbiBkYXRhIG1vZHVsZSB0byBnZW5lcmF0ZSBmdWxsIGZ1bmN0aW9uIHdpdGggbG9jYWwgZGF0YVxyXG5sZXQgcGFydGlhbF9oYXNfZmVhdHVyZT0oX2RhdGFfdGFibGUpPT4oX2tleSwgX3ZhbCk9PlxyXG57XHJcbiAgICByZXR1cm4gX2RhdGFfdGFibGUuc29tZSgoX2RhdGEpPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gX2RhdGFbX2tleV0hPT11bmRlZmluZWQgJiYgX2RhdGFbX2tleV09PV92YWw7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vcGFydGlhbCBnZXRfZmVhdHVyZSwgcmV0dXJucyBmdWxsIGZ1bmN0aW9uIGZvciBkYXRhIG1vZHVsZVxyXG4vL3JlcXVpcmVzIGRhdGFfdGFibGUgKGFycmF5KSBhbmQgbW9kdWxlJ3MgaGFzX2ZlYXR1cmUgZnVuY3Rpb25cclxuLy9yZXR1cm5zIGZ1bGwgbWF0Y2hpbmcgZWxlbWVudCBpbiBwcm92aWRlZCBkYXRhIHRhYmxlXHJcbi8vaGFzX2ZlYXR1cmUgbXVzdCBleGlzdCBpbiBkYXRhIHRhYmxlIG1vZHVsZVxyXG5sZXQgcGFydGlhbF9nZXRfZmVhdHVyZT0oX2RhdGFfdGFibGUsIF9oYXNfZmVhdHVyZSk9Pihfa2V5LCBfdmFsKT0+XHJcbntcclxuICAgIGxldCBmb3VuZF9mZWF0dXJlPW51bGw7XHJcbiAgICBpZihfaGFzX2ZlYXR1cmUoX2tleSxfdmFsKSlcclxuICAgIHtcclxuICAgICAgICBfZGF0YV90YWJsZS5zb21lKChfdGFibGVfdmFsKT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihfdGFibGVfdmFsW19rZXldPT1fdmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZF9mZWF0dXJlPV90YWJsZV92YWw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sdGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm91bmRfZmVhdHVyZTtcclxufVxyXG5cclxubGV0IHBhcnRpYWxfY2xlYW5lZF9mZWF0dXJlPShfdmFsaWRhdG9yLCBfaGFzX2ZlYXR1cmUsIF9nZXRfZmVhdHVyZSwgX2RlZmF1bHRfZGF0YSwgX25hbWUpPT4oX3BrZXksIF9mZWF0dXJlKT0+XHJcbnsvL2lucHV0OiBwcmltYXJ5IGtleSwgc2VsZWN0ZWQgZmVhdHVyZSwgZmlsdGVyZWQgZGF0YSB0YWJsZVxyXG4gICAgbGV0IGRhdGE9dW5kZWZpbmVkO1xyXG4gICAgbGV0IGtleV9saXN0PVtdO1xyXG4gICAgbGV0IHVwZGF0ZT1mYWxzZTtcclxuICAgIGxldCBhbGVydHM9W107XHJcbiAgICBsZXQganNvbl9kYXRhPUpTT04uc3RyaW5naWZ5KF9mZWF0dXJlKTtcclxuXHJcbiAgICBpZihfZmVhdHVyZT09PXVuZGVmaW5lZCB8fCAhX2hhc19mZWF0dXJlKF9wa2V5LF9mZWF0dXJlW19wa2V5XSkpXHJcbiAgICB7XHJcbiAgICAgICAgZGF0YT1fZGVmYXVsdF9kYXRhO1xyXG4gICAgICAgIGtleV9saXN0PVtkYXRhW19wa2V5XV07XHJcbiAgICAgICAgdXBkYXRlPXRydWU7XHJcbiAgICAgICAgYWxlcnRzLnB1c2goX25hbWUrXCI6IFwiK2pzb25fZGF0YSk7XHJcbiAgICAgICAgYWxlcnRzLnB1c2goXCIqKioqIEludmFsaWQgZGF0YS4gUmVzZXRpbmcgdG8gZGVmYXVsdC4gKioqKlwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIV92YWxpZGF0b3IoX2ZlYXR1cmUpKVxyXG4gICAge1xyXG4gICAgICAgIGRhdGE9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfZ2V0X2ZlYXR1cmUoX3BrZXksX2ZlYXR1cmVbX3BrZXldKSkpO1xyXG4gICAgICAgIGtleV9saXN0PVtkYXRhW19wa2V5XV07XHJcbiAgICAgICAgdXBkYXRlPXRydWU7XHJcbiAgICAgICAgYWxlcnRzLnB1c2goX25hbWUrXCI6IFwiK2pzb25fZGF0YSk7XHJcbiAgICAgICAgYWxlcnRzLnB1c2goXCIqKioqIEludmFsaWQgZGF0YS4gUmVzZXRpbmcuICoqKipcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgZGF0YT1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KF9mZWF0dXJlKSk7XHJcbiAgICAgICAga2V5X2xpc3Q9W2RhdGFbX3BrZXldXTtcclxuICAgICAgICB1cGRhdGU9ZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2RhdGE6ZGF0YSwga2V5X2xpc3Q6a2V5X2xpc3QsIHVwZGF0ZTp1cGRhdGUsIGFsZXJ0czphbGVydHN9O1xyXG59XHJcblxyXG5leHBvcnQge3BhcnRpYWxfdmFsaWRhdGUsIHBhcnRpYWxfaGFzX2ZlYXR1cmUsIHBhcnRpYWxfZ2V0X2ZlYXR1cmUsIHBhcnRpYWxfY2xlYW5lZF9mZWF0dXJlfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///706d\n')},"8e68":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range_mod_data_table", function() { return range_mod_data_table; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range_mod_validate", function() { return range_mod_validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has_feature", function() { return has_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_feature", function() { return get_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleaned_feature", function() { return cleaned_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_range_mod_data_table", function() { return create_range_mod_data_table; });\n/* harmony import */ var _data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("706d");\n//data table module, raw data output for re-use in non-vue-component formats\n //create new range_mod_data_table\n\nvar range_mod_data_table = [];\nvar raw_range_mod_data_table = [//need id prop to differentiate between Mine and Bomb\n{\n  range_mod: 0.25,\n  cost: 0.62,\n  range: 0.25 * 4\n}, {\n  range_mod: 0.5,\n  cost: 0.75,\n  range: 0.5 * 4\n}, {\n  range_mod: 0.75,\n  cost: 0.88,\n  range: 0.75 * 4\n}, {\n  range_mod: 1,\n  cost: 1,\n  range: 1 * 4\n}, {\n  range_mod: 1.25,\n  cost: 1.12,\n  range: 1.25 * 4\n}, {\n  range_mod: 1.5,\n  cost: 1.25,\n  range: 1.5 * 4\n}, {\n  range_mod: 1.75,\n  cost: 1.38,\n  range: 1.75 * 4\n}, {\n  range_mod: 2,\n  cost: 1.5,\n  range: 2 * 4\n}, {\n  range_mod: 2.5,\n  cost: 1.75,\n  range: 2.5 * 4\n}, {\n  range_mod: 3,\n  cost: 2,\n  range: 3 * 4\n}];\nvar data_cached = false;\n\nvar create_range_mod_data_table = function create_range_mod_data_table(_base_range) {\n  var base_range = _base_range === undefined ? 4 : _base_range;\n  range_mod_data_table = raw_range_mod_data_table.map(function (_elem) {\n    _elem.range = _elem.range_mod * base_range;\n    return _elem;\n  });\n  data_cached = false;\n};\n\ncreate_range_mod_data_table(4);\nvar data_table_keys = ["range_modifier", "cost", "range"];\nvar default_data = {\n  range_mod: 1,\n  cost: 1,\n  range: 3\n};\nvar cached_validate = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_validate */ "d"])(range_mod_data_table, data_table_keys); //data validator for range_mod_data_table\n//call partial_validate with appropriate data for full validate\n\nvar range_mod_validate = function range_mod_validate(_data) {\n  if (data_cached) {\n    return cached_validate(_data);\n  }\n\n  data_cached = true;\n  cached_validate = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_validate */ "d"])(range_mod_data_table, data_table_keys);\n  return cached_validate(_data);\n}; //completed function for checking if data has data\n\n\nvar has_feature = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_has_feature */ "c"])(range_mod_data_table); //completed function for returning matching data\n\nvar get_feature = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_get_feature */ "b"])(range_mod_data_table, has_feature); //completed function for returning cleaed data\n\nvar cleaned_feature = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_cleaned_feature */ "a"])(range_mod_validate, has_feature, get_feature, default_data, "Mek_Beam-Range-Mod");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YV90YWJsZV9tb2R1bGVzL21la19iZWFtL21la19iZWFtLXJhbmdlLW1vZC1kYXRhLW1vZHVsZS5qcz84ZTY4Il0sIm5hbWVzIjpbInJhbmdlX21vZF9kYXRhX3RhYmxlIiwicmF3X3JhbmdlX21vZF9kYXRhX3RhYmxlIiwicmFuZ2VfbW9kIiwiY29zdCIsInJhbmdlIiwiZGF0YV9jYWNoZWQiLCJjcmVhdGVfcmFuZ2VfbW9kX2RhdGFfdGFibGUiLCJfYmFzZV9yYW5nZSIsImJhc2VfcmFuZ2UiLCJ1bmRlZmluZWQiLCJtYXAiLCJfZWxlbSIsImRhdGFfdGFibGVfa2V5cyIsImRlZmF1bHRfZGF0YSIsImNhY2hlZF92YWxpZGF0ZSIsInBhcnRpYWxfdmFsaWRhdGUiLCJyYW5nZV9tb2RfdmFsaWRhdGUiLCJfZGF0YSIsImhhc19mZWF0dXJlIiwicGFydGlhbF9oYXNfZmVhdHVyZSIsImdldF9mZWF0dXJlIiwicGFydGlhbF9nZXRfZmVhdHVyZSIsImNsZWFuZWRfZmVhdHVyZSIsInBhcnRpYWxfY2xlYW5lZF9mZWF0dXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FJQTs7QUFDQSxJQUFJQSxvQkFBb0IsR0FBQyxFQUF6QjtBQUNBLElBQUlDLHdCQUF3QixHQUM1QixDQUFDO0FBQ0c7QUFBQ0MsV0FBUyxFQUFDLElBQVg7QUFBZ0JDLE1BQUksRUFBQyxJQUFyQjtBQUEwQkMsT0FBSyxFQUFDLE9BQUs7QUFBckMsQ0FESixFQUVJO0FBQUNGLFdBQVMsRUFBQyxHQUFYO0FBQWVDLE1BQUksRUFBQyxJQUFwQjtBQUF5QkMsT0FBSyxFQUFDLE1BQUk7QUFBbkMsQ0FGSixFQUdJO0FBQUNGLFdBQVMsRUFBQyxJQUFYO0FBQWdCQyxNQUFJLEVBQUMsSUFBckI7QUFBMEJDLE9BQUssRUFBQyxPQUFLO0FBQXJDLENBSEosRUFJSTtBQUFDRixXQUFTLEVBQUMsQ0FBWDtBQUFhQyxNQUFJLEVBQUMsQ0FBbEI7QUFBb0JDLE9BQUssRUFBQyxJQUFFO0FBQTVCLENBSkosRUFLSTtBQUFDRixXQUFTLEVBQUMsSUFBWDtBQUFnQkMsTUFBSSxFQUFDLElBQXJCO0FBQTBCQyxPQUFLLEVBQUMsT0FBSztBQUFyQyxDQUxKLEVBTUk7QUFBQ0YsV0FBUyxFQUFDLEdBQVg7QUFBZUMsTUFBSSxFQUFDLElBQXBCO0FBQXlCQyxPQUFLLEVBQUMsTUFBSTtBQUFuQyxDQU5KLEVBT0k7QUFBQ0YsV0FBUyxFQUFDLElBQVg7QUFBZ0JDLE1BQUksRUFBQyxJQUFyQjtBQUEwQkMsT0FBSyxFQUFDLE9BQUs7QUFBckMsQ0FQSixFQVFJO0FBQUNGLFdBQVMsRUFBQyxDQUFYO0FBQWFDLE1BQUksRUFBQyxHQUFsQjtBQUFzQkMsT0FBSyxFQUFDLElBQUU7QUFBOUIsQ0FSSixFQVNJO0FBQUNGLFdBQVMsRUFBQyxHQUFYO0FBQWVDLE1BQUksRUFBQyxJQUFwQjtBQUF5QkMsT0FBSyxFQUFDLE1BQUk7QUFBbkMsQ0FUSixFQVVJO0FBQUNGLFdBQVMsRUFBQyxDQUFYO0FBQWFDLE1BQUksRUFBQyxDQUFsQjtBQUFvQkMsT0FBSyxFQUFDLElBQUU7QUFBNUIsQ0FWSixDQURBO0FBYUEsSUFBSUMsV0FBVyxHQUFDLEtBQWhCOztBQUNBLElBQUlDLDJCQUEyQixHQUFDLFNBQTVCQSwyQkFBNEIsQ0FBQ0MsV0FBRCxFQUNoQztBQUNJLE1BQUlDLFVBQVUsR0FBQ0QsV0FBVyxLQUFHRSxTQUFkLEdBQXdCLENBQXhCLEdBQTBCRixXQUF6QztBQUNBUCxzQkFBb0IsR0FBQ0Msd0JBQXdCLENBQUNTLEdBQXpCLENBQTZCLFVBQUNDLEtBQUQsRUFDbEQ7QUFDSUEsU0FBSyxDQUFDUCxLQUFOLEdBQVlPLEtBQUssQ0FBQ1QsU0FBTixHQUFnQk0sVUFBNUI7QUFDQSxXQUFPRyxLQUFQO0FBQ0gsR0FKb0IsQ0FBckI7QUFLQU4sYUFBVyxHQUFDLEtBQVo7QUFDSCxDQVREOztBQVVBQywyQkFBMkIsQ0FBQyxDQUFELENBQTNCO0FBQ0EsSUFBSU0sZUFBZSxHQUFDLENBQUMsZ0JBQUQsRUFBa0IsTUFBbEIsRUFBeUIsT0FBekIsQ0FBcEI7QUFDQSxJQUFJQyxZQUFZLEdBQUM7QUFBQ1gsV0FBUyxFQUFDLENBQVg7QUFBYUMsTUFBSSxFQUFDLENBQWxCO0FBQW9CQyxPQUFLLEVBQUM7QUFBMUIsQ0FBakI7QUFFQSxJQUFJVSxlQUFlLEdBQUNDLCtIQUFnQixDQUFDZixvQkFBRCxFQUF1QlksZUFBdkIsQ0FBcEMsQyxDQUNBO0FBQ0E7O0FBQ0EsSUFBSUksa0JBQWtCLEdBQUMsU0FBbkJBLGtCQUFtQixDQUFDQyxLQUFELEVBQ3ZCO0FBQ0ksTUFBR1osV0FBSCxFQUNBO0FBQ0ksV0FBT1MsZUFBZSxDQUFDRyxLQUFELENBQXRCO0FBQ0g7O0FBQ0RaLGFBQVcsR0FBQyxJQUFaO0FBQ0FTLGlCQUFlLEdBQUNDLCtIQUFnQixDQUFDZixvQkFBRCxFQUF1QlksZUFBdkIsQ0FBaEM7QUFDQSxTQUFPRSxlQUFlLENBQUNHLEtBQUQsQ0FBdEI7QUFDSCxDQVRELEMsQ0FXQTs7O0FBQ0EsSUFBSUMsV0FBVyxHQUFDQyxrSUFBbUIsQ0FBQ25CLG9CQUFELENBQW5DLEMsQ0FFQTs7QUFDQSxJQUFJb0IsV0FBVyxHQUFDQyxrSUFBbUIsQ0FBQ3JCLG9CQUFELEVBQXVCa0IsV0FBdkIsQ0FBbkMsQyxDQUVBOztBQUNBLElBQUlJLGVBQWUsR0FDZkMsc0lBQXVCLENBQUNQLGtCQUFELEVBQXFCRSxXQUFyQixFQUFrQ0UsV0FBbEMsRUFBK0NQLFlBQS9DLEVBQTZELG9CQUE3RCxDQUQzQiIsImZpbGUiOiI4ZTY4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kYXRhIHRhYmxlIG1vZHVsZSwgcmF3IGRhdGEgb3V0cHV0IGZvciByZS11c2UgaW4gbm9uLXZ1ZS1jb21wb25lbnQgZm9ybWF0c1xyXG5pbXBvcnQge3BhcnRpYWxfdmFsaWRhdGUsIHBhcnRpYWxfaGFzX2ZlYXR1cmUsIHBhcnRpYWxfZ2V0X2ZlYXR1cmUsIHBhcnRpYWxfY2xlYW5lZF9mZWF0dXJlfSBcclxuICAgIGZyb20gXCJAL2RhdGFfdGFibGVfbW9kdWxlcy91bml2ZXJzYWwvbWVrX3BhcnRpYWwtZnVuY3Rpb24tZGF0YS1tb2R1bGVcIjtcclxuXHJcbi8vY3JlYXRlIG5ldyByYW5nZV9tb2RfZGF0YV90YWJsZVxyXG5sZXQgcmFuZ2VfbW9kX2RhdGFfdGFibGU9W107XHJcbmxldCByYXdfcmFuZ2VfbW9kX2RhdGFfdGFibGU9XHJcblsvL25lZWQgaWQgcHJvcCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gTWluZSBhbmQgQm9tYlxyXG4gICAge3JhbmdlX21vZDowLjI1LGNvc3Q6MC42MixyYW5nZTowLjI1KjR9LFxyXG4gICAge3JhbmdlX21vZDowLjUsY29zdDowLjc1LHJhbmdlOjAuNSo0fSxcclxuICAgIHtyYW5nZV9tb2Q6MC43NSxjb3N0OjAuODgscmFuZ2U6MC43NSo0fSxcclxuICAgIHtyYW5nZV9tb2Q6MSxjb3N0OjEscmFuZ2U6MSo0fSxcclxuICAgIHtyYW5nZV9tb2Q6MS4yNSxjb3N0OjEuMTIscmFuZ2U6MS4yNSo0fSxcclxuICAgIHtyYW5nZV9tb2Q6MS41LGNvc3Q6MS4yNSxyYW5nZToxLjUqNH0sXHJcbiAgICB7cmFuZ2VfbW9kOjEuNzUsY29zdDoxLjM4LHJhbmdlOjEuNzUqNH0sXHJcbiAgICB7cmFuZ2VfbW9kOjIsY29zdDoxLjUscmFuZ2U6Mio0fSxcclxuICAgIHtyYW5nZV9tb2Q6Mi41LGNvc3Q6MS43NSxyYW5nZToyLjUqNH0sXHJcbiAgICB7cmFuZ2VfbW9kOjMsY29zdDoyLHJhbmdlOjMqNH1cclxuXTtcclxubGV0IGRhdGFfY2FjaGVkPWZhbHNlO1xyXG5sZXQgY3JlYXRlX3JhbmdlX21vZF9kYXRhX3RhYmxlPShfYmFzZV9yYW5nZSk9PlxyXG57XHJcbiAgICBsZXQgYmFzZV9yYW5nZT1fYmFzZV9yYW5nZT09PXVuZGVmaW5lZD80Ol9iYXNlX3JhbmdlO1xyXG4gICAgcmFuZ2VfbW9kX2RhdGFfdGFibGU9cmF3X3JhbmdlX21vZF9kYXRhX3RhYmxlLm1hcCgoX2VsZW0pPT5cclxuICAgIHtcclxuICAgICAgICBfZWxlbS5yYW5nZT1fZWxlbS5yYW5nZV9tb2QqYmFzZV9yYW5nZTtcclxuICAgICAgICByZXR1cm4gX2VsZW07XHJcbiAgICB9KTtcclxuICAgIGRhdGFfY2FjaGVkPWZhbHNlO1xyXG59O1xyXG5jcmVhdGVfcmFuZ2VfbW9kX2RhdGFfdGFibGUoNCk7XHJcbmxldCBkYXRhX3RhYmxlX2tleXM9W1wicmFuZ2VfbW9kaWZpZXJcIixcImNvc3RcIixcInJhbmdlXCJdO1xyXG5sZXQgZGVmYXVsdF9kYXRhPXtyYW5nZV9tb2Q6MSxjb3N0OjEscmFuZ2U6M307XHJcblxyXG5sZXQgY2FjaGVkX3ZhbGlkYXRlPXBhcnRpYWxfdmFsaWRhdGUocmFuZ2VfbW9kX2RhdGFfdGFibGUsIGRhdGFfdGFibGVfa2V5cyk7XHJcbi8vZGF0YSB2YWxpZGF0b3IgZm9yIHJhbmdlX21vZF9kYXRhX3RhYmxlXHJcbi8vY2FsbCBwYXJ0aWFsX3ZhbGlkYXRlIHdpdGggYXBwcm9wcmlhdGUgZGF0YSBmb3IgZnVsbCB2YWxpZGF0ZVxyXG5sZXQgcmFuZ2VfbW9kX3ZhbGlkYXRlPShfZGF0YSk9PlxyXG57XHJcbiAgICBpZihkYXRhX2NhY2hlZClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gY2FjaGVkX3ZhbGlkYXRlKF9kYXRhKTtcclxuICAgIH1cclxuICAgIGRhdGFfY2FjaGVkPXRydWU7XHJcbiAgICBjYWNoZWRfdmFsaWRhdGU9cGFydGlhbF92YWxpZGF0ZShyYW5nZV9tb2RfZGF0YV90YWJsZSwgZGF0YV90YWJsZV9rZXlzKTtcclxuICAgIHJldHVybiBjYWNoZWRfdmFsaWRhdGUoX2RhdGEpO1xyXG59O1xyXG5cclxuLy9jb21wbGV0ZWQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGRhdGEgaGFzIGRhdGFcclxubGV0IGhhc19mZWF0dXJlPXBhcnRpYWxfaGFzX2ZlYXR1cmUocmFuZ2VfbW9kX2RhdGFfdGFibGUpO1xyXG5cclxuLy9jb21wbGV0ZWQgZnVuY3Rpb24gZm9yIHJldHVybmluZyBtYXRjaGluZyBkYXRhXHJcbmxldCBnZXRfZmVhdHVyZT1wYXJ0aWFsX2dldF9mZWF0dXJlKHJhbmdlX21vZF9kYXRhX3RhYmxlLCBoYXNfZmVhdHVyZSk7XHJcblxyXG4vL2NvbXBsZXRlZCBmdW5jdGlvbiBmb3IgcmV0dXJuaW5nIGNsZWFlZCBkYXRhXHJcbmxldCBjbGVhbmVkX2ZlYXR1cmU9XHJcbiAgICBwYXJ0aWFsX2NsZWFuZWRfZmVhdHVyZShyYW5nZV9tb2RfdmFsaWRhdGUsIGhhc19mZWF0dXJlLCBnZXRfZmVhdHVyZSwgZGVmYXVsdF9kYXRhLCBcIk1la19CZWFtLVJhbmdlLU1vZFwiKTtcclxuXHJcbmV4cG9ydCB7cmFuZ2VfbW9kX2RhdGFfdGFibGUsIHJhbmdlX21vZF92YWxpZGF0ZSwgaGFzX2ZlYXR1cmUsIGdldF9mZWF0dXJlLCBjbGVhbmVkX2ZlYXR1cmUsIGNyZWF0ZV9yYW5nZV9tb2RfZGF0YV90YWJsZX07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8e68\n')},d866:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony default export */ __webpack_exports__["a"] = ({\n  methods: {\n    addAlert: function addAlert(_alert_string) {\n      this.alerts.push(_alert_string);\n    },\n    publishAlerts: function publishAlerts() {\n      if (this.alerts.length > 0) {\n        this.$store.commit("alertMessage", this.alerts);\n      }\n\n      this.$set(this, "alerts", []);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2FsZXJ0c19taXhpbi5qcz9kODY2Il0sIm5hbWVzIjpbIm1ldGhvZHMiLCJhZGRBbGVydCIsIl9hbGVydF9zdHJpbmciLCJhbGVydHMiLCJwdXNoIiwicHVibGlzaEFsZXJ0cyIsImxlbmd0aCIsIiRzdG9yZSIsImNvbW1pdCIsIiRzZXQiXSwibWFwcGluZ3MiOiJBQUNBO0FBQ0lBLFNBQU8sRUFDUDtBQUNJQyxZQURKLG9CQUNhQyxhQURiLEVBRUk7QUFDSSxXQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUJGLGFBQWpCO0FBQ0gsS0FKTDtBQUtJRyxpQkFMSiwyQkFNSTtBQUNJLFVBQUcsS0FBS0YsTUFBTCxDQUFZRyxNQUFaLEdBQW1CLENBQXRCLEVBQ0E7QUFDSSxhQUFLQyxNQUFMLENBQVlDLE1BQVosQ0FBbUIsY0FBbkIsRUFBa0MsS0FBS0wsTUFBdkM7QUFDSDs7QUFDRCxXQUFLTSxJQUFMLENBQVUsSUFBVixFQUFlLFFBQWYsRUFBd0IsRUFBeEI7QUFDSDtBQVpMO0FBRkosQ0FEQSIsImZpbGUiOiJkODY2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHRcclxue1xyXG4gICAgbWV0aG9kczpcclxuICAgIHtcclxuICAgICAgICBhZGRBbGVydChfYWxlcnRfc3RyaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydHMucHVzaChfYWxlcnRfc3RyaW5nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHB1Ymxpc2hBbGVydHMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5hbGVydHMubGVuZ3RoPjApXHJcbiAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcImFsZXJ0TWVzc2FnZVwiLHRoaXMuYWxlcnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcyxcImFsZXJ0c1wiLFtdKTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///d866\n')}}]);