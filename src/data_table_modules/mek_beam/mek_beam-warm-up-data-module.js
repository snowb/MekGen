//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new warm_up_data_table
let warm_up_data_table=
[
    {time:0,cost:1},
    {time:1,cost:0.9},
    {time:2,cost:0.7},
    {time:3,cost:0.6},
];
let data_table_keys=["time","cost"];
let default_data={time:0,cost:1};

//data validator for warm_up_data_table
//call partial_validate with appropriate data for full validate
let accuracy_validate=partial_validate(warm_up_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(warm_up_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(warm_up_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(accuracy_validate, has_feature, get_feature, default_data, "Mek_Beam-Warm-Up-Time");

export {warm_up_data_table, accuracy_validate, has_feature, get_feature, cleaned_feature};
