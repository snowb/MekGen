let validators={};

import(/* webpackChunkName: "mek_ammo-list-data-module" */
    "@/data_table_modules/mek_magazine/mek_ammo-list-data-module")
.then((_module)=>
{
    validators.filter_data_table=_module.filter_data_table;
    validators.ammo=_module.cleaned_feature;
});

let updateMultipliers;
import(/* webpackChunkName: "validator_functions" */"./validator_functions")
.then((_module)=>
{
    ({updateMultipliers} = _module);
});

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let updateList=["feature_array"];
    let alerts=[];
    let hasBlastRadius=cleanedComponent.feature_array.some((_feat)=>
    {
        return /blast/gi.test(_feat.feature);
    });
    validators.filter_data_table(hasBlastRadius);
    //validate ammo array
    let validatedData=validators.ammo(cleanedComponent.feature_array,"type");
    cleanedComponent.feature_array=validatedData.cleaned_array;
    alerts=alerts.concat(validatedData.alerts);

    //update cost_multipliers for components needing update
    validatedData=updateMultipliers(updateList,cleanedComponent);
    cleanedComponent.cost_multipliers=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    //validate space efficiency
    cleanedComponent.cost_multiplier=Object.entries(cleanedComponent.cost_multipliers).reduce((_multi, _val)=>
    {//calc new cost_mulitplier
        return _multi*_val[1];
    },1);
    cleanedComponent.cost=cleanedComponent.selected_gun.cost * cleanedComponent.cost_multiplier;
    
    return {data:cleanedComponent,alerts:alerts};
};

export {validateComponent};