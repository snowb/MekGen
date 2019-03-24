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

let default_data={accuracy:0,cost:1};

//data validator for accuracy_data_table
let accuracy_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=accuracy_data_table.some((_val)=>
    {
        return _val.accuracy==_data.accuracy
                && _val.cost==_data.cost;
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
};

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
        alerts.push("Mek_Melee-Accuracy: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!accuracy_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_Melee-Accuracy: "+json_data);
        alerts.push("**** Invalid data. Reseting. ****");
    }
    else
    {
        data=JSON.parse(JSON.stringify(_feature));
        key_list=[data[_pkey]];
        update=false;
    }
    return {data:data, key_list:key_list, update:update, alerts:alerts};
};

export {accuracy_data_table, accuracy_validate, has_feature, get_feature, cleaned_feature};
