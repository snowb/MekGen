//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

//create new reflector_data_table
let reflector_data_table=Array.apply({}, Array(10));
        
reflector_data_table=reflector_data_table.map((_el,_index)=>
    {
        let quality_value=_index+1;
        let cost=quality_value * quality_value;
        return {quality_value:quality_value,cost:cost};
    });
let data_table_keys=["quality_value","cost"];
let default_data=JSON.parse(JSON.stringify(reflector_data_table[0]));

//data validator for reflector_data_table
//call partial_validate with appropriate data for full validate
let reflector_validate=partial_validate(reflector_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(reflector_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(reflector_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(reflector_validate, has_feature, get_feature, default_data, "Mek_Reflector");

export {reflector_data_table, reflector_validate, has_feature, get_feature, cleaned_feature};
