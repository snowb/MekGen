//data table module, raw data output for re-use in non-vue-component formats

import servo_classes_data from "./servo_classes_data.js";

//create new armor_table based on servo_classes_data
let armor_table=[{name:"None",cost:0,stopping_power:0,code:0}];

let new_armor_table=servo_classes_data.map((_val)=>
{
    return {name: _val.name, cost: _val.code, stopping_power: _val.code, code:_val.code};
});
let armor_data_table=armor_table.concat(new_armor_table);

//data validator for armor_table
let armor_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=armor_data_table.some((_val)=>
    {
        return _val.name==_data.name
                && _val.cost==_data.cost
                && _val.stopping_power==_data.stopping_power
                && _val.code==_data.code;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return armor_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        armor_data_table.some((_table_val)=>
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

export {armor_data_table, armor_validate, has_feature, get_feature};
