//data table module, raw data output for re-use in non-vue-component formats
import servo_classes_data from "@/data_table_modules/universal/servo_classes_data.js";
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new locomotion_table based on servo_classes_data
let default_data={name:"Superlight",cost:1,kills:1};
let raw_locomotion_table=servo_classes_data.map((_val)=>
{
    return {name: _val.name, cost: _val.code, kills:_val.code};
});
let locomotion_data_table=raw_locomotion_table;
let data_table_keys=["name","cost","kills"];

let data_cached=false;

let create_data_table=(_type)=>
{
    data_cached=false;
    if(_type=="Treads")
    {
        locomotion_data_table=servo_classes_data.map((_val)=>
        {
            return {name: _val.name, cost: _val.code*2, kills:_val.code*2};
        });
        return;
    }
    locomotion_data_table=JSON.parse(JSON.stringify(raw_locomotion_table));
};
let cached_validate=partial_validate(raw_locomotion_table, data_table_keys);
//data validator for locomotion_data_table
//call partial_validate with appropriate data for full validate
let feature_validate=(_data)=>
{
    if(data_cached)
    {
        return cached_validate(_data);
    }
    data_cached=true;
    cached_validate=partial_validate(locomotion_data_table, data_table_keys);
    return cached_validate(_data);
};

//completed function for checking if data has data
let has_feature=(_pkey,_data)=>
{
    return partial_has_feature(locomotion_data_table)(_pkey,_data);
};

//completed function for returning matching data
let get_feature=(_pkey,_data)=>
{
    return partial_get_feature(locomotion_data_table, has_feature)(_pkey,_data);
};

let cleaned_feature=
    partial_cleaned_feature(feature_validate, has_feature, get_feature, default_data, "Mek_Locomotion");

export {locomotion_data_table, feature_validate, has_feature, get_feature, cleaned_feature, create_data_table};
