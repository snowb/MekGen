//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new shots_data_table
let raw_shots_data_table=
[
    {shots:0,cost:0.33},
    {shots:1,cost:0.5},
    {shots:2,cost:0.6},
    {shots:3,cost:0.7},
    {shots:5,cost:0.8},
    {shots:10,cost:0.9},
    {shots:"__INFINITY__",cost:1},
    {shots:15,cost:1},
];
let shots_data_table=raw_shots_data_table;
let data_cached=false;
let data_table_keys=["shots","cost"];
let default_data={shots:"__INFINITY__",cost:1};

let filter_shots_data_table=(_mag_fed)=>
{
    if(!_mag_fed)
    {
        shots_data_table=raw_shots_data_table.filter((_val)=>
        {
            return _val.shots!=15;
        });
        default_data={shots:"__INFINITY__",cost:1};
    }
    else
    {
        shots_data_table=raw_shots_data_table.filter((_val)=>
        {
            return _val.shots!=0 && _val.shots!="__INFINITY__";
        });
        default_data={shots:15,cost:1};
    }
    //reset all functions for new table
    has_feature=partial_has_feature(shots_data_table);
    get_feature=partial_get_feature(shots_data_table, has_feature);
    cleaned_feature=
        partial_cleaned_feature(shots_validate, has_feature, get_feature, default_data, "Mek_Beam-Shots");
    data_cached=false;
};
filter_shots_data_table(false);

let cached_validate=partial_validate(shots_data_table, data_table_keys);
//data validator for shots_data_table
//call partial_validate with appropriate data for full validate
let shots_validate=(_data)=>
{
    if(data_cached)
    {
        return cached_validate(_data);
    }
    data_cached=true;
    cached_validate=partial_validate(shots_data_table, data_table_keys);
    return cached_validate(_data);
}

//completed function for checking if data has data
let has_feature=partial_has_feature(shots_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(shots_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(shots_validate, has_feature, get_feature, default_data, "Mek_Beam-Shots");

export {shots_data_table, shots_validate, has_feature, get_feature, cleaned_feature, filter_shots_data_table};
