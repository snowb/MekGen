//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new accuracy_data_table
let accuracy_data_table=
[
    {accuracy:-2,cost:0.6},
    {accuracy:-1,cost:0.8},
    {accuracy:0,cost:0.9},
    {accuracy:1,cost:1.0},
    {accuracy:2,cost:1.5},
    {accuracy:3,cost:2.0},
];
let data_table_keys=["accuracy","cost"];
let default_data={accuracy:1,cost:1};

//data validator for accuracy_data_table
//call partial_validate with appropriate data for full validate
let accuracy_validate=partial_validate(accuracy_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(accuracy_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(accuracy_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(accuracy_validate, has_feature, get_feature, default_data, "Mek_Beam-Accuracy");

export {accuracy_data_table, accuracy_validate, has_feature, get_feature, cleaned_feature};
