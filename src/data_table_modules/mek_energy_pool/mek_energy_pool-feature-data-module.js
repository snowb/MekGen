//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature}
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new feature_data_table
let feature_data_table=
[
    {feature:"Morphable",cost:1.25},
    {feature:"Fragile",cost:1},
];
let data_table_keys=["feature","cost"];

//data validator for feature_data_table
//call partial_validate with appropriate data for full validate
let feature_validate=partial_validate(feature_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(feature_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(feature_data_table, has_feature);

/*** 
 * 
 * find way to switch to partial function
 * 
 * ***/
let cleaned_feature=function(_feature_array, _pkey)
{
    let update=false;
    let key_list=[];
    let alerts=[];
    let json_data=JSON.stringify(_feature_array);
    if(_feature_array===undefined || _pkey===undefined)
    {
        alerts.push("Mek_Energy_Pool-Feature: ");
        let error=_feature_array===undefined
            ? "**** Missing feature array. Returning blank. ****"
            : "**** No primary key provided. Returning blank. ****";
        alerts.push(error);
        return {cleaned_array:[],update:true,key_list:key_list,alerts:alerts};
    }

    if(_feature_array.length==0)
    {//no feature selected, return empty
        return {cleaned_array:[],update:update,key_list:key_list,alerts:alerts};
    }    

    let temp_selected_feature_array=_feature_array.reduceRight((_cleaned_array, _val)=>
    {
        if(_val[_pkey]===undefined)
        {//if feature with pkey doesn't exist in data table, ignore
            alerts.push("Mek_Energy_Pool-Feature: "+json_data);
            alerts.push("**** Missing primary key. Ignoring. ****");
            return _cleaned_array;
        }
        let clean_feature=_val;
        if(!feature_validate(_val))
        {//invalid data
            alerts.push("Mek_Energy_Pool-Feature: "+json_data);
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
        if(!key_list.includes(_val[_pkey]))
        {
            _cleaned_array.push(_val);
            key_list.push(_val[_pkey]);
        }
        return _cleaned_array;
    },[]);
    temp_selected_feature_array=temp_selected_feature_array.reverse();
    return {cleaned_array:temp_selected_feature_array,update:update,key_list:key_list,alerts:alerts};
    //returns an object with the pruned feature array, whether it was updated, and the key_list
};

export {feature_data_table, feature_validate, has_feature, get_feature, cleaned_feature};
