//data table module, raw data output for re-use in non-vue-component formats

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
    {size:Infinity,cost:2},
];

let default_data={size:3,cost:1};

//data validator for energy_pool_size_data_table
let energy_pool_size_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=energy_pool_size_data_table.some((_val)=>
    {
        return _val.size==_data.size
                && _val.cost==_data.cost;
    });
    return valid;
};

let has_feature=(_key, _val)=>
{
    return energy_pool_size_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        energy_pool_size_data_table.some((_table_val)=>
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
        alerts.push("Mek_Energy_Pool-Size: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!energy_pool_size_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_Energy_Pool-Size: "+json_data);
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

export {energy_pool_size_data_table, energy_pool_size_validate, has_feature, get_feature, cleaned_feature};
