//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new wide_angle_data_table
let wide_angle_data_table=
[
    {angle:"__NIL__",cost:1},
    {angle:"__HEX__",cost:2},
    {angle:60,cost:3},
    {angle:180,cost:5},
    {angle:300,cost:7},
    {angle:360,cost:9},
];
let data_table_keys=["angle","cost"];
let default_data={angle:"__NIL__",cost:1};

//data validator for wide_angle_data_table
//call partial_validate with appropriate data for full validate
let wide_angle_validate=partial_validate(wide_angle_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(wide_angle_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(wide_angle_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(wide_angle_validate, has_feature, get_feature, default_data, "Mek_Beam-Wide-Angle-Time");

export {wide_angle_data_table, wide_angle_validate, has_feature, get_feature, cleaned_feature};
