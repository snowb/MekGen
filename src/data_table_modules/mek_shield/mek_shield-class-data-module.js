//data table module, raw data output for re-use in non-vue-component formats
import servo_classes from "@/data_table_modules/universal/servo_classes_data";
import {partial_validate, partial_has_feature, partial_get_feature, partial_cleaned_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new class_data_table
let class_data_table=[];
let data_cached=false;
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
    {//generate new class_data_table
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
    data_cached=false;
};
create_class_data_table("standard");
let data_table_keys=["stopping_power","code","id","name","kills","cost"];

let cached_validate=partial_validate(class_data_table, data_table_keys);
//data validator for create_class_data_table
//call partial_validate with appropriate data for full validate
let class_validate=(_data)=>
{//must run uniquely every time to ensure updated class_data_table
    if(data_cached)
    {
        return cached_validate(_data);
    }
    data_cached=true;
    cached_validate=partial_validate(class_data_table, data_table_keys);
    return cached_validate(_data);
}

//completed function for checking if data has data
let has_feature=partial_has_feature(class_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(class_data_table, has_feature);

let default_data=JSON.parse(JSON.stringify(get_feature("code",1)));
//
//completed function for returning cleaed data
let cleaned_feature=
    partial_cleaned_feature(class_validate, has_feature, get_feature, default_data, "Mek_Shield-Class");

export {class_data_table, class_validate, has_feature, get_feature, cleaned_feature, create_class_data_table};
