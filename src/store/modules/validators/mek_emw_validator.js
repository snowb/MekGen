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
    validators.update_damage=_module.create_damage_data_table;
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

validators.derived=(_component, _isVarBeamShield, _isBeamShield)=>
{
    let cleanedComponent=_component;
    let alerts=[];
    let validatedData;
    let updateList=["selected_turns_in_use","selected_accuracy","selected_attack_factor","feature_array"];
    //update cost_multipliers for components needing update
    validatedData=updateMultipliers(updateList,cleanedComponent,"Mek-EMW");
    cleanedComponent.cost_multipliers=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    //update cost_multiplier
    let cost_multiplier=Object.entries(cleanedComponent.cost_multipliers).reduce((_multi, _val)=>
    {//calc new cost_multiplier
        return _multi*_val[1];
    },1);
    if(cleanedComponent.cost_multiplier!=cost_multiplier)
    {
        alerts.push("Mek-EMW: cost_multiplier");
        alerts.push("**** Invalid Cost Multiplier. Correcting. ****");
        cleanedComponent.cost_multiplier=round(cost_multiplier,2);
    }
    let newDamageCapacity=cleanedComponent.selected_damage.cost/4;
    if(cleanedComponent.damage_capacity!=newDamageCapacity)
    {
        alerts.push("Mek-EMW: damage_capacity");
        alerts.push("**** Invalid Damage Capacity. Correcting. ****");
        cleanedComponent.damage_capacity=newDamageCapacity;
    }
    let newWeight=newDamageCapacity/2;
    if(cleanedComponent.weight!=newWeight)
    {
        alerts.push("Mek-EMW: weight");
        alerts.push("**** Invalid Weight. Correcting. ****");
        cleanedComponent.weight=newWeight;
    }
    let newCost=cleanedComponent.selected_damage.cost * cost_multiplier;
    if(cleanedComponent.cost!=newCost)
    {
        alerts.push("Mek-EMW: cost");
        alerts.push("**** Invalid cost. Correcting. ****");
        cleanedComponent.cost=newCost;
    }
    let newBeamShield={
            stopping_power:cleanedComponent.selected_damage.cost, 
            defense_accuracy:cleanedComponent.selected_accuracy.accuracy-2,
            damage: cleanedComponent.selected_damage.damage
        };
    if(cleanedComponent.beam_shield===undefined && _isBeamShield)
    {
        alerts.push("Mek-EMW: beam_shield");
        alerts.push("**** Beam Shield data missing. Correcting. ****");
        cleanedComponent.beam_shield=newBeamShield;
    }
    if(cleanedComponent.beam_shield.stopping_power!=newBeamShield.stopping_power)
    {
        alerts.push("Mek-EMW: beam_shield.stopping_power");
        alerts.push("**** Invalid Beam Shield Stopping Power: Correcting. ****");
        cleanedComponent.beam_shield.stopping_power=newBeamShield.stopping_power;
    }
    if(cleanedComponent.beam_shield.defense_accuracy!=newBeamShield.defense_accuracy)
    {
        alerts.push("Mek-EMW: beam_shield.defense_accuracy");
        alerts.push("**** Invalid Beam Shield Defense Accuracy: Correcting. ****");
        cleanedComponent.beam_shield.defense_accuracy=newBeamShield.defense_accuracy;
    }
    if(cleanedComponent.beam_shield.damage!=newBeamShield.damage)
    {
        alerts.push("Mek-EMW: beam_shield.damage");
        alerts.push("**** Invalid Beam Shield Damage: Correcting. ****");
        cleanedComponent.beam_shield.damage=newBeamShield.damage;
    }

    return {data:cleanedComponent, alerts:alerts};
};

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    let loopAlerts;
    let alerts=[];
    //validate turns in use as feature array is dependent
    validatedData=validators.turns_in_use("turns",cleanedComponent.selected_turns_in_use);
    cleanedComponent.selected_turns_in_use=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    //update feature table
    validators.filter_feature(cleanedComponent.selected_turns_in_use.turns=="__INFINITY__");
    //validate feature_array, as selected_damage is dependent
    validatedData=validators.feature(cleanedComponent.feature_array,"feature");
    cleanedComponent.feature_array=validatedData.cleaned_array;
    alerts=alerts.concat(validatedData.alerts);
    //update isBeamShield and isVariableBeamShield
    let isVariableBeamShield=false;
    let isBeamShield=cleanedComponent.feature_array.some((_feat)=>
    {
        if(/.*variable.*beam.*shield.*/gi.test(_feat.feature))
        {
            isVariableBeamShield=true;
        }
        return /.*beam.*shield.*/gi.test(_feat.feature);
    });
    //update damage validator
    validators.update_damage(isBeamShield && !isVariableBeamShield);
    //loop thru other validations
    let componentsToValidate=
    [
        {validator:validators.damage,pkey:"cost",component_prop:"selected_damage"},
        {validator:validators.accuracy,pkey:"accuracy",component_prop:'selected_accuracy'},
        {validator:validators.attack_factor,pkey:"attack_factor",component_prop:'selected_attack_factor'},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts)
    
    //call validators.derived() here
    validatedData=validators.derived(cleanedComponent, isVariableBeamShield, isBeamShield);
    cleanedComponent=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    
    let total_cost=cleanedComponent.selected_damage.cost * cleanedComponent.cost_multiplier;
    //update space efficiency
    validatedData=validators.space_efficiency(cleanedComponent.efficiencies.space, total_cost, "Mek-EMW");
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.efficiencies.space=validatedData.data;

    return {data:cleanedComponent,alerts:alerts};
};

export {validateComponent};