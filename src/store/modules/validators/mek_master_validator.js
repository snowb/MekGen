let alerts=[];

let validators={};
//load mek_armor validators from module
// import(/* webpackChunkName: "[request]" */"./mek_armor_validators")
// .then((_module)=>
// {
//     validators.mek_armor=_module.validators;
// });

let importValidator=(_module_name, _validator_prop_name)=>
{
    import(/* webpackChunkName: "[request]" */`${_module_name}`)
    .then((_module)=>
    {
        validators[_validator_prop_name]=_module.validators;
    });
};

let module_list=
[
    {module_name:"./mek_armor_validators",validator_prop_name:"mek_armor"},
    {module_name:"./mek_servo_validators",validator_prop_name:"mek_servo"},
];
module_list.forEach((_val)=>
{
    importValidator(_val.module_name,_val.validator_prop_name);
});

let validateServo=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    //validate servo-type
    validatedData=validators.mek_servo.type("type",_component.selected_servo_type);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_servo_type=validatedData.data;
    //validate servo-class
    validators.mek_servo.create_class_table(_component.selected_servo_type.type);
    validatedData=validators.mek_servo.servo("code",_component.selected_servo_class);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_servo_class=validatedData.data;
    //validate servo-kills-space-trade
    let trade_formatted=
        {
            kills:_component.kills_space_trade.kills_modifier,
            space:_component.kills_space_trade.space_modifier,
            cost:_component.kills_space_trade.cost
        };
    validatedData=validators.mek_servo.trade(
        trade_formatted,
        _component.selected_servo_class.kills,
        _component.selected_servo_class.space);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.kills_space_trade=validatedData.data;
    //validate armor
    validators.mek_armor.armor_filter(_component.selected_servo_class.code+2);
    validatedData=validators.mek_armor.armor("code",_component.selected_armor);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_armor=validatedData.data;
    //validate armor-type
    validatedData=validators.mek_armor.type("damage_coefficient",_component.selected_armor_type);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_armor_type=validatedData.data;
    //validate RAM
    validatedData=validators.mek_armor.RAM("absorption",_component.selected_absorption);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_absorption=validatedData.data;
    return cleanedComponent;
};

let validateComponent=(_component)=>
{
    //console.log(_component);
    let cleanedComponent;

    //console.log(cleanedComponent.selected_armor)
    /* *
    *
    * need to find a good way to 'scan' a provided component, with focused validation
    * likely need to have a decent switch for component_category
    * then component_type
    * then mass-validate known props
    *   also need to check for undefined?  
    * 
    * 
    * finally return the cleaned/validate component
    * 
    * */
   if(_component.component_category=="equipment")
   {//validate equipment
        switch(_component.component_type)
        {
            case "servo":
                cleanedComponent=validateServo(_component);
                break;
            case "beam":
                //damage
                //accuracy
                //brust val
                //range mod
                //warm up time
                //shots (>0)
                //wide angle
                //features
                //efficiency!?
                break;
            case "emw":
                //damage
                //accuracy
                //atk factor
                //turns in use
                //features
                //efficiency!?
                break;
            case "melee":
                //damage
                //accuracy
                //entangle range trade
                //features
                //efficiency!?
                break;
            case "missile":
                //damage
                //accuracy
                //range mod
                //pack size (>0)
                //smart
                //skill (only with Smart >=1)
                //blast radius
                //features
                //efficiency!?
                break;
            case "projectile":
                //damage
                //accuracy
                //burst val
                //multi-feed
                //range mod
                //features
                //efficiency!?
                break;
            case "magazine":
                //gun??
                //ammo table/feature
                //shots (>0)
                break;
            case "energy_pool":
                //energy_pool
                //portfolio size
                //feature
                //efficiency!?
                break;
            case "shield":
                //class
                //def ability, STANDARD ONLY
                //binder, STD and ACTVE ONLY
                //armor type, STD and ACTVE ONLY
                //RAM, STD and ACTVE ONLY
                //weakness, REACTIVE ONLY
                //reset time, REACTIVE ONLY
                //turns in use, REACTIVE ONLY
                //efficiency!?
                break;
            case "reflector":
                //quality
                //efficiency!?
                break;
            case "locomotion":
                //type
                //class
                break;
        }
   }
   return cleanedComponent;
};

let getAlerts=()=>alerts;

export {validateComponent, getAlerts};