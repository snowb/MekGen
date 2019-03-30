//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new range_mod_data_table
let range_mod_data_table=[];
let raw_range_mod_data_table=
[//need id prop to differentiate between Mine and Bomb
    {range_mod:0,cost:0.5,range:0},
    {range_mod:0.25,cost:0.62,range:0.25*3},
    {range_mod:0.5,cost:0.75,range:0.5*3},
    {range_mod:0.75,cost:0.88,range:0.75*3},
    {range_mod:1,cost:1,range:1*3},
    {range_mod:1.25,cost:1.12,range:1.25*3},
    {range_mod:1.5,cost:1.25,range:1.5*3},
    {range_mod:1.75,cost:1.38,range:1.75*3},
    {range_mod:2,cost:1.5,range:2*3},
    {range_mod:2.5,cost:1.75,range:2.5*3},
    {range_mod:3,cost:2,range:3*3}
];
let data_cached=false;
let create_range_mod_data_table=(_base_range)=>
{
    let base_range=_base_range===undefined?3:_base_range;
    range_mod_data_table=raw_range_mod_data_table.map((_elem)=>
    {
        _elem.range=_elem.range_mod*base_range;
        return _elem;
    });
    data_cached=false;
};
create_range_mod_data_table(3);
let data_table_keys=["range_modifier","cost","range"];
let default_data={range_mod:1,cost:1,range:3};

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
    partial_cleaned_feature(range_mod_validate, has_feature, get_feature, default_data, "Mek_Projectile-Range-Mod");

export {range_mod_data_table, range_mod_validate, has_feature, get_feature, cleaned_feature, create_range_mod_data_table};
