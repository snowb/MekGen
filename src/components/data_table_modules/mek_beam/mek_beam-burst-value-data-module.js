//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new burst_value_data_table
let burst_value_data_table=
[
    {burst_value:1,cost:1},
    {burst_value:2,cost:1.5},
    {burst_value:3,cost:2},
    {burst_value:4,cost:2.5},
    {burst_value:5,cost:3},
    {burst_value:6,cost:3.5},
    {burst_value:7,cost:4},
    {burst_value:8,cost:4.5},
    {burst_value:"__INFINITY__",cost:5},
];
let data_table_keys=["burst_value","cost"];
let default_data={burst_value:1,cost:1};

//data validator for burst_value_data_table
//call partial_validate with appropriate data for full validate
let burst_value_validate=partial_validate(burst_value_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(burst_value_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(burst_value_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(burst_value_validate, has_feature, get_feature, default_data, "Mek_Beam-Burst_Value");

export {burst_value_data_table, burst_value_validate, has_feature, get_feature, cleaned_feature};
