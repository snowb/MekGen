//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new reset_data_table
let reset_data_table=
[
    {time:"__NIL__",cost:0.5},
    {time:3,cost:0.75},
    {time:2,cost:1.0},
    {time:1,cost:1.5},
    {time:0,cost:2.0}
];
let data_table_keys=["time","cost"];
let default_data={time:2,cost:1.0};

//data validator for reset_data_table
//call partial_validate with appropriate data for full validate
let reset_validate=partial_validate(reset_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(reset_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(reset_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(reset_validate, has_feature, get_feature, default_data, "Mek_Shield-Reset-Time");

export {reset_data_table, reset_validate, has_feature, get_feature, cleaned_feature};
