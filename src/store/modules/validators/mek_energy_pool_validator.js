let validators={};

import(/* webpackChunkName: "mek_energy_pool-size-data-module" */
    "@/data_table_modules/mek_energy_pool/mek_energy_pool-size-data-module")
.then((_module)=>
{
    validators.size=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_energy_pool-pool-data-module" */
    "@/data_table_modules/mek_energy_pool/mek_energy_pool-pool-data-module")
.then((_module)=>
{
    validators.pool=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_energy_pool-feature-data-module" */
    "@/data_table_modules/mek_energy_pool/mek_energy_pool-feature-data-module")
.then((_module)=>
{
    validators.feature=_module.cleaned_feature;
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
    //update static values
    let isFragile=cleanedComponent.feature_array.some((_val)=>
    {
        return _val.feature=="Fragile";
    });
    let newDamageCapacity=isFragile?1:cleanedComponent.selected_energy_pool.damage_capacity;
    if(cleanedComponent.damage_capacity!=newDamageCapacity)
    {//validate damage capacity
        alerts.push("Mek-Energy_Pool: damage_capacity");
        alerts.push("**** Invalid Damage Capacity. Correcting. ****");
        cleanedComponent.damage_capacity=newDamageCapacity;
    }
    let newWeight=cleanedComponent.selected_energy_pool.damage_capacity/2;
    if(cleanedComponent.weight!=newWeight)
    {//validate weight
        alerts.push("Mek-Energy_Pool: weight");
        alerts.push("**** Invalid Weight. Correcting. ****");
        cleanedComponent.weight=newWeight;
    }
    let newCost=(cleanedComponent.selected_energy_pool.cost * cleanedComponent.cost_multiplier)
            + cleanedComponent.efficiencies.space.cost;
    if(cleanedComponent.cost!=newCost)
    {//validate weight
        alerts.push("Mek-Energy_Pool: cost");
        alerts.push("**** Invalid Cost. Correcting. ****");
        cleanedComponent.cost=newCost;
    }
    let isMorphable=cleanedComponent.feature_array.some((_val)=>
    {
        return _val.feature=="Morphable";
    });
    switch(true)
    {
        case isMorphable && (cleanedComponent.selected_morphable===undefined || !cleanedComponent.selected_morphable):
        case !isMorphable && cleanedComponent.selected_morphable:
            alerts.push("Mek-Energy_Pool: Morphable");
            alerts.push("**** Invalid Morphable data. Correcting. ****");
            cleanedComponent.selected_morphable=isMorphable;
    }

    return {data:cleanedComponent,alerts:alerts};
};

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    let updateList=["selected_portfolio_size","feature_array"];
    let loopAlerts;
    let alerts=[];
    //loop thru independent validations
    let componentsToValidate=
    [
        {validator:validators.pool,pkey:"power_available",component_prop:"selected_energy_pool"},
        {validator:validators.size,pkey:"size",component_prop:"selected_portfolio_size"},
        {validator:validators.feature,pkey:"feature",component_prop:'feature_array'},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts)
    //update cost_multipliers for components needing update
    validatedData=updateMultipliers(updateList,cleanedComponent,"Mek-Energy_Pool");
    cleanedComponent.cost_multipliers=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    //validate space efficiency
    let cost_multiplier=Object.entries(cleanedComponent.cost_multipliers).reduce((_multi, _val)=>
    {//calc new cost_multiplier
        return _multi*_val[1];
    },1);
    cleanedComponent.cost_multiplier=round(cost_multiplier,2);
    let total_cost=cleanedComponent.selected_energy_pool.cost * cleanedComponent.cost_multiplier;
    validatedData=validators.space_efficiency(cleanedComponent.efficiencies.space, total_cost, "Mek-Energy_Pool");
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.efficiencies.space=validatedData.data;
    //update derived values
    validatedData=validators.derived(cleanedComponent);
    cleanedComponent=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);

    return {data:cleanedComponent,alerts:alerts};
};

export {validateComponent};