//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new skill_data_table
let skill_data_table=
[
    {skill:6,cost:1},
    {skill:9,cost:1.3},
    {skill:12,cost:1.6},
    {skill:15,cost:1.9},
    {skill:18,cost:2.2},
    {skill:20,cost:2.5},
];
let data_table_keys=["skill","cost"];
let default_data={skill:6,cost:1};

//data validator for skill_data_table
//call partial_validate with appropriate data for full validate
let skill_validate=partial_validate(skill_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(skill_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(skill_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(skill_validate, has_feature, get_feature, default_data, "Mek_Missile-Skill");

export {skill_data_table, skill_validate, has_feature, get_feature, cleaned_feature};
