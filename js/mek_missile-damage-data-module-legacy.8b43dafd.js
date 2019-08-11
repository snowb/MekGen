(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_missile-damage-data-module"],{"706d":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return partial_validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return partial_has_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return partial_get_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return partial_cleaned_feature; });\nvar _this = undefined;\n\n//data table module, raw data output for re-use in non-vue-component formats\n//ATTEMPT: make validators and has_feat and get_feat and cleaned_feat functions \n//          neutral and reusable across all data modules\n//partial data validator\n//called with data_table and validation_keys in data-module\nvar partial_validate = function partial_validate(_data_table, _validation_keys) {\n  return function (_data) {\n    //_data_table: Array, array of data to validate against\n    //_validation_keys: Array, keys to be compared between passed in data and data_table\n    //_data: Object, data to be compared to data table \n    if (typeof _data === "undefined" || !Array.isArray(_validation_keys) || _validation_keys.length == 0) {\n      return false;\n    }\n\n    var valid = _data_table.some(function (_val) {\n      return _validation_keys.every(function (_keys) {\n        //return true if all validation_keys in _data match an element in _data_table\n        return _data[_keys] == _val[_keys];\n      });\n    });\n\n    return valid;\n  };\n}; //partial_has_feature, determine if provided data table has matching element with provided key and val\n//called in data module to generate full function with local data\n\n\nvar partial_has_feature = function partial_has_feature(_data_table) {\n  return function (_key, _val) {\n    return _data_table.some(function (_data) {\n      return _data[_key] !== undefined && _data[_key] == _val;\n    });\n  };\n}; //partial get_feature, returns full function for data module\n//requires data_table (array) and module\'s has_feature function\n//returns full matching element in provided data table\n//has_feature must exist in data table module\n\n\nvar partial_get_feature = function partial_get_feature(_data_table, _has_feature) {\n  return function (_key, _val) {\n    var found_feature = null;\n\n    if (_has_feature(_key, _val)) {\n      _data_table.some(function (_table_val) {\n        if (_table_val[_key] == _val) {\n          found_feature = _table_val;\n          return true;\n        }\n      }, _this);\n    }\n\n    return found_feature;\n  };\n};\n\nvar partial_cleaned_feature = function partial_cleaned_feature(_validator, _has_feature, _get_feature, _default_data, _name) {\n  return function (_pkey, _feature) {\n    //input: primary key, selected feature, filtered data table\n    var data = undefined;\n    var key_list = [];\n    var update = false;\n    var alerts = [];\n    var json_data = JSON.stringify(_feature);\n\n    if (_feature === undefined || !_has_feature(_pkey, _feature[_pkey])) {\n      data = _default_data;\n      key_list = [data[_pkey]];\n      update = true;\n      alerts.push(_name + ": " + json_data);\n      alerts.push("**** Invalid data. Reseting to default. ****");\n    } else if (!_validator(_feature)) {\n      data = JSON.parse(JSON.stringify(_get_feature(_pkey, _feature[_pkey])));\n      key_list = [data[_pkey]];\n      update = true;\n      alerts.push(_name + ": " + json_data);\n      alerts.push("**** Invalid data. Reseting. ****");\n    } else {\n      data = JSON.parse(JSON.stringify(_feature));\n      key_list = [data[_pkey]];\n      update = false;\n    }\n\n    return {\n      data: data,\n      key_list: key_list,\n      update: update,\n      alerts: alerts\n    };\n  };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YV90YWJsZV9tb2R1bGVzL3VuaXZlcnNhbC9tZWtfcGFydGlhbC1mdW5jdGlvbi1kYXRhLW1vZHVsZS5qcz83MDZkIl0sIm5hbWVzIjpbInBhcnRpYWxfdmFsaWRhdGUiLCJfZGF0YV90YWJsZSIsIl92YWxpZGF0aW9uX2tleXMiLCJfZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInZhbGlkIiwic29tZSIsIl92YWwiLCJldmVyeSIsIl9rZXlzIiwicGFydGlhbF9oYXNfZmVhdHVyZSIsIl9rZXkiLCJ1bmRlZmluZWQiLCJwYXJ0aWFsX2dldF9mZWF0dXJlIiwiX2hhc19mZWF0dXJlIiwiZm91bmRfZmVhdHVyZSIsIl90YWJsZV92YWwiLCJwYXJ0aWFsX2NsZWFuZWRfZmVhdHVyZSIsIl92YWxpZGF0b3IiLCJfZ2V0X2ZlYXR1cmUiLCJfZGVmYXVsdF9kYXRhIiwiX25hbWUiLCJfcGtleSIsIl9mZWF0dXJlIiwiZGF0YSIsImtleV9saXN0IiwidXBkYXRlIiwiYWxlcnRzIiwianNvbl9kYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBLElBQUlBLGdCQUFnQixHQUFDLFNBQWpCQSxnQkFBaUIsQ0FBQ0MsV0FBRCxFQUFhQyxnQkFBYjtBQUFBLFNBQWdDLFVBQUNDLEtBQUQsRUFDckQ7QUFBQztBQUNHO0FBQ0E7QUFDQSxRQUFHLE9BQU9BLEtBQVAsS0FBZSxXQUFmLElBQThCLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxnQkFBZCxDQUEvQixJQUFrRUEsZ0JBQWdCLENBQUNJLE1BQWpCLElBQXlCLENBQTlGLEVBQ0E7QUFDSSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxRQUFJQyxLQUFLLEdBQUNOLFdBQVcsQ0FBQ08sSUFBWixDQUFpQixVQUFDQyxJQUFELEVBQzNCO0FBQ0ksYUFBT1AsZ0JBQWdC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V0gsSUFBSSxDQUFDQyxTQUFMLENBQWVQLFFBQWYsQ0FBWCxDQUFMO0FBQ0FFLGNBQVEsR0FBQyxDQUFDRCxJQUFJLENBQUNGLEtBQUQsQ0FBTCxDQUFUO0FBQ0FJLFlBQU0sR0FBQyxLQUFQO0FBQ0g7O0FBQ0QsV0FBTztBQUFDRixVQUFJLEVBQUNBLElBQU47QUFBWUMsY0FBUSxFQUFDQSxRQUFyQjtBQUErQkMsWUFBTSxFQUFDQSxNQUF0QztBQUE4Q0MsWUFBTSxFQUFDQTtBQUFyRCxLQUFQO0FBQ0gsR0EvQjJCO0FBQUEsQ0FBNUIiLCJmaWxlIjoiNzA2ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZGF0YSB0YWJsZSBtb2R1bGUsIHJhdyBkYXRhIG91dHB1dCBmb3IgcmUtdXNlIGluIG5vbi12dWUtY29tcG9uZW50IGZvcm1hdHNcclxuXHJcbi8vQVRURU1QVDogbWFrZSB2YWxpZGF0b3JzIGFuZCBoYXNfZmVhdCBhbmQgZ2V0X2ZlYXQgYW5kIGNsZWFuZWRfZmVhdCBmdW5jdGlvbnMgXHJcbi8vICAgICAgICAgIG5ldXRyYWwgYW5kIHJldXNhYmxlIGFjcm9zcyBhbGwgZGF0YSBtb2R1bGVzXHJcblxyXG4vL3BhcnRpYWwgZGF0YSB2YWxpZGF0b3JcclxuLy9jYWxsZWQgd2l0aCBkYXRhX3RhYmxlIGFuZCB2YWxpZGF0aW9uX2tleXMgaW4gZGF0YS1tb2R1bGVcclxubGV0IHBhcnRpYWxfdmFsaWRhdGU9KF9kYXRhX3RhYmxlLF92YWxpZGF0aW9uX2tleXMpPT4oX2RhdGEpPT5cclxuey8vX2RhdGFfdGFibGU6IEFycmF5LCBhcnJheSBvZiBkYXRhIHRvIHZhbGlkYXRlIGFnYWluc3RcclxuICAgIC8vX3ZhbGlkYXRpb25fa2V5czogQXJyYXksIGtleXMgdG8gYmUgY29tcGFyZWQgYmV0d2VlbiBwYXNzZWQgaW4gZGF0YSBhbmQgZGF0YV90YWJsZVxyXG4gICAgLy9fZGF0YTogT2JqZWN0LCBkYXRhIHRvIGJlIGNvbXBhcmVkIHRvIGRhdGEgdGFibGUgXHJcbiAgICBpZih0eXBlb2YgX2RhdGE9PT1cInVuZGVmaW5lZFwiIHx8ICFBcnJheS5pc0FycmF5KF92YWxpZGF0aW9uX2tleXMpIHx8IF92YWxpZGF0aW9uX2tleXMubGVuZ3RoPT0wKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB2YWxpZD1fZGF0YV90YWJsZS5zb21lKChfdmFsKT0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIF92YWxpZGF0aW9uX2tleXMuZXZlcnkoKF9rZXlzKT0+XHJcbiAgICAgICAgey8vcmV0dXJuIHRydWUgaWYgYWxsIHZhbGlkYXRpb25fa2V5cyBpbiBfZGF0YSBtYXRjaCBhbiBlbGVtZW50IGluIF9kYXRhX3RhYmxlXHJcbiAgICAgICAgICAgIHJldHVybiBfZGF0YVtfa2V5c109PV92YWxbX2tleXNdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn1cclxuXHJcbi8vcGFydGlhbF9oYXNfZmVhdHVyZSwgZGV0ZXJtaW5lIGlmIHByb3ZpZGVkIGRhdGEgdGFibGUgaGFzIG1hdGNoaW5nIGVsZW1lbnQgd2l0aCBwcm92aWRlZCBrZXkgYW5kIHZhbFxyXG4vL2NhbGxlZCBpbiBkYXRhIG1vZHVsZSB0byBnZW5lcmF0ZSBmdWxsIGZ1bmN0aW9uIHdpdGggbG9jYWwgZGF0YVxyXG5sZXQgcGFydGlhbF9oYXNfZmVhdHVyZT0oX2RhdGFfdGFibGUpPT4oX2tleSwgX3ZhbCk9PlxyXG57XHJcbiAgICByZXR1cm4gX2RhdGFfdGFibGUuc29tZSgoX2RhdGEpPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gX2RhdGFbX2tleV0hPT11bmRlZmluZWQgJiYgX2RhdGFbX2tleV09PV92YWw7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vcGFydGlhbCBnZXRfZmVhdHVyZSwgcmV0dXJucyBmdWxsIGZ1bmN0aW9uIGZvciBkYXRhIG1vZHVsZVxyXG4vL3JlcXVpcmVzIGRhdGFfdGFibGUgKGFycmF5KSBhbmQgbW9kdWxlJ3MgaGFzX2ZlYXR1cmUgZnVuY3Rpb25cclxuLy9yZXR1cm5zIGZ1bGwgbWF0Y2hpbmcgZWxlbWVudCBpbiBwcm92aWRlZCBkYXRhIHRhYmxlXHJcbi8vaGFzX2ZlYXR1cmUgbXVzdCBleGlzdCBpbiBkYXRhIHRhYmxlIG1vZHVsZVxyXG5sZXQgcGFydGlhbF9nZXRfZmVhdHVyZT0oX2RhdGFfdGFibGUsIF9oYXNfZmVhdHVyZSk9Pihfa2V5LCBfdmFsKT0+XHJcbntcclxuICAgIGxldCBmb3VuZF9mZWF0dXJlPW51bGw7XHJcbiAgICBpZihfaGFzX2ZlYXR1cmUoX2tleSxfdmFsKSlcclxuICAgIHtcclxuICAgICAgICBfZGF0YV90YWJsZS5zb21lKChfdGFibGVfdmFsKT0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihfdGFibGVfdmFsW19rZXldPT1fdmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZF9mZWF0dXJlPV90YWJsZV92YWw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sdGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm91bmRfZmVhdHVyZTtcclxufVxyXG5cclxubGV0IHBhcnRpYWxfY2xlYW5lZF9mZWF0dXJlPShfdmFsaWRhdG9yLCBfaGFzX2ZlYXR1cmUsIF9nZXRfZmVhdHVyZSwgX2RlZmF1bHRfZGF0YSwgX25hbWUpPT4oX3BrZXksIF9mZWF0dXJlKT0+XHJcbnsvL2lucHV0OiBwcmltYXJ5IGtleSwgc2VsZWN0ZWQgZmVhdHVyZSwgZmlsdGVyZWQgZGF0YSB0YWJsZVxyXG4gICAgbGV0IGRhdGE9dW5kZWZpbmVkO1xyXG4gICAgbGV0IGtleV9saXN0PVtdO1xyXG4gICAgbGV0IHVwZGF0ZT1mYWxzZTtcclxuICAgIGxldCBhbGVydHM9W107XHJcbiAgICBsZXQganNvbl9kYXRhPUpTT04uc3RyaW5naWZ5KF9mZWF0dXJlKTtcclxuXHJcbiAgICBpZihfZmVhdHVyZT09PXVuZGVmaW5lZCB8fCAhX2hhc19mZWF0dXJlKF9wa2V5LF9mZWF0dXJlW19wa2V5XSkpXHJcbiAgICB7XHJcbiAgICAgICAgZGF0YT1fZGVmYXVsdF9kYXRhO1xyXG4gICAgICAgIGtleV9saXN0PVtkYXRhW19wa2V5XV07XHJcbiAgICAgICAgdXBkYXRlPXRydWU7XHJcbiAgICAgICAgYWxlcnRzLnB1c2goX25hbWUrXCI6IFwiK2pzb25fZGF0YSk7XHJcbiAgICAgICAgYWxlcnRzLnB1c2goXCIqKioqIEludmFsaWQgZGF0YS4gUmVzZXRpbmcgdG8gZGVmYXVsdC4gKioqKlwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIV92YWxpZGF0b3IoX2ZlYXR1cmUpKVxyXG4gICAge1xyXG4gICAgICAgIGRhdGE9SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShfZ2V0X2ZlYXR1cmUoX3BrZXksX2ZlYXR1cmVbX3BrZXldKSkpO1xyXG4gICAgICAgIGtleV9saXN0PVtkYXRhW19wa2V5XV07XHJcbiAgICAgICAgdXBkYXRlPXRydWU7XHJcbiAgICAgICAgYWxlcnRzLnB1c2goX25hbWUrXCI6IFwiK2pzb25fZGF0YSk7XHJcbiAgICAgICAgYWxlcnRzLnB1c2goXCIqKioqIEludmFsaWQgZGF0YS4gUmVzZXRpbmcuICoqKipcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgZGF0YT1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KF9mZWF0dXJlKSk7XHJcbiAgICAgICAga2V5X2xpc3Q9W2RhdGFbX3BrZXldXTtcclxuICAgICAgICB1cGRhdGU9ZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2RhdGE6ZGF0YSwga2V5X2xpc3Q6a2V5X2xpc3QsIHVwZGF0ZTp1cGRhdGUsIGFsZXJ0czphbGVydHN9O1xyXG59XHJcblxyXG5leHBvcnQge3BhcnRpYWxfdmFsaWRhdGUsIHBhcnRpYWxfaGFzX2ZlYXR1cmUsIHBhcnRpYWxfZ2V0X2ZlYXR1cmUsIHBhcnRpYWxfY2xlYW5lZF9mZWF0dXJlfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///706d\n')},"7f35":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "damage_data_table", function() { return damage_data_table; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "damage_validate", function() { return damage_validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has_feature", function() { return has_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_feature", function() { return get_feature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleaned_feature", function() { return cleaned_feature; });\n/* harmony import */ var _data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("706d");\n//data table module, raw data output for re-use in non-vue-component formats\n //create new damage_data_table\n\nvar damage_data_table = Array.apply({}, Array(20)).map(function (_el, _index) {\n  var damage = _index + 1;\n  var cost = damage / 10;\n  var range = Math.round(Math.sqrt(damage) * 3.5);\n  return {\n    damage: damage,\n    cost: cost,\n    range: range\n  };\n});\nvar data_table_keys = ["damage", "cost", "range"];\nvar default_data = {\n  damage: 1,\n  cost: 0.1,\n  range: 4\n}; //data validator for damage_data_table\n//call partial_validate with appropriate data for full validate\n\nvar damage_validate = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_validate */ "d"])(damage_data_table, data_table_keys); //completed function for checking if data has data\n\nvar has_feature = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_has_feature */ "c"])(damage_data_table); //completed function for returning matching data\n\nvar get_feature = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_get_feature */ "b"])(damage_data_table, has_feature); //completed function for returning cleaed data\n\nvar cleaned_feature = Object(_data_table_modules_universal_mek_partial_function_data_module__WEBPACK_IMPORTED_MODULE_0__[/* partial_cleaned_feature */ "a"])(damage_validate, has_feature, get_feature, default_data, "Mek_Missile-Damage");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YV90YWJsZV9tb2R1bGVzL21la19taXNzaWxlL21la19taXNzaWxlLWRhbWFnZS1kYXRhLW1vZHVsZS5qcz83ZjM1Il0sIm5hbWVzIjpbImRhbWFnZV9kYXRhX3RhYmxlIiwiQXJyYXkiLCJhcHBseSIsIm1hcCIsIl9lbCIsIl9pbmRleCIsImRhbWFnZSIsImNvc3QiLCJyYW5nZSIsIk1hdGgiLCJyb3VuZCIsInNxcnQiLCJkYXRhX3RhYmxlX2tleXMiLCJkZWZhdWx0X2RhdGEiLCJkYW1hZ2VfdmFsaWRhdGUiLCJwYXJ0aWFsX3ZhbGlkYXRlIiwiaGFzX2ZlYXR1cmUiLCJwYXJ0aWFsX2hhc19mZWF0dXJlIiwiZ2V0X2ZlYXR1cmUiLCJwYXJ0aWFsX2dldF9mZWF0dXJlIiwiY2xlYW5lZF9mZWF0dXJlIiwicGFydGlhbF9jbGVhbmVkX2ZlYXR1cmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FJQTs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBQ0MsS0FBSyxDQUFDQyxLQUFOLENBQVksRUFBWixFQUFnQkQsS0FBSyxDQUFDLEVBQUQsQ0FBckIsRUFBMkJFLEdBQTNCLENBQStCLFVBQUNDLEdBQUQsRUFBS0MsTUFBTCxFQUNyRDtBQUNJLE1BQUlDLE1BQU0sR0FBQ0QsTUFBTSxHQUFDLENBQWxCO0FBQ0EsTUFBSUUsSUFBSSxHQUFDRCxNQUFNLEdBQUMsRUFBaEI7QUFDQSxNQUFJRSxLQUFLLEdBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLElBQUwsQ0FBVUwsTUFBVixJQUFrQixHQUE3QixDQUFWO0FBQ0EsU0FBTztBQUFDQSxVQUFNLEVBQUNBLE1BQVI7QUFBZUMsUUFBSSxFQUFDQSxJQUFwQjtBQUF5QkMsU0FBSyxFQUFDQTtBQUEvQixHQUFQO0FBQ0gsQ0FOcUIsQ0FBdEI7QUFPQSxJQUFJSSxlQUFlLEdBQUMsQ0FBQyxRQUFELEVBQVUsTUFBVixFQUFpQixPQUFqQixDQUFwQjtBQUNBLElBQUlDLFlBQVksR0FBQztBQUFDUCxRQUFNLEVBQUMsQ0FBUjtBQUFVQyxNQUFJLEVBQUMsR0FBZjtBQUFtQkMsT0FBSyxFQUFDO0FBQXpCLENBQWpCLEMsQ0FFQTtBQUNBOztBQUNBLElBQUlNLGVBQWUsR0FBQ0MsK0hBQWdCLENBQUNmLGlCQUFELEVBQW9CWSxlQUFwQixDQUFwQyxDLENBRUE7O0FBQ0EsSUFBSUksV0FBVyxHQUFDQyxrSUFBbUIsQ0FBQ2pCLGlCQUFELENBQW5DLEMsQ0FFQTs7QUFDQSxJQUFJa0IsV0FBVyxHQUFDQyxrSUFBbUIsQ0FBQ25CLGlCQUFELEVBQW9CZ0IsV0FBcEIsQ0FBbkMsQyxDQUVBOztBQUNBLElBQUlJLGVBQWUsR0FDZkMsc0lBQXVCLENBQUNQLGVBQUQsRUFBa0JFLFdBQWxCLEVBQStCRSxXQUEvQixFQUE0Q0wsWUFBNUMsRUFBMEQsb0JBQTFELENBRDNCIiwiZmlsZSI6IjdmMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RhdGEgdGFibGUgbW9kdWxlLCByYXcgZGF0YSBvdXRwdXQgZm9yIHJlLXVzZSBpbiBub24tdnVlLWNvbXBvbmVudCBmb3JtYXRzXHJcbmltcG9ydCB7cGFydGlhbF92YWxpZGF0ZSwgcGFydGlhbF9oYXNfZmVhdHVyZSwgcGFydGlhbF9nZXRfZmVhdHVyZSwgcGFydGlhbF9jbGVhbmVkX2ZlYXR1cmV9IFxyXG4gICAgZnJvbSBcIkAvZGF0YV90YWJsZV9tb2R1bGVzL3VuaXZlcnNhbC9tZWtfcGFydGlhbC1mdW5jdGlvbi1kYXRhLW1vZHVsZVwiO1xyXG5cclxuLy9jcmVhdGUgbmV3IGRhbWFnZV9kYXRhX3RhYmxlXHJcbmxldCBkYW1hZ2VfZGF0YV90YWJsZT1BcnJheS5hcHBseSh7fSwgQXJyYXkoMjApKS5tYXAoKF9lbCxfaW5kZXgpPT5cclxue1xyXG4gICAgbGV0IGRhbWFnZT1faW5kZXgrMTtcclxuICAgIGxldCBjb3N0PWRhbWFnZS8xMDtcclxuICAgIGxldCByYW5nZT1NYXRoLnJvdW5kKE1hdGguc3FydChkYW1hZ2UpKjMuNSk7XHJcbiAgICByZXR1cm4ge2RhbWFnZTpkYW1hZ2UsY29zdDpjb3N0LHJhbmdlOnJhbmdlfTtcclxufSk7XHJcbmxldCBkYXRhX3RhYmxlX2tleXM9W1wiZGFtYWdlXCIsXCJjb3N0XCIsXCJyYW5nZVwiXTtcclxubGV0IGRlZmF1bHRfZGF0YT17ZGFtYWdlOjEsY29zdDowLjEscmFuZ2U6NH07XHJcblxyXG4vL2RhdGEgdmFsaWRhdG9yIGZvciBkYW1hZ2VfZGF0YV90YWJsZVxyXG4vL2NhbGwgcGFydGlhbF92YWxpZGF0ZSB3aXRoIGFwcHJvcHJpYXRlIGRhdGEgZm9yIGZ1bGwgdmFsaWRhdGVcclxubGV0IGRhbWFnZV92YWxpZGF0ZT1wYXJ0aWFsX3ZhbGlkYXRlKGRhbWFnZV9kYXRhX3RhYmxlLCBkYXRhX3RhYmxlX2tleXMpO1xyXG5cclxuLy9jb21wbGV0ZWQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGRhdGEgaGFzIGRhdGFcclxubGV0IGhhc19mZWF0dXJlPXBhcnRpYWxfaGFzX2ZlYXR1cmUoZGFtYWdlX2RhdGFfdGFibGUpO1xyXG5cclxuLy9jb21wbGV0ZWQgZnVuY3Rpb24gZm9yIHJldHVybmluZyBtYXRjaGluZyBkYXRhXHJcbmxldCBnZXRfZmVhdHVyZT1wYXJ0aWFsX2dldF9mZWF0dXJlKGRhbWFnZV9kYXRhX3RhYmxlLCBoYXNfZmVhdHVyZSk7XHJcblxyXG4vL2NvbXBsZXRlZCBmdW5jdGlvbiBmb3IgcmV0dXJuaW5nIGNsZWFlZCBkYXRhXHJcbmxldCBjbGVhbmVkX2ZlYXR1cmU9XHJcbiAgICBwYXJ0aWFsX2NsZWFuZWRfZmVhdHVyZShkYW1hZ2VfdmFsaWRhdGUsIGhhc19mZWF0dXJlLCBnZXRfZmVhdHVyZSwgZGVmYXVsdF9kYXRhLCBcIk1la19NaXNzaWxlLURhbWFnZVwiKTtcclxuXHJcbmV4cG9ydCB7ZGFtYWdlX2RhdGFfdGFibGUsIGRhbWFnZV92YWxpZGF0ZSwgaGFzX2ZlYXR1cmUsIGdldF9mZWF0dXJlLCBjbGVhbmVkX2ZlYXR1cmV9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7f35\n')}}]);