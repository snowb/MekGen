let validators={};

import(/* webpackChunkName: "mek_emw-accuracy-data-module" */"@/data_table_modules/mek_emw/mek_emw-accuracy-data-module")
.then((_module)=>
{
    validators.accuracy=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_emw-attack-factor-data-module" */"@/data_table_modules/mek_emw/mek_emw-attack-factor-data-module")
.then((_module)=>
{
    validators.attack_factor=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_emw-damage-data-module" */"@/data_table_modules/mek_emw/mek_emw-damage-data-module")
.then((_module)=>
{
    validators.damage=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_emw-feature-data-module" */"@/data_table_modules/mek_emw/mek_emw-feature-data-module")
.then((_module)=>
{
    validators.filter_feature=_module.filter_data_table;//filter based on burst_value
    validators.feature=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_emw-turns-in-use-data-module" */"@/data_table_modules/mek_emw/mek_emw-turns-in-use-data-module")
.then((_module)=>
{
    validators.turns_in_use=_module.cleaned_feature;
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
    let updateList=["selected_turns_in_use","selected_accuracy","selected_attack_factor","feature_array"];
    let loopAlerts;
    let alerts=[];
    //loop thru independent validations
    let componentsToValidate=
    [
        {validator:validators.damage,pkey:"damage",component_prop:"selected_damage"},
        {validator:validators.turns_in_use,pkey:"turns",component_prop:"selected_turns_in_use"},
        {validator:validators.accuracy,pkey:"accuracy",component_prop:'selected_accuracy'},
        {validator:validators.attack_factor,pkey:"attack_factor",component_prop:'selected_attack_factor'},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts)
    //update feature table
    validators.filter_feature(cleanedComponent.selected_turns_in_use.turns=="__INFINITY__");
    //loop thru dependent validations
    componentsToValidate=
    [
        {validator:validators.feature,pkey:"feature",component_prop:"feature_array"},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts)
    //update cost_multipliers for components needing update
    cleanedComponent=updateMultipliers(updateList,cleanedComponent);
    //validate space efficiency
    let cost_multiplier=Object.entries(cleanedComponent.cost_multipliers).reduce((_multi, _val)=>
    {//calc new cost_multiplier
        return _multi*_val[1];
    },1);
    cleanedComponent.cost_multiplier=round(cost_multiplier,2);
    let total_cost=cleanedComponent.selected_damage.cost * cleanedComponent.cost_multiplier;
    validatedData=validators.space_efficiency(cleanedComponent.efficiencies.space, total_cost, "Mek-EMW");
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.efficiencies.space=validatedData.data;
    //update static values
    cleanedComponent.damage_capacity=cleanedComponent.selected_damage.damage;
    cleanedComponent.weight=cleanedComponent.damage_capacity/2;

    /**
     * 
     * add beam_shield prop update
     * 
     */

    return {data:cleanedComponent,alerts:alerts};
};

export {validateComponent};