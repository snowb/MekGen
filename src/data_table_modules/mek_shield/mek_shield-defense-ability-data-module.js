//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new da_data_table
let da_data_table=
[
    {da:-4,cost:0.6,name:"Micro"},
    {da:-3,cost:0.8,name:"Small"},
    {da:-2,cost:1,name:"Medium"},
    {da:-1,cost:1.25,name:"Large"},
    {da:0,cost:1.5,name:"Huge"},
];
let data_table_keys=["da","cost"];
let default_data={da:-2,cost:1};

//data validator for da_data_table
//call partial_validate with appropriate data for full validate
let da_validate=partial_validate(da_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(da_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(da_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(da_validate, has_feature, get_feature, default_data, "Mek_Shield-Defense-Accuracy");

export {da_data_table, da_validate, has_feature, get_feature, cleaned_feature};
