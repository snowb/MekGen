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
    {module_name:"./mek_beam_validators",validator_prop_name:"mek_beam"},
];
module_list.forEach((_val)=>
{
    importValidator(_val.module_name,_val.validator_prop_name);
});

let runValidator=(_validator, _pkey, _component)=>
{
    return _validator(_pkey,_component);
};

let validateServo=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    let componentsToValiate=
    [
        {validator:validators.mek_servo.type,pkey:"type",component_prop:"selected_servo_type"},
        {validator:validators.mek_armor.type,pkey:"damage_coefficient",component_prop:"selected_armor_type"},
        {validator:validators.mek_armor.RAM,pkey:"absorption",component_prop:'selected_absorption'},
    ];
    componentsToValiate.forEach((_val)=>
    {//loop thru and validate mek_servo-type, mek_armor-type, and mek_armor-RAM
        validatedData=runValidator(_val.validator,_val.pkey,_component[_val.component_prop]);
        cleanedComponent[_val.component_prop]=validatedData.data;
        alerts=alerts.concat(validatedData.alerts);
    });
    //update mek_servo class table based on mek servo type
    validators.mek_servo.create_class_table(_component.selected_servo_type.type);
    //validate servo-class
    validatedData=validators.mek_servo.servo("code",_component.selected_servo_class);
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
    validatedData=validators.mek_servo.trade(
        trade_formatted,
        _component.selected_servo_class.kills,
        _component.selected_servo_class.space);
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.kills_space_trade=validatedData.data;
    //update armor based on servo class
    validators.mek_armor.armor_filter(_component.selected_servo_class.code+2);
    //validate armor
    validatedData=validators.mek_armor.armor("code",_component.selected_armor);
    alerts=alerts.concat(validatedData.alerts);
    cleanedComponent.selected_armor=validatedData.data;

    return cleanedComponent;
};

let validateBeam=(_component)=>
{
    let cleanedComponent=_component;
    let validatedData;
    /**
     * 
     * implement array-of-objects componentsToValidate
     * implement runValidator forEach loop of above
     * 
     */
    //validate damage
    validatedData=validators.mek_beam.damage("damage",_component.selected_damage);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_damage=validatedData.data;
    //extract base range for range_mod update
    let base_range=cleanedComponent.selected_damage.range;
    //update range_mod table
    validators.mek_beam.update_range_mod(base_range);
    //validate range mod
    validatedData=validators.mek_beam.range_mod("range_mod",_component.selected_range_mod);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_range_mod=validatedData.data;
    //validate burst_value
    validatedData=validators.mek_beam.burst_value("burst_value",_component.selected_burst_value);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_burst_value=validatedData.data;
    //extract BV for feature data table update
    let burst_value=cleanedComponent.selected_burst_value.burst_value;
    //update feature table
    validators.mek_beam.filter_feature(burst_value);
    //validate features
    validatedData=validators.mek_beam.feature(_component.feature_array,"feature");
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.feature_array=validatedData.cleaned_array;
    //extract if Mag-Fed
    let magFed=cleanedComponent.feature_array.some(_val=>_val.feature=="Mag-Fed");
    //update shots table
    validators.mek_beam.update_shots(magFed);
    //validate shots
    validatedData=validators.mek_beam.shots("shots",_component.selected_shots);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_shots=validatedData.data;
    //validate accuracy
    validatedData=validators.mek_beam.accuracy("accuracy",_component.selected_accuracy);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_accuracy=validatedData.data;
    //validate warm-up
    validatedData=validators.mek_beam.warm_up("time",_component.selected_warm_up_time);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_warm_up_time=validatedData.data;
    //validate wide-angle
    validatedData=validators.mek_beam.wide_angle("angle",_component.selected_wide_angle);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_wide_angle=validatedData.data;

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
                cleanedComponent=validateBeam(_component);
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