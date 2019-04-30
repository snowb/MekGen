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

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    let alerts=[];
    //loop thru independent validations
    validatedData=validators.reflector("quality_value",cleanedComponent.selected_reflector);
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.selected_reflector=validatedData.data;

    let total_cost=cleanedComponent.selected_reflector.cost;
    validatedData=validators.space_efficiency(cleanedComponent.efficiencies.space, total_cost, "Mek-Reflector");
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.efficiencies.space=validatedData.data;
    //update static values
    cleanedComponent.damage_capacity=cleanedComponent.selected_reflector.quality_value;
    cleanedComponent.weight=cleanedComponent.damage_capacity/2;

    return {data:cleanedComponent, alerts:alerts};
};

export {validateComponent};