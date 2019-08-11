(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-weakness-data-module"],{"706d":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return partial_validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return partial_has_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return partial_get_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return partial_cleaned_feature; });\n//data table module, raw data output for re-use in non-vue-component formats\n//ATTEMPT: make validators and has_feat and get_feat and cleaned_feat functions \n//          neutral and reusable across all data modules\n//partial data validator\n//called with data_table and validation_keys in data-module\nlet partial_validate = (_data_table, _validation_keys) => _data => {\n  //_data_table: Array, array of data to validate against\n  //_validation_keys: Array, keys to be compared between passed in data and data_table\n  //_data: Object, data to be compared to data table \n  if (typeof _data === "undefined" || !Array.isArray(_validation_keys) || _validation_keys.length == 0) {\n    return false;\n  }\n\n  let valid = _data_table.some(_val => {\n    return _validation_keys.every(_keys => {\n      //return true if all validation_keys in _data match an element in _data_table\n      return _data[_keys] == _val[_keys];\n    });\n  });\n\n  return valid;\n}; //partial_has_feature, determine if provided data table has matching element with provided key and val\n//called in data module to generate full function with local data\n\n\nlet partial_has_feature = _data_table => (_key, _val) => {\n  return _data_table.some(_data => {\n    return _data[_key] !== undefined && _data[_key] == _val;\n  });\n}; //partial get_feature, returns full function for data module\n//requires data_table (array) and module\'s has_feature function\n//returns full matching element in provided data table\n//has_feature must exist in data table module\n\n\nlet partial_get_feature = (_data_table, _has_feature) => (_key, _val) => {\n  let found_feature = null;\n\n  if (_has_feature(_key, _val)) {\n    _data_table.some(_table_val => {\n      if (_table_val[_key] == _val) {\n        found_feature = _table_val;\n        return true;\n      }\n    }, undefined);\n  }\n\n  return found_feature;\n};\n\nlet partial_cleaned_feature = (_validator, _has_feature, _get_feature, _default_data, _name) => (_pkey, _feature) => {\n  //input: primary key, selected feature, filtered data table\n  let data = undefined;\n  let key_list = [];\n  let update = false;\n  let alerts = [];\n  let json_data = JSON.stringify(_feature);\n\n  if (_feature === undefined || !_has_feature(_pkey, _feature[_pkey])) {\n    data = _default_data;\n    key_list = [data[_pkey]];\n    update = true;\n    alerts.push(_name + ": " + json_data);\n    alerts.push("**** Invalid data. Reseting to default. ****");\n  } else if (!_validator(_feature)) {\n    data = JSON.parse(JSON.stringify(_get_feature(_pkey, _feature[_pkey])));\n    key_list = [data[_pkey]];\n    update = true;\n    alerts.push(_name + ": " + json_data);\n    alerts.push("**** Invalid data. Reseting. ****");\n  } else {\n    data = JSON.parse(JSON.stringify(_feature));\n    key_list = [data[_pkey]];\n    update = false;\n  }\n\n  return {\n    data: data,\n    key_list: key_list,\n    update: update,\n    alerts: alerts\n  };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YV90YWJsZV9tb2R1bGVzL3VuaXZlcnNhbC9tZWtfcGFydGlhbC1mdW5jdGlvbi1kYXRhLW1vZHVsZS5qcz83MDZkIl0sIm5hbWVzIjpbInBhcnRpYWxfdmFsaWRhdGUiLCJfZGF0YV90YWJsZSIsIl92YWxpZGF0aW9uX2tleXMiLCJfZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInZhbGlkIiwic29tZSIsIl92YWwiLCJldmVyeSIsIl9rZXlzIiwicGFydGlhbF9oYXNfZmVhdHVyZSIsIl9rZXkiLCJ1bmRlZmluZWQiLCJwYXJ0aWFsX2dldF9mZWF0dXJlIiwiX2hhc19mZWF0dXJlIiwiZm91bmRfZmVhdHVyZSIsIl90YWJsZV92YWwiLCJwYXJ0aWFsX2NsZWFuZWRfZmVhdHVyZSIsIl92YWxpZGF0b3IiLCJfZ2V0X2ZlYXR1cmUiLCJfZGVmYXVsdF9kYXRhIiwiX25hbWUiLCJfcGtleSIsIl9mZWF0dXJlIiwiZGF0YSIsImtleV9saXN0IiwidXBkYXRlIiwiYWxlcnRzIiwianNvbl9kYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUMsQ0FBQ0MsV0FBRCxFQUFhQyxnQkFBYixLQUFpQ0MsS0FBRCxJQUNyRDtBQUFDO0FBQ0c7QUFDQTtBQUNBLE1BQUcsT0FBT0EsS0FBUCxLQUFlLFdBQWYsSUFBOEIsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFOLENBQWNILGdCQUFkLENBQS9CLElBQWtFQSxnQkFBZ0IsQ0FBQ0ksTUFBakIsSUFBeUIsQ0FBOUYsRUFDQTtBQUNJLFdBQU8sS0FBUDtBQUNIOztBQUNELE1BQUlDLEtBQUssR0FBQ04sV0FBVyxDQUFDTyxJQUFaLENBQWtCQyxJQUFELElBQzNCO0FBQ0ksV0FBT1AsZ0JBQWdCLENBQUNRLEtBQWpCLENB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LFFBQUksRUFBQ0EsSUFBTjtBQUFZQyxZQUFRLEVBQUNBLFFBQXJCO0FBQStCQyxVQUFNLEVBQUNBLE1BQXRDO0FBQThDQyxVQUFNLEVBQUNBO0FBQXJELEdBQVA7QUFDSCxDQS9CRCIsImZpbGUiOiI3MDZkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kYXRhIHRhYmxlIG1vZHVsZSwgcmF3IGRhdGEgb3V0cHV0IGZvciByZS11c2UgaW4gbm9uLXZ1ZS1jb21wb25lbnQgZm9ybWF0c1xyXG5cclxuLy9BVFRFTVBUOiBtYWtlIHZhbGlkYXRvcnMgYW5kIGhhc19mZWF0IGFuZCBnZXRfZmVhdCBhbmQgY2xlYW5lZF9mZWF0IGZ1bmN0aW9ucyBcclxuLy8gICAgICAgICAgbmV1dHJhbCBhbmQgcmV1c2FibGUgYWNyb3NzIGFsbCBkYXRhIG1vZHVsZXNcclxuXHJcbi8vcGFydGlhbCBkYXRhIHZhbGlkYXRvclxyXG4vL2NhbGxlZCB3aXRoIGRhdGFfdGFibGUgYW5kIHZhbGlkYXRpb25fa2V5cyBpbiBkYXRhLW1vZHVsZVxyXG5sZXQgcGFydGlhbF92YWxpZGF0ZT0oX2RhdGFfdGFibGUsX3ZhbGlkYXRpb25fa2V5cyk9PihfZGF0YSk9PlxyXG57Ly9fZGF0YV90YWJsZTogQXJyYXksIGFycmF5IG9mIGRhdGEgdG8gdmFsaWRhdGUgYWdhaW5zdFxyXG4gICAgLy9fdmFsaWRhdGlvbl9rZXlzOiBBcnJheSwga2V5cyB0byBiZSBjb21wYXJlZCBiZXR3ZWVuIHBhc3NlZCBpbiBkYXRhIGFuZCBkYXRhX3RhYmxlXHJcbiAgICAvL19kYXRhOiBPYmplY3QsIGRhdGEgdG8gYmUgY29tcGFyZWQgdG8gZGF0YSB0YWJsZSBcclxuICAgIGlmKHR5cGVvZiBfZGF0YT09PVwidW5kZWZpbmVkXCIgfHwgIUFycmF5LmlzQXJyYXkoX3ZhbGlkYXRpb25fa2V5cykgfHwgX3ZhbGlkYXRpb25fa2V5cy5sZW5ndGg9PTApXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbGlkPV9kYXRhX3RhYmxlLnNvbWUoKF92YWwpPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gX3ZhbGlkYXRpb25fa2V5cy5ldmVyeSgoX2tleXMpPT5cclxuICAgICAgICB7Ly9yZXR1cm4gdHJ1ZSBpZiBhbGwgdmFsaWRhdGlvbl9rZXlzIGluIF9kYXRhIG1hdGNoIGFuIGVsZW1lbnQgaW4gX2RhdGFfdGFibGVcclxuICAgICAgICAgICAgcmV0dXJuIF9kYXRhW19rZXlzXT09X3ZhbFtfa2V5c107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuLy9wYXJ0aWFsX2hhc19mZWF0dXJlLCBkZXRlcm1pbmUgaWYgcHJvdmlkZWQgZGF0YSB0YWJsZSBoYXMgbWF0Y2hpbmcgZWxlbWVudCB3aXRoIHByb3ZpZGVkIGtleSBhbmQgdmFsXHJcbi8vY2FsbGVkIGluIGRhdGEgbW9kdWxlIHRvIGdlbmVyYXRlIGZ1bGwgZnVuY3Rpb24gd2l0aCBsb2NhbCBkYXRhXHJcbmxldCBwYXJ0aWFsX2hhc19mZWF0dXJlPShfZGF0YV90YWJsZSk9Pihfa2V5LCBfdmFsKT0+XHJcbntcclxuICAgIHJldHVybiBfZGF0YV90YWJsZS5zb21lKChfZGF0YSk9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBfZGF0YVtfa2V5XSE9PXVuZGVmaW5lZCAmJiBfZGF0YVtfa2V5XT09X3ZhbDtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy9wYXJ0aWFsIGdldF9mZWF0dXJlLCByZXR1cm5zIGZ1bGwgZnVuY3Rpb24gZm9yIGRhdGEgbW9kdWxlXHJcbi8vcmVxdWlyZXMgZGF0YV90YWJsZSAoYXJyYXkpIGFuZCBtb2R1bGUncyBoYXNfZmVhdHVyZSBmdW5jdGlvblxyXG4vL3JldHVybnMgZnVsbCBtYXRjaGluZyBlbGVtZW50IGluIHByb3ZpZGVkIGRhdGEgdGFibGVcclxuLy9oYXNfZmVhdHVyZSBtdXN0IGV4aXN0IGluIGRhdGEgdGFibGUgbW9kdWxlXHJcbmxldCBwYXJ0aWFsX2dldF9mZWF0dXJlPShfZGF0YV90YWJsZSwgX2hhc19mZWF0dXJlKT0+KF9rZXksIF92YWwpPT5cclxue1xyXG4gICAgbGV0IGZvdW5kX2ZlYXR1cmU9bnVsbDtcclxuICAgIGlmKF9oYXNfZmVhdHVyZShfa2V5LF92YWwpKVxyXG4gICAge1xyXG4gICAgICAgIF9kYXRhX3RhYmxlLnNvbWUoKF90YWJsZV92YWwpPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKF90YWJsZV92YWxbX2tleV09PV92YWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kX2ZlYXR1cmU9X3RhYmxlX3ZhbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSx0aGlzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3VuZF9mZWF0dXJlO1xyXG59XHJcblxyXG5sZXQgcGFydGlhbF9jbGVhbmVkX2ZlYXR1cmU9KF92YWxpZGF0b3IsIF9oYXNfZmVhdHVyZSwgX2dldF9mZWF0dXJlLCBfZGVmYXVsdF9kYXRhLCBfbmFtZSk9PihfcGtleSwgX2ZlYXR1cmUpPT5cclxuey8vaW5wdXQ6IHByaW1hcnkga2V5LCBzZWxlY3RlZCBmZWF0dXJlLCBmaWx0ZXJlZCBkYXRhIHRhYmxlXHJcbiAgICBsZXQgZGF0YT11bmRlZmluZWQ7XHJcbiAgICBsZXQga2V5X2xpc3Q9W107XHJcbiAgICBsZXQgdXBkYXRlPWZhbHNlO1xyXG4gICAgbGV0IGFsZXJ0cz1bXTtcclxuICAgIGxldCBqc29uX2RhdGE9SlNPTi5zdHJpbmdpZnkoX2ZlYXR1cmUpO1xyXG5cclxuICAgIGlmKF9mZWF0dXJlPT09dW5kZWZpbmVkIHx8ICFfaGFzX2ZlYXR1cmUoX3BrZXksX2ZlYXR1cmVbX3BrZXldKSlcclxuICAgIHtcclxuICAgICAgICBkYXRhPV9kZWZhdWx0X2RhdGE7XHJcbiAgICAgICAga2V5X2xpc3Q9W2RhdGFbX3BrZXldXTtcclxuICAgICAgICB1cGRhdGU9dHJ1ZTtcclxuICAgICAgICBhbGVydHMucHVzaChfbmFtZStcIjogXCIranNvbl9kYXRhKTtcclxuICAgICAgICBhbGVydHMucHVzaChcIioqKiogSW52YWxpZCBkYXRhLiBSZXNldGluZyB0byBkZWZhdWx0LiAqKioqXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighX3ZhbGlkYXRvcihfZmVhdHVyZSkpXHJcbiAgICB7XHJcbiAgICAgICAgZGF0YT1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KF9nZXRfZmVhdHVyZShfcGtleSxfZmVhdHVyZVtfcGtleV0pKSk7XHJcbiAgICAgICAga2V5X2xpc3Q9W2RhdGFbX3BrZXldXTtcclxuICAgICAgICB1cGRhdGU9dHJ1ZTtcclxuICAgICAgICBhbGVydHMucHVzaChfbmFtZStcIjogXCIranNvbl9kYXRhKTtcclxuICAgICAgICBhbGVydHMucHVzaChcIioqKiogSW52YWxpZCBkYXRhLiBSZXNldGluZy4gKioqKlwiKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBkYXRhPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoX2ZlYXR1cmUpKTtcclxuICAgICAgICBrZXlfbGlzdD1bZGF0YVtfcGtleV1dO1xyXG4gICAgICAgIHVwZGF0ZT1mYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB7ZGF0YTpkYXRhLCBrZXlfbGlzdDprZXlfbGlzdCwgdXBkYXRlOnVwZGF0ZSwgYWxlcnRzOmFsZXJ0c307XHJcbn1cclxuXHJcbmV4cG9ydCB7cGFydGlhbF92YWxpZGF0ZSwgcGFydGlhbF9oYXNfZmVhdHVyZSwgcGFydGlhbF9nZXRfZmVhdHVyZSwgcGFydGlhbF9jbGVhbmVkX2ZlYXR1cmV9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///706d\n')},cf03:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weakness_data_table", function() { return weakness_data_table; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weakness_validate", function() { return weakness_validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has_weakness", function() { return has_weakness; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_weakness", function() { return get_weakness; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleaned_weakness", function() { return cleaned_weakness; });\n/* harmony import */ var _data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("706d");\n//data table module, raw data output for re-use in non-vue-component formats\n //create new weakness_data_table\n\nlet weakness_data_table = [{\n  weakness: "All",\n  monicker: "Shield",\n  cost: 1.0\n}, {\n  weakness: "Ablative",\n  monicker: "Screen",\n  cost: 1.0\n}, {\n  weakness: "Energy Only",\n  monicker: "Interference",\n  cost: 0.75,\n  only_exclusive: true\n}, {\n  weakness: "Matter Only",\n  monicker: "Kinetic",\n  cost: 0.75,\n  only_exclusive: true\n}, {\n  weakness: "Ranged Only",\n  monicker: "Swashbuckling",\n  cost: 0.75,\n  only_exclusive: true\n}, {\n  weakness: "Enclosing",\n  monicker: "Mirror",\n  cost: 0.5\n}, {\n  weakness: "Surge",\n  monicker: "Surge",\n  cost: 2.5\n}];\nlet only_exclusive = weakness_data_table.filter(_el => {\n  return typeof _el.only_exclusive !== "undefined";\n});\nlet data_table_keys = ["weakness", "monicker", "only_exclusive", "cost"];\nlet default_data = {\n  weakness: "All",\n  monicker: "Shield",\n  cost: 1.0\n};\nlet all_exclusive = [default_data]; //data validator for damage_data_table\n//call partial_validate with appropriate data for full validate\n\nlet weakness_validate = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_validate */ "d"])(weakness_data_table, data_table_keys); //completed function for checking if data has data\n\nlet has_weakness = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_has_feature */ "c"])(weakness_data_table); //completed function for returning matching data\n\nlet get_weakness = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_get_feature */ "b"])(weakness_data_table, has_weakness);\n\nlet is_exclusive_weakness = function is_exclusive_weakness(_exclusive_target, _pkey, _pkey_value) {\n  let exclusive_target_array = null;\n\n  switch (_exclusive_target.toLowerCase()) {\n    case "only_exclusive":\n      exclusive_target_array = only_exclusive;\n      break;\n\n    case "all_exclusive":\n      exclusive_target_array = all_exclusive;\n      break;\n  }\n\n  if (exclusive_target_array === null) {\n    return false;\n  }\n\n  return exclusive_target_array.some(_val => {\n    return _val[_pkey] == _pkey_value;\n  });\n};\n\nlet cleaned_weakness = function cleaned_weakness(_weakness_array, _pkey) {\n  //takes weakness_array, returns cleaned array removing multiple exclusive values\n  let hasExclusiveOnly = false;\n  let hasExclusiveAll = false;\n  let update = false;\n  let key_list = [];\n  let alerts = [];\n\n  if (_weakness_array === undefined || _pkey === undefined) {\n    alerts.push("Mek_Shield-Weakness: ");\n    let error = _weakness_array === undefined ? "**** Missing weakness array. Returning blank. ****" : "**** No primary key provided. Returning blank. ****";\n    alerts.push(error);\n    return {\n      cleaned_array: [default_data],\n      update: true,\n      key_list: ["All"],\n      alerts: alerts\n    };\n  }\n\n  let temp_selected_weakness_array = _weakness_array.reduceRight((_cleaned_array, _val) => {\n    if (hasExclusiveAll) {\n      //found exclusive all weakness, return just that\n      key_list = ["All"];\n      return [default_data];\n    }\n\n    let isAll = is_exclusive_weakness("all_exclusive", _pkey, _val[_pkey]);\n\n    if (isAll && _cleaned_array.length == 0) {\n      //last item added was All, return that and essential end\n      hasExclusiveAll = true;\n      key_list = ["All"];\n      return [default_data];\n    } else if (isAll) {\n      //otherwise, not last item, ignore All weakness\n      return _cleaned_array;\n    }\n\n    if (_val[_pkey] === undefined) {\n      //if weakness with pkey doesn\'t exist in data table, ignore\n      alerts.push("Mek_Shield-Weakness: " + JSON.stringify(_val));\n      alerts.push("**** Missing primary key. Ignoring. ****");\n      return _cleaned_array;\n    }\n\n    let clean_weakness = _val;\n\n    if (!weakness_validate(_val)) {\n      //invalid data\n      alerts.push("Mek_Shield-Weakness: " + JSON.stringify(_val));\n      alerts.push("**** Invalid data, attempting to reset. ****");\n      clean_weakness = get_weakness(_pkey, _val[_pkey]);\n      _val = clean_weakness; //replace current value with correct value\n\n      update = true; //attempt to set to corrected weakness\n    }\n\n    if (clean_weakness === null) {\n      //no matching weakness\n      alerts.push("**** Unable to reset. No matching data. ****");\n      update = true;\n      return _cleaned_array; //ignore element\n    }\n\n    let isOnly = is_exclusive_weakness("only_exclusive", _pkey, _val[_pkey]);\n\n    if (isOnly && !hasExclusiveOnly) {\n      _cleaned_array.push(_val);\n\n      hasExclusiveOnly = true;\n      key_list.push(_val[_pkey]);\n      return _cleaned_array;\n    } else if (isOnly && hasExclusiveOnly) {\n      alerts.push("Mek_Shield-Weakness: " + _val);\n      alerts.push("**** Duplicate exclusive Shield data. Ignoring. ****");\n      update = true;\n      return _cleaned_array;\n    }\n\n    if (!key_list.includes(_val[_pkey])) {\n      _cleaned_array.push(_val);\n\n      key_list.push(_val[_pkey]);\n    }\n\n    return _cleaned_array;\n  }, []);\n\n  temp_selected_weakness_array.reverse();\n\n  if (temp_selected_weakness_array.length == 0) {\n    //empty, reset to default\n    temp_selected_weakness_array = [JSON.parse(JSON.stringify(default_data))];\n    update = true;\n    key_list = ["All"];\n    alerts.push("Mek_Shield-Weakness: ");\n    alerts.push("**** Reseting to default ****");\n  }\n\n  return {\n    cleaned_array: temp_selected_weakness_array,\n    update: update,\n    key_list: key_list,\n    alerts: alerts\n  }; //returns an object with the pruned weakness array, whether it was updated, and the key_list\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YV90YWJsZV9tb2R1bGVzL21la19zaGllbGQvbWVrX3NoaWVsZC13ZWFrbmVzcy1kYXRhLW1vZHVsZS5qcz9jZjAzIl0sIm5hbWVzIjpbIndlYWtuZXNzX2RhdGFfdGFibGUiLCJ3ZWFrbmVzcyIsIm1vbmlja2VyIiwiY29zdCIsIm9ubHlfZXhjbHVzaXZlIiwiZmlsdGVyIiwiX2VsIiwiZGF0YV90YWJsZV9rZXlzIiwiZGVmYXVsdF9kYXRhIiwiYWxsX2V4Y2x1c2l2ZSIsIndlYWtuZXNzX3ZhbGlkYXRlIiwicGFydGlhbF92YWxpZGF0ZSIsImhhc193ZWFrbmVzcyIsInBhcnRpYWxfaGFzX2ZlYXR1cmUiLCJnZXRfd2Vha25lc3MiLCJwYXJ0aWFsX2dldF9mZWF0dXJlIiwiaXNfZXhjbHVzaXZlX3dlYWtuZXNzIiwiX2V4Y2x1c2l2ZV90YXJnZXQiLCJfcGtleSIsIl9wa2V5X3ZhbHVlIiwiZXhjbHVzaXZlX3RhcmdldF9hcnJheSIsInRvTG93ZXJDYXNlIiwic29tZSIsIl92YWwiLCJjbGVhbmVkX3dlYWtuZXNzIiwiX3dlYWtuZXNzX2FycmF5IiwiaGFzRXhjbHVzaXZlT25seSIsImhhc0V4Y2x1c2l2ZUFsbCIsInVwZGF0ZSIsImtleV9saXN0IiwiYWxlcnRzIiwidW5kZWZpbmVkIiwicHVzaCIsImVycm9yIiwiY2xlYW5lZF9hcnJheSIsInRlbXBfc2VsZWN0ZWRfd2Vha25lc3NfYXJyYXkiLCJyZWR1Y2VSaWdodCIsIl9jbGVhbmVkX2FycmF5IiwiaXNBbGwiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xlYW5fd2Vha25lc3MiLCJpc09ubHkiLCJpbmNsdWRlcyIsInJldmVyc2UiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUlBOztBQUNBLElBQUlBLG1CQUFtQixHQUN2QixDQUNJO0FBQUNDLFVBQVEsRUFBQyxLQUFWO0FBQWdC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SSxDQUFDTCxLQUFELENBQXRCLENBQUosRUFDQTtBQUNJbUIsb0JBQWMsQ0FBQ0wsSUFBZixDQUFvQlQsSUFBcEI7O0FBQ0FNLGNBQVEsQ0FBQ0csSUFBVCxDQUFjVCxJQUFJLENBQUNMLEtBQUQsQ0FBbEI7QUFDSDs7QUFDRCxXQUFPbUIsY0FBUDtBQUNILEdBakVnQyxFQWlFL0IsRUFqRStCLENBQWpDOztBQWtFQUYsOEJBQTRCLENBQUNVLE9BQTdCOztBQUNBLE1BQUdWLDRCQUE0QixDQUFDSSxNQUE3QixJQUFxQyxDQUF4QyxFQUNBO0FBQUM7QUFDR0osZ0NBQTRCLEdBQUMsQ0FBQ0ssSUFBSSxDQUFDTSxLQUFMLENBQVdOLElBQUksQ0FBQ0MsU0FBTCxDQUFlakMsWUFBZixDQUFYLENBQUQsQ0FBN0I7QUFDQW9CLFVBQU0sR0FBQyxJQUFQO0FBQ0FDLFlBQVEsR0FBQyxDQUFDLEtBQUQsQ0FBVDtBQUNBQyxVQUFNLENBQUNFLElBQVAsQ0FBWSx1QkFBWjtBQUNBRixVQUFNLENBQUNFLElBQVAsQ0FBWSwrQkFBWjtBQUNIOztBQUNELFNBQU87QUFBQ0UsaUJBQWEsRUFBQ0MsNEJBQWY7QUFBNENQLFVBQU0sRUFBQ0EsTUFBbkQ7QUFBMERDLFlBQVEsRUFBQ0EsUUFBbkU7QUFBNEVDLFVBQU0sRUFBQ0E7QUFBbkYsR0FBUCxDQTVGSixDQTZGSTtBQUNILENBL0ZEIiwiZmlsZSI6ImNmMDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RhdGEgdGFibGUgbW9kdWxlLCByYXcgZGF0YSBvdXRwdXQgZm9yIHJlLXVzZSBpbiBub24tdnVlLWNvbXBvbmVudCBmb3JtYXRzXHJcbmltcG9ydCB7cGFydGlhbF92YWxpZGF0ZSwgcGFydGlhbF9oYXNfZmVhdHVyZSwgcGFydGlhbF9nZXRfZmVhdHVyZX0gXHJcbiAgICBmcm9tIFwiQC9kYXRhX3RhYmxlX21vZHVsZXMvdW5pdmVyc2FsL21la19wYXJ0aWFsLWZ1bmN0aW9uLWRhdGEtbW9kdWxlXCI7XHJcblxyXG4vL2NyZWF0ZSBuZXcgd2Vha25lc3NfZGF0YV90YWJsZVxyXG5sZXQgd2Vha25lc3NfZGF0YV90YWJsZT1cclxuW1xyXG4gICAge3dlYWtuZXNzOlwiQWxsXCIsbW9uaWNrZXI6XCJTaGllbGRcIixjb3N0OjEuMH0sXHJcbiAgICB7d2Vha25lc3M6XCJBYmxhdGl2ZVwiLG1vbmlja2VyOlwiU2NyZWVuXCIsY29zdDoxLjB9LFxyXG4gICAge3dlYWtuZXNzOlwiRW5lcmd5IE9ubHlcIixtb25pY2tlcjpcIkludGVyZmVyZW5jZVwiLGNvc3Q6MC43NSxvbmx5X2V4Y2x1c2l2ZTp0cnVlfSxcclxuICAgIHt3ZWFrbmVzczpcIk1hdHRlciBPbmx5XCIsbW9uaWNrZXI6XCJLaW5ldGljXCIsY29zdDowLjc1LG9ubHlfZXhjbHVzaXZlOnRydWV9LFxyXG4gICAge3dlYWtuZXNzOlwiUmFuZ2VkIE9ubHlcIixtb25pY2tlcjpcIlN3YXNoYnVja2xpbmdcIixjb3N0OjAuNzUsb25seV9leGNsdXNpdmU6dHJ1ZX0sXHJcbiAgICB7d2Vha25lc3M6XCJFbmNsb3NpbmdcIixtb25pY2tlcjpcIk1pcnJvclwiLGNvc3Q6MC41fSxcclxuICAgIHt3ZWFrbmVzczpcIlN1cmdlXCIsbW9uaWNrZXI6XCJTdXJnZVwiLGNvc3Q6Mi41fVxyXG5dO1xyXG5sZXQgb25seV9leGNsdXNpdmU9d2Vha25lc3NfZGF0YV90YWJsZS5maWx0ZXIoKF9lbCk9PntyZXR1cm4gdHlwZW9mIF9lbC5vbmx5X2V4Y2x1c2l2ZSE9PVwidW5kZWZpbmVkXCI7fSk7XHJcbmxldCBkYXRhX3RhYmxlX2tleXM9W1wid2Vha25lc3NcIixcIm1vbmlja2VyXCIsXCJvbmx5X2V4Y2x1c2l2ZVwiLFwiY29zdFwiXTtcclxubGV0IGRlZmF1bHRfZGF0YT17d2Vha25lc3M6XCJBbGxcIixtb25pY2tlcjpcIlNoaWVsZFwiLGNvc3Q6MS4wfTtcclxubGV0IGFsbF9leGNsdXNpdmU9W2RlZmF1bHRfZGF0YV07XHJcblxyXG4vL2RhdGEgdmFsaWRhdG9yIGZvciBkYW1hZ2VfZGF0YV90YWJsZVxyXG4vL2NhbGwgcGFydGlhbF92YWxpZGF0ZSB3aXRoIGFwcHJvcHJpYXRlIGRhdGEgZm9yIGZ1bGwgdmFsaWRhdGVcclxubGV0IHdlYWtuZXNzX3ZhbGlkYXRlPXBhcnRpYWxfdmFsaWRhdGUod2Vha25lc3NfZGF0YV90YWJsZSwgZGF0YV90YWJsZV9rZXlzKTtcclxuXHJcbi8vY29tcGxldGVkIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBkYXRhIGhhcyBkYXRhXHJcbmxldCBoYXNfd2Vha25lc3M9cGFydGlhbF9oYXNfZmVhdHVyZSh3ZWFrbmVzc19kYXRhX3RhYmxlKTtcclxuXHJcbi8vY29tcGxldGVkIGZ1bmN0aW9uIGZvciByZXR1cm5pbmcgbWF0Y2hpbmcgZGF0YVxyXG5sZXQgZ2V0X3dlYWtuZXNzPXBhcnRpYWxfZ2V0X2ZlYXR1cmUod2Vha25lc3NfZGF0YV90YWJsZSwgaGFzX3dlYWtuZXNzKTtcclxuXHJcbmxldCBpc19leGNsdXNpdmVfd2Vha25lc3M9ZnVuY3Rpb24oX2V4Y2x1c2l2ZV90YXJnZXQsIF9wa2V5LCBfcGtleV92YWx1ZSlcclxue1xyXG4gICAgbGV0IGV4Y2x1c2l2ZV90YXJnZXRfYXJyYXk9bnVsbDtcclxuICAgIHN3aXRjaChfZXhjbHVzaXZlX3RhcmdldC50b0xvd2VyQ2FzZSgpKVxyXG4gICAge1xyXG4gICAgICAgIGNhc2UgXCJvbmx5X2V4Y2x1c2l2ZVwiOlxyXG4gICAgICAgICAgICBleGNsdXNpdmVfdGFyZ2V0X2FycmF5PW9ubHlfZXhjbHVzaXZlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYWxsX2V4Y2x1c2l2ZVwiOlxyXG4gICAgICAgICAgICBleGNsdXNpdmVfdGFyZ2V0X2FycmF5PWFsbF9leGNsdXNpdmU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYoZXhjbHVzaXZlX3RhcmdldF9hcnJheT09PW51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4Y2x1c2l2ZV90YXJnZXRfYXJyYXkuc29tZSgoX3ZhbCk9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBfdmFsW19wa2V5XT09X3BrZXlfdmFsdWU7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmxldCBjbGVhbmVkX3dlYWtuZXNzPWZ1bmN0aW9uKF93ZWFrbmVzc19hcnJheSwgX3BrZXkpXHJcbnsvL3Rha2VzIHdlYWtuZXNzX2FycmF5LCByZXR1cm5zIGNsZWFuZWQgYXJyYXkgcmVtb3ZpbmcgbXVsdGlwbGUgZXhjbHVzaXZlIHZhbHVlc1xyXG4gICAgbGV0IGhhc0V4Y2x1c2l2ZU9ubHk9ZmFsc2U7XHJcbiAgICBsZXQgaGFzRXhjbHVzaXZlQWxsPWZhbHNlO1xyXG4gICAgbGV0IHVwZGF0ZT1mYWxzZTtcclxuICAgIGxldCBrZXlfbGlzdD1bXTtcclxuICAgIGxldCBhbGVydHM9W107XHJcblxyXG4gICAgaWYoX3dlYWtuZXNzX2FycmF5PT09dW5kZWZpbmVkIHx8IF9wa2V5PT09dW5kZWZpbmVkKVxyXG4gICAge1xyXG4gICAgICAgIGFsZXJ0cy5wdXNoKFwiTWVrX1NoaWVsZC1XZWFrbmVzczogXCIpO1xyXG4gICAgICAgIGxldCBlcnJvcj1fd2Vha25lc3NfYXJyYXk9PT11bmRlZmluZWRcclxuICAgICAgICAgICAgPyBcIioqKiogTWlzc2luZyB3ZWFrbmVzcyBhcnJheS4gUmV0dXJuaW5nIGJsYW5rLiAqKioqXCJcclxuICAgICAgICAgICAgOiBcIioqKiogTm8gcHJpbWFyeSBrZXkgcHJvdmlkZWQuIFJldHVybmluZyBibGFuay4gKioqKlwiO1xyXG4gICAgICAgIGFsZXJ0cy5wdXNoKGVycm9yKTtcclxuICAgICAgICByZXR1cm4ge2NsZWFuZWRfYXJyYXk6W2RlZmF1bHRfZGF0YV0sdXBkYXRlOnRydWUsa2V5X2xpc3Q6W1wiQWxsXCJdLGFsZXJ0czphbGVydHN9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0ZW1wX3NlbGVjdGVkX3dlYWtuZXNzX2FycmF5PV93ZWFrbmVzc19hcnJheS5yZWR1Y2VSaWdodCgoX2NsZWFuZWRfYXJyYXksIF92YWwpPT5cclxuICAgIHtcclxuICAgICAgICBpZihoYXNFeGNsdXNpdmVBbGwpXHJcbiAgICAgICAgey8vZm91bmQgZXhjbHVzaXZlIGFsbCB3ZWFrbmVzcywgcmV0dXJuIGp1c3QgdGhhdFxyXG4gICAgICAgICAgICBrZXlfbGlzdD1bXCJBbGxcIl07XHJcbiAgICAgICAgICAgIHJldHVybiBbZGVmYXVsdF9kYXRhXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlzQWxsPWlzX2V4Y2x1c2l2ZV93ZWFrbmVzcyhcImFsbF9leGNsdXNpdmVcIixfcGtleSxfdmFsW19wa2V5XSk7XHJcbiAgICAgICAgaWYoaXNBbGwgJiYgX2NsZWFuZWRfYXJyYXkubGVuZ3RoPT0wKVxyXG4gICAgICAgIHsvL2xhc3QgaXRlbSBhZGRlZCB3YXMgQWxsLCByZXR1cm4gdGhhdCBhbmQgZXNzZW50aWFsIGVuZFxyXG4gICAgICAgICAgICBoYXNFeGNsdXNpdmVBbGw9dHJ1ZTtcclxuICAgICAgICAgICAga2V5X2xpc3Q9W1wiQWxsXCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gW2RlZmF1bHRfZGF0YV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXNBbGwpXHJcbiAgICAgICAgey8vb3RoZXJ3aXNlLCBub3QgbGFzdCBpdGVtLCBpZ25vcmUgQWxsIHdlYWtuZXNzXHJcbiAgICAgICAgICAgIHJldHVybiBfY2xlYW5lZF9hcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoX3ZhbFtfcGtleV09PT11bmRlZmluZWQpXHJcbiAgICAgICAgey8vaWYgd2Vha25lc3Mgd2l0aCBwa2V5IGRvZXNuJ3QgZXhpc3QgaW4gZGF0YSB0YWJsZSwgaWdub3JlXHJcbiAgICAgICAgICAgIGFsZXJ0cy5wdXNoKFwiTWVrX1NoaWVsZC1XZWFrbmVzczogXCIrSlNPTi5zdHJpbmdpZnkoX3ZhbCkpO1xyXG4gICAgICAgICAgICBhbGVydHMucHVzaChcIioqKiogTWlzc2luZyBwcmltYXJ5IGtleS4gSWdub3JpbmcuICoqKipcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBfY2xlYW5lZF9hcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNsZWFuX3dlYWtuZXNzPV92YWw7XHJcbiAgICAgICAgaWYoIXdlYWtuZXNzX3ZhbGlkYXRlKF92YWwpKVxyXG4gICAgICAgIHsvL2ludmFsaWQgZGF0YVxyXG4gICAgICAgICAgICBhbGVydHMucHVzaChcIk1la19TaGllbGQtV2Vha25lc3M6IFwiK0pTT04uc3RyaW5naWZ5KF92YWwpKVxyXG4gICAgICAgICAgICBhbGVydHMucHVzaChcIioqKiogSW52YWxpZCBkYXRhLCBhdHRlbXB0aW5nIHRvIHJlc2V0LiAqKioqXCIpXHJcbiAgICAgICAgICAgIGNsZWFuX3dlYWtuZXNzPWdldF93ZWFrbmVzcyhfcGtleSxfdmFsW19wa2V5XSk7XHJcbiAgICAgICAgICAgIF92YWw9Y2xlYW5fd2Vha25lc3M7Ly9yZXBsYWNlIGN1cnJlbnQgdmFsdWUgd2l0aCBjb3JyZWN0IHZhbHVlXHJcbiAgICAgICAgICAgIHVwZGF0ZT10cnVlO1xyXG4gICAgICAgICAgICAvL2F0dGVtcHQgdG8gc2V0IHRvIGNvcnJlY3RlZCB3ZWFrbmVzc1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjbGVhbl93ZWFrbmVzcz09PW51bGwpXHJcbiAgICAgICAgey8vbm8gbWF0Y2hpbmcgd2Vha25lc3NcclxuICAgICAgICAgICAgYWxlcnRzLnB1c2goXCIqKioqIFVuYWJsZSB0byByZXNldC4gTm8gbWF0Y2hpbmcgZGF0YS4gKioqKlwiKVxyXG4gICAgICAgICAgICB1cGRhdGU9dHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9jbGVhbmVkX2FycmF5O1xyXG4gICAgICAgICAgICAvL2lnbm9yZSBlbGVtZW50XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaXNPbmx5PWlzX2V4Y2x1c2l2ZV93ZWFrbmVzcyhcIm9ubHlfZXhjbHVzaXZlXCIsX3BrZXksX3ZhbFtfcGtleV0pO1xyXG5cclxuICAgICAgICBpZihpc09ubHkgJiYgIWhhc0V4Y2x1c2l2ZU9ubHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY2xlYW5lZF9hcnJheS5wdXNoKF92YWwpO1xyXG4gICAgICAgICAgICBoYXNFeGNsdXNpdmVPbmx5PXRydWU7XHJcbiAgICAgICAgICAgIGtleV9saXN0LnB1c2goX3ZhbFtfcGtleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gX2NsZWFuZWRfYXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXNPbmx5ICYmIGhhc0V4Y2x1c2l2ZU9ubHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydHMucHVzaChcIk1la19TaGllbGQtV2Vha25lc3M6IFwiK192YWwpO1xyXG4gICAgICAgICAgICBhbGVydHMucHVzaChcIioqKiogRHVwbGljYXRlIGV4Y2x1c2l2ZSBTaGllbGQgZGF0YS4gSWdub3JpbmcuICoqKipcIik7XHJcbiAgICAgICAgICAgIHVwZGF0ZT10cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gX2NsZWFuZWRfYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigha2V5X2xpc3QuaW5jbHVkZXMoX3ZhbFtfcGtleV0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NsZWFuZWRfYXJyYXkucHVzaChfdmFsKTtcclxuICAgICAgICAgICAga2V5X2xpc3QucHVzaChfdmFsW19wa2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfY2xlYW5lZF9hcnJheTtcclxuICAgIH0sW10pO1xyXG4gICAgdGVtcF9zZWxlY3RlZF93ZWFrbmVzc19hcnJheS5yZXZlcnNlKCk7XHJcbiAgICBpZih0ZW1wX3NlbGVjdGVkX3dlYWtuZXNzX2FycmF5Lmxlbmd0aD09MClcclxuICAgIHsvL2VtcHR5LCByZXNldCB0byBkZWZhdWx0XHJcbiAgICAgICAgdGVtcF9zZWxlY3RlZF93ZWFrbmVzc19hcnJheT1bSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkZWZhdWx0X2RhdGEpKV07XHJcbiAgICAgICAgdXBkYXRlPXRydWU7XHJcbiAgICAgICAga2V5X2xpc3Q9W1wiQWxsXCJdO1xyXG4gICAgICAgIGFsZXJ0cy5wdXNoKFwiTWVrX1NoaWVsZC1XZWFrbmVzczogXCIpO1xyXG4gICAgICAgIGFsZXJ0cy5wdXNoKFwiKioqKiBSZXNldGluZyB0byBkZWZhdWx0ICoqKipcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2NsZWFuZWRfYXJyYXk6dGVtcF9zZWxlY3RlZF93ZWFrbmVzc19hcnJheSx1cGRhdGU6dXBkYXRlLGtleV9saXN0OmtleV9saXN0LGFsZXJ0czphbGVydHN9O1xyXG4gICAgLy9yZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBwcnVuZWQgd2Vha25lc3MgYXJyYXksIHdoZXRoZXIgaXQgd2FzIHVwZGF0ZWQsIGFuZCB0aGUga2V5X2xpc3RcclxufVxyXG5cclxuZXhwb3J0IHt3ZWFrbmVzc19kYXRhX3RhYmxlLCB3ZWFrbmVzc192YWxpZGF0ZSwgaGFzX3dlYWtuZXNzLCBnZXRfd2Vha25lc3MsIGNsZWFuZWRfd2Vha25lc3N9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cf03\n')}}]);