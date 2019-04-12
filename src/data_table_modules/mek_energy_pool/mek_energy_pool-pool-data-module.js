//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new energy_pool_data_table
let energy_pool_data_table=
[
    {cost:10,power_available:0,max_power:50,damage_capacity:5},
    {cost:10,power_available:5,max_power:25,damage_capacity:4},
    {cost:20,power_available:10,max_power:40,damage_capacity:7},
    {cost:30,power_available:15,max_power:45,damage_capacity:8},
    {cost:40,power_available:20,max_power:50,damage_capacity:10},
    {cost:50,power_available:25,max_power:55,damage_capacity:11},
    {cost:60,power_available:30,max_power:60,damage_capacity:13},
];
let data_table_keys=["power_available","cost","max_power","damage_capacity"];
let default_data={cost:10,power_available:0,max_power:50,damage_capacity:5};

//data validator for energy_pool_data_table
//call partial_validate with appropriate data for full validate
let energy_pool_validate=partial_validate(energy_pool_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(energy_pool_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(energy_pool_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(energy_pool_validate, has_feature, get_feature, default_data, "Mek_Energy_Pool-Pool");

export {energy_pool_data_table, energy_pool_validate, has_feature, get_feature, cleaned_feature};
