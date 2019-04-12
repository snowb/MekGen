//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new feed_data_table
let feeds_data_table=
[
    {feeds:1,cost:1},
    {feeds:2,cost:1.2},
    {feeds:3,cost:1.4},
    {feeds:4,cost:1.6}
];
let data_table_keys=["feeds","cost"];
let default_data={feeds:1,cost:1};

//data validator for feeds_data_table
//call partial_validate with appropriate data for full validate
let feeds_validate=partial_validate(feeds_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(feeds_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(feeds_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(feeds_validate, has_feature, get_feature, default_data, "Mek_Projectile-Multi-Feeds");

export {feeds_data_table, feeds_validate, has_feature, get_feature, cleaned_feature};
