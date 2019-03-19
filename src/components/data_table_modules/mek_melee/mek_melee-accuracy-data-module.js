//data table module, raw data output for re-use in non-vue-component formats

//create new accuracy_data_table
let accuracy_data_table=
[
    {accuracy:-2,cost:0.6},
    {accuracy:-1,cost:0.8},
    {accuracy:0,cost:1},
    {accuracy:1,cost:1.5},
    {accuracy:2,cost:2}
];

//data validator for accuracy_data_table
let accuracy_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=accuracy_data_table.some((_val)=>
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
    return accuracy_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        accuracy_data_table.some((_table_val)=>
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

export {accuracy_data_table, accuracy_validate, has_feature, get_feature};
