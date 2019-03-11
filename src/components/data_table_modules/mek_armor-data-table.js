//data table module, raw data output for re-use in non-vue-component formats

import servo_classes_data from "./servo_classes_data.js";

//create new armor_table based servo_classes_data
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
    let valid=armor_table.some((_val)=>
    {
        return _val.name==_data.name
                && _val.cost==_data.cost
                && _val.stopping_power==_data.stopping_power
                && _val.code==_data.code;
    });
    return valid;
}

export {armor_data_table, armor_validate};
