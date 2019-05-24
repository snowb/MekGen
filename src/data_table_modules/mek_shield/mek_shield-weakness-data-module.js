//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature} 
    from "@/data_table_modules/universal/mek_partial-function-data-module";

//create new weakness_data_table
let weakness_data_table=
[
    {weakness:"All",monicker:"Shield",cost:1.0},
    {weakness:"Ablative",monicker:"Screen",cost:1.0},
    {weakness:"Energy Only",monicker:"Interference",cost:0.75,only_exclusive:true},
    {weakness:"Matter Only",monicker:"Kinetic",cost:0.75,only_exclusive:true},
    {weakness:"Ranged Only",monicker:"Swashbuckling",cost:0.75,only_exclusive:true},
    {weakness:"Enclosing",monicker:"Mirror",cost:0.5},
    {weakness:"Surge",monicker:"Surge",cost:2.5}
];
let only_exclusive=weakness_data_table.filter((_el)=>{return typeof _el.only_exclusive!=="undefined";});
let data_table_keys=["weakness","monicker","only_exclusive","cost"];
let default_data={weakness:"All",monicker:"Shield",cost:1.0};
let all_exclusive=[default_data];

//data validator for damage_data_table
//call partial_validate with appropriate data for full validate
let weakness_validate=partial_validate(weakness_data_table, data_table_keys);

//completed function for checking if data has data
let has_weakness=partial_has_feature(weakness_data_table);

//completed function for returning matching data
let get_weakness=partial_get_feature(weakness_data_table, has_weakness);

let is_exclusive_weakness=function(_exclusive_target, _pkey, _pkey_value)
{
    let exclusive_target_array=null;
    switch(_exclusive_target.toLowerCase())
    {
        case "only_exclusive":
            exclusive_target_array=only_exclusive;
            break;
        case "all_exclusive":
            exclusive_target_array=all_exclusive;
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

let cleaned_weakness=function(_weakness_array, _pkey)
{//takes weakness_array, returns cleaned array removing multiple exclusive values
    let hasExclusiveOnly=false;
    let hasExclusiveAll=false;
    let update=false;
    let key_list=[];
    let alerts=[];

    if(_weakness_array===undefined || _pkey===undefined)
    {
        alerts.push("Mek_Shield-Weakness: ");
        let error=_weakness_array===undefined
            ? "**** Missing weakness array. Returning blank. ****"
            : "**** No primary key provided. Returning blank. ****";
        alerts.push(error);
        return {cleaned_array:[default_data],update:true,key_list:["All"],alerts:alerts};
    }

    let temp_selected_weakness_array=_weakness_array.reduceRight((_cleaned_array, _val)=>
    {
        if(hasExclusiveAll)
        {//found exclusive all weakness, return just that
            key_list=["All"];
            return [default_data];
        }
        let isAll=is_exclusive_weakness("all_exclusive",_pkey,_val[_pkey]);
        if(isAll && _cleaned_array.length==0)
        {//last item added was All, return that and essential end
            hasExclusiveAll=true;
            key_list=["All"];
            return [default_data];
        }
        else if(isAll)
        {//otherwise, not last item, ignore All weakness
            return _cleaned_array;
        }
        if(_val[_pkey]===undefined)
        {//if weakness with pkey doesn't exist in data table, ignore
            alerts.push("Mek_Shield-Weakness: "+JSON.stringify(_val));
            alerts.push("**** Missing primary key. Ignoring. ****");
            return _cleaned_array;
        }
        let clean_weakness=_val;
        if(!weakness_validate(_val))
        {//invalid data
            alerts.push("Mek_Shield-Weakness: "+JSON.stringify(_val))
            alerts.push("**** Invalid data, attempting to reset. ****")
            clean_weakness=get_weakness(_pkey,_val[_pkey]);
            _val=clean_feature;//replace current value with correct value
            update=true;
            //attempt to set to corrected weakness
        }
        if(clean_weakness===null)
        {//no matching weakness
            alerts.push("**** Unable to reset. No matching data. ****")
            update=true;
            return _cleaned_array;
            //ignore element
        }

        let isOnly=is_exclusive_weakness("only_exclusive",_pkey,_val[_pkey]);

        if(isOnly && !hasExclusiveOnly)
        {
            _cleaned_array.push(_val);
            hasExclusiveOnly=true;
            key_list.push(_val[_pkey]);
            return _cleaned_array;
        }
        else if(isOnly && hasExclusiveOnly)
        {
            alerts.push("Mek_Shield-Weakness: "+_val);
            alerts.push("**** Duplicate exclusive Shield data. Ignoring. ****");
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
    temp_selected_weakness_array.reverse();
    if(temp_selected_weakness_array.length==0)
    {//empty, reset to default
        temp_selected_weakness_array=[JSON.parse(JSON.stringify(default_data))];
        update=true;
        key_list=["All"];
        alerts.push("Mek_Shield-Weakness: ");
        alerts.push("**** Reseting to default ****");
    }
    return {cleaned_array:temp_selected_weakness_array,update:update,key_list:key_list,alerts:alerts};
    //returns an object with the pruned weakness array, whether it was updated, and the key_list
}

export {weakness_data_table, weakness_validate, has_weakness, get_weakness, cleaned_weakness};
