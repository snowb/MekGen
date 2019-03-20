//data table module, raw data output for re-use in non-vue-component formats

//data validator for entangle_validate
let entangle_validate=(_base_damage, _range_mod, _damage_mod)=>
{
    let update=false;
    let range_mod=0;
    let damage_mod=0;
    switch(true)
    {
        case (_range_mod - _damage_mod)!==0:
        case _range_mod<0:
        case _damage_mod<0:
        case (_base_damage - _damage_mod)<0:
            update=true;
            break;
        default:
            range_mod=_range_mod;
            damage_mod=_damage_mod;
    }

    return {update:update,range_mod:range_mod,damage_mod:damage_mod};
}

export {entangle_validate};
