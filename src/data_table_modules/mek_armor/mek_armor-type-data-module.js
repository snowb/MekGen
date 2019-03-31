//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new armor_type_data_table
let armor_type_data_table=
[
    {type:"Ablative",damage_coefficient:0,cost:0.5},
    {type:"Standard",damage_coefficient:1,cost:1},
    {type:"Alpha",damage_coefficient:2,cost:1.25},
    {type:"Beta",damage_coefficient:4,cost:1.5},
    {type:"Gamma",damage_coefficient:8,cost:2},
];
let default_data={type:"Standard",damage_coefficient:1,cost:1};
let data_table_keys=["type","damage_coefficient","cost"];

//data validator for armor_type_data_table
//call partial_validate with appropriate data for full validate
let armor_type_validate=partial_validate(armor_type_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(armor_type_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(armor_type_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(armor_type_validate, has_feature, get_feature, default_data, "Mek_Armor-Type");

export {armor_type_data_table, armor_type_validate, has_feature, get_feature, cleaned_feature};
