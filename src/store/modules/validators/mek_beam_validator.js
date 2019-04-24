let validators={};
let alerts=[];

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

let runValidator=(_validator_data, _component)=>
{
    return validators[_validator_data.validator](_validator_data.pkey,_component[_validator_data.component_prop]);
};

let updateMultipliers=(_updateList, _component)=>
{
    let component=_component;
    if(_updateList.length==0)
    {
        return component;
    }
    _updateList.forEach((_component_prop)=>
    {
        if(_component_prop=="feature_array")
        {
            component.cost_multipliers.feature=_component[_component_prop].reduce((_cm, _feat)=>
            {
                return _cm = _cm * _feat.cost;
            },1);
        }
        component.cost_multipliers[_component_prop]=_component[_component_prop].cost;
    });
    return component;
};

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    let updateList=[];
    /**
     * 
     * implement array-of-objects componentsToValidate
     * implement runValidator forEach loop of above
     * 
     */
    let componentsToValidate=
    [
        {validator:"damage",pkey:"damage",component_prop:"selected_damage"},
        {validator:"burst_value",pkey:"burst_value",component_prop:"selected_burst_value"},
        {validator:"accuracy",pkey:"accuracy",component_prop:'selected_accuracy'},
        {validator:"warm_up",pkey:"time",component_prop:'selected_warm_up_time'},
        {validator:"wide_angle",pkey:"angle",component_prop:'selected_wide_angle'},
    ];
    componentsToValidate.forEach((_val)=>
    {//loop thru and validate mek_beam damage, burst_val, accuracy, warm_up, wide_angle
        validatedData=runValidator(_val, cleanedComponent);
        cleanedComponent[_val.component_prop]=validatedData.data;
        alerts=alerts.concat(validatedData.alerts);
        if(validatedData.update && _val.component_prop!="selected_damage")
        {
            updateList.push(_val.component_prop);
        }
    });
    //extract base range for range_mod update
    let base_range=cleanedComponent.selected_damage.range;
    //update range_mod table
    validators.update_range_mod(base_range);
    //validate range mod
    validatedData=validators.range_mod("range_mod",_component.selected_range_mod);
    alerts=alerts.concat(validatedData.alerts);
    if(validatedData.update){updateList.push("selected_range_mod");}
    cleanedComponent.selected_range_mod=validatedData.data;
    //extract BV for feature data table update
    let burst_value=cleanedComponent.selected_burst_value.burst_value;
    //update feature table
    validators.filter_feature(burst_value);
    //validate features
    validatedData=validators.feature(_component.feature_array,"feature");
    alerts=alerts.concat(validatedData.alerts);
    if(validatedData.update){updateList.push("feature_array");}
    cleanedComponent.feature_array=validatedData.cleaned_array;
    //extract if Mag-Fed
    let magFed=cleanedComponent.feature_array.some(_val=>_val.feature=="Mag-Fed");
    //update shots table
    validators.update_shots(magFed);
    //validate shots
    validatedData=validators.shots("shots",_component.selected_shots);
    alerts=alerts.concat(validatedData.alerts);
    if(validatedData.update){updateList.push("selected_shots");}
    cleanedComponent.selected_shots=validatedData.data;
    //update cost_multipliers for components needing update
    cleanedComponent=updateMultipliers(updateList,cleanedComponent);
    //validate space efficiency
    cleanedComponent.cost_multiplier=Object.entries(cleanedComponent.cost_multiplier).reduce((_multi, _val)=>
    {
        return _multi*_val[1];
    },1);
    let total_cost=cleanedComponent.selected_damage.cost * cleanedComponent.cost_multiplier;
    validatedData=validators.space_efficiency(cleanedComponent.efficiencies.space, total_cost, "Mek-Beam");
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.efficiencies.space=validatedData.data;
    //update static values
    cleanedComponent.damage_capacity=cleanedComponent.selected_damage.damage;
    cleanedComponent.weight=cleanedComponent.damage_capacity/2;

    return cleanedComponent;
};

let getAlerts=()=>
{
    return alerts;
};

export {validateComponent, getAlerts};