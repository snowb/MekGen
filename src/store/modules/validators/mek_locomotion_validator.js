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

    cleanedComponent.damage_capacity=cleanedComponent.selected_locomotion_class.kills;
    cleanedComponent.weight=cleanedComponent.damage_capacity/2;
    
    return {data:cleanedComponent,alerts:alerts};
};

export {validateComponent};