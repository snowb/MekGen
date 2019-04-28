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

let loopValidators, updateMultipliers, round;
import(/* webpackChunkName: "validator_functions" */"./validator_functions")
.then((_module)=>
{
    ({loopValidators, updateMultipliers, round} = _module);
});

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let loopAlerts;
    let alerts=[];
    //loop thru independent validations
    let componentsToValidate=
    [
        {validator:validators.type,pkey:"type",component_prop:"selected_locomotion_type"},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts)
    //update class data
    validators.create_class_table(cleanedComponent.selected_locomotion_type.type);
    //validate class data
    componentsToValidate=
    [
        {validator:validators.class,pkey:"name",component_prop:"selected_locomotion_class"},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts)

    cleanedComponent.damage_capacity=cleanedComponent.selected_locomotion_class.kills;
    cleanedComponent.weight=cleanedComponent.damage_capacity/2;

    return {data:cleanedComponent,alerts:alerts};
};

export {validateComponent};