//data table module, raw data output for re-use in non-vue-component formats
import servo_classes from "../universal/servo_classes_data";
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} from "../universal/mek_partial-function-data-module";

let class_data_table=[];
let data_table_keys=["code","id","name","cost","kills","damage_bonus","throw_range"];
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
//call partial_validate with appropriate data for full validate
let servo_class_validate=partial_validate(class_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(class_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(class_data_table, has_feature);

let default_data=get_feature("code",1);

//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(servo_class_validate, has_feature, get_feature, default_data, "Mek_Servo-Class");

export {create_class_data_table, class_data_table, servo_class_validate, has_feature, get_feature, cleaned_feature};
