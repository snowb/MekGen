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
        validators[_validator_prop_name]=_module;
    });
};

let module_list=
[
    //mek_armor is sub-comp used in servo and shield
    //{module_name:"./mek_armor_validator",validator_prop_name:"mek_armor"},
    {module_name:"./mek_servo_validator",validator_prop_name:"mek_servo"},//import mek_servo validator
    {module_name:"./mek_beam_validator",validator_prop_name:"mek_beam"},//import mek_beam validator
];
module_list.forEach((_val)=>
{
    importValidator(_val.module_name,_val.validator_prop_name);
});

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
                //cleanedComponent=validateServo(_component);
                cleanedComponent=validators.mek_servo.validateComponent(_component);
                alerts.concat(validators.mek_servo.getAlerts());
                break;
            case "beam":
                cleanedComponent=validators.mek_beam.validateComponent(_component);
                alerts.concat(validators.mek_beam.getAlerts());
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