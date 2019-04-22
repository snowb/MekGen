let validators={};
let alerts=[];

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

let runValidator=(_validator, _pkey, _component)=>
{
    return _validator(_pkey,_component);
};

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    let componentsToValiate=
    [
        {validator:validators.servo_type,pkey:"type",component_prop:"selected_servo_type"},
        {validator:validators.armor_type,pkey:"damage_coefficient",component_prop:"selected_armor_type"},
        {validator:validators.armor_RAM,pkey:"absorption",component_prop:'selected_absorption'},
    ];
    componentsToValiate.forEach((_val)=>
    {//loop thru and validate mek_servo-type, mek_armor-type, and mek_armor-RAM
        validatedData=runValidator(_val.validator,_val.pkey,_component[_val.component_prop]);
        cleanedComponent[_val.component_prop]=validatedData.data;
        alerts=alerts.concat(validatedData.alerts);
    });
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
    //update armor based on servo class
    validators.armor_filter(_component.selected_servo_class.code+2);
    //validate armor
    validatedData=validators.armor("code",_component.selected_armor);
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.selected_armor=validatedData.data;

    return cleanedComponent;
};

let getAlerts=()=>
{
    return alerts;
};

export {validateComponent, getAlerts};