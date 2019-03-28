//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new range_mod_data_table
let range_mod_data_table=[];
let raw_range_mod_data_table=
[//need id prop to differentiate between Mine and Bomb
    {range_mod:0,cost:0.5,range:0,type:"Mine",id:1},
    {range_mod:0,cost:0.5,range:0,type:"Bomb",id:2},
    {range_mod:0.25,cost:0.62,range:0.25*4,id:3},
    {range_mod:0.5,cost:0.75,range:0.5*4,id:4},
    {range_mod:0.75,cost:0.88,range:0.75*4,id:5},
    {range_mod:1,cost:1,range:1*4,id:6},
    {range_mod:1.25,cost:1.12,range:1.25*4,id:7},
    {range_mod:1.5,cost:1.25,range:1.5*4,id:8},
    {range_mod:1.75,cost:1.38,range:1.75*4,id:9},
    {range_mod:2,cost:1.5,range:2*4,id:10},
    {range_mod:5,cost:3,range:5*4,id:11},
    {range_mod:10,cost:5.5,range:10*4,id:12},
    {range_mod:30,cost:15.5,range:30*4,id:13},
    {range_mod:50,cost:25.5,range:50*4,id:14}
];
let data_cached=false;
let create_range_mod_data_table=(_base_range)=>
{
    let base_range=_base_range===undefined?4:_base_range;
    range_mod_data_table=raw_range_mod_data_table.map((_elem)=>
    {
        _elem.range=_elem.range_mod*base_range;
        return _elem;
    });
    data_cached=false;
};
create_range_mod_data_table(4);
let data_table_keys=["range_modifier","cost","type","id"];
let default_data={range_mod:1,cost:1,range:4,id:6};

/* //data validator for range_mod_data_table  
//call partial_validate with appropriate data for full validate
let range_mod_validate=()=>
{//as function to recompute for updated range_mod_data_table   
    return partial_validate(range_mod_data_table, data_table_keys);
}
 */
let cached_validate=partial_validate(range_mod_data_table, data_table_keys);
//data validator for range_mod_data_table
//call partial_validate with appropriate data for full validate
let range_mod_validate=(_data)=>
{
    if(data_cached)
    {
        return cached_validate(_data);
    }
    data_cached=true;
    cached_validate=partial_validate(range_mod_data_table, data_table_keys);
    return cached_validate(_data);
}

//completed function for checking if data has data
let has_feature=partial_has_feature(range_mod_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(range_mod_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(range_mod_validate, has_feature, get_feature, default_data, "Mek_Shield-Range-Mod");

export {range_mod_data_table, range_mod_validate, has_feature, get_feature, cleaned_feature, create_range_mod_data_table};
