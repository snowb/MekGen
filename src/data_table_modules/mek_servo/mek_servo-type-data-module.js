//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new servo_data_table
let servo_data_table=
[
    {type:"Torso"},
    {type:"Head"},
    {type:"Arm"},
    {type:"Leg"},
    {type:"Wing"},
    {type:"Tail"},
    {type:"Pod"},
];
let data_table_keys=["type"];
let default_data={type:"Torso"};

//data validator for servo_data_table
//call partial_validate with appropriate data for full validate
let servo_type_validate=partial_validate(servo_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(servo_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(servo_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(servo_type_validate, has_feature, get_feature, default_data, "Mek_Servo-Type");

export {servo_data_table, servo_type_validate, has_feature, get_feature, cleaned_feature};
