let validators = {};

import(/* webpackChunkName: "mek_missile-accuracy-data-module" */"@/data_table_modules/mek_missile/mek_missile-accuracy-data-module")
  .then((_module) => {
    validators.accuracy = _module.cleaned_feature;
  });

import(/* webpackChunkName: "mek_missile-damage-data-module" */"@/data_table_modules/mek_missile/mek_missile-damage-data-module")
  .then((_module) => {
    validators.damage = _module.cleaned_feature;
  });

import(/* webpackChunkName: "mek_missile-feature-data-module" */"@/data_table_modules/mek_missile/mek_missile-feature-data-module")
  .then((_module) => {
    validators.feature = _module.cleaned_feature;
    validators.feature_filter = _module.filter_data_table;
  });

import(/* webpackChunkName: "mek_missile-blast-radius-data-module" */"@/data_table_modules/mek_missile/mek_missile-blast-radius-data-module")
  .then((_module) => {
    validators.blast_radius = _module.cleaned_feature;
  });

import(/* webpackChunkName: "mek_missile-skill-data-module" */"@/data_table_modules/mek_missile/mek_missile-skill-data-module")
  .then((_module) => {
    validators.skill = _module.cleaned_feature;
  });

import(/* webpackChunkName: "mek_missile-smart-data-module" */"@/data_table_modules/mek_missile/mek_missile-smart-data-module")
  .then((_module) => {
    validators.smart = _module.cleaned_feature;
  });

import(/* webpackChunkName: "mek_missile-range-mod-data-module" */"@/data_table_modules/mek_missile/mek_missile-range-mod-data-module")
  .then((_module) => {
    validators.range_mod = _module.cleaned_feature;
    validators.udpate_range_mod = _module.create_range_mod_data_table;
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
  let updateList = 
    [
      "selected_accuracy", 
      "feature_array",
      "selected_range_mod",
      "selected_blast_radius",
      "selected_skill",
      "selected_smart",
      "selected_pack_size"
    ];
  //validate pack size
  let newPackSize=parseInt(cleanedComponent.selected_pack_size.size);
  if(cleanedComponent.selected_pack_size.size!=newPackSize)
  {//validate shots
      alerts.push("Mek-Missile: selected_pack_size");
      alerts.push("**** Invalid Selected Pack Size. Correcting. ****");
      cleanedComponent.selected_pack_size=isNaN(newPackSize) ? {size:1,cost:1} : {size:newPackSize,cost:newPackSize};
  }
  //update cost_multipliers for components needing update
  validatedData = updateMultipliers(updateList, cleanedComponent, "Mek-Missile");
  cleanedComponent.cost_multipliers = validatedData.data;
  alerts = alerts.concat(validatedData.alerts);
  //update cost_multiplier
  let cost_multiplier = Object.entries(cleanedComponent.cost_multipliers).reduce((_multi, _val) => {//calc new cost_multiplier
    return _multi * _val[1];
  }, 1);
  cost_multiplier = round(cost_multiplier, 2);
  if (cleanedComponent.cost_multiplier != cost_multiplier) {
    alerts.push("Mek-Missile: cost_multiplier");
    alerts.push("**** Invalid Cost Multiplier. Correcting. ****");
    cleanedComponent.cost_multiplier = round(cost_multiplier, 2);
  }
  let newDamageCapacity = round(newPackSize * cleanedComponent.selected_damage.damage/15,2);
  if (cleanedComponent.damage_capacity != newDamageCapacity) {
    alerts.push("Mek-Missile: damage_capacity");
    alerts.push("**** Invalid Damage Capacity. Correcting. ****");
    cleanedComponent.damage_capacity = newDamageCapacity;
  }
  let newWeight = round(newDamageCapacity / 2,2);
  if (cleanedComponent.weight != newWeight) {
    alerts.push("Mek-Missile: weight");
    alerts.push("**** Invalid Weight. Correcting. ****");
    cleanedComponent.weight = newWeight;
  }
  let newCost = (newPackSize * (cleanedComponent.selected_damage.cost * cost_multiplier)) + cleanedComponent.efficiencies.space.cost;
  newCost = round(newCost, 2);
  if (cleanedComponent.cost != newCost) {
    alerts.push("Mek-Missile: cost");
    alerts.push("**** Invalid Cost. Correcting. ****");
    cleanedComponent.cost = newCost;
  }


  return { data: cleanedComponent, alerts: alerts };
};

let validateComponent = (_component) => {
  let cleanedComponent = _component;
  let validatedData;
  let loopAlerts;
  let alerts = [];
  //loop thru independent validations
  let componentsToValidate =
    [
      { validator: validators.damage, pkey: "damage", component_prop: "selected_damage" },
      { validator: validators.accuracy, pkey: "accuracy", component_prop: 'selected_accuracy' },
      { validator: validators.blast_radius, pkey: "blast_radius", component_prop: 'selected_blast_radius' },
      { validator: validators.skill, pkey: "skill", component_prop: 'selected_skill' },
      { validator: validators.smart, pkey: "smart", component_prop: 'selected_smart' },
    ];
  ({ cleanedComponent, loopAlerts } = loopValidators(componentsToValidate, cleanedComponent));
  alerts = alerts.concat(loopAlerts)

  //update feature filter, dependent on smart and blast_radius
  validators.feature_filter(cleanedComponent.selected_blast_radius.blast_radius, cleanedComponent.selected_smart.smart);
  //update range_mod, dependent on base_range from damage
  validators.udpate_range_mod(cleanedComponent.selected_damage.range);
  //loop thru dependent validators
  componentsToValidate =
    [
      { validator: validators.feature, pkey: "feature", component_prop: "feature_array" },
      { validator: validators.range_mod, pkey: "range_mod", component_prop: 'selected_range_mod' },
    ];
  ({ cleanedComponent, loopAlerts } = loopValidators(componentsToValidate, cleanedComponent));
  alerts = alerts.concat(loopAlerts)

  //update cost_multipliers for components needing update
  validatedData = validators.derived(cleanedComponent);
  cleanedComponent = validatedData.data;
  alerts = alerts.concat(validatedData.alerts);
  //validate space efficienc
  validatedData = validators.space_efficiency(cleanedComponent.efficiencies.space, cleanedComponent.cost, "Mek-Missile");
  alerts = alerts.concat(validatedData.alerts);
  cleanedComponent.efficiencies.space = validatedData.data;

  return { data: cleanedComponent, alerts: alerts };
};

export { validateComponent };