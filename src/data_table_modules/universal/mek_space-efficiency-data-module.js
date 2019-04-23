let isValid=(_val)=>
{
  return _val!==undefined && _val!==null && _val!="";
};

let validate_efficiency=(_efficiency, _raw_space, _parent_component_name)=>
{
  let update=false;
  let data={modifier:0,cost:0};
  let alerts=[];
  let parent_component_name=isValid(_parent_component_name) ? _parent_component_name : "Unknown";

  switch(true)
  {
    case _raw_space===undefined:
    case isNaN(parseFloat(_raw_space)):
    case _efficiency===undefined:
    case _efficiency.modifier===undefined && _efficiency.cost===undefined:
    case isNaN(parseFloat(_efficiency.modifier)) && isNaN(parseFloat(_efficiency.cost)):
      alerts.push(parent_component_name+" - Mek_Space-Efficiency:");
      alerts.push("**** Missing or invalid values, reseting to 0 space efficiency.");
      update=true;
      return {update:update,data:data,alerts:alerts};
  }
  data.modifier=parseFloat(_efficiency.modifier)==parseInt(_efficiency.modifier)
                ? parseInt(_efficiency.modifier)
                : parseFloat(_efficiency.modifier);
  data.cost=parseFloat(_efficiency.cost)==parseInt(_efficiency.cost)
            ? parseInt(_efficiency.cost)
            : parseFloat(_efficiency.cost);
  if(isNaN(data.modifier))
  {
    alerts.push(parent_component_name+" - Mek_Space-Efficiency:");
    alerts.push("**** Missing Modifier, reseting based on Cost.");
    update=true;
    data.modifier=data.cost*2;
  }
  if(isNaN(data.cost))
  {
    alerts.push(parent_component_name+" - Mek_Space-Efficiency:");
    alerts.push("**** Missing Cost, reseting based on Modifier.");
    update=true;
    data.cost=data.modifier/2;
  }
  if(data.modifier>_raw_space)
  {
    alerts.push(parent_component_name+" - Mek_Space-Efficiency:");
    alerts.push("**** Modifier greater than Raw Space. Reseting to 0.");
    update=true;
    data.modifier=0;
    data.cost=0;
  }
  if(data.cost!=(data.modifier/2))
  {
    alerts.push(parent_component_name+" - Mek_Space-Efficiency:");
    alerts.push("**** Modifier/Cost inconsistent. Reseting to Modifier.");
    update=true;
    data.cost=data.modifier/2;
  }

  return {update:update,data:data,alerts:alerts};
};

export {validate_efficiency};