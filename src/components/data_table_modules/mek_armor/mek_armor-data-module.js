//data table module, raw data output for re-use in non-vue-component formats

import servo_classes_data from "../universal/servo_classes_data.js";

//create new armor_table based on servo_classes_data
let default_data={name:"None",cost:0,stopping_power:0,code:0};
let armor_table=[default_data];

let new_armor_table=servo_classes_data.map((_val)=>
{
    return {name: _val.name, cost: _val.code, stopping_power: _val.code, code:_val.code};
});
let armor_data_table=armor_table.concat(new_armor_table);

//data validator for armor_table
let armor_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=armor_data_table.some((_val)=>
    {
        return _val.name==_data.name
                && _val.cost==_data.cost
                && _val.stopping_power==_data.stopping_power
                && _val.code==_data.code;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return armor_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        armor_data_table.some((_table_val)=>
        {
            if(_table_val[_key]==_val)
            {
                found_feature=_table_val;
                return true;
            }
        },this);
        return found_feature;
    }
}

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
