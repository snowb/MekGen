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

//data validator for energy_pool_size_data_table
let energy_pool_size_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=energy_pool_size_data_table.some((_val)=>
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
}

export {energy_pool_size_data_table, energy_pool_size_validate, has_feature, get_feature};