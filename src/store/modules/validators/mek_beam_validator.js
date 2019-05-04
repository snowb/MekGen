let validators={};

import(/* webpackChunkName: "mek_beam-accuracy-data-module" */"@/data_table_modules/mek_beam/mek_beam-accuracy-data-module")
.then((_module)=>
{
    validators.accuracy=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-burst-value-data-module" */"@/data_table_modules/mek_beam/mek_beam-burst-value-data-module")
.then((_module)=>
{
    validators.burst_value=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-damage-data-module" */"@/data_table_modules/mek_beam/mek_beam-damage-data-module")
.then((_module)=>
{
    validators.damage=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-feature-data-module" */"@/data_table_modules/mek_beam/mek_beam-feature-data-module")
.then((_module)=>
{
    validators.filter_feature=_module.filter_data_table;//filter based on burst_value
    validators.feature=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-range-mod-data-module" */"@/data_table_modules/mek_beam/mek_beam-range-mod-data-module")
.then((_module)=>
{
    validators.update_range_mod=_module.create_range_mod_data_table;//filter based on base_range
    validators.range_mod=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-shots-data-module" */"@/data_table_modules/mek_beam/mek_beam-shots-data-module")
.then((_module)=>
{
    validators.update_shots=_module.filter_shots_data_table;//update based on magfed feature
    validators.shots=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-warm-up-data-module" */"@/data_table_modules/mek_beam/mek_beam-warm-up-data-module")
.then((_module)=>
{
    validators.warm_up=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-wide-angle-data-module" */"@/data_table_modules/mek_beam/mek_beam-wide-angle-data-module")
.then((_module)=>
{
    validators.wide_angle=_module.cleaned_feature;
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
    let updateList=["selected_burst_value","selected_accuracy","selected_warm_up_time","selected_wide_angle","selected_range_mod","feature_array","selected_shots"];
    //update cost_multipliers for components needing update
    validatedData=updateMultipliers(updateList,cleanedComponent,"Mek-Beam");
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
        alerts.push("Mek-Beam: cost_multiplier");
        alerts.push("**** Invalid Cost Multiplier. Correcting. ****");
        cleanedComponent.cost_multiplier=round(cost_multiplier,2);
    }
    let newDamageCapacity=cleanedComponent.selected_damage.damage;
    if(cleanedComponent.damage_capacity!=newDamageCapacity)
    {
        alerts.push("Mek-Beam: damage_capacity");
        alerts.push("**** Invalid Damage Capacity. Correcting. ****");
        cleanedComponent.damage_capacity=newDamageCapacity;
    }
    let isFragile=cleanedComponent.feature_array.some((_val)=>
    {
        return _val.feature=="Fragile";
    });
    let newWeight=isFragile ? 1 : newDamageCapacity/2;
    if(cleanedComponent.weight!=newWeight)
    {
        alerts.push("Mek-Beam: weight");
        alerts.push("**** Invalid Weight. Correcting. ****");
        cleanedComponent.weight=newWeight;
    }
    let magFed=cleanedComponent.feature_array.some((_val)=>
    {
        return _val.feature=="Mag-Fed";
    });
    magFed=magFed ? 1 : 0;
    let newCost=(cleanedComponent.selected_damage.cost * cost_multiplier) + cleanedComponent.efficiencies.space.cost + magFed;
    newCost=round(newCost,2);
    if(cleanedComponent.cost!=newCost)
    {
        alerts.push("Mek-Beam: cost");
        alerts.push("**** Invalid cost. Correcting. ****");
        cleanedComponent.cost=newCost;
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
        {validator:validators.burst_value,pkey:"burst_value",component_prop:"selected_burst_value"},
        {validator:validators.accuracy,pkey:"accuracy",component_prop:'selected_accuracy'},
        {validator:validators.warm_up,pkey:"time",component_prop:'selected_warm_up_time'},
        {validator:validators.wide_angle,pkey:"angle",component_prop:'selected_wide_angle'},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts)
    //update range_mod table
    validators.update_range_mod(cleanedComponent.selected_damage.range);
    //update feature table
    validators.filter_feature(cleanedComponent.selected_burst_value.burst_value);
    //extract if Mag-Fed
    let magFed=cleanedComponent.feature_array.some(_val=>_val.feature=="Mag-Fed");
    //update shots table
    validators.update_shots(magFed);
    //loop thru dependent validations

    componentsToValidate=
    [
        {validator:validators.range_mod,pkey:"range_mod",component_prop:"selected_range_mod"},
        {validator:validators.feature,pkey:"feature",component_prop:"feature_array"},
        {validator:validators.shots,pkey:"shots",component_prop:'selected_shots'},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts);

    //update derived values, and cost_multi
    validatedData=validators.derived(cleanedComponent);
    cleanedComponent=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);   
    let base_cost=cleanedComponent.selected_damage.cost * cleanedComponent.cost_multiplier;
    //validate space efficiency
    validatedData=validators.space_efficiency(cleanedComponent.efficiencies.space, base_cost, "Mek-Beam");
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.efficiencies.space=validatedData.data;

    return {data:cleanedComponent, alerts:alerts};
};

export {validateComponent};