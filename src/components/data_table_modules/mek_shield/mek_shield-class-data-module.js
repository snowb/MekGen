//data table module, raw data output for re-use in non-vue-component formats
import servo_classes from "../universal/servo_classes_data";

//create new class_data_table
let class_data_table=[];

let create_class_data_table=function(_type)
{
    let type=_type===undefined?"standard":_type;
    let type_multiplier=1;//Standard
    switch(type.toLowerCase())
    {
        case "active":
            type_multiplier=1.5
            break;
        case "reactive":
            type_multiplier=3;
            break;
    }

    class_data_table=servo_classes.map(function(_val)
    {
        let newelement=
        {
            stopping_power:_val.code+4,
            code:_val.code,
            id:_val.id,
            name:_val.name,
            kills:(_val.code+4)*5,
            cost:(_val.code+4)*type_multiplier
        };
        return newelement;
    },this);
};
create_class_data_table("standard");

let default_data={stopping_power_modifier:0,cost:1,space:0};

//data validator for class_data_table
let class_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=class_data_table.some((_val)=>
    {
        return _val.stopping_power_modifier==_data.stopping_power_modifier
                && _val.cost==_data.cost
                && _val.id==_data.id
                && _val.name==_data.name
                && _val.kills==_data.kills
                && _val.cost==_data.cost;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return class_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        class_data_table.some((_table_val)=>
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
        alerts.push("Mek_Shield-Class: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!class_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_Shield-Class: "+json_data);
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

export {class_data_table, class_validate, has_feature, get_feature, cleaned_feature, create_class_data_table};
