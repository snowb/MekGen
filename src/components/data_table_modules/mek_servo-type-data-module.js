//data table module, raw data output for re-use in non-vue-component formats

//create new ammo_data_table
let servo_data_table=
[
    {type:"Torso"},
    {type:"Head"},
    {type:"Arm"},
    {type:"Leg"},
    {type:"Wing"},
    {type:"Tail"},
    {type:"Pod"},
];

//data validator for ammo_data_table
let servo_type_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=servo_data_table.some((_val)=>
    {
        return _val.type==_data.type;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return servo_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        servo_data_table.some((_table_val)=>
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

export {servo_data_table, servo_type_validate, has_feature, get_feature};
