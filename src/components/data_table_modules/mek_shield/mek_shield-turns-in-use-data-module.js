//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new turns_data_table
let turns_data_table=
[
    {time:1,cost:0.3},
    {time:2,cost:0.4},
    {time:3,cost:0.5},
    {time:4,cost:0.6},
    {time:5,cost:0.7},
    {time:7,cost:0.8},
    {time:10,cost:0.9},
    {time:Infinity,cost:1}
];
let data_table_keys=["time","cost"];
let default_data={time:"X",cost:1};

//data validator for turns_data_table
//call partial_validate with appropriate data for full validate
let turns_validate=partial_validate(turns_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(turns_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(turns_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(turns_validate, has_feature, get_feature, default_data, "Mek_Shield-Turns-In-Use");

export {turns_data_table, turns_validate, has_feature, get_feature, cleaned_feature};
