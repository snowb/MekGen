//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new damage_data_table
let raw_damage_data_table=Array.apply({}, Array(20)).map((_el,_index)=>
{
    let damage=_index+1;
    let cost=damage;
    return {damage:damage,cost:cost};
});
let data_table_keys=["damage","cost"];
let default_data={damage:1,cost:1};

let damage_data_table=JSON.parse(JSON.stringify(raw_damage_data_table));

let data_cached=false;
//update damage data table
let create_damage_data_table=(_is_nonvariable_beam_shield)=>
{
    if(!_is_nonvariable_beam_shield)
    {
        damage_data_table=JSON.parse(JSON.stringify(raw_damage_data_table));
        default_data={damage:1,cost:1};
    }
    else
    {
        damage_data_table=raw_damage_data_table.map((_elem)=>
        {
            let newElem={damage:_elem.damage/2, cost:_elem.cost};
            return newElem;
        });
        default_data={damage:0.5,cost:1};
    }
    data_cached=false;
};

let cached_validate=partial_validate(damage_data_table, data_table_keys);
//data validator for damage_data_table
//call partial_validate with appropriate data for full validate
let damage_validate=(_data)=>
{
    if(data_cached)
    {
        return cached_validate(_data);
    }
    data_cached=true;
    cached_validate=partial_validate(damage_data_table, data_table_keys);
    return cached_validate(_data);
};


//completed function for checking if data has data
let has_feature=(_pkey,_data)=>
{
    return partial_has_feature(damage_data_table)(_pkey,_data);
};

//completed function for returning matching data
let get_feature=(_pkey,_data)=>
{
    return partial_get_feature(damage_data_table, has_feature)(_pkey,_data);
};

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(damage_validate, has_feature, get_feature, default_data, "Mek_EMW-Damage");

export {damage_data_table, damage_validate, has_feature, get_feature, cleaned_feature, create_damage_data_table};
