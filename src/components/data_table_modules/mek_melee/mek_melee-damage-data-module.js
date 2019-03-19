//data table module, raw data output for re-use in non-vue-component formats

//create new damage_data_table
let damage_data_table=Array.apply({}, Array(20)).map((_el,_index)=>
{
    let damage=_index+1;
    let cost=damage/2;
    return {damage:damage,cost:cost};
});

//data validator for damage_data_table
let damage_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=damage_data_table.some((_val)=>
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
    return damage_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        damage_data_table.some((_table_val)=>
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

export {damage_data_table, damage_validate, has_feature, get_feature};
