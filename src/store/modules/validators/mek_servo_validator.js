let validators={};

import(/* webpackChunkName: "mek_servo-class-data-module" */"@/data_table_modules/mek_servo/mek_servo-class-data-module.js")
.then((_module)=>
{
    validators.servo_class=_module.cleaned_feature;
    validators.create_class_table=_module.create_class_data_table;
});

import(/* webpackChunkName: "mek_servo-kills-space-trade-data-module" */"@/data_table_modules/mek_servo/mek_servo-kills-space-trade-data-module.js")
.then((_module)=>
{
    validators.servo_trade=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_servo-type-data-module" */"@/data_table_modules/mek_servo/mek_servo-type-data-module.js")
.then((_module)=>
{
    validators.servo_type=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_armor-data-module" */"@/data_table_modules/mek_armor/mek_armor-data-module.js")
.then((_module)=>
{
    validators.armor=_module.cleaned_feature;
    validators.armor_filter=_module.filter_data_table;
});

import(/* webpackChunkName: "mek_armor-type-data-module" */"@/data_table_modules/mek_armor/mek_armor-type-data-module.js")
.then((_module)=>
{
    validators.armor_type=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_armor-RAM-data-module" */"@/data_table_modules/mek_armor/mek_armor-RAM-data-module.js")
.then((_module)=>
{
    validators.armor_RAM=_module.cleaned_feature;
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
    let validatedData;
    let updateList=["selected_armor_type","selected_absorption"];
    let loopAlerts;
    let alerts=[];
    let componentsToValidate=
    [
        {validator:validators.servo_type,pkey:"type",component_prop:"selected_servo_type",skipUpdateList:true},
        {validator:validators.armor_type,pkey:"damage_coefficient",component_prop:"selected_armor_type",},
        {validator:validators.armor_RAM,pkey:"absorption",component_prop:'selected_absorption'},
    ];
    ({cleanedComponent, loopAlerts} = loopValidators(componentsToValidate, cleanedComponent));
    alerts=alerts.concat(loopAlerts)
    //update mek_servo class table based on mek servo type
    validators.create_class_table(_component.selected_servo_type.type);
    //validate servo-class
    validatedData=validators.servo_class("code",_component.selected_servo_class);
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.selected_servo_class=validatedData.data;
    //generate properly formatted kill-space-trade data
    let trade_formatted=
        {
            kills:_component.kills_space_trade.kills_modifier,
            space:_component.kills_space_trade.space_modifier,
            cost:_component.kills_space_trade.cost
        };
    //validate servo-kills-space-trade
    validatedData=validators.servo_trade(
        trade_formatted,
        _component.selected_servo_class.kills,
        _component.selected_servo_class.space);
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.kills_space_trade=validatedData.data;
    // update total kills and available_space
    cleanedComponent.total_kills=cleanedComponent.selected_servo_class.kills + cleanedComponent.kills_space_trade.kills_modifier;
    cleanedComponent.available_space=cleanedComponent.selected_servo_class.space + cleanedComponent.kills_space_trade.space_modifier;
    //update armor based on servo class
    validators.armor_filter(_component.selected_servo_class.code+2);
    //validate armor
    validatedData=validators.armor("code",_component.selected_armor);
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.selected_armor=validatedData.data;

    cleanedComponent=updateMultipliers(updateList,cleanedComponent);
    //validate space efficiency
    let cost_multiplier=Object.entries(cleanedComponent.cost_multipliers).reduce((_multi, _val)=>
    {//calc new cost_mulitplier
        return _multi*_val[1];
    },1);
    cleanedComponent.cost_multiplier.armor=round(cost_multiplier,2);
    cleanedComponent.weight=(cleanedComponent.total_kills + cleanedComponent.selected_armor.stopping_power)/2;
    cleanedComponent.cost=cleanedComponent.selected_servo_class.cost
                          + (cleanedComponent.selected_armor.cost * cleanedComponent.cost_multiplier.armor)
                          + cleanedComponent.kills_space_trade.cost;
    cleanedComponent.component_name=cleanedComponent.custom_name ? cleanedComponent.component_name : null;
    return {data:cleanedComponent, alerts:alerts};
};

export {validateComponent};