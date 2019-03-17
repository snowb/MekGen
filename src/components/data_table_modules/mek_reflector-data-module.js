//data table module, raw data output for re-use in non-vue-component formats

//create new reflector_data_table
let reflector_data_table=Array.apply({}, Array(10));
        
reflector_data_table=reflector_data_table.map((_el,_index)=>
    {
        let quality_value=_index+1;
        let cost=quality_value * quality_value;
        return {quality_value:quality_value,cost:cost};
    });

//data validator for reflector_data_table
let reflector_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=reflector_data_table.some((_val)=>
    {
        return _val.quality_value==_data.quality_value
                && _val.cost==_data.cost
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return reflector_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        reflector_data_table.some((_table_val)=>
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

export {reflector_data_table, reflector_validate, has_feature, get_feature};
