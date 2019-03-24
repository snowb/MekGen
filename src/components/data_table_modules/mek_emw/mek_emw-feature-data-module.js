//data table module, raw data output for re-use in non-vue-component formats

//create new feature_data_table
let feature_data_table=
[
    {feature:"Rechargeable",cost:1.1},
    {feature:"Thrown",cost:1.2},
    {feature:"Quick",cost:2},
    {feature:"Hyper",cost:7.5},
    {feature:"Beam Shield",cost:1.5,exclusive_beam_shield:true},
    {feature:"Variable Beam Shield",cost:2,exclusive_beam_shield:true}
];
let exclusive_beam=feature_data_table.filter((_el)=>{return typeof _el.exclusive_beam_shield!=="undefined";});

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
                && _val.exclusive_beam_shield==_data.exclusive_beam_shield;
    });
    return valid;
};

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
};

let is_exclusive_feature=function(_exclusive_target, _pkey, _pkey_value)
{
    let exclusive_target_array=null;
    switch(_exclusive_target.toLowerCase())
    {
        case "exclusive_beam":
            exclusive_target_array=exclusive_beam;
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
};

let cleaned_feature=function(_feature_array, _pkey)
{//takes feature_array, returns cleaned array removing multiple exclusive values
    let hasExclusiveBeam=false;
    let update=false;
    let key_list=[];
    let alerts=[];

    if(_feature_array===undefined || _pkey===undefined)
    {
        alerts.push("Mek_EMW-Feature: ");
        let error=_feature_array===undefined
            ? "**** Missing feature array. Returning blank. ****"
            : "**** No primary key provided. Returning blank. ****";
        alerts.push(error);
        return {cleaned_array:[],update:true,key_list:[],alerts:alerts};
    }

    let temp_selected_feature_array=_feature_array.reduceRight((_cleaned_array, _val)=>
    {
        if(_val[_pkey]===undefined)
        {//if feature with pkey doesn't exist in data table, ignore
            alerts.push("Mek_EMW-Feature: "+JSON.stringify(_val));
            alerts.push("**** Missing primary key. Ignoring. ****");
            return _cleaned_array;
        }
        let clean_feature=_val;
        if(!feature_validate(_val))
        {//invalid data
            alerts.push("Mek_EMW-Feature: "+JSON.stringify(_val))
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
        let isBeam=is_exclusive_feature("exclusive_beam",_pkey,_val[_pkey]);

        if(isBeam && !hasExclusiveBeam)
        {
            _cleaned_array.push(_val);
            hasExclusiveBeam=true;
            key_list.push(_val[_pkey]);
            return _cleaned_array;
        }
        else if(isBeam && hasExclusiveBeam)
        {
            alerts.push("Mek_EMW-Feature: "+_val);
            alerts.push("**** Duplicate exclusive Beam data. Ignoring. ****");
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

export {feature_data_table, feature_validate, has_feature, get_feature, exclusive_beam, cleaned_feature};
