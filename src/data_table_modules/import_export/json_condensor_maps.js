let maps={};

let generateShortNameKeys=(_map_object)=>
{
  return Object.entries(_map_object).reduce((_obj, _el)=>
  {
    let obj={long_name:_el[0]};
    if(_el[1].pkey!==undefined)
    {
      obj.pkey=_el[1].pkey;
    }
    if(_el[1].short_pkey!==undefined)
    {
      obj.short_pkey=_el[1].short_pkey;
    }
    _obj[_el[1].short_name]=obj;
    return _obj;
  },{});
};

let addShortNameKeys=(_map_object)=>
{
  return {..._map_object,...generateShortNameKeys(_map_object)};
};

maps.universal_map=
{
  uuid:{short_name:"uuid"},
  component_name:{short_name:"cn"},
  custom_component_name:{short_name:"ccn"},
  component_category:{short_name:"cc"},
  component_type:{short_name:"ct"},
  efficiencies:{short_name:"ef"},
};
maps.universal_map=addShortNameKeys(maps.universal_map);

maps.beam_map=
{
  feature_array:{short_name:"fa",pkey:"feature",short_pkey:"ft"},
  selected_damage:{short_name:"sd",pkey:"damage",short_pkey:"dm"}, 
  selected_accuracy:{short_name:"sa",pkey:"accuracy",short_pkey:"ac"},
  selected_warm_up_time:{short_name:"swut",pkey:"time",short_pkey:"tm"},
  selected_wide_angle:{short_name:"swa",pkey:"angle",short_pkey:"ang"},
  selected_shots:{short_name:"ss",pkey:"shots",short_pkey:"sh"},
  selected_burst_value:{short_name:"sbv",pkey:"burst_value",short_pkey:"bv"},
  selected_range_mod:{short_name:"srm",pkey:"range_mod",short_pkey:"rm"},
};
maps.beam_map=addShortNameKeys(maps.beam_map);

maps.emw_map=
{
  feature_array:{short_name:"fa",pkey:"feature",short_pkey:"ft"},
  selected_damage:{short_name:"sd",pkey:"damage",short_pkey:"dm"}, 
  selected_attack_factor:{short_name:"saf",pkey:"attack_factor",short_pkey:"af"},
  selected_turns_in_use:{short_name:"stiu",pkey:"turns",short_pkey:"tn"},
};
maps.emw_map=addShortNameKeys(maps.emw_map);

maps.energy_pool_map=
{
  feature_array:{short_name:"fa",pkey:"feature",short_pkey:"ft"},
  selected_energy_pool:{short_name:"sep",pkey:"power_available",short_pkey:"pa"},
  selected_portfolio_size:{short_name:"sps",pkey:"size",short_pkey:"sz"},
};
maps.energy_pool_map=addShortNameKeys(maps.energy_pool_map);

maps.locomotion_map=
{
  selected_locomotion_type:{short_name:"slt",pkey:"type",short_pkey:"ty"},
  selected_locomotion_class:{short_name:"slc",pkey:"name",short_pkey:"nm"},
  slt:{short_name:"selected_locomotion_type",pkey:"type",short_pkey:"ty"},
  slc:{short_name:"selected_locomotion_class",pkey:"name",short_pkey:"nm"},
};

maps.magazine_map=
{
  selected_gun:{short_name:"sg",pkey:"uuid",short_pkey:"uuid"},
  feature_array:{short_name:"fa",pkey:"type",short_pkey:"t"},
  selected_shots:{short_name:"ss"}
};
maps.magazine_map=addShortNameKeys(maps.magazine_map);

maps.melee_map=
{
  selected_damage:{short_name:"sd",pkey:"damage",short_pkey:"dm"}, 
  selected_accuracy:{short_name:"sa",pkey:"accuracy",short_pkey:"ac"},
  feature_array:{short_name:"fa",pkey:"feature",short_pkey:"ft"},
  entangle:{short_name:"ent"},
};
maps.melee_map=addShortNameKeys(maps.melee_map);

maps.missile_map=
{
  selected_damage:{short_name:"sd",pkey:"damage",short_pkey:"dm"}, 
  selected_accuracy:{short_name:"sa",pkey:"accuracy",short_pkey:"ac"},
  selected_pack_size:{short_name:"sps",pkey:"size",short_pkey:"sz"},
  selected_range_mod:{short_name:"srm",pkey:"id",short_pkey:"id"},
  selected_smart:{short_name:"sm",pkey:"smart",short_pkey:"sm"},
  selected_skill:{short_name:"ss",pkey:"skill",short_pkey:"sk"},
  selected_blast_radius:{short_name:"sbr",pkey:"blast_radius",short_pkey:"br"},
  smoke_scatter_duration:{short_name:"ssd"},
  feature_array:{short_name:"fa",pkey:"feature",short_pkey:"ft"},
};
maps.missile_map=addShortNameKeys(maps.missile_map);

maps.projectile_map=
{
  selected_damage:{short_name:"sd",pkey:"damage",short_pkey:"dm"}, 
  selected_accuracy:{short_name:"sa",pkey:"accuracy",short_pkey:"ac"},
  selected_range_mod:{short_name:"srm",pkey:"range_mod",short_pkey:"rm"},
  selected_burst_value:{short_name:"sbv",pkey:"burst_value",short_pkey:"bv"},
  feature_array:{short_name:"fa",pkey:"feature",short_pkey:"ft"},
  selected_multi_feed:{short_name:"smf",pkey:"feeds",short_pkey:"fd"}
};
maps.projectile_map=addShortNameKeys(maps.projectile_map);

maps.reflector_map=
{
  selected_reflector:{short_name:"sr",pkey:"quality_value",short_pkey:"qv"},
  sr:{long_name:"selected_reflector",pkey:"quality_value",short_pkey:"qv"},
};

maps.servo_map=
{
  selected_servo_type:{short_name:"sst",pkey:"type",short_pkey:"ty"},
  selected_servo_class:{short_name:"ssc",pkey:"code",short_pkey:"cd"},
  selected_armor:{short_name:"sar",pkey:"stopping_power",short_pkey:"sp"},
  selected_armor_type:{short_name:"sat",pkey:"damage_coefficient",short_pkey:"dc"},
  selected_absorption:{short_name:"sab",pkey:"absorption",short_pkey:"ab"},
  kills_space_trade:{short_name:"kst"}
};
maps.servo_map=addShortNameKeys(maps.servo_map);

maps.shield_map=
{
  shield_class:{short_name:"sc",pkey:"stopping_power",short_pkey:"sp"},
  //or for ablative
  //shield_class:{short_name:"sc",pkey:"kills",short_pkey:"kl"},
  defense_ability:{short_name:"da",pkey:"da",short_pkey:"da"},
  binder:{short_name:"bnd",pkey:"stopping_power_modifier",short_pkey:"spm"},
  reset_time:{short_name:"rt",pkey:"time",short_pkey:"tm"},
  turns_in_use:{short_name:"tiu",pkey:"time",short_pkey:"tm"},
  weakness_array:{short_name:"wa",pkey:"weakness",short_pkey:"wk"},
  armor_type:{short_name:"at",pkey:"damage_coefficient",short_pkey:"dc"},
  absorption:{short_name:"ab",pkey:"absorption",short_pkey:"ab"},
};
maps.shield_map=addShortNameKeys(maps.shield_map);

/* let efficiencies_map=
{
  space:"sp"
};

let efficiencies_space_map=
{
  cost:"ct",
  modifier:"md"
}; */

/* let feature_array_map=
{
  feature:"ft"
};

let weakness_array_map=
{
  weakness:"wk"
};

let magazine_feature_array_map=
{
  type:"ty"
}; */

/* let melee_entangle=
{
  range_modifier:"rm",
  damage_modifier:"dm"
}; */

/* let kill_space_trade=
{
  space_modifier:"sm",
  kills_modifier:"km",
  cost:"ct"
}; */

export {maps};