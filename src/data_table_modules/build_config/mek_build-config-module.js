let configurationsList=
[
  //wildly incomplete
  //with a separate data module for modifiers
  //for use with custom configs
  {
    config: "Humanoid",
    cost: 0.375,
    hardpoints: ["all"],
    propulsion: ["all"],
    flight_without_propulsion: false,
    no_hands: false,
    modifiers: {
    }
  },
  {
    config: "Tank",
    cost: 0.3,
    propulsion: ["wheels", "treads", "ges", "gravitics"],
    hardpoints: ["torso", "head", "pod"],
    no_hands: true,
    flight_without_propulsion: false,
    modifiers: {
      maneuver_value: -1,
      armor_stopping_power: +2,
    }
  },
  {
    config: "Avian",
    cost: 0.35,
    propulsion: ["legs", "ges", "thrusters", "gravitics"],
    hardpoints: ["all"],
    no_hands: true,
    flight_without_propulsion: true,
    modifiers:
    {
      maneuver_value: -1,
      melee_damage: +2,
      flight_movement_allowance: +6,
      land_movement_alloance: +0,
    }
  },
  {
    config: "Fighter/Corvette",
    cost: 0.3,
    propulsion: ["ges", "thrusters", "gravitics"],
    hardpoints: ["torso", "head", "wings", "pod"],
    no_hands: true,
    flight_without_propulsion: false,
    modifiers:
    {
      maneuver_value: -2,
      flight_movement_allowance: "x2",
      minimum_flight_movement_alloance: 4,
      land_movement_alloance: +0,
    }
  }
];

let hardpointCompare=(_hardpoints1, _hardpoints2)=>
{
  let filtered=_hardpoints1.filter(_hardpoint =>
  {
    return !_hardpoints2.includes(_hardpoint);
  });
  return filtered.length>0 ? 1 : 0;
};

let configCompare=(_config1, _config2)=>
{
  let config1=_config1.config;
  let config2=_config2.config;

  switch(true)
  {
    case config1==config2:
      return 0;
    case config1=="Humanoid":
      return 1;
    case config2=="Humanoid":
      return -1;
  }

  let hardpoints1=_config1.hardpoints;
  let hardpoints2=_config2.hardpoints;
  switch(true)
  {
    case hardpoints1[0]=="all" && hardpoints2[0]=="all":
      return 0;
    case hardpoints1[0]=="all":
      return 1;
    case hardpoints2[0]=="all":
      return -1;
    case hardpoints1.length > hardpoints2.length:
      return 1;
    case hardpoints1.length < hardpoints2.length:
      return -1;
  }
  return hardpointCompare(hardpoints1,hardpoints2);
};

let filteredConfigurationsList=configurationsList;
//let configListCached=false;
/* let filteredConfigurationsList=(_base_config)=>
{
  if(!configListCached)
  {
    configListCached=true;
    cachedFilteredConfigList=configurationsList.filter((_config)=>
    {
      return configCompare(_base_config,_config)>=0;
    });
  }
  return cachedFilteredConfigList;
}; */

let updateConfigurationsList=(_base_config)=>
{
  filteredConfigurationsList=configurationsList.filter((_config)=>
    {
      return configCompare(_base_config,_config)>=0;
    });
};

let updateBaseConfiguration=(_working_configurations)=>
{
  let working_clone=JSON.parse(JSON.stringify(_working_configurations));
  let base_config_uuid=Object.keys(working_clone)[0];

  if(Object.keys(working_clone).length==1)
  {
    working_clone[base_config_uuid].base_config=true;
  }
  else
  {
    for(let _config_uuid in working_clone)
    {
      if(working_clone[_config_uuid].base_config)
      {
        delete working_clone[_config_uuid].base_config;
      }
      if(configCompare(working_clone[_config_uuid],working_clone[base_config_uuid])==1)
      {
        base_config_uuid=_config_uuid;
      }
    }
  }
  
  working_clone[base_config_uuid].base_config=true;
  return {configurations:working_clone,base_config_uuid:base_config_uuid};
};

/*
let validateConfiguration=(_config)=>
{
  validate the configuration against configurationsList
  except for Custom
  which must be validated against the individual properties
}
*/

export {configurationsList, filteredConfigurationsList, updateConfigurationsList, updateBaseConfiguration};