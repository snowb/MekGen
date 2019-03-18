//data table module, raw data output for re-use in non-vue-component formats

//create new energy_pool_data_table
let energy_pool_data_table=
[
    {cost:10,power_available:0,max_power:50,damage_capacity:5},
    {cost:10,power_available:5,max_power:25,damage_capacity:4},
    {cost:20,power_available:10,max_power:40,damage_capacity:7},
    {cost:30,power_available:15,max_power:45,damage_capacity:8},
    {cost:40,power_available:20,max_power:50,damage_capacity:10},
    {cost:50,power_available:25,max_power:55,damage_capacity:11},
    {cost:60,power_available:30,max_power:60,damage_capacity:13},
];

//data validator for energy_pool_data_table
let energy_pool_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=energy_pool_data_table.some((_val)=>
    {
        return _val.type==_data.type
                && _val.cost==_data.cost
                && _val.damage_coefficient==_data.damage_coefficient;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return energy_pool_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        energy_pool_data_table.some((_table_val)=>
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

export {energy_pool_data_table, energy_pool_validate, has_feature, get_feature};
