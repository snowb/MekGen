//data table module, raw data output for re-use in non-vue-component formats

//create new armor_type_data_table
let armor_type_data_table=
[
    {type:"Ablative",damage_coefficient:0,cost:0.5},
    {type:"Standard",damage_coefficient:1,cost:1},
    {type:"Alpha",damage_coefficient:2,cost:1.25},
    {type:"Beta",damage_coefficient:4,cost:1.5},
    {type:"Gamma",damage_coefficient:8,cost:2},
];

//data validator for armor_type_data_table
let armor_type_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=armor_type_data_table.some((_val)=>
    {
        return _val.type==_data.type
                && _val.cost==_data.cost
                && _val.damage_coefficient==_data.damage_coefficient;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return armor_type_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        armor_type_data_table.some((_table_val)=>
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

export {armor_type_data_table, armor_type_validate, has_feature, get_feature};
