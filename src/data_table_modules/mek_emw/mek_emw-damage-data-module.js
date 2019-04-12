//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new damage_data_table
let damage_data_table=Array.apply({}, Array(20)).map((_el,_index)=>
{
    let damage=_index+1;
    let cost=damage;
    return {damage:damage,cost:cost};
});
let data_table_keys=["damage","cost"];
let default_data={damage:1,cost:1};

//data validator for damage_data_table
//call partial_validate with appropriate data for full validate
let damage_validate=partial_validate(damage_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(damage_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(damage_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(damage_validate, has_feature, get_feature, default_data, "Mek_EMW-Damage");

export {damage_data_table, damage_validate, has_feature, get_feature, cleaned_feature};
