//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new binder_data_table
let binder_data_table=[];
let raw_binder_data_table=
[
    {stopping_power_modifier:0,cost:1,space:0},
    {stopping_power_modifier:0.25,cost:1.1,space:0},
    {stopping_power_modifier:0.33,cost:1.2,space:0},
    {stopping_power_modifier:0.50,cost:1.3,space:0},
    {stopping_power_modifier:0.66,cost:1.2,space:0},
    {stopping_power_modifier:0.75,cost:1.1,space:0}
];

let create_binder_data_table=function(_base_stopping_power)
{
    let base_stopping_power=_base_stopping_power===undefined?5:_base_stopping_power;
    binder_data_table=raw_binder_data_table.map((_elem)=>
    {
        let space=Math.round((base_stopping_power*_elem.stopping_power_modifier * 2)*10)/10;
        return {
            stopping_power_modifier:_elem.stopping_power_modifier,
            cost:_elem.cost,
            space:space
        }
    });
};
create_binder_data_table(5);
let data_table_keys=["stopping_power_modifier","cost","space"];
let default_data={stopping_power_modifier:0,cost:1,space:0};

//data validator for binder_data_table  
//call partial_validate with appropriate data for full validate
let binder_validate=()=>
{//as function to recompute for updated binder_data_table   
    return partial_validate(binder_data_table, data_table_keys);
}

//completed function for checking if data has data
let has_feature=partial_has_feature(binder_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(binder_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(binder_validate, has_feature, get_feature, default_data, "Mek_Shield-Binder");

export {binder_data_table, binder_validate, has_feature, get_feature, cleaned_feature, create_binder_data_table};
