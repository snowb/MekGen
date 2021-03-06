//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new binder_data_table
let binder_data_table=[];
let raw_binder_data_table=
[
    {stopping_power_modifier:0,cost:1,space:0,new_stopping_power:0},
    {stopping_power_modifier:0.25,cost:1.1,space:0,new_stopping_power:0},
    {stopping_power_modifier:0.33,cost:1.2,space:0,new_stopping_power:0},
    {stopping_power_modifier:0.50,cost:1.3,space:0,new_stopping_power:0},
    {stopping_power_modifier:0.66,cost:1.2,space:0,new_stopping_power:0},
    {stopping_power_modifier:0.75,cost:1.1,space:0,new_stopping_power:0}
];
let data_table_keys=["stopping_power_modifier","cost","space","new_stopping_power"];
let default_data={stopping_power_modifier:0,cost:1,space:0,new_stopping_power:5};
let data_cached=false;
let create_binder_data_table=function(_base_stopping_power)
{
    data_cached=false;
    let base_stopping_power=_base_stopping_power===undefined?5:_base_stopping_power;
    binder_data_table=raw_binder_data_table.map((_elem)=>
    {
        let new_stopping_power=base_stopping_power - Math.ceil(base_stopping_power*_elem.stopping_power_modifier);
        let space = (base_stopping_power - new_stopping_power)*2;
        return {
            stopping_power_modifier:_elem.stopping_power_modifier,
            cost:_elem.cost,
            space:space,
            new_stopping_power:new_stopping_power
        }
    });
};
create_binder_data_table(5);


let cached_validate=partial_validate(binder_data_table, data_table_keys);
//data validator for binder_data_table  
//call partial_validate with appropriate data for full validate
let binder_validate=(_data)=>
{//as function to recompute for updated binder_data_table
    if(data_cached)
    {
        return cached_validate(_data);
    }
    data_cached=true;
    cached_validate=partial_validate(binder_data_table, data_table_keys);
    return cached_validate(_data);
}

//completed function for checking if data has data
let has_feature=(_pkey,_data)=>
{
    return partial_has_feature(binder_data_table)(_pkey,_data);
};

//completed function for returning matching data
let get_feature=(_pkey,_data)=>
{
    return partial_get_feature(binder_data_table, has_feature)(_pkey,_data);
};

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(binder_validate, has_feature, get_feature, default_data, "Mek_Shield-Binder");

export {binder_data_table, binder_validate, has_feature, get_feature, cleaned_feature, create_binder_data_table};
