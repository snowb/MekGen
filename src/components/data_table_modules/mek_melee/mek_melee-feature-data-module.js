//data table module, raw data output for re-use in non-vue-component formats

//create new feature_data_table
let feature_data_table=
[
    {feature:"Handy",cost:1.5,name:"Handy"},
    {feature:"Quick",cost:2,name:"Quick"},
    {feature:"Clumsy",cost:0.5,name:"Clumsy"},
    {feature:"Armor Piercing",cost:2,name:"AP"},
    {feature:"Entangle",cost:1.25,name:"Entangling"},
    {feature:"Thrown",cost:1.2,throw_exclusive:true,name:"Thrown"},
    {feature:"Returning",cost:1.5,throw_exclusive:true,name:"Returning"},
    {feature:"Disruptor",cost:2,name:"Disrupting"},
    {feature:"Shock (only)",cost:2,shock_exclusive:true,name:"Shock"},
    {feature:"Shock (added)",cost:3,shock_exclusive:true,name:"Shocking"},
];
let shock_exclusive=feature_data_table.filter((_el)=>{return typeof _el.shock_exclusive!=="undefined";});
let throw_exclusive=feature_data_table.filter((_el)=>{return typeof _el.throw_exclusive!=="undefined";});

//data validator for feature_data_table
let feature_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=feature_data_table.some((_val)=>
    {
        return _val.feature==_data.feature
                && _val.cost==_data.cost
                && _val.name==_data.name
                && _val.shock_exclusive==_data.shock_exclusive
                && _val.throw_exclusive==_data.throw_exclusive;
    });
    return valid;
}

let has_feature=(_key, _val)=>
{
    return feature_data_table.some((_data)=>
    {
        return _data[_key]!==undefined && _data[_key]==_val;
    });
};

let get_feature=(_key, _val)=>
{
    if(has_feature(_key,_val))
    {
        let found_feature=null;
        feature_data_table.some((_table_val)=>
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

let is_exclusive_feature=function(_exclusive_target, _pkey, _pkey_value)
{
    let exclusive_target_array=null;
    switch(_exclusive_target.toLowerCase())
    {
        case "shock_exclusive":
            exclusive_target_array=shock_exclusive;
            break;
        case "throw_exclusive":
            exclusive_target_array=throw_exclusive;
            break;
    }
    if(exclusive_target_array===null)
    {
        return false;
    }
    return exclusive_target_array.some((_val)=>
    {
        return _val[_pkey]==_pkey_value;
    });
}

let cleaned_feature=function(_feature_array, _pkey)
{//takes feature_array, returns cleaned array removing multiple exclusive values
    let hasExclusiveShock=false;
    let hasExclusiveThrow=false;
    let update=false;
    let key_list=[];
    let alerts=[];

    if(_feature_array===undefined || _pkey===undefined)
    {
        alerts.push("Mek_Melee-Feature: ");
        let error=_feature_array===undefined
            ? "**** Missing feature array. Returning blank. ****"
            : "**** No primary key provided. Returning blank. ****";
        alerts.push(error);
        return {cleaned_array:[],update:true,key_list:[]};
    }

    let temp_selected_feature_array=_feature_array.reduceRight((_cleaned_array, _val)=>
    {
        if(_val[_pkey]===undefined)
        {//if feature with pkey doesn't exist in data table, ignore
            alerts.push("Mek_Melee-Feature: "+JSON.stringify(_val));
            alerts.push("**** Missing primary key. Ignoring. ****");
            return _cleaned_array;
        }
        let clean_feature=_val;
        if(!feature_validate(_val))
        {//invalid data
            alerts.push("Mek_Melee-Feature: "+JSON.stringify(_val))
            alerts.push("**** Invalid data, attempting to reset. ****")
            clean_feature=get_feature(_pkey,_val[_pkey]);
            update=true;
            //attempt to set to corrected feature
        }
        if(clean_feature===null)
        {//no matching feature
            alerts.push("**** Unable to reset. No matching data. ****")
            update=true;
            return _cleaned_array;
            //ignore element
        }
        let isShock=is_exclusive_feature("shock_exclusive",_pkey,_val[_pkey]);
        let isThrow=is_exclusive_feature("throw_exclusive",_pkey,_val[_pkey]);

        if(isShock && !hasExclusiveShock)
        {
            _cleaned_array.push(_val);
            hasExclusiveShock=true;
            key_list.push(_val[_pkey]);
            return _cleaned_array;
        }
        else if(isShock && hasExclusiveShock)
        {
            alerts.push("Mek_Melee-Feature: "+_val);
            alerts.push("**** Duplicate exclusive Shock data. Ignoring. ****");
            update=true;
            return _cleaned_array;
        }

        if(isThrow && !hasExclusiveThrow)
        {
            _cleaned_array.push(_val);
            hasExclusiveThrow=true;
            key_list.push(_val[_pkey]);
            return _cleaned_array;
        }
        else if(isThrow && hasExclusiveThrow)
        {
            alerts.push("Mek_Melee-Feature: "+_val);
            alerts.push("**** Duplicate exclusive Throw data. Ignoring. ****");
            update=true;
            return _cleaned_array;
        }

        if(!key_list.includes(_val[_pkey]))
        {
            _cleaned_array.push(_val);
            key_list.push(_val[_pkey]);
        }
        return _cleaned_array;
    },[]);
    temp_selected_feature_array.reverse();

    return {cleaned_array:temp_selected_feature_array,update:update,key_list:key_list,alerts:alerts};
    //returns an object with the pruned feature array, whether it was updated, and the key_list
}

export {feature_data_table, feature_validate, has_feature, get_feature, shock_exclusive, throw_exclusive, cleaned_feature};
