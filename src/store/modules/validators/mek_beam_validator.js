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

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    let updateList=["burst_value","accuracy","warm_up_time","wide_angle","range_mod","feature","shots"];
    let loopAlerts;
    let alerts=[];
    //loop thru independent validations
    let componentsToValidate=
    [
        {validator:validators.damage,pkey:"damage",component_prop:"selected_damage",skipUpdateList:true},
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
        {validator:validators.range_mod,pkey:"range_modifier",component_prop:"selected_range_mod"},
        {validator:validators.feature,pkey:"feature",component_prop:"feature_array"},
        {validator:validators.shots,pkey:"shots",component_prop:'selected_shots'},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts)
    //update cost_multipliers for components needing update
    cleanedComponent=updateMultipliers(updateList,cleanedComponent);
    //validate space efficiency
    let cost_mulitplier=Object.entries(cleanedComponent.cost_multipliers).reduce((_multi, _val)=>
    {//calc new cost_mulitplier
        return _multi*_val[1];
    },1);
    cleanedComponent.cost_multiplier=round(cost_mulitplier,2);
    let total_cost=cleanedComponent.selected_damage.cost * cleanedComponent.cost_multiplier;
    validatedData=validators.space_efficiency(cleanedComponent.efficiencies.space, total_cost, "Mek-Beam");
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.efficiencies.space=validatedData.data;
    //update static values
    cleanedComponent.damage_capacity=cleanedComponent.selected_damage.damage;
    cleanedComponent.weight=cleanedComponent.damage_capacity/2;

    return {data:cleanedComponent, alerts:alerts};
};

export {validateComponent};