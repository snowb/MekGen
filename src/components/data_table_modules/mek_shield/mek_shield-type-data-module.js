//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new type_data_table
let type_data_table=
[
    {name:"Standard"},
    {name:"Active"},
    {name:"Reactive"}
];
let data_table_keys=["name"];
let default_data={name:"Standard"};

//data validator for type_data_table
//call partial_validate with appropriate data for full validate
let type_validate=partial_validate(type_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(type_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(type_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(type_validate, has_feature, get_feature, default_data, "Mek_Shield-Type");

export {type_data_table, type_validate, has_feature, get_feature, cleaned_feature};
