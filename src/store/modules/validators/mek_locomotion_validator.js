let validators={};

import(/* webpackChunkName: "mek_locomotion-class-data-module" */
    "@/data_table_modules/mek_locomotion/mek_locomotion-class-data-module")
.then((_module)=>
{
    validators.create_class_table=_module.create_data_table;
    validators.class=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_locomotion-type-data-module" */
    "@/data_table_modules/mek_locomotion/mek_locomotion-type-data-module")
.then((_module)=>
{
    validators.type=_module.cleaned_feature;
});

validators.derived=(_component)=>
{
    let cleanedComponent=_component;
    let alerts=[];
    let newDamageCapacity=cleanedComponent.selected_locomotion_class.kills;
    if(cleanedComponent.damage_capacity!=newDamageCapacity)
    {//validate damage_capacity
        alerts.push("Mek-Locomotion: damage_capacity");
        alerts.push("**** Invalid Damage Capacity. Correcting. ****");
        cleanedComponent.damage_capacity=newDamageCapacity;
    }
    if(cleanedComponent.weight!=newDamageCapacity/2)
    {//validate weight
        alerts.push("Mek-Locomotion: weight");
        alerts.push("**** Invalid Weight. Correcting. ****");
        cleanedComponent.weight=newDamageCapacity/2;
    }
    let newCost=cleanedComponent.selected_locomotion_class.cost;
    if(cleanedComponent.cost!=newCost)
    {//validate cost
        alerts.push("Mek-Locomotion: cost");
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
    //validate type
    validatedData=validators.type("type",cleanedComponent.selected_locomotion_type);
    cleanedComponent.selected_locomotion_type=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    //update class data
    validators.create_class_table(cleanedComponent.selected_locomotion_type.type);
    //validate class data
    validatedData=validators.class("name",cleanedComponent.selected_locomotion_class);
    cleanedComponent.selected_locomotion_class=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    validatedData=validators.derived(cleanedComponent);
    cleanedComponent=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    
    return {data:cleanedComponent,alerts:alerts};
};

export {validateComponent};