//data table module, raw data output for re-use in non-vue-component formats

//create new ram_data_table
let ram_data_table=
[
    {absorption:0,cost:1.0,armor_penalty:0},
    {absorption:0.2,cost:1.5,armor_penalty:0},
    {absorption:0.25,cost:1.8,armor_penalty:0.2},
    {absorption:0.33,cost:2.2,armor_penalty:0.25},
    {absorption:0.5,cost:2.5,armor_penalty:0.33},
];
let default_data={absorption:0,cost:1.0,armor_penalty:0};
//data validator for ram_data_table
let ram_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=ram_data_table.some((_val)=>
    {
        return _val.absorption==_data.absorption
                && _val.cost==_data.cost
                && _val.armor_penalty==_data.armor_penalty;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return ram_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        ram_data_table.some((_table_val)=>
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
        alerts.push("Mek_RAM-Armor: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!ram_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_RAM-Armor: "+json_data);
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

export {ram_data_table, ram_validate, has_feature, get_feature, cleaned_feature};
