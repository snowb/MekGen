//data table module, raw data output for re-use in non-vue-component formats

//create new feature_data_table
let feature_data_table=
[
    {feature:"Morphable",cost:1.25},
    {feature:"Fragile",cost:1},
];

//data validator for feature_data_table
let feature_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=feature_data_table.some((_val)=>
    {
        return _val.feature==_data.feature
                && _val.cost==_data.cost;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return feature_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        feature_data_table.some((_table_val)=>
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

export {feature_data_table, feature_validate, has_feature, get_feature};
