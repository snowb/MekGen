//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new blast_radius_data_table
let blast_radius_data_table=
[
    {blast_radius:"__NIL__",cost:1},
    {blast_radius:1,cost:3},
    {blast_radius:2,cost:4},
    {blast_radius:3,cost:5},
    {blast_radius:4,cost:6},
    {blast_radius:5,cost:7},
    {blast_radius:6,cost:7.5},
    {blast_radius:7,cost:8},
    {blast_radius:8,cost:8.5},
    {blast_radius:9,cost:9},
    {blast_radius:10,cost:10},
    {blast_radius:20,cost:20},
];
let data_table_keys=["blast_radius","cost"];
let default_data={blast_radius:"__NIL__",cost:1};

//data validator for blast_radius_data_table
//call partial_validate with appropriate data for full validate
let blast_radius_validate=partial_validate(blast_radius_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(blast_radius_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(blast_radius_data_table, has_feature);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(blast_radius_validate, has_feature, get_feature, default_data, "Mek_Missile-Blast-Radius");

export {blast_radius_data_table, blast_radius_validate, has_feature, get_feature, cleaned_feature};
