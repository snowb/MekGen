//data table module, raw data output for re-use in non-vue-component formats

//create new binder_data_table
let binder_data_table=
[
    {stopping_power_modifier:0,cost:1,space:0},
    {stopping_power_modifier:0.25,cost:1.1,space:0},
    {stopping_power_modifier:0.33,cost:1.2,space:0},
    {stopping_power_modifier:0.50,cost:1.3,space:0},
    {stopping_power_modifier:0.66,cost:1.2,space:0},
    {stopping_power_modifier:0.75,cost:1.1,space:0}
];

let default_data={stopping_power_modifier:0,cost:1,space:0};

//data validator for binder_data_table
let binder_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=binder_data_table.some((_val)=>
    {
        return _val.stopping_power_modifier==_data.stopping_power_modifier
                && _val.cost==_data.cost
                && _val.space==_data.space;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return binder_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        binder_data_table.some((_table_val)=>
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
        alerts.push("Mek_Shield-Binder: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!binder_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_Shield-Binder: "+json_data);
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

export {binder_data_table, binder_validate, has_feature, get_feature, cleaned_feature};
