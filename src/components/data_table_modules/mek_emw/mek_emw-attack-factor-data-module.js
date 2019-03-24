//data table module, raw data output for re-use in non-vue-component formats

//create new attack_factor_data_table
let attack_factor_data_table=
[
    {attack_factor:0,cost:1},
    {attack_factor:1,cost:1.5},
    {attack_factor:2,cost:2},
    {attack_factor:3,cost:2.5},
    {attack_factor:4,cost:3},
    {attack_factor:5,cost:3.5}
];

let default_data={attack_factor:0,cost:1};

//data validator for attack_factor_data_table
let attack_factor_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=attack_factor_data_table.some((_val)=>
    {
        return _val.power_available==_data.power_available
                && _val.cost==_data.cost
                && _val.max_power==_data.max_power
                && _val.damage_capacity==_data.damage_capacity;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return attack_factor_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        attack_factor_data_table.some((_table_val)=>
        {
            if(_table_val[_key]==_val)
            {
                found_feature=_table_val;
                return true;
            }
        },this);
        return found_feature;
    }
};

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
        alerts.push("Mek_EMW-Accuracy: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!attack_factor_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_EMW-Accuracy: "+json_data);
        alerts.push("**** Invalid data. Reseting. ****");
    }
    else
    {
        data=JSON.parse(JSON.stringify(_feature));
        key_list=[data[_pkey]];
        update=false;
    }
    return {data:data, key_list:key_list, update:update, alerts:alerts};
};

export {attack_factor_data_table, accuracy_validate, has_feature, get_feature, cleaned_feature};
