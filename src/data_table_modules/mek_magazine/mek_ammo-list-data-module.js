//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature} from "../universal/mek_partial-function-data-module";

//create new ammo_data_table
let ammo_data_table=
[
    {type:"Paintball",cost:0.5,effect:"Practice Rounds"},
    {type:"Foam",cost:0.5,effect:"Firefighting"},
    {type:"High-Ex",cost:1,effect:"Standard"},
    {type:"Tracer",cost:3,effect:"+1 to WA"},
    {type:"Kinetic",cost:3,effect:"More Knockback"},
    {type:"Tangler",cost:3,effect:"Grappling Attack"},
    {type:"Armor Piercing",cost:4,effect:"1/2 SP vs Armor"},
    {type:"Disruptor",cost:4,effect:"1/2 SP vs Energy"},
    {type:"Incendiary",cost:4,effect:"Flamethrower"},
    {type:"Shock (only)",cost:4,effect:"Stun Effect",shock_exclusive:true},
    {type:"Shock (add)",cost:6,effect:"Stun & Damage",shock_exclusive:true},
    {type:"Scattershot",cost:5,effect:"Shotgun Effect"},
    {type:"Blast I",cost:6,effect:"1-Hex Radius",blast_exclusive:true},
    {type:"Blast II",cost:8,effect:"2-Hex Radius",blast_exclusive:true},
    {type:"Blast III",cost:10,effect:"3-Hex Radius",blast_exclusive:true},
    {type:"Blast IV",cost:12,effect:"4-Hex Radius",blast_exclusive:true},
    {type:"Blast V",cost:14,effect:"5-Hex Radius",blast_exclusive:true},
    {type:"Nuclear",cost:1000,effect:"Atomic Ammo"},
];
let shock_exclusive=ammo_data_table.filter((_el)=>{return typeof _el.shock_exclusive!=="undefined";});
let blast_exclusive=ammo_data_table.filter((_el)=>{return typeof _el.blast_exclusive!=="undefined";});
let data_table_keys=["type","cost","effect","shock_exclusive","blast_exclusive"];
let default_data={type:"High-Ex",cost:1,effect:"Standard"};

//data validator for ammo_data_table
//call partial_validate with appropriate data for full validate
let ammo_validate=partial_validate(ammo_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(ammo_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(ammo_data_table, has_feature);

let is_exclusive_feature=function(_exclusive_target, _pkey, _pkey_value)
{
    let exclusive_target_array=null;
    switch(_exclusive_target.toLowerCase())
    {
        case "shock_exclusive":
            exclusive_target_array=shock_exclusive;
            break;
        case "blast_exclusive":
            exclusive_target_array=blast_exclusive;
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

/*** 
 * 
 * create cleaned_feat function for features
 * 
 *  ***/
let cleaned_feature=function(_feature_array, _pkey)
{//takes feature_array, returns cleaned array removing multiple exclusive values
    let hasExclusiveShock=false;
    let hasExclusiveBlast=false;
    let update=false;
    let key_list=[];
    let alerts=[];

    if(_feature_array===undefined || _pkey===undefined)
    {
        alerts.push("Mek_Magazine-Ammo-List: ");
        let error=_feature_array===undefined
            ? "**** Missing feature array. Returning default. ****"
            : "**** No primary key provided. Returning default. ****";
        alerts.push(error);
        return {cleaned_array:[default_data],update:true,key_list:["High-Ex"],alerts:alerts};
    }

    let temp_selected_feature_array=_feature_array.reduceRight((_cleaned_array, _val)=>
    {
        if(_val[_pkey]===undefined)
        {//if feature with pkey doesn't exist in data table, ignore
            alerts.push("Mek_Magazine-Ammo-List: "+JSON.stringify(_val));
            alerts.push("**** Missing primary key. Ignoring. ****");
            return _cleaned_array;
        }
        let clean_feature=_val;
        if(!ammo_validate(_val))
        {//invalid data
            alerts.push("Mek_Magazine-Ammo-List: "+JSON.stringify(_val))
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
        let isBlast=is_exclusive_feature("blast_exclusive",_pkey,_val[_pkey]);

        if(isShock && !hasExclusiveShock)
        {
            _cleaned_array.push(_val);
            hasExclusiveShock=true;
            key_list.push(_val[_pkey]);
            return _cleaned_array;
        }
        else if(isShock && hasExclusiveShock)
        {
            alerts.push("Mek_Magazine-Ammo-List: "+_val);
            alerts.push("**** Duplicate exclusive shock data. Ignoring. ****");
            update=true;
            return _cleaned_array;
        }

        if(isBlast && !hasExclusiveBlast)
        {
            _cleaned_array.push(_val);
            hasExclusiveBlast=true;
            key_list.push(_val[_pkey]);
            return _cleaned_array;
        }
        else if(isBlast && hasExclusiveBlast)
        {
            alerts.push("Mek_Magazine-Ammo-List: "+_val);
            alerts.push("**** Duplicate exclusive blast radius data. Ignoring. ****");
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
    temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
    {
        return _val[_pkey].toLowerCase()!="nuclear" 
            || (hasExclusiveBlast && _val[_pkey].toLowerCase()=="nuclear");
        //filter out nuclear if blast-radius isn't a feature
    }).reverse();
    if(temp_selected_feature_array.length==0)
    {//empty, reset to default
        temp_selected_feature_array=[JSON.parse(JSON.stringify(default_data))];
        update=true;
        key_list=["High-Ex"];
        alerts.push("Mek_Magazine-Ammo-List: ");
        alerts.push("**** Reseting to default ****");
    }
    return {cleaned_array:temp_selected_feature_array,update:update,key_list:key_list,alerts:alerts};
    //returns an object with the pruned feature array, whether it was updated, and the key_list
};

export {ammo_data_table, ammo_validate, has_feature, get_feature, shock_exclusive, blast_exclusive, cleaned_feature};
