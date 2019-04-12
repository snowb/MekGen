//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new smart_data_table
let smart_data_table=
[
    {smart:"__NIL__",cost:1},
    {smart:1,cost:2.5},
    {smart:2,cost:3},
    {smart:3,cost:3.5},
    {smart:4,cost:4},
];
let data_table_keys=["smart","cost"];
let default_data={smart:"__NIL__",cost:1};

//data validator for smart_data_table
//call partial_validate with appropriate data for full validate
let smart_validate=partial_validate(smart_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(smart_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(smart_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(smart_validate, has_feature, get_feature, default_data, "Mek_Missile-Smart");

export {smart_data_table, smart_validate, has_feature, get_feature, cleaned_feature};
