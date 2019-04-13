//data table module, raw data output for re-use in non-vue-component formats

//ATTEMPT: make validators and has_feat and get_feat and cleaned_feat functions 
//          neutral and reusable across all data modules

//partial data validator
//called with data_table and validation_keys in data-module
let partial_validate=(_data_table,_validation_keys)=>(_data)=>
{//_data_table: Array, array of data to validate against
    //_validation_keys: Array, keys to be compared between passed in data and data_table
    //_data: Object, data to be compared to data table 
    if(typeof _data==="undefined" || !Array.isArray(_validation_keys) || _validation_keys.length==0)
    {
        return false;
    }
    let valid=_data_table.some((_val)=>
    {
        return _validation_keys.every((_keys)=>
        {//return true if all validation_keys in _data match an element in _data_table
            return _data[_keys]==_val[_keys];
        });
    });
    return valid;
}

//partial_has_feature, determine if provided data table has matching element with provided key and val
//called in data module to generate full function with local data
let partial_has_feature=(_data_table)=>(_key, _val)=>
{
    return _data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

//partial get_feature, returns full function for data module
//requires data_table (array) and module's has_feature function
//returns full matching element in provided data table
//has_feature must exist in data table module
let partial_get_feature=(_data_table, _has_feature)=>(_key, _val)=>
{
    let found_feature=null;
    if(_has_feature(_key,_val))
    {
        _data_table.some((_table_val)=>
        {
            if(_table_val[_key]==_val)
            {
                found_feature=_table_val;
                return true;
            }
        },this);
    }
    return found_feature;
}

let partial_cleaned_feature=(_validator, _has_feature, _get_feature, _default_data, _name)=>(_pkey, _feature)=>
{//input: primary key, selected feature, filtered data table
    let data=undefined;
    let key_list=[];
    let update=false;
    let alerts=[];
    let json_data=JSON.stringify(_feature);

    if(_feature===undefined || !_has_feature(_pkey,_feature[_pkey]))
    {
        data=_default_data;
        key_list=[data[_pkey]];
        update=true;
        alerts.push(_name+": "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!_validator(_feature))
    {
        data=JSON.parse(JSON.stringify(_get_feature(_pkey,_feature[_pkey])));
        key_list=[data[_pkey]];
        update=true;
        alerts.push(_name+": "+json_data);
        alerts.push("**** Invalid data. Reseting. ****");
    }
    else
    {
        data=JSON.parse(JSON.stringify(_feature));
        key_list=[data[_pkey]];
        update=false;
    }
    return {data:data, key_list:key_list, update:update, alerts:alerts};
}

export {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature};
