let validators={};

import(/* webpackChunkName: "mek_ammo-list-data-module" */
    "@/data_table_modules/mek_magazine/mek_ammo-list-data-module")
.then((_module)=>
{
    validators.filter_data_table=_module.filter_data_table;
    validators.ammo=_module.cleaned_feature;
});

let updateMultipliers, round;
import(/* webpackChunkName: "validator_functions" */"./validator_functions")
.then((_module)=>
{
    ({updateMultipliers, round} = _module);
});

validators.derive=(_component)=>
{
    let cleanedComponent=_component;
    let alerts=[];

    let newShots=parseInt(cleanedComponent.selected_shots);
    if(cleanedComponent.selected_shots!=newShots)
    {//validate shots
        alerts.push("Mek-Magazine: selected_shots");
        alerts.push("**** Invalid Selected Shots. Correcting. ****");
        cleanedComponent.selected_shots=isNaN(newShots) ? 1 : newShots;
    }
    let newBaseCost=round(cleanedComponent.selected_gun.cost*0.01*cleanedComponent.selected_shots);
    if(cleanedComponent.base_cost!=newBaseCost)
    {//validate base_cost
        alerts.push("Mek-Magazine: base_cost");
        alerts.push("**** Invalid Base Cost. Correcting. ****");
        cleanedComponent.base_cost=newBaseCost;
    }
    if(cleanedComponent.damage_capacity!=newBaseCost)
    {//validate damage_capacity
        alerts.push("Mek-Magazine: damage_capacity");
        alerts.push("**** Invalid Base Damage Capacity. Correcting. ****");
        cleanedComponent.damage_capacity=newBaseCost;
    }
    let newCost=newBaseCost * cleanedComponent.cost_multiplier;
    if(cleanedComponent.cost!=newCost)
    {//validate cost
        alerts.push("Mek-Magazine: cost");
        alerts.push("**** Invalid Cost. Correcting. ****");
        cleanedComponent.cost=newCost;
    }
    let newWeight=newBaseCost/2;
    if(cleanedComponent.weight!=newWeight)
    {//validate weight
        alerts.push("Mek-Magazine: weight");
        alerts.push("**** Invalid Weight. Correcting. ****");
        cleanedComponent.weight=newWeight;
    }
    return {data:cleanedComponent,alerts:alerts};
};

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
    if(cleanedComponent.hasBlast!=hasBlastRadius)
    {//validate blast radius prop
        alerts.push("Mek-Magazine: hasBlast");
        alerts.push("**** Invalid hasBlast. Correcting. ****");
        cleanedComponent.hasBlast=hasBlastRadius;
    }
    //validate ammo array
    let validatedData=validators.ammo(cleanedComponent.feature_array,"type");
    cleanedComponent.feature_array=validatedData.cleaned_array;
    alerts=alerts.concat(validatedData.alerts);

    //update cost_multipliers for components needing update
    validatedData=updateMultipliers(updateList,cleanedComponent,"Mek-Magazine");
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