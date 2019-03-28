//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature} from "../universal/mek_partial-function-data-module";

//create new feature_data_table
let raw_feature_data_table=
[
    {feature:"Long Range",cost:1.33},
    {feature:"Hypervelocity",cost:1.25},
    {feature:"Tunneling",cost:1.3},
    {feature:"Home On Jam",cost:2},
    {feature:"Fuse",cost:1.1},
    {feature:"Foam",cost:1.33},
    {feature:"Flare",cost:0.5},
    {feature:"Smoke",cost:0.5, exclusive_smoke_scatter:true},
    {feature:"Scatter",cost:0.5, exclusive_smoke_scatter:true},
    {feature:"Countermissile",cost:1, exclusive_counter:true},
    {feature:"Variable Countermissile",cost:1.8, exclusive_counter:true},
    {feature:"Smoke-Scatter",cost:1,exclusive_smoke_scatter:true},
    {feature:"Nuclear",cost:1000},
];
let exclusive_smoke_scatter=raw_feature_data_table.filter((_el)=>{return typeof _el.exclusive_smoke_scatter!=="undefined";});
let exclusive_counter=raw_feature_data_table.filter((_el)=>{return typeof _el.exclusive_counter!=="undefined";});
let data_table_keys=["feature","cost","exclusive_smoke_scatter","exclusive_counter"];

let feature_data_table=raw_feature_data_table;
let data_cached=false;

let filter_data_table=(_blast_radius, _smart)=>
{
    data_cached=false;
    if(_blast_radius!="__NIL__" && _smart)
    {
        feature_data_table=raw_feature_data_table;
        return;
    }
    feature_data_table=raw_feature_data_table.filter((_val)=>
    {
        if(_blast_radius=="__NIL__" && ["nuclear","scatter","smoke","smoke-scatter"].includes(_val.feature.toLowerCase()))
        {//filter out some features if no blast radius
            return false;
        }
        if(!_smart && _val.feature.toLowerCase()=="home on jam")
        {//filtered out home-on-jam for dumb missiles
            return false;
        }
        return true;
    });
};

let cached_validate=partial_validate(raw_feature_data_table, data_table_keys);
//data validator for feature_data_table
//call partial_validate with appropriate data for full validate
let feature_validate=(_data)=>
{
    if(data_cached)
    {
        return cached_validate(_data);
    }
    data_cached=true;
    cached_validate=partial_validate(feature_data_table, data_table_keys);
    return cached_validate(_data);
}

//completed function for checking if data has data
let has_feature=(_pkey,_data)=>
{
    return partial_has_feature(feature_data_table)(_pkey,_data);
}

//completed function for returning matching data
let get_feature=(_pkey,_data)=>
{
    return partial_get_feature(feature_data_table, has_feature)(_pkey,_data);
}

let is_exclusive_feature=function(_exclusive_target, _pkey, _pkey_value)
{
    let exclusive_target_array=null;
    switch(_exclusive_target.toLowerCase())
    {
        case "exclusive_smoke_scatter":
            exclusive_target_array=exclusive_smoke_scatter;
            break;
        case "exclusive_counter":
            exclusive_target_array=exclusive_counter;
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

/*****
 * *
 * *    likely need to setup create_feature_data_table taking Blast_Radius and Smart as input
 * *    so claned_feature will remove invalid features
 * *
 *****/


/*** 
 * 
 * find way to switch to partial function
 * 
 * ***/
let cleaned_feature=function(_feature_array, _pkey)
{//takes feature_array, returns cleaned array removing multiple exclusive values
    let hasExclusiveSmokeScatter=false;
    let hasExclusiveCounter=false;
    let update=false;
    let key_list=[];
    let alerts=[];
    if(_feature_array.length===0)
    {
        return {cleaned_array:[],update:false,key_list:[],alerts:alerts};
    }
    if(_feature_array===undefined || _pkey===undefined)
    {
        alerts.push("Mek_Missile-Feature: ");
        let error=_feature_array===undefined
            ? "**** Missing feature array. Returning default. ****"
            : "**** No primary key provided. Returning default. ****";
        alerts.push(error);
        return {cleaned_array:[],update:true,key_list:[],alerts:alerts};
    }
    let temp_selected_feature_array=_feature_array.reduceRight((_cleaned_array, _val)=>
    {
        if(_val[_pkey]===undefined)
        {//if feature with pkey doesn't exist in data table, ignore
            alerts.push("Mek_Missile-Feature: "+JSON.stringify(_val));
            alerts.push("**** Missing primary key. Ignoring. ****");
            return _cleaned_array;
        }
        let clean_feature=_val;
        if(!feature_validate(_val))
        {//invalid data
            alerts.push("Mek_Missile-Feature: "+JSON.stringify(_val))
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
        let isSmokeScatter=is_exclusive_feature("exclusive_smoke_scatter",_pkey,_val[_pkey]);
        let isCounter=is_exclusive_feature("exclusive_counter",_pkey,_val[_pkey]);
console.log(JSON.stringify(_val),has_feature(_pkey,_val[_pkey]))
        if(isSmokeScatter && !hasExclusiveSmokeScatter)
        {
            _cleaned_array.push(_val);
            hasExclusiveSmokeScatter=true;
            key_list.push(_val[_pkey]);
            return _cleaned_array;
        }
        else if(isSmokeScatter && hasExclusiveSmokeScatter)
        {
            alerts.push("Mek_Missile-Feature: "+_val);
            alerts.push("**** Duplicate Exclusive SmokeScatter data. Ignoring. ****");
            update=true;
            return _cleaned_array;
        }
        if(isCounter && !hasExclusiveCounter)
        {
            _cleaned_array.push(_val);
            hasExclusiveCounter=true;
            key_list.push(_val[_pkey]);
            return _cleaned_array;
        }
        else if(isCounter && hasExclusiveCounter)
        {
            alerts.push("Mek_Missile-Feature: "+_val);
            alerts.push("**** Duplicate Exclusive Counter data. Ignoring. ****");
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
    temp_selected_feature_array=temp_selected_feature_array.reverse();
    if(temp_selected_feature_array.length==0)
    {//empty, reset to default
        temp_selected_feature_array=[];
        update=true;
        key_list=[];
        alerts.push("Mek_Missile-Feature: ");
        alerts.push("**** Reseting to default ****");
    }
    return {cleaned_array:temp_selected_feature_array,update:update,key_list:key_list,alerts:alerts};
    //returns an object with the pruned feature array, whether it was updated, and the key_list
};

export {feature_data_table, feature_validate, has_feature, get_feature, cleaned_feature, filter_data_table};
