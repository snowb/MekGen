//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new energy_pool_size_data_table
let energy_pool_size_data_table=
[
    {size:1,cost:0.6},
    {size:2,cost:0.75},
    {size:3,cost:1},
    {size:4,cost:1.2},
    {size:5,cost:1.3},
    {size:7,cost:1.4},
    {size:10,cost:1.5},
    {size:"__INFINITY__",cost:2},
];
let data_table_keys=["size","cost"];
let default_data={size:3,cost:1};

//data validator for energy_pool_size_data_table
//call partial_validate with appropriate data for full validate
let energy_pool_size_validate=partial_validate(energy_pool_size_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(energy_pool_size_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(energy_pool_size_data_table, has_feature);

/**** 
 * 
 * find way to partial function of Infinity values
 * 
 * ****/
let cleaned_feature=function(_pkey, _feature)
{//input: primary key, selected feature, filtered data table
    let data=undefined;
    let key_list=[];
    let update=false;
    let alerts=[];
    let json_data=JSON.stringify(_feature);

    if(_feature===undefined || !has_feature(_pkey,_feature[_pkey]))
    {
        data=default_data;
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_Energy_Pool-Size: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!energy_pool_size_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        data.size=data.size===null?Infinity:data.size;
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_Energy_Pool-Size: "+json_data);
        alerts.push("**** Invalid data. Reseting. ****");
    }
    else
    {
        data=JSON.parse(JSON.stringify(_feature));
        data.size=data.size===null?Infinity:data.size;
        key_list=[data[_pkey]];
        update=false;
    }
    return {data:data, key_list:key_list, update:update, alerts:alerts};
};

export {energy_pool_size_data_table, energy_pool_size_validate, has_feature, get_feature, cleaned_feature};
