//data table module, raw data output for re-use in non-vue-component formats

//create new reflector_data_table
let reflector_data_table=Array.apply({}, Array(10));
        
reflector_data_table=reflector_data_table.map((_el,_index)=>
    {
        let quality_value=_index+1;
        let cost=quality_value * quality_value;
        return {quality_value:quality_value,cost:cost};
    });

let default_data=JSON.parse(JSON.stringify(reflector_data_table[0]));

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
        alerts.push("Mek_Reflector: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!reflector_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_Reflector: "+json_data);
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

export {reflector_data_table, reflector_validate, has_feature, get_feature, cleaned_feature};
