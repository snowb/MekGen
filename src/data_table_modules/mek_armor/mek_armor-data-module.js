//data table module, raw data output for re-use in non-vue-component formats
import servo_classes_data from "@/data_table_modules/universal/servo_classes_data.js";
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new armor_table based on servo_classes_data
let default_data={name:"None",cost:0,stopping_power:0,code:0};
let raw_armor_table=[default_data];

let new_armor_table=servo_classes_data.map((_val)=>
{
    return {name: _val.name, cost: _val.code, stopping_power: _val.code, code:_val.code};
});
raw_armor_table=raw_armor_table.concat(new_armor_table);
let data_table_keys=["name","cost","stopping_power","code"];
let data_cached=false;
let armor_data_table=null;

let filter_data_table=(_servo_class)=>
{
    data_cached=false;
    armor_data_table=raw_armor_table.filter((_val)=>
    {
        return _val.code<=_servo_class;
    });
};

let cached_validate=partial_validate(raw_armor_table, data_table_keys);
//data validator for feature_data_table
//call partial_validate with appropriate data for full validate
let armor_validate=(_data)=>
{
    if(data_cached)
    {
        return cached_validate(_data);
    }
    data_cached=true;
    cached_validate=partial_validate(armor_data_table, data_table_keys);
    return cached_validate(_data);
}

//completed function for checking if data has data
let has_feature=(_pkey,_data)=>
{
    return partial_has_feature(armor_data_table)(_pkey,_data);
}

//completed function for returning matching data
let get_feature=(_pkey,_data)=>
{
    return partial_get_feature(armor_data_table, has_feature)(_pkey,_data);
}

let cleaned_feature=
    partial_cleaned_feature(armor_validate, has_feature, get_feature, default_data, "Mek_Armor");

export {armor_data_table, armor_validate, has_feature, get_feature, cleaned_feature, filter_data_table};
