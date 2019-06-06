import {maps} from "./json_condensor_maps";

let isUniversal=(_property)=>
{
  return maps.universal_map[_property]!==undefined && maps.universal_map[_property].long_name!==undefined;

};

let valid_property=(_property, _component_type)=>
{
  return maps[_component_type+"_map"][_property]!==undefined && maps[_component_type+"_map"][_property].long_name!==undefined;
};

let get_long_name=(_property, _component_type)=>
{
  return maps[_component_type+"_map"][_property].long_name;
};

let get_pkey=(_property, _component_type)=>
{
  return maps[_component_type+"_map"][_property].pkey;
};

let expand_array=(_array, _pkey)=>
{
  return _array.map((_el)=>
  {
    let obj={};
    obj[_pkey]=_el;
    return obj;
  });
}

let embiggen=(_component)=>
{
  let embiggened_object={};
  let component_type=_component.ct;
  let kst_kills=0;
  let kst_space=0;
  for(let property in _component)
  {
    let subcomp_obj={};
    switch(true)
    {
      case isUniversal(property) && property=="ef":
        embiggened_object[maps.universal_map[property].long_name]=
        { space:{ cost:_component[property].sp.ct, modifier:_component[property].sp.md } };
        break;

      case isUniversal(property):
        embiggened_object[maps.universal_map[property].long_name]=_component[property];
        break;

      case valid_property(property, component_type) && property=="ent":
        embiggened_object[maps.melee_map[property].long_name]=
        { range_modifier:_component[property].rm, damage_modifier:_component[property].dm };
        break;
      
      case valid_property(property, component_type) && property=="kst":
        kst_kills=_component.sst=="Torso"? _component.ssc*2
                  : _component.sst=="Pod"? 0
                  : _component.ssc*1;
        kst_space=_component.sst=="Torso"? _component.ssc*2
                  : _component.sst=="Pod"? _component.ssc*2
                  : _component.ssc*1;
        embiggened_object[maps.servo_map[property].long_name]=
      { kills_modifier:_component[property].km, 
        space_modifier:_component[property].sm, 
        cost: _component[property].ct,
        kills:kst_kills,
        space:kst_space};
        break;
      
      case valid_property(property, component_type) && ["fa","wa"].includes(property):
        embiggened_object[get_long_name(property,component_type)]=expand_array(_component[property], get_pkey(property,component_type));
        break;

      case valid_property(property, component_type):
        subcomp_obj[get_pkey(property,component_type)]=_component[property];
        embiggened_object[get_long_name(property,component_type)]=subcomp_obj;
        break;
    }
  }

  return embiggened_object;
};

export {embiggen};