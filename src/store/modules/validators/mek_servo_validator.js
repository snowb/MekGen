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

validators.derived=(_component)=>
{//component unique derived value validation
    let cleanedComponent=_component;
    let alerts=[];
    let updateList=["selected_armor_type","selected_absorption"];
    //update multipliers
    let validatedData=updateMultipliers(updateList,cleanedComponent,"Mek-Servo");
    cleanedComponent.cost_multipliers.armor=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);
    let cost_multiplier=Object.entries(cleanedComponent.cost_multipliers.armor).reduce((_multi, _val)=>
    {//calc new cost_multiplier
        return _multi*_val[1];
    },1);
    cost_multiplier=round(cost_multiplier,2);
    if(cleanedComponent.armor_cost_multiplier!=cost_multiplier)
    {//correct cost_multiplier if mismatch
        alerts.push("Mek-Servo: cost_multiplier.armor");
        alerts.push("**** Invalid Armor Cost Multiplier. Correcting. ****");
        cleanedComponent.armor_cost_multiplier=cost_multiplier;
    }
    let newCost=cleanedComponent.selected_servo_class.cost
                + (cleanedComponent.selected_armor.cost * cleanedComponent.armor_cost_multiplier)
                + cleanedComponent.kills_space_trade.cost;
    newCost=round(newCost,2);
    if(cleanedComponent.cost!=newCost)
    {//correct cost if mismatch
        alerts.push("Mek-Servo: cost");
        alerts.push("**** Invalid Cost. Correcting. ****");
        cleanedComponent.cost=newCost;
    }
    let newWeight=(cleanedComponent.total_kills + cleanedComponent.selected_armor.stopping_power)/2;
    newWeight=round(newWeight,2);
    if(cleanedComponent.weight!=newWeight)
    {//correct weight if mismatch
        alerts.push("Mek-Servo: weight");
        alerts.push("**** Invalid Weight. Correcting. ****");
        cleanedComponent.weight=newWeight;
    }
    // update total kills
    let newTotalKills=cleanedComponent.selected_servo_class.kills 
                        + cleanedComponent.kills_space_trade.kills_modifier;
    if(cleanedComponent.total_kills!=newTotalKills)
    {
        alerts.push("Mek-Servo: total_kills");
        alerts.push("**** Invalid Total Kills. Correcting. ****");
        cleanedComponent.total_kills=newTotalKills
    }
    // update available_space
    let newAvailSpace=cleanedComponent.selected_servo_class.space 
                        + cleanedComponent.kills_space_trade.space_modifier;
    if(cleanedComponent.available_space!=newAvailSpace)
    {
        alerts.push("Mek-Servo: available_space");
        alerts.push("**** Invalid Available Space. Correcting. ****");
        cleanedComponent.available_space=newAvailSpace
    }
        
    return {data:cleanedComponent,alerts:alerts}
};

let validateComponent=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    //let updateList=["selected_armor_type","selected_absorption"];
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
    //update armor based on servo class
    validators.armor_filter(_component.selected_servo_class.code+2);
    //validate armor
    validatedData=validators.armor("code",_component.selected_armor);
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.selected_armor=validatedData.data;
    //validate derived data
    validatedData=validators.derived(cleanedComponent);
    cleanedComponent=validatedData.data;
    alerts=alerts.concat(validatedData.alerts);

    return {data:cleanedComponent, alerts:alerts};
};

export {validateComponent};