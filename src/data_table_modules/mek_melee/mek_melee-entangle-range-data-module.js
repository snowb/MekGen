//data table module, raw data output for re-use in non-vue-component formats

//data validator for entangle range
let cleaned_feature=(_base_damage, _range_mod, _damage_mod)=>
{
    let update=false;
    let range_mod=0;
    let damage_mod=0;
    let alerts=[];
    let json_data=JSON.stringify({base_damage:_base_damage,range_mod:_range_mod,damage_mod:_damage_mod});
    switch(true)
    {
        case (_range_mod - _damage_mod)!==0:
        case _range_mod<0:
        case _damage_mod<0:
        case (_base_damage - _damage_mod)<0:
            alerts.push("Mek_Melee-Entangle-Range: "+json_data);
            alerts.push("**** Invalid data. Reseting. ****");
            update=true;
            break;
        default:
            range_mod=_range_mod;
            damage_mod=_damage_mod;
    }
    let new_damage=_base_damage - damage_mod;

    return {update:update,range_mod:range_mod,damage_mod:damage_mod,alerts:alerts,damage:new_damage};
}

export {cleaned_feature};
