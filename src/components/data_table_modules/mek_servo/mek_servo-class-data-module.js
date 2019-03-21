//data table module, raw data output for re-use in non-vue-component formats
import servo_classes from "../universal/servo_classes_data";

let class_data_table=[];
//create new class_data_table
let create_class_data_table=function(_servo_type)
{//factory function to create class_data_table based on servo_type, otherwise creates a generic head-type servo
    let type_cost_multiplier=1;
    let type_space_multiplier=1;
    let type_kills_multiplier=1;
    let type_cost_modifier=0;
    let type_space_modifier=0;
    let type_kills_modifier=0;
    let isArm=false;
    let isLeg=false;
    let servo_type=_servo_type!==undefined ? _servo_type.toLowerCase() : "torso";

    switch(servo_type)
    {
        case "torso":
            type_cost_multiplier=2;
            type_space_multiplier=2;
            type_kills_multiplier=2;
            break;
        case "arm":
            isArm=true;
            break;
        case "leg":
            isLeg=true;
            break;
        case "pod":
            type_space_multiplier=2;
            type_kills_multiplier=0;
            break;
        //case "head": //head, wing, tail are all just 1s
        //case "wing":
        //case "tail":
        //  break;
        //default:
        //  assume head, x1 multipliers
    }
    let new_class_table = servo_classes.map((_val)=>
    {
        let obj={};
        obj.code=_val.code;
        obj.id=_val.id; 
        obj.name=_val.name; 
        obj.cost=(_val.code*type_cost_multiplier)+type_cost_modifier;
        obj.space=(_val.code*type_space_multiplier)+type_space_modifier;
        obj.kills=(_val.code*type_kills_multiplier)+type_kills_modifier;
        if(isArm || isLeg)
        {
            obj.damage_bonus=isLeg ? Math.ceil(obj.code/2)-1 : Math.ceil(obj.code/3)-1;
            if(isArm)
            {
                obj.throw_range=Math.floor(obj.code/2)+1;
            }
        }
        return obj;
    });
    class_data_table=new_class_table;
};
create_class_data_table();//create default servo_class_table

//data validator for class_data_table
let servo_class_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=class_data_table.some((_val)=>
    {
        return _val.code==_data.code
                && _val.id==_data.id
                && _val.name==_data.name
                && _val.cost==_data.cost
                && _val.space==_data.space
                && _val.kills==_data.kills
                && _val.damage_bonus==_data.damage_bonus
                && _val.throw_range==_data.throw_range;
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
}

let default_data=get_feature("code",1);

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
        alerts.push("Mek_Servo-Class: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!servo_class_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_Servo-Class: "+json_data);
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

export {create_class_data_table, class_data_table, servo_class_validate, has_feature, get_feature, cleaned_feature};
