import {maps} from "./json_condensor_maps";

let isUniversal=(_property)=>
{
  return maps.universal_map[_property]!==undefined && maps.universal_map[_property].short_name!==undefined;

};

let valid_property=(_property, _component_type)=>
{
  return maps[_component_type+"_map"][_property]!==undefined && maps[_component_type+"_map"][_property].short_name!==undefined;
};

let get_short_name=(_property, _component_type)=>
{
  return maps[_component_type+"_map"][_property].short_name;
};

let get_pkey=(_property, _component_type)=>
{
  return maps[_component_type+"_map"][_property].pkey;
};

let compress_array=(_array, _pkey)=>
{
  return _array.reduce((_newarray, _el)=>
  {
    _newarray.push(_el[_pkey]);
    return _newarray;
  },[])
};

let condense=(_component)=>
{
  let condensed_object={};
  let component_type=_component.component_type;
  for(let property in _component)
  {
    switch(true)
    {
      case isUniversal(property) && property=="efficiencies":
        condensed_object[maps.universal_map[property].short_name]=
        { sp:{ ct:_component[property].space.cost, md:_component[property].space.modifier } };
        break;

      case isUniversal(property):
        condensed_object[maps.universal_map[property].short_name]=_component[property];
        break;

      case valid_property(property, component_type) && property=="entangle":
        condensed_object[maps.melee_map[property].short_name]=
        { rm:_component[property].range_modifier, dm:_component[property].damage_modifier };
        break;

      case valid_property(property, component_type) && ["feature_array","weakness_array"].includes(property):
        condensed_object[get_short_name(property,component_type)]=compress_array(_component[property], get_pkey(property,component_type));
        break;

      case valid_property(property, component_type):
        condensed_object[get_short_name(property,component_type)]=_component[property][get_pkey(property,component_type)];
        break;
    }
  }
  return condensed_object;
};

export {condense};