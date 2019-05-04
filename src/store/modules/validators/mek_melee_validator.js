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

validators.derived=(_component)=>
{
    let cleanedComponent=_component;
    let alerts=[];
    let validatedData;
    let updateList=["selected_accuracy","feature_array"];
    //update cost_multipliers for components needing update
    validatedData=updateMultipliers(updateList,cleanedComponent,"Mek-Melee");
    cleanedComponent.cost_multipliers=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    //update cost_multiplier
    let cost_multiplier=Object.entries(cleanedComponent.cost_multipliers).reduce((_multi, _val)=>
    {//calc new cost_multiplier
        return _multi*_val[1];
    },1);
    cost_multiplier=round(cost_multiplier,2);
    if(cleanedComponent.cost_multiplier!=cost_multiplier)
    {
        alerts.push("Mek-Melee: cost_multiplier");
        alerts.push("**** Invalid Cost Multiplier. Correcting. ****");
        cleanedComponent.cost_multiplier=round(cost_multiplier,2);
    }
    let newDamageCapacity=cleanedComponent.selected_damage.damage;
    if(cleanedComponent.damage_capacity!=newDamageCapacity)
    {
        alerts.push("Mek-Melee: damage_capacity");
        alerts.push("**** Invalid Damage Capacity. Correcting. ****");
        cleanedComponent.damage_capacity=newDamageCapacity;
    }
    let newWeight=newDamageCapacity/2;
    if(cleanedComponent.weight!=newWeight)
    {
        alerts.push("Mek-Melee: weight");
        alerts.push("**** Invalid Weight. Correcting. ****");
        cleanedComponent.weight=newWeight;
    }
    let newCost=(cleanedComponent.selected_damage.cost * cost_multiplier) + cleanedComponent.efficiencies.space.cost;
    newCost=round(newCost,2);
    if(cleanedComponent.cost!=newCost)
    {
        alerts.push("Mek-Melee: cost");
        alerts.push("**** Invalid Cost. Correcting. ****");
        cleanedComponent.cost=newCost;
    }

    //check and update entangle-range trade values
    let isEntangle=cleanedComponent.feature_array.some((_val)=>
    {
        return _val.feature=="Entangle";
    });
    if(isEntangle)
    {
        let base_damage=cleanedComponent.selected_damage.damage;
        let range_mod=cleanedComponent.entangle.range_modifier;
        let damage_mod=cleanedComponent.entangle.damage_modifier;
        let cleanedEntangle=validators.entangle(base_damage, range_mod, damage_mod);
        cleanedComponent.entangle={range_modifier:cleanedEntangle.range_mod, damage_modifier:cleanedEntangle.damage_mod};
        alerts=alerts.concat(cleanedEntangle.alerts);
        if(cleanedComponent.final_damage!=cleanedEntangle.damage)
        {
            alerts.push("Mek-Melee: final_damage");
            alerts.push("**** Invalid Final Damage. Correcting. ****");
            cleanedComponent.final_damage=cleanedEntangle.damage;
        }
    }
    else if(cleanedComponent.entangle!==undefined)
    {
        alerts.push("Mek-Melee: entangle");
        alerts.push("**** Invalid Entangle. Correcting. ****");
        cleanedComponent.entangle={range_mod:0,damage_mod:0};
        if(cleanedComponent.final_damage!=cleanedComponent.selected_damage.damage)
        {
            alerts.push("Mek-Melee: final_damage");
            alerts.push("**** Invalid Final Damage. Correcting. ****");
        }
    }
    return {data:cleanedComponent, alerts:alerts};
};

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
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
    validatedData=validators.derived(cleanedComponent);
    cleanedComponent=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    //validate space efficienc
    let base_cost=cleanedComponent.selected_damage.cost * cleanedComponent.cost_multiplier;
    validatedData=validators.space_efficiency(cleanedComponent.efficiencies.space, base_cost, "Mek-Melee");
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.efficiencies.space=validatedData.data;

    return {data:cleanedComponent, alerts:alerts};
};

export {validateComponent};