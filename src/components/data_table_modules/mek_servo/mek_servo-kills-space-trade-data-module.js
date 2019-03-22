//create new check and return cleaned kills-space-trade

let cleaned_feature=function(_kills_space_obj, _base_kills, _base_space)
{//input: _kills_space_obj with kills and space props
    let data={};
    data.kills_modifier=0;
    data.space_modifier=0;
    data.cost=0;
    data.kills=_base_kills!==undefined?_base_kills:2;
    data.space=_base_space!==undefined?_base_space:2;
    let alerts=[];
    let update=true;

    if(_base_kills===undefined)
    {
        alerts.push("Mek_Servo-Kills-Space-Trade:");
        alerts.push("**** Missing Base Kills, reseting to 2.");
        upate=true;
    }
    if(_base_space===undefined)
    {
        alerts.push("Mek_Servo-Kills-Space-Trade:");
        alerts.push("**** Missing Base Space, reseting to 2.");
        update=true;
    }
    if(_kills_space_obj.kills===undefined || _kills_space_obj.space===undefined || _kills_space_obj.cost===undefined)
    {
        alerts.push("Mek_Servo-Kills-Space-Trade:");
        alerts.push("**** Missing values, reseting to 0.");
        update=true;
        return {data:data, update:update, alerts:alerts};
    }

    data.kills_modifier=_kills_space_obj.kills;
    data.space_modifier=_kills_space_obj.space;
    data.cost=_kills_space_obj;
    let new_kills=_base_kills + data.kills_modifier;
    let new_space=_base_space + data.space_modifier;

    switch(true)
    {
        case new_kills<=0:
        case new_space<0:
        case ((data.kills_modifier*2) + data.space_modifier)!==0:
            alerts.push("Mek_Servo-Kills-Space-Trade:");
            alerts.push("**** Invalid values, reseting to 0.");
            data.kills_modifier=0;
            data.space_modifier=0;
            data.cost=0;
            update=true;
            break;
    }

    data.cost=data.kills_modifier>0 ? data.kills_modifier*2 : 0;
    data.kills=data.kills + data.kills_modifier;
    data.space=data.space + data.space_modifier;

    return {data:data, update:update, alerts:alerts};
}

export {cleaned_feature};
