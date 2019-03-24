//data table module, raw data output for re-use in non-vue-component formats

//create new turns_data_table
let turns_data_table=
[
    {turns:1,cost:0.3},
    {turns:2,cost:0.4},
    {turns:3,cost:0.5},
    {turns:4,cost:0.6},
    {turns:5,cost:0.7},
    {turns:7,cost:0.8},
    {turns:10,cost:0.9},
    {turns:Infinity,cost:1.0}
];

let default_data={turns:Infinity,cost:1};

//data validator for turns_data_table
let turns_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=turns_data_table.some((_val)=>
    {
        return _val.turns==_data.turns
                && _val.cost==_data.cost;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return turns_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        turns_data_table.some((_table_val)=>
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
        alerts.push("Mek_EMW-Turns-In-Use: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!turns_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        data.turns=data.turns===null?Infinity:data.turns;
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_EMW-Turns-In-Use: "+json_data);
        alerts.push("**** Invalid data. Reseting. ****");
    }
    else
    {
        data=JSON.parse(JSON.stringify(_feature));
        data.turns=data.turns===null?Infinity:data.turns;
        key_list=[data[_pkey]];
        update=false;
    }
    return {data:data, key_list:key_list, update:update, alerts:alerts};
};

export {turns_data_table, turns_validate, has_feature, get_feature, cleaned_feature};
