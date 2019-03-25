//data table module, raw data output for re-use in non-vue-component formats
import servo_classes_data from "../universal/servo_classes_data.js";
import {partial_validate, partial_has_feature, partial_get_feature} from "../universal/mek_partial-function-data-module";

//create new armor_table based on servo_classes_data
let default_data={name:"None",cost:0,stopping_power:0,code:0};
let armor_table=[default_data];

let new_armor_table=servo_classes_data.map((_val)=>
{
    return {name: _val.name, cost: _val.code, stopping_power: _val.code, code:_val.code};
});
let armor_data_table=armor_table.concat(new_armor_table);
let data_table_keys=["name","cost","stopping_power","code"];

//data validator for armor_data_table
//call partial_validate with appropriate data for full validate
let armor_validate=partial_validate(armor_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(armor_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(armor_data_table, has_feature);

/*** determine if can be switched to some form of partial function format ****/
let cleaned_feature=function(_pkey, _feature, _filtered_table)
{//input: primary key, selected feature, filtered data table
    let data=undefined;
    let key_list=[];
    let update=false;
    let alerts=[];
    let json_data=JSON.stringify(_feature);
    let filtered_table=_filtered_table===undefined?armor_data_table:_filtered_table;
    let has_filtered_feature=filtered_table.some((_val)=>
    {
        return _val[_pkey]==_feature[_pkey];
    });

    if(_feature===undefined || !has_feature(_pkey,_feature[_pkey]) || !has_filtered_feature)
    {
        data=default_data;
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_Armor: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!armor_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_Armor: "+json_data);
        alerts.push("**** Invalid data. Reseting. ****");
    }
    else
    {
        data=JSON.parse(JSON.stringify(_feature));
        key_list=[data[_pkey]];
        update=false;
    }
    return {data:data, key_list:key_list, update:update, alerts:alerts};
}

export {armor_data_table, armor_validate, has_feature, get_feature, cleaned_feature};
