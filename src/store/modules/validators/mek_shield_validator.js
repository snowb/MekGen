let validators = {};

import(/* webpackChunkName: "mek_shield-type-data-module" */"@/data_table_modules/mek_shield/mek_shield-type-data-module")
  .then((_module) => {
    validators.type = _module.cleaned_feature;
  });

  import(/* webpackChunkName: "mek_shield-binder-data-module" */"@/data_table_modules/mek_shield/mek_shield-binder-data-module")
  .then((_module) => {
    validators.binder = _module.cleaned_feature;
    validators.create_binder = _module.create_binder_data_table;
  });

import(/* webpackChunkName: "mek_shield-class-data-module" */"@/data_table_modules/mek_shield/mek_shield-class-data-module")
  .then((_module) => {
    validators.class = _module.cleaned_feature;
    validators.create_class = _module.create_class_data_table;
  });

import(/* webpackChunkName: "mek_shield-weakness-data-module" */"@/data_table_modules/mek_shield/mek_shield-weakness-data-module")
  .then((_module) => {
    validators.weakness = _module.cleaned_weakness;
  });

import(/* webpackChunkName: "mek_shield-defense-ability-data-module" */"@/data_table_modules/mek_shield/mek_shield-defense-ability-data-module")
  .then((_module) => {
    validators.defense_ability = _module.cleaned_feature;
  });

import(/* webpackChunkName: "mek_shield-reset-time-data-module" */"@/data_table_modules/mek_shield/mek_shield-reset-time-data-module")
  .then((_module) => {
    validators.reset_time = _module.cleaned_feature;
  });

import(/* webpackChunkName: "mek_shield-turns-in-use-data-module" */"@/data_table_modules/mek_shield/mek_shield-turns-in-use-data-module")
  .then((_module) => {
    validators.turns = _module.cleaned_feature;
  });

import(/* webpackChunkName: "mek_armor-type-data-module" */"@/data_table_modules/mek_armor/mek_armor-type-data-module")
  .then((_module) => {
    validators.armor_type = _module.cleaned_feature;
  });

import(/* webpackChunkName: "mek_armor-RAM-data-module" */"@/data_table_modules/mek_armor/mek_armor-RAM-data-module")
  .then((_module) => {
    validators.armor_RAM = _module.cleaned_feature;
  });

import(/* webpackChunkName: "mek_space-efficiency-data-module" */"@/data_table_modules/universal/mek_space-efficiency-data-module")
  .then((_module) => {
    validators.space_efficiency = _module.validate_efficiency;
  });

let loopValidators, updateMultipliers, round;
import(/* webpackChunkName: "validator_functions" */"./validator_functions")
  .then((_module) => {
    ({ loopValidators, updateMultipliers, round } = _module);
  });

validators.derived = (_component) => {
  let cleanedComponent = _component;
  let alerts = [];
  let validatedData;
  let updateList;
  switch(cleanedComponent.type.name)
  {
    case "Standard":
      updateList = 
      [
        "binder", 
        "defense_ability",
        "armor_type",
        "absorption"
      ];
      break;
    case "Active":
      updateList = 
      [
        "binder", 
        "armor_type",
        "absorption"
      ];
      break;
    case "Reactive":
      updateList = 
      [
        "reset_time",
        "turns_in_use",
        "weakness_array"
      ];
  }
  //update cost_multipliers for components needing update
  validatedData = updateMultipliers(updateList, cleanedComponent, "Mek-Shield");
  cleanedComponent.cost_multipliers = validatedData.data;
  alerts = alerts.concat(validatedData.alerts);
  //update cost_multiplier
  let cost_multiplier = Object.entries(cleanedComponent.cost_multipliers).reduce((_multi, _val) => {
    //calc new cost_multiplier
    if(["armor_type","absorption"].includes(_val[0]))
    {
      return _multi;
    }
    return _multi * _val[1];
  }, 1);
  cost_multiplier = round(cost_multiplier, 2);
  if (cleanedComponent.cost_multiplier != cost_multiplier) {
    alerts.push("Mek-Shield: cost_multiplier");
    alerts.push("**** Invalid Cost Multiplier. Correcting. ****");
    cleanedComponent.cost_multiplier = round(cost_multiplier, 2);
  }
  let newWeight = cleanedComponent.shield_class.stopping_power/2;
  if (cleanedComponent.weight != newWeight) {
    alerts.push("Mek-Shield: weight");
    alerts.push("**** Invalid Weight. Correcting. ****");
    cleanedComponent.weight = newWeight;
  }
  let armor_multiplier=cleanedComponent.cost_multipliers.armor_type*cleanedComponent.cost_multipliers.absorption;
  let newCost = (cleanedComponent.shield_class.cost * cost_multiplier * armor_multiplier) + cleanedComponent.efficiencies.space.cost;
  newCost = round(newCost, 2);
  if (cleanedComponent.cost != newCost) {
    alerts.push("Mek-Shield: cost");
    alerts.push("**** Invalid Cost. Correcting. ****");
    cleanedComponent.cost = newCost;
  }
  let newIsAblative=cleanedComponent.weakness_array===undefined?false:cleanedComponent.weakness_array.some((_weakness)=>
  {
    return _weakness.weakness=="Ablative";
  });
  if(cleanedComponent.is_ablative!=newIsAblative)
  {
    alerts.push("Mek-Shield: is_ablative");
    alerts.push("**** Invalid Is_Ablative. Correcting. ****");
    cleanedComponent.is_ablative = newIsAblative;
  }

  return { data: cleanedComponent, alerts: alerts };
};

let validateComponent = (_component) => {
  let cleanedComponent = _component;
  let validatedData;
  let loopAlerts;
  let alerts = [];
  //valid super-master type data
  validatedData=validators.type("name",cleanedComponent.type);
  alerts = alerts.concat(validatedData.alerts);
  cleanedComponent.type = validatedData.data;
  //update shield class data
  validators.create_class(cleanedComponent.type.name.toLowerCase());
  //validate shield class data
  validatedData=validators.class("code",cleanedComponent.shield_class);
  alerts = alerts.concat(validatedData.alerts);
  cleanedComponent.shield_class = validatedData.data;
  //update binder data for Standard and Active shields
  if(["Standard","Active"].includes(cleanedComponent.type.name))
  {
    validators.create_binder(cleanedComponent.shield_class.stopping_power);
  }
  //setup validation loopers for shield type
  let componentsToValidate=[];
  switch(cleanedComponent.type.name)
  {
    case "Standard":
      componentsToValidate=
      [
        { validator: validators.defense_ability, pkey: "da", component_prop: "defense_ability" },
      ];
    // eslint-disable-next-line
    case "Active":
      componentsToValidate=
      [
        ...componentsToValidate,
        { validator: validators.binder, pkey: "stopping_power_modifier", component_prop: "binder" },
        { validator: validators.armor_type, pkey: "type", component_prop: "armor_type" },
        { validator: validators.armor_RAM, pkey: "absorption", component_prop: "absorption" },
      ];
      break;
    case "Reactive":
      componentsToValidate=
      [
        { validator: validators.reset_time, pkey: "time", component_prop: "reset_time" },
        { validator: validators.turns, pkey: "time", component_prop: "turns_in_use" },
        { validator: validators.weakness, pkey: "weakness", component_prop: "weakness_array" },
      ];
      break;
  }
  //loop thru validations
  ({ cleanedComponent, loopAlerts } = loopValidators(componentsToValidate, cleanedComponent));
  alerts = alerts.concat(loopAlerts)
  //update cost_multipliers for components needing update
  validatedData = validators.derived(cleanedComponent);
  cleanedComponent = validatedData.data;
  alerts = alerts.concat(validatedData.alerts);
  //validate space efficienc
  validatedData = validators.space_efficiency(cleanedComponent.efficiencies.space, cleanedComponent.cost, "Mek-Shield");
  alerts = alerts.concat(validatedData.alerts);
  cleanedComponent.efficiencies.space = validatedData.data;

  return { data: cleanedComponent, alerts: alerts };
};

export { validateComponent };