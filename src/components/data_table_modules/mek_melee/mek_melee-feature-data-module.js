//data table module, raw data output for re-use in non-vue-component formats

//create new feature_data_table
let feature_data_table=
[
    {feature:"Handy",cost:1.5,name:"Handy"},
    {feature:"Quick",cost:2,name:"Quick"},
    {feature:"Clumsy",cost:0.5,name:"Clumsy"},
    {feature:"Armor Piercing",cost:2,name:"AP"},
    {feature:"Entangle",cost:1.25,name:"Entangling"},
    {feature:"Thrown",cost:1.2,throw_exclusive:true,name:"Thrown"},
    {feature:"Returning",cost:1.5,throw_exclusive:true,name:"Returning"},
    {feature:"Disruptor",cost:2,name:"Disrupting"},
    {feature:"Shock (only)",cost:2,shock_exclusive:true,name:"Shock"},
    {feature:"Shock (added)",cost:3,shock_exclusive:true,name:"Shocking"},
];
let shock_exclusive=feature_data_table.filter((_el)=>{return typeof _el.shock_exclusive!=="undefined";});
let throw_exclusive=feature_data_table.filter((_el)=>{return typeof _el.throw_exclusive!=="undefined";})

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
                && _val.cost==_data.cost
                && _val.name==_data.name
                && _val.shock_exclusive==_data.shock_exclusive
                && _val.throw_exclusive==_data.throw_exclusive;
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

export {feature_data_table, feature_validate, has_feature, get_feature, shock_exclusive, throw_exclusive};
