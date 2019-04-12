//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new ram_data_table
let ram_data_table=
[
    {absorption:0,cost:1.0,armor_penalty:0},
    {absorption:0.2,cost:1.5,armor_penalty:0},
    {absorption:0.25,cost:1.8,armor_penalty:0.2},
    {absorption:0.33,cost:2.2,armor_penalty:0.25},
    {absorption:0.5,cost:2.5,armor_penalty:0.33},
];
let default_data={absorption:0,cost:1.0,armor_penalty:0};
let data_table_keys=["absorption","cost","armor_penalty"];

//data validator for ram_data_table
//call partial_validate with appropriate data for full validate
let ram_validate=partial_validate(ram_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(ram_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(ram_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(ram_validate, has_feature, get_feature, default_data, "Mek_RAM-Type");

export {ram_data_table, ram_validate, has_feature, get_feature, cleaned_feature};
