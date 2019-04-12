//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new attack_factor_data_table
let attack_factor_data_table=
[
    {attack_factor:"__NIL__",cost:1},
    {attack_factor:1,cost:1.5},
    {attack_factor:2,cost:2},
    {attack_factor:3,cost:2.5},
    {attack_factor:4,cost:3},
    {attack_factor:5,cost:3.5}
];
let data_table_keys=["attack_factor","cost"];
let default_data={attack_factor:0,cost:1};

//data validator for attack_factor_data_table
//call partial_validate with appropriate data for full validate
let attack_factor_validate=partial_validate(attack_factor_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(attack_factor_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(attack_factor_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(attack_factor_validate, has_feature, get_feature, default_data, "Mek_EMW-Attack-Factor");

export {attack_factor_data_table, attack_factor_validate, has_feature, get_feature, cleaned_feature};
