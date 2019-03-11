//data table module, raw data output for re-use in non-vue-component formats

//create new armor_type_data_table based servo_classes_data
let armor_type_data_table=
[
    {type:"Ablative",damage_coefficient:0,cost:0.5},
    {type:"Standard",damage_coefficient:1,cost:1},
    {type:"Alpha",damage_coefficient:2,cost:1.25},
    {type:"Beta",damage_coefficient:4,cost:1.5},
    {type:"Gamma",damage_coefficient:8,cost:2},
];

//data validator for armor_type_data_table
let armor_type_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=armor_type_data_table.some((_val)=>
    {
        return _val.type==_data.type
                && _val.cost==_data.cost
                && _val.damage_coefficient==_data.damage_coefficient;
    });
    return valid;
}

export {armor_type_data_table, armor_type_validate};
