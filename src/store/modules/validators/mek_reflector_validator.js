let validators={};

import(/* webpackChunkName: "mek_reflector-data-module" */"@/data_table_modules/mek_reflector/mek_reflector-data-module")
.then((_module)=>
{
    validators.reflector=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_space-efficiency-data-module" */"@/data_table_modules/universal/mek_space-efficiency-data-module")
.then((_module)=>
{
    validators.space_efficiency=_module.validate_efficiency;
});

let round;
import(/* webpackChunkName: "validator_functions" */"./validator_functions")
.then((_module)=>
{
    ({round} = _module);
});

validators.derived=(_component)=>
{
    let cleanedComponent=_component;
    let alerts=[];
    //update static values
    if(cleanedComponent.damage_capacity!=cleanedComponent.selected_reflector.quality_value)
    {//validate damage capacity
        alerts.push("Mek-Reflector: damage_capacity");
        alerts.push("**** Invalid Damage Capacity. Correcting. ****");
        cleanedComponent.damage_capacity=cleanedComponent.selected_reflector.quality_value;
    }
    if(cleanedComponent.weight!=cleanedComponent.damage_capacity/2)
    {//validate weight
        alerts.push("Mek-Reflector: weight");
        alerts.push("**** Invalid Weight. Correcting. ****");
        cleanedComponent.weight=cleanedComponent.damage_capacity/2;
    }
    let newCost=cleanedComponent.selected_reflector.cost + cleanedComponent.efficiencies.space.cost;
    newCost=round(newCost,2);
    if(cleanedComponent.cost!=newCost)
    {//validate weight
        alerts.push("Mek-Reflector: cost");
        alerts.push("**** Invalid Cost. Correcting. ****");
        cleanedComponent.cost=newCost;
    }

    return {data:cleanedComponent,alerts:alerts};
};

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    let alerts=[];
    //loop thru independent validations
    validatedData=validators.reflector("quality_value",cleanedComponent.selected_reflector);
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.selected_reflector=validatedData.data;

    let base_cost=cleanedComponent.selected_reflector.cost;
    validatedData=validators.space_efficiency(cleanedComponent.efficiencies.space, base_cost, "Mek-Reflector");
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.efficiencies.space=validatedData.data;
    validatedData=validators.derived(cleanedComponent);
    cleanedComponent=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);

    return {data:cleanedComponent, alerts:alerts};
};

export {validateComponent};