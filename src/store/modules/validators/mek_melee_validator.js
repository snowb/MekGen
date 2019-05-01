let validators={};

import(/* webpackChunkName: "mek_melee-accuracy-data-module" */"@/data_table_modules/mek_melee/mek_melee-accuracy-data-module")
.then((_module)=>
{
    validators.accuracy=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_melee-damage-data-module" */"@/data_table_modules/mek_melee/mek_melee-damage-data-module")
.then((_module)=>
{
    validators.damage=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_melee-feature-data-module" */"@/data_table_modules/mek_melee/mek_melee-feature-data-module")
.then((_module)=>
{
    validators.feature=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_melee-entangle-range-data-module" */"@/data_table_modules/mek_melee/mek_melee-entangle-range-data-module")
.then((_module)=>
{
    validators.entangle=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_space-efficiency-data-module" */"@/data_table_modules/universal/mek_space-efficiency-data-module")
.then((_module)=>
{
    validators.space_efficiency=_module.validate_efficiency;
});

let loopValidators, updateMultipliers, round;
import(/* webpackChunkName: "validator_functions" */"./validator_functions")
.then((_module)=>
{
    ({loopValidators, updateMultipliers, round} = _module);
});

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    let updateList=["selected_accuracy","feature_array"];
    let loopAlerts;
    let alerts=[];
    //loop thru independent validations
    let componentsToValidate=
    [
        {validator:validators.damage,pkey:"damage",component_prop:"selected_damage"},
        {validator:validators.accuracy,pkey:"accuracy",component_prop:'selected_accuracy'},
        {validator:validators.feature,pkey:"feature",component_prop:'feature_array'},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts)

    //update cost_multipliers for components needing update
    validatedData=updateMultipliers(updateList,cleanedComponent);
    cleanedComponent.cost_multipliers=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    //validate space efficiency
    let cost_multiplier=Object.entries(cleanedComponent.cost_multipliers).reduce((_multi, _val)=>
    {//calc new cost_mulitplier
        return _multi*_val[1];
    },1);
    cleanedComponent.cost_multiplier=round(cost_multiplier,2);

    let total_cost=cleanedComponent.selected_damage.cost * cleanedComponent.cost_multiplier;
    validatedData=validators.space_efficiency(cleanedComponent.efficiencies.space, total_cost, "Mek-Melee");
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.efficiencies.space=validatedData.data;
    //update static values
    cleanedComponent.damage_capacity=cleanedComponent.selected_damage.damage;
    cleanedComponent.weight=cleanedComponent.damage_capacity/2;

    //check and update entangle-range trade values
    let isEntangle=cleanedComponent.feature_array.some((_val)=>
    {
        return _val.feature=="Entangle";
    });
    if(isEntangle)
    {
        let base_damage=cleanedComponent.selected_damage.damage;
        let range_mod=cleanedComponent.entangle.range_mod;
        let damage_mod=cleanedComponent.entangle.damage_mod;
        let cleanedEntangle=validators.entangle(base_damage, range_mod, damage_mod);
        cleanedComponent.entangle={range_mod:cleanedEntangle.range_mod, damage_mod:cleanedEntangle.damage_mod};
        cleanedComponent.final_damage=cleanedEntangle.damage;
        alerts=alerts.concat(cleanedEntangle.alerts);
    }
    else if(cleanedComponent.entangle!==undefined)
    {
        cleanedComponent.entangle={range_mod:0,damage_mod:0};
        cleanedComponent.final_damage=cleanedComponent.selected_damage.damage;
    }

    return {data:cleanedComponent, alerts:alerts};
};

export {validateComponent};